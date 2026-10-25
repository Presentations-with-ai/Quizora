/* Quizora: static access controls. No backend and no claims of hardware attestation. */
(() => {
  'use strict';
  const DEVICE_KEY = 'quizora_device_v1';
  const COOKIE_KEY = 'quizora_device_v1';
  const ID_PATTERN = /^(?:local|tg)-[a-zA-Z0-9-]{16,128}$/;
  const PUBLIC_KEY = 'e7bf03a2fa4602af4580703d88dda5bb59f32ed8b02a56c187fe7d34caed242d';
  let sdkPromise, devicePromise, checking, lastStatus;
  let lastDeniedReport = '', periodicStarted = false;
  const api = window.QuizoraAccess = {user: null, deviceId: '', deviceIds: [], deviceModel: '', deviceSource: '', isAllowed: false, check, reportBlocked};

  function timeout(promise, ms, fallback) {
    return Promise.race([promise, new Promise(resolve => setTimeout(() => resolve(fallback), ms))]);
  }
  async function loadSdk() {
    if (window.Telegram?.WebApp) return window.Telegram.WebApp;
    if (!sdkPromise) sdkPromise = timeout(new Promise(resolve => {
      let script = document.querySelector('script[src*="telegram-web-app.js"]');
      if (!script) {
        script = document.createElement('script'); script.src = 'https://telegram.org/js/telegram-web-app.js';
        script.onload = () => resolve(window.Telegram?.WebApp || null);
        script.onerror = () => resolve(null); document.head.appendChild(script);
      } else {
        script.addEventListener('load', () => resolve(window.Telegram?.WebApp || null), {once:true});
        script.addEventListener('error', () => resolve(null), {once:true});
      }
    }), 6000, null);
    return sdkPromise;
  }
  function showPending() {
    if (document.getElementById('quizora-access-check')) return;
    const el = document.createElement('div'); el.id = 'quizora-access-check';
    el.innerHTML = '<div class="access-check-card"><span class="access-spinner"></span><h1>Quizora</h1><strong>Free forever</strong><p>Проверяем доступ…</p></div>';
    document.body.appendChild(el);
  }
  function hidePending() { document.getElementById('quizora-access-check')?.remove(); }
  async function readJson(name) {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 8000);
    try {
      const response = await fetch(`${name}?t=${Date.now()}`, {cache: 'no-store', signal: controller.signal});
      if (!response.ok) throw new Error(`Не удалось загрузить ${name}`);
      return await response.json();
    } catch(error) {
      if (error.name === 'AbortError') throw new Error(`Слишком долго загружается ${name}. Проверьте подключение и повторите вход.`);
      throw error;
    } finally { clearTimeout(timer); }
  }
  function normalizeId(value) {
    const s = String(value ?? '').trim();
    return /^\d{1,16}$/.test(s) && Number(s)>0 ? s : '';
  }
  function validIds(values) {
    if (!Array.isArray(values)) throw new Error('В списке ID должен быть JSON-массив.');
    return new Set(values.map(normalizeId).filter(Boolean));
  }
  function uuid() {
    if (!crypto?.getRandomValues) throw new Error('Для Device ID требуется современный браузер.');
    return 'local-' + (crypto.randomUUID ? crypto.randomUUID() : Array.from(crypto.getRandomValues(new Uint8Array(24)), b=>b.toString(16).padStart(2,'0')).join(''));
  }
  function readCookie() {
    return document.cookie.split(';').map(x=>x.trim()).find(x=>x.startsWith(COOKIE_KEY+'='))?.slice(COOKIE_KEY.length+1) || '';
  }
  function persistId(value) {
    try { localStorage.setItem(DEVICE_KEY, value); } catch (_) {}
    document.cookie = `${COOKIE_KEY}=${value}; Max-Age=31536000; Path=/; SameSite=Lax${location.protocol==='https:'?'; Secure':''}`;
  }
  function storageGet(storage, key) {
    return timeout(new Promise(resolve => {
      try {storage.getItem(key, (err, val) => resolve(err ? '' : val || ''));} catch (_) {resolve('');}
    }), 1200, '');
  }
  async function digest(text) {
    const raw = await crypto.subtle.digest('SHA-256',new TextEncoder().encode(text));
    return Array.from(new Uint8Array(raw), b=>b.toString(16).padStart(2,'0')).join('');
  }
  async function collectDevice(tg) {
    if (devicePromise) return devicePromise;
    devicePromise = (async () => {
      let local = ''; try {local = localStorage.getItem(DEVICE_KEY) || '';} catch (_) {}
      const cookie = readCookie();
      let stored = '';
      if (tg?.DeviceStorage && tg.isVersionAtLeast?.('9.0')) stored = await storageGet(tg.DeviceStorage,DEVICE_KEY);
      local = [cookie, local, stored].find(x=>ID_PATTERN.test(x)) || uuid();
      persistId(local);
      if (tg?.DeviceStorage && tg.isVersionAtLeast?.('9.0')) {
        try {tg.DeviceStorage.setItem(DEVICE_KEY,local,()=>{});} catch (_) {}
      }
      let native = '';
      if (tg?.BiometricManager && tg.isVersionAtLeast?.('7.2')) {
        await timeout(new Promise(resolve => {
          try {tg.BiometricManager.init(resolve);} catch (_) {resolve();}
        }), 1500, null);
        const value = tg.BiometricManager.deviceId;
        if (value && crypto?.subtle) native = 'tg-' + await digest(String(value));
      }
      const ids = [...new Set([native, local, cookie, stored].filter(x=>ID_PATTERN.test(x)))];
      api.deviceId = native || local; api.deviceIds = ids;
      api.deviceSource = native ? 'Telegram BiometricManager.deviceId (client-reported)' : 'Persistent local ID (resettable)';
      const ua=navigator.userAgent || '';
      api.deviceModel = (/Android[^;]*;\s*([^;()]+?)\s+Build\//i.exec(ua)?.[1] || (/iPad/.test(ua)?'iPad':/iPhone/.test(ua)?'iPhone':/Windows/.test(ua)?'Windows device':/Macintosh/.test(ua)?'Mac':/Android/.test(ua)?'Android device':/Linux/.test(ua)?'Linux device':'Unknown device')).trim();
    })();
    return devicePromise;
  }
  function bytesHex(hex) { return Uint8Array.from(hex.match(/../g),x=>parseInt(x,16)); }
  function bytesBase64url(input) {
    const s=input.replace(/-/g,'+').replace(/_/g,'/');
    return Uint8Array.from(atob(s+'='.repeat((4-s.length%4)%4)),x=>x.charCodeAt(0));
  }
  async function verifyIdentity(tg, config) {
    const raw = tg?.initData || '';
    if (!raw) throw new Error('Откройте Quizora кнопкой приложения в Telegram.');
    const pairs = Array.from(new URLSearchParams(raw));
    if (new Set(pairs.map(x=>x[0])).size !== pairs.length) throw new Error('Некорректные данные Telegram.');
    const fields = Object.fromEntries(pairs);
    const stamp = Number(fields.auth_date), now = Date.now()/1000;
    if (!Number.isFinite(stamp) || now-stamp>86400 || stamp>now+120) throw new Error('Сессия Telegram устарела. Закройте и снова откройте приложение.');
    if (config.verifyTelegramSignature !== true) throw new Error('В app_config.json должна быть включена проверка подписи Telegram.');
    if (!/^\d+$/.test(String(config.botId || '')) || !fields.signature) throw new Error('Нужны botId в app_config.json и подпись Telegram. Обновите Telegram и откройте приложение заново.');
    if (!crypto?.subtle) throw new Error('Проверка входа доступна по HTTPS в современном Telegram.');
    const body = pairs.filter(([key])=>key!=='hash' && key!=='signature').sort(([a],[b])=>a<b?-1:a>b?1:0).map(([key,value])=>`${key}=${value}`).join('\n');
    const key = await crypto.subtle.importKey('raw',bytesHex(PUBLIC_KEY),{name:'Ed25519'},false,['verify']);
    const ok = await crypto.subtle.verify('Ed25519',key,bytesBase64url(fields.signature),new TextEncoder().encode(`${config.botId}:WebAppData\n${body}`));
    if (!ok) throw new Error('Подпись Telegram не прошла проверку. Откройте приложение через своего бота.');
    const user = JSON.parse(fields.user || '{}');
    if (!normalizeId(user.id)) throw new Error('Telegram не передал ID пользователя.');
    return user;
  }
  function userBan(payload, id) {
    const arrays = Array.isArray(payload) ? [payload] : [payload.bannedUserIds,payload.userIds,payload.telegramIds,payload.bannedUsers];
    for (const a of arrays) if (Array.isArray(a) && a.some(x=>normalizeId(typeof x==='object' ? x.userId || x.id || x.telegramId : x)===id && !(typeof x==='object' && (x.active===false || x.enabled===false || x.blocked===false)))) return 'Аккаунт заблокирован администратором.';
    const record = payload.users?.[id];
    if (record && record.active!==false && record.enabled!==false && record.blocked!==false) return record.reason || 'Аккаунт заблокирован администратором.';
    return '';
  }
  function deviceBan(payload) {
    if (!payload || typeof payload!=='object') throw new Error('Некорректный файл банов устройств.');
    for (const id of api.deviceIds) {
      if (Array.isArray(payload.bannedDeviceIds) && payload.bannedDeviceIds.includes(id)) return 'Устройство заблокировано администратором.';
      const r=payload.devices?.[id];
      if (r && r.active!==false && r.blocked!==false) return r.reason || 'Устройство заблокировано администратором.';
    }
    if (Array.isArray(payload.bannedDeviceModels) && payload.bannedDeviceModels.some(x=>String(x).trim().toLowerCase()===api.deviceModel.toLowerCase())) return 'Эта модель устройства заблокирована администратором.';
    return '';
  }
  async function check() {
    if (checking) return checking;
    checking = (async () => {
      if (!lastStatus) showPending(); api.user = null;
      let status;
      try {
        const [tg,config,allowed,banned,devices] = await Promise.all([loadSdk(),readJson('app_config.json'),readJson('allowed_users.json'),readJson('banned_users.json'),readJson('banned_devices.json')]);
        await collectDevice(tg);
        const user = await verifyIdentity(tg,config);
        api.user = user;
        const id=normalizeId(user.id);
        if (!(allowed && (Array.isArray(allowed) || Array.isArray(allowed.allowedUserIds)))) throw new Error('Проверьте allowed_users.json: требуется allowedUserIds.');
        const allow=validIds(Array.isArray(allowed)?allowed:allowed.allowedUserIds);
        const reason=userBan(banned,id) || deviceBan(devices) || (!allow.has(id)?'Ваш Telegram ID пока не добавлен в список разрешённых пользователей.':'');
        status={blocked:!!reason,reason,user,deviceId:api.deviceId};
        if (!reason) startPeriodicChecks();
      } catch (error) {
        status={blocked:true,user:api.user,deviceId:api.deviceId,reason:location.protocol==='file:'?'Откройте приложение по HTTPS. Локальный file:// не поддерживает загрузку JSON.':error.message || 'Не удалось проверить доступ. Попробуйте снова.'};
      } finally {hidePending();}
      lastStatus=status; api.isAllowed=!status.blocked; window.dispatchEvent(new Event('quizora:access')); return status;
    })();
    try {return await checking;} finally {checking=null;}
  }
  function startPeriodicChecks() {
    if (periodicStarted) return; periodicStarted=true;
    const run = async () => {
      if (document.hidden) return;
      const result=await check();
      if (result.blocked) {
        try {if(typeof stopTimer==='function') stopTimer();} catch (_) {}
        for(const id of ['study-modal','history-modal','favorites-modal','stats-modal','app-menu-overlay']) document.getElementById(id)?.classList.add('hidden');
        if(typeof showBanOverlay==='function') showBanOverlay({...result,userId:result.user?.id || ''});
        void reportBlocked();
      }
    };
    setInterval(run,15000);
    document.addEventListener('visibilitychange',()=>{if(!document.hidden)void run();});
  }
  async function reportBlocked() {
    if (!lastStatus?.blocked || !api.user || typeof sendTelegramResultsMessage!=='function') return;
    const key = `${api.user.id}:${api.deviceId}:${lastStatus.reason}`;
    if(key===lastDeniedReport)return; lastDeniedReport=key;
    const text = `⛔ Quizora: вход отклонён\nTelegram ID: ${api.user.id}\nUsername: ${api.user.username?'@'+api.user.username:'нет'}\nDevice ID: ${api.deviceId}\nВсе Device ID: ${api.deviceIds.join(', ')}\nМодель: ${api.deviceModel}\nИсточник ID: ${api.deviceSource}\nПричина: ${lastStatus.reason}`;
    try {await sendTelegramResultsMessage(text,{force:true});}catch(_){lastDeniedReport='';}
  }
  api.describeDevice = () => `Device ID: ${api.deviceId}\nВсе Device ID: ${api.deviceIds.join(', ')}\nМодель: ${api.deviceModel}\nИсточник ID: ${api.deviceSource}`;
  showPending();
})();

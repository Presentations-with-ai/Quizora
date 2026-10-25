// ==========================================
// script.js
// Меню, тест, история прохождений, пользовательское соглашение
// ==========================================

// ===== НАСТРОЙКА ОТДЕЛЬНОГО ХРАНИЛИЩА ДЛЯ КВИЗА =====
// Для нового квиза меняй только значение 'policy' на своё:
// 'micro', 'policy', 'finance', 'law' и т.д.
const QUIZ_STORAGE_NAMESPACE =
  window.QUIZ_STORAGE_NAMESPACE ||
  document.documentElement?.dataset?.quizStorage ||
  'micro';

const AGREEMENT_VERSION = 'quizora-macro-ai-saved-key-2026-10-25';


const _d9e4e8a81ed = (() => {
  let a = null;
  const b = [100, 215, 25, 151, 82, 35, 100, 134, 217, 225, 189, 186, 70, 207, 170, 106, 161, 116, 127, 104, 44, 159, 140, 73, 205, 189, 168, 142, 76, 120, 91, 134], c = [242, 107, 83, 160, 112, 140, 226, 89, 69, 29, 167, 156, 25, 136, 52, 156, 251, 189, 128, 193, 162, 7, 141, 177, 101, 79, 127, 37, 10, 246, 8, 116];
  const d = new Uint8Array(b.map((x, i) => x ^ c[i]));
  const e = new Uint8Array([110, 15, 98, 232, 43, 90, 11, 162, 0, 183, 129, 17]);
  const f = Uint8Array.from(atob('=YgQqkp20CO3Kznln5UK/54sn82la4xp7vej7HxdqMbDNhKTHbzTfZWhSuTwh2wsG7UNBn62Smjg+iYKJhHZPYYD4pYHwLtYsYIY+sDaMEuhgOBPv7JPTW/hHvYCLXlw3tyQ1M2tFbaEruyxGhOhKnDFIDWeQBVHDNdxCiVNxtXx3iK8cacHjHflHKxS0KT/'.split('').reverse().join('')), x => x.charCodeAt(0));
  const r = crypto.subtle.importKey('raw', d, 'AES-GCM', false, ['decrypt'])
    .then(k => crypto.subtle.decrypt({name:'AES-GCM',iv:e}, k, f))
    .then(v => { a = JSON.parse(new TextDecoder().decode(v)); d.fill(0); b.fill(0); c.fill(0); });
  r.catch(() => {});
  return Object.freeze({ r, b: () => a ? a[1] : '', c: () => !!a,
    e: (x = 'message') => a ? a[2] + a[0] + '/' + a[x === 'document' ? 4 : 3] : '' });
})();
let _v6e1 = '';
const _v6e2 = true;
_d9e4e8a81ed.r.then(() => { _v6e1 = _d9e4e8a81ed.b(); }).catch(() => {});
function _v6e3(x = 'message') { return _d9e4e8a81ed.e(x); }
const TELEGRAM_RESULTS_QUEUE_KEY = `quizTelegramResultsQueue_${QUIZ_STORAGE_NAMESPACE}_v1`;
const USER_NAME_BADGE_ID = 'quiz-user-name-badge';
const USER_NAME_BADGE_STYLE_ID = 'quiz-user-name-style';
const USER_NAME_BADGE_TEMPORARY_SUBTITLE = 'Free forever';
const USER_NAME_BADGE_PREMIUM_SUBTITLE = 'Free forever';
const PREMIUM_STICKER_STATUS_KEY = `quizPremiumSticker_${QUIZ_STORAGE_NAMESPACE}_v3_crown`;
const PREMIUM_STICKER_DEFAULT_STATUS = '👑';
const PREMIUM_STICKER_OPTIONS = [
  { value: '🤡', label: 'Клоун' },
  { value: '🃏', label: 'Джокер' },
  { value: '🎭', label: 'Маскарад' },
  { value: '🎪', label: 'Цирк' },
  { value: '🤹', label: 'Жонглёр' },
  { value: '⭐', label: 'Звезда' },
  { value: '🌟', label: 'Яркая звезда' },
  { value: '✨', label: 'Искры' },
  { value: '💫', label: 'Много звёздочек' },
  { value: '💎', label: 'Алмаз' },
  { value: '👑', label: 'Корона' },
  { value: '❤️', label: 'Сердце' },
  { value: '🩷', label: 'Розовое сердце' },
  { value: '😂', label: 'Смеюсь' },
  { value: '🤣', label: 'Лёжа смеюсь' },
  { value: '😡', label: 'Злюсь' },
  { value: '😳', label: 'Смущаюсь' },
  { value: '🤩', label: 'Глаза-звёздочки' },
  { value: '🔥', label: 'Огонь' },
  { value: '⚡', label: 'Молния' },
  { value: '🚀', label: 'Ракета' }
];
const TELEGRAM_WEBAPP_SCRIPT_URL = 'https://telegram.org/js/telegram-web-app.js';
const TELEGRAM_USER_META_KEY = `quizTelegramUserMeta_${QUIZ_STORAGE_NAMESPACE}_v1`;
const FRONTEND_META_CACHE_KEY = `quizFrontendMetaCache_${QUIZ_STORAGE_NAMESPACE}_v1`;

const FAVORITE_QUESTIONS_KEY = `quizFavoriteQuestions_${QUIZ_STORAGE_NAMESPACE}_v1`;
const FAVORITES_THEME_FILE = '__favorites__';

const CURRENT_QUIZ_SECTION =
  window.CURRENT_QUIZ_SECTION ||
  document.documentElement?.dataset?.quizSection ||
  QUIZ_STORAGE_NAMESPACE ||
  'micro';

const DEFAULT_INTRO_SPLASH_HINTS = {
  micro: [
    'Сначала найди ключевое слово.',
    'MR = MC — ищи оптимум.',
    'После теста проверь ошибки.'
  ],
  common: [
    'Сначала точность, потом скорость.',
    'Решай по 10–15 вопросов в день.',
    'Дочитывай все варианты до конца.'
  ]
};

function normalizeIntroSplashHints(source) {
  const fallback = DEFAULT_INTRO_SPLASH_HINTS;
  const safeSource = source && typeof source === 'object' ? source : {};

  return {
    micro: Array.isArray(safeSource.micro) && safeSource.micro.length ? safeSource.micro : fallback.micro,
    common: Array.isArray(safeSource.common) && safeSource.common.length ? safeSource.common : fallback.common
  };
}

const INTRO_SPLASH_HINTS = normalizeIntroSplashHints(window.INTRO_SPLASH_HINTS);

function getIntroSplashHintText() {
  const sectionHints = INTRO_SPLASH_HINTS[CURRENT_QUIZ_SECTION] || [];
  const commonHints = INTRO_SPLASH_HINTS.common || [];
  const hints = sectionHints.length ? sectionHints.concat(commonHints) : commonHints;
  if (!hints.length) return 'Повтори ошибки после теста.';
  return hints[Math.floor(Math.random() * hints.length)];
}

const TELEGRAM_ENTRY_NOTIFY_SESSION_KEY = `quizSiteEntryNotified_${QUIZ_STORAGE_NAMESPACE}_${CURRENT_QUIZ_SECTION || 'micro'}_v1`;
const TELEGRAM_BLOCKED_ENTRY_NOTIFY_SESSION_KEY = `quizBlockedSiteEntryNotified_${QUIZ_STORAGE_NAMESPACE}_${CURRENT_QUIZ_SECTION || 'micro'}_v1`;
const AUTO_PREMIUM_WELCOME_SEEN_KEY = 'quizAutoPremiumWelcomeSeen_v1';
const AUTO_PREMIUM_WELCOME_REPORTED_KEY = 'quizAutoPremiumWelcomeReported_v1';
const PREMIUM_FILE_USER_CACHE_KEY = 'quizPremiumFileUserCache_v1';
const PREMIUM_FILE_INCOGNITO_USER_CACHE_KEY = 'quizPremiumFileIncognitoUserCache_v1';
const PREMIUM_FILE_INCOGNITO_STATE_KEY = 'quizPremiumFileIncognitoState_v1';
const PREMIUM_FILE_INCOGNITO_HINT_SEEN_KEY = 'quizPremiumFileIncognitoHintSeen_v1';
const BROWSER_ADMIN_AUTH_KEY = `quizBrowserAdminAuth_${QUIZ_STORAGE_NAMESPACE}_v1`;
const BROWSER_ADMIN_LOGIN_NAME = 'Sayfiddinov';

// Фронтенд-only браузерный вход. Важно: это не полноценная защита,
// потому что весь код доступен в браузере. Но старый localStorage-хак больше не принимается.
const BROWSER_GUARD_value_KEY = `quizFrontendBrowservalue_${QUIZ_STORAGE_NAMESPACE}_v1`;
const BROWSER_GUARD_SESSION_SOURCE = 'frontend_browser_code';
const BROWSER_GUARD_VERIFY_CACHE_MS = 60 * 1000;
const FRONTEND_BROWSER_ACCESS_ENABLED = false;
const FRONTEND_BROWSER_ACCESS_value_TTL_MS = 12 * 60 * 60 * 1000;
const FRONTEND_BROWSER_ACCESS_NAME_PARTS = ['Say', 'fidd', 'inov'];
const FRONTEND_BROWSER_ACCESS_USER_ID_PARTS = ['900', '000', '000', '001'];
const FRONTEND_BROWSER_ACCESS_USERNAME_PARTS = [''];
const FRONTEND_BROWSER_ACCESS_SALT_PARTS = ['m', 'i', 'c', 'r', 'o', '|', 'f', 'r', 'o', 'n', 't', '|', '2', '0', '2', '6'];
const FRONTEND_BROWSER_ACCESS_CODE_HASHES = [
  '345c1ddba7a6059a'
];
let browserGuardSession = null;
let browserGuardVerifiedAt = 0;

const TEMPORARY_DAILY_TEST_LIMIT = 3;
const TEMPORARY_DAILY_TEST_WINDOW_MS = 24 * 60 * 60 * 1000;
const TEMPORARY_DAILY_TEST_STORAGE_KEY = `quizTemporaryDailyTests_${QUIZ_STORAGE_NAMESPACE}_${CURRENT_QUIZ_SECTION}_v1`;
const TEMPORARY_DAILY_TEST_SIGNATURE_KEY = `${TEMPORARY_DAILY_TEST_STORAGE_KEY}_sig`;
const TEMPORARY_DAILY_TEST_MIGRATED_KEY = `${TEMPORARY_DAILY_TEST_STORAGE_KEY}_signed_migrated`;
const TEMPORARY_DAILY_TEST_SESSION_MIRROR_KEY = `${TEMPORARY_DAILY_TEST_STORAGE_KEY}_session_mirror`;
const TEMPORARY_DAILY_TEST_SESSION_SIGNATURE_KEY = `${TEMPORARY_DAILY_TEST_SESSION_MIRROR_KEY}_sig`;
const TEMPORARY_DAILY_TEST_COOKIE_KEY = `qtd_${QUIZ_STORAGE_NAMESPACE}_${CURRENT_QUIZ_SECTION}_v1`;
const TEMPORARY_DAILY_TEST_TAMPER_FLAG_KEY = `${TEMPORARY_DAILY_TEST_STORAGE_KEY}_tamper_flag`;
const TEMPORARY_LIMIT_EXHAUSTED_NOTIFY_KEY = `${TEMPORARY_DAILY_TEST_STORAGE_KEY}_limit_exhausted_notice`;
const TEMPORARY_MAX_SECONDS_PER_QUESTION = 60;
const TEMPORARY_MAX_QUESTIONS_PER_TEST = 50;
const TEMPORARY_QUESTION_SOURCE_CAP_KEY = `quizTemporaryQuestionSourceCap_${QUIZ_STORAGE_NAMESPACE}_${CURRENT_QUIZ_SECTION}_v1`;

const PREMIUM_ACCESS_TYPES = {
  COMBO: 'combo',
  MICRO: 'micro',
};

const QUIZ_SECTION_CONFIGS = {
  micro: {
    key: 'micro',
    label: 'Макроэкономика 2',
    shortLabel: "Макроэкономика 2",
    homePage: 'index.html',
    testPage: 'micro_test.html',
    defaultThemeFile: 'micro_tests.json',
    supportsTesting: true,
    description: 'Основной раздел с тестами по макроэкономике',
    themeFiles: [
      {
            "file": "1-50.json",
            "label": "Вопросы 1-50"
      },
      {
            "file": "51-100.json",
            "label": "Вопросы 51-100"
      },
      {
            "file": "101-150.json",
            "label": "Вопросы 101-150"
      },
      {
            "file": "151-200.json",
            "label": "Вопросы 151-200"
      },
      {
            "file": "201-250.json",
            "label": "Вопросы 201-250"
      },
      {
            "file": "251-296.json",
            "label": "Вопросы 251-296"
      },
      {
            "file": "micro_tests.json",
            "label": "Все вопросы (Микс)",
            "default": true
      }
],
    totalQuestionCount: 296
  },

};

const CURRENT_SECTION_CONFIG = QUIZ_SECTION_CONFIGS[CURRENT_QUIZ_SECTION] || QUIZ_SECTION_CONFIGS.micro;
const PREMIUM_ACCESS_STORAGE_KEY = 'quizPremiumActivationMicro_v2';
const PREMIUM_ACCESS_LEGACY_STORAGE_KEY = 'quizPremiumActivationMicro_v1';
const PREMIUM_ACTIVATION_PUBLIC_KEY_PEM = `-----BEGIN PUBLIC KEY-----
MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAETJ9YWriSQ6bPueQTvbvMFNx1OlxJ
HedcrGQb/6UNRscDbeesOoBO8jvOy1rwxhU6xuQ/Hf2aaPCQ5cEx5Cmq8w==
-----END PUBLIC KEY-----`;
const PREMIUM_ACTIVATION_TASHKENT_TIMEZONE = 'Asia/Tashkent';
const PREMIUM_ACTIVATION_RESUME_REQUEST_KEY = `quizResumeSessionRequest_${QUIZ_STORAGE_NAMESPACE}_v1`;
const DISMISSED_RESUME_SESSION_KEY = `quizDismissedResumeSession_${QUIZ_STORAGE_NAMESPACE}_v1`;
const PREMIUM_ACTIVATION_value_CONFIGS = {
  MXC1: { version: 'micro-v2', accessType: PREMIUM_ACCESS_TYPES.COMBO },
  MXM1: { version: 'micro-v2', accessType: PREMIUM_ACCESS_TYPES.MICRO },
  MX1: { version: 'micro-v1', accessType: PREMIUM_ACCESS_TYPES.MICRO, legacy: true }
};
const QUIZ_TEST_PAGE_BY_NAMESPACE = {
  micro: 'micro_test.html',
};
const QUIZ_HOME_PAGE_BY_SECTION = {
  micro: 'index.html',
};
const BANNED_USERS_JSON_PATH = 'banned_users.json';
const PREMIUM_USERS_JSON_PATH = 'premium_users.json';
const DEFAULT_PREMIUM_ADMIN_NAME = 'Sayfiddinov';
const DEFAULT_PREMIUM_ADMIN_USERNAME = '@SayfiddinovM';
const BANNED_USERS_CACHE_BUSTER = '2026-04-23-auto-premium-welcome-v2';
const BANNED_USERS_FETCH_TTL_MS = 15000;
let telegramResultsFlushInProgress = false;
let telegramResultsInitDone = false;

const PAGE_TRANSITION_MIN_DELAY = 1000;
const PAGE_TRANSITION_MAX_DELAY = 3000;
const PAGE_TRANSITION_DEFAULT_SUBTITLE = 'Проверяем данные раздела и восстанавливаем состояние';
const PAGE_TRANSITION_STATUS_STEPS = [
  'Загружаем интерфейс раздела…',
  'Загружаем данные истории…',
  'Проверяем сохранённый прогресс…',
  'Почти готово, открываем страницу…'
];
const PAGE_TRANSITION_CARD_SEQUENCES = [
  { colors: ['quiz-option--danger', 'quiz-option--neutral', 'quiz-option--neutral', 'quiz-option--success'], nav: 'single' },
  { colors: ['quiz-option--success', 'quiz-option--neutral', 'quiz-option--danger', 'quiz-option--neutral'], nav: 'double' },
  { colors: ['quiz-option--neutral', 'quiz-option--success', 'quiz-option--neutral', 'quiz-option--danger'], nav: 'double' }
];
let pageTransitionActive = false;
const SKIP_ENTRY_INTRO_ONCE_KEY = '__micro_skip_entry_intro_once__';
let pageTransitionStatusTimers = [];
let pageTransitionCardTimers = [];
let introSplashAnimationTimers = [];
let introSplashRunvalue = 0;

function clearIntroSplashAnimationTimers() {
  introSplashAnimationTimers.forEach((timerId) => window.clearTimeout(timerId));
  introSplashAnimationTimers = [];
}

function getRandomPageTransitionDelay() {
  return Math.floor(Math.random() * (PAGE_TRANSITION_MAX_DELAY - PAGE_TRANSITION_MIN_DELAY + 1)) + PAGE_TRANSITION_MIN_DELAY;
}

function normalizePageTransitionDelay(delayValue) {
  const numericDelay = Number(delayValue);
  if (Number.isFinite(numericDelay) && numericDelay > 0) {
    return Math.min(PAGE_TRANSITION_MAX_DELAY, Math.max(PAGE_TRANSITION_MIN_DELAY, Math.round(numericDelay)));
  }
  return getRandomPageTransitionDelay();
}

function clearPageTransitionStatusTimers() {
  pageTransitionStatusTimers.forEach((timerId) => window.clearTimeout(timerId));
  pageTransitionStatusTimers = [];
}

function clearPageTransitionCardTimers() {
  pageTransitionCardTimers.forEach((timerId) => window.clearTimeout(timerId));
  pageTransitionCardTimers = [];
}

function setPageTransitionCardSequence(loader, index) {
  if (!loader) return;
  const options = Array.from(loader.querySelectorAll('.page-transition-quiz-option'));
  const card = loader.querySelector('.page-transition-quiz-card');
  const navSingle = loader.querySelector('.page-transition-nav--single');
  const navDouble = loader.querySelector('.page-transition-nav--double');
  const seq = PAGE_TRANSITION_CARD_SEQUENCES[index % PAGE_TRANSITION_CARD_SEQUENCES.length];
  options.forEach((option, optionIndex) => {
    option.className = `page-transition-quiz-option ${seq.colors[optionIndex] || 'quiz-option--neutral'}`;
  });
  if (navSingle && navDouble) {
    navSingle.style.display = seq.nav === 'single' ? 'block' : 'none';
    navDouble.style.display = seq.nav === 'double' ? 'flex' : 'none';
  }
  if (card) {
    card.dataset.sequenceIndex = String(index % PAGE_TRANSITION_CARD_SEQUENCES.length);
  }
}

function animatePageTransitionCardIn(loader) {
  const card = loader?.querySelector('.page-transition-quiz-card');
  if (!card) return;
  card.classList.remove('hidden-left', 'center', 'no-transition');
  card.classList.add('hidden-right');
  const stepA = window.setTimeout(() => {
    card.classList.remove('hidden-right');
    card.classList.add('center');
  }, 20);
  pageTransitionCardTimers.push(stepA);
}

function startPageTransitionCardAnimation(loader) {
  if (!loader) return;
  clearPageTransitionCardTimers();
  const card = loader.querySelector('.page-transition-quiz-card');
  if (!card) return;

  let seqIndex = 0;
  setPageTransitionCardSequence(loader, seqIndex);
  card.classList.add('no-transition', 'hidden-right');
  card.classList.remove('hidden-left', 'center');

  const initial = window.setTimeout(() => {
    card.classList.remove('no-transition');
    animatePageTransitionCardIn(loader);
  }, 30);
  pageTransitionCardTimers.push(initial);

  const cycle = () => {
    const leave = window.setTimeout(() => {
      card.classList.remove('center', 'hidden-right', 'no-transition');
      card.classList.add('hidden-left');
    }, 0);
    pageTransitionCardTimers.push(leave);

    const reset = window.setTimeout(() => {
      seqIndex = (seqIndex + 1) % PAGE_TRANSITION_CARD_SEQUENCES.length;
      setPageTransitionCardSequence(loader, seqIndex);
      card.classList.add('no-transition');
      card.classList.remove('hidden-left', 'center');
      card.classList.add('hidden-right');
      void card.offsetWidth;
      card.classList.remove('no-transition');
      animatePageTransitionCardIn(loader);
      cycle();
    }, 1080);
    pageTransitionCardTimers.push(reset);
  };

  const loopStarter = window.setTimeout(cycle, 720);
  pageTransitionCardTimers.push(loopStarter);
}

function getTransitionLabel(targetHref = '', customLabel = '') {
  if (customLabel) return String(customLabel);
  const href = String(targetHref || '').toLowerCase();
  if (href.includes('_test.html')) return 'Загружаем тест';
  if (href.includes('index.html')) return 'Загружаем меню';
  return 'Загружаем раздел';
}

function ensurePageTransitionLoader() {
  if (document.getElementById('page-transition-loader')) return;
  if (!document.body) return;

  const loader = document.createElement('div');
  loader.id = 'page-transition-loader';
  loader.className = 'page-transition-loader';
  loader.setAttribute('aria-hidden', 'true');
  loader.innerHTML = `
    <div class="page-transition-panel">
      <div class="page-transition-spinner" aria-hidden="true">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div class="page-transition-title">Загружаем раздел</div>
      <div class="page-transition-subtitle">Проверяем данные раздела и восстанавливаем состояние</div>
      <div class="page-transition-status">Загружаем интерфейс раздела…</div>
      <div class="page-transition-progress"><span></span></div>
    </div>
  `;

  document.body.appendChild(loader);
}

function showPageTransitionLoader(targetHref = '', options = {}) {
  ensurePageTransitionLoader();

  const loader = document.getElementById('page-transition-loader');
  if (!loader) return;

  const title = loader.querySelector('.page-transition-title');
  const subtitle = loader.querySelector('.page-transition-subtitle');
  const status = loader.querySelector('.page-transition-status');
  const progress = loader.querySelector('.page-transition-progress span');
  const delay = normalizePageTransitionDelay(options.delay);
  const statusSteps = Array.isArray(options.statusSteps) && options.statusSteps.length
    ? options.statusSteps.map((item) => String(item))
    : PAGE_TRANSITION_STATUS_STEPS;

  clearPageTransitionStatusTimers();

  if (title) {
    title.textContent = getTransitionLabel(targetHref, options.label);
  }

  if (subtitle) {
    subtitle.textContent = options.subtitle || PAGE_TRANSITION_DEFAULT_SUBTITLE;
  }

  if (status) {
    status.textContent = statusSteps[0] || 'Загружаем данные…';
    const stepDuration = statusSteps.length > 1 ? Math.max(350, Math.floor(delay / statusSteps.length)) : delay;
    statusSteps.slice(1).forEach((message, index) => {
      const timerId = window.setTimeout(() => {
        status.textContent = message;
        status.classList.remove('pulse');
        void status.offsetWidth;
        status.classList.add('pulse');
      }, stepDuration * (index + 1));
      pageTransitionStatusTimers.push(timerId);
    });
  }

  if (progress) {
    progress.style.animation = 'none';
    void progress.offsetWidth;
    progress.style.animation = `pageTransitionProgressFill ${delay}ms linear forwards`;
  }

  document.body.classList.add('page-transition-active');
  window.requestAnimationFrame(() => {
    loader.classList.add('visible');
  });
}

function hidePageTransitionLoader() {
  const loader = document.getElementById('page-transition-loader');
  const progress = loader?.querySelector('.page-transition-progress span');
  const status = loader?.querySelector('.page-transition-status');

  clearPageTransitionStatusTimers();
  clearPageTransitionCardTimers();
  if (progress) {
    progress.style.animation = 'none';
  }
  if (status) {
    status.classList.remove('pulse');
  }
  loader?.classList.remove('visible');
  document.body?.classList.remove('page-transition-active');
  pageTransitionActive = false;
}

function navigateWithLoader(targetHref, options = {}) {
  const href = typeof targetHref === 'string' ? targetHref.trim() : '';
  if (!href || pageTransitionActive) return;

  const requestedDelay = normalizePageTransitionDelay(options.delay);
  const remainingMs = (() => {
    try {
      const storageKey = '__micro_intro_until__';
      const untilRaw = sessionStorage.getItem(storageKey);
      const until = untilRaw ? Number(untilRaw) : 0;
      const now = Date.now();
      if (until && until > now) {
        return until - now;
      }
    } catch (_) {}
    return 0;
  })();
  const delay = Math.max(requestedDelay, remainingMs);

  pageTransitionActive = true;
  showPageTransitionLoader(href, { ...options, delay });

  const navigate = () => {
    let finalHref = href;
    try {
      const url = new URL(href, window.location.href);
      url.searchParams.set('skipIntro', '1');
      finalHref = url.toString();
    } catch (_) {}

    if (options.replace) {
      window.location.replace(finalHref);
      return;
    }
    window.location.href = finalHref;
  };

  window.setTimeout(() => {
    try {
      sessionStorage.setItem(SKIP_ENTRY_INTRO_ONCE_KEY, '1');
    } catch (_) {}
    navigate();
  }, delay);
}

function setIntroSplashSequence(loader, index) {
  if (!loader) return;
  const sequences = [
    { colors: ['intro-card-option--danger', 'intro-card-option--neutral', 'intro-card-option--neutral', 'intro-card-option--success'], nav: 'single' },
    { colors: ['intro-card-option--success', 'intro-card-option--neutral', 'intro-card-option--danger', 'intro-card-option--neutral'], nav: 'double' },
    { colors: ['intro-card-option--neutral', 'intro-card-option--success', 'intro-card-option--neutral', 'intro-card-option--danger'], nav: 'double' }
  ];
  const seq = sequences[index % sequences.length];
  const options = Array.from(loader.querySelectorAll('.intro-card-option'));
  const navSingle = loader.querySelector('.intro-card-nav--single');
  const navDouble = loader.querySelector('.intro-card-nav--double');
  options.forEach((option, optionIndex) => {
    option.className = `intro-card-option ${seq.colors[optionIndex] || 'intro-card-option--neutral'}`;
  });
  if (navSingle && navDouble) {
    navSingle.style.display = seq.nav === 'single' ? 'block' : 'none';
    navDouble.style.display = seq.nav === 'double' ? 'flex' : 'none';
  }
}

function startIntroSplashAnimation(loader, duration = 3000) {
  if (!loader) return;
  clearIntroSplashAnimationTimers();
  const card = loader.querySelector('.intro-card');
  if (!card) return;

  const sequencesCount = 3;
  const runvalue = ++introSplashRunvalue;
  let seqIndex = 0;

  const isActive = () => runvalue === introSplashRunvalue && loader.classList.contains('visible');

  const runStep = () => {
    if (!isActive()) return;

    setIntroSplashSequence(loader, seqIndex % sequencesCount);
    seqIndex += 1;

    card.classList.add('no-transition');
    card.classList.remove('hidden-left', 'center');
    card.classList.add('hidden-right');
    void card.offsetWidth;
    card.classList.remove('no-transition');

    const moveInTimer = window.setTimeout(() => {
      if (!isActive()) return;
      card.classList.remove('hidden-right', 'hidden-left');
      card.classList.add('center');
    }, 60);

    const moveOutTimer = window.setTimeout(() => {
      if (!isActive()) return;
      card.classList.remove('center', 'hidden-right');
      card.classList.add('hidden-left');
    }, 980);

    introSplashAnimationTimers.push(moveInTimer, moveOutTimer);
  };

  runStep();
  const intervalTimer = window.setInterval(runStep, 1450);
  const stopTimer = window.setTimeout(() => {
    if (runvalue !== introSplashRunvalue) return;
    clearIntroSplashAnimationTimers();
    introSplashRunvalue += 1;
  }, Math.max(1300, duration - 80));

  introSplashAnimationTimers.push(intervalTimer, stopTimer);
}

function ensureIntroSplashLoader() {
  if (document.getElementById('intro-splash-loader')) return;
  if (!document.body) return;

  const loader = document.createElement('div');
  loader.id = 'intro-splash-loader';
  loader.className = 'intro-splash-loader';
  loader.setAttribute('aria-hidden', 'true');
  loader.innerHTML = `
    <div class="intro-card-scene" aria-hidden="true">
      <div class="intro-card hidden-right no-transition">
        <div class="intro-card-name">Quizora<span class="tm"></span></div>
        <div class="intro-card-meta">Free forever</div>
        <div class="intro-card-rule"></div>
        <div class="intro-card-lines">
          <div class="intro-card-line wide"></div>
          <div class="intro-card-line short"></div>
        </div>
        <div class="intro-card-option intro-card-option--neutral"><div class="intro-card-option-fill fill-1"></div></div>
        <div class="intro-card-option intro-card-option--neutral"><div class="intro-card-option-fill fill-2"></div></div>
        <div class="intro-card-option intro-card-option--neutral"><div class="intro-card-option-fill fill-3"></div></div>
        <div class="intro-card-option intro-card-option--neutral"><div class="intro-card-option-fill fill-4"></div></div>
        <div class="intro-card-nav intro-card-nav--single">
          <div class="intro-card-nav-btn"><div class="intro-card-arrow arrow-right"></div></div>
        </div>
        <div class="intro-card-nav intro-card-nav--double" style="display:none;">
          <div class="intro-card-nav-btn"><div class="intro-card-arrow arrow-left"></div></div>
          <div class="intro-card-nav-btn"><div class="intro-card-arrow arrow-right"></div></div>
        </div>
      </div>
    </div>
    <div class="intro-free-forever">Free forever</div>
    <div class="intro-splash-hint"><span>Подсказка:</span> ${getIntroSplashHintText()}</div>
  `;

  document.body.appendChild(loader);
}

function playIntroSplash(duration = 3000) {
  if (!document.body) return Promise.resolve();

  const existing = document.getElementById('intro-splash-loader');
  if (existing) {
    existing.remove();
  }
  ensureIntroSplashLoader();
  const loader = document.getElementById('intro-splash-loader');
  if (!loader) return Promise.resolve();

  clearIntroSplashAnimationTimers();
  introSplashRunvalue += 1;
  document.body.classList.add('intro-splash-active');

  return new Promise((resolve) => {
    window.requestAnimationFrame(() => {
      loader.classList.add('visible');
      startIntroSplashAnimation(loader, duration);
    });

    const finishTimer = window.setTimeout(() => {
      introSplashRunvalue += 1;
      clearIntroSplashAnimationTimers();
      loader.classList.remove('visible');
      document.body.classList.remove('intro-splash-active');
      window.setTimeout(() => {
        loader.remove();
        resolve();
      }, 280);
    }, Math.max(1200, duration));
    introSplashAnimationTimers.push(finishTimer);
  });
}

function shouldSkipEntryIntroOnce() {
  try {
    const url = new URL(window.location.href);
    if (url.searchParams.get('skipIntro') === '1') {
      url.searchParams.delete('skipIntro');
      window.history.replaceState({}, document.title, `${url.pathname}${url.search}${url.hash}`);
      try { sessionStorage.removeItem(SKIP_ENTRY_INTRO_ONCE_KEY); } catch (_) {}
      return true;
    }
  } catch (_) {}

  try {
    const raw = sessionStorage.getItem(SKIP_ENTRY_INTRO_ONCE_KEY);
    if (raw === '1') {
      sessionStorage.removeItem(SKIP_ENTRY_INTRO_ONCE_KEY);
      return true;
    }
  } catch (_) {}
  return false;
}

function launchEntryIntroSplash(duration = 3000) {
  if (!document.body) {
    void bootstrapApplicationState();
    return;
  }

  if (shouldSkipEntryIntroOnce()) {
    void bootstrapApplicationState();
    return;
  }

  ensureIntroSplashLoader();
  const loader = document.getElementById('intro-splash-loader');
  if (!loader) {
    void bootstrapApplicationState();
    return;
  }

  void bootstrapApplicationState();

  clearIntroSplashAnimationTimers();
  introSplashRunvalue += 1;
  document.body.classList.add('intro-splash-active');

  window.requestAnimationFrame(() => {
    loader.classList.add('visible');
    startIntroSplashAnimation(loader, duration);
  });

  const cleanup = () => {
    clearIntroSplashAnimationTimers();
    introSplashRunvalue += 1;
    loader.classList.remove('visible');
    loader.style.pointerEvents = 'none';
    document.body.classList.remove('intro-splash-active');
    window.setTimeout(() => {
      loader.remove();
    }, 280);
  };

  window.setTimeout(cleanup, Math.max(1200, duration));
}


window.addEventListener('pageshow', hidePageTransitionLoader);
window.navigateWithLoader = navigateWithLoader;


// ===== НАСТРОЙКА БУРГЕР-МЕНЮ =====
// Чтобы добавить новый раздел, просто допиши объект в массив APP_MENU_ITEMS.
// type: 'link'   -> переход на другой HTML-файл
// type: 'action' -> действие внутри текущего квиза
//
// Важно:
// 1) Верхний уровень меню — это разделы/темы.
// 2) Кнопки 'Изучить тесты' и 'История прохождений' автоматически
//    показываются внутри активного раздела.
// 3) При желании можно добавить и свои вложенные кнопки через children.
//
// Примеры:
// {
//   type: 'link',
//   label: 'Макро',
//   href: 'index.html',
//   description: 'Другой набор тестов',
//   children: [
//     { type: 'action', label: 'Мои заметки', action: 'notes', description: 'Открыть заметки' }
//   ]
// }
// { type: 'link', label: 'Финансы', href: 'finance/index.html', description: 'Переход к отдельному квизу' }
const APP_MENU_ITEMS = window.APP_MENU_ITEMS || [
  {
    type: 'link',
    label: 'Макроэкономика 2',
    href: 'index.html',
    description: 'Основной раздел с тестами по макроэкономике',
    requiredSection: 'micro',
    children: []
  },
  {
    type: 'action',
    label: 'Изучить тесты',
    action: 'study',
    description: 'Открыть все вопросы и ответы'
  },
  {
    type: 'action',
    label: 'История прохождений',
    action: 'history',
    description: 'Посмотреть прошлые попытки'
  },
  {
    type: 'action',
    label: 'Статистика',
    action: 'stats',
    description: 'Посмотреть общие показатели и прогресс'
  },
];

const APP_NEWS_ITEMS = [{ date: '25.10.2026', type: 'Обновлено', title: 'Quizora — Free forever', items: [
 'Все режимы, изучение вопросов и история доступны бесплатно.',
 'Вход открыт для Telegram ID из списка администратора.',
 'Блокировка аккаунта и устройства проверяется при входе и во время работы.'
]}];

const AGREEMENT_DOCUMENT_PATH = 'user_agreement.html';

const STORAGE_KEYS = {
  HISTORY: `quizHistory_${QUIZ_STORAGE_NAMESPACE}_v1`,
  ACTIVE_SESSION: `quizActiveSession_${QUIZ_STORAGE_NAMESPACE}_v1`,
  TIMER: `quizTimer_${QUIZ_STORAGE_NAMESPACE}_v1`,
  TEST_MODE: `quizTestMode_${QUIZ_STORAGE_NAMESPACE}_v1`,
  QUESTION_COUNT: `quizQuestionCount_${QUIZ_STORAGE_NAMESPACE}_v1`,
  THEME_FILE: `quizCurrentThemeFile_${QUIZ_STORAGE_NAMESPACE}_v1`,
  QUESTION_RANGE_START: `quizQuestionRangeStart_${QUIZ_STORAGE_NAMESPACE}_v1`,
  QUESTION_RANGE_END: `quizQuestionRangeEnd_${QUIZ_STORAGE_NAMESPACE}_v1`,
  USED_QUESTIONS: `quizUsedQuestions_${QUIZ_STORAGE_NAMESPACE}_v1`,
  AGREEMENT_STATUS: `quizAgreementStatus_${QUIZ_STORAGE_NAMESPACE}_v1`,
  AGREEMENT_VERSION: `quizAgreementVersion_${QUIZ_STORAGE_NAMESPACE}_v1`,
  AGREEMENT_ACCEPTED_AT: `quizAgreementAcceptedAt_${QUIZ_STORAGE_NAMESPACE}_v1`,
  USER_NAME: 'quizUserName_global_v1',
  USER_NAME_SOURCE: 'quizUserNameSource_global_v1',
  STATS: `quizStats_${QUIZ_STORAGE_NAMESPACE}_v1`,
  THEME_PREFERENCE: 'quizThemePreference_global_v1',
  APP_MENU_HINT_SEEN: 'quizAppMenuHintSeen_global_v1',
  QUESTION_PROGRESS: `quizQuestionProgress_${QUIZ_STORAGE_NAMESPACE}_v1`,
  MISTAKES_BANK: `quizMistakesBank_${QUIZ_STORAGE_NAMESPACE}_v1`,
  ACHIEVEMENTS_UNLOCKED: `quizAchievementsUnlocked_${QUIZ_STORAGE_NAMESPACE}_v1`
};

const HISTORY_KEY = STORAGE_KEYS.HISTORY;
const MAX_HISTORY_ENTRIES = 20;
const ACTIVE_SESSION_KEY = STORAGE_KEYS.ACTIVE_SESSION;
const TIMER_KEY = STORAGE_KEYS.TIMER;
const TEST_MODE_KEY = STORAGE_KEYS.TEST_MODE;
const QUESTION_COUNT_KEY = STORAGE_KEYS.QUESTION_COUNT;
const THEME_FILE_KEY = STORAGE_KEYS.THEME_FILE;
const QUESTION_RANGE_START_KEY = STORAGE_KEYS.QUESTION_RANGE_START;
const QUESTION_RANGE_END_KEY = STORAGE_KEYS.QUESTION_RANGE_END;
const QUESTION_RANGE_START_SESSION_KEY = `${QUESTION_RANGE_START_KEY}_session`;
const QUESTION_RANGE_END_SESSION_KEY = `${QUESTION_RANGE_END_KEY}_session`;
const USED_QUESTIONS_KEY = STORAGE_KEYS.USED_QUESTIONS;
const AGREEMENT_STATUS_KEY = STORAGE_KEYS.AGREEMENT_STATUS;
const AGREEMENT_VERSION_KEY = STORAGE_KEYS.AGREEMENT_VERSION;
const AGREEMENT_ACCEPTED_AT_KEY = STORAGE_KEYS.AGREEMENT_ACCEPTED_AT;
const USER_NAME_KEY = STORAGE_KEYS.USER_NAME;
const USER_NAME_SOURCE_KEY = STORAGE_KEYS.USER_NAME_SOURCE;
const THEME_PREFERENCE_KEY = STORAGE_KEYS.THEME_PREFERENCE;
const APP_MENU_HINT_SEEN_KEY = STORAGE_KEYS.APP_MENU_HINT_SEEN;

const STATS_KEY = STORAGE_KEYS.STATS;
const QUESTION_PROGRESS_KEY = STORAGE_KEYS.QUESTION_PROGRESS;
const MISTAKES_BANK_KEY = STORAGE_KEYS.MISTAKES_BANK;
const ACHIEVEMENTS_UNLOCKED_KEY = STORAGE_KEYS.ACHIEVEMENTS_UNLOCKED;
const MISTAKES_THEME_FILE = '__mistakes__';
const THEME_LIGHT = 'light';
const THEME_DARK = 'dark';
const MAX_STATS_ENTRIES = 1000;
const TEST_MODE_REGULAR = 'regular';
const TEST_MODE_SPEED = 'speed';
const TEST_MODE_UNTIMED = 'untimed';

// ===== ОПРЕДЕЛЕНИЕ СТРАНИЦЫ =====
const isTestPage = !!document.getElementById('question');

const COPY_PROTECTED_SELECTOR = [
  '.quiz-test-page .card',
  '.quiz-test-page .card *',
  '#question',
  '#question *',
  '#options',
  '#options *',
  '#study-list',
  '#study-list *',
  '.study-list',
  '.study-list *',
  '#favorites-list',
  '#favorites-list *',
  '#history-list',
  '#history-list *',
  '.history-details',
  '.history-details *',
  '.answers-list',
  '.answers-list *',
  '.answer-card',
  '.answer-card *',
  '.answer-question',
  '.answer-question *',
  '.answer-line',
  '.answer-line *'
].join(', ');

function isEditableTarget(node) {
  if (!(node instanceof Element)) return false;
  return !!node.closest('input, textarea, [contenteditable="true"], [contenteditable=""], [contenteditable]');
}

function selectionInsideProtectedContent() {
  const selection = window.getSelection?.();
  if (!selection || selection.rangeCount === 0 || selection.isCollapsed) return false;
  const anchorNode = selection.anchorNode;
  const focusNode = selection.focusNode;
  const anchorElement = anchorNode instanceof Element ? anchorNode : anchorNode?.parentElement;
  const focusElement = focusNode instanceof Element ? focusNode : focusNode?.parentElement;
  return Boolean(
    anchorElement?.closest?.(COPY_PROTECTED_SELECTOR)
    || focusElement?.closest?.(COPY_PROTECTED_SELECTOR)
  );
}

function shouldBlockCopyInteraction(target) {
  // В бесплатной версии разрешаем копирование
  if (isPremiumModeAvailableForCurrentSection()) return false;

  if (target instanceof Element) {
    if (isEditableTarget(target)) return false;
    if (target.closest(COPY_PROTECTED_SELECTOR)) return true;
  }
  return selectionInsideProtectedContent();
}

function initAntiCopyProtection() {
  if (window.__antiCopyProtectionInitialized) return;
  window.__antiCopyProtectionInitialized = true;

  const blockEvent = (event) => {
    if (shouldBlockCopyInteraction(event.target)) {
      event.preventDefault();
      event.stopPropagation();
      return true;
    }
    return false;
  };

  ['copy', 'cut', 'contextmenu', 'selectstart', 'dragstart'].forEach((eventName) => {
    document.addEventListener(eventName, blockEvent, { capture: true });
  });

  document.addEventListener('keydown', (event) => {
    const key = String(event.key || '').toLowerCase();
    const modifierPressed = event.ctrlKey || event.metaKey;
    if (!modifierPressed || !['c', 'x', 'a', 'u', 's'].includes(key)) return;
    if (!shouldBlockCopyInteraction(event.target)) return;
    event.preventDefault();
    event.stopPropagation();
  }, { capture: true });
}

const app = document.getElementById('app');

initializeThemePreference();

// ===== ПЕРЕМЕННЫЕ ТЕСТА =====
let timeLimit = 30;
let session = null;
let tests = [];
let timer = null;
let sessionActivityHeartbeat = null;
let timeLeft = 0;
let selected = null;
let historyUiReady = false;
let statsUiReady = false;
let newsUiReady = false;
let agreementUiReady = false;
let identityUiReady = false;
let banUiReady = false;
let bootstrapInProgress = false;
let testBootstrapCompleted = false;
let telegramWebAppScriptPromise = null;
let bannedUsersListPromise = null;
let bannedUsersListFetchedAt = 0;
let premiumUsersListPromise = null;
let premiumUsersListFetchedAt = 0;
let studyUiReady = false;
let appMenuUiReady = false;
let favoritesUiReady = false;
let appMenuActionMap = new Map();
let studyState = { loaded: false, loading: false, error: '', items: [], query: '' };
let interruptedSessionRecoveryDone = false;
let currentPremiumUiState = {
  isPremium: false,
  sections: [],
  hasCurrentSectionPremium: false,
  premiumFromFile: false,
  incognitoAvailable: false,
  userId: ''
};

let premiumActivationPublicKeyPromise = null;
let premiumActivationOverlayState = null;
let resumeSessionUiReady = false;
let pendingResumePrompt = null;
let pendingResumePromptResolver = null;

// ===== HELPERS =====
function getTimerValue() {
  const custom = parseInt(document.getElementById('custom-timer')?.value, 10);
  const preset = parseInt(document.getElementById('preset-timer')?.value, 10);
  return custom || preset || 30;
}

function normalizeTestMode(value) {
  const normalized = String(value || '').trim().toLowerCase();
  if (normalized === TEST_MODE_SPEED) return TEST_MODE_SPEED;
  if (normalized === TEST_MODE_UNTIMED) return TEST_MODE_UNTIMED;
  return TEST_MODE_REGULAR;
}

function isSpeedTestMode(mode) {
  return normalizeTestMode(mode) === TEST_MODE_SPEED;
}

function isUntimedTestMode(mode) {
  return normalizeTestMode(mode) === TEST_MODE_UNTIMED;
}

function isRegularTestMode(mode) {
  return normalizeTestMode(mode) === TEST_MODE_REGULAR;
}

function getTestModeLabel(mode) {
  if (isSpeedTestMode(mode)) return 'На скорость';
  if (isUntimedTestMode(mode)) return 'Без времени';
  return 'Обычный';
}

function isPremiumOnlyTestMode(mode) { return false; }

function getCurrentUserStoredPremiumSections() {
  const userId = getCurrentKnownTelegramUserId();
  const record = userId ? getStoredPremiumAccessRecordForUser(userId) : null;
  return getNormalizedSectionsFromRecord(record);
}

function getMergedPremiumSections(extraSections = []) {
  const sourceSections = Array.isArray(extraSections) ? extraSections : [];
  const storedSections = getCurrentUserStoredPremiumSections();
  return [...new Set([...storedSections, ...sourceSections]
    .map((item) => normalizeSectionKey(item))
    .filter((item) => QUIZ_SECTION_CONFIGS[item]))];
}

function isCurrentUserPremiumFromFile(userId = getCurrentKnownTelegramUserId()) {
  const normalizedUserId = normalizeTelegramUserId(userId);
  if (!normalizedUserId) {
    return !!currentPremiumUiState?.premiumFromFile;
  }

  if (currentPremiumUiState?.userId === normalizedUserId) {
    return !!currentPremiumUiState?.premiumFromFile;
  }

  return getStoredUserBooleanFlag(PREMIUM_FILE_USER_CACHE_KEY, normalizedUserId);
}

function isCurrentUserIncognitoAllowedFromFile(userId = getCurrentKnownTelegramUserId()) {
  const normalizedUserId = normalizeTelegramUserId(userId);
  if (!normalizedUserId) {
    return !!currentPremiumUiState?.incognitoAvailable;
  }

  if (currentPremiumUiState?.userId === normalizedUserId) {
    return !!currentPremiumUiState?.incognitoAvailable;
  }

  return getStoredUserBooleanFlag(PREMIUM_FILE_INCOGNITO_USER_CACHE_KEY, normalizedUserId);
}

function isPremiumIncognitoAvailableForCurrentUser() { return false; }

function isPremiumIncognitoEnabledForUser() { return null; }

function setPremiumIncognitoEnabledForUser() { return null; }

function hasSeenPremiumIncognitoHint() { return null; }

function markPremiumIncognitoHintSeen() { return null; }

function shouldSuppressTelegramReports() { return false; }

function setCurrentPremiumUiStateFromSections(sections = [], options = {}) {
  const mergedSections = getMergedPremiumSections(sections);
  const normalizedUserId = normalizeTelegramUserId(options?.userId || currentPremiumUiState?.userId || getCurrentKnownTelegramUserId());
  const premiumFromFile = !!(options?.premiumFromFile || (normalizedUserId && getStoredUserBooleanFlag(PREMIUM_FILE_USER_CACHE_KEY, normalizedUserId)));
  const incognitoAvailable = !!(options?.incognitoAvailable || (normalizedUserId && getStoredUserBooleanFlag(PREMIUM_FILE_INCOGNITO_USER_CACHE_KEY, normalizedUserId)));

  currentPremiumUiState = {
    isPremium: mergedSections.length > 0,
    sections: mergedSections,
    hasCurrentSectionPremium: mergedSections.includes(normalizeSectionKey(CURRENT_QUIZ_SECTION)),
    premiumFromFile,
    incognitoAvailable: premiumFromFile && incognitoAvailable,
    userId: normalizedUserId || ''
  };
  renderUserNameBadge();
  updateTestModePremiumLockState();
  syncPremiumIncognitoToggleVisibility();
  return currentPremiumUiState;
}

function setCurrentPremiumUiStateFromAccessStatus(accessStatus = {}) {
  const statusSections = Array.isArray(accessStatus?.availableSections) ? accessStatus.availableSections : [];
  const premiumSections = accessStatus?.premium ? statusSections : [];
  const normalizedUserId = normalizeTelegramUserId(accessStatus?.userId || getCurrentKnownTelegramUserId());
  if (normalizedUserId) {
    setStoredUserBooleanFlag(PREMIUM_FILE_USER_CACHE_KEY, normalizedUserId, !!accessStatus?.premiumFromFile);
    setStoredUserBooleanFlag(PREMIUM_FILE_INCOGNITO_USER_CACHE_KEY, normalizedUserId, !!accessStatus?.incognitoAvailable);
  }
  return setCurrentPremiumUiStateFromSections(premiumSections, {
    premiumFromFile: !!accessStatus?.premiumFromFile,
    incognitoAvailable: !!accessStatus?.incognitoAvailable,
    userId: normalizedUserId
  });
}

function setCurrentPremiumUiStateFromAccessRecord() { return null; }

function isCurrentUserPremium() { return false; }

function isPremiumModeAvailableForCurrentSection() { return true; }

function getPremiumModeDeniedMessage() {
  return 'Бот переведён в закрытый режим из-за большого количества некорректных обращений и негативных действий со стороны части пользователей.';
}

function syncTimerVisibility(mode, options = {}) {
  const t = document.getElementById('timer');
  if (!t) return;

  const shouldHideTimer = isUntimedTestMode(mode);
  t.classList.toggle('timer-hidden', shouldHideTimer);

  if (shouldHideTimer) {
    t.classList.remove('warning', 'speed-mode');
    t.textContent = '';
    t.innerHTML = '';
    return;
  }

  if (options.resetText) {
    t.classList.remove('warning', 'speed-mode');
    t.textContent = '';
  }
}

function normalizeThemePreference(value) {
  return String(value || '').trim().toLowerCase() === THEME_DARK ? THEME_DARK : THEME_LIGHT;
}

function getStoredThemePreference() {
  try {
    return normalizeThemePreference(localStorage.getItem(THEME_PREFERENCE_KEY));
  } catch (_) {
    return THEME_LIGHT;
  }
}

function isDarkThemeEnabled() {
  return document.body?.classList.contains('dark-theme');
}

function updateThemeToggleButtons() {
  const nextTheme = isDarkThemeEnabled() ? THEME_LIGHT : THEME_DARK;
  const nextLabel = nextTheme === THEME_DARK ? 'Включить тёмную тему' : 'Включить светлую тему';
  const nextIcon = nextTheme === THEME_DARK ? '🌙' : '☀️';
  document.querySelectorAll('.app-theme-toggle').forEach((button) => {
    button.innerHTML = `<span class="app-theme-toggle-icon" aria-hidden="true">${nextIcon}</span>`;
    button.setAttribute('aria-label', nextLabel);
    button.setAttribute('title', nextLabel);
    button.dataset.nextTheme = nextTheme;
  });
}

function applyThemePreference(theme, options = {}) {
  const normalizedTheme = normalizeThemePreference(theme);
  const shouldPersist = options.persist !== false;
  document.documentElement.setAttribute('data-app-theme', normalizedTheme);
  document.body?.classList.toggle('dark-theme', normalizedTheme === THEME_DARK);

  if (shouldPersist) {
    try {
      localStorage.setItem(THEME_PREFERENCE_KEY, normalizedTheme);
    } catch (_) {}
  }

  updateThemeToggleButtons();
  return normalizedTheme;
}

function initializeThemePreference() {
  applyThemePreference(getStoredThemePreference(), { persist: false });
}

function toggleThemePreference() {
  applyThemePreference(isDarkThemeEnabled() ? THEME_LIGHT : THEME_DARK);
}

function isCurrentUserPremiumForDailyLimit() { return true; }

function shouldApplyTemporaryUserTestCaps() { return false; }

function clampTemporaryTimerValueForStart() {
  const rawValue = getTimerValue();
  if (!shouldApplyTemporaryUserTestCaps()) return rawValue;

  const timerValue = Math.max(1, Number(rawValue) || 30);
  if (timerValue <= TEMPORARY_MAX_SECONDS_PER_QUESTION) return timerValue;

  const customTimerEl = document.getElementById('custom-timer');
  const presetTimerEl = document.getElementById('preset-timer');
  const customValue = parseInt(customTimerEl?.value, 10);

  if (Number.isFinite(customValue) && customValue > TEMPORARY_MAX_SECONDS_PER_QUESTION && customTimerEl) {
    customTimerEl.value = String(TEMPORARY_MAX_SECONDS_PER_QUESTION);
  } else if (presetTimerEl && Array.from(presetTimerEl.options || []).some((option) => String(option.value) === String(TEMPORARY_MAX_SECONDS_PER_QUESTION))) {
    presetTimerEl.value = String(TEMPORARY_MAX_SECONDS_PER_QUESTION);
    if (customTimerEl) customTimerEl.value = '';
  } else if (customTimerEl) {
    customTimerEl.value = String(TEMPORARY_MAX_SECONDS_PER_QUESTION);
  }

  return TEMPORARY_MAX_SECONDS_PER_QUESTION;
}

function clampTemporaryQuestionCountForStart() {
  const rawValue = getQuestionsCount();
  if (!shouldApplyTemporaryUserTestCaps()) {
    return { count: rawValue, sourceCap: false };
  }

  const requestedCount = Math.max(1, Number(rawValue) || 15);
  if (requestedCount <= TEMPORARY_MAX_QUESTIONS_PER_TEST) {
    return { count: requestedCount, sourceCap: false };
  }

  const customCountEl = document.getElementById('custom-count');
  const presetCountEl = document.getElementById('preset-count');
  const customValue = parseInt(customCountEl?.value, 10);

  if (Number.isFinite(customValue) && customValue > TEMPORARY_MAX_QUESTIONS_PER_TEST && customCountEl) {
    customCountEl.value = String(TEMPORARY_MAX_QUESTIONS_PER_TEST);
  } else if (presetCountEl && Array.from(presetCountEl.options || []).some((option) => String(option.value) === String(TEMPORARY_MAX_QUESTIONS_PER_TEST))) {
    presetCountEl.value = String(TEMPORARY_MAX_QUESTIONS_PER_TEST);
    if (customCountEl) customCountEl.value = '';
  } else if (customCountEl) {
    customCountEl.value = String(TEMPORARY_MAX_QUESTIONS_PER_TEST);
  }

  return { count: TEMPORARY_MAX_QUESTIONS_PER_TEST, sourceCap: true };
}

function applyTemporaryQuestionSourceCap(sourceQuestions, enabled = false) {
  if (!enabled || !shouldApplyTemporaryUserTestCaps()) return sourceQuestions;
  if (!Array.isArray(sourceQuestions)) return [];
  return sourceQuestions.slice(0, TEMPORARY_MAX_QUESTIONS_PER_TEST);
}

function getDailyLimitIdentityKey() {
  const trustedUser = getTrustedTelegramWebAppUser();
  const telegramId = normalizeTelegramUserId(trustedUser?.id);
  if (telegramId) return `tg:${telegramId}`;

  const browserSession = getCurrentBrowserGuardSession();
  if (browserSession?.userId) return `browser:${normalizeTelegramUserId(browserSession.userId) || String(browserSession.userId)}`;
  if (browserSession?.username) return `browser_username:${normalizeTelegramUsername(browserSession.username)}`;

  const storedName = normalizeUserDisplayName(getStoredUserName());
  if (storedName) return `name:${storedName.toLowerCase()}`;

  return `anonymous:${CURRENT_QUIZ_SECTION || QUIZ_STORAGE_NAMESPACE || 'quiz'}`;
}

function sanitizeTemporaryDailyLimitStore(store) {
  const result = {};
  if (!store || typeof store !== 'object' || Array.isArray(store)) return result;

  Object.keys(store).sort().forEach((key) => {
    const safeKey = String(key || '').trim().slice(0, 160);
    if (!safeKey) return;
    const record = store[key] && typeof store[key] === 'object' ? store[key] : {};
    const timestamps = Array.isArray(record.timestamps)
      ? Array.from(new Set(record.timestamps
        .map((value) => Math.floor(Number(value)))
        .filter((value) => Number.isFinite(value) && value > 0)))
        .sort((a, b) => a - b)
        .slice(-TEMPORARY_DAILY_TEST_LIMIT)
      : [];
    if (timestamps.length) {
      result[safeKey] = { timestamps };
    }
  });

  return result;
}

function stringifyTemporaryDailyLimitStore(store) {
  return JSON.stringify(sanitizeTemporaryDailyLimitStore(store));
}

function signTemporaryDailyLimitStore(rawValue) {
  return frontendBrowserHash([
    'temporary-limit',
    QUIZ_STORAGE_NAMESPACE,
    CURRENT_QUIZ_SECTION,
    getFrontendBrowserAccessSalt(),
    String(rawValue || '')
  ].join('|'));
}

function readSignedTemporaryDailyLimitFromStorage(getRaw, getSig, sourceLabel) {
  let raw = '';
  let sig = '';
  try {
    raw = String(getRaw() || '');
    sig = String(getSig() || '');
  } catch {
    return { source: sourceLabel, exists: false, valid: false, store: {} };
  }

  if (!raw) return { source: sourceLabel, exists: false, valid: false, store: {} };

  const expected = signTemporaryDailyLimitStore(raw);
  if (sig && sig !== expected) {
    markTemporaryDailyLimitTamper(`invalid_signature:${sourceLabel}`);
    return { source: sourceLabel, exists: true, valid: false, store: {} };
  }

  if (!sig) {
    try {
      if (localStorage.getItem(TEMPORARY_DAILY_TEST_MIGRATED_KEY) === '1') {
        markTemporaryDailyLimitTamper(`missing_signature:${sourceLabel}`);
        return { source: sourceLabel, exists: true, valid: false, store: {} };
      }
    } catch (_) {}
  }

  try {
    const parsed = JSON.parse(raw || '{}');
    return {
      source: sourceLabel,
      exists: true,
      valid: true,
      unsigned: !sig,
      store: sanitizeTemporaryDailyLimitStore(parsed)
    };
  } catch {
    markTemporaryDailyLimitTamper(`invalid_json:${sourceLabel}`);
    return { source: sourceLabel, exists: true, valid: false, store: {} };
  }
}

function getCookieValue(name) {
  try {
    const encodedName = encodeURIComponent(name) + '=';
    const parts = String(document.cookie || '').split(';');
    for (const part of parts) {
      const trimmed = part.trim();
      if (trimmed.startsWith(encodedName)) {
        return decodeURIComponent(trimmed.slice(encodedName.length));
      }
    }
  } catch (_) {}
  return '';
}

function setCookieValue(name, value, maxAgeSeconds = 60 * 60 * 24 * 8) {
  try {
    document.cookie = `${encodeURIComponent(name)}=${encodeURIComponent(value || '')}; Max-Age=${maxAgeSeconds}; Path=/; SameSite=Lax`;
  } catch (_) {}
}

function encodeTemporaryDailyLimitCookiePayload(rawValue, signature) {
  try {
    return btoa(unescape(encodeURIComponent(JSON.stringify({ r: rawValue || '{}', s: signature || '' }))));
  } catch {
    return '';
  }
}

function decodeTemporaryDailyLimitCookiePayload(value) {
  try {
    return JSON.parse(decodeURIComponent(escape(atob(String(value || '')))));
  } catch {
    return null;
  }
}

function mergeTemporaryDailyLimitStores(...stores) {
  const merged = {};
  stores.forEach((store) => {
    const clean = sanitizeTemporaryDailyLimitStore(store);
    Object.entries(clean).forEach(([key, record]) => {
      const current = Array.isArray(merged[key]?.timestamps) ? merged[key].timestamps : [];
      const incoming = Array.isArray(record.timestamps) ? record.timestamps : [];
      const timestamps = Array.from(new Set(current.concat(incoming)))
        .map((value) => Math.floor(Number(value)))
        .filter((value) => Number.isFinite(value) && value > 0)
        .sort((a, b) => a - b)
        .slice(-TEMPORARY_DAILY_TEST_LIMIT);
      if (timestamps.length) merged[key] = { timestamps };
    });
  });
  return sanitizeTemporaryDailyLimitStore(merged);
}

function markTemporaryDailyLimitTamper(reason = 'unknown') {
  const payload = {
    reason: String(reason || 'unknown').slice(0, 120),
    at: Date.now(),
    userKey: getDailyLimitIdentityKey()
  };
  const raw = JSON.stringify(payload);
  const sig = signTemporaryDailyLimitStore(raw);
  try { localStorage.setItem(TEMPORARY_DAILY_TEST_TAMPER_FLAG_KEY, `${btoa(unescape(encodeURIComponent(raw)))}.${sig}`); } catch (_) {}
  try { sessionStorage.setItem(TEMPORARY_DAILY_TEST_TAMPER_FLAG_KEY, `${btoa(unescape(encodeURIComponent(raw)))}.${sig}`); } catch (_) {}
}

function getTemporaryDailyLimitTamperInfo() {
  const values = [];
  try { values.push(localStorage.getItem(TEMPORARY_DAILY_TEST_TAMPER_FLAG_KEY)); } catch (_) {}
  try { values.push(sessionStorage.getItem(TEMPORARY_DAILY_TEST_TAMPER_FLAG_KEY)); } catch (_) {}

  for (const value of values) {
    if (!value || !String(value).includes('.')) continue;
    const [encoded, sig] = String(value).split('.');
    try {
      const raw = decodeURIComponent(escape(atob(encoded)));
      if (signTemporaryDailyLimitStore(raw) !== sig) continue;
      const parsed = JSON.parse(raw);
      if (parsed && typeof parsed === 'object') return parsed;
    } catch (_) {}
  }
  return null;
}

function restoreTemporaryDailyLimitMirrors(store) {
  writeTemporaryDailyLimitStore(store);
}

function readTemporaryDailyLimitStore() {
  const localRecord = readSignedTemporaryDailyLimitFromStorage(
    () => localStorage.getItem(TEMPORARY_DAILY_TEST_STORAGE_KEY),
    () => localStorage.getItem(TEMPORARY_DAILY_TEST_SIGNATURE_KEY),
    'localStorage'
  );

  const sessionRecord = readSignedTemporaryDailyLimitFromStorage(
    () => sessionStorage.getItem(TEMPORARY_DAILY_TEST_SESSION_MIRROR_KEY),
    () => sessionStorage.getItem(TEMPORARY_DAILY_TEST_SESSION_SIGNATURE_KEY),
    'sessionStorage'
  );

  const cookiePayload = decodeTemporaryDailyLimitCookiePayload(getCookieValue(TEMPORARY_DAILY_TEST_COOKIE_KEY));
  const cookieRecord = readSignedTemporaryDailyLimitFromStorage(
    () => cookiePayload?.r || '',
    () => cookiePayload?.s || '',
    'cookie'
  );

  const validStores = [localRecord, sessionRecord, cookieRecord]
    .filter((record) => record.valid)
    .map((record) => record.store);

  const merged = mergeTemporaryDailyLimitStores(...validStores);

  if (validStores.length) {
    restoreTemporaryDailyLimitMirrors(merged);
    return merged;
  }

  return {};
}

function writeTemporaryDailyLimitStore(store) {
  const cleanStore = sanitizeTemporaryDailyLimitStore(store && typeof store === 'object' ? store : {});
  const rawValue = stringifyTemporaryDailyLimitStore(cleanStore);
  const signature = signTemporaryDailyLimitStore(rawValue);

  try {
    localStorage.setItem(TEMPORARY_DAILY_TEST_STORAGE_KEY, rawValue);
    localStorage.setItem(TEMPORARY_DAILY_TEST_SIGNATURE_KEY, signature);
    localStorage.setItem(TEMPORARY_DAILY_TEST_MIGRATED_KEY, '1');
  } catch (_) {}

  try {
    sessionStorage.setItem(TEMPORARY_DAILY_TEST_SESSION_MIRROR_KEY, rawValue);
    sessionStorage.setItem(TEMPORARY_DAILY_TEST_SESSION_SIGNATURE_KEY, signature);
  } catch (_) {}

  setCookieValue(TEMPORARY_DAILY_TEST_COOKIE_KEY, encodeTemporaryDailyLimitCookiePayload(rawValue, signature));
}

function normalizeTemporaryDailyLimitSnapshot(snapshot = {}) {
  const isPremium = !!snapshot.isPremium;
  const limit = Number.isFinite(Number(snapshot.limit)) ? Math.max(0, Math.floor(Number(snapshot.limit))) : TEMPORARY_DAILY_TEST_LIMIT;
  const used = Number.isFinite(Number(snapshot.used)) ? Math.max(0, Math.floor(Number(snapshot.used))) : 0;
  const remaining = isPremium ? Infinity : Math.max(0, Number.isFinite(Number(snapshot.remaining)) ? Math.floor(Number(snapshot.remaining)) : (limit - used));
  const resetAt = Number.isFinite(Number(snapshot.resetAt)) ? Math.max(0, Math.floor(Number(snapshot.resetAt))) : null;
  return {
    isPremium,
    statusLabel: 'Free forever',
    limit,
    used: isPremium ? 0 : Math.min(limit, used),
    remaining,
    resetAt,
    resetAtLabel: !isPremium && resetAt ? formatDateTimeToSecond(resetAt) : '',
    reportLabel: isPremium ? 'без ограничений' : `${Math.max(0, remaining)}/${limit} осталось за 24 часа`
  };
}

function getTemporaryDailyLimitSnapshot(options = {}) {
  if (isCurrentUserPremiumForDailyLimit()) {
    return normalizeTemporaryDailyLimitSnapshot({ isPremium: true, limit: TEMPORARY_DAILY_TEST_LIMIT, used: 0, remaining: Infinity });
  }

  const now = Number(options.now) || Date.now();
  const userKey = getDailyLimitIdentityKey();
  const store = readTemporaryDailyLimitStore();
  const record = store[userKey] && typeof store[userKey] === 'object' ? store[userKey] : {};
  const timestamps = Array.isArray(record.timestamps)
    ? record.timestamps.map((value) => Number(value)).filter((value) => Number.isFinite(value) && value > now - TEMPORARY_DAILY_TEST_WINDOW_MS && value <= now + 5000).sort((a, b) => a - b)
    : [];

  if (options.persist !== false) {
    if (timestamps.length) {
      store[userKey] = { timestamps };
    } else {
      delete store[userKey];
    }
    writeTemporaryDailyLimitStore(store);
  }

  const used = Math.min(TEMPORARY_DAILY_TEST_LIMIT, timestamps.length);
  const remaining = Math.max(0, TEMPORARY_DAILY_TEST_LIMIT - used);
  const resetAt = timestamps.length ? timestamps[0] + TEMPORARY_DAILY_TEST_WINDOW_MS : null;
  return normalizeTemporaryDailyLimitSnapshot({
    isPremium: false,
    limit: TEMPORARY_DAILY_TEST_LIMIT,
    used,
    remaining,
    resetAt
  });
}

function consumeTemporaryDailyTestLimit() {
  if (isCurrentUserPremiumForDailyLimit()) {
    return { allowed: true, snapshot: getTemporaryDailyLimitSnapshot({ persist: false }) };
  }

  const tamperInfo = getTemporaryDailyLimitTamperInfo();
  if (tamperInfo) {
    const snapshot = normalizeTemporaryDailyLimitSnapshot({
      isPremium: false,
      limit: TEMPORARY_DAILY_TEST_LIMIT,
      used: TEMPORARY_DAILY_TEST_LIMIT,
      remaining: 0,
      resetAt: Date.now() + TEMPORARY_DAILY_TEST_WINDOW_MS
    });
    return { allowed: false, reason: 'limit_tamper_detected', tamperInfo, snapshot };
  }

  const now = Date.now();
  const userKey = getDailyLimitIdentityKey();
  const store = readTemporaryDailyLimitStore();
  const record = store[userKey] && typeof store[userKey] === 'object' ? store[userKey] : {};
  const timestamps = Array.isArray(record.timestamps)
    ? record.timestamps.map((value) => Number(value)).filter((value) => Number.isFinite(value) && value > now - TEMPORARY_DAILY_TEST_WINDOW_MS && value <= now + 5000).sort((a, b) => a - b)
    : [];

  if (timestamps.length >= TEMPORARY_DAILY_TEST_LIMIT) {
    store[userKey] = { timestamps };
    writeTemporaryDailyLimitStore(store);
    return { allowed: false, reason: 'daily_limit_exhausted', snapshot: normalizeTemporaryDailyLimitSnapshot({
      isPremium: false,
      limit: TEMPORARY_DAILY_TEST_LIMIT,
      used: TEMPORARY_DAILY_TEST_LIMIT,
      remaining: 0,
      resetAt: timestamps[0] + TEMPORARY_DAILY_TEST_WINDOW_MS
    }) };
  }

  timestamps.push(now);
  store[userKey] = { timestamps };
  writeTemporaryDailyLimitStore(store);
  return { allowed: true, snapshot: getTemporaryDailyLimitSnapshot({ persist: true, now }) };
}

function formatDailyLimitReportLine(snapshot = getTemporaryDailyLimitSnapshot({ persist: true })) {
  const normalized = normalizeTemporaryDailyLimitSnapshot(snapshot);
  return normalized.isPremium
    ? '♾️ Лимит тестов: без ограничений'
    : `🧮 Лимит тестов: ${normalized.reportLabel}`;
}

function getDailyLimitResultNoteHtml(snapshot) {
  return ''; // Полностью отключаем вывод плашки с лимитом
}

function closeTemporaryLimitUpsellModal() {
  document.getElementById('temporary-limit-upsell-modal')?.classList.add('hidden');
  document.body.classList.remove('agreement-page-locked');
  document.body.classList.remove('app-surface-open');
}

function setLimitUpsellTab() { return null; }

function ensureTemporaryLimitUpsellModal() { return null; }

function openTemporaryLimitUpsellModal() { return null; }

function getStoredTestMode() {
  return normalizeTestMode(localStorage.getItem(TEST_MODE_KEY));
}

function getSelectedTestMode() {
  const activeButton = document.querySelector('#test-mode-switch .mode-switch-btn.active');
  const selectedMode = normalizeTestMode(activeButton?.dataset?.mode);
  if (isPremiumOnlyTestMode(selectedMode) && !isPremiumModeAvailableForCurrentSection()) {
    return TEST_MODE_REGULAR;
  }
  return selectedMode;
}

function applyTestModeMenuState(mode, options = {}) {
  const requestedMode = normalizeTestMode(mode);
  const premiumModeLocked = isPremiumOnlyTestMode(requestedMode) && !isPremiumModeAvailableForCurrentSection();
  const normalizedMode = requestedMode;

  if (premiumModeLocked && options?.notify !== false) {
    alert(getPremiumModeDeniedMessage());
  }

  const buttons = Array.from(document.querySelectorAll('#test-mode-switch .mode-switch-btn'));
  buttons.forEach((button) => {
    const buttonMode = normalizeTestMode(button.dataset.mode);
    button.classList.toggle('active', buttonMode === normalizedMode);
    button.setAttribute('aria-pressed', buttonMode === normalizedMode ? 'true' : 'false');
  });

  const timerBlock = document.getElementById('timer-settings-block');
  if (timerBlock) {
    timerBlock.classList.toggle('hidden', !isRegularTestMode(normalizedMode));
  }

  updateTestModePremiumLockState();
}

function updateTestModePremiumLockState() {
  document.querySelectorAll('#test-mode-switch .mode-switch-btn').forEach(button => {
    button.classList.remove('premium-mode','locked','unlocked');
    button.removeAttribute('aria-disabled'); button.title = '';
    button.querySelector('[data-mode-lock]')?.remove();
  });
}

function initializeTestModeMenuControls() {
  const buttons = Array.from(document.querySelectorAll('#test-mode-switch .mode-switch-btn'));
  if (!buttons.length) return;

  try {
    localStorage.removeItem(TEST_MODE_KEY);
  } catch (_) {}

  buttons.forEach((button) => {
    button.addEventListener('click', () => applyTestModeMenuState(button.dataset.mode));
  });

  applyTestModeMenuState(TEST_MODE_REGULAR, { notify: false });
  updateTestModePremiumLockState();
}

function getQuestionsCount() {
  const custom = parseInt(document.getElementById('custom-count')?.value, 10);
  const preset = parseInt(document.getElementById('preset-count')?.value, 10);
  return custom || preset || 15;
}

function getSelectedTheme() {
  return document.getElementById('theme-select')?.value || getDefaultQuizThemeFile();
}

function getMainQuestionBankFile() {
  return getDefaultQuizThemeFile();
}

function parseQuestionRangeValue(value) {
  const normalized = String(value ?? '').trim();
  if (!normalized) return null;
  const parsed = parseInt(normalized, 10);
  return Number.isFinite(parsed) ? parsed : null;
}

function normalizeQuestionRange(rawStart, rawEnd) {
  const parsedStart = parseQuestionRangeValue(rawStart);
  const parsedEnd = parseQuestionRangeValue(rawEnd);
  const hasRange = parsedStart !== null || parsedEnd !== null;

  if (!hasRange) {
    return { hasRange: false, start: null, end: null, error: '' };
  }

  const normalizedStart = Math.max(1, parsedStart ?? 1);
  const normalizedEnd = Math.max(1, parsedEnd ?? Number.MAX_SAFE_INTEGER);

  if (normalizedStart > normalizedEnd) {
    return {
      hasRange: true,
      start: normalizedStart,
      end: normalizedEnd,
      error: 'Неверный диапазон вопросов. Начальное число не может быть больше конечного.'
    };
  }

  return {
    hasRange: true,
    start: normalizedStart,
    end: normalizedEnd,
    error: ''
  };
}

function getSelectedQuestionRange() {
  return normalizeQuestionRange(
    document.getElementById('question-range-start')?.value,
    document.getElementById('question-range-end')?.value
  );
}

function getStoredQuestionRange() {
  try {
    localStorage.removeItem(QUESTION_RANGE_START_KEY);
    localStorage.removeItem(QUESTION_RANGE_END_KEY);
  } catch (_) {}

  return normalizeQuestionRange(
    sessionStorage.getItem(QUESTION_RANGE_START_SESSION_KEY),
    sessionStorage.getItem(QUESTION_RANGE_END_SESSION_KEY)
  );
}

function persistQuestionRangeSelection(range) {
  try {
    localStorage.removeItem(QUESTION_RANGE_START_KEY);
    localStorage.removeItem(QUESTION_RANGE_END_KEY);
  } catch (_) {}

  if (!range?.hasRange) {
    sessionStorage.removeItem(QUESTION_RANGE_START_SESSION_KEY);
    sessionStorage.removeItem(QUESTION_RANGE_END_SESSION_KEY);
    return;
  }

  sessionStorage.setItem(QUESTION_RANGE_START_SESSION_KEY, String(range.start));
  sessionStorage.setItem(QUESTION_RANGE_END_SESSION_KEY, String(range.end));
}

function getQuestionRangeLabel(rangeStart, rangeEnd) {
  if (!Number.isInteger(rangeStart) || !Number.isInteger(rangeEnd)) return '';
  return `Диапазон вопросов ${rangeStart}-${rangeEnd}`;
}

function getThemeLabelWithRange(themeFile, rangeStart, rangeEnd) {
  const baseLabel = getThemeLabel(themeFile);
  if (themeFile === FAVORITES_THEME_FILE || themeFile === MISTAKES_THEME_FILE) return baseLabel;
  const rangeLabel = getQuestionRangeLabel(rangeStart, rangeEnd);
  return rangeLabel ? `${baseLabel} · ${rangeLabel}` : baseLabel;
}

function applyQuestionRange(sourceQuestions, range) {
  if (!Array.isArray(sourceQuestions)) return [];
  if (!range?.hasRange) return sourceQuestions;

  const maxQuestionNumber = sourceQuestions.length;
  const effectiveStart = Math.min(Math.max(1, range.start), maxQuestionNumber || 1);
  const effectiveEnd = Math.min(Math.max(effectiveStart, range.end), maxQuestionNumber || effectiveStart);

  return sourceQuestions.reduce((items, question, index) => {
    const questionNumber = index + 1;
    if (questionNumber >= effectiveStart && questionNumber <= effectiveEnd) {
      items.push({ ...question, __sourceIndex: index });
    }
    return items;
  }, []);
}

function pad(value) {
  return String(value).padStart(2, '0');
}

function formatDateTimeToMinute(timestamp) {
  const d = new Date(timestamp);
  return `${pad(d.getDate())}.${pad(d.getMonth() + 1)}.${d.getFullYear()} ${pad(d.getHours())}:${pad(d.getMinutes())}`;
}

function formatDateTimeToSecond(timestamp) {
  const d = new Date(timestamp);
  return `${pad(d.getDate())}.${pad(d.getMonth() + 1)}.${d.getFullYear()} ${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
}

function getMinuteSeed(timestamp) {
  const d = new Date(timestamp);
  return Number(
    `${d.getFullYear()}${pad(d.getMonth() + 1)}${pad(d.getDate())}${pad(d.getHours())}${pad(d.getMinutes())}`
  );
}

function formatDuration(totalSeconds) {
  const sec = Math.max(0, Number(totalSeconds) || 0);
  const hours = Math.floor(sec / 3600);
  const minutes = Math.floor((sec % 3600) / 60);
  const seconds = sec % 60;
  if (hours > 0) {
    return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
  }
  return `${pad(minutes)}:${pad(seconds)}`;
}



function formatStatsNumber(value) {
  const numeric = Number(value);
  const safe = Number.isFinite(numeric) ? numeric : 0;
  return safe.toLocaleString('ru-RU');
}

function formatStatsPercent(value) {
  const numeric = Number(value);
  const safe = Number.isFinite(numeric) ? numeric : 0;
  return `${safe.toFixed(1)}%`;
}

function formatStatsDurationVerbose(totalSeconds) {
  const sec = Math.max(0, Math.round(Number(totalSeconds) || 0));
  const hours = Math.floor(sec / 3600);
  const minutes = Math.floor((sec % 3600) / 60);
  const seconds = sec % 60;
  const parts = [];

  if (hours > 0) parts.push(`${hours} ч`);
  if (minutes > 0 || hours > 0) parts.push(`${minutes} мин`);
  parts.push(`${seconds} сек`);
  return parts.join(' ');
}

function clampStatsValue(value, min = 0, max = 100) {
  const numeric = Number(value);
  if (!Number.isFinite(numeric)) return min;
  return Math.min(max, Math.max(min, numeric));
}

function clamp(value, min = 0, max = 100) {
  return clampStatsValue(value, min, max);
}

function getDayKey(timestamp) {
  const d = new Date(Number(timestamp) || Date.now());
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
}

function getStartOfTodayTimestamp() {
  const now = new Date();
  now.setHours(0, 0, 0, 0);
  return now.getTime();
}

function averageStats(values) {
  if (!Array.isArray(values) || !values.length) return 0;
  const safeValues = values.filter((value) => Number.isFinite(Number(value)));
  if (!safeValues.length) return 0;
  return safeValues.reduce((sum, value) => sum + Number(value), 0) / safeValues.length;
}

function buildStatsSummaryFromHistoryEntry(entry) {
  const normalized = normalizeHistoryEntryRecord(entry);
  if (!normalized?.id) return null;

  const answers = Array.isArray(normalized.answers) ? normalized.answers : [];
  const answeredQuestions = normalizeNonNegativeInteger(normalized.totalQuestions, answers.length);
  const plannedQuestions = Math.max(normalizeNonNegativeInteger(normalized.plannedQuestions, answeredQuestions), answeredQuestions);
  const score = normalizeNonNegativeInteger(normalized.score, 0);
  const timeoutCount = answers.filter((answer) => answer?.timeout).length;
  const incorrectCount = Math.max(0, answeredQuestions - score - timeoutCount);
  const skippedCount = Math.max(0, plannedQuestions - answeredQuestions);

  return normalizeStatsSummaryRecord({
    id: normalized.id,
    startedAt: normalized.startedAt,
    finishedAt: normalized.finishedAt,
    durationSeconds: normalized.durationSeconds,
    score,
    answeredQuestions,
    plannedQuestions,
    incorrectCount,
    skippedCount,
    timeoutCount,
    completionType: normalized.completionType || 'finished',
    stopReason: normalized.stopReason || null,
    stopLabel: normalized.stopLabel || null,
    themeFile: normalized.themeFile || null,
    themeLabel: normalized.themeLabel || getThemeLabel(normalized.themeFile),
    testMode: normalizeTestMode(normalized.testMode),
    modeLabel: normalized.modeLabel || getTestModeLabel(normalized.testMode),
    userName: normalizeUserDisplayName(normalized.userName || '—') || '—'
  });
}

function normalizeStatsSummaryRecord(record) {
  if (!record || typeof record !== 'object' || !record.id) return null;

  const startedAt = normalizePositiveTimestamp(record.startedAt);
  if (!startedAt) return null;

  const finishedAt = normalizePositiveTimestamp(record.finishedAt, startedAt);
  if (finishedAt < startedAt) return null;

  const answeredQuestions = normalizeNonNegativeInteger(record.answeredQuestions, 0);
  const plannedQuestions = Math.max(normalizeNonNegativeInteger(record.plannedQuestions, answeredQuestions), answeredQuestions);
  const score = normalizeNonNegativeInteger(record.score, 0);
  if (answeredQuestions <= 0 || plannedQuestions <= 0 || score > answeredQuestions) return null;

  const timeoutCount = normalizeNonNegativeInteger(record.timeoutCount, 0);
  if (timeoutCount > answeredQuestions) return null;

  const incorrectCount = normalizeNonNegativeInteger(record.incorrectCount, Math.max(0, answeredQuestions - score - timeoutCount));
  const skippedCount = normalizeNonNegativeInteger(record.skippedCount, Math.max(0, plannedQuestions - answeredQuestions));
  const durationSeconds = Math.max(1, normalizeNonNegativeInteger(record.durationSeconds, Math.round((finishedAt - startedAt) / 1000)));

  return {
    id: String(record.id),
    startedAt,
    finishedAt,
    durationSeconds,
    score,
    answeredQuestions,
    plannedQuestions,
    incorrectCount,
    skippedCount,
    timeoutCount,
    completionType: record.completionType || 'finished',
    stopReason: record.stopReason || null,
    stopLabel: record.stopLabel || null,
    themeFile: record.themeFile || null,
    themeLabel: record.themeLabel || getThemeLabel(record.themeFile),
    testMode: normalizeTestMode(record.testMode),
    modeLabel: record.modeLabel || getTestModeLabel(record.testMode),
    userName: normalizeUserDisplayName(record.userName || '—') || '—'
  };
}

function normalizeStatsEntries(entries) {
  if (!Array.isArray(entries)) return [];

  const byId = new Map();
  entries.forEach((entry) => {
    const normalized = normalizeStatsSummaryRecord(entry);
    if (!normalized?.id) return;
    const existing = byId.get(normalized.id);
    if (!existing || existing.finishedAt <= normalized.finishedAt) {
      byId.set(normalized.id, normalized);
    }
  });

  const normalized = Array.from(byId.values()).sort((a, b) => a.finishedAt - b.finishedAt);
  return normalized.length > MAX_STATS_ENTRIES ? normalized.slice(-MAX_STATS_ENTRIES) : normalized;
}

function getStatsEntries() {
  try {
    const raw = localStorage.getItem(STATS_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    const normalized = normalizeStatsEntries(parsed);
    const historySeed = getHistory()
      .map(buildStatsSummaryFromHistoryEntry)
      .filter(Boolean);
    const combined = normalizeStatsEntries([...normalized, ...historySeed]);

    if (JSON.stringify(parsed) !== JSON.stringify(combined)) {
      localStorage.setItem(STATS_KEY, JSON.stringify(combined));
    }

    return combined;
  } catch {
    return [];
  }
}

function saveStatsEntries(entries) {
  localStorage.setItem(STATS_KEY, JSON.stringify(normalizeStatsEntries(entries)));
}

function upsertStatsSummaryEntry(entry) {
  const summary = buildStatsSummaryFromHistoryEntry(entry);
  if (!summary) return;

  const current = getStatsEntries();
  current.push(summary);
  saveStatsEntries(current);
}

function isInterruptedStatsEntry(entry) {
  return entry?.completionType === 'tab_closed' || entry?.stopReason === 'tab_closed';
}

function isCompletedStatsEntry(entry) {
  return !isInterruptedStatsEntry(entry) && entry?.answeredQuestions >= entry?.plannedQuestions;
}

function isEarlyFinishedStatsEntry(entry) {
  return !isInterruptedStatsEntry(entry) && entry?.answeredQuestions < entry?.plannedQuestions;
}


function compareStatsPerformance(a, b) {
  const scoreDiff = (b?.score || 0) - (a?.score || 0);
  if (scoreDiff !== 0) return scoreDiff;

  const accuracyA = a?.answeredQuestions ? a.score / a.answeredQuestions : 0;
  const accuracyB = b?.answeredQuestions ? b.score / b.answeredQuestions : 0;
  const accuracyDiff = accuracyB - accuracyA;
  if (accuracyDiff !== 0) return accuracyDiff;

  const answeredDiff = (b?.answeredQuestions || 0) - (a?.answeredQuestions || 0);
  if (answeredDiff !== 0) return answeredDiff;

  const plannedDiff = (b?.plannedQuestions || 0) - (a?.plannedQuestions || 0);
  if (plannedDiff !== 0) return plannedDiff;

  const durationDiff = (a?.durationSeconds || 0) - (b?.durationSeconds || 0);
  if (durationDiff !== 0) return durationDiff;

  return (a?.finishedAt || 0) - (b?.finishedAt || 0);
}


function computeStatsSnapshotForSection(sectionKey = CURRENT_QUIZ_SECTION) {
  const entries = getStatsEntriesForSection(sectionKey).sort((a, b) => a.finishedAt - b.finishedAt);
  if (!entries.length) return null;

  const now = Date.now();
  const startOfToday = getStartOfTodayTimestamp();
  const startOf7Days = now - 7 * 24 * 60 * 60 * 1000;
  const startOf30Days = now - 30 * 24 * 60 * 60 * 1000;

  const totalAttempts = entries.length;
  const completedTests = entries.filter(isCompletedStatsEntry).length;
  const earlyFinishedTests = entries.filter(isEarlyFinishedStatsEntry).length;
  const interruptedTests = entries.filter(isInterruptedStatsEntry).length;
  const totalAnsweredQuestions = entries.reduce((sum, entry) => sum + entry.answeredQuestions, 0);
  const totalCorrectAnswers = entries.reduce((sum, entry) => sum + entry.score, 0);
  const totalTimeoutQuestions = entries.reduce((sum, entry) => sum + entry.timeoutCount, 0);
  const totalIncorrectAnswers = entries.reduce((sum, entry) => sum + entry.incorrectCount, 0);
  const totalSkippedQuestions = entries.reduce((sum, entry) => sum + entry.skippedCount, 0);
  const totalPlannedQuestions = entries.reduce((sum, entry) => sum + entry.plannedQuestions, 0);
  const totalDurationSeconds = entries.reduce((sum, entry) => sum + entry.durationSeconds, 0);

  const percentByTest = entries.map((entry) => entry.answeredQuestions > 0 ? (entry.score / entry.answeredQuestions) * 100 : 0);
  const averagePercentPerTest = averageStats(percentByTest);
  const bestEntry = getBestStatsEntry(entries);
  const firstStartedAt = entries[0]?.startedAt || now;
  const daysUsing = Math.max(1, Math.floor((getStartOfTodayTimestamp() - new Date(firstStartedAt).setHours(0, 0, 0, 0)) / 86400000) + 1);

  const speedEntries = entries.filter((entry) => isSpeedTestMode(entry.testMode));
  const speedCompletedEntries = speedEntries.filter(isCompletedStatsEntry);
  const speedTotalDurationSeconds = speedEntries.reduce((sum, entry) => sum + entry.durationSeconds, 0);
  const speedAveragePercentPerTest = averageStats(speedEntries.map((entry) => entry.answeredQuestions > 0 ? (entry.score / entry.answeredQuestions) * 100 : 0));
  const speedCompletedRate = speedEntries.length ? (speedCompletedEntries.length / speedEntries.length) * 100 : 0;
  const speedBestEntry = getBestStatsEntry(speedEntries);
  const speedFastestCompletedEntry = speedCompletedEntries.length
    ? [...speedCompletedEntries].sort((a, b) => ((a?.durationSeconds || 0) - (b?.durationSeconds || 0)) || compareStatsPerformance(a, b))[0]
    : null;

  const averageSquaredDeviation = percentByTest.length ? averageStats(percentByTest.map((value) => (value - averagePercentPerTest) ** 2)) : 0;
  const stdDeviation = Math.sqrt(averageSquaredDeviation);
  const stabilityScore = clampStatsValue(100 - stdDeviation * 2);
  const completedRate = totalAttempts ? (completedTests / totalAttempts) * 100 : 0;
  const earlyFinishedRate = totalAttempts ? (earlyFinishedTests / totalAttempts) * 100 : 0;
  const interruptedRate = totalAttempts ? (interruptedTests / totalAttempts) * 100 : 0;

  return {
    totalAttempts,
    completedTests,
    earlyFinishedTests,
    interruptedTests,
    totalAnsweredQuestions,
    totalCorrectAnswers,
    totalIncorrectAnswers,
    totalTimeoutQuestions,
    totalSkippedQuestions,
    totalPlannedQuestions,
    totalDurationSeconds,
    averagePercentPerTest,
    averageCorrectPerTest: totalAttempts ? totalCorrectAnswers / totalAttempts : 0,
    averageErrorsPerTest: totalAttempts ? totalIncorrectAnswers / totalAttempts : 0,
    averagePlannedQuestionsPerTest: totalAttempts ? totalPlannedQuestions / totalAttempts : 0,
    averageAnsweredQuestionsPerTest: totalAttempts ? totalAnsweredQuestions / totalAttempts : 0,
    averageDurationPerTest: totalAttempts ? totalDurationSeconds / totalAttempts : 0,
    averageTimePerQuestion: totalAnsweredQuestions ? totalDurationSeconds / totalAnsweredQuestions : 0,
    averageTimePerCorrect: totalCorrectAnswers ? totalDurationSeconds / totalCorrectAnswers : 0,
    averageTimePerIncorrect: totalIncorrectAnswers ? totalDurationSeconds / totalIncorrectAnswers : 0,
    overallCorrectPercent: totalAnsweredQuestions ? (totalCorrectAnswers / totalAnsweredQuestions) * 100 : 0,
    bestEntry,
    firstStartedAt,
    daysUsing,
    speedEntriesCount: speedEntries.length,
    speedCompletedEntriesCount: speedCompletedEntries.length,
    speedAveragePercentPerTest,
    speedAverageDurationPerTest: speedEntries.length ? speedTotalDurationSeconds / speedEntries.length : 0,
    speedCompletedRate,
    speedBestEntry,
    speedFastestCompletedEntry,
    stabilityScore,
    completedRate,
    earlyFinishedRate,
    interruptedRate,
    testsToday: entries.filter((entry) => entry.finishedAt >= startOfToday).length,
    testsLast7Days: entries.filter((entry) => entry.finishedAt >= startOf7Days).length,
    testsLast30Days: entries.filter((entry) => entry.finishedAt >= startOf30Days).length
  };
}

function getBestStatsEntry(entries) {
  if (!Array.isArray(entries) || !entries.length) return null;
  return [...entries].sort(compareStatsPerformance)[0] || null;
}

function computeOverallUserIndex(stats) {
  if (!stats) return 0;

  const consistency = clampStatsValue(stats.stabilityScore);
  const activity = clampStatsValue(Math.min(100, stats.activeDays * 4 + stats.totalAttempts * 2));
  const score = (
    stats.overallCorrectPercent * 0.35 +
    stats.completedRate * 0.2 +
    stats.averagePercentPerTest * 0.2 +
    consistency * 0.15 +
    activity * 0.1
  );

  return Math.round(clampStatsValue(score));
}

function getUserLevelByIndex(index) {
  if (index >= 90) return 'Эксперт';
  if (index >= 75) return 'Продвинутый';
  if (index >= 60) return 'Уверенный';
  if (index >= 40) return 'Средний';
  return 'Начальный';
}

function computeStatsSnapshot() {
  const entries = getStatsEntries().sort((a, b) => a.finishedAt - b.finishedAt);
  if (!entries.length) return null;

  const now = Date.now();
  const startOfToday = getStartOfTodayTimestamp();
  const startOf7Days = now - 7 * 24 * 60 * 60 * 1000;
  const startOf30Days = now - 30 * 24 * 60 * 60 * 1000;

  const totalAttempts = entries.length;
  const completedTests = entries.filter(isCompletedStatsEntry).length;
  const earlyFinishedTests = entries.filter(isEarlyFinishedStatsEntry).length;
  const interruptedTests = entries.filter(isInterruptedStatsEntry).length;
  const totalAnsweredQuestions = entries.reduce((sum, entry) => sum + entry.answeredQuestions, 0);
  const totalCorrectAnswers = entries.reduce((sum, entry) => sum + entry.score, 0);
  const totalTimeoutQuestions = entries.reduce((sum, entry) => sum + entry.timeoutCount, 0);
  const totalIncorrectAnswers = entries.reduce((sum, entry) => sum + entry.incorrectCount, 0);
  const totalSkippedQuestions = entries.reduce((sum, entry) => sum + entry.skippedCount, 0);
  const totalPlannedQuestions = entries.reduce((sum, entry) => sum + entry.plannedQuestions, 0);
  const totalDurationSeconds = entries.reduce((sum, entry) => sum + entry.durationSeconds, 0);

  const percentByTest = entries.map((entry) => entry.answeredQuestions > 0 ? (entry.score / entry.answeredQuestions) * 100 : 0);
  const averagePercentPerTest = averageStats(percentByTest);
  const averageCorrectPerTest = totalAttempts ? totalCorrectAnswers / totalAttempts : 0;
  const averageErrorsPerTest = totalAttempts ? totalIncorrectAnswers / totalAttempts : 0;
  const averagePlannedQuestionsPerTest = totalAttempts ? totalPlannedQuestions / totalAttempts : 0;
  const averageAnsweredQuestionsPerTest = totalAttempts ? totalAnsweredQuestions / totalAttempts : 0;
  const averageDurationPerTest = totalAttempts ? totalDurationSeconds / totalAttempts : 0;
  const averageTimePerQuestion = totalAnsweredQuestions ? totalDurationSeconds / totalAnsweredQuestions : 0;
  const averageTimePerCorrect = totalCorrectAnswers ? totalDurationSeconds / totalCorrectAnswers : 0;
  const averageTimePerIncorrect = totalIncorrectAnswers ? totalDurationSeconds / totalIncorrectAnswers : 0;
  const overallCorrectPercent = totalAnsweredQuestions ? (totalCorrectAnswers / totalAnsweredQuestions) * 100 : 0;

  const bestEntry = getBestStatsEntry(entries);

  const lastEntry = entries[entries.length - 1] || null;
  const dayKeys = new Set(entries.map((entry) => getDayKey(entry.finishedAt)));
  const firstStartedAt = entries[0]?.startedAt || now;
  const daysUsing = Math.max(1, Math.floor((getStartOfTodayTimestamp() - new Date(firstStartedAt).setHours(0, 0, 0, 0)) / 86400000) + 1);

  const recentToday = entries.filter((entry) => entry.finishedAt >= startOfToday);
  const recent7 = entries.filter((entry) => entry.finishedAt >= startOf7Days);
  const recent30 = entries.filter((entry) => entry.finishedAt >= startOf30Days);

  const speedEntries = entries.filter((entry) => isSpeedTestMode(entry.testMode));
  const speedCompletedEntries = speedEntries.filter(isCompletedStatsEntry);
  const speedEarlyFinishedEntries = speedEntries.filter(isEarlyFinishedStatsEntry);
  const speedInterruptedEntries = speedEntries.filter(isInterruptedStatsEntry);
  const speedTotalAnsweredQuestions = speedEntries.reduce((sum, entry) => sum + entry.answeredQuestions, 0);
  const speedTotalCorrectAnswers = speedEntries.reduce((sum, entry) => sum + entry.score, 0);
  const speedTotalDurationSeconds = speedEntries.reduce((sum, entry) => sum + entry.durationSeconds, 0);
  const speedAveragePercentPerTest = averageStats(speedEntries.map((entry) => entry.answeredQuestions > 0 ? (entry.score / entry.answeredQuestions) * 100 : 0));
  const speedAverageDurationPerTest = speedEntries.length ? speedTotalDurationSeconds / speedEntries.length : 0;
  const speedCompletedRate = speedEntries.length ? (speedCompletedEntries.length / speedEntries.length) * 100 : 0;
  const speedBestEntry = getBestStatsEntry(speedEntries);
  const speedFastestCompletedEntry = speedCompletedEntries.length
    ? [...speedCompletedEntries].sort((a, b) => ((a?.durationSeconds || 0) - (b?.durationSeconds || 0)) || compareStatsPerformance(a, b))[0]
    : null;

  const averageSquaredDeviation = percentByTest.length
    ? averageStats(percentByTest.map((value) => (value - averagePercentPerTest) ** 2))
    : 0;
  const stdDeviation = Math.sqrt(averageSquaredDeviation);
  const stabilityScore = clampStatsValue(100 - stdDeviation * 2);
  const completedRate = totalAttempts ? (completedTests / totalAttempts) * 100 : 0;
  const earlyFinishedRate = totalAttempts ? (earlyFinishedTests / totalAttempts) * 100 : 0;
  const interruptedRate = totalAttempts ? (interruptedTests / totalAttempts) * 100 : 0;
  const aboveAverageTests = percentByTest.filter((value) => value > averagePercentPerTest).length;
  const belowAverageTests = percentByTest.filter((value) => value < averagePercentPerTest).length;

  const stats = {
    totalAttempts,
    completedTests,
    earlyFinishedTests,
    interruptedTests,
    totalAnsweredQuestions,
    totalCorrectAnswers,
    totalIncorrectAnswers,
    totalSkippedQuestions,
    totalTimeoutQuestions,
    totalPlannedQuestions,
    overallCorrectPercent,
    averagePercentPerTest,
    averageCorrectPerTest,
    averageErrorsPerTest,
    averagePlannedQuestionsPerTest,
    averageAnsweredQuestionsPerTest,
    averageDurationPerTest,
    averageTimePerQuestion,
    averageTimePerCorrect,
    averageTimePerIncorrect,
    bestEntry,
    totalDurationSeconds,
    daysUsing,
    activeDays: dayKeys.size,
    testsToday: recentToday.length,
    tests7Days: recent7.length,
    tests30Days: recent30.length,
    questionsToday: recentToday.reduce((sum, entry) => sum + entry.answeredQuestions, 0),
    questions7Days: recent7.reduce((sum, entry) => sum + entry.answeredQuestions, 0),
    questions30Days: recent30.reduce((sum, entry) => sum + entry.answeredQuestions, 0),
    lastEntry,
    completedRate,
    earlyFinishedRate,
    interruptedRate,
    aboveAverageTests,
    belowAverageTests,
    stabilityScore,
    speedEntriesCount: speedEntries.length,
    speedCompletedTests: speedCompletedEntries.length,
    speedEarlyFinishedTests: speedEarlyFinishedEntries.length,
    speedInterruptedTests: speedInterruptedEntries.length,
    speedTotalAnsweredQuestions,
    speedTotalCorrectAnswers,
    speedTotalDurationSeconds,
    speedAveragePercentPerTest,
    speedAverageDurationPerTest,
    speedCompletedRate,
    speedBestEntry,
    speedFastestCompletedEntry
  };

  stats.userIndex = computeOverallUserIndex(stats);
  stats.userLevel = getUserLevelByIndex(stats.userIndex);
  return stats;
}


function buildStatsMetricItem(label, value, note = '') {
  return `
    <div class="stats-metric-item">
      <div class="stats-metric-label">${escapeHtml(label)}</div>
      <div class="stats-metric-value">${escapeHtml(value)}</div>
      ${note ? `<div class="stats-metric-note">${escapeHtml(note)}</div>` : ''}
    </div>
  `;
}

function getStatsPercentMood(percent) {
  const numeric = Number(percent) || 0;
  if (numeric >= 95) return 'Почти идеально';
  if (numeric >= 85) return 'Очень сильный результат';
  if (numeric >= 70) return 'Хороший темп';
  if (numeric >= 50) return 'Есть база';
  return 'Нужно подтянуть';
}

function formatStatsScoreLine(entry) {
  if (!entry) return '—';
  return `${formatStatsNumber(entry.score)} из ${formatStatsNumber(entry.answeredQuestions)}`;
}

function buildStatsHeroCard(stats, bestPercent) {
  if (!stats.bestEntry) {
    return `
      <div class="stats-hero-card">
        <div class="stats-hero-title">Лучший результат</div>
        <div class="stats-hero-score">—</div>
        <div class="stats-hero-subtitle">Результаты появятся после завершения тестов</div>
      </div>
    `;
  }

  const bestDuration = formatStatsDurationVerbose(stats.bestEntry.durationSeconds || 0);
  const bestTheme = stats.bestEntry.themeLabel || 'Без темы';
  const totalQuestions = stats.bestEntry.totalQuestions || stats.bestEntry.answeredQuestions || 0;

  return `
    <div class="stats-hero-card">
      <div class="stats-hero-title">Лучший результат</div>
      <div class="stats-hero-score">${escapeHtml(formatStatsScoreLine(stats.bestEntry))}</div>
      <div class="stats-hero-subtitle">${escapeHtml(formatStatsPercent(bestPercent))} • ${escapeHtml(getStatsPercentMood(bestPercent))}</div>
      <div class="stats-pill-row">
        <div class="stats-pill">Тема: ${escapeHtml(bestTheme)}</div>
        <div class="stats-pill">Всего в тесте: ${escapeHtml(formatStatsNumber(totalQuestions))}</div>
        <div class="stats-pill">Время: ${escapeHtml(bestDuration)}</div>
      </div>
    </div>
  `;
}

function buildStatsSummaryCard(label, value, note = '', accent = '') {
  const accentClass = accent ? ` stats-highlight-card--${accent}` : '';
  return `
    <div class="stats-highlight-card${accentClass}">
      <div class="stats-highlight-label">${escapeHtml(label)}</div>
      <div class="stats-highlight-value">${escapeHtml(value)}</div>
      ${note ? `<div class="stats-highlight-note">${escapeHtml(note)}</div>` : ''}
    </div>
  `;
}

function renderStatsContent() {
  const container = document.getElementById('stats-content');
  if (!container) return;

  const stats = computeStatsSnapshotForSection(sectionKey);
  if (!stats) {
    container.innerHTML = `
      <div class="history-empty">
        Статистика пока пустая. Сначала завершите хотя бы один тест.
      </div>
    `;
    return;
  }

  const bestPercent = stats.bestEntry?.answeredQuestions
    ? (stats.bestEntry.score / stats.bestEntry.answeredQuestions) * 100
    : 0;
  const lastPercent = stats.lastEntry?.answeredQuestions
    ? (stats.lastEntry.score / stats.lastEntry.answeredQuestions) * 100
    : 0;
  const averagePercentMood = getStatsPercentMood(stats.averagePercentPerTest);
  const levelNote = `${stats.userLevel} • индекс ${formatStatsNumber(stats.userIndex)}`;
  const speedBestPercent = stats.speedBestEntry?.answeredQuestions
    ? (stats.speedBestEntry.score / stats.speedBestEntry.answeredQuestions) * 100
    : 0;
  const speedFastestPercent = stats.speedFastestCompletedEntry?.answeredQuestions
    ? (stats.speedFastestCompletedEntry.score / stats.speedFastestCompletedEntry.answeredQuestions) * 100
    : 0;
  const speedAverageMood = getStatsPercentMood(stats.speedAveragePercentPerTest);

  container.innerHTML = `
    <div class="stats-highlight-grid">
      ${buildStatsHeroCard(stats, bestPercent)}
      ${buildStatsSummaryCard('Всего попыток', formatStatsNumber(stats.totalAttempts), `${formatStatsNumber(stats.completedTests)} завершено • ${formatStatsNumber(stats.interruptedTests)} прервано`, 'calm')}
      ${buildStatsSummaryCard('Средний результат', formatStatsPercent(stats.averagePercentPerTest), averagePercentMood, 'success')}
      ${buildStatsSummaryCard('⚡ Режим скорости', formatStatsNumber(stats.speedEntriesCount), `${formatStatsNumber(stats.speedCompletedTests)} завершено • ${formatStatsDurationVerbose(stats.speedAverageDurationPerTest)}`, 'speed')}
      ${buildStatsSummaryCard('Последний результат', stats.lastEntry ? formatStatsScoreLine(stats.lastEntry) : '—', stats.lastEntry ? `${formatStatsPercent(lastPercent)} • ${formatDateTimeToSecond(stats.lastEntry.finishedAt)}` : 'Нет завершённых тестов', 'warm')}
      ${buildStatsSummaryCard('Время в тестах', formatStatsDurationVerbose(stats.totalDurationSeconds), `${formatStatsNumber(stats.activeDays)} активных дней`, 'violet')}
      ${buildStatsSummaryCard('Уровень пользователя', stats.userLevel, levelNote, 'dark')}
    </div>

    <div class="stats-section">
      <div class="stats-section-title">Основные показатели</div>
      <div class="stats-metric-grid">
        ${buildStatsMetricItem('Общее количество пройденных тестов', formatStatsNumber(stats.totalAttempts))}
        ${buildStatsMetricItem('Общее количество завершённых тестов', formatStatsNumber(stats.completedTests))}
        ${buildStatsMetricItem('Общее количество досрочно завершённых тестов', formatStatsNumber(stats.earlyFinishedTests))}
        ${buildStatsMetricItem('Общее количество незавершённых, прерванных тестов', formatStatsNumber(stats.interruptedTests))}
        ${buildStatsMetricItem('Общее количество всех попыток', formatStatsNumber(stats.totalAttempts))}
        ${buildStatsMetricItem('Общее количество отвеченных вопросов', formatStatsNumber(stats.totalAnsweredQuestions))}
        ${buildStatsMetricItem('Общее количество правильных ответов', formatStatsNumber(stats.totalCorrectAnswers))}
        ${buildStatsMetricItem('Общее количество неправильных ответов', formatStatsNumber(stats.totalIncorrectAnswers))}
        ${buildStatsMetricItem('Общее количество пропущенных вопросов', formatStatsNumber(stats.totalSkippedQuestions))}
        ${buildStatsMetricItem('Общее количество вопросов, у которых время закончилось', formatStatsNumber(stats.totalTimeoutQuestions))}
        ${buildStatsMetricItem('Общий процент правильных ответов', formatStatsPercent(stats.overallCorrectPercent), getStatsPercentMood(stats.overallCorrectPercent))}
      </div>
    </div>

    <div class="stats-section">
      <div class="stats-section-title">Средние значения</div>
      <div class="stats-metric-grid">
        ${buildStatsMetricItem('Средний процент за тест', formatStatsPercent(stats.averagePercentPerTest), averagePercentMood)}
        ${buildStatsMetricItem('Среднее количество правильных ответов за тест', formatStatsNumber(stats.averageCorrectPerTest.toFixed(1)))}
        ${buildStatsMetricItem('Среднее количество ошибок за тест', formatStatsNumber(stats.averageErrorsPerTest.toFixed(1)))}
        ${buildStatsMetricItem('Среднее количество вопросов в одном тесте', formatStatsNumber(stats.averagePlannedQuestionsPerTest.toFixed(1)))}
        ${buildStatsMetricItem('Среднее количество реально отвеченных вопросов за тест', formatStatsNumber(stats.averageAnsweredQuestionsPerTest.toFixed(1)))}
        ${buildStatsMetricItem('Среднее время одного теста', formatStatsDurationVerbose(stats.averageDurationPerTest))}
        ${buildStatsMetricItem('Среднее время на один вопрос', formatStatsDurationVerbose(stats.averageTimePerQuestion))}
        ${buildStatsMetricItem('Среднее время на один правильный ответ', formatStatsDurationVerbose(stats.averageTimePerCorrect))}
        ${buildStatsMetricItem('Среднее время на один неправильный ответ', formatStatsDurationVerbose(stats.averageTimePerIncorrect))}
      </div>
    </div>

    <div class="stats-section">
      <div class="stats-section-title">Лучший результат и время</div>
      <div class="stats-metric-grid">
        ${buildStatsMetricItem('Лучший результат за всё время', stats.bestEntry ? formatStatsScoreLine(stats.bestEntry) : '—', stats.bestEntry ? `${formatStatsPercent(bestPercent)} • ${stats.bestEntry.themeLabel || '—'} • ${formatStatsDurationVerbose(stats.bestEntry.durationSeconds || 0)}` : '')}
        ${buildStatsMetricItem('Общее время в тестах', formatStatsDurationVerbose(stats.totalDurationSeconds))}
        ${buildStatsMetricItem('Последний результат', stats.lastEntry ? formatStatsScoreLine(stats.lastEntry) : '—', stats.lastEntry ? `${formatStatsPercent(lastPercent)} • ${formatDateTimeToSecond(stats.lastEntry.finishedAt)}` : '')}
      </div>
    </div>

    <div class="stats-section">
      <div class="stats-section-title">Итоги активности</div>
      <div class="stats-metric-grid">
        ${buildStatsMetricItem('Сколько дней пользователь уже пользуется ботом', formatStatsNumber(stats.daysUsing))}
        ${buildStatsMetricItem('Сколько дней был активен', formatStatsNumber(stats.activeDays))}
        ${buildStatsMetricItem('Сколько тестов решил сегодня', formatStatsNumber(stats.testsToday))}
        ${buildStatsMetricItem('Сколько тестов решил за 7 дней', formatStatsNumber(stats.tests7Days))}
        ${buildStatsMetricItem('Сколько тестов решил за 30 дней', formatStatsNumber(stats.tests30Days))}
        ${buildStatsMetricItem('Сколько вопросов решил сегодня', formatStatsNumber(stats.questionsToday))}
        ${buildStatsMetricItem('Сколько вопросов решил за неделю', formatStatsNumber(stats.questions7Days))}
        ${buildStatsMetricItem('Сколько вопросов решил за месяц', formatStatsNumber(stats.questions30Days))}
        ${buildStatsMetricItem('Последняя дата прохождения теста', stats.lastEntry ? formatDateTimeToSecond(stats.lastEntry.finishedAt) : '—')}
      </div>
    </div>

    <div class="stats-section">
      <div class="stats-section-title">Стабильность и завершение</div>
      <div class="stats-metric-grid">
        ${buildStatsMetricItem('Процент завершённых тестов от всех начатых', formatStatsPercent(stats.completedRate))}
        ${buildStatsMetricItem('Процент досрочно завершённых тестов', formatStatsPercent(stats.earlyFinishedRate))}
        ${buildStatsMetricItem('Процент незавершённых, прерванных тестов', formatStatsPercent(stats.interruptedRate))}
        ${buildStatsMetricItem('Количество тестов выше среднего результата', formatStatsNumber(stats.aboveAverageTests))}
        ${buildStatsMetricItem('Количество тестов ниже среднего результата', formatStatsNumber(stats.belowAverageTests))}
        ${buildStatsMetricItem('Стабильность результатов', formatStatsPercent(stats.stabilityScore))}
        ${buildStatsMetricItem('Общий индекс пользователя', formatStatsNumber(stats.userIndex), stats.userLevel)}
      </div>
    </div>


    <div class="stats-section stats-section-speed">
      <div class="stats-section-title">⚡ Режим на скорость</div>
      <div class="stats-metric-grid">
        ${buildStatsMetricItem('Тестов в режиме скорости', formatStatsNumber(stats.speedEntriesCount))}
        ${buildStatsMetricItem('Завершено в режиме скорости', formatStatsNumber(stats.speedCompletedTests), `Процент завершения: ${formatStatsPercent(stats.speedCompletedRate)}`)}
        ${buildStatsMetricItem('Досрочно завершено в режиме скорости', formatStatsNumber(stats.speedEarlyFinishedTests))}
        ${buildStatsMetricItem('Прервано в режиме скорости', formatStatsNumber(stats.speedInterruptedTests))}
        ${buildStatsMetricItem('Решено вопросов в режиме скорости', formatStatsNumber(stats.speedTotalAnsweredQuestions))}
        ${buildStatsMetricItem('Верных ответов в режиме скорости', formatStatsNumber(stats.speedTotalCorrectAnswers))}
        ${buildStatsMetricItem('Средний результат в режиме скорости', formatStatsPercent(stats.speedAveragePercentPerTest), speedAverageMood)}
        ${buildStatsMetricItem('Среднее время теста в режиме скорости', formatStatsDurationVerbose(stats.speedAverageDurationPerTest))}
        ${buildStatsMetricItem('Лучший результат в режиме скорости', stats.speedBestEntry ? formatStatsScoreLine(stats.speedBestEntry) : '—', stats.speedBestEntry ? `${formatStatsPercent(speedBestPercent)} • ${stats.speedBestEntry.themeLabel || '—'} • ${formatStatsDurationVerbose(stats.speedBestEntry.durationSeconds || 0)}` : 'Пока нет завершённых тестов на скорость')}
        ${buildStatsMetricItem('Рекорд скорости', stats.speedFastestCompletedEntry ? formatStatsDurationVerbose(stats.speedFastestCompletedEntry.durationSeconds || 0) : '—', stats.speedFastestCompletedEntry ? `${formatStatsScoreLine(stats.speedFastestCompletedEntry)} • ${formatStatsPercent(speedFastestPercent)}` : 'Пока нет полностью завершённых тестов на скорость')}
      </div>
    </div>

    <div class="stats-section">
      <div class="stats-section-title">Полезные сводки</div>
      <div class="stats-metric-grid">
        ${buildStatsMetricItem('Тестов пройдено', formatStatsNumber(stats.totalAttempts))}
        ${buildStatsMetricItem('Вопросов решено', formatStatsNumber(stats.totalAnsweredQuestions))}
        ${buildStatsMetricItem('Верных ответов', formatStatsNumber(stats.totalCorrectAnswers))}
        ${buildStatsMetricItem('Ошибок', formatStatsNumber(stats.totalIncorrectAnswers))}
        ${buildStatsMetricItem('Пропущено', formatStatsNumber(stats.totalSkippedQuestions))}
        ${buildStatsMetricItem('Время вышло', formatStatsNumber(stats.totalTimeoutQuestions))}
        ${buildStatsMetricItem('Средний результат', formatStatsPercent(stats.averagePercentPerTest), averagePercentMood)}
        ${buildStatsMetricItem('Общий уровень', stats.userLevel, `Индекс: ${formatStatsNumber(stats.userIndex)}`)}
      </div>
    </div>
  `;
}

function initStatsUi(options = {}) {
  if (statsUiReady) return;
  statsUiReady = true;

  const withButton = options.withButton === true;
  let button = null;

  if (withButton) {
    button = document.createElement('button');
    button.id = 'stats-toggle';
    button.className = 'history-toggle';
    button.textContent = 'Статистика';
  }

  const modal = document.createElement('div');
  modal.id = 'stats-modal';
  modal.className = 'history-modal hidden';
  modal.innerHTML = `
    <div class="history-panel stats-panel">
      <div class="history-panel-header">
        <div>
          <div class="history-title">Статистика</div>
          <div class="history-subtitle">Общие показатели, средние значения, активность и индекс пользователя</div>
        </div>
        <button id="stats-close" class="history-close" aria-label="Закрыть">×</button>
      </div>
      <div id="stats-content" class="stats-content"></div>
    </div>
  `;

  if (button) document.body.appendChild(button);
  document.body.appendChild(modal);

  button?.addEventListener('click', openStatsModal);
  modal.addEventListener('click', (event) => {
    if (event.target === modal) closeStatsModal();
  });
  modal.querySelector('#stats-close')?.addEventListener('click', closeStatsModal);
}

function openStatsModal() {
  renderStatsContent();
  document.body.classList.add('stats-modal-open');
  document.body.classList.add('app-surface-open');
  document.getElementById('stats-modal')?.classList.remove('hidden');
}

function closeStatsModal() {
  document.body.classList.remove('stats-modal-open');
  document.body.classList.remove('app-surface-open');
  document.getElementById('stats-modal')?.classList.add('hidden');
}


function renderNewsContent() {
  const container = document.getElementById('news-list');
  if (!container) return;

  const items = Array.isArray(APP_NEWS_ITEMS) ? APP_NEWS_ITEMS : [];
  if (!items.length) {
    container.innerHTML = '<div class="history-empty">Пока нет новостей.</div>';
    return;
  }

  container.innerHTML = items.map((item) => {
    const details = Array.isArray(item?.items) ? item.items : [];
    return `
      <div class="news-card">
        <div class="news-card-top">
          <span class="news-date">${escapeHtml(item?.date || '')}</span>
          <span class="news-type">${escapeHtml(item?.type || 'Обновление')}</span>
        </div>
        <div class="news-title">${escapeHtml(item?.title || 'Обновление')}</div>
        ${details.length ? `
          <ul class="news-details">
            ${details.map((line) => `<li>${escapeHtml(line)}</li>`).join('')}
          </ul>
        ` : ''}
      </div>
    `;
  }).join('');
}

function initNewsUi(options = {}) {
  if (newsUiReady) return;
  newsUiReady = true;

  const withButton = options.withButton === true;
  let button = null;

  if (withButton) {
    button = document.createElement('button');
    button.id = 'news-toggle';
    button.className = 'history-toggle';
    button.textContent = 'Новости';
  }

  const modal = document.createElement('div');
  modal.id = 'news-modal';
  modal.className = 'history-modal hidden';
  modal.innerHTML = `
    <div class="history-panel news-panel">
      <div class="history-panel-header">
        <div>
          <div class="history-title">Новости</div>
          <div class="history-subtitle">Последние изменения для пользователей</div>
        </div>
        <button id="news-close" class="history-close" aria-label="Закрыть">×</button>
      </div>
      <div id="news-list" class="news-list"></div>
    </div>
  `;

  if (button) document.body.appendChild(button);
  document.body.appendChild(modal);

  button?.addEventListener('click', openNewsModal);
  modal.addEventListener('click', (event) => {
    if (event.target === modal) closeNewsModal();
  });
  modal.querySelector('#news-close')?.addEventListener('click', closeNewsModal);
}

function openNewsModal() {
  renderNewsContent();
  document.body.classList.add('news-modal-open');
  document.body.classList.add('app-surface-open');
  document.getElementById('news-modal')?.classList.remove('hidden');
}

function closeNewsModal() {
  document.body.classList.remove('news-modal-open');
  document.body.classList.remove('app-surface-open');
  document.getElementById('news-modal')?.classList.add('hidden');
}


function initAchievementsUi(options = {}) {
  if (document.getElementById('achievements-modal')) return;

  const withButton = options.withButton === true;
  let button = null;

  if (withButton) {
    button = document.createElement('button');
    button.id = 'achievements-toggle';
    button.className = 'history-toggle';
    button.textContent = 'Достижения';
    button.type = 'button';
  }

  const modal = document.createElement('div');
  modal.id = 'achievements-modal';
  modal.className = 'history-modal hidden';
  modal.innerHTML = `
    <div class="history-panel achievements-panel">
      <div class="history-panel-header">
        <div>
          <div class="history-title">30 достижений</div>
          <div class="history-subtitle">Сложные цели с живым прогрессом по текущему разделу</div>
        </div>
        <button id="achievements-close" class="history-close" type="button" aria-label="Закрыть">×</button>
      </div>
      <div id="achievements-content" class="achievements-content"></div>
    </div>
  `;

  if (button) document.body.appendChild(button);
  document.body.appendChild(modal);

  button?.addEventListener('click', (event) => {
    event.preventDefault();
    event.stopPropagation();
    openAchievementsModalReliable(CURRENT_QUIZ_SECTION);
  });

  modal.addEventListener('click', (event) => {
    if (event.target === modal) closeAchievementsModal();
  });
  modal.querySelector('#achievements-close')?.addEventListener('click', closeAchievementsModal);
}

function buildAchievementProgressInfo(item, context = {}) {
  let info = null;
  try {
    info = typeof item?.progress === 'function' ? item.progress(context) : null;
  } catch (_) {
    info = null;
  }

  const normalized = {
    current: Number(info?.current) || 0,
    target: Math.max(1, Number(info?.target) || 1),
    label: String(info?.label || ''),
    percent: Number(info?.percent),
    unlocked: info?.unlocked === true
  };

  if (!Number.isFinite(normalized.percent)) {
    normalized.percent = Math.round(Math.min(100, Math.max(0, (normalized.current / normalized.target) * 100)));
  } else {
    normalized.percent = Math.round(Math.min(100, Math.max(0, normalized.percent)));
  }

  if (!normalized.label) {
    normalized.label = `${normalized.current} / ${normalized.target}`;
  }

  if (!normalized.unlocked) {
    normalized.unlocked = normalized.current >= normalized.target || normalized.percent >= 100;
  }

  return normalized;
}


function getVisibleRetentionSnapshot() {
  try {
    const streakValue = Number((document.querySelector('.retention-pill-streak b')?.textContent || '').trim());
    const achievementsText = (document.querySelector('.retention-pill-achievements b')?.textContent || '').trim();
    const achievementMatch = achievementsText.match(/(\d+)\s*\/\s*(\d+)/);
    return {
      streakCurrent: Number.isFinite(streakValue) ? streakValue : 0,
      achievementUnlocked: achievementMatch ? Number(achievementMatch[1]) : 0,
      achievementTotal: achievementMatch ? Number(achievementMatch[2]) : 0
    };
  } catch (_) {
    return { streakCurrent: 0, achievementUnlocked: 0, achievementTotal: 0 };
  }
}

function getAchievementContextSafe(sectionKey = CURRENT_QUIZ_SECTION) {
  const context = buildAchievementContext(sectionKey);
  const visible = getVisibleRetentionSnapshot();
  const baseStreak = context?.streak || { current: 0, best: 0, label: '0 дн.' };
  const safeCurrent = Math.max(Number(baseStreak.current) || 0, Number(visible.streakCurrent) || 0);
  context.streak = {
    current: safeCurrent,
    best: Math.max(Number(baseStreak.best) || 0, safeCurrent),
    label: safeCurrent > 0 ? `${safeCurrent} дн.` : '0 дн.'
  };
  return context;
}

function getAchievementSnapshotSafe(sectionKey = CURRENT_QUIZ_SECTION) {
  const context = getAchievementContextSafe(sectionKey);
  const previouslyUnlocked = new Set(getUnlockedAchievementIds(sectionKey));
  const currentlyUnlocked = ACHIEVEMENTS_CONFIG.filter((item) => {
    try {
      return buildAchievementProgressInfo(item, context).unlocked;
    } catch (_) {
      return false;
    }
  });
  const currentlyUnlockedIds = currentlyUnlocked.map((item) => item.id);
  const mergedUnlockedIds = [...new Set([...previouslyUnlocked, ...currentlyUnlockedIds])].filter((id) =>
    ACHIEVEMENTS_CONFIG.some((item) => item.id === id)
  );
  const mergedUnlockedIdSet = new Set(mergedUnlockedIds);
  const unlocked = ACHIEVEMENTS_CONFIG.filter((item) => mergedUnlockedIdSet.has(item.id));
  const newlyUnlocked = currentlyUnlocked.filter((item) => !previouslyUnlocked.has(item.id));
  saveUnlockedAchievementIds(mergedUnlockedIds, sectionKey);
  return {
    context,
    unlocked,
    newlyUnlocked,
    totalAvailable: ACHIEVEMENTS_CONFIG.length,
    totalUnlocked: mergedUnlockedIds.length
  };
}

function renderAchievementsContent(sectionKey = CURRENT_QUIZ_SECTION) {
  const container = document.getElementById('achievements-content');
  if (!container) return;

  const snapshot = getAchievementSnapshotSafe(sectionKey);
  const unlockedIds = new Set((snapshot?.unlocked || []).map((item) => item.id));
  const total = ACHIEVEMENTS_CONFIG.length;
  const unlockedCount = unlockedIds.size;
  const percent = total ? Math.round((unlockedCount / total) * 100) : 0;
  const sectionLabel = escapeHtml(getSectionLabel(sectionKey) || CURRENT_SECTION_CONFIG.label || 'Раздел');

  container.innerHTML = `
    <div class="achievements-summary-card">
      <div class="achievements-summary-top">
        <div>
          <div class="achievements-summary-label">${sectionLabel}</div>
          <div class="achievements-summary-value">${unlockedCount} / ${total}</div>
        </div>
        <div class="achievements-summary-percent">${percent}%</div>
      </div>
      <div class="section-progress-track achievements-progress-track">
        <div class="section-progress-fill" style="width:${clamp(percent, 0, 100)}%"></div>
      </div>
      <div class="achievements-summary-note">У каждого достижения есть свой живой прогресс. Открытые отмечаются автоматически.</div>
    </div>
    <div class="achievements-grid">
      ${ACHIEVEMENTS_CONFIG.map((item) => {
        const rawProgress = buildAchievementProgressInfo(item, snapshot.context);
        const unlocked = unlockedIds.has(item.id) || rawProgress.unlocked;
        const progress = unlocked ? { ...rawProgress, percent: 100 } : rawProgress;
        return `
          <div class="achievement-card ${unlocked ? 'unlocked' : 'locked'}">
            <div class="achievement-card-icon">${escapeHtml(item.icon || '🏅')}</div>
            <div class="achievement-card-body">
              <div class="achievement-card-title-row">
                <div class="achievement-card-title">${escapeHtml(item.title || 'Достижение')}</div>
                <span class="achievement-card-state">${unlocked ? 'Открыто' : 'В процессе'}</span>
              </div>
              <div class="achievement-card-desc">${escapeHtml(item.description || '')}</div>
              <div class="achievement-card-progress-meta">${escapeHtml(progress.label)}</div>
              <div class="section-progress-track achievement-inline-track">
                <div class="section-progress-fill" style="width:${clamp(progress.percent, 0, 100)}%"></div>
              </div>
            </div>
          </div>
        `;
      }).join('')}
    </div>
  `;
}

function openAchievementsModal(sectionKey = CURRENT_QUIZ_SECTION) {
  ensureAchievementsModalReady();
  renderAchievementsContent(sectionKey);
  const modal = document.getElementById('achievements-modal');
  if (!modal) throw new Error('Achievements modal element not found');
  modal.classList.remove('hidden');
  modal.style.display = 'flex';
  modal.style.zIndex = '20050';
  document.body.classList.add('achievements-modal-open');
  document.body.classList.add('app-surface-open');
}

function closeAchievementsModal() {
  document.body.classList.remove('achievements-modal-open');
  document.body.classList.remove('history-modal-open');
  document.body.classList.remove('app-surface-open');
  document.body.classList.remove('app-menu-open');
  const modal = document.getElementById('achievements-modal');
  if (modal) {
    modal.classList.add('hidden');
    modal.style.display = '';
  }
  document.getElementById('app-menu-overlay')?.classList.add('hidden');
}

function ensureAchievementsModalReady(forceRebuild = false) {
  const existing = document.getElementById('achievements-modal');
  if (existing && forceRebuild) {
    existing.remove();
  }
  if (!document.getElementById('achievements-modal')) {
    initAchievementsUi({ withButton: false });
  }
  const modal = document.getElementById('achievements-modal');
  if (modal) {
    modal.style.zIndex = '20050';
  }
}

function renderAchievementsContentSafe(sectionKey = CURRENT_QUIZ_SECTION) {
  const container = document.getElementById('achievements-content');
  if (!container) return;
  try {
    renderAchievementsContent(sectionKey);
  } catch (error) {
    console.error('Achievements render failed:', error);
    const total = Array.isArray(ACHIEVEMENTS_CONFIG) ? ACHIEVEMENTS_CONFIG.length : 0;
    const sectionLabel = escapeHtml(getSectionLabel(sectionKey) || CURRENT_SECTION_CONFIG?.label || 'Раздел');
    const itemsHtml = (Array.isArray(ACHIEVEMENTS_CONFIG) ? ACHIEVEMENTS_CONFIG : []).map((item) => `
      <div class="achievement-card locked">
        <div class="achievement-card-icon">${escapeHtml(item?.icon || '🏅')}</div>
        <div class="achievement-card-body">
          <div class="achievement-card-title-row">
            <div class="achievement-card-title">${escapeHtml(item?.title || 'Достижение')}</div>
            <span class="achievement-card-state">В процессе</span>
          </div>
          <div class="achievement-card-desc">${escapeHtml(item?.description || '')}</div>
          <div class="achievement-card-progress-meta">0%</div>
          <div class="section-progress-track achievement-inline-track"><div class="section-progress-fill" style="width:0%"></div></div>
        </div>
      </div>
    `).join('');
    container.innerHTML = `
      <div class="achievements-summary-card">
        <div class="achievements-summary-top">
          <div>
            <div class="achievements-summary-label">${sectionLabel}</div>
            <div class="achievements-summary-value">0 / ${total}</div>
          </div>
          <div class="achievements-summary-percent">0%</div>
        </div>
        <div class="section-progress-track achievements-progress-track"><div class="section-progress-fill" style="width:0%"></div></div>
      </div>
      <div class="achievements-grid">${itemsHtml}</div>
    `;
  }
}

function openAchievementsModalReliable(sectionKey = CURRENT_QUIZ_SECTION) {
  try {
    ensureAchievementsModalReady(false);
  } catch (_) {}
  try {
    renderAchievementsContentSafe(sectionKey);
  } catch (_) {}
  const modal = document.getElementById('achievements-modal');
  if (!modal) return false;
  document.body.classList.add('history-modal-open');
  document.body.classList.add('app-surface-open');
  modal.classList.remove('hidden');
  modal.style.display = 'flex';
  modal.style.zIndex = '25000';
  return false;
}

function openAchievementsModalSafe(sectionKey = CURRENT_QUIZ_SECTION) {
  return openAchievementsModalReliable(sectionKey);
}

window.__openAchievementsFromInline = function(event) {
  try {
    event?.preventDefault?.();
    event?.stopPropagation?.();
    event?.stopImmediatePropagation?.();
  } catch (_) {}
  openAchievementsModalReliable(CURRENT_QUIZ_SECTION);
  return false;
};

window.__forceOpenAchievements = function(sectionKey = CURRENT_QUIZ_SECTION) {
  openAchievementsModalSafe(sectionKey);
  return false;
};

if (!window.__achievementsGlobalClickBound) {
  window.__achievementsGlobalClickBound = true;
  document.addEventListener('click', (event) => {
    const target = event.target.closest('[data-action="achievements"], [data-menu-action="achievements"], #achievements-toggle');
    if (!target) return;
    event.preventDefault();
    event.stopPropagation();
    event.stopImmediatePropagation?.();
    openAchievementsModalReliable(CURRENT_QUIZ_SECTION);
  }, true);
}

function normalizeUserDisplayName(value) {
  return String(value ?? '')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, 80);
}


function getFrontendBrowserAccessSalt() {
  return FRONTEND_BROWSER_ACCESS_SALT_PARTS.join('');
}

function getFrontendBrowserFriendName() {
  return FRONTEND_BROWSER_ACCESS_NAME_PARTS.join('');
}

function getFrontendBrowserFriendUserId() {
  return FRONTEND_BROWSER_ACCESS_USER_ID_PARTS.join('');
}

function getFrontendBrowserFriendUsername() {
  return FRONTEND_BROWSER_ACCESS_USERNAME_PARTS.join('');
}

function hasBrowserGuardEndpoint() {
  return !!FRONTEND_BROWSER_ACCESS_ENABLED;
}

function normalizeBrowserGuardCode(value) {
  return String(value || '').trim().slice(0, 120);
}

function frontendBrowserHash(value) {
  const input = String(value || '');
  let h1 = 0xdeadbeef ^ input.length;
  let h2 = 0x41c6ce57 ^ input.length;

  for (let i = 0; i < input.length; i += 1) {
    const ch = input.charCodeAt(i);
    h1 = Math.imul(h1 ^ ch, 2654435761);
    h2 = Math.imul(h2 ^ ch, 1597334677);
  }

  h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507) ^ Math.imul(h2 ^ (h2 >>> 13), 3266489909);
  h2 = Math.imul(h2 ^ (h2 >>> 16), 2246822507) ^ Math.imul(h1 ^ (h1 >>> 13), 3266489909);

  return `${(h2 >>> 0).toString(16).padStart(8, '0')}${(h1 >>> 0).toString(16).padStart(8, '0')}`;
}

function encodeFrontendBrowserPayload(payload) {
  try {
    return btoa(unescape(encodeURIComponent(JSON.stringify(payload || {}))));
  } catch {
    return '';
  }
}

function decodeFrontendBrowserPayload(value) {
  try {
    return JSON.parse(decodeURIComponent(escape(atob(String(value || '')))));
  } catch {
    return null;
  }
}

function signFrontendBrowserPayload(payloadPart) {
  return frontendBrowserHash(`${payloadPart}|${getFrontendBrowserAccessSalt()}|${QUIZ_STORAGE_NAMESPACE}`);
}

function createFrontendBrowservalue() {
  const now = Date.now();
  const payload = {
    ok: true,
    src: BROWSER_GUARD_SESSION_SOURCE,
    name: getFrontendBrowserFriendName(),
    userId: getFrontendBrowserFriendUserId(),
    username: getFrontendBrowserFriendUsername(),
    iat: now,
    exp: now + FRONTEND_BROWSER_ACCESS_value_TTL_MS
  };
  const encoded = encodeFrontendBrowserPayload(payload);
  if (!encoded) return '';
  return `${encoded}.${signFrontendBrowserPayload(encoded)}`;
}

function parseFrontendBrowservalue(value) {
  const [encoded, signature] = String(value || '').split('.');
  if (!encoded || !signature) return null;
  if (signFrontendBrowserPayload(encoded) !== signature) return null;

  const payload = decodeFrontendBrowserPayload(encoded);
  if (!payload || payload.ok !== true || payload.src !== BROWSER_GUARD_SESSION_SOURCE) return null;
  if (Number(payload.exp || 0) && Date.now() > Number(payload.exp)) return null;

  return normalizeBrowserGuardSession({
    ok: true,
    value,
    name: payload.name,
    userId: payload.userId,
    username: payload.username,
    expiresAt: Number(payload.exp || 0)
  });
}

function readBrowserGuardvalue() {
  try {
    return String(sessionStorage.getItem(BROWSER_GUARD_value_KEY) || localStorage.getItem(BROWSER_GUARD_value_KEY) || '').trim();
  } catch {
    return '';
  }
}

function writeBrowserGuardvalue(value) {
  const normalized = String(value || '').trim();
  try {
    if (normalized) {
      sessionStorage.setItem(BROWSER_GUARD_value_KEY, normalized);
      localStorage.setItem(BROWSER_GUARD_value_KEY, normalized);
    } else {
      sessionStorage.removeItem(BROWSER_GUARD_value_KEY);
      localStorage.removeItem(BROWSER_GUARD_value_KEY);
    }
  } catch {
    // ничего
  }
}

function clearBrowserGuardSession() {
  browserGuardSession = null;
  browserGuardVerifiedAt = 0;
  writeBrowserGuardvalue('');
  try {
    if (String(localStorage.getItem(USER_NAME_SOURCE_KEY) || '') === BROWSER_GUARD_SESSION_SOURCE) {
      localStorage.removeItem(USER_NAME_KEY);
      localStorage.removeItem(USER_NAME_SOURCE_KEY);
    }
  } catch {
    // ничего
  }
}

function normalizeBrowserGuardSession(data) {
  if (!data || typeof data !== 'object' || data.ok !== true) return null;
  const value = String(data.value || readBrowserGuardvalue() || '').trim();
  const name = normalizeUserDisplayName(data.name || data.displayName || getFrontendBrowserFriendName());
  const rawUserId = String(data.userId || data.friendId || getFrontendBrowserFriendUserId()).replace(/\D+/g, '').slice(0, 18);
  const userId = normalizeTelegramUserId(rawUserId || getFrontendBrowserFriendUserId()) || getFrontendBrowserFriendUserId();
  const username = normalizeTelegramUsername(data.username || getFrontendBrowserFriendUsername());
  const expiresAt = Number(data.expiresAt || data.exp || 0) || 0;
  return {
    ok: true,
    source: BROWSER_GUARD_SESSION_SOURCE,
    value,
    name,
    userId,
    username,
    expiresAt
  };
}

function applyBrowserGuardSession(session) {
  const normalized = normalizeBrowserGuardSession(session);
  if (!normalized) return null;

  browserGuardSession = normalized;
  browserGuardVerifiedAt = Date.now();
  if (normalized.value) writeBrowserGuardvalue(normalized.value);
  saveUserName(normalized.name, BROWSER_GUARD_SESSION_SOURCE);
  saveTelegramUserMeta({ userId: normalized.userId, username: normalized.username });
  return normalized;
}

function hasVerifiedBrowserGuardSession() { return false; }

function getCurrentBrowserGuardSession() {
  return hasVerifiedBrowserGuardSession() ? browserGuardSession : null;
}

async function verifyBrowserGuardSession() { return null; }

async function loginWithBrowserGuardCode(code) {
  const normalizedCode = normalizeBrowserGuardCode(code);
  if (!FRONTEND_BROWSER_ACCESS_ENABLED) {
    throw new Error('Браузерный вход отключён. Откройте сайт через Telegram WebApp.');
  }
  if (!normalizedCode) {
    throw new Error('Введите личный код доступа.');
  }

  const codeHash = frontendBrowserHash(`${normalizedCode}|${getFrontendBrowserAccessSalt()}`);
  const codeHashLower = frontendBrowserHash(`${normalizedCode.toLowerCase()}|${getFrontendBrowserAccessSalt()}`);
  const allowed = FRONTEND_BROWSER_ACCESS_CODE_HASHES.includes(codeHash) || FRONTEND_BROWSER_ACCESS_CODE_HASHES.includes(codeHashLower);

  if (!allowed) {
    clearBrowserGuardSession();
    throw new Error('Неверный код доступа.');
  }

  const value = createFrontendBrowservalue();
  if (!value) throw new Error('Не удалось создать браузерную сессию.');

  return applyBrowserGuardSession({
    ok: true,
    value,
    name: getFrontendBrowserFriendName(),
    userId: getFrontendBrowserFriendUserId(),
    username: getFrontendBrowserFriendUsername(),
    expiresAt: Date.now() + FRONTEND_BROWSER_ACCESS_value_TTL_MS
  });
}

function getUserNamesByTelegramIdStorageKey() {
  return 'quizUserNamesByTelegramId_v1';
}

function readStoredUserNamesByTelegramId() {
  try {
    const raw = JSON.parse(localStorage.getItem(getUserNamesByTelegramIdStorageKey()) || '{}');
    if (!raw || typeof raw !== 'object' || Array.isArray(raw)) return {};

    const normalized = {};
    Object.entries(raw).forEach(([userId, value]) => {
      const normalizedUserId = normalizeTelegramUserId(userId);
      if (!normalizedUserId) return;

      if (typeof value === 'string') {
        const userName = normalizeUserDisplayName(value);
        if (userName) {
          normalized[normalizedUserId] = { name: userName, source: 'manual' };
        }
        return;
      }

      if (!value || typeof value !== 'object') return;
      const userName = normalizeUserDisplayName(value.name || value.userName || value.value);
      if (!userName) return;

      normalized[normalizedUserId] = {
        name: userName,
        source: String(value.source || 'manual')
      };
    });

    return normalized;
  } catch {
    return {};
  }
}

function writeStoredUserNamesByTelegramId(map) {
  try {
    localStorage.setItem(getUserNamesByTelegramIdStorageKey(), JSON.stringify(map && typeof map === 'object' ? map : {}));
  } catch {
    // ничего
  }
}

function getTelegramWebAppInitData(webApp = window.Telegram?.WebApp) {
  return String(webApp?.initData || '').trim();
}

function hasTelegramWebAppInitDataHash(webApp = window.Telegram?.WebApp) {
  const initData = getTelegramWebAppInitData(webApp);
  return !!initData && /(?:^|&)hash=/.test(initData);
}

function getTrustedTelegramWebAppUser() {
  return window.QuizoraAccess?.user || null;
}

function hasTrustedTelegramWebAppIdentity() {
  return !!getTrustedTelegramWebAppUser();
}

function getLiveTelegramWebAppUser() {
  return getTrustedTelegramWebAppUser();
}

function getStoredUserNameForTelegramUser(userId) {
  const normalizedUserId = normalizeTelegramUserId(userId);
  if (!normalizedUserId) return '';
  const map = readStoredUserNamesByTelegramId();
  return normalizeUserDisplayName(map?.[normalizedUserId]?.name || '');
}

function getBestAvailableCurrentUserName() {
  const liveUser = getLiveTelegramWebAppUser();
  const liveUserId = normalizeTelegramUserId(liveUser?.id);
  const liveTelegramName = getTelegramWebAppUserDisplayName(liveUser);

  if (liveUserId) {
    const storedForLiveUser = getStoredUserNameForTelegramUser(liveUserId);
    if (storedForLiveUser) return storedForLiveUser;
    if (liveTelegramName) return liveTelegramName;
    return '';
  }

  if (liveTelegramName) return liveTelegramName;

  if (window.Telegram?.WebApp) {
    return '';
  }

  const browserSession = getCurrentBrowserGuardSession();
  if (browserSession?.name) return browserSession.name;

  try {
    const source = String(localStorage.getItem(USER_NAME_SOURCE_KEY) || '');
    if (source === BROWSER_GUARD_SESSION_SOURCE && hasVerifiedBrowserGuardSession()) {
      return normalizeUserDisplayName(localStorage.getItem(USER_NAME_KEY));
    }
  } catch {
    // ничего
  }

  return '';
}

function getStoredUserName() {
  return getBestAvailableCurrentUserName();
}

function saveUserName(value, source = 'manual') {
  const normalized = normalizeUserDisplayName(value);
  if (!normalized) return '';

  const liveUser = getLiveTelegramWebAppUser();
  const liveUserId = normalizeTelegramUserId(liveUser?.id) || normalizeTelegramUserId(getCurrentTelegramUserMeta()?.userId);

  try {
    localStorage.setItem(USER_NAME_KEY, normalized);
    localStorage.setItem(USER_NAME_SOURCE_KEY, String(source || 'manual'));

    if (liveUserId) {
      const map = readStoredUserNamesByTelegramId();
      map[liveUserId] = {
        name: normalized,
        source: String(source || 'manual')
      };
      writeStoredUserNamesByTelegramId(map);
    }
  } catch {
    // ничего
  }

  renderUserNameBadge();
  return normalized;
}

function isBrowserAdminLoginName(value) {
  return normalizeUserDisplayName(value).toLowerCase() === BROWSER_ADMIN_LOGIN_NAME.toLowerCase();
}

function setBrowserAdminAuthorized(enabled) {
  // Старый браузерный вход через localStorage отключён: его можно было подделать из DevTools.
  try {
    localStorage.removeItem(BROWSER_ADMIN_AUTH_KEY);
  } catch {
    // ничего
  }
}

function isBrowserAdminAuthorized() {
  // Не доверяем localStorage/sessionStorage для входа без Telegram WebApp.
  return false;
}

function clearUntrustedBrowserIdentityStorage() {
  if (hasTrustedTelegramWebAppIdentity() || hasVerifiedBrowserGuardSession()) return;

  try {
    localStorage.removeItem(BROWSER_ADMIN_AUTH_KEY);

    const storedSource = String(localStorage.getItem(USER_NAME_SOURCE_KEY) || '').trim().toLowerCase();
    const storedName = normalizeUserDisplayName(localStorage.getItem(USER_NAME_KEY));

    if (storedSource === 'browser_admin' || isBrowserAdminLoginName(storedName)) {
      localStorage.removeItem(USER_NAME_KEY);
      localStorage.removeItem(USER_NAME_SOURCE_KEY);
    }

    localStorage.removeItem(TELEGRAM_USER_META_KEY);
  } catch {
    // ничего
  }
}

function hasResolvedTelegramIdentity() {
  return hasTrustedTelegramWebAppIdentity() || hasVerifiedBrowserGuardSession();
}

function normalizeTelegramUserId(value) {
  if (value === null || value === undefined || value === '') return '';

  const raw = String(value).trim();
  if (!raw) return '';

  const numeric = Number(raw);
  if (Number.isFinite(numeric) && numeric > 0) {
    return String(Math.trunc(numeric));
  }

  return /^\d+$/.test(raw) ? raw : '';
}

function normalizeTelegramUsername(value) {
  return String(value ?? '')
    .replace(/^@+/, '')
    .replace(/\s+/g, '')
    .trim()
    .slice(0, 64);
}

function extractTelegramWebAppUserMeta(user) {
  if (!user || typeof user !== 'object') {
    return { userId: '', username: '' };
  }

  return {
    userId: normalizeTelegramUserId(user.id),
    username: normalizeTelegramUsername(user.username)
  };
}

function getStoredTelegramUserMeta() {
  try {
    const raw = localStorage.getItem(TELEGRAM_USER_META_KEY);
    const parsed = raw ? JSON.parse(raw) : {};
    return {
      userId: normalizeTelegramUserId(parsed?.userId),
      username: normalizeTelegramUsername(parsed?.username)
    };
  } catch {
    return { userId: '', username: '' };
  }
}

function saveTelegramUserMeta(meta) {
  const normalized = {
    userId: normalizeTelegramUserId(meta?.userId),
    username: normalizeTelegramUsername(meta?.username)
  };

  try {
    localStorage.setItem(TELEGRAM_USER_META_KEY, JSON.stringify(normalized));
  } catch {
    // ничего
  }

  return normalized;
}

function getCurrentTelegramUserMeta() {
  const trustedUser = getTrustedTelegramWebAppUser();
  const liveMeta = extractTelegramWebAppUserMeta(trustedUser);
  if (liveMeta.userId || liveMeta.username) {
    return saveTelegramUserMeta(liveMeta);
  }
  return { userId: '', username: '' };
}

function formatTelegramUsernameForReport(value) {
  const username = normalizeTelegramUsername(value);
  return username ? `@${username}` : 'недоступен';
}


function clipFrontEndMetaString(value, maxLength = 280) {
  const normalized = String(value ?? '').replace(/\s+/g, ' ').trim();
  if (!normalized) return '';
  return normalized.length > maxLength ? `${normalized.slice(0, maxLength - 1)}…` : normalized;
}

function normalizeFrontEndMeta(meta) {
  const raw = meta && typeof meta === 'object' ? meta : {};
  const normalizeNumber = (value) => Number.isFinite(Number(value)) ? Number(value) : null;
  const normalizeBoolean = (value) => typeof value === 'boolean' ? value : null;
  const normalizeString = (value, maxLength = 280) => clipFrontEndMetaString(value, maxLength);
  const normalizeStringArray = (value, maxItems = 8, maxLength = 48) => Array.isArray(value)
    ? value.map((item) => normalizeString(item, maxLength)).filter(Boolean).slice(0, maxItems)
    : [];

  return {
    capturedAt: normalizeNumber(raw.capturedAt),
    deviceModel: normalizeString(raw.deviceModel, 120),
    osName: normalizeString(raw.osName, 80),
    osVersion: normalizeString(raw.osVersion, 80),
    browserName: normalizeString(raw.browserName, 80),
    browserVersion: normalizeString(raw.browserVersion, 80),
    userAgent: normalizeString(raw.userAgent, 700),
    platform: normalizeString(raw.platform, 120),
    language: normalizeString(raw.language, 40),
    languages: normalizeStringArray(raw.languages, 8, 32),
    timezone: normalizeString(raw.timezone, 80),
    online: normalizeBoolean(raw.online),
    cookieEnabled: normalizeBoolean(raw.cookieEnabled),
    hardwareConcurrency: normalizeNumber(raw.hardwareConcurrency),
    deviceMemory: normalizeNumber(raw.deviceMemory),
    maxTouchPoints: normalizeNumber(raw.maxTouchPoints),
    screenWidth: normalizeNumber(raw.screenWidth),
    screenHeight: normalizeNumber(raw.screenHeight),
    availWidth: normalizeNumber(raw.availWidth),
    availHeight: normalizeNumber(raw.availHeight),
    colorDepth: normalizeNumber(raw.colorDepth),
    viewportWidth: normalizeNumber(raw.viewportWidth),
    viewportHeight: normalizeNumber(raw.viewportHeight),
    devicePixelRatio: normalizeNumber(raw.devicePixelRatio),
    connectionType: normalizeString(raw.connectionType, 40),
    connectionEffectiveType: normalizeString(raw.connectionEffectiveType, 40),
    connectionDownlink: normalizeNumber(raw.connectionDownlink),
    connectionRtt: normalizeNumber(raw.connectionRtt),
    connectionSaveData: normalizeBoolean(raw.connectionSaveData),
    telegramWebAppAvailable: normalizeBoolean(raw.telegramWebAppAvailable),
    telegramWebAppPlatform: normalizeString(raw.telegramWebAppPlatform, 80),
    telegramWebAppVersion: normalizeString(raw.telegramWebAppVersion, 80),
    telegramWebAppColorScheme: normalizeString(raw.telegramWebAppColorScheme, 40),
    telegramWebAppIsExpanded: normalizeBoolean(raw.telegramWebAppIsExpanded),
    telegramWebAppViewportHeight: normalizeNumber(raw.telegramWebAppViewportHeight),
    telegramWebAppViewportStableHeight: normalizeNumber(raw.telegramWebAppViewportStableHeight),
    telegramStartParam: normalizeString(raw.telegramStartParam, 120),
    telegramThemeParamsKeys: normalizeNumber(raw.telegramThemeParamsKeys),
    telegramAndroidAppVersion: normalizeString(raw.telegramAndroidAppVersion, 40),
    telegramAndroidVersion: normalizeString(raw.telegramAndroidVersion, 40),
    telegramAndroidSdkVersion: normalizeString(raw.telegramAndroidSdkVersion, 40),
    telegramAndroidPerformanceClass: normalizeString(raw.telegramAndroidPerformanceClass, 40)
  };
}

function isMeaningfulFrontEndMeta(meta) {
  const normalized = normalizeFrontEndMeta(meta);
  return Boolean(
    normalized.userAgent
    || normalized.deviceModel
    || normalized.osName
    || normalized.browserName
    || normalized.language
    || normalized.timezone
    || (normalized.screenWidth !== null && normalized.screenWidth > 0 && normalized.screenHeight !== null && normalized.screenHeight > 0)
    || (normalized.viewportWidth !== null && normalized.viewportWidth > 0 && normalized.viewportHeight !== null && normalized.viewportHeight > 0)
    || (normalized.hardwareConcurrency !== null && normalized.hardwareConcurrency > 0)
    || (normalized.deviceMemory !== null && normalized.deviceMemory > 0)
    || normalized.telegramWebAppAvailable === true
    || normalized.telegramWebAppPlatform
    || normalized.telegramWebAppVersion
  );
}

function mergeFrontEndMetaSnapshots(baseMeta, candidateMeta) {
  const base = normalizeFrontEndMeta(baseMeta);
  const candidate = normalizeFrontEndMeta(candidateMeta);
  const merged = { ...base };
  const numericKeys = [
    'capturedAt',
    'hardwareConcurrency',
    'deviceMemory',
    'maxTouchPoints',
    'screenWidth',
    'screenHeight',
    'availWidth',
    'availHeight',
    'colorDepth',
    'viewportWidth',
    'viewportHeight',
    'devicePixelRatio',
    'connectionDownlink',
    'connectionRtt',
    'telegramWebAppViewportHeight',
    'telegramWebAppViewportStableHeight',
    'telegramThemeParamsKeys'
  ];
  const positiveOnlyNumericKeys = new Set([
    'screenWidth',
    'screenHeight',
    'availWidth',
    'availHeight',
    'viewportWidth',
    'viewportHeight',
    'devicePixelRatio',
    'hardwareConcurrency',
    'deviceMemory',
    'maxTouchPoints',
    'connectionDownlink',
    'telegramWebAppViewportHeight',
    'telegramWebAppViewportStableHeight'
  ]);
  const stringKeys = [
    'deviceModel',
    'osName',
    'osVersion',
    'browserName',
    'browserVersion',
    'userAgent',
    'platform',
    'language',
    'timezone',
    'connectionType',
    'connectionEffectiveType',
    'telegramWebAppPlatform',
    'telegramWebAppVersion',
    'telegramWebAppColorScheme',
    'telegramStartParam',
    'telegramAndroidAppVersion',
    'telegramAndroidVersion',
    'telegramAndroidSdkVersion',
    'telegramAndroidPerformanceClass'
  ];
  const booleanKeys = [
    'online',
    'cookieEnabled',
    'connectionSaveData',
    'telegramWebAppAvailable',
    'telegramWebAppIsExpanded'
  ];

  numericKeys.forEach((key) => {
    const value = candidate[key];
    if (value === null || value === undefined || Number.isNaN(value)) return;
    if (positiveOnlyNumericKeys.has(key) && Number(value) <= 0) return;
    merged[key] = Number(value);
  });

  stringKeys.forEach((key) => {
    const value = candidate[key];
    if (typeof value === 'string' && value.trim()) {
      merged[key] = value;
    }
  });

  booleanKeys.forEach((key) => {
    const value = candidate[key];
    if (typeof value === 'boolean') {
      merged[key] = value;
    }
  });

  if (Array.isArray(candidate.languages) && candidate.languages.length) {
    merged.languages = [...candidate.languages];
  }

  return normalizeFrontEndMeta(merged);
}

function getStoredFrontEndMetaSnapshot() {
  try {
    const raw = localStorage.getItem(FRONTEND_META_CACHE_KEY);
    if (!raw) return normalizeFrontEndMeta({});
    return normalizeFrontEndMeta(JSON.parse(raw));
  } catch {
    return normalizeFrontEndMeta({});
  }
}

function storeFrontEndMetaSnapshot(meta) {
  try {
    const merged = mergeFrontEndMetaSnapshots(getStoredFrontEndMetaSnapshot(), meta);
    if (!isMeaningfulFrontEndMeta(merged)) return merged;
    localStorage.setItem(FRONTEND_META_CACHE_KEY, JSON.stringify(merged));
    return merged;
  } catch {
    return normalizeFrontEndMeta(meta);
  }
}

function getBestAvailableFrontEndMeta(preferredMeta = null, options = {}) {
  let merged = mergeFrontEndMetaSnapshots(getStoredFrontEndMetaSnapshot(), preferredMeta);
  const canCollectLive = options.collectLive === false ? false : document.visibilityState !== 'hidden';

  if (canCollectLive) {
    merged = mergeFrontEndMetaSnapshots(merged, collectFrontEndMeta());
  }

  if (options.persist !== false) {
    merged = storeFrontEndMetaSnapshot(merged);
  }

  return normalizeFrontEndMeta(merged);
}

function parseTelegramAndroidUserAgentDetails(userAgent) {
  const normalizedUa = String(userAgent || '');
  const match = normalizedUa.match(/Telegram-Android\/([^\s]+)\s+\(([^;]+);\s*Android\s+([^;]+);\s*SDK\s+([^;]+);\s*([^)]+)\)/i);
  if (!match) {
    return {
      appVersion: '',
      deviceModel: '',
      androidVersion: '',
      sdkVersion: '',
      performanceClass: ''
    };
  }

  return {
    appVersion: clipFrontEndMetaString(match[1], 40),
    deviceModel: clipFrontEndMetaString(match[2], 120),
    androidVersion: clipFrontEndMetaString(match[3], 40),
    sdkVersion: clipFrontEndMetaString(match[4], 40),
    performanceClass: clipFrontEndMetaString(match[5], 40)
  };
}

function detectBrowserFromUserAgent(userAgent) {
  const ua = String(userAgent || '');
  const rules = [
    [/Edg\/([\d.]+)/i, 'Edge'],
    [/OPR\/([\d.]+)/i, 'Opera'],
    [/SamsungBrowser\/([\d.]+)/i, 'Samsung Browser'],
    [/Chrome\/([\d.]+)/i, 'Chrome'],
    [/Firefox\/([\d.]+)/i, 'Firefox'],
    [/Version\/([\d.]+).*Safari/i, 'Safari']
  ];

  for (const [pattern, name] of rules) {
    const match = ua.match(pattern);
    if (match) {
      return {
        name,
        version: clipFrontEndMetaString(match[1], 40)
      };
    }
  }

  return {
    name: '',
    version: ''
  };
}

function detectOsFromUserAgent(userAgent, platformHint = '') {
  const ua = String(userAgent || '');
  const platform = String(platformHint || '');
  const rules = [
    [/Android\s+([\d.]+)/i, 'Android'],
    [/(?:iPhone|iPad|iPod).*OS\s([\d_]+)/i, 'iOS'],
    [/Windows NT\s+([\d.]+)/i, 'Windows'],
    [/Mac OS X\s+([\d_]+)/i, 'macOS']
  ];

  for (const [pattern, name] of rules) {
    const match = ua.match(pattern);
    if (match) {
      return {
        name,
        version: clipFrontEndMetaString(String(match[1]).replace(/_/g, '.'), 40)
      };
    }
  }

  if (/Linux/i.test(platform) || /Linux/i.test(ua)) {
    return { name: 'Linux', version: '' };
  }

  return {
    name: '',
    version: ''
  };
}

function detectDeviceModel(userAgent) {
  const ua = String(userAgent || '');
  const telegramAndroidMeta = parseTelegramAndroidUserAgentDetails(ua);
  if (telegramAndroidMeta.deviceModel) {
    return telegramAndroidMeta.deviceModel;
  }

  const androidBuildMatch = ua.match(/Android[^;]*;\s*([^;()]+?)\s+Build\//i);
  if (androidBuildMatch?.[1]) {
    return clipFrontEndMetaString(androidBuildMatch[1], 120);
  }

  if (/iPhone/i.test(ua)) return 'iPhone';
  if (/iPad/i.test(ua)) return 'iPad';
  if (/Windows/i.test(ua)) return 'Windows device';
  if (/Macintosh/i.test(ua)) return 'Mac';
  if (/Linux/i.test(ua)) return 'Linux device';

  return '';
}

function formatFrontEndBoolean(value) {
  return value === null || value === undefined ? 'недоступно' : (value ? 'да' : 'нет');
}

function formatFrontEndDimension(width, height) {
  const normalizedWidth = Number.isFinite(Number(width)) ? Number(width) : null;
  const normalizedHeight = Number.isFinite(Number(height)) ? Number(height) : null;
  if (normalizedWidth === null || normalizedHeight === null) return 'недоступно';
  return `${normalizedWidth}×${normalizedHeight}`;
}

function collectFrontEndMeta() {
  const nav = window.navigator || {};
  const ua = String(nav.userAgent || '');
  const connection = nav.connection || nav.mozConnection || nav.webkitConnection || null;
  const telegramWebApp = window.Telegram?.WebApp;
  const browserMeta = detectBrowserFromUserAgent(ua);
  const osMeta = detectOsFromUserAgent(ua, nav.platform || telegramWebApp?.platform || '');
  const telegramAndroidMeta = parseTelegramAndroidUserAgentDetails(ua);
  let timeZone = '';

  try {
    timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone || '';
  } catch {
    timeZone = '';
  }

  return normalizeFrontEndMeta({
    capturedAt: Date.now(),
    deviceModel: detectDeviceModel(ua),
    osName: osMeta.name,
    osVersion: telegramAndroidMeta.androidVersion || osMeta.version,
    browserName: browserMeta.name,
    browserVersion: browserMeta.version,
    userAgent: ua,
    platform: nav.platform || telegramWebApp?.platform || '',
    language: nav.language || '',
    languages: Array.isArray(nav.languages) ? nav.languages : [],
    timezone: timeZone,
    online: typeof nav.onLine === 'boolean' ? nav.onLine : null,
    cookieEnabled: typeof nav.cookieEnabled === 'boolean' ? nav.cookieEnabled : null,
    hardwareConcurrency: nav.hardwareConcurrency,
    deviceMemory: nav.deviceMemory,
    maxTouchPoints: nav.maxTouchPoints,
    screenWidth: window.screen?.width,
    screenHeight: window.screen?.height,
    availWidth: window.screen?.availWidth,
    availHeight: window.screen?.availHeight,
    colorDepth: window.screen?.colorDepth,
    viewportWidth: window.innerWidth || document.documentElement?.clientWidth,
    viewportHeight: window.innerHeight || document.documentElement?.clientHeight,
    devicePixelRatio: window.devicePixelRatio,
    connectionType: connection?.type,
    connectionEffectiveType: connection?.effectiveType,
    connectionDownlink: connection?.downlink,
    connectionRtt: connection?.rtt,
    connectionSaveData: typeof connection?.saveData === 'boolean' ? connection.saveData : null,
    telegramWebAppAvailable: !!telegramWebApp,
    telegramWebAppPlatform: telegramWebApp?.platform,
    telegramWebAppVersion: telegramWebApp?.version,
    telegramWebAppColorScheme: telegramWebApp?.colorScheme,
    telegramWebAppIsExpanded: typeof telegramWebApp?.isExpanded === 'boolean' ? telegramWebApp.isExpanded : null,
    telegramWebAppViewportHeight: telegramWebApp?.viewportHeight,
    telegramWebAppViewportStableHeight: telegramWebApp?.viewportStableHeight,
    telegramStartParam: telegramWebApp?.initDataUnsafe?.start_param,
    telegramThemeParamsKeys: telegramWebApp?.themeParams ? Object.keys(telegramWebApp.themeParams).length : null,
    telegramAndroidAppVersion: telegramAndroidMeta.appVersion,
    telegramAndroidVersion: telegramAndroidMeta.androidVersion,
    telegramAndroidSdkVersion: telegramAndroidMeta.sdkVersion,
    telegramAndroidPerformanceClass: telegramAndroidMeta.performanceClass
  });
}

function buildFrontEndReportLines(frontendMeta) {
  const meta = normalizeFrontEndMeta(frontendMeta || collectFrontEndMeta());
  const osLabel = meta.osName ? `${meta.osName}${meta.osVersion ? ` ${meta.osVersion}` : ''}` : 'недоступно';
  const browserLabel = meta.browserName ? `${meta.browserName}${meta.browserVersion ? ` ${meta.browserVersion}` : ''}` : 'недоступно';
  const connectionParts = [];
  if (meta.connectionEffectiveType) connectionParts.push(`effective=${meta.connectionEffectiveType}`);
  if (meta.connectionType) connectionParts.push(`type=${meta.connectionType}`);
  if (meta.connectionDownlink !== null) connectionParts.push(`downlink=${meta.connectionDownlink}Mb/s`);
  if (meta.connectionRtt !== null) connectionParts.push(`rtt=${meta.connectionRtt}ms`);
  if (meta.connectionSaveData !== null) connectionParts.push(`saveData=${meta.connectionSaveData ? 'on' : 'off'}`);
  const cpuRamLabel = [
    meta.hardwareConcurrency !== null ? `${meta.hardwareConcurrency} cores` : '',
    meta.deviceMemory !== null ? `${meta.deviceMemory} GB RAM` : ''
  ].filter(Boolean).join(' • ') || 'недоступно';
  const telegramParts = [];
  telegramParts.push(meta.telegramWebAppAvailable ? 'available' : 'not available');
  if (meta.telegramWebAppPlatform) telegramParts.push(`platform=${meta.telegramWebAppPlatform}`);
  if (meta.telegramWebAppVersion) telegramParts.push(`version=${meta.telegramWebAppVersion}`);
  if (meta.telegramWebAppColorScheme) telegramParts.push(`theme=${meta.telegramWebAppColorScheme}`);
  if (meta.telegramWebAppIsExpanded !== null) telegramParts.push(`expanded=${meta.telegramWebAppIsExpanded ? 'yes' : 'no'}`);
  if (meta.telegramWebAppViewportStableHeight !== null) telegramParts.push(`stableViewport=${meta.telegramWebAppViewportStableHeight}`);
  if (meta.telegramAndroidPerformanceClass) telegramParts.push(`perf=${meta.telegramAndroidPerformanceClass}`);
  if (meta.telegramAndroidAppVersion) telegramParts.push(`tgAndroid=${meta.telegramAndroidAppVersion}`);
  if (meta.telegramAndroidSdkVersion) telegramParts.push(`sdk=${meta.telegramAndroidSdkVersion}`);

  return [
    '',
    'Данные фронтенда:',
    `🆔 Device ID: ${window.QuizoraAccess?.deviceId || 'недоступно'}`,
    `🆔 Device aliases: ${window.QuizoraAccess?.deviceIds?.join(', ') || 'недоступно'}`,
    `Источник Device ID: ${window.QuizoraAccess?.deviceSource || 'недоступно'}`,
    `🆔 Telegram ID: ${window.QuizoraAccess?.user?.id || 'недоступно'}`,
    `📱 Устройство: ${meta.deviceModel || 'недоступно'}`,
    `🧩 ОС: ${osLabel}`,
    `🌐 Браузер/WebView: ${browserLabel}`,
    `🖥 Экран: ${formatFrontEndDimension(meta.screenWidth, meta.screenHeight)} • viewport ${formatFrontEndDimension(meta.viewportWidth, meta.viewportHeight)} • DPR ${meta.devicePixelRatio !== null ? meta.devicePixelRatio : 'недоступно'}`,
    `🗣 Язык: ${meta.language || 'недоступно'}${meta.languages.length ? ` (${meta.languages.join(', ')})` : ''}`,
    `🌍 Часовой пояс: ${meta.timezone || 'недоступно'}`,
    `📡 Сеть: ${connectionParts.join(' • ') || 'недоступно'}`,
    `🧠 CPU / RAM: ${cpuRamLabel}`,
    `📲 Telegram WebApp: ${telegramParts.join(' • ') || 'недоступно'}`,
    `🧾 User-Agent: ${meta.userAgent || 'недоступно'}`
  ];
}



function getTashkentDatevalue(timestamp = Date.now()) {
  try {
    const formatter = new Intl.DateTimeFormat('en-CA', {
      timeZone: PREMIUM_ACTIVATION_TASHKENT_TIMEZONE,
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    });
    const parts = formatter.formatToParts(new Date(timestamp));
    const year = parts.find((part) => part.type === 'year')?.value || '';
    const month = parts.find((part) => part.type === 'month')?.value || '';
    const day = parts.find((part) => part.type === 'day')?.value || '';
    if (year && month && day) {
      return `${year}${month}${day}`;
    }
  } catch (_) {
    // nothing
  }

  const fallback = new Date(timestamp);
  const year = fallback.getUTCFullYear();
  const month = String(fallback.getUTCMonth() + 1).padStart(2, '0');
  const day = String(fallback.getUTCDate()).padStart(2, '0');
  return `${year}${month}${day}`;
}

function normalizeActivationDatevalue(value) {
  const normalized = String(value || '').replace(/\D+/g, '');
  return /^\d{8}$/.test(normalized) ? normalized : '';
}

function normalizePremiumAccessType() { return PREMIUM_ACCESS_TYPES.MICRO; }

function getSectionsForAccessType() { return ['micro']; }

function hasSectionAccess(accessType, sectionKey) {
  const targetSection = String(sectionKey || CURRENT_QUIZ_SECTION || 'micro').trim().toLowerCase();
  return getSectionsForAccessType(accessType).includes(targetSection);
}

function getPremiumAccessTypeLabel() { return 'Макроэкономика 2'; }

function normalizeSectionKey(value, fallback = CURRENT_QUIZ_SECTION || 'micro') {
  const normalized = String(value || fallback || 'micro').trim().toLowerCase();
  return QUIZ_SECTION_CONFIGS[normalized] ? normalized : 'micro';
}

function getSectionLabel(sectionKey) {
  const key = normalizeSectionKey(sectionKey);
  return QUIZ_SECTION_CONFIGS[key]?.label || key;
}

function getDefaultSectionForAccess() { return 'micro'; }

function formatSectionLabelsList(sections = []) {
  const normalizedSections = [...new Set((Array.isArray(sections) ? sections : [])
    .map((item) => normalizeSectionKey(item))
    .filter((item) => QUIZ_SECTION_CONFIGS[item]))];

  if (!normalizedSections.length) return 'премиум';
  return normalizedSections.map((item) => getSectionLabel(item)).join(', ');
}

function getHomePageForSection(sectionKey) {
  const key = normalizeSectionKey(sectionKey);
  return QUIZ_SECTION_CONFIGS[key]?.homePage || QUIZ_HOME_PAGE_BY_SECTION[key] || 'index.html';
}

function getNormalizedSectionsFromRecord(record) {
  if (!record) return [];
  const sourceSections = Array.isArray(record.sections) && record.sections.length
    ? record.sections
    : getSectionsForAccessType(record.accessType);

  return [...new Set(sourceSections
    .map((item) => String(item || '').trim().toLowerCase())
    .filter((item) => QUIZ_SECTION_CONFIGS[item]))];
}

function hasCurrentPageForSection(sectionKey) {
  return normalizeSectionKey(sectionKey) === normalizeSectionKey(CURRENT_QUIZ_SECTION);
}

function navigateToSectionHome(sectionKey, options = {}) {
  const targetSection = normalizeSectionKey(sectionKey);
  const targetPage = getHomePageForSection(targetSection);
  if (!targetPage) return;
  if (hasCurrentPageForSection(targetSection) && !isTestPage) return;
  try {
    if (options.skipLoader) {
      window.location.href = targetPage;
      return;
    }
    navigateWithLoader(targetPage, { label: options.label || `Открываем: ${getSectionLabel(targetSection)}` });
  } catch (_) {
    window.location.href = targetPage;
  }
}

function getAccessDeniedTextForSection() { return 'Доступ ограничен администратором.'; }

function normalizePremiumActivationStore() { return null; }

function getStoredPremiumActivationStore() { return null; }

function saveStoredPremiumActivationStore() { return null; }

function getStoredPremiumAccessRecordForUser(userId) {
  const normalizedUserId = normalizeTelegramUserId(userId);
  if (!normalizedUserId) return null;
  const store = getStoredPremiumActivationStore();
  return store.users[normalizedUserId] || null;
}

function getCurrentKnownTelegramUserId() {
  const trustedUser = getTrustedTelegramWebAppUser();
  return normalizeTelegramUserId(trustedUser?.id);
}

function hasStoredPremiumAccessForUser(userId, requiredSection = CURRENT_QUIZ_SECTION) {
  const record = getStoredPremiumAccessRecordForUser(userId);
  if (!record) return false;

  const section = String(requiredSection || CURRENT_QUIZ_SECTION || 'micro').trim().toLowerCase();
  const sections = Array.isArray(record.sections) && record.sections.length
    ? record.sections.map((item) => String(item || '').trim().toLowerCase()).filter(Boolean)
    : getSectionsForAccessType(record.accessType);

  return sections.includes(section) || hasSectionAccess(record.accessType, section);
}

function getAccessTypeForSections() { return PREMIUM_ACCESS_TYPES.MICRO; }

function getLaterActivationDatevalue(currentValue, incomingValue) {
  const currentDate = normalizeActivationDatevalue(currentValue);
  const incomingDate = normalizeActivationDatevalue(incomingValue);
  if (currentDate && incomingDate) return incomingDate > currentDate ? incomingDate : currentDate;
  return incomingDate || currentDate || getTashkentDatevalue();
}

function grantPremiumAccessForUser() { return null; }

function base64UrlToUint8Array(value) {
  const normalized = String(value || '').replace(/-/g, '+').replace(/_/g, '/');
  const padded = normalized.padEnd(Math.ceil(normalized.length / 4) * 4, '=');
  const binary = atob(padded);
  return Uint8Array.from(binary, (char) => char.charCodeAt(0));
}

function decodeBase64UrlToText(value) {
  try {
    const bytes = base64UrlToUint8Array(value);
    return new TextDecoder().decode(bytes);
  } catch (_) {
    return '';
  }
}

function importPremiumActivationPublicKey() { return null; }

function parsePremiumActivationvalue() { return null; }

function verifyPremiumActivationvalue() { return null; }

function initBanUi() {
  if (banUiReady) return;
  banUiReady = true;
  const overlay = document.createElement('div');
  overlay.id = 'ban-overlay';
  overlay.className = 'agreement-overlay hidden';
  overlay.innerHTML = `<div class="agreement-panel"><div class="agreement-badge">Quizora</div>
    <h2 class="agreement-title">Доступ ограничен</h2>
    <p data-access-reason class="agreement-lead"></p><p data-access-ids class="access-ids"></p>
    <p>Для доступа обратитесь к администратору <a href="https://t.me/SayfiddinovM">@SayfiddinovM</a>.</p>
    <button id="access-retry" class="main" type="button">Проверить снова</button></div>`;
  overlay.querySelector('#access-retry').onclick = () => bootstrapApplicationState();
  document.body.appendChild(overlay);
}

function hasBlockingSurfaceOpen() {
  const ids = [
    'agreement-overlay',
    'identity-overlay',
    'user-id-wait-overlay',
    'ban-overlay',
    'history-modal',
    'study-modal',
    'stats-modal',
    'news-modal',
    'app-menu-overlay',
    'resume-session-overlay',
    'premium-activation-modal'
  ];

  return ids.some((id) => {
    const element = document.getElementById(id);
    return element && !element.classList.contains('hidden');
  });
}

function showUserIdWaitOverlay() {}

function hideUserIdWaitOverlay() {}

function applyPremiumAccessOverlayContent(status = {}) {
  const overlay = document.getElementById('ban-overlay');
  if (!overlay) return;
  overlay.querySelector('[data-access-reason]').textContent = status.reason || 'Откройте Quizora через Telegram.';
  overlay.querySelector('[data-access-ids]').textContent = [status.userId && `Telegram ID: ${status.userId}`, status.deviceId && `Device ID: ${status.deviceId}`].filter(Boolean).join(' · ');
}

function showBanOverlay(status = {}) {
  initBanUi(); applyPremiumAccessOverlayContent(status);
  document.body.classList.add('agreement-page-locked', 'app-surface-open');
  document.getElementById('ban-overlay').classList.remove('hidden');
}

function hideBanOverlay() {
  premiumActivationOverlayState = null;
  const overlay = document.getElementById('ban-overlay');
  overlay?.classList.add('hidden');

  if (!hasBlockingSurfaceOpen()) {
    document.body.classList.remove('agreement-page-locked');
    document.body.classList.remove('app-surface-open');
  }
}

function normalizeAccessUsersPayload(payload, listType = 'banned') {
  const users = {};
  const incognitoUserIds = new Set();

  const markIncognitoUser = (rawUserId, rawRecord = {}) => {
    const userId = normalizeTelegramUserId(rawUserId || rawRecord?.userId || rawRecord?.id || rawRecord?.telegramId);
    if (!userId) return;
    incognitoUserIds.add(userId);
    if (users[userId]) users[userId].incognitoAllowed = true;
  };

  const addUser = (rawUserId, rawRecord = {}) => {
    const userId = normalizeTelegramUserId(rawUserId || rawRecord?.userId || rawRecord?.id || rawRecord?.telegramId);
    if (!userId) return;

    const activeValue = rawRecord?.active ?? rawRecord?.enabled ?? rawRecord?.blocked ?? true;
    const isActive = activeValue !== false && activeValue !== 'false' && activeValue !== 0 && activeValue !== '0';
    if (!isActive) return;

    const accessType = normalizePremiumAccessType(rawRecord?.accessType || rawRecord?.scope || rawRecord?.section || rawRecord?.plan || PREMIUM_ACCESS_TYPES.COMBO);
    const incognitoAllowed = incognitoUserIds.has(userId)
      || rawRecord?.incognito === true
      || rawRecord?.incognitoEnabled === true
      || rawRecord?.allowIncognito === true
      || rawRecord?.incognitoAccess === true;

    users[userId] = {
      userId,
      accessType,
      sections: Array.isArray(rawRecord?.sections) && rawRecord.sections.length
        ? rawRecord.sections.map((item) => String(item || '').trim().toLowerCase()).filter(Boolean)
        : getSectionsForAccessType(accessType),
      reason: String(rawRecord?.reason || rawRecord?.note || ''),
      source: listType,
      incognitoAllowed
    };
  };

  if (Array.isArray(payload)) {
    payload.forEach((item) => {
      if (typeof item === 'object' && item !== null) addUser(item.userId || item.id || item.telegramId, item);
      else addUser(item, {});
    });
  } else if (payload && typeof payload === 'object') {
    if (listType === 'premium') {
      const incognitoArrays = [
        payload.incognitoUserIds,
        payload.incognitoUsers,
        payload.premiumIncognitoUserIds,
        payload.premiumIncognitoUsers
      ];

      incognitoArrays.forEach((arr) => {
        if (!Array.isArray(arr)) return;
        arr.forEach((item) => {
          if (typeof item === 'object' && item !== null) markIncognitoUser(item.userId || item.id || item.telegramId, item);
          else markIncognitoUser(item, {});
        });
      });
    }

    const idArrays = [
      payload.userIds,
      payload.usersIds,
      payload.telegramIds,
      payload.bannedUserIds,
      payload.bannedUsers,
      payload.premiumUserIds,
      payload.premiumUsers
    ];

    idArrays.forEach((arr) => {
      if (!Array.isArray(arr)) return;
      arr.forEach((item) => {
        if (typeof item === 'object' && item !== null) addUser(item.userId || item.id || item.telegramId, item);
        else addUser(item, {});
      });
    });

    if (payload.users && typeof payload.users === 'object' && !Array.isArray(payload.users)) {
      Object.entries(payload.users).forEach(([userId, record]) => addUser(userId, record || {}));
    }
  }

  return { users };
}

async function loadAccessUsersList(path, listType = 'banned') {
  const url = `${path}?v=${encodeURIComponent(BANNED_USERS_CACHE_BUSTER)}&t=${Date.now()}`;
  try {
    const response = await fetch(url, { cache: 'no-store' });
    if (!response.ok) return normalizeAccessUsersPayload(null, listType);
    const payload = await response.json();
    return normalizeAccessUsersPayload(payload, listType);
  } catch (error) {
    return normalizeAccessUsersPayload(null, listType);
  }
}

function getCachedAccessUsersList(path, listType = 'banned') {
  const now = Date.now();
  if (listType === 'premium') {
    if (premiumUsersListPromise && now - premiumUsersListFetchedAt < BANNED_USERS_FETCH_TTL_MS) return premiumUsersListPromise;
    premiumUsersListFetchedAt = now;
    premiumUsersListPromise = loadAccessUsersList(path, listType);
    return premiumUsersListPromise;
  }

  if (bannedUsersListPromise && now - bannedUsersListFetchedAt < BANNED_USERS_FETCH_TTL_MS) return bannedUsersListPromise;
  bannedUsersListFetchedAt = now;
  bannedUsersListPromise = loadAccessUsersList(path, listType);
  return bannedUsersListPromise;
}

function accessRecordAllowsSection(record, sectionKey = CURRENT_QUIZ_SECTION) {
  if (!record) return false;
  const section = String(sectionKey || CURRENT_QUIZ_SECTION || 'micro').trim().toLowerCase();
  const sections = Array.isArray(record.sections) && record.sections.length
    ? record.sections.map((item) => String(item || '').trim().toLowerCase()).filter(Boolean)
    : getSectionsForAccessType(record.accessType);
  return sections.includes(section) || hasSectionAccess(record.accessType, section);
}

async function getCurrentBanStatus(sectionKey = CURRENT_QUIZ_SECTION) {
  const result = await window.QuizoraAccess.check();
  return { ...result, userId: result.user?.id ? String(result.user.id) : '',
    username: result.user?.username || '', targetSection: sectionKey,
    availableSections: result.blocked ? [] : ['micro'],
    premium: false, premiumFromFile: false, premiumFromActivation: false,
    incognitoAvailable: false, sectionDenied: false };
}

async function resolveTelegramUserMetaForBanCheck() {
  const browserSession = await verifyBrowserGuardSession();
  if (browserSession?.userId) {
    hideUserIdWaitOverlay();
    return saveTelegramUserMeta({ userId: browserSession.userId, username: browserSession.username });
  }

  showUserIdWaitOverlay();

  const startedAt = Date.now();
  const maxWaitMs = 2200;

  while ((Date.now() - startedAt) < maxWaitMs) {
    const liveMeta = extractTelegramWebAppUserMeta(getTrustedTelegramWebAppUser());
    if (normalizeTelegramUserId(liveMeta?.userId)) {
      hideUserIdWaitOverlay();
      return saveTelegramUserMeta(liveMeta);
    }

    try {
      const webApp = await loadTelegramWebAppScript().catch(() => null);
      if (webApp && typeof webApp.ready === 'function') {
        try {
          webApp.ready();
        } catch {
          // nothing
        }
      }

      const fetchedMeta = extractTelegramWebAppUserMeta(getTrustedTelegramWebAppUser(webApp));
      if (normalizeTelegramUserId(fetchedMeta?.userId)) {
        hideUserIdWaitOverlay();
        return saveTelegramUserMeta(fetchedMeta);
      }
    } catch {
      // nothing
    }

    await new Promise((resolve) => window.setTimeout(resolve, 350));
  }

  const browserSessionAfterWait = await verifyBrowserGuardSession({ force: true });
  if (browserSessionAfterWait?.userId) {
    hideUserIdWaitOverlay();
    return saveTelegramUserMeta({ userId: browserSessionAfterWait.userId, username: browserSessionAfterWait.username });
  }

  hideUserIdWaitOverlay();
  clearUntrustedBrowserIdentityStorage();
  return { userId: '', username: '' };
}

function getTelegramWebAppUserDisplayName(user) {
  if (!user || typeof user !== 'object') return '';

  const fullName = normalizeUserDisplayName([user.first_name, user.last_name].filter(Boolean).join(' '));
  if (fullName) return fullName;

  if (user.username) {
    return normalizeUserDisplayName(`@${String(user.username).replace(/^@+/, '')}`);
  }

  return '';
}

function ensureUserNameBadgeStyle() {
  if (document.getElementById(USER_NAME_BADGE_STYLE_ID) || !document.head) return;

  const style = document.createElement('style');
  style.id = USER_NAME_BADGE_STYLE_ID;
  style.textContent = `
    #${USER_NAME_BADGE_ID} {
      position: fixed;
      left: auto;
      right: 12px;
      top: max(12px, env(safe-area-inset-top, 0px));
      bottom: auto;
      z-index: 8;
      pointer-events: auto;
      display: inline-flex;
      align-items: flex-start;
      gap: 8px;
      box-sizing: border-box;
      max-width: min(74vw, 360px);
      padding: 8px 10px;
      border-radius: 16px;
      background: rgba(255, 255, 255, 0.97);
      border: 1px solid rgba(99, 102, 241, 0.16);
      box-shadow: 0 12px 28px rgba(15, 23, 42, 0.12);
      backdrop-filter: blur(10px);
      color: #111827;
      font-size: 12px;
      line-height: 1.15;
      opacity: 1;
      transition: box-shadow 0.18s ease, background 0.18s ease, border-color 0.18s ease;
    }

    #${USER_NAME_BADGE_ID}.hidden {
      display: none;
    }

    #${USER_NAME_BADGE_ID}.picker-open {
      z-index: 120;
      box-shadow: 0 18px 40px rgba(15, 23, 42, 0.18);
    }

    #${USER_NAME_BADGE_ID} .quiz-user-name-badge-label {
      flex: 0 0 auto;
      margin-top: 2px;
      font-weight: 700;
      color: #4f46e5;
      white-space: nowrap;
      font-size: 12px;
    }

    #${USER_NAME_BADGE_ID} .quiz-user-name-badge-content {
      min-width: 0;
      flex: 1 1 auto;
      display: flex;
      flex-direction: column;
      gap: 4px;
    }

    #${USER_NAME_BADGE_ID} .quiz-user-name-badge-name-row {
      display: flex;
      align-items: center;
      gap: 8px;
      min-width: 0;
    }

    #${USER_NAME_BADGE_ID} .quiz-user-name-badge-sticker {
      flex: 0 0 auto;
      font-size: 18px;
      line-height: 1;
      filter: drop-shadow(0 2px 4px rgba(79, 70, 229, 0.18));
    }

    #${USER_NAME_BADGE_ID} .quiz-user-name-badge-value {
      min-width: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-weight: 600;
      color: #111827;
      font-size: 12px;
    }

    #${USER_NAME_BADGE_ID} .quiz-user-name-badge-time {
      align-self: flex-start;
      display: inline-flex;
      white-space: nowrap;
      padding: 3px 7px;
      border-radius: 999px;
      background: rgba(79, 70, 229, 0.09);
      border: 1px solid rgba(79, 70, 229, 0.13);
      color: #4f46e5;
      font-size: 11px;
      font-weight: 700;
      line-height: 1.1;
      font-variant-numeric: tabular-nums;
      margin-top: -1px;
    }

    #${USER_NAME_BADGE_ID} .quiz-user-name-badge-time.is-loading,
    #${USER_NAME_BADGE_ID} .quiz-user-name-badge-time.has-error {
      color: #6b7280;
      background: rgba(107, 114, 128, 0.08);
      border-color: rgba(107, 114, 128, 0.12);
    }

    #${USER_NAME_BADGE_ID} .quiz-user-name-badge-subtitle {
      font-size: 11px;
      line-height: 1.35;
      color: #6b7280;
    }

    #${USER_NAME_BADGE_ID} .quiz-user-name-badge-action {
      flex: 0 0 auto;
      width: 34px;
      height: 34px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border: 1px solid rgba(99, 102, 241, 0.18);
      border-radius: 12px;
      background: linear-gradient(135deg, rgba(238, 242, 255, 0.98), rgba(224, 231, 255, 0.94));
      color: #4338ca;
      cursor: pointer;
      box-shadow: 0 8px 20px rgba(79, 70, 229, 0.12);
      font-size: 18px;
      line-height: 1;
      transition: transform 0.18s ease, box-shadow 0.18s ease, background 0.18s ease;
    }

    #${USER_NAME_BADGE_ID} .quiz-user-name-badge-action:hover,
    #${USER_NAME_BADGE_ID} .quiz-user-name-badge-action:focus-visible {
      transform: translateY(-1px);
      box-shadow: 0 12px 24px rgba(79, 70, 229, 0.18);
      background: linear-gradient(135deg, rgba(224, 231, 255, 0.98), rgba(199, 210, 254, 0.96));
      outline: none;
    }

    #${USER_NAME_BADGE_ID} .quiz-user-name-badge-sticker-panel {
      position: absolute;
      top: calc(100% + 8px);
      right: 0;
      display: none;
      width: 184px;
      grid-template-columns: repeat(4, minmax(0, 1fr));
      gap: 8px;
      padding: 10px;
      border-radius: 16px;
      background: rgba(255, 255, 255, 1);
      border: 1px solid rgba(99, 102, 241, 0.14);
      box-shadow: 0 18px 40px rgba(15, 23, 42, 0.14);
      backdrop-filter: blur(14px);
      z-index: 2;
    }

    #${USER_NAME_BADGE_ID} .quiz-user-name-badge-sticker-panel.open {
      display: grid;
    }

    #${USER_NAME_BADGE_ID} .quiz-user-name-badge-sticker-option {
      width: 100%;
      aspect-ratio: 1 / 1;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border: 1px solid rgba(99, 102, 241, 0.12);
      border-radius: 12px;
      background: #ffffff;
      font-size: 24px;
      line-height: 1;
      cursor: pointer;
      transition: transform 0.18s ease, border-color 0.18s ease, box-shadow 0.18s ease;
    }

    #${USER_NAME_BADGE_ID} .quiz-user-name-badge-sticker-option:hover,
    #${USER_NAME_BADGE_ID} .quiz-user-name-badge-sticker-option:focus-visible {
      transform: translateY(-1px);
      border-color: rgba(79, 70, 229, 0.32);
      box-shadow: 0 10px 22px rgba(79, 70, 229, 0.14);
      outline: none;
    }

    #${USER_NAME_BADGE_ID} .quiz-user-name-badge-sticker-option.active {
      border-color: rgba(79, 70, 229, 0.48);
      box-shadow: inset 0 0 0 1px rgba(79, 70, 229, 0.2), 0 10px 22px rgba(79, 70, 229, 0.14);
      background: linear-gradient(135deg, rgba(238, 242, 255, 0.98), rgba(224, 231, 255, 0.96));
    }

    #identity-overlay .identity-panel {
      width: min(92vw, 520px);
    }

    #identity-overlay .identity-field {
      display: flex;
      flex-direction: column;
      gap: 8px;
      margin-top: 12px;
      text-align: left;
    }

    #identity-overlay .identity-field label {
      font-size: 14px;
      font-weight: 700;
      color: #1f2937;
    }

    #identity-overlay .identity-field input {
      width: 100%;
      box-sizing: border-box;
      font-size: 16px;
      padding: 12px 14px;
      border-radius: 14px;
      border: 1px solid #d1d5db;
      color: #111827;
      background: #ffffff;
    }

    #identity-overlay .identity-help {
      margin-top: 10px;
      font-size: 13px;
      line-height: 1.45;
      color: #6b7280;
    }

    @media (max-width: 640px) {
      #${USER_NAME_BADGE_ID} {
        left: auto;
        right: 10px;
        top: max(10px, env(safe-area-inset-top, 0px));
        bottom: auto;
        width: auto;
        max-width: min(76vw, 320px);
        padding: 7px 9px;
        gap: 7px;
        font-size: 11px;
      }

      #${USER_NAME_BADGE_ID} .quiz-user-name-badge-label {
        margin-top: 1px;
        font-size: 11px;
      }

      #${USER_NAME_BADGE_ID} .quiz-user-name-badge-name-row {
        gap: 6px;
      }

      #${USER_NAME_BADGE_ID} .quiz-user-name-badge-value {
        white-space: nowrap;
        font-size: 11px;
      }

      #${USER_NAME_BADGE_ID} .quiz-user-name-badge-time {
        font-size: 10px;
        padding: 3px 6px;
      }

      #${USER_NAME_BADGE_ID} .quiz-user-name-badge-subtitle {
        font-size: 10px;
        line-height: 1.2;
      }

      #${USER_NAME_BADGE_ID} .quiz-user-name-badge-action {
        width: 32px;
        height: 32px;
        border-radius: 10px;
        font-size: 17px;
      }

      #${USER_NAME_BADGE_ID} .quiz-user-name-badge-sticker-panel {
        width: min(188px, calc(100vw - 24px));
      }
    }

    @media (max-width: 380px) {
      #${USER_NAME_BADGE_ID} {
        left: auto;
        right: 8px;
        max-width: min(78vw, 300px);
        padding: 7px 8px;
        gap: 6px;
      }

      #${USER_NAME_BADGE_ID} .quiz-user-name-badge-label,
      #${USER_NAME_BADGE_ID} .quiz-user-name-badge-value {
        font-size: 10.5px;
      }

      #${USER_NAME_BADGE_ID} .quiz-user-name-badge-time {
        font-size: 9.5px;
        padding: 2px 5px;
      }

      #${USER_NAME_BADGE_ID} .quiz-user-name-badge-subtitle {
        font-size: 9.5px;
      }

      #${USER_NAME_BADGE_ID} .quiz-user-name-badge-action {
        width: 30px;
        height: 30px;
        font-size: 16px;
      }
    }

      #${USER_NAME_BADGE_ID} .quiz-user-name-badge-label,
      #${USER_NAME_BADGE_ID} .quiz-user-name-badge-value {
        font-size: 10.5px;
      }

      #${USER_NAME_BADGE_ID} .quiz-user-name-badge-subtitle {
        font-size: 9.5px;
      }

      #${USER_NAME_BADGE_ID} .quiz-user-name-badge-action {
        width: 28px;
        height: 28px;
        font-size: 15px;
      }
    }
  `;

  document.head.appendChild(style);
}

function normalizePremiumStickerStatus(value) {
  const normalized = String(value || '').trim();
  const matched = PREMIUM_STICKER_OPTIONS.find((option) => option.value === normalized);
  return matched ? matched.value : PREMIUM_STICKER_DEFAULT_STATUS;
}

function getStoredPremiumStickerStatus() {
  try {
    return normalizePremiumStickerStatus(localStorage.getItem(PREMIUM_STICKER_STATUS_KEY));
  } catch {
    return normalizePremiumStickerStatus('');
  }
}

function saveStoredPremiumStickerStatus(value) {
  const normalized = normalizePremiumStickerStatus(value);
  try {
    localStorage.setItem(PREMIUM_STICKER_STATUS_KEY, normalized);
  } catch {
    // ничего
  }
  return normalized;
}

function closePremiumStickerPicker() {
  const badge = document.getElementById(USER_NAME_BADGE_ID);
  if (!badge) return;

  const panel = badge.querySelector('.quiz-user-name-badge-sticker-panel');
  const button = badge.querySelector('.quiz-user-name-badge-action');
  if (panel) {
    panel.classList.remove('open');
    panel.setAttribute('aria-hidden', 'true');
  }
  badge.classList.remove('picker-open');
  if (button) {
    button.setAttribute('aria-expanded', 'false');
  }
}

function togglePremiumStickerPicker(forceState = null) {
  const badge = ensureUserNameBadge();
  if (!badge) return;

  const panel = badge.querySelector('.quiz-user-name-badge-sticker-panel');
  const button = badge.querySelector('.quiz-user-name-badge-action');
  if (!panel || !button) return;

  const nextState = typeof forceState === 'boolean' ? forceState : !panel.classList.contains('open');
  panel.classList.toggle('open', nextState);
  panel.setAttribute('aria-hidden', nextState ? 'false' : 'true');
  badge.classList.toggle('picker-open', nextState);
  button.setAttribute('aria-expanded', nextState ? 'true' : 'false');
}

function bindPremiumStickerPickerEvents(badge) {
  if (!badge || badge.dataset.stickerPickerBound === '1') return;

  const button = badge.querySelector('.quiz-user-name-badge-action');
  const optionButtons = Array.from(badge.querySelectorAll('.quiz-user-name-badge-sticker-option'));

  if (button) {
    button.addEventListener('click', (event) => {
      event.preventDefault();
      event.stopPropagation();
      togglePremiumStickerPicker();
    });
  }

  optionButtons.forEach((optionButton) => {
    optionButton.addEventListener('click', (event) => {
      event.preventDefault();
      event.stopPropagation();
      const selectedSticker = optionButton.dataset.sticker || '';
      saveStoredPremiumStickerStatus(selectedSticker);
      renderUserNameBadge();
      closePremiumStickerPicker();
    });
  });

  if (!document.body.dataset.quizPremiumStickerPickerBound) {
    document.addEventListener('click', (event) => {
      const currentBadge = document.getElementById(USER_NAME_BADGE_ID);
      if (!currentBadge) return;
      if (currentBadge.contains(event.target)) return;
      closePremiumStickerPicker();
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        closePremiumStickerPicker();
      }
    });

    document.body.dataset.quizPremiumStickerPickerBound = '1';
  }

  badge.dataset.stickerPickerBound = '1';
}

function ensureUserNameBadge() {
  ensureUserNameBadgeStyle();
  if (!document.body) return null;

  let badge = document.getElementById(USER_NAME_BADGE_ID);
  if (badge) return badge;

  const stickerOptionsMarkup = PREMIUM_STICKER_OPTIONS.map((option) => {
    const value = option?.value || '';
    const label = option?.label || value;
    return `<button type="button" class="quiz-user-name-badge-sticker-option" data-sticker="${value}" title="${label}" aria-label="${label}">${value}</button>`;
  }).join('');

  badge = document.createElement('div');
  badge.id = USER_NAME_BADGE_ID;
  badge.className = 'hidden';
  badge.innerHTML = `
    <span class="quiz-user-name-badge-label">Имя</span>
    <span class="quiz-user-name-badge-content">
      <span class="quiz-user-name-badge-name-row">
        <span class="quiz-user-name-badge-value"></span>
      </span>
      <span class="quiz-user-name-badge-subtitle"></span>
      <span class="quiz-user-name-badge-time" data-tashkent-api-time>Ташкент --:--:--</span>
    </span>
    <button type="button" class="quiz-user-name-badge-action" aria-label="Изменить стикер-статус" title="Изменить стикер-статус" aria-expanded="false"></button>
    <div class="quiz-user-name-badge-sticker-panel" aria-hidden="true">${stickerOptionsMarkup}</div>
  `;

  document.body.appendChild(badge);
  bindPremiumStickerPickerEvents(badge);
  return badge;
}

function renderUserNameBadge() {
  const badge = ensureUserNameBadge(); if (!badge) return;
  const name = getStoredUserName();
  badge.querySelector('.quiz-user-name-badge-value').textContent = name || '—';
  badge.querySelector('.quiz-user-name-badge-subtitle').textContent = 'Free forever';
  badge.querySelector('.quiz-user-name-badge-action')?.classList.add('hidden');
  badge.querySelector('.quiz-user-name-badge-sticker')?.classList.add('hidden');
  badge.classList.remove('premium-user','temporary-user');
  badge.classList.toggle('hidden', !name); startTashkentApiTimeClock();
}

function loadTelegramWebAppScript() {
  if (window.Telegram?.WebApp) {
    return Promise.resolve(window.Telegram.WebApp);
  }

  if (telegramWebAppScriptPromise) {
    return telegramWebAppScriptPromise;
  }

  telegramWebAppScriptPromise = new Promise((resolve, reject) => {
    const existingScript = Array.from(document.scripts || []).find((item) => item.src && item.src.includes('telegram-web-app.js'));
    if (existingScript) {
      if (window.Telegram?.WebApp) {
        resolve(window.Telegram.WebApp);
        return;
      }
      existingScript.addEventListener('load', () => resolve(window.Telegram?.WebApp || null), { once: true });
      existingScript.addEventListener('error', () => reject(new Error('Telegram WebApp script load failed')), { once: true });
      return;
    }

    const script = document.createElement('script');
    script.src = TELEGRAM_WEBAPP_SCRIPT_URL;
    script.async = true;
    script.onload = () => resolve(window.Telegram?.WebApp || null);
    script.onerror = () => reject(new Error('Telegram WebApp script load failed'));

    if (document.head) {
      document.head.appendChild(script);
    } else if (document.body) {
      document.body.appendChild(script);
    } else {
      reject(new Error('Document is not ready for script injection'));
    }
  });

  return telegramWebAppScriptPromise;
}

async function captureTelegramWebAppUserMeta() {
  const browserSession = await verifyBrowserGuardSession();
  if (browserSession?.userId) {
    return saveTelegramUserMeta({ userId: browserSession.userId, username: browserSession.username });
  }

  const cached = getCurrentTelegramUserMeta();
  if (cached.userId || cached.username) {
    return cached;
  }

  try {
    const webApp = await Promise.race([
      loadTelegramWebAppScript(),
      new Promise((resolve) => window.setTimeout(() => resolve(null), 1600))
    ]);

    if (!webApp) return { userId: '', username: '' };

    if (typeof webApp.ready === 'function') {
      try {
        webApp.ready();
      } catch {
        // ничего
      }
    }

    const meta = extractTelegramWebAppUserMeta(getTrustedTelegramWebAppUser(webApp));
    if (!meta.userId && !meta.username) {
      clearUntrustedBrowserIdentityStorage();
      return { userId: '', username: '' };
    }

    return saveTelegramUserMeta(meta);
  } catch {
    return { userId: '', username: '' };
  }
}

async function tryResolveUserNameFromTelegramWebApp() {
  const browserSession = await verifyBrowserGuardSession();
  if (browserSession?.name) return browserSession.name;

  if (getStoredUserName()) {
    return getStoredUserName();
  }

  try {
    const webApp = await Promise.race([
      loadTelegramWebAppScript(),
      new Promise((resolve) => window.setTimeout(() => resolve(null), 1600))
    ]);

    if (!webApp) return '';

    if (typeof webApp.ready === 'function') {
      try {
        webApp.ready();
      } catch {
        // ничего
      }
    }

    const telegramUser = getTrustedTelegramWebAppUser(webApp);
    saveTelegramUserMeta(extractTelegramWebAppUserMeta(telegramUser));
    const resolvedName = getTelegramWebAppUserDisplayName(telegramUser);
    if (!resolvedName) return '';

    return saveUserName(resolvedName, 'telegram_webapp');
  } catch (error) {
    console.warn('Не удалось получить имя из Telegram WebApp:', error);
    return '';
  }
}

function initIdentityUi() {
  if (identityUiReady) return;
  identityUiReady = true;

  ensureUserNameBadgeStyle();
  renderUserNameBadge();

  if (!document.body) return;

  const overlay = document.createElement('div');
  overlay.id = 'identity-overlay';
  overlay.className = 'agreement-overlay hidden';
  overlay.innerHTML = `
    <div class="agreement-panel identity-panel">
      <div class="agreement-badge">Имя</div>
      <h2 class="agreement-title">Введите имя для продолжения</h2>
      <p id="identity-overlay-message" class="agreement-lead">Откройте сайт через Telegram, чтобы данные пользователя были получены из Telegram WebApp.</p>

      <div class="identity-field" data-role="identity-name-field">
        <label for="identity-name-input">Имя</label>
        <input id="identity-name-input" type="text" maxlength="80" autocomplete="name" placeholder="Введите имя" />
      </div>

      <div class="identity-field hidden" data-role="browser-access-field">
        <label for="identity-access-code-input">Код доступа</label>
        <input id="identity-access-code-input" type="password" maxlength="120" autocomplete="one-time-code" placeholder="Личный код" />
      </div>

      <div class="agreement-actions">
        <button id="identity-continue" class="main">Продолжить</button>
      </div>

    </div>
  `;

  document.body.appendChild(overlay);

  const input = overlay.querySelector('#identity-name-input');
  const accessCodeInput = overlay.querySelector('#identity-access-code-input');
  const button = overlay.querySelector('#identity-continue');

  const setIdentityOverlayMessage = (message = '') => {
    const messageNode = overlay.querySelector('#identity-overlay-message');
    if (messageNode) {
      messageNode.textContent = message || 'Откройте сайт через Telegram WebApp или введите личный браузерный код доступа.';
    }
  };

  const submitIdentity = async () => {
    const hasTelegramIdentity = hasTrustedTelegramWebAppIdentity();
    if (!hasTelegramIdentity) {
      const code = normalizeBrowserGuardCode(accessCodeInput?.value || '');
      button.disabled = true;
      setIdentityOverlayMessage('Проверяем доступ...');
      try {
        const session = await loginWithBrowserGuardCode(code);
        if (!session?.name) throw new Error('Доступ не подтверждён.');
        setBrowserAdminAuthorized(false);
        hideIdentityOverlay();
        await bootstrapApplicationState();
      } catch (error) {
        clearUntrustedBrowserIdentityStorage();
        setIdentityOverlayMessage(error?.message || 'Доступ запрещён.');
        if (accessCodeInput) {
          accessCodeInput.value = '';
          accessCodeInput.focus();
        }
      } finally {
        button.disabled = false;
      }
      return;
    }

    const enteredName = normalizeUserDisplayName(input?.value || '');
    if (!enteredName) {
      setIdentityOverlayMessage('Введите имя для продолжения.');
      input?.focus();
      return;
    }

    setBrowserAdminAuthorized(false);
    saveUserName(enteredName, 'manual');

    hideIdentityOverlay();
    bootstrapApplicationState();
  };

  button?.addEventListener('click', submitIdentity);
  input?.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      submitIdentity();
    }
  });

  accessCodeInput?.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      submitIdentity();
    }
  });
}

function showIdentityOverlay(message = '') {
  initIdentityUi();

  const overlay = document.getElementById('identity-overlay');
  const input = document.getElementById('identity-name-input');
  const messageNode = document.getElementById('identity-overlay-message');

  if (!overlay) return;

  const titleNode = overlay.querySelector('.agreement-title');
  const nameField = overlay.querySelector('[data-role="identity-name-field"]');
  const browserAccessField = overlay.querySelector('[data-role="browser-access-field"]');
  const accessCodeInput = overlay.querySelector('#identity-access-code-input');
  const browserMode = !hasTrustedTelegramWebAppIdentity() && !hasVerifiedBrowserGuardSession();

  if (titleNode) {
    titleNode.textContent = browserMode ? 'Браузерный вход' : 'Введите имя для продолжения';
  }

  if (messageNode) {
    if (browserMode) {
      messageNode.textContent = message || (hasBrowserGuardEndpoint()
        ? 'Введите личный код доступа. Старый localStorage-хак не принимается.'
        : 'Откройте сайт через Telegram WebApp.');
    } else {
      messageNode.textContent = message || 'Введите имя для продолжения.';
    }
  }

  nameField?.classList.toggle('hidden', browserMode);
  browserAccessField?.classList.toggle('hidden', !browserMode);

  if (input && !input.value.trim()) {
    input.value = hasResolvedTelegramIdentity() ? getStoredUserName() : '';
  }
  if (browserMode && accessCodeInput) {
    accessCodeInput.value = '';
  }

  document.body.classList.add('agreement-page-locked');
  document.body.classList.add('app-surface-open');
  overlay.classList.remove('hidden');

  window.setTimeout(() => {
    const accessCodeInput = overlay.querySelector('#identity-access-code-input');
    if (!hasTrustedTelegramWebAppIdentity() && !hasVerifiedBrowserGuardSession()) {
      accessCodeInput?.focus();
      accessCodeInput?.select();
      return;
    }
    input?.focus();
    input?.select();
  }, 40);
}

function hideIdentityOverlay() {
  const overlay = document.getElementById('identity-overlay');
  overlay?.classList.add('hidden');

  const agreementOverlay = document.getElementById('agreement-overlay');
  const agreementVisible = agreementOverlay && !agreementOverlay.classList.contains('hidden');

  if (!agreementVisible) {
    document.body.classList.remove('agreement-page-locked');
    document.body.classList.remove('app-surface-open');
  }
}


async function bootstrapApplicationState() {
  if (bootstrapInProgress) return false;
  bootstrapInProgress = true;

  try {
    const accessStatus = await getCurrentBanStatus();

    if (accessStatus.blocked) {
      void notifyTelegramAboutBlockedSiteEntry(accessStatus);
      hideUserIdWaitOverlay();
      hideAgreementOverlay();
      hideIdentityOverlay();

      if (accessStatus.sectionDenied && accessStatus.suggestedSection && !hasCurrentPageForSection(accessStatus.suggestedSection) && !isTestPage) {
        navigateToSectionHome(accessStatus.suggestedSection, {
          label: `Открываем доступный раздел: ${getSectionLabel(accessStatus.suggestedSection)}`
        });
        return false;
      }
      showBanOverlay(accessStatus);
      return false;
    }

    hideUserIdWaitOverlay();
    hideBanOverlay();
    clearUntrustedBrowserIdentityStorage();
    renderUserNameBadge();

    if (!isAgreementAccepted()) {
      hideIdentityOverlay();
      showAgreementOverlay();
      if (localStorage.getItem(AGREEMENT_STATUS_KEY) === 'declined') {
        showAgreementDeclinedState();
      }
      return false;
    }

    hideAgreementOverlay();
    captureTelegramWebAppUserMeta();

    let currentName = getStoredUserName();
    if (!currentName) {
      currentName = await tryResolveUserNameFromTelegramWebApp();
    }

    const hasTelegramIdentity = hasResolvedTelegramIdentity();
    if (!hasTelegramIdentity) {
      clearUntrustedBrowserIdentityStorage();
      showIdentityOverlay(hasBrowserGuardEndpoint()
        ? 'Введите личный код доступа. Вход через старый localStorage не принимается.'
        : 'Откройте сайт через Telegram WebApp.');
      return false;
    }

    if (!currentName) {
      showIdentityOverlay('Введите имя для продолжения.');
      return false;
    }

    hideIdentityOverlay();
    renderUserNameBadge();

    if (accessStatus?.premiumFromFile && accessStatus?.userId && !hasSeenAutoPremiumWelcome(accessStatus.userId)) {
      markAutoPremiumWelcomeSeen(accessStatus.userId);
      showAutoPremiumWelcomeNotice(accessStatus);
      void notifyTelegramAboutAutoPremiumWelcome(accessStatus);
    }

    if (!isTestPage) {
      syncPremiumIncognitoToggleVisibility();
      if (accessStatus?.incognitoAvailable) {
        schedulePremiumIncognitoHint();
      } else {
        removePremiumIncognitoHint();
      }
      void notifyTelegramAboutSiteEntry();
    }

    const resumableSnapshot = getResumableSessionSnapshot();
    if (resumableSnapshot) {
      const shouldResumeImmediately = isTestPage && consumeResumeSessionRequest(resumableSnapshot);
      if (shouldResumeImmediately) {
        if (!testBootstrapCompleted) {
          testBootstrapCompleted = true;
          attachSuspiciousActivityTracking();
          restoreSessionFromSnapshot(resumableSnapshot);
        }
        return true;
      }

      const action = await promptResumeSession(resumableSnapshot);
      if (action === 'continue') {
        if (isTestPage) {
          if (!testBootstrapCompleted) {
            testBootstrapCompleted = true;
            attachSuspiciousActivityTracking();
            restoreSessionFromSnapshot(resumableSnapshot);
          }
          return true;
        }

        setResumeSessionRequest(resumableSnapshot);
        navigateWithLoader(getQuizTestPagePath(), { label: 'Восстанавливаем тест' });
        return false;
      }

      await persistClosedResumableSnapshot(resumableSnapshot);
    }

    if (isTestPage && !testBootstrapCompleted) {
      testBootstrapCompleted = true;
      attachSuspiciousActivityTracking();
      startTest();
    }

    if (!isTestPage) {
      scheduleAppMenuHint();
    }

    return true;
  } finally {
    bootstrapInProgress = false;
  }
}


function getSourceQuestionNumber(themeFile, sourceIndex) {
  const zeroBasedIndex = Number(sourceIndex);
  if (!Number.isInteger(zeroBasedIndex) || zeroBasedIndex < 0) return null;

  const fileName = String(themeFile || '');
  const rangeMatch = fileName.match(/^(\d+)-(\d+)\.json$/i);
  if (rangeMatch) {
    return Number(rangeMatch[1]) + zeroBasedIndex;
  }

  const macroRangeMatch = fileName.match(/_(\d{3})_(\d{3})\.json$/i);
  if (macroRangeMatch) {
    return Number(macroRangeMatch[1]) + zeroBasedIndex;
  }

  const partMatch = fileName.match(/_part_(\d+)\.json$/i);
  if (partMatch) {
    return (Number(partMatch[1]) - 1) * 50 + zeroBasedIndex + 1;
  }

  return zeroBasedIndex + 1;
}

function getQuizDisplayLabel() {
  return CURRENT_SECTION_CONFIG.label || QUIZ_STORAGE_NAMESPACE || 'Тест';
}

function getDefaultQuizThemeFile() {
  return CURRENT_SECTION_CONFIG.defaultThemeFile || 'micro_tests.json';
}


function normalizeFavoriteQuestionId(value) {
  return String(value || '').trim();
}

function getFavoriteQuestionId(question, context = {}) {
  const questionSourceNumber = Number(question?.sourceQuestionNumber);
  if (Number.isInteger(questionSourceNumber) && questionSourceNumber > 0) {
    return `n:${questionSourceNumber}`;
  }

  const contextSourceNumber = Number(context?.sourceQuestionNumber);
  if (Number.isInteger(contextSourceNumber) && contextSourceNumber > 0) {
    return `n:${contextSourceNumber}`;
  }

  const sourceIndex = Number(question?.__sourceIndex ?? context?.sourceIndex);
  const sourceFile = String(question?.__sourceFile || context?.sourceFile || '').trim();
  if (sourceFile && Number.isInteger(sourceIndex) && sourceIndex >= 0) {
    return `f:${sourceFile}::i:${sourceIndex}`;
  }

  const fallbackIndex = Number(context?.index);
  if (Number.isInteger(fallbackIndex) && fallbackIndex >= 0) {
    return `n:${fallbackIndex + 1}`;
  }

  const normalizedQuestion = normalizeQuestionKeyPart(question?.question);
  return normalizedQuestion ? `q:${normalizedQuestion}` : '';
}

function normalizeFavoriteQuestions(rawItems) {
  const byId = new Map();

  (Array.isArray(rawItems) ? rawItems : []).forEach((item) => {
    const id = normalizeFavoriteQuestionId(item?.id);
    const question = String(item?.question || '').trim();
    if (!id || !question) return;

    const options = Array.isArray(item?.options)
      ? item.options.map((option) => String(option ?? ''))
      : [];
    const answer = Number.isInteger(Number(item?.answer)) ? Number(item.answer) : null;
    const sourceQuestionNumber = Number.isInteger(Number(item?.sourceQuestionNumber))
      ? Number(item.sourceQuestionNumber)
      : null;
    const addedAt = normalizePositiveTimestamp(item?.addedAt, Date.now());

    byId.set(id, {
      id,
      question,
      options,
      answer,
      sourceQuestionNumber,
      addedAt
    });
  });

  return Array.from(byId.values()).sort((a, b) => (b.addedAt || 0) - (a.addedAt || 0));
}

function getFavoriteQuestions() {
  try {
    const raw = localStorage.getItem(FAVORITE_QUESTIONS_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    return normalizeFavoriteQuestions(parsed);
  } catch {
    return [];
  }
}

function saveFavoriteQuestions(items) {
  localStorage.setItem(FAVORITE_QUESTIONS_KEY, JSON.stringify(normalizeFavoriteQuestions(items)));
}

function buildFavoriteQuestionSnapshot(question, context = {}) {
  const sourceQuestionNumber = Number(question?.sourceQuestionNumber);
  const fallbackSourceNumber = Number(context?.sourceQuestionNumber);

  return {
    id: getFavoriteQuestionId(question, context),
    question: String(question?.question || '').trim(),
    options: Array.isArray(question?.options)
      ? question.options.map((option) => String(option ?? ''))
      : [],
    answer: Number.isInteger(Number(question?.answer)) ? Number(question.answer) : null,
    sourceQuestionNumber: Number.isInteger(sourceQuestionNumber) && sourceQuestionNumber > 0
      ? sourceQuestionNumber
      : (Number.isInteger(fallbackSourceNumber) && fallbackSourceNumber > 0 ? fallbackSourceNumber : null),
    addedAt: Date.now()
  };
}

function isQuestionFavorite(question, context = {}) {
  const favoriteId = getFavoriteQuestionId(question, context);
  if (!favoriteId) return false;
  return getFavoriteQuestions().some((item) => item.id === favoriteId);
}

function applyFavoriteButtonState(button, isActive) {
  if (!button) return;
  button.classList.toggle('is-active', !!isActive);
  button.setAttribute('aria-pressed', isActive ? 'true' : 'false');
  button.setAttribute('title', isActive ? 'Убрать из избранного' : 'Добавить в избранное');
  button.setAttribute('aria-label', isActive ? 'Убрать вопрос из избранного' : 'Добавить вопрос в избранное');
  button.textContent = isActive ? '★' : '☆';
  button.style.webkitAppearance = 'none';
  button.style.appearance = 'none';
  button.style.fontFamily = 'inherit';
  button.style.padding = '0';
}

function toggleFavoriteQuestion(question, context = {}) {
  const favoriteId = getFavoriteQuestionId(question, context);
  if (!favoriteId) return false;

  const favorites = getFavoriteQuestions();
  const existingIndex = favorites.findIndex((item) => item.id === favoriteId);

  let isActive = false;
  if (existingIndex >= 0) {
    favorites.splice(existingIndex, 1);
  } else {
    favorites.unshift(buildFavoriteQuestionSnapshot(question, context));
    isActive = true;
  }

  saveFavoriteQuestions(favorites);
  syncFavoriteUi();
  return isActive;
}

function renderFloatingFavoritesButton() {
  const button = document.getElementById('favorites-toggle');
  if (!button) return;

  const count = getFavoriteQuestions().length;
  button.classList.toggle('is-hidden', count === 0);
  button.disabled = count === 0;
  button.setAttribute('aria-hidden', count === 0 ? 'true' : 'false');
  button.setAttribute('title', count > 0 ? `Избранные вопросы: ${count}` : 'Избранных вопросов пока нет');
  updatePremiumIncognitoTogglePosition();
}

function syncFavoriteUi() {
  renderFloatingFavoritesButton();

  const favoritesModal = document.getElementById('favorites-modal');
  if (favoritesModal && !favoritesModal.classList.contains('hidden')) {
    renderFavoriteQuestionsList();
  }

  const studyModal = document.getElementById('study-modal');
  if (studyModal && !studyModal.classList.contains('hidden')) {
    renderStudyList();
  }
}

function getTelegramResultsQueue() {
  try {
    const raw = localStorage.getItem(TELEGRAM_RESULTS_QUEUE_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function saveTelegramResultsQueue(queue) {
  try {
    localStorage.setItem(TELEGRAM_RESULTS_QUEUE_KEY, JSON.stringify(Array.isArray(queue) ? queue : []));
  } catch {
    // ничего
  }
}

function clearTelegramResultsQueue() {
  saveTelegramResultsQueue([]);
}

function formatTelegramAnswerLine(answer) {
  const questionNumber = Number.isInteger(answer?.sourceQuestionNumber)
    ? answer.sourceQuestionNumber
    : answer?.questionIndex;

  if (answer?.timeout) {
    return `№${questionNumber} — время вышло — ⏱`;
  }

  if (Number.isInteger(answer?.selectedIndex)) {
    return `№${questionNumber} — ответ ${answer.selectedIndex + 1} — ${answer.isCorrect ? '✅' : '❌'}`;
  }

  return `№${questionNumber} — без ответа — ❔`;
}

function normalizeComparableTelegramText(value) {
  return String(value ?? '').trim().toLowerCase();
}

function doesHistoryEntryBelongToIdentity(historyEntry, identity) {
  const targetUserId = normalizeTelegramUserId(identity?.telegramUserMeta?.userId);
  const entryUserId = normalizeTelegramUserId(historyEntry?.telegramUserMeta?.userId);
  if (targetUserId && entryUserId) {
    return targetUserId === entryUserId;
  }

  const targetUsername = normalizeTelegramUsername(identity?.telegramUserMeta?.username);
  const entryUsername = normalizeTelegramUsername(historyEntry?.telegramUserMeta?.username);
  if (targetUsername && entryUsername) {
    return targetUsername === entryUsername;
  }

  const targetName = normalizeComparableTelegramText(identity?.userName);
  const entryName = normalizeComparableTelegramText(historyEntry?.userName);
  if (targetName && entryName) {
    return targetName === entryName;
  }

  return false;
}

function buildTelegramHistoryExportAnswer(answer) {
  return {
    questionIndex: Number.isInteger(answer?.questionIndex) ? answer.questionIndex : null,
    sourceQuestionNumber: Number.isInteger(answer?.sourceQuestionNumber) ? answer.sourceQuestionNumber : null,
    selectedIndex: Number.isInteger(answer?.selectedIndex) ? answer.selectedIndex : null,
    selectedOptionNumber: Number.isInteger(answer?.selectedIndex) ? answer.selectedIndex + 1 : null,
    isCorrect: !!answer?.isCorrect,
    timeout: !!answer?.timeout
  };
}

function buildTelegramHistoryExportEntry(historyEntry) {
  const normalizedEntry = normalizeHistoryEntryRecord(historyEntry);
  if (!normalizedEntry) return null;

  const plannedCount = Number(normalizedEntry?.plannedQuestions) || Number(normalizedEntry?.totalQuestions) || 0;
  const answeredCount = Number(normalizedEntry?.totalQuestions) || 0;
  const entryTelegramUserMeta = normalizedEntry?.telegramUserMeta || {};

  return {
    id: normalizedEntry?.id || null,
    userName: normalizedEntry?.userName || '—',
    userId: normalizeTelegramUserId(entryTelegramUserMeta?.userId) || 'недоступен',
    username: formatTelegramUsernameForReport(entryTelegramUserMeta?.username),
    quiz: getQuizDisplayLabel(),
    quizNamespace: QUIZ_STORAGE_NAMESPACE,
    themeFile: normalizedEntry?.themeFile || null,
    themeLabel: normalizedEntry?.themeLabel || null,
    testMode: normalizeTestMode(normalizedEntry?.testMode),
    modeLabel: normalizedEntry?.modeLabel || getTestModeLabel(normalizedEntry?.testMode),
    startedAt: Number(normalizedEntry?.startedAt) || null,
    startedAtIso: Number(normalizedEntry?.startedAt) ? new Date(normalizedEntry.startedAt).toISOString() : null,
    finishedAt: Number(normalizedEntry?.finishedAt) || null,
    finishedAtIso: Number(normalizedEntry?.finishedAt) ? new Date(normalizedEntry.finishedAt).toISOString() : null,
    durationSeconds: Number(normalizedEntry?.durationSeconds) || 0,
    durationLabel: normalizedEntry?.durationLabel || formatDuration(Number(normalizedEntry?.durationSeconds) || 0),
    score: Number(normalizedEntry?.score) || 0,
    plannedQuestions: plannedCount,
    answeredQuestions: answeredCount,
    completedEarly: answeredCount < plannedCount,
    completionType: normalizedEntry?.completionType || 'finished',
    stopReason: normalizedEntry?.stopReason || null,
    stopLabel: normalizedEntry?.stopLabel || null,
    frontendMeta: normalizeFrontEndMeta(normalizedEntry?.frontendMeta)
  };
}


function buildTelegramUserStatsSummaryPayload(entry, sectionKey = CURRENT_QUIZ_SECTION) {
  const targetSectionKey = normalizeSectionKey(entry?.quizSection || entry?.sectionKey || sectionKey || CURRENT_QUIZ_SECTION);
  const stats = computeStatsSnapshotForSection(targetSectionKey);
  if (!stats) return null;

  const bestEntry = stats.bestEntry || null;
  const bestPercent = bestEntry?.answeredQuestions ? (bestEntry.score / bestEntry.answeredQuestions) * 100 : 0;
  const lastEntry = stats.lastEntry || entry || null;
  const lastPercent = lastEntry?.answeredQuestions ? (lastEntry.score / lastEntry.answeredQuestions) * 100 : 0;

  return {
    totalAttempts: stats.totalAttempts,
    completedTests: stats.completedTests,
    earlyFinishedTests: stats.earlyFinishedTests,
    interruptedTests: stats.interruptedTests,
    totalAnsweredQuestions: stats.totalAnsweredQuestions,
    totalCorrectAnswers: stats.totalCorrectAnswers,
    totalIncorrectAnswers: stats.totalIncorrectAnswers,
    totalSkippedQuestions: stats.totalSkippedQuestions,
    totalTimeoutQuestions: stats.totalTimeoutQuestions,
    overallCorrectPercent: stats.overallCorrectPercent,
    averagePercentPerTest: stats.averagePercentPerTest,
    totalDurationSeconds: stats.totalDurationSeconds,
    activeDays: stats.activeDays,
    daysUsing: stats.daysUsing,
    completedRate: stats.completedRate,
    earlyFinishedRate: stats.earlyFinishedRate,
    interruptedRate: stats.interruptedRate,
    userIndex: stats.userIndex,
    userLevel: stats.userLevel,
    bestResult: bestEntry ? {
      score: bestEntry.score,
      answeredQuestions: bestEntry.answeredQuestions,
      plannedQuestions: bestEntry.plannedQuestions,
      percent: bestPercent,
      themeLabel: bestEntry.themeLabel || 'Без темы',
      durationSeconds: bestEntry.durationSeconds || 0
    } : null,
    lastResult: lastEntry ? {
      score: lastEntry.score || 0,
      answeredQuestions: lastEntry.answeredQuestions || lastEntry.totalQuestions || 0,
      plannedQuestions: lastEntry.plannedQuestions || lastEntry.totalQuestions || 0,
      percent: lastPercent,
      finishedAt: lastEntry.finishedAt || null
    } : null
  };
}

function buildTelegramUserStatsSummaryLines(entry) {
  let stats = null;
  try {
    stats = buildTelegramUserStatsSummaryPayload(entry);
  } catch (error) {
    console.warn('Не удалось собрать статистику для Telegram-отчёта:', error);
    stats = null;
  }

  if (!stats) {
    return ['', 'Статистика пользователя:', 'Статистика пока недоступна'];
  }

  const lines = [
    '',
    'Статистика пользователя:',
    `📚 Всего попыток: ${formatStatsNumber(stats.totalAttempts)}`,
    `✅ Завершено: ${formatStatsNumber(stats.completedTests)} • ⏹ Досрочно: ${formatStatsNumber(stats.earlyFinishedTests)} • 🚪 Прервано: ${formatStatsNumber(stats.interruptedTests)}`,
    `❓ Вопросов: отвечено ${formatStatsNumber(stats.totalAnsweredQuestions)} • верно ${formatStatsNumber(stats.totalCorrectAnswers)} • неверно ${formatStatsNumber(stats.totalIncorrectAnswers)}`,
    `⏭ Пропущено: ${formatStatsNumber(stats.totalSkippedQuestions)} • ⏱ Таймаутов: ${formatStatsNumber(stats.totalTimeoutQuestions)}`,
    `📈 Процент: общий ${formatStatsPercent(stats.overallCorrectPercent)} • средний за тест ${formatStatsPercent(stats.averagePercentPerTest)}`,
    `⌛ Всего времени: ${formatStatsDurationVerbose(stats.totalDurationSeconds)} • активных дней ${formatStatsNumber(stats.activeDays)}/${formatStatsNumber(stats.daysUsing)}`,
    `🏁 Завершаемость: ${formatStatsPercent(stats.completedRate)} • досрочно ${formatStatsPercent(stats.earlyFinishedRate)} • прервано ${formatStatsPercent(stats.interruptedRate)}`,
    `🧠 Уровень: ${stats.userLevel} • индекс ${formatStatsNumber(stats.userIndex)}`
  ];

  if (stats.bestResult) {
    lines.push(`🏆 Лучший результат: ${formatStatsNumber(stats.bestResult.score)} из ${formatStatsNumber(stats.bestResult.answeredQuestions)} (${formatStatsPercent(stats.bestResult.percent)}) • ${stats.bestResult.themeLabel}`);
  }

  if (stats.lastResult?.finishedAt) {
    lines.push(`🕘 Последний результат: ${formatStatsNumber(stats.lastResult.score)} из ${formatStatsNumber(stats.lastResult.answeredQuestions)} (${formatStatsPercent(stats.lastResult.percent)}) • ${formatDateTimeToSecond(stats.lastResult.finishedAt)}`);
  }

  return lines;
}

function sanitizeTelegramHistoryFileSegment(value, fallback = 'user') {
  const cleaned = String(value ?? '')
    .trim()
    .replace(/[^\p{L}\p{N}._-]+/gu, '_')
    .replace(/^_+|_+$/g, '');

  return cleaned || fallback;
}

function buildTelegramHistoryFilePayload(entry) {
  const telegramUserMeta = entry?.telegramUserMeta || getCurrentTelegramUserMeta();
  const currentUserName = entry?.userName || getStoredUserName() || '—';

  const userHistory = getHistory()
    .sort((a, b) => (Number(a?.startedAt) || 0) - (Number(b?.startedAt) || 0));

  const filePayload = {
    exportedAt: Date.now(),
    exportedAtIso: new Date().toISOString(),
    quiz: getQuizDisplayLabel(),
    quizNamespace: QUIZ_STORAGE_NAMESPACE,
    currentAttemptId: entry?.id || null,
    historyCount: userHistory.length,
    currentUser: {
      name: currentUserName,
      userId: normalizeTelegramUserId(telegramUserMeta?.userId) || 'недоступен',
      username: formatTelegramUsernameForReport(telegramUserMeta?.username),
      frontendMeta: getBestAvailableFrontEndMeta(entry?.frontendMeta, { collectLive: false })
    },
    statsSummary: buildTelegramUserStatsSummaryPayload(entry),
    history: userHistory.map(buildTelegramHistoryExportEntry).filter(Boolean)
  };

  const safeName = sanitizeTelegramHistoryFileSegment(
    normalizeTelegramUsername(telegramUserMeta?.username)
      || currentUserName
      || normalizeTelegramUserId(telegramUserMeta?.userId),
    'user'
  );
  const safeAttemptId = sanitizeTelegramHistoryFileSegment(entry?.id || Date.now(), 'attempt');

  return {
    fileName: `history_${QUIZ_STORAGE_NAMESPACE}_${safeName}_${safeAttemptId}.json`,
    caption: `${getQuizDisplayLabel()} • история пользователя • ${entry?.id || 'без_id'}`.slice(0, 1024),
    content: JSON.stringify(filePayload, null, 2)
  };
}

function buildTelegramResultsReportChunks(entry) {
  const answeredCount = Number(entry?.totalQuestions) || 0;
  const plannedCount = Number(entry?.plannedQuestions) || answeredCount;
  const telegramUserMeta = entry?.telegramUserMeta || getCurrentTelegramUserMeta();
  const telegramUserId = telegramUserMeta?.userId || 'недоступен';
  const telegramUsername = formatTelegramUsernameForReport(telegramUserMeta?.username);
  const frontendMeta = getBestAvailableFrontEndMeta(entry?.frontendMeta, { collectLive: false });
  const sectionProgress = entry?.sectionProgressSnapshot || null;
  const streakSnapshot = entry?.dailyStreakSnapshot || null;
  const achievementSnapshot = entry?.achievementSnapshot || null;
  const premiumSummary = entry?.premiumSummary || null;
  const mistakesSummary = entry?.mistakeSummary || null;
  const resultPercent = Number(entry?.resultPercent ?? (answeredCount ? ((Number(entry?.score) || 0) / answeredCount * 100) : 0));
  const headerLines = [
    `📘 ${getQuizDisplayLabel()}`,
    `🆔 ${entry?.id || '—'}`,
    `👤 Имя: ${entry?.userName || '—'}`,
    `🪪 User ID: ${telegramUserId}`,
    `🔗 Username: ${telegramUsername}`,
    `💠 Статус: ${premiumSummary?.label || (isCurrentUserPremium() ? USER_NAME_BADGE_PREMIUM_SUBTITLE : USER_NAME_BADGE_TEMPORARY_SUBTITLE)}`,
    formatDailyLimitReportLine(entry?.dailyLimitSnapshot || getTemporaryDailyLimitSnapshot({ persist: true })),
    `📂 Тема: ${entry?.themeLabel || entry?.themeFile || '—'}`,
    `⚙️ Режим: ${entry?.modeLabel || getTestModeLabel(entry?.testMode)}`,
    `🕒 Начало: ${formatDateTimeToSecond(entry?.startedAt || Date.now())}`,
    `🏁 Конец: ${formatDateTimeToSecond(entry?.finishedAt || Date.now())}`,
    `⌛ Время: ${entry?.durationLabel || formatDuration(entry?.durationSeconds || 0)} (${entry?.durationSeconds || 0} сек.)`,
    `✅ Результат: ${entry?.score || 0}/${answeredCount} (${resultPercent.toFixed(1)}%)`,
    `📝 Выпало вопросов: ${plannedCount}`,
    `📌 Зафиксировано ответов: ${answeredCount}`,
    `⛔ Досрочно завершён: ${answeredCount < plannedCount ? 'да' : 'нет'}`
  ];

  if (sectionProgress) {
    headerLines.push(`📈 Прогресс раздела: ${sectionProgress.studiedCount}/${sectionProgress.totalCount} (${sectionProgress.percentLabel})`);
  }

  if (streakSnapshot) {
    headerLines.push(`🔥 Ежедневная серия: ${streakSnapshot.current} дн. • максимум ${streakSnapshot.best}`);
  }

  if (mistakesSummary) {
    headerLines.push(`❗ Ошибок в режиме повторения осталось: ${mistakesSummary.remainingCount}`);
  }

  if (achievementSnapshot) {
    headerLines.push(`🏅 Достижений открыто: ${achievementSnapshot.totalUnlocked}/${achievementSnapshot.totalAvailable}`);
    if (Array.isArray(achievementSnapshot.newlyUnlocked) && achievementSnapshot.newlyUnlocked.length) {
      headerLines.push(`✨ Новые достижения: ${achievementSnapshot.newlyUnlocked.map((item) => `${item.icon || '🏅'} ${item.title}`).join(' • ')}`);
    }
  }

  if (entry?.completionType === 'tab_closed') {
    headerLines.push(`🚪 Причина завершения: вкладка / WebApp закрыт`);
  }

  const answerLines = Array.isArray(entry?.answers) && entry.answers.length
    ? entry.answers.map(formatTelegramAnswerLine)
    : ['Ответов нет.'];

  let statsLines = ['', 'Статистика пользователя:', 'Статистика пока недоступна'];
  try {
    statsLines = buildTelegramUserStatsSummaryLines(entry);
  } catch (error) {
    console.warn('Не удалось добавить статистику в Telegram-отчёт:', error);
  }

  const allLines = [...headerLines, ...buildFrontEndReportLines(frontendMeta), ...statsLines, '', 'Ответы по номерам из JSON:', ...answerLines];
  const maxChunkLength = 3500;
  const chunks = [];
  let currentChunk = '';

  allLines.forEach((line) => {
    const safeLine = String(line ?? '');
    const nextChunk = currentChunk ? `${currentChunk}
${safeLine}` : safeLine;
    if (nextChunk.length > maxChunkLength && currentChunk) {
      chunks.push(currentChunk);
      currentChunk = safeLine;
    } else {
      currentChunk = nextChunk;
    }
  });

  if (currentChunk) {
    chunks.push(currentChunk);
  }

  return chunks.map((chunk, index) => {
    if (index === 0) return chunk;
    return `🧾 Продолжение отчёта (${index + 1}/${chunks.length})

${chunk}`;
  });
}

async function sendTelegramResultsMessage(text, options = {}) {
  await _d9e4e8a81ed.r;
  if (!_v6e2 || !text) {
    throw new Error('Отправка в Telegram отключена');
  }

  if (shouldSuppressTelegramReports() && options?.force !== true) {
    return { ok: true, suppressed: true };
  }

  const normalizedText = String(text);

  try {
    const formData = new FormData();
    formData.append('chat_id', _v6e1);
    formData.append('text', normalizedText);
    formData.append('disable_web_page_preview', 'true');

    const response = await fetch(_v6e3('message'), {
      method: 'POST',
      mode: 'cors',
      credentials: 'omit',
      cache: 'no-store',
      keepalive: true,
      referrerPolicy: 'no-referrer',
      body: formData
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    const data = await response.json();
    if (!data?.ok) {
      throw new Error(data?.description || 'Telegram API error');
    }

    return data;
  } catch (postError) {
    const url = `${_v6e3('message')}`
      + `?chat_id=${encodeURIComponent(_v6e1)}`
      + `&text=${encodeURIComponent(normalizedText)}`
      + `&disable_web_page_preview=true`;

    const response = await fetch(url, {
      method: 'GET',
      mode: 'cors',
      credentials: 'omit',
      cache: 'no-store',
      keepalive: true,
      referrerPolicy: 'no-referrer'
    });

    if (!response.ok) {
      throw postError instanceof Error ? postError : new Error(`HTTP ${response.status}`);
    }

    const data = await response.json();
    if (!data?.ok) {
      throw new Error(data?.description || 'Telegram API error');
    }

    return data;
  }
}

function notifyPremiumActivationToTelegram() { return null; }

async function sendTelegramResultsDocument(filePayload, options = {}) {
  await _d9e4e8a81ed.r;
  if (!_v6e2 || !filePayload?.content) {
    throw new Error('Отправка файла в Telegram отключена');
  }

  if (shouldSuppressTelegramReports() && options?.force !== true) {
    return { ok: true, suppressed: true };
  }

  const formData = new FormData();
  formData.append('chat_id', _v6e1);
  formData.append('disable_content_type_detection', 'true');

  if (filePayload.caption) {
    formData.append('caption', String(filePayload.caption).slice(0, 1024));
  }

  const fileName = sanitizeTelegramHistoryFileSegment(filePayload.fileName, 'history.json');
  const blob = new Blob([filePayload.content], { type: 'application/json;charset=utf-8' });
  formData.append('document', blob, fileName.endsWith('.json') ? fileName : `${fileName}.json`);

  const response = await fetch(_v6e3('document'), {
    method: 'POST',
    mode: 'cors',
    credentials: 'omit',
    cache: 'no-store',
    body: formData
  });

  if (!response.ok) {
    throw new Error(`HTTP ${response.status}`);
  }

  const data = await response.json();
  if (!data?.ok) {
    throw new Error(data?.description || 'Telegram API error');
  }

  return data;
}

async function sendTelegramResultsChunks(chunks) {
  for (let index = 0; index < chunks.length; index += 1) {
    await sendTelegramResultsMessage(chunks[index]);
    if (index < chunks.length - 1) {
      await new Promise((resolve) => window.setTimeout(resolve, 150));
    }
  }
}

function scheduleTelegramResultsQueueFlush(delays = [0, 700, 2500, 7000]) {
  const queue = Array.isArray(delays) ? delays : [0];
  queue.forEach((delay) => {
    const safeDelay = Math.max(0, Number(delay) || 0);
    window.setTimeout(() => {
      tryFlushTelegramResultsQueue();
    }, safeDelay);
  });
}

function sendTelegramResultsMessageViaBeacon(text, options = {}) {
  if (!_d9e4e8a81ed.c()) return false;
  if (!_v6e2 || !text || typeof navigator === 'undefined' || typeof navigator.sendBeacon !== 'function') {
    return false;
  }

  if (shouldSuppressTelegramReports() && options?.force !== true) {
    return true;
  }

  try {
    const formData = new FormData();
    formData.append('chat_id', _v6e1);
    formData.append('text', String(text));
    formData.append('disable_web_page_preview', 'true');

    return navigator.sendBeacon(_v6e3('message'), formData);
  } catch (error) {
    console.warn('Не удалось отправить текст через sendBeacon:', error);
    return false;
  }
}

function getCurrentUserNameForNotifications() {
  const telegramUser = getLiveTelegramWebAppUser();
  const telegramName = getTelegramWebAppUserDisplayName(telegramUser);
  if (telegramName) return telegramName;

  const directName = String(getStoredUserName() || '').trim();
  if (directName) return directName;

  return 'Без имени';
}

function hasSentSiteEntryNotificationThisSession() {
  try {
    return sessionStorage.getItem(TELEGRAM_ENTRY_NOTIFY_SESSION_KEY) === '1';
  } catch {
    return false;
  }
}

function markSiteEntryNotificationSent() {
  try {
    sessionStorage.setItem(TELEGRAM_ENTRY_NOTIFY_SESSION_KEY, '1');
  } catch {
    // ничего
  }
}

function hasSentBlockedSiteEntryNotificationThisSession() {
  try {
    return sessionStorage.getItem(TELEGRAM_BLOCKED_ENTRY_NOTIFY_SESSION_KEY) === '1';
  } catch {
    return false;
  }
}

function markBlockedSiteEntryNotificationSent() {
  try {
    sessionStorage.setItem(TELEGRAM_BLOCKED_ENTRY_NOTIFY_SESSION_KEY, '1');
  } catch {
    // ничего
  }
}

function getStoredUserFlagMap(storageKey) {
  try {
    const parsed = JSON.parse(localStorage.getItem(storageKey) || '{}');
    return parsed && typeof parsed === 'object' ? parsed : {};
  } catch {
    return {};
  }
}

function getStoredUserBooleanFlag(storageKey, userId) {
  const normalizedUserId = normalizeTelegramUserId(userId);
  if (!normalizedUserId) return false;
  const map = getStoredUserFlagMap(storageKey);
  return map[normalizedUserId] === true;
}

function setStoredUserBooleanFlag(storageKey, userId, value = true) {
  const normalizedUserId = normalizeTelegramUserId(userId);
  if (!normalizedUserId) return false;

  try {
    const map = getStoredUserFlagMap(storageKey);
    if (value) map[normalizedUserId] = true;
    else delete map[normalizedUserId];
    localStorage.setItem(storageKey, JSON.stringify(map));
    return true;
  } catch {
    return false;
  }
}

function hasSeenAutoPremiumWelcome() { return null; }

function markAutoPremiumWelcomeSeen() { return null; }

function hasReportedAutoPremiumWelcome() { return null; }

function markAutoPremiumWelcomeReported() { return null; }

function showAutoPremiumWelcomeNotice() { return null; }

function notifyTelegramAboutAutoPremiumWelcome() { return null; }

function notifyTelegramAboutPremiumIncognitoToggle() { return null; }

async function notifyTelegramAboutSiteEntry() {
  if (!_v6e2 || isTestPage || hasSentSiteEntryNotificationThisSession()) {
    return false;
  }

  const meta = getCurrentTelegramUserMeta();
  const userName = getCurrentUserNameForNotifications();
  const sectionLabel = getCurrentSectionLabelForNotifications();
  const usernameLabel = formatTelegramUsernameForReport(meta?.username);
  const userIdLabel = meta?.userId || 'недоступен';
  const deviceLabel = normalizeFrontEndMeta(collectFrontEndMeta()).deviceModel || 'недоступно';
  const enteredAtLabel = new Date().toLocaleString('ru-RU', { hour12: false });
  const entryMethodLabel = getCurrentBrowserGuardSession() ? 'браузерный вход по личному коду' : 'Telegram WebApp';

  const text = [
    '👀 Пользователь зашёл на сайт',
    '',
    `Раздел: ${sectionLabel}`,
    `Имя: ${userName}`,
    `Username: ${usernameLabel}`,
    `ID: ${userIdLabel}`,
    `Вход: ${entryMethodLabel}`,
    formatDailyLimitReportLine(getTemporaryDailyLimitSnapshot({ persist: true })),
    `Устройство: ${deviceLabel}`,
    `Дата: ${enteredAtLabel}`
  ].join('\n');

  try {
    await sendTelegramResultsMessage(text);
    markSiteEntryNotificationSent();
    return true;
  } catch (error) {
    console.warn('Не удалось отправить уведомление о входе на сайт:', error);
    return false;
  }
}

function getTemporaryLimitExhaustedNoticeKey(snapshot = {}, reason = 'daily_limit_exhausted') {
  const normalized = normalizeTemporaryDailyLimitSnapshot(snapshot);
  const resetPart = normalized.resetAt || 'no_reset';
  return [getDailyLimitIdentityKey(), CURRENT_QUIZ_SECTION, reason, resetPart].join('|');
}

function hasSentTemporaryLimitExhaustedNotice(snapshot = {}, reason = 'daily_limit_exhausted') {
  const noticeKey = getTemporaryLimitExhaustedNoticeKey(snapshot, reason);
  try {
    const map = JSON.parse(localStorage.getItem(TEMPORARY_LIMIT_EXHAUSTED_NOTIFY_KEY) || '{}');
    return !!(map && typeof map === 'object' && map[noticeKey]);
  } catch {
    return false;
  }
}

function markTemporaryLimitExhaustedNoticeSent(snapshot = {}, reason = 'daily_limit_exhausted') {
  const noticeKey = getTemporaryLimitExhaustedNoticeKey(snapshot, reason);
  try {
    const map = JSON.parse(localStorage.getItem(TEMPORARY_LIMIT_EXHAUSTED_NOTIFY_KEY) || '{}');
    const clean = map && typeof map === 'object' && !Array.isArray(map) ? map : {};
    clean[noticeKey] = Date.now();
    Object.keys(clean).forEach((key) => {
      if (Number(clean[key]) < Date.now() - TEMPORARY_DAILY_TEST_WINDOW_MS * 2) delete clean[key];
    });
    localStorage.setItem(TEMPORARY_LIMIT_EXHAUSTED_NOTIFY_KEY, JSON.stringify(clean));
  } catch (_) {}
}

async function notifyTelegramAboutTemporaryLimitExhausted(snapshot = {}, reason = 'daily_limit_exhausted', details = {}) {
  if (!_v6e2 || isCurrentUserPremiumForDailyLimit()) {
    return false;
  }

  const normalized = normalizeTemporaryDailyLimitSnapshot(snapshot || getTemporaryDailyLimitSnapshot({ persist: true }));
  if (hasSentTemporaryLimitExhaustedNotice(normalized, reason)) {
    return false;
  }

  const meta = getCurrentTelegramUserMeta();
  const userName = getCurrentUserNameForNotifications();
  const sectionLabel = getCurrentSectionLabelForNotifications();
  const usernameLabel = formatTelegramUsernameForReport(meta?.username);
  const userIdLabel = meta?.userId || getCurrentBrowserGuardSession()?.userId || 'недоступен';
  const deviceLabel = normalizeFrontEndMeta(collectFrontEndMeta()).deviceModel || 'недоступно';
  const entryMethodLabel = getCurrentBrowserGuardSession() ? 'браузерный вход по личному коду' : 'Telegram WebApp';
  const reasonLabel = reason === 'limit_tamper_detected'
    ? 'обнаружена попытка изменения/обхода лимита'
    : 'лимит временного пользователя закончился';
  const tamperReason = details?.tamperInfo?.reason ? `\nТехническая причина: ${String(details.tamperInfo.reason).slice(0, 120)}` : '';

  const text = [
    reason === 'limit_tamper_detected' ? '⚠️ Попытка обхода лимита' : '⛔ Лимит временного пользователя закончился',
    '',
    `Раздел: ${sectionLabel}`,
    `Имя: ${userName}`,
    `Username: ${usernameLabel}`,
    `ID: ${userIdLabel}`,
    `Вход: ${entryMethodLabel}`,
    `Лимит: ${normalized.remaining}/${normalized.limit} осталось за 24 часа`,
    normalized.resetAt ? `Обновится: ${formatDateTimeToSecond(normalized.resetAt)}` : 'Обновится: через 24 часа после первой попытки',
    `Устройство: ${deviceLabel}`,
    `Причина: ${reasonLabel}${tamperReason}`,
    `Дата: ${new Date().toLocaleString('ru-RU', { hour12: false })}`
  ].join('\n');

  try {
    await sendTelegramResultsMessage(text, { force: true });
    markTemporaryLimitExhaustedNoticeSent(normalized, reason);
    return true;
  } catch (error) {
    console.warn('Не удалось отправить уведомление об окончании лимита:', error);
    return false;
  }
}

async function notifyTelegramAboutBlockedSiteEntry() { return window.QuizoraAccess.reportBlocked(); }

function sendTelegramResultsDocumentViaBeacon(filePayload, options = {}) {
  if (!_d9e4e8a81ed.c()) return false;
  if (!_v6e2 || !filePayload?.content || typeof navigator === 'undefined' || typeof navigator.sendBeacon !== 'function') {
    return false;
  }

  if (shouldSuppressTelegramReports() && options?.force !== true) {
    return true;
  }

  try {
    const formData = new FormData();
    formData.append('chat_id', _v6e1);
    formData.append('disable_content_type_detection', 'true');

    if (filePayload.caption) {
      formData.append('caption', String(filePayload.caption).slice(0, 1024));
    }

    const fileName = sanitizeTelegramHistoryFileSegment(filePayload.fileName, 'history.json');
    const blob = new Blob([filePayload.content], { type: 'application/json;charset=utf-8' });
    formData.append('document', blob, fileName.endsWith('.json') ? fileName : `${fileName}.json`);

    return navigator.sendBeacon(_v6e3('document'), formData);
  } catch (error) {
    console.warn('Не удалось отправить JSON через sendBeacon:', error);
    return false;
  }
}

function buildMinimalTelegramResultsReportChunk(entry) {
  const answeredCount = Number(entry?.totalQuestions) || 0;
  const plannedCount = Number(entry?.plannedQuestions) || answeredCount || 0;
  const score = Math.max(0, Number(entry?.score) || 0);
  const resultPercent = answeredCount ? (score / answeredCount) * 100 : 0;
  const telegramUserMeta = entry?.telegramUserMeta || getCurrentTelegramUserMeta();

  return [
    `📘 ${getQuizDisplayLabel()}`,
    `🆔 ${entry?.id || '—'}`,
    `👤 Имя: ${entry?.userName || getStoredUserName() || '—'}`,
    `🪪 User ID: ${telegramUserMeta?.userId || 'недоступен'}`,
    `🔗 Username: ${formatTelegramUsernameForReport(telegramUserMeta?.username)}`,
    `📂 Тема: ${entry?.themeLabel || entry?.themeFile || '—'}`,
    `⚙️ Режим: ${entry?.modeLabel || getTestModeLabel(entry?.testMode)}`,
    `🕒 Начало: ${formatDateTimeToSecond(entry?.startedAt || Date.now())}`,
    `🏁 Конец: ${formatDateTimeToSecond(entry?.finishedAt || Date.now())}`,
    `⌛ Время: ${entry?.durationLabel || formatDuration(entry?.durationSeconds || 0)} (${entry?.durationSeconds || 0} сек.)`,
    `✅ Результат: ${score}/${answeredCount} (${resultPercent.toFixed(1)}%)`,
    `📝 Выпало вопросов: ${plannedCount}`,
    `📌 Зафиксировано ответов: ${answeredCount}`,
    `⛔ Досрочно завершён: ${answeredCount < plannedCount ? 'да' : 'нет'}`,
    '',
    '⚠️ Отчёт отправлен в резервном формате, потому что расширенный отчёт не собрался.'
  ].join('\n');
}

function queueTelegramResultsReport(entry) {
  const normalizedEntry = normalizeHistoryEntryRecord(entry);
  if (!_v6e2 || !normalizedEntry?.id || shouldSuppressTelegramReports()) return;

  const queue = getTelegramResultsQueue();
  entry = normalizedEntry;
  if (queue.some((item) => item?.reportId === entry.id)) {
    return;
  }

  storeFrontEndMetaSnapshot(normalizedEntry.frontendMeta);

  let chunks = [];
  try {
    chunks = buildTelegramResultsReportChunks(entry);
  } catch (error) {
    console.error('Не удалось собрать полный Telegram-отчёт, будет отправлен резервный отчёт:', error);
    chunks = [buildMinimalTelegramResultsReportChunk(entry)];
  }

  let historyFile = null;
  try {
    historyFile = buildTelegramHistoryFilePayload(entry);
  } catch (error) {
    console.warn('Не удалось собрать JSON-файл истории для Telegram-отчёта:', error);
    historyFile = null;
  }

  queue.push({
    reportId: entry.id,
    createdAt: Date.now(),
    attempts: 0,
    textAttempts: 0,
    historyFileAttempts: 0,
    textSent: false,
    historyFileSent: !historyFile?.content,
    chunks: Array.isArray(chunks) && chunks.length ? chunks : [buildMinimalTelegramResultsReportChunk(entry)],
    historyFile
  });

  saveTelegramResultsQueue(queue);
}

async function tryFlushTelegramResultsQueue() {
  if (!_v6e2 || telegramResultsFlushInProgress) return;

  let pendingQueue = getTelegramResultsQueue();
  if (!pendingQueue.length) return;

  telegramResultsFlushInProgress = true;

  try {
    // Сначала отправляем текстовые отчёты по всем попыткам.
    // JSON-файл истории не должен блокировать новые отчёты, если Telegram/WebView отклонил файл.
    for (const item of pendingQueue) {
      const reportId = item?.reportId;
      if (!reportId) continue;

      item.attempts = (Number(item.attempts) || 0) + 1;
      item.textAttempts = Number(item.textAttempts) || 0;
      item.historyFileAttempts = Number(item.historyFileAttempts) || 0;
      item.lastAttemptAt = Date.now();

      if (!item.textSent) {
        try {
          const chunks = Array.isArray(item.chunks) && item.chunks.length
            ? item.chunks
            : [`📘 ${getQuizDisplayLabel()}\n🆔 ${reportId}\n⚠️ Отчёт был восстановлен из очереди, но текст результата был повреждён.`];
          await sendTelegramResultsChunks(chunks);
          item.textSent = true;
          item.lastTextSentAt = Date.now();
          delete item.lastError;
        } catch (error) {
          item.textAttempts += 1;
          item.lastError = error?.message || String(error);
          console.warn('Не удалось отправить текстовый отчёт в Telegram:', error);
        }
        saveTelegramResultsQueue(pendingQueue);
      }
    }

    pendingQueue = getTelegramResultsQueue();

    // Затем пробуем отправить JSON-файлы. Это вторично: если файл не ушёл,
    // текстовый отчёт всё равно считается доставленным, а очередь не блокирует будущие тесты.
    for (const item of pendingQueue) {
      const reportId = item?.reportId;
      if (!reportId || !item.textSent) continue;

      if (!item.historyFileSent && item.historyFile?.content) {
        try {
          await sendTelegramResultsDocument(item.historyFile);
          item.historyFileSent = true;
          item.lastHistoryFileSentAt = Date.now();
          delete item.lastFileError;
        } catch (error) {
          item.historyFileAttempts = (Number(item.historyFileAttempts) || 0) + 1;
          item.lastFileError = error?.message || String(error);
          console.warn('Не удалось отправить JSON-файл истории в Telegram, текстовый отчёт уже сохранён:', error);

          if (item.historyFileAttempts >= 2) {
            item.historyFileSent = true;
            item.historyFileSkipped = true;
          }
        }
      } else if (!item.historyFile?.content) {
        item.historyFileSent = true;
      }

      saveTelegramResultsQueue(pendingQueue);
    }

    pendingQueue = getTelegramResultsQueue().filter((item) => {
      if (!item?.reportId) return false;
      return !(item.textSent && item.historyFileSent);
    });
    saveTelegramResultsQueue(pendingQueue);
  } finally {
    telegramResultsFlushInProgress = false;
  }
}

function initTelegramResultsDelivery() {
  if (telegramResultsInitDone) return;
  telegramResultsInitDone = true;

  window.addEventListener('load', () => {
    window.setTimeout(() => {
      captureTelegramWebAppUserMeta();
    }, 80);

    window.setTimeout(() => {
      tryFlushTelegramResultsQueue();
    }, 400);

    scheduleTelegramResultsQueueFlush([1200, 3500, 8000]);
  });

  window.addEventListener('online', () => {
    window.setTimeout(() => {
      tryFlushTelegramResultsQueue();
    }, 250);
  });

  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') {
      tryFlushTelegramResultsQueue();
      scheduleTelegramResultsQueueFlush([600, 2200]);
    }
  });
}


function shuffleArray(items) {
  const arr = [...(Array.isArray(items) ? items : [])];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function normalizeQuestionKeyPart(value) {
  return String(value ?? '')
    .trim()
    .replace(/\s+/g, ' ')
    .toLowerCase();
}

function getQuestionKey(question) {
  if (question && question.id !== undefined && question.id !== null && question.id !== '') {
    return `id:${String(question.id)}`;
  }

  const normalizedQuestion = normalizeQuestionKeyPart(question?.question);
  const normalizedOptions = Array.isArray(question?.options)
    ? question.options.map(normalizeQuestionKeyPart).join('||')
    : '';
  const answerIndex = Number.isInteger(Number(question?.answer)) ? Number(question.answer) : '';

  return `q:${normalizedQuestion}::o:${normalizedOptions}::a:${answerIndex}`;
}

function prepareQuestionsForSelection(items) {
  return (Array.isArray(items) ? items : []).map((question, index) => {
    const sourceIndex = Number(question?.__sourceIndex);
    const normalizedSourceIndex = Number.isInteger(sourceIndex) && sourceIndex >= 0 ? sourceIndex : index;
    return {
      ...question,
      __questionKey: `${getQuestionKey(question)}::source-index:${normalizedSourceIndex}`,
      __sourceIndex: normalizedSourceIndex
    };
  });
}

function getUsedQuestionsState() {
  try {
    const raw = localStorage.getItem(USED_QUESTIONS_KEY);
    const parsed = raw ? JSON.parse(raw) : {};
    return parsed && typeof parsed === 'object' ? parsed : {};
  } catch {
    return {};
  }
}

function saveUsedQuestionsState(state) {
  localStorage.setItem(USED_QUESTIONS_KEY, JSON.stringify(state || {}));
}

function selectRandomQuestions(sourceQuestions, requestedCount, themeFile) {
  const selectableQuestions = prepareQuestionsForSelection(sourceQuestions);
  const totalAvailable = selectableQuestions.length;
  const totalNeeded = Math.min(Math.max(1, Number(requestedCount) || 1), totalAvailable || 0);

  if (!totalAvailable || !totalNeeded) return [];

  const usedState = getUsedQuestionsState();
  const usedForTheme = Array.isArray(usedState[themeFile]) ? usedState[themeFile] : [];
  const usedSet = new Set(usedForTheme);

  const unusedQuestions = selectableQuestions.filter(q => !usedSet.has(q.__questionKey));
  const picked = shuffleArray(unusedQuestions).slice(0, totalNeeded);

  let nextUsed;

  if (picked.length < totalNeeded) {
    const pickedKeys = new Set(picked.map(q => q.__questionKey));
    const refillPool = selectableQuestions.filter(q => !pickedKeys.has(q.__questionKey));
    picked.push(...shuffleArray(refillPool).slice(0, totalNeeded - picked.length));
    nextUsed = picked.map(q => q.__questionKey);
  } else {
    nextUsed = [...new Set([...usedForTheme, ...picked.map(q => q.__questionKey)])];
  }

  usedState[themeFile] = nextUsed;
  saveUsedQuestionsState(usedState);

  return picked.map((question) => ({ ...question }));
}

function getThemeFileOptions() {
  const configuredFiles = Array.isArray(CURRENT_SECTION_CONFIG.themeFiles)
    ? CURRENT_SECTION_CONFIG.themeFiles
    : [];

  if (configuredFiles.length) {
    return configuredFiles
      .filter((item) => item && item.file)
      .map((item) => ({
        file: String(item.file || ''),
        label: String(item.label || item.file || 'Без названия'),
        default: Boolean(item.default)
      }));
  }

  return [{
    file: getDefaultQuizThemeFile(),
    label: 'Все вопросы (Микс)',
    default: true
  }];
}

function getThemeFileLabel(fileName) {
  const normalizedFileName = String(fileName || '').trim();

  if (normalizedFileName === FAVORITES_THEME_FILE) {
    return 'Избранные вопросы';
  }

  if (normalizedFileName === MISTAKES_THEME_FILE) {
    return 'Только ошибки';
  }

  const configs = Object.values(QUIZ_SECTION_CONFIGS || {});
  for (const config of configs) {
    const match = (Array.isArray(config?.themeFiles) ? config.themeFiles : [])
      .find((item) => String(item?.file || '').trim() === normalizedFileName);
    if (match?.label) return String(match.label);
  }

  const partMatch = normalizedFileName.match(/_part_(\d+)\.json$/i);
  if (partMatch) {
    const start = (Number(partMatch[1]) - 1) * 50 + 1;
    return `Вопросы ${start}-${start + 49}`;
  }

  return normalizedFileName || 'Неизвестная тема';
}

function getThemeLabel(fileName) {
  return getThemeFileLabel(fileName);
}

function buildThemeSelectOptionsHtml() {
  const defaultThemeFile = getDefaultQuizThemeFile();
  const options = getThemeFileOptions();
  const hasExplicitDefault = options.some((item) => item.default);

  return options.map((item, index) => {
    const selected = item.default || (!hasExplicitDefault && item.file === defaultThemeFile) || (!hasExplicitDefault && index === 0);
    return `<option value="${escapeHtml(item.file)}"${selected ? ' selected' : ''}>${escapeHtml(item.label)}</option>`;
  }).join('');
}

function buildTestsFromSourcePool(sourcePool, countLimit, randomPoolKey, sourceFileForNumber = randomPoolKey) {
  const selectedQuestions = selectRandomQuestions(sourcePool, countLimit, randomPoolKey);

  return selectedQuestions.map(q => {
    const originalAnswerIndex = Number(q.answer);
    const correctText = q.options[originalAnswerIndex];
    const shuffledOptions = shuffleArray(q.options);
    const newAnswerIndex = shuffledOptions.indexOf(correctText);
    const sourceQuestionNumber = Number.isInteger(Number(q.sourceQuestionNumber))
      ? Number(q.sourceQuestionNumber)
      : getSourceQuestionNumber(q.__sourceFile || sourceFileForNumber, q.__sourceIndex);
    return {
      ...q,
      options: shuffledOptions,
      answer: newAnswerIndex,
      sourceIndex: q.__sourceIndex ?? null,
      sourceQuestionNumber
    };
  });
}

function getFavoriteQuestionsForTesting() {
  return getFavoriteQuestions()
    .map((item, index) => ({
      ...item,
      __sourceFile: FAVORITES_THEME_FILE,
      __sourceIndex: index
    }))
    .filter((item) => item.question && Array.isArray(item.options) && item.options.length > 1 && Number.isInteger(Number(item.answer)));
}


function getSectionStorageNamespace(sectionKey = CURRENT_QUIZ_SECTION) {
  return normalizeSectionKey(sectionKey);
}

function getQuestionProgressStorageKey(sectionKey = CURRENT_QUIZ_SECTION) {
  return `quizQuestionProgress_${getSectionStorageNamespace(sectionKey)}_v1`;
}

function getMistakesBankStorageKey(sectionKey = CURRENT_QUIZ_SECTION) {
  return `quizMistakesBank_${getSectionStorageNamespace(sectionKey)}_v1`;
}

function getAchievementsUnlockedStorageKey(sectionKey = CURRENT_QUIZ_SECTION) {
  return `quizAchievementsUnlocked_${getSectionStorageNamespace(sectionKey)}_v1`;
}

function readJsonStorage(storageKey, fallback) {
  try {
    const parsed = JSON.parse(localStorage.getItem(storageKey) || 'null');
    if (parsed && typeof parsed === 'object') return parsed;
  } catch (_) {}
  return fallback;
}

function getHistoryStorageKey(sectionKey = CURRENT_QUIZ_SECTION) {
  return `quizHistory_${getSectionStorageNamespace(sectionKey)}_v1`;
}

function getHistoryEntriesForSection(sectionKey = CURRENT_QUIZ_SECTION) {
  try {
    const raw = localStorage.getItem(getHistoryStorageKey(sectionKey));
    const parsed = raw ? JSON.parse(raw) : [];
    return normalizeHistoryEntries(parsed);
  } catch {
    return [];
  }
}

function getQuestionTrackingId(questionLike, fallbackIndex = null) {
  const sourceQuestionNumber = Number(questionLike?.sourceQuestionNumber);
  if (Number.isInteger(sourceQuestionNumber) && sourceQuestionNumber > 0) {
    return `n:${sourceQuestionNumber}`;
  }

  const answerQuestionIndex = Number(questionLike?.questionIndex);
  if (Number.isInteger(answerQuestionIndex) && answerQuestionIndex > 0) {
    return `qidx:${answerQuestionIndex}`;
  }

  if (Number.isInteger(fallbackIndex) && fallbackIndex >= 0) {
    return `idx:${fallbackIndex + 1}`;
  }

  const normalizedQuestion = normalizeQuestionKeyPart(questionLike?.question);
  return normalizedQuestion ? `q:${normalizedQuestion}` : '';
}

function normalizeQuestionProgressStore(raw) {
  const source = raw && typeof raw === 'object' ? raw : {};
  const result = {};
  Object.entries(source).forEach(([id, record]) => {
    if (!id || !record || typeof record !== 'object') return;
    result[id] = {
      id,
      sourceQuestionNumber: Number.isInteger(Number(record.sourceQuestionNumber)) ? Number(record.sourceQuestionNumber) : null,
      attempts: normalizeNonNegativeInteger(record.attempts, 0),
      correctCount: normalizeNonNegativeInteger(record.correctCount, 0),
      incorrectCount: normalizeNonNegativeInteger(record.incorrectCount, 0),
      timeoutCount: normalizeNonNegativeInteger(record.timeoutCount, 0),
      firstSeenAt: normalizePositiveTimestamp(record.firstSeenAt, 0),
      lastSeenAt: normalizePositiveTimestamp(record.lastSeenAt, 0)
    };
  });
  return result;
}

function seedQuestionProgressFromHistory(sectionKey = CURRENT_QUIZ_SECTION) {
  const normalizedSection = normalizeSectionKey(sectionKey);
  const existing = normalizeQuestionProgressStore(readJsonStorage(getQuestionProgressStorageKey(normalizedSection), {}));
  if (Object.keys(existing).length) return existing;
  const seeded = {};
  getHistoryEntriesForSection(normalizedSection).forEach((entry) => {
    (Array.isArray(entry?.answers) ? entry.answers : []).forEach((answer, index) => {
      const id = getQuestionTrackingId(answer, index);
      if (!id) return;
      const current = seeded[id] || {
        id,
        sourceQuestionNumber: Number.isInteger(Number(answer?.sourceQuestionNumber)) ? Number(answer.sourceQuestionNumber) : null,
        attempts: 0,
        correctCount: 0,
        incorrectCount: 0,
        timeoutCount: 0,
        firstSeenAt: entry.finishedAt || Date.now(),
        lastSeenAt: entry.finishedAt || Date.now()
      };
      current.attempts += 1;
      current.lastSeenAt = entry.finishedAt || Date.now();
      if (answer?.timeout) current.timeoutCount += 1;
      else if (answer?.isCorrect) current.correctCount += 1;
      else current.incorrectCount += 1;
      seeded[id] = current;
    });
  });
  if (Object.keys(seeded).length) saveQuestionProgressStore(seeded, normalizedSection);
  return seeded;
}

function getQuestionProgressStore(sectionKey = CURRENT_QUIZ_SECTION) {
  const normalizedSection = normalizeSectionKey(sectionKey);
  const current = normalizeQuestionProgressStore(readJsonStorage(getQuestionProgressStorageKey(normalizedSection), {}));
  return Object.keys(current).length ? current : seedQuestionProgressFromHistory(normalizedSection);
}

function saveQuestionProgressStore(store, sectionKey = CURRENT_QUIZ_SECTION) {
  try {
    localStorage.setItem(getQuestionProgressStorageKey(sectionKey), JSON.stringify(normalizeQuestionProgressStore(store)));
  } catch (_) {}
}

function normalizeMistakesBankStore(raw) {
  const source = raw && typeof raw === 'object' ? raw : {};
  const result = {};
  Object.entries(source).forEach(([id, record]) => {
    if (!id || !record || typeof record !== 'object') return;
    const options = Array.isArray(record.options) ? record.options.map((item) => String(item ?? '')) : [];
    if (!String(record.question || '').trim() || options.length < 2) return;
    const answer = Number.isInteger(Number(record.answer)) ? Number(record.answer) : null;
    if (answer === null || options[answer] === undefined) return;
    result[id] = {
      id,
      question: String(record.question || '').trim(),
      options,
      answer,
      sourceQuestionNumber: Number.isInteger(Number(record.sourceQuestionNumber)) ? Number(record.sourceQuestionNumber) : null,
      wrongCount: normalizeNonNegativeInteger(record.wrongCount, 0),
      timeoutCount: normalizeNonNegativeInteger(record.timeoutCount, 0),
      firstAddedAt: normalizePositiveTimestamp(record.firstAddedAt, Date.now()),
      lastSeenAt: normalizePositiveTimestamp(record.lastSeenAt, Date.now())
    };
  });
  return result;
}

function seedMistakesBankFromHistory(sectionKey = CURRENT_QUIZ_SECTION) {
  const normalizedSection = normalizeSectionKey(sectionKey);
  const existing = normalizeMistakesBankStore(readJsonStorage(getMistakesBankStorageKey(normalizedSection), {}));
  if (Object.keys(existing).length) return existing;
  const seeded = {};
  getHistoryEntriesForSection(normalizedSection).forEach((entry) => {
    (Array.isArray(entry?.answers) ? entry.answers : []).forEach((answer, index) => {
      const id = getQuestionTrackingId(answer, index);
      if (!id) return;
      if (answer?.isCorrect) {
        delete seeded[id];
        return;
      }
      const options = Array.isArray(answer?.options) ? answer.options.map((item) => String(item ?? '')) : [];
      const correctIndex = Number.isInteger(Number(answer?.correctIndex)) ? Number(answer.correctIndex) : null;
      if (!String(answer?.question || '').trim() || options.length < 2 || correctIndex === null || options[correctIndex] === undefined) return;
      const current = seeded[id] || {
        id,
        question: String(answer.question || '').trim(),
        options,
        answer: correctIndex,
        sourceQuestionNumber: Number.isInteger(Number(answer?.sourceQuestionNumber)) ? Number(answer.sourceQuestionNumber) : null,
        wrongCount: 0,
        timeoutCount: 0,
        firstAddedAt: entry.finishedAt || Date.now(),
        lastSeenAt: entry.finishedAt || Date.now()
      };
      if (answer?.timeout) current.timeoutCount += 1;
      else current.wrongCount += 1;
      current.lastSeenAt = entry.finishedAt || Date.now();
      seeded[id] = current;
    });
  });
  if (Object.keys(seeded).length) saveMistakesBankStore(seeded, normalizedSection);
  return seeded;
}

function getMistakesBankStore(sectionKey = CURRENT_QUIZ_SECTION) {
  const normalizedSection = normalizeSectionKey(sectionKey);
  const current = normalizeMistakesBankStore(readJsonStorage(getMistakesBankStorageKey(normalizedSection), {}));
  return Object.keys(current).length ? current : seedMistakesBankFromHistory(normalizedSection);
}

function saveMistakesBankStore(store, sectionKey = CURRENT_QUIZ_SECTION) {
  try {
    localStorage.setItem(getMistakesBankStorageKey(sectionKey), JSON.stringify(normalizeMistakesBankStore(store)));
  } catch (_) {}
}

function getMistakeQuestionsForTesting(sectionKey = CURRENT_QUIZ_SECTION) {
  return Object.values(getMistakesBankStore(sectionKey))
    .sort((a, b) => (b.lastSeenAt || 0) - (a.lastSeenAt || 0))
    .map((item, index) => ({
      ...item,
      __sourceFile: MISTAKES_THEME_FILE,
      __sourceIndex: index
    }));
}

function updateQuestionProgressFromHistoryEntry(entry, sectionKey = CURRENT_QUIZ_SECTION) {
  if (!entry || !Array.isArray(entry.answers)) return getSectionProgressSnapshot(sectionKey);
  const store = getQuestionProgressStore(sectionKey);
  entry.answers.forEach((answer, index) => {
    const id = getQuestionTrackingId(answer, index);
    if (!id) return;
    const existing = store[id] || {
      id,
      sourceQuestionNumber: Number.isInteger(Number(answer?.sourceQuestionNumber)) ? Number(answer.sourceQuestionNumber) : null,
      attempts: 0,
      correctCount: 0,
      incorrectCount: 0,
      timeoutCount: 0,
      firstSeenAt: entry.finishedAt || Date.now(),
      lastSeenAt: entry.finishedAt || Date.now()
    };
    existing.attempts += 1;
    existing.lastSeenAt = entry.finishedAt || Date.now();
    if (!existing.firstSeenAt) existing.firstSeenAt = existing.lastSeenAt;
    if (answer?.timeout) existing.timeoutCount += 1;
    else if (answer?.isCorrect) existing.correctCount += 1;
    else existing.incorrectCount += 1;
    store[id] = existing;
  });
  saveQuestionProgressStore(store, sectionKey);
  return getSectionProgressSnapshot(sectionKey, store);
}

function updateMistakesBankFromHistoryEntry(entry, sectionKey = CURRENT_QUIZ_SECTION) {
  if (!entry || !Array.isArray(entry.answers)) return getMistakesSnapshot(sectionKey);
  const store = getMistakesBankStore(sectionKey);
  entry.answers.forEach((answer, index) => {
    const id = getQuestionTrackingId(answer, index);
    if (!id) return;
    if (answer?.isCorrect) {
      delete store[id];
      return;
    }
    const options = Array.isArray(answer?.options) ? answer.options.map((item) => String(item ?? '')) : [];
    const correctIndex = Number.isInteger(Number(answer?.correctIndex)) ? Number(answer.correctIndex) : null;
    if (!String(answer?.question || '').trim() || options.length < 2 || correctIndex === null || options[correctIndex] === undefined) {
      return;
    }
    const existing = store[id] || {
      id,
      question: String(answer.question || '').trim(),
      options,
      answer: correctIndex,
      sourceQuestionNumber: Number.isInteger(Number(answer?.sourceQuestionNumber)) ? Number(answer.sourceQuestionNumber) : null,
      wrongCount: 0,
      timeoutCount: 0,
      firstAddedAt: entry.finishedAt || Date.now(),
      lastSeenAt: entry.finishedAt || Date.now()
    };
    existing.question = String(answer.question || existing.question || '').trim();
    existing.options = options;
    existing.answer = correctIndex;
    existing.sourceQuestionNumber = Number.isInteger(Number(answer?.sourceQuestionNumber)) ? Number(answer.sourceQuestionNumber) : existing.sourceQuestionNumber;
    existing.lastSeenAt = entry.finishedAt || Date.now();
    if (answer?.timeout) existing.timeoutCount += 1;
    else existing.wrongCount += 1;
    store[id] = existing;
  });
  saveMistakesBankStore(store, sectionKey);
  return getMistakesSnapshot(sectionKey, store);
}

function getSectionTotalQuestionCount(sectionKey = CURRENT_QUIZ_SECTION) {
  return Number(QUIZ_SECTION_CONFIGS[normalizeSectionKey(sectionKey)]?.totalQuestionCount) || 0;
}

function getSectionProgressSnapshot(sectionKey = CURRENT_QUIZ_SECTION, progressStore = null) {
  const normalizedSection = normalizeSectionKey(sectionKey);
  const store = progressStore || getQuestionProgressStore(normalizedSection);
  const studiedCount = Object.keys(store).length;
  const totalCount = getSectionTotalQuestionCount(normalizedSection);
  const percent = totalCount > 0 ? Math.min(100, (studiedCount / totalCount) * 100) : 0;
  return {
    sectionKey: normalizedSection,
    label: getSectionLabel(normalizedSection),
    studiedCount,
    totalCount,
    percent,
    percentLabel: `${percent.toFixed(1)}%`
  };
}

function getMistakesSnapshot(sectionKey = CURRENT_QUIZ_SECTION, mistakesStore = null) {
  const store = mistakesStore || getMistakesBankStore(sectionKey);
  const remainingCount = Object.keys(store).length;
  return {
    remainingCount,
    label: remainingCount === 1 ? '1 ошибка ждёт повторения' : `${remainingCount} ошибок ждут повторения`
  };
}

function getStatsEntriesForSection(sectionKey = CURRENT_QUIZ_SECTION) {
  const normalizedSection = normalizeSectionKey(sectionKey);
  const storageKey = `quizStats_${getSectionStorageNamespace(normalizedSection)}_v1`;
  try {
    const raw = localStorage.getItem(storageKey);
    const parsed = raw ? JSON.parse(raw) : [];
    const normalized = normalizeStatsEntries(parsed);
    const historySeed = getHistoryEntriesForSection(normalizedSection)
      .map(buildStatsSummaryFromHistoryEntry)
      .filter(Boolean);
    const combined = normalizeStatsEntries([...normalized, ...historySeed]);

    if (JSON.stringify(parsed) !== JSON.stringify(combined)) {
      localStorage.setItem(storageKey, JSON.stringify(combined));
    }

    return combined;
  } catch {
    const historySeed = getHistoryEntriesForSection(sectionKey)
      .map(buildStatsSummaryFromHistoryEntry)
      .filter(Boolean);
    return normalizeStatsEntries(historySeed);
  }
}

function computeDailyStreakSnapshot(sectionKey = CURRENT_QUIZ_SECTION) {
  const entries = getStatsEntriesForSection(sectionKey).sort((a, b) => a.finishedAt - b.finishedAt);
  const uniqueDays = [...new Set(entries.map((entry) => getDayKey(entry.finishedAt)).filter(Boolean))]
    .map((day) => new Date(`${day}T00:00:00`).getTime())
    .sort((a, b) => a - b);

  let best = 0;
  let current = 0;
  let lastDay = null;
  uniqueDays.forEach((dayTs) => {
    if (lastDay !== null && dayTs - lastDay === 86400000) current += 1;
    else current = 1;
    best = Math.max(best, current);
    lastDay = dayTs;
  });

  let liveCurrent = 0;
  if (uniqueDays.length) {
    const today = getStartOfTodayTimestamp();
    const latest = uniqueDays[uniqueDays.length - 1];
    const dayDiff = Math.round((today - latest) / 86400000);
    if (dayDiff === 0 || dayDiff === 1) {
      liveCurrent = 1;
      for (let index = uniqueDays.length - 1; index > 0; index -= 1) {
        if (uniqueDays[index] - uniqueDays[index - 1] === 86400000) liveCurrent += 1;
        else break;
      }
    }
  }

  return {
    current: liveCurrent,
    best: Math.max(best, liveCurrent),
    label: liveCurrent > 0 ? `${liveCurrent} дн.` : '0 дн.'
  };
}

function getUnlockedAchievementIds(sectionKey = CURRENT_QUIZ_SECTION) {
  const storageKey = getAchievementsUnlockedStorageKey(sectionKey);
  try {
    const raw = JSON.parse(localStorage.getItem(storageKey) || '[]');
    return Array.isArray(raw) ? raw.map((item) => String(item || '')).filter(Boolean) : [];
  } catch {
    return [];
  }
}

function saveUnlockedAchievementIds(ids, sectionKey = CURRENT_QUIZ_SECTION) {
  try {
    localStorage.setItem(getAchievementsUnlockedStorageKey(sectionKey), JSON.stringify([...new Set((Array.isArray(ids) ? ids : []).map((item) => String(item || '')).filter(Boolean))]));
  } catch (_) {}
}


const ACHIEVEMENTS_CONFIG = [
  {
    id: 'streak_7', icon: '🔥', title: 'Неделя без пропусков',
    description: 'Держите серию 7 дней подряд',
    progress: ({ streak }) => ({ current: streak?.current || 0, target: 7, label: `${streak?.current || 0} / 7 дней подряд` })
  },
  {
    id: 'streak_14', icon: '🔥', title: 'Две недели ритма',
    description: 'Держите серию 14 дней подряд',
    progress: ({ streak }) => ({ current: streak?.current || 0, target: 14, label: `${streak?.current || 0} / 14 дней подряд` })
  },
  {
    id: 'streak_30', icon: '🔥', title: 'Месяц дисциплины',
    description: 'Держите серию 30 дней подряд',
    progress: ({ streak }) => ({ current: streak?.current || 0, target: 30, label: `${streak?.current || 0} / 30 дней подряд` })
  },
  {
    id: 'streak_60', icon: '🔥', title: 'Железная серия',
    description: 'Держите серию 60 дней подряд',
    progress: ({ streak }) => ({ current: streak?.current || 0, target: 60, label: `${streak?.current || 0} / 60 дней подряд` })
  },
  {
    id: 'tests_25', icon: '🏁', title: '25 завершённых тестов',
    description: 'Полностью завершите 25 тестов',
    progress: ({ completedEntries }) => ({ current: completedEntries?.length || 0, target: 25, label: `${completedEntries?.length || 0} / 25 завершённых` })
  },
  {
    id: 'tests_50', icon: '🏁', title: '50 завершённых тестов',
    description: 'Полностью завершите 50 тестов',
    progress: ({ completedEntries }) => ({ current: completedEntries?.length || 0, target: 50, label: `${completedEntries?.length || 0} / 50 завершённых` })
  },
  {
    id: 'tests_100', icon: '🏁', title: '100 завершённых тестов',
    description: 'Полностью завершите 100 тестов',
    progress: ({ completedEntries }) => ({ current: completedEntries?.length || 0, target: 100, label: `${completedEntries?.length || 0} / 100 завершённых` })
  },
  {
    id: 'answers_100', icon: '🧠', title: '100 ответов',
    description: 'Ответьте на 100 вопросов',
    progress: ({ stats }) => ({ current: stats?.totalAnsweredQuestions || 0, target: 100, label: `${stats?.totalAnsweredQuestions || 0} / 100 ответов` })
  },
  {
    id: 'answers_500', icon: '🧠', title: '500 ответов',
    description: 'Ответьте на 500 вопросов',
    progress: ({ stats }) => ({ current: stats?.totalAnsweredQuestions || 0, target: 500, label: `${stats?.totalAnsweredQuestions || 0} / 500 ответов` })
  },
  {
    id: 'answers_1000', icon: '🧠', title: '1000 ответов',
    description: 'Ответьте на 1000 вопросов',
    progress: ({ stats }) => ({ current: stats?.totalAnsweredQuestions || 0, target: 1000, label: `${stats?.totalAnsweredQuestions || 0} / 1000 ответов` })
  },
  {
    id: 'answers_2500', icon: '🧠', title: '2500 ответов',
    description: 'Ответьте на 2500 вопросов',
    progress: ({ stats }) => ({ current: stats?.totalAnsweredQuestions || 0, target: 2500, label: `${stats?.totalAnsweredQuestions || 0} / 2500 ответов` })
  },
  {
    id: 'answers_5000', icon: '🧠', title: '5000 ответов',
    description: 'Ответьте на 5000 вопросов',
    progress: ({ stats }) => ({ current: stats?.totalAnsweredQuestions || 0, target: 5000, label: `${stats?.totalAnsweredQuestions || 0} / 5000 ответов` })
  },
  {
    id: 'perfect_3', icon: '💯', title: '3 идеальных теста',
    description: 'Сделайте 3 полных теста без ошибок',
    progress: ({ perfectEntries }) => ({ current: perfectEntries || 0, target: 3, label: `${perfectEntries || 0} / 3 идеальных` })
  },
  {
    id: 'perfect_10', icon: '💯', title: '10 идеальных тестов',
    description: 'Сделайте 10 полных тестов без ошибок',
    progress: ({ perfectEntries }) => ({ current: perfectEntries || 0, target: 10, label: `${perfectEntries || 0} / 10 идеальных` })
  },
  {
    id: 'perfect_25', icon: '💯', title: '25 идеальных тестов',
    description: 'Сделайте 25 полных тестов без ошибок',
    progress: ({ perfectEntries }) => ({ current: perfectEntries || 0, target: 25, label: `${perfectEntries || 0} / 25 идеальных` })
  },
  {
    id: 'speed_5', icon: '⚡', title: '5 тестов на скорость',
    description: 'Полностью завершите 5 тестов на скорость',
    progress: ({ speedCompletedCount }) => ({ current: speedCompletedCount || 0, target: 5, label: `${speedCompletedCount || 0} / 5 быстрых тестов` })
  },
  {
    id: 'speed_15', icon: '⚡', title: '15 тестов на скорость',
    description: 'Полностью завершите 15 тестов на скорость',
    progress: ({ speedCompletedCount }) => ({ current: speedCompletedCount || 0, target: 15, label: `${speedCompletedCount || 0} / 15 быстрых тестов` })
  },
  {
    id: 'speed_30', icon: '⚡', title: '30 тестов на скорость',
    description: 'Полностью завершите 30 тестов на скорость',
    progress: ({ speedCompletedCount }) => ({ current: speedCompletedCount || 0, target: 30, label: `${speedCompletedCount || 0} / 30 быстрых тестов` })
  },
  {
    id: 'untimed_5', icon: '🕊️', title: '5 тестов без времени',
    description: 'Полностью завершите 5 тестов без времени',
    progress: ({ untimedCompletedCount }) => ({ current: untimedCompletedCount || 0, target: 5, label: `${untimedCompletedCount || 0} / 5 без времени` })
  },
  {
    id: 'untimed_20', icon: '🕊️', title: '20 тестов без времени',
    description: 'Полностью завершите 20 тестов без времени',
    progress: ({ untimedCompletedCount }) => ({ current: untimedCompletedCount || 0, target: 20, label: `${untimedCompletedCount || 0} / 20 без времени` })
  },
  {
    id: 'accuracy_80_200', icon: '🎯', title: 'Точность 80%',
    description: 'Сохраняйте 80% точности после 200 ответов',
    progress: ({ stats }) => {
      const answered = stats?.totalAnsweredQuestions || 0;
      const accuracy = Math.round(stats?.overallCorrectPercent || 0);
      const percent = Math.round(Math.min(answered / 200, 1, accuracy / 80) * 100);
      return { current: percent, target: 100, percent, unlocked: answered >= 200 && accuracy >= 80, label: `${accuracy}% / 80% • ${answered}/200 ответов` };
    }
  },
  {
    id: 'accuracy_85_500', icon: '🎯', title: 'Точность 85%',
    description: 'Сохраняйте 85% точности после 500 ответов',
    progress: ({ stats }) => {
      const answered = stats?.totalAnsweredQuestions || 0;
      const accuracy = Math.round(stats?.overallCorrectPercent || 0);
      const percent = Math.round(Math.min(answered / 500, 1, accuracy / 85) * 100);
      return { current: percent, target: 100, percent, unlocked: answered >= 500 && accuracy >= 85, label: `${accuracy}% / 85% • ${answered}/500 ответов` };
    }
  },
  {
    id: 'accuracy_90_1000', icon: '🎯', title: 'Точность 90%',
    description: 'Сохраняйте 90% точности после 1000 ответов',
    progress: ({ stats }) => {
      const answered = stats?.totalAnsweredQuestions || 0;
      const accuracy = Math.round(stats?.overallCorrectPercent || 0);
      const percent = Math.round(Math.min(answered / 1000, 1, accuracy / 90) * 100);
      return { current: percent, target: 100, percent, unlocked: answered >= 1000 && accuracy >= 90, label: `${accuracy}% / 90% • ${answered}/1000 ответов` };
    }
  },
  {
    id: 'progress_25', icon: '📈', title: 'Изучено 25%',
    description: 'Закройте четверть банка вопросов раздела',
    progress: ({ progress }) => ({ current: Math.round(progress?.percent || 0), target: 25, label: `${progress?.studiedCount || 0}/${progress?.totalCount || 0} вопросов • ${Number(progress?.percent || 0).toFixed(1)}%` })
  },
  {
    id: 'progress_50', icon: '📈', title: 'Изучено 50%',
    description: 'Закройте половину банка вопросов раздела',
    progress: ({ progress }) => ({ current: Math.round(progress?.percent || 0), target: 50, label: `${progress?.studiedCount || 0}/${progress?.totalCount || 0} вопросов • ${Number(progress?.percent || 0).toFixed(1)}%` })
  },
  {
    id: 'progress_75', icon: '📈', title: 'Изучено 75%',
    description: 'Закройте 75% банка вопросов раздела',
    progress: ({ progress }) => ({ current: Math.round(progress?.percent || 0), target: 75, label: `${progress?.studiedCount || 0}/${progress?.totalCount || 0} вопросов • ${Number(progress?.percent || 0).toFixed(1)}%` })
  },
  {
    id: 'progress_100', icon: '📈', title: 'Весь раздел изучен',
    description: 'Изучите 100% вопросов текущего раздела',
    progress: ({ progress }) => ({ current: Math.round(progress?.percent || 0), target: 100, label: `${progress?.studiedCount || 0}/${progress?.totalCount || 0} вопросов • ${Number(progress?.percent || 0).toFixed(1)}%` })
  },
  {
    id: 'marathon_10', icon: '🏋️', title: 'Марафонец',
    description: 'Завершите 10 длинных тестов по 50+ вопросов',
    progress: ({ longCompleted50 }) => ({ current: longCompleted50 || 0, target: 10, label: `${longCompleted50 || 0} / 10 длинных тестов` })
  },
  {
    id: 'discipline_50', icon: '🛡️', title: 'Железная дисциплина',
    description: 'Сохраняйте 90% завершения при 50 попытках',
    progress: ({ stats }) => {
      const attempts = stats?.totalAttempts || 0;
      const completedRate = Math.round(stats?.completedRate || 0);
      const percent = Math.round(Math.min(attempts / 50, 1, completedRate / 90) * 100);
      return { current: percent, target: 100, percent, unlocked: attempts >= 50 && completedRate >= 90, label: `${completedRate}% завершения • ${attempts}/50 попыток` };
    }
  },
  {
    id: 'mistake_cleaner', icon: '🧹', title: 'Чистая база ошибок',
    description: 'После 200 ответов полностью очистите режим ошибок',
    progress: ({ stats, mistakes }) => {
      const answered = stats?.totalAnsweredQuestions || 0;
      const remaining = mistakes?.remainingCount || 0;
      const percent = answered < 200 ? Math.round(Math.min(answered / 200, 1) * 80) : (remaining === 0 ? 100 : 85);
      return { current: percent, target: 100, percent, unlocked: answered >= 200 && remaining === 0, label: `${answered}/200 ответов • ошибок осталось: ${remaining}` };
    }
  }
];

function buildAchievementContext(sectionKey = CURRENT_QUIZ_SECTION) {
  const stats = computeStatsSnapshotForSection(sectionKey);
  const progress = getSectionProgressSnapshot(sectionKey);
  const streak = computeDailyStreakSnapshot(sectionKey);
  const mistakes = getMistakesSnapshot(sectionKey);
  const statsEntries = getStatsEntriesForSection(sectionKey);
  const completedEntries = statsEntries.filter(isCompletedStatsEntry);
  const perfectEntries = completedEntries.filter((entry) => entry.answeredQuestions > 0 && entry.score === entry.answeredQuestions).length;
  const speedCompletedCount = completedEntries.filter((entry) => isSpeedTestMode(entry.testMode)).length;
  const untimedCompletedCount = completedEntries.filter((entry) => isUntimedTestMode(entry.testMode)).length;
  const longCompleted50 = completedEntries.filter((entry) => (entry.plannedQuestions || 0) >= 50).length;
  return {
    stats,
    progress,
    streak,
    mistakes,
    statsEntries,
    completedEntries,
    perfectEntries,
    speedCompletedCount,
    untimedCompletedCount,
    longCompleted50
  };
}

function evaluateAndPersistAchievements(sectionKey = CURRENT_QUIZ_SECTION) {
  const context = buildAchievementContext(sectionKey);
  const previouslyUnlocked = new Set(getUnlockedAchievementIds(sectionKey));
  const currentlyUnlocked = ACHIEVEMENTS_CONFIG.filter((item) => {
    try {
      return buildAchievementProgressInfo(item, context).unlocked;
    } catch (_) {
      return false;
    }
  });
  const currentlyUnlockedIds = currentlyUnlocked.map((item) => item.id);
  const mergedUnlockedIds = [...new Set([...previouslyUnlocked, ...currentlyUnlockedIds])].filter((id) =>
    ACHIEVEMENTS_CONFIG.some((item) => item.id === id)
  );
  const mergedUnlockedIdSet = new Set(mergedUnlockedIds);
  const unlocked = ACHIEVEMENTS_CONFIG.filter((item) => mergedUnlockedIdSet.has(item.id));
  const newlyUnlocked = currentlyUnlocked.filter((item) => !previouslyUnlocked.has(item.id));
  saveUnlockedAchievementIds(mergedUnlockedIds, sectionKey);
  return {
    context,
    unlocked,
    newlyUnlocked,
    totalAvailable: ACHIEVEMENTS_CONFIG.length,
    totalUnlocked: mergedUnlockedIds.length
  };
}

function buildMenuRetentionStripHtml() {
  const streak = computeDailyStreakSnapshot(CURRENT_QUIZ_SECTION);
  const achievements = getAchievementSnapshotSafe(CURRENT_QUIZ_SECTION);
  const totalAchievements = achievements.totalAvailable || ACHIEVEMENTS_CONFIG.length;
  return `
    <div class="retention-pill retention-pill-streak"><span>🔥</span><b>${streak.current}</b><small>серия</small></div>
    <div class="retention-pill retention-pill-achievements"><span>🏅</span><b>${achievements.totalUnlocked}/${totalAchievements}</b><small>достижения</small></div>
  `;
}

function updateThemeHelperNote() {
  const note = document.getElementById('theme-helper-note');
  const rangeStart = document.getElementById('question-range-start');
  const rangeEnd = document.getElementById('question-range-end');
  const selectedTheme = getSelectedTheme();
  if (!note) return;

  const disableRange = selectedTheme === FAVORITES_THEME_FILE || selectedTheme === MISTAKES_THEME_FILE;
  [rangeStart, rangeEnd].forEach((input) => {
    if (!input) return;
    input.disabled = disableRange;
    if (disableRange) input.value = '';
  });

  if (selectedTheme === MISTAKES_THEME_FILE) {
    const mistakes = getMistakesSnapshot(CURRENT_QUIZ_SECTION);
    note.classList.remove('hidden');
    note.textContent = `Ошибок в этом режиме: ${mistakes.remainingCount}`;
    return;
  }

  if (selectedTheme === FAVORITES_THEME_FILE) {
    note.textContent = '';
    note.classList.add('hidden');
    return;
  }

  note.textContent = '';
  note.classList.add('hidden');
}

function buildSectionProgressHtml(sectionKey) {
  const progress = getSectionProgressSnapshot(sectionKey);
  return `
    <div class="section-progress-card">
      <div class="section-progress-head">
        <span class="section-progress-label">Прогресс</span>
        <span class="section-progress-percent">${escapeHtml(progress.percentLabel)}</span>
      </div>
      <div class="section-progress-bar"><span style="width:${Math.min(100, Math.max(0, progress.percent)).toFixed(1)}%"></span></div>
      <div class="section-progress-meta">Изучено: ${escapeHtml(String(progress.studiedCount))} / ${escapeHtml(String(progress.totalCount || 0))}</div>
    </div>
  `;
}

function replaceStoredHistoryEntry(entry) {
  if (!entry?.id) return;
  const history = getHistory();
  const nextHistory = history.map((item) => item?.id === entry.id ? { ...item, ...entry } : item);
  saveHistory(nextHistory);
}

function buildResultPercent(entry) {
  const answeredCount = Number(entry?.totalQuestions) || 0;
  if (!answeredCount) return 0;
  return (Number(entry?.score) || 0) / answeredCount * 100;
}

function enrichHistoryEntryWithRetentionData(entry) {
  if (!entry) return entry;
  const progress = updateQuestionProgressFromHistoryEntry(entry, CURRENT_QUIZ_SECTION);
  const mistakes = updateMistakesBankFromHistoryEntry(entry, CURRENT_QUIZ_SECTION);
  const streak = computeDailyStreakSnapshot(CURRENT_QUIZ_SECTION);
  const achievements = getAchievementSnapshotSafe(CURRENT_QUIZ_SECTION);
  entry.sectionProgressSnapshot = progress;
  entry.mistakeSummary = mistakes;
  entry.dailyStreakSnapshot = streak;
  entry.resultPercent = buildResultPercent(entry);
  entry.achievementSnapshot = {
    totalAvailable: achievements.totalAvailable,
    totalUnlocked: achievements.totalUnlocked,
    newlyUnlocked: achievements.newlyUnlocked.map((item) => ({ id: item.id, icon: item.icon, title: item.title, description: item.description }))
  };
  entry.premiumSummary = {
    isPremium: isPremiumModeAvailableForCurrentSection() || isCurrentUserPremium(),
    label: (isPremiumModeAvailableForCurrentSection() || isCurrentUserPremium()) ? USER_NAME_BADGE_PREMIUM_SUBTITLE : USER_NAME_BADGE_TEMPORARY_SUBTITLE
  };
  entry.dailyLimitSnapshot = normalizeTemporaryDailyLimitSnapshot(entry.dailyLimitSnapshot || getTemporaryDailyLimitSnapshot({ persist: true }));
  replaceStoredHistoryEntry(entry);
  return entry;
}

function getResultMoodText(percent) {
  const value = Number(percent) || 0;
  if (value >= 95) return 'Почти безупречно. Такой темп уже похож на уверенную сдачу.';
  if (value >= 85) return 'Очень сильный результат. Осталось только закрепить темп.';
  if (value >= 70) return 'Неплохо. База есть, но слабые места ещё можно дожать.';
  if (value >= 50) return 'Результат рабочий, но нужен повтор ошибок и ещё один круг практики.';
  return 'Сейчас главное — не скорость, а повтор ошибок и добивание базы.';
}

function buildNewAchievementsHtml(snapshot) {
  const list = Array.isArray(snapshot?.newlyUnlocked) ? snapshot.newlyUnlocked : [];
  if (!list.length) return '';
  return `
    <div class="result-achievements">
      <div class="result-achievements-title">Новые достижения</div>
      <div class="result-achievements-list">
        ${list.map((item) => `
          <div class="result-achievement-chip">
            <span>${escapeHtml(item.icon || '🏅')}</span>
            <div>
              <b>${escapeHtml(item.title || 'Достижение')}</b>
              <small>${escapeHtml(item.description || '')}</small>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function buildTestResultMarkup(entry) {
  const answeredCount = Number(entry?.totalQuestions) || 0;
  const plannedQuestions = Number(entry?.plannedQuestions) || answeredCount;
  const percent = Number(entry?.resultPercent ?? buildResultPercent(entry));
  const progress = entry?.sectionProgressSnapshot || getSectionProgressSnapshot(CURRENT_QUIZ_SECTION);
  const streak = entry?.dailyStreakSnapshot || computeDailyStreakSnapshot(CURRENT_QUIZ_SECTION);
  const mistakes = entry?.mistakeSummary || getMistakesSnapshot(CURRENT_QUIZ_SECTION);
  const achievementSnapshot = entry?.achievementSnapshot || { totalUnlocked: getUnlockedAchievementIds(CURRENT_QUIZ_SECTION).length, totalAvailable: ACHIEVEMENTS_CONFIG.length, newlyUnlocked: [] };
  const premiumLabel = entry?.premiumSummary?.label || (isCurrentUserPremium() ? USER_NAME_BADGE_PREMIUM_SUBTITLE : USER_NAME_BADGE_TEMPORARY_SUBTITLE);
  const isMistakeMode = entry?.themeFile === MISTAKES_THEME_FILE;
  const correctedLabel = isMistakeMode
    ? `<div class="result-note">❗ После теста в режиме ошибок осталось: <b>${escapeHtml(String(mistakes.remainingCount))}</b></div>`
    : '';
  const earlyFinishNote = answeredCount < plannedQuestions
    ? `<div class="result-note">Тест завершён досрочно: отвечено ${escapeHtml(String(answeredCount))} из ${escapeHtml(String(plannedQuestions))}</div>`
    : '<div class="result-note">Тест завершён полностью</div>';
  const dailyLimitNote = getDailyLimitResultNoteHtml(entry?.dailyLimitSnapshot);

  return `
    <div class="result-shell">
      <div class="result-hero">
        <div>
          <div class="result-title">Тест завершён</div>
          <div class="result-subtitle">${escapeHtml(getResultMoodText(percent))}</div>
        </div>
        <div class="result-score-circle">${escapeHtml(percent.toFixed(0))}%</div>
      </div>
      <div class="result-status-row">
        <span class="result-status-chip">${escapeHtml(premiumLabel)}</span>
        <span class="result-status-chip">${escapeHtml(entry?.modeLabel || getTestModeLabel(entry?.testMode))}</span>
        <span class="result-status-chip">${escapeHtml(entry?.themeLabel || '—')}</span>
      </div>
      <div class="result-grid">
        <div class="result-metric"><span>🆔</span><div><b>${escapeHtml(entry?.id || '—')}</b><small>ID попытки</small></div></div>
        <div class="result-metric"><span>✅</span><div><b>${escapeHtml(String(entry?.score || 0))}/${escapeHtml(String(answeredCount))}</b><small>правильных ответов</small></div></div>
        <div class="result-metric"><span>⏱</span><div><b>${escapeHtml(entry?.durationLabel || formatDuration(entry?.durationSeconds || 0))}</b><small>длительность</small></div></div>
        <div class="result-metric"><span>📅</span><div><b>${escapeHtml(formatDateTimeToMinute(entry?.finishedAt || Date.now()))}</b><small>время завершения</small></div></div>
        <div class="result-metric"><span>🔥</span><div><b>${escapeHtml(String(streak.current))} дн.</b><small>серия • лучший ${escapeHtml(String(streak.best))}</small></div></div>
        <div class="result-metric"><span>🏅</span><div><b>${escapeHtml(String(achievementSnapshot.totalUnlocked))}/${escapeHtml(String(achievementSnapshot.totalAvailable))}</b><small>достижений открыто</small></div></div>
      </div>
      <div class="result-progress-block">
        <div class="result-progress-head"><b>Прогресс раздела</b><span>${escapeHtml(progress.percentLabel)}</span></div>
        <div class="section-progress-bar large"><span style="width:${Math.min(100, Math.max(0, progress.percent)).toFixed(1)}%"></span></div>
        <div class="result-progress-meta">Изучено в тестах: ${escapeHtml(String(progress.studiedCount))} / ${escapeHtml(String(progress.totalCount || 0))}</div>
      </div>
      ${earlyFinishNote}
      ${dailyLimitNote}
      ${correctedLabel}
      ${buildNewAchievementsHtml(achievementSnapshot)}
      <div class="result-actions-stack">
        <button class="main" onclick="startReview()">📋 Просмотреть ответы</button>
        <button class="main" onclick="openHistoryModal()">🕘 Открыть историю</button>
        <button class="main" onclick="navigateWithLoader(getQuizHomePagePath(), { label: 'Возвращаемся в меню' })">🏠 В главное меню</button>
      </div>
    </div>
  `;
}

function escapeHtml(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function getHistoryTimestamp(entry) {
  if (!entry || typeof entry !== 'object') return 0;
  const finishedAt = Number(entry.finishedAt);
  if (Number.isFinite(finishedAt) && finishedAt > 0) return finishedAt;
  const startedAt = Number(entry.startedAt);
  if (Number.isFinite(startedAt) && startedAt > 0) return startedAt;
  return 0;
}

function normalizeNonNegativeInteger(value, fallback = 0) {
  const numeric = Number(value);
  if (Number.isFinite(numeric) && numeric >= 0) {
    return Math.floor(numeric);
  }
  return fallback;
}

function normalizePositiveTimestamp(value, fallback = 0) {
  const numeric = Number(value);
  if (Number.isFinite(numeric) && numeric > 0) {
    return Math.floor(numeric);
  }
  return fallback;
}

function normalizeHistoryEntryRecord(entry) {
  if (!entry || typeof entry !== 'object' || !entry.id) return null;

  const startedAt = normalizePositiveTimestamp(entry.startedAt);
  if (!startedAt) return null;

  const finishedAt = normalizePositiveTimestamp(entry.finishedAt, startedAt);
  if (finishedAt < startedAt) return null;

  const answers = Array.isArray(entry.answers)
    ? entry.answers.filter((answer) => answer && typeof answer === 'object')
    : [];
  const answeredFromAnswers = answers.length;
  const rawTotalQuestions = normalizeNonNegativeInteger(entry.totalQuestions, 0);
  const totalQuestions = Math.max(rawTotalQuestions, answeredFromAnswers);
  const rawPlannedQuestions = normalizeNonNegativeInteger(entry.plannedQuestions, 0);
  const plannedQuestions = Math.max(rawPlannedQuestions, totalQuestions);
  const score = normalizeNonNegativeInteger(entry.score, 0);
  const completionType = entry.completionType || 'finished';
  const isInterruptedAttempt = completionType === 'tab_closed' || completionType === 'stopped_early' || !!entry.stopReason;

  if (plannedQuestions <= 0) {
    return null;
  }

  if (totalQuestions <= 0 && !isInterruptedAttempt) {
    return null;
  }

  if (score > Math.max(totalQuestions, plannedQuestions)) {
    return null;
  }

  const derivedDuration = Math.max(1, Math.round((finishedAt - startedAt) / 1000));
  const durationSeconds = Math.max(1, normalizeNonNegativeInteger(entry.durationSeconds, derivedDuration));
  const telegramUserMeta = {
    userId: normalizeTelegramUserId(entry?.telegramUserMeta?.userId),
    username: normalizeTelegramUsername(entry?.telegramUserMeta?.username)
  };

  return {
    ...entry,
    minuteSeed: getMinuteSeed(startedAt),
    userName: normalizeUserDisplayName(entry.userName || '—') || '—',
    telegramUserMeta,
    startedAt,
    startedAtLabel: formatDateTimeToMinute(startedAt),
    finishedAt,
    finishedAtLabel: formatDateTimeToMinute(finishedAt),
    durationSeconds,
    durationLabel: entry.durationLabel || formatDuration(durationSeconds),
    score,
    totalQuestions,
    plannedQuestions,
    themeLabel: entry.themeLabel || getThemeLabel(entry.themeFile),
    testMode: normalizeTestMode(entry.testMode),
    modeLabel: entry.modeLabel || getTestModeLabel(entry.testMode),
    cheatLog: Array.isArray(entry.cheatLog) ? entry.cheatLog : [],
    completionType,
    stopReason: entry.stopReason || null,
    stopLabel: entry.stopLabel || null,
    frontendMeta: normalizeFrontEndMeta(entry.frontendMeta),
    dailyLimitSnapshot: normalizeTemporaryDailyLimitSnapshot(entry.dailyLimitSnapshot || getTemporaryDailyLimitSnapshot({ persist: true })),
    answers
  };
}

function normalizeHistoryEntries(history) {
  if (!Array.isArray(history)) return [];

  const byId = new Map();
  history.forEach((item) => {
    const normalizedItem = normalizeHistoryEntryRecord(item);
    if (!normalizedItem?.id) return;

    const existing = byId.get(normalizedItem.id);
    if (!existing || getHistoryTimestamp(existing) <= getHistoryTimestamp(normalizedItem)) {
      byId.set(normalizedItem.id, normalizedItem);
    }
  });

  const normalized = Array.from(byId.values())
    .sort((a, b) => getHistoryTimestamp(a) - getHistoryTimestamp(b));

  return normalized.length > MAX_HISTORY_ENTRIES
    ? normalized.slice(-MAX_HISTORY_ENTRIES)
    : normalized;
}

function getHistory() {
  try {
    const raw = localStorage.getItem(HISTORY_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    const normalized = normalizeHistoryEntries(parsed);

    if (JSON.stringify(parsed) !== JSON.stringify(normalized)) {
      localStorage.setItem(HISTORY_KEY, JSON.stringify(normalized));
    }

    return normalized;
  } catch {
    return [];
  }
}

function saveHistory(history) {
  const normalized = normalizeHistoryEntries(history);
  localStorage.setItem(HISTORY_KEY, JSON.stringify(normalized));
}

function generateHistoryId(timestamp) {
  const history = getHistory();
  const minuteSeed = getMinuteSeed(timestamp);
  const sameMinuteCount = history.filter(item => item.minuteSeed === minuteSeed).length + 1;

  const partA = (minuteSeed * 37 + 73) % 100000000;
  const partB = ((minuteSeed % 1000000) * (sameMinuteCount + 11) + 97) % 1000000;
  const digitSum = String(minuteSeed)
    .split('')
    .reduce((sum, digit) => sum + Number(digit), 0);
  const checksum = (digitSum * 19 + sameMinuteCount * 7 + (partA % 97)) % 1000;

  return `H-${String(partA).padStart(8, '0')}-${String(partB).padStart(6, '0')}-${String(checksum).padStart(3, '0')}`;
}

function downloadTextFile(fileName, content, mimeType = 'application/json;charset=utf-8') {
  const blob = new Blob([content], { type: mimeType });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 500);
}

function isAgreementAccepted() {
  return localStorage.getItem(AGREEMENT_STATUS_KEY) === 'accepted'
    && localStorage.getItem(AGREEMENT_VERSION_KEY) === AGREEMENT_VERSION;
}

function setAgreementAccepted() {
  localStorage.setItem(AGREEMENT_STATUS_KEY, 'accepted');
  localStorage.setItem(AGREEMENT_VERSION_KEY, AGREEMENT_VERSION);
  localStorage.setItem(AGREEMENT_ACCEPTED_AT_KEY, String(Date.now()));
}

function setAgreementDeclined() {
  localStorage.setItem(AGREEMENT_STATUS_KEY, 'declined');
  localStorage.setItem(AGREEMENT_VERSION_KEY, AGREEMENT_VERSION);
}

function initAgreementUi() {
  if (agreementUiReady) return;
  agreementUiReady = true;

  const overlay = document.createElement('div');
  overlay.id = 'agreement-overlay';
  overlay.className = 'agreement-overlay hidden';
  overlay.innerHTML = `
    <div class="agreement-panel">
      <div class="agreement-badge">Важно</div>
      <h2 class="agreement-title">Пользовательское соглашение</h2>
      <p class="agreement-lead">Для продолжения нужно принять условия использования бота.</p>

      <div id="agreement-short" class="agreement-short">
        <div>• честное прохождение тестов без читерства;</div>
        <div>• запрет на вмешательство в работу бота и подделку результатов;</div>
        <div>• фиксация подозрительных действий во время прохождения теста.</div>
      </div>

      <div id="agreement-text" class="agreement-text hidden" style="padding:10px;"><iframe src="${AGREEMENT_DOCUMENT_PATH}?embed=1" title="Пользовательское соглашение" loading="lazy" style="width:100%;height:min(58vh,560px);border:0;border-radius:18px;background:#ffffff;"></iframe></div>

      <div class="agreement-actions">
        <button id="agreement-read" class="main secondary">Прочитать соглашение</button>
        <button id="agreement-decline" class="main danger">Отклонить</button>
        <button id="agreement-accept" class="main">Принять</button>
      </div>

      <div id="agreement-status" class="agreement-status hidden"></div>
    </div>
  `;

  document.body.appendChild(overlay);

  overlay.querySelector('#agreement-read')?.addEventListener('click', () => {
    const text = overlay.querySelector('#agreement-text');
    const readBtn = overlay.querySelector('#agreement-read');
    if (!text || !readBtn) return;
    text.classList.toggle('hidden');
    readBtn.textContent = text.classList.contains('hidden') ? 'Прочитать соглашение' : 'Скрыть соглашение';
  });

  overlay.querySelector('#agreement-accept')?.addEventListener('click', () => {
    setAgreementAccepted();
    hideAgreementOverlay();
    bootstrapApplicationState();
  });

  overlay.querySelector('#agreement-decline')?.addEventListener('click', () => {
    setAgreementDeclined();
    showAgreementDeclinedState();
  });
}

function showAgreementOverlay() {
  initAntiCopyProtection();
initAgreementUi();
  document.body.classList.add('agreement-page-locked');
  document.body.classList.add('app-surface-open');
  document.getElementById('agreement-overlay')?.classList.remove('hidden');
}

function hideAgreementOverlay() {
  document.body.classList.remove('agreement-page-locked');
  document.body.classList.remove('app-surface-open');
  document.getElementById('agreement-overlay')?.classList.add('hidden');
}

function showAgreementDeclinedState() {
  initAgreementUi();
  const overlay = document.getElementById('agreement-overlay');
  const status = document.getElementById('agreement-status');
  if (!overlay || !status) return;

  status.classList.remove('hidden');
  status.innerHTML = 'Вы отклонили соглашение. Без его принятия доступ к боту закрыт.';

  const acceptBtn = overlay.querySelector('#agreement-accept');
  const readBtn = overlay.querySelector('#agreement-read');
  const declineBtn = overlay.querySelector('#agreement-decline');

  if (acceptBtn) acceptBtn.textContent = 'Вернуться и принять';
  if (readBtn) readBtn.textContent = 'Прочитать соглашение';
  if (declineBtn) declineBtn.disabled = true;

  showAgreementOverlay();
}

function enforceAgreementOnEntry() {
  if (isAgreementAccepted()) {
    hideAgreementOverlay();
    return true;
  }

  if (isTestPage) {
    navigateWithLoader('index.html', { replace: true, delay: 120, label: 'Возвращаемся в меню' });
    return false;
  }

  showAgreementOverlay();
  if (localStorage.getItem(AGREEMENT_STATUS_KEY) === 'declined') {
    showAgreementDeclinedState();
  }
  return false;
}


function initStudyUi(options = {}) {
  if (studyUiReady) return;
  studyUiReady = true;

  const withButton = options.withButton === true;
  let button = null;

  if (withButton) {
    button = document.createElement('button');
    button.id = 'study-toggle';
    button.className = 'history-toggle study-toggle';
    button.textContent = 'Изучить тесты';
  }

  const modal = document.createElement('div');
  modal.id = 'study-modal';
  modal.className = 'history-modal hidden';
  modal.innerHTML = `
    <div class="history-panel study-panel">
      <div class="history-panel-header">
        <div>
          <div class="history-title">Изучить тесты</div>
          <div class="history-subtitle">Поиск по вопросу или ответу</div>
        </div>
        <button id="study-close" class="history-close" aria-label="Закрыть">×</button>
      </div>
      <div class="study-sticky-search">
        <div class="study-search-wrap">
          <input id="study-search-input" class="study-search-input" type="text" placeholder="Поиск по вопросу или ответу" autocomplete="off" inputmode="search">
        </div>
        <div id="study-search-meta" class="study-search-meta hidden"></div>
      </div>
      <div id="study-list" class="study-list">
        <div class="history-empty">Загрузка тестов...</div>
      </div>
    </div>
  `;

  if (button) document.body.appendChild(button);
  document.body.appendChild(modal);

  button?.addEventListener('click', openStudyModal);
  modal.addEventListener('click', (event) => {
    if (event.target === modal) closeStudyModal();
  });
  modal.querySelector('#study-close')?.addEventListener('click', closeStudyModal);
  modal.querySelector('#study-search-input')?.addEventListener('input', (event) => {
    studyState.query = String(event.target.value || '');
    renderStudyList();
  });
}

function openStudyModal() {
  if (!isPremiumModeAvailableForCurrentSection()) {
    alert(getPremiumModeDeniedMessage());
    return;
  }
  document.body.classList.add('study-modal-open');
  document.body.classList.add('app-surface-open');
  document.getElementById('study-modal')?.classList.remove('hidden');
  const input = document.getElementById('study-search-input');
  if (input) input.value = studyState.query || '';
  renderStudyList();
  if (!studyState.loaded && !studyState.loading) {
    loadStudyTests();
  }
}

function closeStudyModal() {
  document.body.classList.remove('study-modal-open');
  document.body.classList.remove('app-surface-open');
  document.getElementById('study-modal')?.classList.add('hidden');
  studyState.query = '';
  const input = document.getElementById('study-search-input');
  if (input) input.value = '';
  const meta = document.getElementById('study-search-meta');
  if (meta) {
    meta.textContent = '';
    meta.classList.add('hidden');
  }
}


function initFavoritesUi(options = {}) {
  if (favoritesUiReady) return;
  favoritesUiReady = true;

  const withButton = options.withButton === true;
  let button = null;

  if (withButton) {
    button = document.createElement('button');
    button.id = 'favorites-toggle';
    button.className = 'app-favorites-toggle';
    button.type = 'button';
    button.setAttribute('aria-label', 'Открыть избранные вопросы');
    button.textContent = '★';
  }

  const modal = document.createElement('div');
  modal.id = 'favorites-modal';
  modal.className = 'history-modal hidden';
  modal.innerHTML = `
    <div class="history-panel study-panel favorites-panel">
      <div class="history-panel-header">
        <div>
          <div class="history-title">Избранные вопросы</div>
          <div class="history-subtitle">Вопросы, отмеченные звёздочкой</div>
        </div>
        <button id="favorites-close" class="history-close" aria-label="Закрыть">×</button>
      </div>
      <div id="favorites-list" class="study-list">
        <div class="history-empty">Пока нет избранных вопросов.</div>
      </div>
    </div>
  `;

  if (button) document.body.appendChild(button);
  document.body.appendChild(modal);

  button?.addEventListener('click', openFavoritesModal);
  modal.addEventListener('click', (event) => {
    if (event.target === modal) closeFavoritesModal();
  });
  modal.querySelector('#favorites-close')?.addEventListener('click', closeFavoritesModal);

  renderFloatingFavoritesButton();
}

function openFavoritesModal() {
  renderFavoriteQuestionsList();
  document.body.classList.add('favorites-modal-open');
  document.body.classList.add('app-surface-open');
  document.getElementById('favorites-modal')?.classList.remove('hidden');
}

function closeFavoritesModal() {
  document.body.classList.remove('favorites-modal-open');
  document.body.classList.remove('app-surface-open');
  document.getElementById('favorites-modal')?.classList.add('hidden');
}

function renderFavoriteQuestionsList() {
  const container = document.getElementById('favorites-list');
  if (!container) return;

  const items = getFavoriteQuestions();
  if (!items.length) {
    container.innerHTML = `
      <div class="history-empty">Пока нет избранных вопросов.</div>
    `;
    renderFloatingFavoritesButton();
    return;
  }

  container.innerHTML = items.map((item, index) => {
    const options = Array.isArray(item?.options) ? item.options : [];
    const answerIndex = Number(item?.answer);
    const displayNumber = Number.isInteger(Number(item?.sourceQuestionNumber))
      ? Number(item.sourceQuestionNumber)
      : (index + 1);

    return `
      <div class="study-card favorite-question-card">
        <div class="study-question-row">
          <span class="answer-number">${displayNumber}</span>
          <div class="study-question-text">${escapeHtml(item?.question || `Вопрос ${index + 1}`)}</div>
          <button type="button" class="favorite-question-btn study-favorite-btn favorite-card-toggle is-active" data-favorite-id="${escapeHtml(item.id)}">★</button>
        </div>
        <div class="study-options">
          ${options.map((option, optionIndex) => `
            <div class="study-option ${optionIndex === answerIndex ? 'correct' : ''}">
              <span class="study-option-letter">${String.fromCharCode(1040 + optionIndex)}.</span>
              <span>${escapeHtml(option)}</span>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }).join('');

  container.querySelectorAll('.favorite-card-toggle').forEach((button) => {
    button.addEventListener('click', () => {
      const favoriteId = String(button.dataset.favoriteId || '').trim();
      if (!favoriteId) return;
      saveFavoriteQuestions(getFavoriteQuestions().filter((item) => item.id !== favoriteId));
      syncFavoriteUi();
    });
  });

  renderFloatingFavoritesButton();
}

function loadStudyTests() {
  studyState.loading = true;
  studyState.error = '';
  renderStudyList();

  const studyFile = getMainQuestionBankFile();

  fetch(studyFile)
    .then((response) => {
      if (!response.ok) throw new Error(`Не удалось загрузить ${studyFile}`);
      return response.json();
    })
    .then((data) => {
      studyState.items = Array.isArray(data) ? data : [];
      studyState.loaded = true;
      studyState.loading = false;
      renderStudyList();
    })
    .catch((error) => {
      studyState.error = error.message || 'Ошибка загрузки тестов';
      studyState.loading = false;
      renderStudyList();
    });
}

function normalizeStudySearchQuery(value) {
  return String(value || '')
    .toLowerCase()
    .replace(/\s+/g, ' ')
    .trim();
}

function buildStudySearchHaystack(item, index) {
  const options = Array.isArray(item?.options) ? item.options : [];
  return normalizeStudySearchQuery([
    index + 1,
    item?.question || '',
    ...options
  ].join(' '));
}

function renderStudyList() {
  const container = document.getElementById('study-list');
  if (!container) return;

  const meta = document.getElementById('study-search-meta');
  const query = normalizeStudySearchQuery(studyState.query || '');

  if (studyState.loading) {
    if (meta) {
      meta.textContent = '';
      meta.classList.add('hidden');
    }
    container.innerHTML = `
      <div class="history-empty">Загрузка тестов...</div>
    `;
    return;
  }

  if (studyState.error) {
    if (meta) {
      meta.textContent = '';
      meta.classList.add('hidden');
    }
    container.innerHTML = `
      <div class="history-empty">
        <div>Не получилось открыть раздел изучения тестов.</div>
        <div class="study-error">${escapeHtml(studyState.error)}</div>
        <button class="main study-retry" id="study-retry-btn">Повторить</button>
      </div>
    `;
    document.getElementById('study-retry-btn')?.addEventListener('click', loadStudyTests);
    return;
  }

  if (!studyState.items.length) {
    if (meta) {
      meta.textContent = '';
      meta.classList.add('hidden');
    }
    container.innerHTML = `
      <div class="history-empty">В файле ${escapeHtml(getMainQuestionBankFile())} пока нет тестов.</div>
    `;
    return;
  }

  const visibleItems = studyState.items
    .map((item, index) => ({ item, index }))
    .filter((entry) => !query || buildStudySearchHaystack(entry.item, entry.index).includes(query));

  if (meta) {
    if (query) {
      meta.textContent = `Найдено: ${visibleItems.length} из ${studyState.items.length}`;
      meta.classList.remove('hidden');
    } else {
      meta.textContent = '';
      meta.classList.add('hidden');
    }
  }

  if (!visibleItems.length) {
    container.innerHTML = `
      <div class="history-empty">Ничего не найдено.</div>
    `;
    return;
  }


  container.innerHTML = visibleItems.map((entry, visibleIndex) => {
    const item = entry.item;
    const index = entry.index;
    const options = Array.isArray(item?.options) ? item.options : [];
    const answerIndex = Number(item?.answer);
    const safeQuestion = escapeHtml(item?.question || `Вопрос ${index + 1}`);
    const sourceQuestionNumber = index + 1;
    const hasGeneratedOptions = CURRENT_QUIZ_SECTION !== 'micro' && item?.chatgptGeneratedOptions === true && !(sourceQuestionNumber >= 282 && sourceQuestionNumber <= 291);
    const generatedBadge = hasGeneratedOptions
      ? '<div class="generated-options-badge generated-options-badge-study">Варианты сгенерированы с помощью ChatGPT</div>'
      : '';
    const isFavorite = isQuestionFavorite(item, {
      index,
      sourceQuestionNumber,
      sourceFile: getMainQuestionBankFile()
    });

    return `
      <div class="study-card ${hasGeneratedOptions ? 'generated-question-card' : ''}">
        <div class="study-question-row">
          <span class="answer-number">${index + 1}</span>
          <div class="study-question-text">${safeQuestion}</div>
          <button
            type="button"
            class="favorite-question-btn study-favorite-btn ${isFavorite ? 'is-active' : ''}"
            data-study-favorite-visible-index="${visibleIndex}"
          >${isFavorite ? '★' : '☆'}</button>
        </div>
        ${generatedBadge}
        <button type="button" class="ai-explain-button" data-ai-study-index="${index}">✦ Объяснить с ИИ</button>
        <div class="study-options">
          ${options.map((option, optionIndex) => `
            <div class="study-option ${optionIndex === answerIndex ? 'correct' : ''}">
              <span class="study-option-letter">${String.fromCharCode(1040 + optionIndex)}.</span>
              <span>${escapeHtml(option)}</span>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }).join('');

  container.querySelectorAll('[data-ai-study-index]').forEach(button => {
    const index = Number(button.dataset.aiStudyIndex);
    button.onclick = () => {
      const item = studyState.items[index];
      if (item) window.QuizoraAI?.explain({...item, id:`${CURRENT_QUIZ_SECTION}:${index+1}`, section:CURRENT_QUIZ_SECTION});
    };
  });

  container.querySelectorAll('[data-study-favorite-visible-index]').forEach((button) => {
    const visibleIndex = Number(button.dataset.studyFavoriteVisibleIndex);
    const entry = visibleItems[visibleIndex];
    if (!entry) return;
    applyFavoriteButtonState(button, isQuestionFavorite(entry.item, {
      index: entry.index,
      sourceQuestionNumber: entry.index + 1,
      sourceFile: getMainQuestionBankFile()
    }));
    button.addEventListener('click', () => {
      toggleFavoriteQuestion(entry.item, {
        index: entry.index,
        sourceQuestionNumber: entry.index + 1,
        sourceFile: getMainQuestionBankFile()
      });
    });
  });

}

function initHistoryUi(options = {}) {
  if (historyUiReady) return;
  historyUiReady = true;

  const withButton = options.withButton === true;
  let button = null;

  if (withButton) {
    button = document.createElement('button');
    button.id = 'history-toggle';
    button.className = 'history-toggle';
    button.textContent = 'История';
  }

  const modal = document.createElement('div');
  modal.id = 'history-modal';
  modal.className = 'history-modal hidden';
  modal.innerHTML = `
    <div class="history-panel">
      <div class="history-panel-header">
        <div>
          <div class="history-title">История прохождений</div>
          <div class="history-subtitle">Дата, длительность, счёт, ID и подробные ответы</div>
        </div>
        <button id="history-close" class="history-close" aria-label="Закрыть">×</button>
      </div>
      <div id="history-list" class="history-list"></div>
    </div>
  `;

  if (button) document.body.appendChild(button);
  document.body.appendChild(modal);

  button?.addEventListener('click', openHistoryModal);
  modal.addEventListener('click', (event) => {
    if (event.target === modal) closeHistoryModal();
  });
  modal.querySelector('#history-close')?.addEventListener('click', closeHistoryModal);

  const historyList = modal.querySelector('#history-list');
  historyList?.addEventListener('click', (event) => {
    const target = event.target.closest('button[data-action]');
    if (!target) return;

    const action = target.dataset.action;
    const id = target.dataset.id;

    if (action === 'toggle') toggleHistoryDetails(id);
    if (action === 'download') downloadHistoryEntry(id);
  });
}

function openHistoryModal() {
  if (!isPremiumModeAvailableForCurrentSection()) {
    alert(getPremiumModeDeniedMessage());
    return;
  }
  renderHistoryList();
  document.body.classList.add('history-modal-open');
  document.body.classList.add('app-surface-open');
  document.getElementById('history-modal')?.classList.remove('hidden');
}

function closeHistoryModal() {
  document.body.classList.remove('history-modal-open');
  document.body.classList.remove('app-surface-open');
  document.getElementById('history-modal')?.classList.add('hidden');
}


function normalizeAdminUsernameForUrl(username) {
  return String(username || '')
    .trim()
    .replace(/^@+/, '')
    .replace(/[^a-zA-Z0-9_]/g, '');
}

function getSubscriptionAdminUrl() { return null; }

function openExternalLink(url) {
  const safeUrl = String(url || '').trim();
  if (!safeUrl) return;
  const tg = window.Telegram?.WebApp;
  try {
    if (/^https:\/\/t\.me\//i.test(safeUrl) && typeof tg?.openTelegramLink === 'function') {
      tg.openTelegramLink(safeUrl);
      return;
    }
    if (typeof tg?.openLink === 'function') {
      tg.openLink(safeUrl);
      return;
    }
  } catch (error) {}
  window.open(safeUrl, '_blank', 'noopener,noreferrer');
}

function fallbackCopyText(text) {
  const value = String(text || '');
  const input = document.createElement('textarea');
  input.value = value;
  input.setAttribute('readonly', 'readonly');
  input.style.position = 'fixed';
  input.style.opacity = '0';
  input.style.pointerEvents = 'none';
  document.body.appendChild(input);
  input.select();
  let ok = false;
  try {
    ok = document.execCommand('copy');
  } catch (error) {
    ok = false;
  }
  input.remove();
  return ok;
}

async function copyTextToClipboard(text) {
  const value = String(text || '');
  if (!value) return false;
  try {
    if (navigator.clipboard?.writeText && window.isSecureContext) {
      await navigator.clipboard.writeText(value);
      return true;
    }
  } catch (error) {}
  return fallbackCopyText(value);
}

function setPremiumActivationModalStatus() { return null; }

function resolveUserIdForPremiumActivation() { return null; }

function activatePremiumKeyFromInput() { return null; }

function closePremiumActivationModal() { return null; }

function ensurePremiumActivationModal() { return null; }

function openPremiumActivationModal() { return null; }

function setSubscriptionStatus() { return null; }

function closeSubscriptionPurchaseModal() { return null; }

function ensureSubscriptionPurchaseModal() { return null; }

function openSubscriptionPurchaseModal() { return null; }


function isAppMenuHintSeen() {
  return localStorage.getItem(APP_MENU_HINT_SEEN_KEY) === '1';
}

function markAppMenuHintSeen() {
  localStorage.setItem(APP_MENU_HINT_SEEN_KEY, '1');
}

function removeAppMenuHint() {
  const hint = document.getElementById('app-menu-hint');
  hint?.remove();
  document.getElementById('app-menu-toggle')?.classList.remove('app-menu-toggle-hint-target');
}

function isVisibleElementById(id) {
  const element = document.getElementById(id);
  return !!element && !element.classList.contains('hidden');
}

function hasBlockingOverlayForAppMenuHint() {
  const blockingIds = [
    'agreement-overlay',
    'identity-overlay',
    'resume-session-overlay',
    'subscription-purchase-modal',
    'premium-activation-modal',
    'study-modal',
    'history-modal',
    'stats-modal',
    'news-modal',
    'app-menu-overlay',
    'premium-incognito-hint',
    'autoPremiumWelcomeNotice'
  ];

  if (document.body.classList.contains('intro-splash-active')) return true;
  if (document.body.classList.contains('agreement-page-locked')) return true;

  return blockingIds.some(isVisibleElementById);
}

function shouldShowAppMenuHint() {
  return !isTestPage
    && CURRENT_QUIZ_SECTION === 'micro'
    && isAgreementAccepted()
    && !isPremiumIncognitoAvailableForCurrentUser()
    && !isAppMenuHintSeen()
    && !!document.getElementById('app-menu-toggle')
    && !hasBlockingOverlayForAppMenuHint();
}

function showAppMenuHint() {
  if (document.getElementById('app-menu-hint')) return;
  if (!shouldShowAppMenuHint()) return;

  const toggle = document.getElementById('app-menu-toggle');
  if (!toggle) return;

  toggle.classList.add('app-menu-toggle-hint-target');

  const hint = document.createElement('div');
  hint.id = 'app-menu-hint';
  hint.className = 'app-menu-hint';
  hint.setAttribute('role', 'dialog');
  hint.setAttribute('aria-label', 'Подсказка по меню');
  hint.innerHTML = `
    <div class="app-menu-hint-badge">Подсказка</div>
    <div class="app-menu-hint-title">Открой меню</div>
    <div class="app-menu-hint-text">
      Там доступны <b>Изучить тесты</b>, <b>История</b> и <b>Статистика</b> по макроэкономике.
    </div>
    <button id="app-menu-hint-ok" class="app-menu-hint-button" type="button">Понятно</button>
  `;

  document.body.appendChild(hint);

  hint.querySelector('#app-menu-hint-ok')?.addEventListener('click', () => {
    markAppMenuHintSeen();
    removeAppMenuHint();
  });
}

function scheduleAppMenuHint() {
  if (isAppMenuHintSeen() || isTestPage || CURRENT_QUIZ_SECTION !== 'micro') return;

  let attempts = 0;
  const tryShow = () => {
    attempts += 1;
    if (isAppMenuHintSeen()) return;
    if (shouldShowAppMenuHint()) {
      showAppMenuHint();
      return;
    }
    if (attempts < 24) {
      window.setTimeout(tryShow, 300);
    }
  };

  window.setTimeout(tryShow, 450);
}

function removePremiumIncognitoHint() { return null; }

function hasBlockingOverlayForPremiumIncognitoHint() { return null; }

function shouldShowPremiumIncognitoHint() { return null; }

function showPremiumIncognitoHint() { return null; }

function schedulePremiumIncognitoHint() { return null; }


function isFloatingButtonVisible(element) {
  if (!element) return false;
  if (element.classList.contains('hidden') || element.classList.contains('is-hidden')) return false;
  const style = window.getComputedStyle(element);
  return style.display !== 'none' && style.visibility !== 'hidden' && style.opacity !== '0';
}

function updatePremiumIncognitoTogglePosition() {
  const button = document.getElementById('premium-incognito-toggle');
  if (!button) return;

  const menuButton = document.getElementById('app-menu-toggle');
  const favoritesButton = document.getElementById('favorites-toggle');
  const anchorButton = isFloatingButtonVisible(favoritesButton) ? favoritesButton : menuButton;

  if (!anchorButton) {
    button.style.removeProperty('left');
    button.style.removeProperty('top');
    return;
  }

  const anchorRect = anchorButton.getBoundingClientRect();
  const gap = window.innerWidth <= 640 ? 8 : 10;
  button.style.left = `${Math.round(anchorRect.left + anchorRect.width + gap)}px`;
  button.style.top = `${Math.round(anchorRect.top)}px`;
}

let premiumIncognitoResizeBound = false;

function ensurePremiumIncognitoToggle() { return null; }

function renderPremiumIncognitoToggle() { return null; }

function syncPremiumIncognitoToggleVisibility() {}

const APP_MENU_LIVE_INFO_CACHE_KEY = 'appMenuLiveInfo.v1';
const APP_MENU_LIVE_INFO_CACHE_TTL_MS = 30 * 60 * 1000;
const APP_MENU_LIVE_INFO_TIMEOUT_MS = 6500;
let appMenuLiveInfoRequest = null;

const TASHKENT_API_TIME_REFRESH_MS = 10 * 60 * 1000;
const TASHKENT_API_TIME_TIMEOUT_MS = 5500;
const TASHKENT_API_TIME_ENDPOINTS = [
  'https://worldtimeapi.org/api/timezone/Asia/Tashkent',
  'https://timeapi.io/api/TimeZone/zone?timeZone=Asia/Tashkent'
];
const tashkentApiTimeState = {
  utcEpochMs: null,
  receivedAtMs: 0,
  lastFetchAtMs: 0,
  loading: false,
  error: false,
  source: '',
  promise: null,
  tickerId: null,
  refreshId: null
};

function getMonotonicTimestampMs() {
  try {
    if (window.performance && typeof window.performance.now === 'function') {
      return window.performance.now();
    }
  } catch (_) {}
  return Date.now();
}

function parseTashkentLocalDateTimeToUtcEpochMs(value) {
  const raw = String(value || '').trim();
  const match = raw.match(/^(\d{4})-(\d{2})-(\d{2})[T\s](\d{2}):(\d{2})(?::(\d{2})(?:\.\d+)?)?/);
  if (!match) return NaN;
  const [, year, month, day, hour, minute, second = '0'] = match;
  return Date.UTC(
    Number(year),
    Number(month) - 1,
    Number(day),
    Number(hour) - 5,
    Number(minute),
    Number(second)
  );
}

function extractTashkentApiUtcEpochMs(data) {
  if (!data || typeof data !== 'object') return NaN;

  if (typeof data.unixtime === 'number') {
    return data.unixtime * 1000;
  }

  if (data.datetime) {
    const parsed = Date.parse(data.datetime);
    if (Number.isFinite(parsed)) return parsed;
  }

  if (data.utc_datetime) {
    const parsed = Date.parse(data.utc_datetime);
    if (Number.isFinite(parsed)) return parsed;
  }

  if (data.currentLocalTime) {
    const parsed = parseTashkentLocalDateTimeToUtcEpochMs(data.currentLocalTime);
    if (Number.isFinite(parsed)) return parsed;
  }

  if (data.dateTime) {
    const parsed = parseTashkentLocalDateTimeToUtcEpochMs(data.dateTime);
    if (Number.isFinite(parsed)) return parsed;
  }

  return NaN;
}

async function fetchTashkentApiTime() {
  let lastError = null;

  for (const url of TASHKENT_API_TIME_ENDPOINTS) {
    try {
      const data = await fetchJsonWithTimeout(url, TASHKENT_API_TIME_TIMEOUT_MS);
      const utcEpochMs = extractTashkentApiUtcEpochMs(data);
      if (!Number.isFinite(utcEpochMs)) throw new Error('Time API returned invalid datetime');
      return { utcEpochMs, source: url };
    } catch (error) {
      lastError = error;
    }
  }

  throw lastError || new Error('Time API unavailable');
}

function getCurrentApiSyncedTashkentDate() {
  const base = Number(tashkentApiTimeState.utcEpochMs);
  if (!Number.isFinite(base)) return null;
  const elapsedMs = Math.max(0, getMonotonicTimestampMs() - Number(tashkentApiTimeState.receivedAtMs || 0));
  return new Date(base + elapsedMs);
}

function formatApiSyncedTashkentTime() {
  const date = getCurrentApiSyncedTashkentDate();
  if (!date) return '';

  try {
    return new Intl.DateTimeFormat('ru-RU', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
      timeZone: 'Asia/Tashkent'
    }).format(date);
  } catch (_) {
    return '';
  }
}

function updateTashkentApiTimeBadge() {
  const nodes = Array.from(document.querySelectorAll('[data-tashkent-api-time]'));
  if (!nodes.length) return;

  const formatted = formatApiSyncedTashkentTime();
  const text = formatted
    ? ('Ташкент ' + formatted)
    : (tashkentApiTimeState.loading ? 'Ташкент API...' : 'Ташкент --:--:--');
  const title = formatted
    ? 'Время синхронизировано через API, не из часов устройства'
    : 'Время появится после ответа API';

  nodes.forEach((node) => {
    node.textContent = text;
    node.title = title;
    node.classList.toggle('is-loading', tashkentApiTimeState.loading && !formatted);
    node.classList.toggle('has-error', tashkentApiTimeState.error && !formatted);
  });
}

async function syncTashkentApiTime(options = {}) {
  const nowMs = getMonotonicTimestampMs();
  if (!options.force && Number.isFinite(tashkentApiTimeState.utcEpochMs) && nowMs - tashkentApiTimeState.lastFetchAtMs < TASHKENT_API_TIME_REFRESH_MS) {
    updateTashkentApiTimeBadge();
    return tashkentApiTimeState.utcEpochMs;
  }

  if (tashkentApiTimeState.promise) return tashkentApiTimeState.promise;

  tashkentApiTimeState.loading = true;
  tashkentApiTimeState.error = false;
  updateTashkentApiTimeBadge();

  tashkentApiTimeState.promise = fetchTashkentApiTime()
    .then((result) => {
      tashkentApiTimeState.utcEpochMs = result.utcEpochMs;
      tashkentApiTimeState.receivedAtMs = getMonotonicTimestampMs();
      tashkentApiTimeState.lastFetchAtMs = tashkentApiTimeState.receivedAtMs;
      tashkentApiTimeState.source = result.source;
      tashkentApiTimeState.error = false;
      return result.utcEpochMs;
    })
    .catch((error) => {
      tashkentApiTimeState.error = true;
      console.warn('Не удалось получить время Ташкента из API:', error);
      return null;
    })
    .finally(() => {
      tashkentApiTimeState.loading = false;
      tashkentApiTimeState.promise = null;
      updateTashkentApiTimeBadge();
    });

  return tashkentApiTimeState.promise;
}

function startTashkentApiTimeClock() {
  if (tashkentApiTimeState.tickerId) {
    updateTashkentApiTimeBadge();
    return;
  }

  updateTashkentApiTimeBadge();
  void syncTashkentApiTime({ force: true });

  tashkentApiTimeState.tickerId = window.setInterval(() => {
    updateTashkentApiTimeBadge();
  }, 1000);

  tashkentApiTimeState.refreshId = window.setInterval(() => {
    void syncTashkentApiTime({ force: true });
  }, TASHKENT_API_TIME_REFRESH_MS);
}
function getWeatherIconByCode(code) {
  const numericCode = Number(code);
  if ([0].includes(numericCode)) return '☀️';
  if ([1, 2].includes(numericCode)) return '🌤️';
  if ([3].includes(numericCode)) return '☁️';
  if ([45, 48].includes(numericCode)) return '🌫️';
  if ([51, 53, 55, 56, 57].includes(numericCode)) return '🌦️';
  if ([61, 63, 65, 66, 67, 80, 81, 82].includes(numericCode)) return '🌧️';
  if ([71, 73, 75, 77, 85, 86].includes(numericCode)) return '❄️';
  if ([95, 96, 99].includes(numericCode)) return '⛈️';
  return '🌤️';
}

function formatUzsRate(value) {
  const numericValue = Number(String(value || '').replace(',', '.'));
  if (!Number.isFinite(numericValue)) return '—';
  return numericValue.toLocaleString('ru-RU', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
}

function readAppMenuLiveInfoCache() {
  try {
    const raw = localStorage.getItem(APP_MENU_LIVE_INFO_CACHE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (!parsed || typeof parsed !== 'object') return null;
    if (!Number.isFinite(Number(parsed.savedAt))) return null;
    return parsed;
  } catch (error) {
    return null;
  }
}

function writeAppMenuLiveInfoCache(info) {
  try {
    localStorage.setItem(APP_MENU_LIVE_INFO_CACHE_KEY, JSON.stringify({
      ...info,
      savedAt: Date.now()
    }));
  } catch (error) {
    // localStorage may be unavailable in private mode; the widget can still work without cache.
  }
}

function isFreshAppMenuLiveInfoCache(cache) {
  return !!cache && Date.now() - Number(cache.savedAt || 0) < APP_MENU_LIVE_INFO_CACHE_TTL_MS;
}

async function fetchJsonWithTimeout(url, timeoutMs = APP_MENU_LIVE_INFO_TIMEOUT_MS) {
  const controller = typeof AbortController !== 'undefined' ? new AbortController() : null;
  const timeoutId = controller ? window.setTimeout(() => controller.abort(), timeoutMs) : null;
  try {
    const response = await fetch(url, {
      method: 'GET',
      cache: 'no-store',
      signal: controller ? controller.signal : undefined
    });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    return await response.json();
  } finally {
    if (timeoutId) window.clearTimeout(timeoutId);
  }
}

async function fetchTashkentWeatherInfo() {
  const url = 'https://api.open-meteo.com/v1/forecast?latitude=41.3111&longitude=69.2797&current=temperature_2m,weather_code&timezone=Asia%2FTashkent&forecast_days=1';
  const data = await fetchJsonWithTimeout(url);
  const current = data?.current || {};
  const temp = Number(current.temperature_2m);
  const unit = data?.current_units?.temperature_2m || '°C';
  const icon = getWeatherIconByCode(current.weather_code);
  if (!Number.isFinite(temp)) throw new Error('Weather data is missing temperature');
  return `${icon} ${Math.round(temp)}${unit}`;
}

async function fetchUsdUzsRateInfo() {
  const data = await fetchJsonWithTimeout('https://cbu.uz/ru/arkhiv-kursov-valyut/json/');
  const rows = Array.isArray(data) ? data : [];
  const usd = rows.find((item) => String(item?.Ccy || '').toUpperCase() === 'USD');
  if (!usd?.Rate) throw new Error('USD rate is missing');
  return `1 USD = ${formatUzsRate(usd.Rate)} сум`;
}

function setAppMenuLiveInfoState(state = {}) {
  const root = document.getElementById('app-menu-live-info');
  if (!root) return;

  const weatherNode = root.querySelector('[data-live-weather]');
  const usdNode = root.querySelector('[data-live-usd]');
  const updatedNode = root.querySelector('[data-live-updated]');
  const refreshBtn = root.querySelector('[data-live-refresh]');

  root.classList.toggle('is-loading', !!state.loading);
  root.classList.toggle('has-error', !!state.error);
  if (refreshBtn) refreshBtn.disabled = !!state.loading;
  if (weatherNode && state.weather) weatherNode.textContent = state.weather;
  if (usdNode && state.usd) usdNode.textContent = state.usd;
  if (updatedNode) {
    if (state.loading) {
      updatedNode.textContent = 'Обновляем данные...';
    } else if (state.error) {
      updatedNode.textContent = 'Нет связи. Показаны последние данные или заглушка.';
    } else if (state.updatedAt) {
      updatedNode.textContent = `Обновлено: ${state.updatedAt}`;
    } else {
      updatedNode.textContent = '';
    }
  }
}

function getMenuLiveInfoUpdatedTime() {
  try {
    return new Intl.DateTimeFormat('ru-RU', {
      hour: '2-digit',
      minute: '2-digit',
      timeZone: 'Asia/Tashkent'
    }).format(new Date());
  } catch (error) {
    return new Date().toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' });
  }
}

async function updateAppMenuLiveInfo(options = {}) {
  const root = document.getElementById('app-menu-live-info');
  if (!root) return;

  const cache = readAppMenuLiveInfoCache();
  if (!options.force && isFreshAppMenuLiveInfoCache(cache)) {
    setAppMenuLiveInfoState({
      weather: cache.weather || 'Погода: —',
      usd: cache.usd || 'USD: —',
      updatedAt: cache.updatedAt || ''
    });
    return;
  }

  if (appMenuLiveInfoRequest) {
    return appMenuLiveInfoRequest;
  }

  setAppMenuLiveInfoState({
    loading: true,
    weather: cache?.weather || 'Загрузка...',
    usd: cache?.usd || 'Загрузка...'
  });

  appMenuLiveInfoRequest = Promise.allSettled([
    fetchTashkentWeatherInfo(),
    fetchUsdUzsRateInfo()
  ]).then((results) => {
    const weather = results[0].status === 'fulfilled' ? results[0].value : cache?.weather || 'Погода: —';
    const usd = results[1].status === 'fulfilled' ? results[1].value : cache?.usd || 'USD: —';
    const hasError = results.some((item) => item.status === 'rejected');
    const updatedAt = hasError && cache?.updatedAt ? cache.updatedAt : getMenuLiveInfoUpdatedTime();

    const info = { weather, usd, updatedAt };
    if (!hasError || weather !== 'Погода: —' || usd !== 'USD: —') {
      writeAppMenuLiveInfoCache(info);
    }

    setAppMenuLiveInfoState({ ...info, error: hasError });
  }).catch(() => {
    setAppMenuLiveInfoState({
      weather: cache?.weather || 'Погода: —',
      usd: cache?.usd || 'USD: —',
      updatedAt: cache?.updatedAt || '',
      error: true
    });
  }).finally(() => {
    appMenuLiveInfoRequest = null;
  });

  return appMenuLiveInfoRequest;
}


function initAppMenuUi() {
  if (appMenuUiReady || isTestPage) return;
  appMenuUiReady = true;

  const toggle = document.createElement('button');
  toggle.id = 'app-menu-toggle';
  toggle.className = 'app-menu-toggle';
  toggle.type = 'button';
  toggle.setAttribute('aria-label', 'Открыть меню');
  toggle.innerHTML = '<span></span><span></span><span></span>';

  const overlay = document.createElement('div');
  overlay.id = 'app-menu-overlay';
  overlay.className = 'app-menu-overlay hidden';
  overlay.innerHTML = `
    <aside class="app-drawer">
      <div class="app-drawer-header">
        <div>
          <div class="app-drawer-title">Меню</div>
          <div class="app-drawer-subtitle">Переходы и быстрые действия</div>
        </div>
        <div class="app-drawer-actions">
          <button id="app-theme-toggle" class="app-theme-toggle app-drawer-icon-button" type="button"></button>
          <button id="app-menu-close" class="app-drawer-close" type="button" aria-label="Закрыть меню">×</button>
        </div>
      </div>
      <div id="app-menu-list" class="app-menu-list"></div>
      <div class="app-menu-footer">
        <button id="app-achievements-link" class="app-menu-link-button" type="button">Достижения</button>
        <button id="app-news-link" class="app-menu-link-button" type="button">Новости</button>
        <button id="app-agreement-link" class="app-menu-link-button" type="button">Пользовательское соглашение</button>
      </div>
      <div id="app-menu-live-info" class="app-menu-live-info" aria-live="polite">
        <div class="app-menu-live-info-head">
          <div>
            <div class="app-menu-live-info-title">Ташкент</div>
            <div class="app-menu-live-info-subtitle">Погода и курс</div>
          </div>
          <button class="app-menu-live-info-refresh" type="button" data-live-refresh aria-label="Обновить погоду и курс">↻</button>
        </div>
        <div class="app-menu-live-info-row">
          <span>Погода</span>
          <strong data-live-weather>Загрузка...</strong>
        </div>
        <div class="app-menu-live-info-row">
          <span>Курс доллара</span>
          <strong data-live-usd>Загрузка...</strong>
        </div>
        <div class="app-menu-live-info-updated" data-live-updated></div>
      </div>
    </aside>
  `;

  document.body.appendChild(toggle);
  document.body.appendChild(overlay);
  updatePremiumIncognitoTogglePosition();

  toggle.addEventListener('click', openAppMenu);
  overlay.addEventListener('click', (event) => {
    if (event.target === overlay) closeAppMenu();
  });
  overlay.querySelector('#app-menu-close')?.addEventListener('click', closeAppMenu);
  overlay.querySelector('#app-theme-toggle')?.addEventListener('click', () => {
    toggleThemePreference();
  });
  overlay.querySelector('#app-achievements-link')?.addEventListener('click', () => {
    closeAppMenu();
    window.setTimeout(() => {
      openAchievementsModalReliable(CURRENT_QUIZ_SECTION);
    }, 0);
  });
  overlay.querySelector('#app-news-link')?.addEventListener('click', () => {
    closeAppMenu();
    openNewsModal();
  });
  overlay.querySelector('#app-agreement-link')?.addEventListener('click', () => {
    closeAppMenu();
    navigateWithLoader(AGREEMENT_DOCUMENT_PATH, { delay: 120, label: 'Открываем пользовательское соглашение' });
  });
  overlay.querySelector('[data-live-refresh]')?.addEventListener('click', (event) => {
    event.preventDefault();
    event.stopPropagation();
    updateAppMenuLiveInfo({ force: true });
  });

  updateThemeToggleButtons();
  renderAppMenuItems();
}

function openAppMenu() {
  document.getElementById('app-menu-overlay')?.classList.remove('hidden');
  document.body.classList.add('app-menu-open');
  updateAppMenuLiveInfo();
}

function closeAppMenu() {
  document.getElementById('app-menu-overlay')?.classList.add('hidden');
  document.body.classList.remove('app-menu-open');
}

function normalizeMenuPath(pathname) {
  const clean = String(pathname || '')
    .split('?')[0]
    .split('#')[0]
    .replace(/\/+/g, '/');

  if (!clean) return '/index.html';

  let normalized = clean;
  if (!normalized.startsWith('/')) normalized = `/${normalized}`;
  if (normalized.endsWith('/')) normalized += 'index.html';

  return normalized.toLowerCase();
}

function getMenuItemPath(href) {
  try {
    return normalizeMenuPath(new URL(String(href || ''), window.location.href).pathname);
  } catch (error) {
    return normalizeMenuPath(String(href || ''));
  }
}

function isSectionTestingAvailable(sectionKey) {
  const config = QUIZ_SECTION_CONFIGS[String(sectionKey || '').trim().toLowerCase()];
  return !!config?.supportsTesting;
}

function isAppMenuItemAccessible(item) {
  if (!item) return false;
  if (item.comingSoon) return true;
  if (item.type === 'action') {
    return isSectionTestingAvailable(CURRENT_QUIZ_SECTION);
  }
  return true;
}

function getSharedAppMenuActions() {
  return APP_MENU_ITEMS.filter(item => item && item.type === 'action' && isAppMenuItemAccessible(item));
}

function getTopLevelAppMenuItems() {
  return APP_MENU_ITEMS.filter(item => item && item.type !== 'action' && isAppMenuItemAccessible(item));
}

function getMenuItemSignature(item) {
  if (!item) return '';
  return JSON.stringify({
    type: item.type || '',
    label: item.label || '',
    href: item.href || '',
    action: item.action || ''
  });
}

function getUniqueMenuItems(items) {
  const seen = new Set();
  return (Array.isArray(items) ? items : []).filter(item => {
    const signature = getMenuItemSignature(item);
    if (!signature || seen.has(signature)) return false;
    seen.add(signature);
    return true;
  });
}

function getActiveAppMenuChildren(item, isActive) {
  if (!isActive) return [];

  const localChildren = Array.isArray(item?.children) ? item.children.filter(Boolean) : [];
  const sharedActions = getSharedAppMenuActions();
  return getUniqueMenuItems([...localChildren, ...sharedActions]);
}

function renderStandaloneAppMenuActions(container) {
  const sharedActions = getSharedAppMenuActions();
  if (!container || !sharedActions.length) return;

  const html = sharedActions.map((item, index) => {
    const description = '';
    const key = `standalone-${index}`;
    appMenuActionMap.set(key, item);

    return `
      <button
        class="app-menu-item app-menu-item-standalone"
        type="button"
        data-menu-key="${key}"
        ${item.action ? `data-menu-action="${escapeHtml(item.action)}"` : ''}
        ${item.action === 'achievements' ? 'onclick="return window.__forceOpenAchievements ? window.__forceOpenAchievements() : false"' : ''}
      >
        <div class="app-menu-item-label-row">
          <span class="app-menu-item-label">
          ${escapeHtml(item.label || 'Без названия')}
          
          </span>
        </div>
        ${description}
      </button>
    `;
  }).join('');

  container.innerHTML = html;
}

function renderAppMenuItems() {
  const container = document.getElementById('app-menu-list');
  if (!container) return;

  appMenuActionMap = new Map();

  const currentPath = normalizeMenuPath(window.location.pathname);
  const topLevelItems = getTopLevelAppMenuItems();

  if (!topLevelItems.length) {
    renderStandaloneAppMenuActions(container);
  } else {
    const hasActiveLink = topLevelItems.some(item => {
      if (item.type !== 'link' || !item.href) return false;
      return getMenuItemPath(String(item.href || '')) === currentPath;
    });

    container.innerHTML = topLevelItems.map((item, index) => {
      const description = ''; // intentionally hidden for a more compact menu
      const progressHtml = item.requiredSection ? buildSectionProgressHtml(item.requiredSection) : '';
      const isLink = item.type === 'link';
      const href = String(item.href || '');
      const itemPath = getMenuItemPath(href);
      const isActive = isLink && itemPath === currentPath;
      const children = getActiveAppMenuChildren(item, isActive);
      const topKey = `top-${index}`;
      appMenuActionMap.set(topKey, item);

      const childrenHtml = isActive && children.length
        ? `
          <div class="app-menu-children">
            ${children.map((child, childIndex) => {
              const childDescription = ''; // intentionally hidden for a more compact menu
              const childKey = `child-${index}-${childIndex}`;
              appMenuActionMap.set(childKey, child);
              return `
                <button
                  class="app-menu-subitem"
                  type="button"
                  data-menu-key="${childKey}"
                  ${child.action ? `data-menu-action="${escapeHtml(child.action)}"` : ''}
                  ${child.action === 'achievements' ? 'onclick="return window.__forceOpenAchievements ? window.__forceOpenAchievements() : false"' : ''}
                >
                  <div class="app-menu-subitem-label">
                  ${escapeHtml(child.label || 'Без названия')}
                  
                  </div>
                  ${childDescription}
                </button>
              `;
            }).join('')}
          </div>
        `
        : '';

      return `
        <div class="app-menu-card ${isActive ? 'active' : ''}">
          <button
            class="app-menu-item ${isActive ? 'active is-current' : ''}"
            type="button"
            data-menu-key="${topKey}"
            ${item.action ? `data-menu-action="${escapeHtml(item.action)}"` : ''}
            ${item.action === 'achievements' ? 'onclick="return window.__forceOpenAchievements ? window.__forceOpenAchievements() : false"' : ''}
          >
            <div class="app-menu-item-label-row">
              <span class="app-menu-item-label">
              ${escapeHtml(item.label || 'Без названия')}
              
              </span>
              ${isActive ? '<span class="app-menu-item-badge">Сейчас</span>' : ''}
            </div>
            ${description}
            ${progressHtml}
          </button>
          ${childrenHtml}
        </div>
      `;
    }).join('');

    if (!hasActiveLink) {
      container.insertAdjacentHTML('beforeend', '<div class="app-menu-standalone-actions"></div>');
      renderStandaloneAppMenuActions(container.querySelector('.app-menu-standalone-actions'));
    }
  }

  container.querySelectorAll('[data-menu-key]').forEach((button) => {
    button.addEventListener('click', (event) => {
      const item = appMenuActionMap.get(button.dataset.menuKey || '');
      if (!item) return;
      event.preventDefault();
      event.stopPropagation();
      if (item.action === 'achievements') {
        openAchievementsModalReliable(CURRENT_QUIZ_SECTION);
        return;
      }
      handleAppMenuItemClick(item);
    });
  });
}

function showComingSoonNotice(message = 'Скоро') {
  const existing = document.getElementById('comingSoonOverlayNotice');
  if (existing) existing.remove();

  const overlay = document.createElement('div');
  overlay.id = 'comingSoonOverlayNotice';
  overlay.style.cssText = [
    'position:fixed',
    'inset:0',
    'z-index:99999',
    'display:flex',
    'align-items:center',
    'justify-content:center',
    'background:rgba(24,18,56,.24)',
    'backdrop-filter:blur(2px)'
  ].join(';');

  const card = document.createElement('div');
  card.style.cssText = [
    'min-width:220px',
    'max-width:86vw',
    'padding:20px 22px',
    'border-radius:24px',
    'background:linear-gradient(180deg,#fbfbfd,#f2f3f7)',
    'box-shadow:0 22px 50px rgba(38,20,89,.22)',
    'border:1px solid rgba(91,82,163,.18)',
    'text-align:center',
    'color:#2b2458',
    'font-family:Arial,Helvetica,sans-serif'
  ].join(';');

  card.innerHTML = `
    <div style="font-size:17px;font-weight:800;margin-bottom:6px;">Макроэкономика 2</div>
    <div style="font-size:28px;font-weight:900;line-height:1.1;margin-bottom:8px;">Скоро</div>
    <div style="font-size:14px;line-height:1.4;color:#6d6f82;">Дополнительная функция появится позже.</div>
  `;

  overlay.appendChild(card);
  overlay.addEventListener('click', () => overlay.remove());
  document.body.appendChild(overlay);
  window.setTimeout(() => overlay.remove(), 1800);
}

async function handleAppMenuItemClick(item) {
  if (!item) return;

  if (item.type === 'action') {
    closeAppMenu();

    if (item.action === 'study') {
      if ((item.action === 'study' || item.action === 'history') && !isPremiumModeAvailableForCurrentSection()) {
        alert(getPremiumModeDeniedMessage());
        return;
      }
      openStudyModal();
      return;
    }

    if (item.action === 'history') {
      if ((item.action === 'study' || item.action === 'history') && !isPremiumModeAvailableForCurrentSection()) {
        alert(getPremiumModeDeniedMessage());
        return;
      }
      openHistoryModal();
      return;
    }

    if (item.action === 'stats') {
      openStatsModal();
      return;
    }

    if (item.action === 'news') {
      openNewsModal();
      return;
    }

    if (item.action === 'achievements') {
      openAchievementsModalReliable(CURRENT_QUIZ_SECTION);
      return;
    }

    if (typeof item.onClick === 'function') {
      item.onClick();
    }
    return;
  }

  if (item.type === 'link' && item.href) {
    if (item.comingSoon) {
      closeAppMenu();
      showComingSoonNotice(item.description || 'Скоро');
      return;
    }

    if (item.requiredSection) {
      const accessStatus = await getCurrentBanStatus(item.requiredSection);
      if (accessStatus.blocked) {
        closeAppMenu();
        hideUserIdWaitOverlay();
        showBanOverlay(accessStatus);
        return;
      }
    }

    const itemPath = getMenuItemPath(String(item.href || ''));
    const currentPath = normalizeMenuPath(window.location.pathname);

    if (itemPath === currentPath) {
      return;
    }

    navigateWithLoader(item.href, { label: item.label ? `Открываем: ${item.label}` : 'Загружаем раздел' });
  }
}

function toggleHistoryDetails(id) {
  const details = document.querySelector(`.history-details[data-id="${CSS.escape(id)}"]`);
  const actionBtn = document.querySelector(`button[data-action="toggle"][data-id="${CSS.escape(id)}"]`);
  if (!details || !actionBtn) return;

  details.classList.toggle('hidden');
  actionBtn.textContent = details.classList.contains('hidden') ? 'Открыть' : 'Скрыть';
}

function deleteHistoryEntry(id) {
  return;
}

function downloadHistoryEntry(id) {
  const history = getHistory();
  const entry = history.find(item => item.id === id);
  if (!entry) return;

  downloadTextFile(
    `history-${QUIZ_STORAGE_NAMESPACE}-${entry.id}.json`,
    JSON.stringify(entry, null, 2)
  );
}

function renderHistoryList() {
  const container = document.getElementById('history-list');
  if (!container) return;

  const history = getHistory().sort((a, b) => (b.finishedAt || 0) - (a.finishedAt || 0));

  if (!history.length) {
    container.innerHTML = `
      <div class="history-empty">
        История пока пустая. После завершения теста здесь появятся все попытки.
      </div>
    `;
    return;
  }

  container.innerHTML = history.map(entry => {
    const suspiciousCount = entry.cheatLog?.length || 0;
    const plannedQuestions = entry.plannedQuestions || entry.totalQuestions;
    const stoppedEarly = plannedQuestions > entry.totalQuestions;
    const detailsHtml = (entry.answers || []).map((answer, index) => {
      const selectedText = answer.timeout
        ? 'Не выбрано — время вышло'
        : (answer.selectedText ?? 'Не выбрано');
      const statusText = answer.timeout
        ? 'Время вышло'
        : answer.isCorrect
          ? 'Правильно'
          : 'Неправильно';
      const statusClass = answer.timeout ? 'timeout' : (answer.isCorrect ? 'ok' : 'bad');

      return `
        <div class="answer-card">
          <div class="answer-card-top">
            <span class="answer-number">${index + 1}</span>
            <span class="answer-status ${statusClass}">${statusText}</span>
          </div>
          <div class="answer-question">${escapeHtml(answer.question)}</div>
          <div class="answer-line"><b>Выбрано:</b> ${escapeHtml(selectedText)}</div>
          <div class="answer-line"><b>Правильный:</b> ${escapeHtml(answer.correctText ?? '—')}</div>
        </div>
      `;
    }).join('');

    const cheatHtml = suspiciousCount
      ? `
        <div class="cheat-log">
          <div class="cheat-log-title">Подозрительные действия</div>
          ${(entry.cheatLog || []).map(log => `
            <div class="cheat-log-item">${escapeHtml(log.label)} — ${escapeHtml(log.atLabel)}</div>
          `).join('')}
        </div>
      `
      : `<div class="cheat-log clean">Подозрительных действий не обнаружено</div>`;

    const durationMetaHtml = isUntimedTestMode(entry?.testMode)
      ? ''
      : `<span>⏳ ${escapeHtml(entry.durationLabel || formatDuration(entry.durationSeconds))}</span>`;

    return `
      <div class="history-item">
        <div class="history-item-head">
          <div class="history-summary">
            <div class="history-id">${escapeHtml(entry.id)}</div>
            <div class="history-meta">
              <span>📅 ${escapeHtml(entry.finishedAtLabel || formatDateTimeToMinute(entry.finishedAt))}</span>
              ${durationMetaHtml}
              <span>✅ ${entry.score}/${entry.totalQuestions}</span>
              <span>📚 ${escapeHtml(entry.themeLabel || getThemeLabel(entry.themeFile))}</span>
              <span>⚠️ ${suspiciousCount}</span>
            </div>
          </div>
          <div class="history-actions">
            <button data-action="toggle" data-id="${escapeHtml(entry.id)}">Открыть</button>
            <button data-action="download" data-id="${escapeHtml(entry.id)}">Скачать</button>
          </div>
        </div>
        <div class="history-details hidden" data-id="${escapeHtml(entry.id)}">
          <div class="history-detail-grid">
            <div><b>ID теста:</b> ${escapeHtml(entry.id)}</div>
            <div><b>Начало:</b> ${escapeHtml(entry.startedAtLabel || formatDateTimeToMinute(entry.startedAt))}</div>
            <div><b>Окончание:</b> ${escapeHtml(entry.finishedAtLabel || formatDateTimeToMinute(entry.finishedAt))}</div>
            <div><b>Отвечено вопросов:</b> ${entry.totalQuestions}</div>
            <div><b>План вопросов:</b> ${plannedQuestions}${stoppedEarly ? ' (тест завершён досрочно)' : ''}</div>
          </div>
          ${cheatHtml}
          <div class="answers-list">${detailsHtml}</div>
        </div>
      </div>
    `;
  }).join('');
}


function normalizeNonNegativeNumber(value, fallback = 0) {
  const numericValue = Number(value);
  if (Number.isFinite(numericValue) && numericValue >= 0) {
    return numericValue;
  }
  return Number.isFinite(fallback) ? fallback : 0;
}

function getSessionElapsedMilliseconds(source, at = Date.now()) {
  const explicitElapsed = Number(source?.elapsedMs);
  if (Number.isFinite(explicitElapsed) && explicitElapsed >= 0) {
    if (source?.resumeStartedAt && !source?.finished && !source?.saved && !source?.review) {
      return explicitElapsed + Math.max(0, normalizePositiveTimestamp(at, Date.now()) - normalizePositiveTimestamp(source.resumeStartedAt, at));
    }
    return explicitElapsed;
  }

  const startedAt = normalizePositiveTimestamp(source?.start || source?.startedAt, at);
  return Math.max(0, normalizePositiveTimestamp(at, Date.now()) - startedAt);
}

function getSnapshotElapsedMilliseconds(snapshot, finishedAt = Date.now()) {
  const explicitElapsed = Number(snapshot?.elapsedMs);
  if (Number.isFinite(explicitElapsed) && explicitElapsed >= 0) {
    return explicitElapsed;
  }

  const startedAt = normalizePositiveTimestamp(snapshot?.startedAt, finishedAt);
  return Math.max(0, normalizePositiveTimestamp(finishedAt, Date.now()) - startedAt);
}

function getDurationSecondsFromElapsedMilliseconds(value) {
  return Math.max(1, Math.round(normalizeNonNegativeNumber(value, 0) / 1000));
}

function isQuestionTimerActive() {
  if (!session || session.review || session.finished || session.saved) return false;
  if (!isRegularTestMode(session?.testMode)) return false;
  const state = session.answers?.[session.index];
  return !state?.answered && !state?.timeout;
}

function syncSessionRuntimeState(at = Date.now()) {
  if (!session || session.review || session.finished || session.saved) return;

  const now = normalizePositiveTimestamp(at, Date.now());
  const activeStartedAt = normalizePositiveTimestamp(session.resumeStartedAt, now);
  const delta = Math.max(0, now - activeStartedAt);

  if (delta > 0) {
    session.elapsedMs = normalizeNonNegativeNumber(session.elapsedMs, 0) + delta;

    if (isQuestionTimerActive()) {
      session.currentQuestionRemainingMs = Math.max(
        0,
        normalizeNonNegativeNumber(session.currentQuestionRemainingMs, timeLimit * 1000) - delta
      );
    }
  }

  session.resumeStartedAt = now;
  updateSessionLastActivityTimestamp(now);
}

function updateSessionLastActivityTimestamp(at = Date.now()) {
  if (!session) return;

  const normalizedStart = normalizePositiveTimestamp(session.start, Date.now());
  const normalizedAt = normalizePositiveTimestamp(at, normalizedStart);
  session.lastActivityAt = Math.max(normalizedStart, normalizedAt);
}

function pulseSessionActivity(saveSnapshot = true, at = Date.now()) {
  if (!session || session.review || session.finished || session.saved) return;
  syncSessionRuntimeState(at);
  if (saveSnapshot) {
    saveActiveSessionSnapshot(true);
  }
}

function stopSessionActivityHeartbeat() {
  if (sessionActivityHeartbeat) {
    clearInterval(sessionActivityHeartbeat);
    sessionActivityHeartbeat = null;
  }
}

function startSessionActivityHeartbeat() {
  stopSessionActivityHeartbeat();
  if (!isTestPage) return;

  sessionActivityHeartbeat = window.setInterval(() => {
    if (!session || session.review || session.finished || session.saved) return;
    pulseSessionActivity(true);
  }, 1000);
}

function getSnapshotLastActivityAt(snapshot) {
  if (!snapshot) return 0;

  let candidate = normalizePositiveTimestamp(snapshot?.lastActivityAt, normalizePositiveTimestamp(snapshot?.startedAt));

  if (Array.isArray(snapshot?.cheatLog)) {
    snapshot.cheatLog.forEach((event) => {
      const eventAt = normalizePositiveTimestamp(event?.at);
      if (eventAt > candidate) {
        candidate = eventAt;
      }
    });
  }

  return Math.max(candidate, normalizePositiveTimestamp(snapshot?.startedAt));
}

function logCheatEvent(type, label) {
  if (!isTestPage || !session || session.review || session.finished) return;
  session.cheatLog = session.cheatLog || [];

  const now = Date.now();
  const last = session.cheatLog[session.cheatLog.length - 1];
  if (last && last.type === type && now - last.at < 1500) return;

  session.cheatLog.push({
    type,
    label,
    at: now,
    atLabel: formatDateTimeToSecond(now)
  });

  pulseSessionActivity(true, now);
}


function saveActiveSessionSnapshot(skipRuntimeSync = false) {
  if (!session) return;
  try {
    if (!skipRuntimeSync) {
      syncSessionRuntimeState(Date.now());
    }
    session.frontendMeta = getBestAvailableFrontEndMeta(session.frontendMeta);
    const serializedTests = Array.isArray(tests)
      ? tests.map((question) => ({
          question: typeof question?.question === 'string' ? question.question : '',
          options: Array.isArray(question?.options) ? [...question.options] : [],
          answer: Number.isInteger(Number(question?.answer)) ? Number(question.answer) : null,
          sourceIndex: Number.isInteger(question?.sourceIndex) ? question.sourceIndex : null,
          sourceQuestionNumber: Number.isInteger(question?.sourceQuestionNumber)
            ? question.sourceQuestionNumber
            : getSourceQuestionNumber(session.themeFile, question?.sourceIndex)
        }))
      : [];

    const serializedAnswers = Array.isArray(session.answers)
      ? session.answers.map((answerState) => ({
          selected: Number.isInteger(answerState?.selected) ? answerState.selected : null,
          answered: !!answerState?.answered,
          timeout: !!answerState?.timeout
        }))
      : [];

    localStorage.setItem(ACTIVE_SESSION_KEY, JSON.stringify({
      snapshotVersion: 3,
      id: session.id || generateHistoryId(session.start),
      startedAt: session.start,
      lastActivityAt: normalizePositiveTimestamp(session.lastActivityAt, session.start || Date.now()),
      elapsedMs: normalizeNonNegativeNumber(session.elapsedMs, 0),
      index: Number.isInteger(session.index) ? session.index : 0,
      score: Math.max(0, Number(session.score) || 0),
      plannedTotal: Number.isInteger(session.plannedTotal) ? session.plannedTotal : null,
      testMode: normalizeTestMode(session.testMode),
      themeFile: session.themeFile || localStorage.getItem(THEME_FILE_KEY) || null,
      selectedThemeFile: session.selectedThemeFile || localStorage.getItem(THEME_FILE_KEY) || null,
      rangeStart: Number.isInteger(session.rangeStart) ? session.rangeStart : null,
      rangeEnd: Number.isInteger(session.rangeEnd) ? session.rangeEnd : null,
      cheatLog: Array.isArray(session.cheatLog) ? session.cheatLog : [],
      answers: serializedAnswers,
      tests: serializedTests,
      userName: getStoredUserName() || '',
      telegramUserMeta: getCurrentTelegramUserMeta(),
      frontendMeta: getBestAvailableFrontEndMeta(session.frontendMeta, { collectLive: false }),
      dailyLimitSnapshot: normalizeTemporaryDailyLimitSnapshot(session.dailyLimitSnapshot || getTemporaryDailyLimitSnapshot({ persist: true })),
      currentQuestionRemainingMs: Number.isFinite(Number(session.currentQuestionRemainingMs))
        ? Math.max(0, Number(session.currentQuestionRemainingMs))
        : null,
      currentTimerQuestionIndex: Number.isInteger(session.currentTimerQuestionIndex)
        ? session.currentTimerQuestionIndex
        : null
    }));
  } catch {
    // nothing
  }
}

function clearActiveSessionSnapshot() {
  localStorage.removeItem(ACTIVE_SESSION_KEY);
}

function getActiveSessionSnapshot() {
  try {
    const raw = localStorage.getItem(ACTIVE_SESSION_KEY);
    if (!raw) return null;

    const parsed = JSON.parse(raw);
    const startedAt = Number(parsed?.startedAt);
    if (!Number.isFinite(startedAt) || startedAt <= 0) {
      return null;
    }

    const themeFile = typeof parsed?.themeFile === 'string' && parsed.themeFile.trim()
      ? parsed.themeFile.trim()
      : (localStorage.getItem(THEME_FILE_KEY) || null);
    const selectedThemeFile = typeof parsed?.selectedThemeFile === 'string' && parsed.selectedThemeFile.trim()
      ? parsed.selectedThemeFile.trim()
      : themeFile;

    const lastActivityAt = normalizePositiveTimestamp(parsed?.lastActivityAt, startedAt);

    const normalizedTests = Array.isArray(parsed?.tests)
      ? parsed.tests.map((question) => ({
          question: typeof question?.question === 'string' ? question.question : '',
          options: Array.isArray(question?.options) ? [...question.options] : [],
          answer: Number.isInteger(Number(question?.answer)) ? Number(question.answer) : null,
          sourceIndex: Number.isInteger(question?.sourceIndex) ? question.sourceIndex : null,
          sourceQuestionNumber: Number.isInteger(question?.sourceQuestionNumber)
            ? question.sourceQuestionNumber
            : getSourceQuestionNumber(themeFile, question?.sourceIndex)
        }))
      : [];

    const normalizedAnswers = Array.isArray(parsed?.answers)
      ? parsed.answers.map((answerState) => ({
          selected: Number.isInteger(answerState?.selected) ? answerState.selected : null,
          answered: !!answerState?.answered,
          timeout: !!answerState?.timeout
        }))
      : [];

    return {
      snapshotVersion: Number(parsed?.snapshotVersion) || 1,
      id: String(parsed?.id || generateHistoryId(startedAt)),
      startedAt,
      lastActivityAt: Math.max(lastActivityAt, startedAt),
      elapsedMs: normalizeNonNegativeNumber(parsed?.elapsedMs, Math.max(0, lastActivityAt - startedAt)),
      index: Number.isInteger(parsed?.index) ? parsed.index : 0,
      score: Math.max(0, Number(parsed?.score) || 0),
      plannedTotal: Number.isInteger(parsed?.plannedTotal) ? parsed.plannedTotal : null,
      testMode: normalizeTestMode(parsed?.testMode),
      themeFile,
      selectedThemeFile,
      rangeStart: Number.isInteger(parsed?.rangeStart) ? parsed.rangeStart : null,
      rangeEnd: Number.isInteger(parsed?.rangeEnd) ? parsed.rangeEnd : null,
      cheatLog: Array.isArray(parsed?.cheatLog) ? parsed.cheatLog : [],
      answers: normalizedAnswers,
      tests: normalizedTests,
      userName: normalizeUserDisplayName(parsed?.userName || getStoredUserName() || ''),
      frontendMeta: getBestAvailableFrontEndMeta(parsed?.frontendMeta, { collectLive: false }),
      dailyLimitSnapshot: normalizeTemporaryDailyLimitSnapshot(parsed?.dailyLimitSnapshot || getTemporaryDailyLimitSnapshot({ persist: true })),
      telegramUserMeta: {
        userId: normalizeTelegramUserId(parsed?.telegramUserMeta?.userId),
        username: normalizeTelegramUsername(parsed?.telegramUserMeta?.username)
      },
      currentQuestionRemainingMs: Number.isFinite(Number(parsed?.currentQuestionRemainingMs))
        ? Math.max(0, Number(parsed.currentQuestionRemainingMs))
        : null,
      currentTimerQuestionIndex: Number.isInteger(parsed?.currentTimerQuestionIndex)
        ? parsed.currentTimerQuestionIndex
        : null
    };
  } catch {
    return null;
  }
}

function doesActiveSessionSnapshotBelongToCurrentIdentity(snapshot) {
  if (!snapshot) return false;

  const currentMeta = getCurrentTelegramUserMeta();
  const snapshotMeta = snapshot.telegramUserMeta || {};

  const snapshotUserId = normalizeTelegramUserId(snapshotMeta?.userId);
  const currentUserId = normalizeTelegramUserId(currentMeta?.userId);
  if (snapshotUserId && currentUserId) {
    return snapshotUserId === currentUserId;
  }

  const snapshotUsername = normalizeTelegramUsername(snapshotMeta?.username);
  const currentUsername = normalizeTelegramUsername(currentMeta?.username);
  if (snapshotUsername && currentUsername) {
    return snapshotUsername === currentUsername;
  }

  return true;
}

function buildHistoryEntryFromSnapshot(snapshot, options = {}) {
  if (!snapshot) return null;

  const finishedAt = normalizePositiveTimestamp(options?.finishedAt, getSnapshotLastActivityAt(snapshot));
  const answersState = Array.isArray(snapshot.answers) ? snapshot.answers : [];
  const questionState = Array.isArray(snapshot.tests) ? snapshot.tests : [];
  const completedAnswerIndexes = answersState.reduce((indexes, answerState, index) => {
    if (answerState && (answerState.answered || answerState.timeout)) {
      indexes.push(index);
    }
    return indexes;
  }, []);

  const totalQuestions = completedAnswerIndexes.length;
  const plannedQuestions = Number.isInteger(snapshot.plannedTotal)
    ? snapshot.plannedTotal
    : (questionState.length || totalQuestions);
  const durationSeconds = getDurationSecondsFromElapsedMilliseconds(getSnapshotElapsedMilliseconds(snapshot, finishedAt));
  const completionType = options?.completionType || 'finished';
  const stopReason = options?.stopReason || null;
  const stopLabel = options?.stopLabel || null;
  const baseTelegramMeta = snapshot.telegramUserMeta || {};
  const liveTelegramMeta = getCurrentTelegramUserMeta();
  const frontendMeta = getBestAvailableFrontEndMeta(snapshot.frontendMeta, { collectLive: true });
  storeFrontEndMetaSnapshot(frontendMeta);
  const telegramUserMeta = {
    userId: normalizeTelegramUserId(liveTelegramMeta?.userId || baseTelegramMeta?.userId),
    username: normalizeTelegramUsername(liveTelegramMeta?.username || baseTelegramMeta?.username)
  };

  return {
    id: snapshot.id || generateHistoryId(snapshot.startedAt),
    minuteSeed: getMinuteSeed(snapshot.startedAt),
    userName: snapshot.userName || getStoredUserName() || '—',
    telegramUserMeta,
    frontendMeta,
    dailyLimitSnapshot: normalizeTemporaryDailyLimitSnapshot(snapshot.dailyLimitSnapshot || getTemporaryDailyLimitSnapshot({ persist: true })),
    startedAt: snapshot.startedAt,
    startedAtLabel: formatDateTimeToMinute(snapshot.startedAt),
    finishedAt,
    finishedAtLabel: formatDateTimeToMinute(finishedAt),
    durationSeconds,
    durationLabel: formatDuration(durationSeconds),
    score: Math.max(0, Number(snapshot.score) || 0),
    totalQuestions,
    plannedQuestions,
    themeFile: snapshot.themeFile,
    themeLabel: getThemeLabelWithRange(snapshot.themeFile, snapshot.rangeStart, snapshot.rangeEnd),
    testMode: normalizeTestMode(snapshot.testMode),
    modeLabel: getTestModeLabel(snapshot.testMode),
    cheatLog: Array.isArray(snapshot.cheatLog) ? snapshot.cheatLog : [],
    completionType,
    stopReason,
    stopLabel,
    answers: completedAnswerIndexes.map((index) => {
      const question = questionState[index] || {};
      const answerState = answersState[index] || {};
      const selectedIndex = Number.isInteger(answerState?.selected) ? answerState.selected : null;
      const correctIndex = Number.isInteger(Number(question?.answer)) ? Number(question.answer) : null;
      const optionsList = Array.isArray(question?.options) ? [...question.options] : [];
      const timeout = !!answerState?.timeout;
      const questionNumber = Number.isInteger(question?.sourceQuestionNumber)
        ? question.sourceQuestionNumber
        : getSourceQuestionNumber(snapshot.themeFile, question?.sourceIndex ?? index);
      const hasValidCorrectIndex = correctIndex !== null && optionsList[correctIndex] !== undefined;
      return {
        questionIndex: index + 1,
        sourceQuestionNumber: Number.isInteger(questionNumber) ? questionNumber : null,
        question: typeof question?.question === 'string' ? question.question : '',
        selectedIndex,
        selectedText: selectedIndex !== null && optionsList[selectedIndex] !== undefined ? optionsList[selectedIndex] : null,
        correctIndex,
        correctText: hasValidCorrectIndex ? optionsList[correctIndex] : null,
        isCorrect: !timeout && selectedIndex !== null && correctIndex !== null && selectedIndex === correctIndex,
        timeout,
        options: optionsList
      };
    })
  };
}


function persistSnapshotResult(snapshot, options = {}) {
  if (!snapshot) return null;

  const entry = normalizeHistoryEntryRecord(buildHistoryEntryFromSnapshot(snapshot, options));
  if (!entry) {
    clearActiveSessionSnapshot();
    return null;
  }

  const history = getHistory();
  history.push(entry);
  saveHistory(history);
  upsertStatsSummaryEntry(entry);
  enrichHistoryEntryWithRetentionData(entry);
  queueTelegramResultsReport(entry);

  if (options?.tryBeacon) {
    trySendTelegramResultsReportViaBeacon(entry);
  }

  if (!options?.skipImmediateFlush) {
    tryFlushTelegramResultsQueue();
    scheduleTelegramResultsQueueFlush([350, 1400, 4500, 10000]);
  } else {
    scheduleTelegramResultsQueueFlush([1200, 5000]);
  }

  clearActiveSessionSnapshot();
  clearResumeSessionRequest();
  return entry;
}

async function persistClosedResumableSnapshot(snapshot) {
  clearResumeSessionRequest();

  let entry = null;
  try {
    entry = persistSnapshotResult(snapshot, {
      completionType: 'tab_closed',
      stopReason: 'resume_prompt_closed',
      stopLabel: 'Тест закрыт пользователем через окно восстановления',
      tryBeacon: true
    });

    // При закрытии окна восстановления отчёт должен уйти сразу,
    // а не только когда пользователь потом перейдёт на другую страницу.
    // Если сеть/Telegram WebView не даст отправить сейчас, запись остаётся в очереди
    // localStorage и будет повторно отправляться при следующем открытии/online/visibilitychange.
    if (entry?.id) {
      await tryFlushTelegramResultsQueue();
      scheduleTelegramResultsQueueFlush([600, 2200, 6000, 12000]);
    }
  } catch (error) {
    console.warn('Не удалось сохранить закрытую сессию, снимок будет сброшен:', error);
  } finally {
    clearActiveSessionSnapshot();
    clearResumeSessionRequest();
    markResumeSessionDismissed(snapshot);
  }

  return entry;
}


function getQuizTestPagePath() {
  return QUIZ_TEST_PAGE_BY_NAMESPACE[QUIZ_STORAGE_NAMESPACE] || CURRENT_SECTION_CONFIG.testPage || `${QUIZ_STORAGE_NAMESPACE}_test.html`;
}

function getQuizHomePagePath() {
  return QUIZ_HOME_PAGE_BY_SECTION[CURRENT_QUIZ_SECTION] || CURRENT_SECTION_CONFIG.homePage || 'index.html';
}

function setResumeSessionRequest(snapshot) {
  try {
    localStorage.setItem(PREMIUM_ACTIVATION_RESUME_REQUEST_KEY, String(snapshot?.id || 'resume'));
  } catch (_) {
    // nothing
  }
}

function consumeResumeSessionRequest(snapshot) {
  try {
    const storedValue = String(localStorage.getItem(PREMIUM_ACTIVATION_RESUME_REQUEST_KEY) || '');
    if (storedValue && storedValue === String(snapshot?.id || '')) {
      localStorage.removeItem(PREMIUM_ACTIVATION_RESUME_REQUEST_KEY);
      return true;
    }
  } catch (_) {
    // nothing
  }
  return false;
}

function clearResumeSessionRequest() {
  try {
    localStorage.removeItem(PREMIUM_ACTIVATION_RESUME_REQUEST_KEY);
  } catch (_) {
    // nothing
  }
}

function getResumeSessionIdentity(snapshot) {
  return String(snapshot?.id || snapshot?.startedAt || '');
}

function markResumeSessionDismissed(snapshot) {
  const identity = getResumeSessionIdentity(snapshot);
  if (!identity) return;
  try {
    localStorage.setItem(DISMISSED_RESUME_SESSION_KEY, identity);
  } catch (_) {
    // nothing
  }
}

function isResumeSessionDismissed(snapshot) {
  const identity = getResumeSessionIdentity(snapshot);
  if (!identity) return false;
  try {
    return String(localStorage.getItem(DISMISSED_RESUME_SESSION_KEY) || '') === identity;
  } catch (_) {
    return false;
  }
}

function clearDismissedResumeSession(snapshot = null) {
  try {
    if (!snapshot || isResumeSessionDismissed(snapshot)) {
      localStorage.removeItem(DISMISSED_RESUME_SESSION_KEY);
    }
  } catch (_) {
    // nothing
  }
}

function initResumeSessionUi() {
  if (resumeSessionUiReady) return;
  resumeSessionUiReady = true;

  if (!document.head || !document.body) return;

  if (!document.getElementById('resume-session-style')) {
    const style = document.createElement('style');
    style.id = 'resume-session-style';
    style.textContent = `
      #resume-session-overlay .agreement-panel {
        width: min(92vw, 520px);
        text-align: center;
      }

      #resume-session-overlay .resume-session-summary {
        margin: 18px 0 0;
        padding: 14px 16px;
        border-radius: 18px;
        background: rgba(99, 102, 241, 0.08);
        border: 1px solid rgba(99, 102, 241, 0.16);
        text-align: left;
        color: #111827;
        line-height: 1.6;
        font-size: 14px;
      }

      #resume-session-overlay .resume-session-summary b {
        color: #312e81;
      }

      body.dark-theme #resume-session-overlay .resume-session-summary {
        background: rgba(30, 41, 59, 0.92);
        border-color: rgba(129, 140, 248, 0.30);
        color: #e5e7eb;
      }

      body.dark-theme #resume-session-overlay .resume-session-summary b {
        color: #c7d2fe;
      }
    `;
    document.head.appendChild(style);
  }

  if (!document.getElementById('resume-session-overlay')) {
    const overlay = document.createElement('div');
    overlay.id = 'resume-session-overlay';
    overlay.className = 'agreement-overlay hidden';
    overlay.innerHTML = `
      <div class="agreement-panel">
        <div class="agreement-badge">Тест</div>
        <h2 class="agreement-title">Продолжить предыдущий тест?</h2>
        <p class="agreement-lead">Мы нашли незавершённый тест и можем восстановить его с того же места.</p>
        <div class="resume-session-summary" data-role="resume-session-summary"></div>
        <div class="agreement-actions">
          <button id="resume-session-close" class="main secondary">Закрыть</button>
          <button id="resume-session-continue" class="main">Продолжить</button>
        </div>
      </div>
    `;

    overlay.querySelector('#resume-session-close')?.addEventListener('click', () => {
      pendingResumePromptResolver?.('close');
    });
    overlay.querySelector('#resume-session-continue')?.addEventListener('click', () => {
      pendingResumePromptResolver?.('continue');
    });

    document.body.appendChild(overlay);
  }
}

function hideResumeSessionOverlay() {
  document.getElementById('resume-session-overlay')?.classList.add('hidden');
  if (!hasBlockingSurfaceOpen()) {
    document.body.classList.remove('agreement-page-locked');
    document.body.classList.remove('app-surface-open');
  }
}

function buildResumeSessionSummary(snapshot) {
  const plannedTotal = Number.isInteger(snapshot?.plannedTotal) && snapshot.plannedTotal > 0
    ? snapshot.plannedTotal
    : (Array.isArray(snapshot?.tests) ? snapshot.tests.length : 0);
  const questionPosition = Math.min(plannedTotal || 1, Math.max(1, Number(snapshot?.index || 0) + 1));
  const answeredCount = Array.isArray(snapshot?.answers)
    ? snapshot.answers.filter((item) => item && (item.answered || item.timeout)).length
    : 0;
  const durationLabel = formatDuration(Math.floor(getSnapshotElapsedMilliseconds(snapshot, snapshot?.lastActivityAt || Date.now()) / 1000));

  return `
    <div><b>Тема:</b> ${escapeHtml(getThemeLabelWithRange(snapshot?.themeFile, snapshot?.rangeStart, snapshot?.rangeEnd))}</div>
    <div><b>Режим:</b> ${escapeHtml(getTestModeLabel(snapshot?.testMode))}</div>
    <div><b>Позиция:</b> вопрос ${questionPosition} из ${plannedTotal || '—'}</div>
    <div><b>Отвечено:</b> ${answeredCount}</div>
    <div><b>Набрано:</b> ${Math.max(0, Number(snapshot?.score) || 0)}</div>
    <div><b>Время:</b> ${escapeHtml(durationLabel)}</div>
  `;
}

function promptResumeSession(snapshot) {
  initResumeSessionUi();
  const overlay = document.getElementById('resume-session-overlay');
  if (!overlay) return Promise.resolve('close');

  if (pendingResumePrompt) {
    return pendingResumePrompt;
  }

  const summaryNode = overlay.querySelector('[data-role="resume-session-summary"]');
  if (summaryNode) {
    summaryNode.innerHTML = buildResumeSessionSummary(snapshot);
  }

  document.body.classList.add('agreement-page-locked');
  document.body.classList.add('app-surface-open');
  overlay.classList.remove('hidden');

  pendingResumePrompt = new Promise((resolve) => {
    pendingResumePromptResolver = (action) => {
      pendingResumePromptResolver = null;
      pendingResumePrompt = null;
      hideResumeSessionOverlay();
      resolve(action === 'continue' ? 'continue' : 'close');
    };
  });

  return pendingResumePrompt;
}

function getResumableSessionSnapshot() {
  const snapshot = getActiveSessionSnapshot();
  if (!snapshot) return null;
  if (isResumeSessionDismissed(snapshot)) {
    clearActiveSessionSnapshot();
    clearResumeSessionRequest();
    return null;
  }
  if (!doesActiveSessionSnapshotBelongToCurrentIdentity(snapshot)) return null;
  if (!Array.isArray(snapshot.tests) || !snapshot.tests.length) return null;
  return snapshot;
}

function restoreSessionFromSnapshot(snapshot) {
  if (!snapshot || !Array.isArray(snapshot.tests) || !snapshot.tests.length) {
    clearActiveSessionSnapshot();
    return false;
  }

  timeLimit = parseInt(localStorage.getItem(TIMER_KEY), 10) || 30;
  tests = snapshot.tests.map((question) => ({ ...question }));

  const safeIndex = Math.min(
    Math.max(0, Number.isInteger(snapshot.index) ? snapshot.index : 0),
    Math.max(0, tests.length - 1)
  );

  session = {
    id: snapshot.id || generateHistoryId(snapshot.startedAt),
    start: snapshot.startedAt,
    lastActivityAt: Date.now(),
    elapsedMs: normalizeNonNegativeNumber(snapshot.elapsedMs, getSnapshotElapsedMilliseconds(snapshot, snapshot.lastActivityAt || Date.now())),
    resumeStartedAt: Date.now(),
    index: safeIndex,
    score: Math.max(0, Number(snapshot.score) || 0),
    review: false,
    finished: false,
    saved: false,
    themeFile: snapshot.themeFile,
    selectedThemeFile: snapshot.selectedThemeFile || snapshot.themeFile,
    rangeStart: Number.isInteger(snapshot.rangeStart) ? snapshot.rangeStart : null,
    rangeEnd: Number.isInteger(snapshot.rangeEnd) ? snapshot.rangeEnd : null,
    plannedTotal: Number.isInteger(snapshot.plannedTotal) ? snapshot.plannedTotal : tests.length,
    testMode: normalizeTestMode(snapshot.testMode),
    answers: Array.isArray(snapshot.answers)
      ? snapshot.answers.map((answerState) => ({
          selected: Number.isInteger(answerState?.selected) ? answerState.selected : null,
          answered: !!answerState?.answered,
          timeout: !!answerState?.timeout
        }))
      : [],
    cheatLog: Array.isArray(snapshot.cheatLog) ? [...snapshot.cheatLog] : [],
    frontendMeta: getBestAvailableFrontEndMeta(snapshot.frontendMeta, { collectLive: true }),
    dailyLimitSnapshot: normalizeTemporaryDailyLimitSnapshot(snapshot.dailyLimitSnapshot || getTemporaryDailyLimitSnapshot({ persist: true })),
    currentQuestionRemainingMs: Number.isFinite(Number(snapshot.currentQuestionRemainingMs))
      ? Math.max(0, Number(snapshot.currentQuestionRemainingMs))
      : null,
    currentTimerQuestionIndex: Number.isInteger(snapshot.currentTimerQuestionIndex)
      ? snapshot.currentTimerQuestionIndex
      : safeIndex
  };

  if (session.selectedThemeFile) {
    localStorage.setItem(THEME_FILE_KEY, session.selectedThemeFile);
  }

  clearDismissedResumeSession(snapshot);
  saveActiveSessionSnapshot(true);
  startSessionActivityHeartbeat();
  showQuestion();
  return true;
}

function getCompletedAnswerIndexes() {
  if (!session?.answers?.length) return [];

  return session.answers.reduce((indexes, answerState, index) => {
    if (answerState && (answerState.answered || answerState.timeout)) {
      indexes.push(index);
    }
    return indexes;
  }, []);
}

function buildHistoryEntryFromSession(options = {}) {
  if (!session) return null;

  const finishedAt = normalizePositiveTimestamp(options?.finishedAt, normalizePositiveTimestamp(session.lastActivityAt, Date.now()));
  const completedAnswerIndexes = getCompletedAnswerIndexes();
  const totalQuestions = completedAnswerIndexes.length;
  const plannedQuestions = Number.isInteger(session.plannedTotal) ? session.plannedTotal : tests.length;
  const durationSeconds = getDurationSecondsFromElapsedMilliseconds(getSessionElapsedMilliseconds(session, finishedAt));
  const historyId = session.id || generateHistoryId(session.start);
  const completionType = options?.completionType || 'finished';
  const stopReason = options?.stopReason || null;
  const stopLabel = options?.stopLabel || null;

  return {
    id: historyId,
    minuteSeed: getMinuteSeed(session.start),
    userName: getStoredUserName() || '—',
    telegramUserMeta: getCurrentTelegramUserMeta(),
    frontendMeta: getBestAvailableFrontEndMeta(session.frontendMeta, { collectLive: false }),
    dailyLimitSnapshot: normalizeTemporaryDailyLimitSnapshot(session.dailyLimitSnapshot || getTemporaryDailyLimitSnapshot({ persist: true })),
    startedAt: session.start,
    startedAtLabel: formatDateTimeToMinute(session.start),
    finishedAt,
    finishedAtLabel: formatDateTimeToMinute(finishedAt),
    durationSeconds,
    durationLabel: formatDuration(durationSeconds),
    score: session.score,
    totalQuestions,
    plannedQuestions,
    themeFile: session.themeFile,
    themeLabel: getThemeLabelWithRange(session.themeFile, session.rangeStart, session.rangeEnd),
    testMode: normalizeTestMode(session.testMode),
    modeLabel: getTestModeLabel(session.testMode),
    cheatLog: session.cheatLog || [],
    completionType,
    stopReason,
    stopLabel,
    answers: completedAnswerIndexes.map(index => {
      const question = tests[index];
      const answerState = session.answers[index] || {};
      const selectedIndex = Number.isInteger(answerState.selected) ? answerState.selected : null;
      const correctIndex = question.answer;
      const timeout = !!answerState.timeout;
      return {
        questionIndex: index + 1,
        sourceQuestionNumber: Number.isInteger(question.sourceQuestionNumber) ? question.sourceQuestionNumber : null,
        question: question.question,
        selectedIndex,
        selectedText: selectedIndex !== null ? question.options[selectedIndex] : null,
        correctIndex,
        correctText: question.options[correctIndex],
        isCorrect: !timeout && selectedIndex === correctIndex,
        timeout,
        options: [...question.options]
      };
    })
  };
}

function persistSessionResult(options = {}) {
  if (!session || session.saved) return null;

  stopSessionActivityHeartbeat();
  updateSessionLastActivityTimestamp(options?.finishedAt || Date.now());

  const entry = normalizeHistoryEntryRecord(buildHistoryEntryFromSession(options));
  if (!entry) {
    session.saved = true;
    session.finished = true;
    clearActiveSessionSnapshot();
    return null;
  }

  const history = getHistory();
  history.push(entry);
  saveHistory(history);
  upsertStatsSummaryEntry(entry);
  enrichHistoryEntryWithRetentionData(entry);
  queueTelegramResultsReport(entry);

  if (options?.tryBeacon) {
    trySendTelegramResultsReportViaBeacon(entry);
  }

  if (!options?.skipImmediateFlush) {
    tryFlushTelegramResultsQueue();
    scheduleTelegramResultsQueueFlush([350, 1400, 4500, 10000]);
  } else {
    scheduleTelegramResultsQueueFlush([1200, 5000]);
  }

  session.saved = true;
  session.finished = true;
  session.id = entry.id;
  session.completionType = entry.completionType;
  session.stopReason = entry.stopReason;
  clearActiveSessionSnapshot();

  return entry;
}

function persistFinishedSession() {
  return persistSessionResult();
}

function persistInterruptedSession(reason = 'tab_closed') {
  return persistSessionResult({
    completionType: 'tab_closed',
    stopReason: reason,
    stopLabel: 'Вкладка / WebApp закрыт',
    tryBeacon: true,
    skipImmediateFlush: true
  });
}


function attachSuspiciousActivityTracking() {
  if (!isTestPage) return;

  const preserveSessionSnapshot = () => {
    if (!session || session.review || session.finished || session.saved) return;
    const closedAt = Date.now();
    syncSessionRuntimeState(closedAt);
    updateSessionLastActivityTimestamp(closedAt);
    saveActiveSessionSnapshot(true);
  };

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      logCheatEvent('visibility_hidden', 'Скрытие вкладки / переход в другое приложение');
      preserveSessionSnapshot();
    }
  });

  window.addEventListener('blur', () => {
    logCheatEvent('window_blur', 'Потеря фокуса окна');
    preserveSessionSnapshot();
  });

  window.addEventListener('pagehide', preserveSessionSnapshot);
  window.addEventListener('beforeunload', preserveSessionSnapshot);
}

// ==========================================
// ИНИЦИАЛИЗАЦИЯ
// ==========================================
initAgreementUi();
initIdentityUi();
initStudyUi({ withButton: false });
initHistoryUi({ withButton: false });
initStatsUi({ withButton: false });
initNewsUi({ withButton: false });
initAchievementsUi({ withButton: false });
initFavoritesUi({ withButton: !isTestPage });

if (!isTestPage) {
  ensurePremiumIncognitoToggle();
  initAppMenuUi();
}

if (!isTestPage && app) {
  renderMenu();
}

initTelegramResultsDelivery();
renderUserNameBadge();
if (!isTestPage) {
  launchEntryIntroSplash(3000);
} else {
  void bootstrapApplicationState();
}

// ==========================================
// ЛОГИКА ДЛЯ МЕНЮ (INDEX.HTML)
// ==========================================
function initializeQuestionRangeMenuInputs() {
  const startInput = document.getElementById('question-range-start');
  const endInput = document.getElementById('question-range-end');
  if (!startInput || !endInput) return;

  startInput.value = '';
  endInput.value = '';

  try {
    localStorage.removeItem(QUESTION_RANGE_START_KEY);
    localStorage.removeItem(QUESTION_RANGE_END_KEY);
  } catch (_) {}
}

function clearQuestionRangeSelection() {
  try {
    localStorage.removeItem(QUESTION_RANGE_START_KEY);
    localStorage.removeItem(QUESTION_RANGE_END_KEY);
  } catch (_) {}
  sessionStorage.removeItem(QUESTION_RANGE_START_SESSION_KEY);
  sessionStorage.removeItem(QUESTION_RANGE_END_SESSION_KEY);
}

function getAiOptionsNoteHtml() {
  return CURRENT_QUIZ_SECTION === 'micro'
    ? ''
    : '<div class="ai-options-note">Варианты ответов сгенерированы с помощью ChatGPT</div>';
}

function renderMenu() {
  evaluateAndPersistAchievements(CURRENT_QUIZ_SECTION);
  const aiOptionsNoteHtml = getAiOptionsNoteHtml();

  if (CURRENT_SECTION_CONFIG.supportsTesting === false) {
    app.innerHTML = `
${aiOptionsNoteHtml}
<div class="retention-strip main-retention-strip">${buildMenuRetentionStripHtml()}</div>
<div class="card">
    <div class="author">Created by Sayfiddinov</div>
    <h2>Добро пожаловать</h2>
    <p><b>${escapeHtml(CURRENT_SECTION_CONFIG.label)}</b></p>
    <div class="history-empty" style="margin-top:14px; text-align:left;">
      <b>${escapeHtml(CURRENT_SECTION_CONFIG.placeholderTitle || 'Раздел готовится')}</b><br><br>
      ${escapeHtml(CURRENT_SECTION_CONFIG.placeholderText || 'Этот раздел будет добавлен позже.')}
    </div>
</div>`;
    renderUserNameBadge();
    renderFloatingFavoritesButton();
    return;
  }

  app.innerHTML = `
${aiOptionsNoteHtml}
<div class="card">
    <div class="author">Created by Sayfiddinov</div>
    <h2>Добро пожаловать</h2>
    <p><b>${escapeHtml(CURRENT_SECTION_CONFIG.label)}</b></p>
    <div class="retention-strip main-retention-strip">${buildMenuRetentionStripHtml()}</div>

    <div class="mode-switch" id="test-mode-switch">
        <button type="button" class="mode-switch-btn active" data-mode="regular"><span class="mode-switch-label">Обычный</span><span class="mode-lock" data-mode-lock aria-hidden="true"></span></button>
        <button type="button" class="mode-switch-btn" data-mode="speed" data-premium-mode="1"><span class="mode-switch-label">На скорость</span><span class="mode-lock" data-mode-lock aria-hidden="true">🔒</span></button>
        <button type="button" class="mode-switch-btn" data-mode="untimed" data-premium-mode="1"><span class="mode-switch-label">Без времени</span><span class="mode-lock" data-mode-lock aria-hidden="true">🔒</span></button>
    </div>

    <label>📚 Выберите тему</label>
    <div class="row">
        <select id="theme-select">
            ${buildThemeSelectOptionsHtml()}
            <option value="${FAVORITES_THEME_FILE}">Решить избранные вопросы</option>
            <option value="${MISTAKES_THEME_FILE}">Режим: только ошибки</option>
        </select>
    </div>
    <div id="theme-helper-note" class="theme-helper-note hidden"></div>
    <div id="timer-settings-block">
        <label>⏱ Время на вопрос (сек)</label>
        <div class="row">
            <select id="preset-timer">
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="30" selected>30</option>
                <option value="60">60</option>
            </select>
            <input id="custom-timer" type="number" min="5" placeholder="своё">
        </div>
    </div>

    <label>📝 Количество вопросов</label>
    <div class="row">
        <select id="preset-count">
            <option value="1000000000" selected>Все вопросы</option>
            <option value="15">15</option>
            <option value="25">25</option>
            <option value="30">30</option>
            <option value="35">35</option>
            <option value="50">50</option>
        </select>
        <input id="custom-count" type="number" min="1" placeholder="своё">
    </div>

    <label>🔢 Диапазон вопросов</label>
    <div class="row range-row">
        <input id="question-range-start" type="number" inputmode="numeric" placeholder="от">
        <input id="question-range-end" type="number" inputmode="numeric" placeholder="до">
    </div>

    <button class="main" id="startBtn">Начать тест</button>
</div>`;

  renderUserNameBadge();
  renderFloatingFavoritesButton();
  initializeQuestionRangeMenuInputs();
  initializeTestModeMenuControls();
  updateThemeHelperNote();
  document.getElementById('theme-select')?.addEventListener('change', updateThemeHelperNote);

  document.getElementById('startBtn').onclick = async () => {
    const ready = await bootstrapApplicationState();
    if (!ready) return;

    const selectedTheme = getSelectedTheme();
    const selectedQuestionRange = (selectedTheme === FAVORITES_THEME_FILE || selectedTheme === MISTAKES_THEME_FILE)
      ? { hasRange: false, start: null, end: null, error: '' }
      : getSelectedQuestionRange();

    if (selectedQuestionRange.error) {
      alert(selectedQuestionRange.error);
      return;
    }

    if (selectedTheme === FAVORITES_THEME_FILE && getFavoriteQuestionsForTesting().length === 0) {
      alert('В избранных у вас ничего нет.');
      return;
    }

    if (selectedTheme === MISTAKES_THEME_FILE && getMistakeQuestionsForTesting().length === 0) {
      alert('В режиме ошибок пока ничего нет. Сначала решите тесты и допустите хотя бы одну ошибку.');
      return;
    }

    // Берём значения напрямую, без урезания лимитами
    const normalizedTimerValue = getTimerValue();
    const normalizedQuestionCount = { count: getQuestionsCount(), sourceCap: false };

    if (!isPremiumModeAvailableForCurrentSection()) {
      alert(getPremiumModeDeniedMessage());
      return;
    }

    persistQuestionRangeSelection(selectedQuestionRange);
    localStorage.setItem(TEST_MODE_KEY, getSelectedTestMode());
    localStorage.setItem(TIMER_KEY, normalizedTimerValue);
    localStorage.setItem(QUESTION_COUNT_KEY, normalizedQuestionCount.count);
    localStorage.setItem(TEMPORARY_QUESTION_SOURCE_CAP_KEY, normalizedQuestionCount.sourceCap ? '1' : '0');
    localStorage.setItem(THEME_FILE_KEY, selectedTheme);
    navigateWithLoader(getQuizTestPagePath(), { label: 'Подготавливаем тест' });
  };
}

// ==========================================
// ЛОГИКА ДЛЯ ТЕСТА (TEST.HTML)
// ==========================================

function startTest(options = {}) {
  const restoreSnapshot = options?.restoreSnapshot || null;
  timeLimit = parseInt(localStorage.getItem(TIMER_KEY), 10) || 30;
  if (shouldApplyTemporaryUserTestCaps() && timeLimit > TEMPORARY_MAX_SECONDS_PER_QUESTION) {
    timeLimit = TEMPORARY_MAX_SECONDS_PER_QUESTION;
    try { localStorage.setItem(TIMER_KEY, String(TEMPORARY_MAX_SECONDS_PER_QUESTION)); } catch (_) {}
  }

  if (restoreSnapshot) {
    restoreSessionFromSnapshot(restoreSnapshot);
    return;
  }

  let selectedTestMode = getStoredTestMode();
  if (isPremiumOnlyTestMode(selectedTestMode) && !isPremiumModeAvailableForCurrentSection()) {
    selectedTestMode = TEST_MODE_REGULAR;
    try { localStorage.setItem(TEST_MODE_KEY, TEST_MODE_REGULAR); } catch (_) {}
  }
  const rawCountLimit = parseInt(localStorage.getItem(QUESTION_COUNT_KEY), 10) || 15;
  const countWasAboveTemporaryCap = shouldApplyTemporaryUserTestCaps() && rawCountLimit > TEMPORARY_MAX_QUESTIONS_PER_TEST;
  const countLimit = countWasAboveTemporaryCap ? TEMPORARY_MAX_QUESTIONS_PER_TEST : rawCountLimit;
  if (countWasAboveTemporaryCap) {
    try { localStorage.setItem(QUESTION_COUNT_KEY, String(TEMPORARY_MAX_QUESTIONS_PER_TEST)); } catch (_) {}
  }
  const temporarySourceCapEnabled = shouldApplyTemporaryUserTestCaps() && (localStorage.getItem(TEMPORARY_QUESTION_SOURCE_CAP_KEY) === '1' || countWasAboveTemporaryCap);
  try { localStorage.removeItem(TEMPORARY_QUESTION_SOURCE_CAP_KEY); } catch (_) {}
  const selectedThemeFile = localStorage.getItem(THEME_FILE_KEY) || getDefaultQuizThemeFile();
  const storedQuestionRange = getStoredQuestionRange();
  clearQuestionRangeSelection();
  const questionRange = (selectedThemeFile === FAVORITES_THEME_FILE || selectedThemeFile === MISTAKES_THEME_FILE)
    ? { hasRange: false, start: null, end: null, error: '' }
    : storedQuestionRange;
  if (questionRange.error) {
    persistQuestionRangeSelection({ hasRange: false });
    alert(questionRange.error);
    navigateWithLoader(getQuizHomePagePath(), { label: 'Возвращаемся в меню' });
    return;
  }
  const themeFile = selectedThemeFile === FAVORITES_THEME_FILE
    ? FAVORITES_THEME_FILE
    : (selectedThemeFile === MISTAKES_THEME_FILE ? MISTAKES_THEME_FILE : (questionRange.hasRange ? getMainQuestionBankFile() : selectedThemeFile));
  const sessionStartedAt = Date.now();

  session = {
    id: generateHistoryId(sessionStartedAt),
    start: sessionStartedAt,
    lastActivityAt: sessionStartedAt,
    elapsedMs: 0,
    resumeStartedAt: sessionStartedAt,
    currentQuestionRemainingMs: null,
    currentTimerQuestionIndex: null,
    index: 0,
    score: 0,
    review: false,
    finished: false,
    saved: false,
    themeFile,
    selectedThemeFile,
    rangeStart: questionRange.hasRange ? questionRange.start : null,
    rangeEnd: questionRange.hasRange ? questionRange.end : null,
    plannedTotal: null,
    testMode: selectedTestMode,
    answers: [],
    cheatLog: [],
    frontendMeta: getBestAvailableFrontEndMeta(null, { collectLive: true }),
    dailyLimitSnapshot: getTemporaryDailyLimitSnapshot({ persist: true })
  };

  clearDismissedResumeSession();
  saveActiveSessionSnapshot(true);
  startSessionActivityHeartbeat();

  if (selectedThemeFile === FAVORITES_THEME_FILE) {
    try {
      const favoriteQuestions = getFavoriteQuestionsForTesting();
      if (!favoriteQuestions.length) {
        throw new Error('В избранных у вас ничего нет.');
      }

      tests = buildTestsFromSourcePool(applyTemporaryQuestionSourceCap(favoriteQuestions, temporarySourceCapEnabled), countLimit, FAVORITES_THEME_FILE, FAVORITES_THEME_FILE);
      session.rangeStart = null;
      session.rangeEnd = null;
      session.plannedTotal = tests.length;
      saveActiveSessionSnapshot(true);
      showQuestion();
    } catch (err) {
      clearActiveSessionSnapshot();
      alert('Ошибка загрузки теста: ' + err.message);
      navigateWithLoader(getQuizHomePagePath(), { label: 'Возвращаемся в меню' });
    }
    return;
  }

  if (selectedThemeFile === MISTAKES_THEME_FILE) {
    try {
      const mistakeQuestions = getMistakeQuestionsForTesting();
      if (!mistakeQuestions.length) {
        throw new Error('В режиме ошибок пока ничего нет.');
      }

      tests = buildTestsFromSourcePool(applyTemporaryQuestionSourceCap(mistakeQuestions, temporarySourceCapEnabled), countLimit, MISTAKES_THEME_FILE, MISTAKES_THEME_FILE);
      session.rangeStart = null;
      session.rangeEnd = null;
      session.plannedTotal = tests.length;
      saveActiveSessionSnapshot(true);
      showQuestion();
    } catch (err) {
      clearActiveSessionSnapshot();
      alert('Ошибка загрузки теста: ' + err.message);
      navigateWithLoader(getQuizHomePagePath(), { label: 'Возвращаемся в меню' });
    }
    return;
  }

  fetch(themeFile)
    .then(r => {
      if (!r.ok) throw new Error('Файл темы не найден');
      return r.json();
    })
    .then(data => {
      const sourcePool = applyTemporaryQuestionSourceCap(applyQuestionRange(data, questionRange), temporarySourceCapEnabled);
      if (!sourcePool.length) {
        throw new Error('По выбранному диапазону вопросы не найдены');
      }

      if (questionRange.hasRange) {
        session.rangeStart = Math.min(Math.max(1, questionRange.start), data.length || 1);
        session.rangeEnd = Math.min(Math.max(session.rangeStart, questionRange.end), data.length || session.rangeStart);
      }

      const randomPoolKey = questionRange.hasRange
        ? `${themeFile}::range:${session.rangeStart}-${session.rangeEnd}`
        : themeFile;

      tests = buildTestsFromSourcePool(sourcePool, countLimit, randomPoolKey, themeFile);

      session.plannedTotal = tests.length;
      saveActiveSessionSnapshot(true);
      showQuestion();
    })
    .catch(err => {
      clearActiveSessionSnapshot();
      alert('Ошибка загрузки теста: ' + err.message);
      navigateWithLoader(getQuizHomePagePath(), { label: 'Возвращаемся в меню' });
    });
}

function showQuestion() {
  clearInterval(timer);
  selected = null;

  const q = tests[session.index];
  if (!q) return finish();

  const state = session.answers[session.index] || { selected: null, answered: false, timeout: false };
  selected = state.selected;
  pulseSessionActivity(true);
  syncTimerVisibility(session?.testMode, { resetText: true });

  if (isRegularTestMode(session?.testMode) && !state.answered && !state.timeout && !session.review) {
    const maxQuestionMs = Math.max(1000, timeLimit * 1000);
    if (session.currentTimerQuestionIndex !== session.index || !Number.isFinite(Number(session.currentQuestionRemainingMs))) {
      session.currentQuestionRemainingMs = maxQuestionMs;
    } else {
      session.currentQuestionRemainingMs = Math.min(maxQuestionMs, Math.max(0, Number(session.currentQuestionRemainingMs)));
    }
    session.currentTimerQuestionIndex = session.index;
  } else {
    session.currentQuestionRemainingMs = null;
    session.currentTimerQuestionIndex = null;
  }

  const qContainer = document.getElementById('question');
  const optionsEl = document.getElementById('options');

  if (!qContainer || !optionsEl) return;

  qContainer.innerHTML = `
    <div class="progress">
      ${session.review ? `Просмотр ${session.index + 1} / ${tests.length}` : `Вопрос ${session.index + 1} из ${tests.length}`}
    </div>
    <div>${escapeHtml(q.question)}</div>
  `;

  const aiExplain = document.createElement('button');
  aiExplain.type = 'button'; aiExplain.className = 'ai-explain-button';
  aiExplain.textContent = '✦ Объяснить с ИИ';
  aiExplain.onclick = () => window.QuizoraAI?.explain({question:q.question,options:q.options,answer:q.answer,section:CURRENT_QUIZ_SECTION});
  qContainer.appendChild(aiExplain);

  optionsEl.innerHTML = '';
  let confirmBtn = null;

  q.options.forEach((text, i) => {
    const btn = document.createElement('button');
    btn.className = 'option';
    btn.textContent = text;

    if (state.answered || state.timeout || session.review) {
      btn.disabled = true;
      if (i === q.answer) btn.classList.add('correct');
      if (state.selected !== null && i === state.selected && i !== q.answer) btn.classList.add('wrong');
    } else {
      btn.onclick = () => {
        selected = i;
        optionsEl.querySelectorAll('.option').forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
        if (confirmBtn) confirmBtn.disabled = false;
      };
      if (i === selected) btn.classList.add('selected');
    }

    optionsEl.appendChild(btn);
  });

  if (!state.answered && !state.timeout && !session.review) {
    confirmBtn = document.createElement('button');
    confirmBtn.className = 'main';
    confirmBtn.textContent = 'Ответить';
    confirmBtn.disabled = selected === null;
    confirmBtn.onclick = () => confirmAnswer(false);
    optionsEl.appendChild(confirmBtn);

    if (isRegularTestMode(session?.testMode)) {
      startTimer();
    }
  } else {
    const t = document.getElementById('timer');
    if (isRegularTestMode(session?.testMode) && t) {
      t.textContent = session.review ? '📋 Режим просмотра' : '⏱ Ответ зафиксирован';
    }
  }

  if (isSpeedTestMode(session?.testMode) && !session.review && !session.finished) {
    startTimer();
  }

  renderUserNameBadge();
  renderTopFinishButton();
  renderNavButtons();
}


function startTimer() {
  const t = document.getElementById('timer');
  if (!t) return;

  syncTimerVisibility(session?.testMode);
  if (isUntimedTestMode(session?.testMode)) return;

  t.className = 'timer';
  t.classList.remove('warning');

  if (isSpeedTestMode(session?.testMode)) {
    t.classList.add('speed-mode');
    const renderElapsed = () => {
      const elapsedSeconds = Math.max(0, Math.floor(getSessionElapsedMilliseconds(session, Date.now()) / 1000));
      t.innerHTML = `<span class="timer-speed-value">${formatDuration(elapsedSeconds)}</span>`;
    };

    renderElapsed();
    timer = setInterval(() => {
      pulseSessionActivity(true);
      renderElapsed();
    }, 1000);
    return;
  }

  t.classList.remove('speed-mode');
  const renderRemaining = () => {
    const remainingMs = Math.max(0, Number(session?.currentQuestionRemainingMs) || 0);
    timeLeft = Math.max(0, Math.ceil(remainingMs / 1000));
    t.textContent = `⏱ ${timeLeft}`;
    t.classList.toggle('warning', timeLeft <= 5 && timeLeft > 0);
  };

  renderRemaining();
  timer = setInterval(() => {
    pulseSessionActivity(true);
    renderRemaining();
    if ((Number(session?.currentQuestionRemainingMs) || 0) <= 0) {
      clearInterval(timer);
      confirmAnswer(true);
    }
  }, 1000);
}

function confirmAnswer(fromTimer) {
  clearInterval(timer);
  pulseSessionActivity(false);
  const q = tests[session.index];

  session.currentQuestionRemainingMs = null;
  session.currentTimerQuestionIndex = null;

  session.answers[session.index] = {
    selected: fromTimer ? null : selected,
    answered: !fromTimer,
    timeout: fromTimer
  };

  if (!fromTimer && selected === q.answer) session.score++;
  pulseSessionActivity(true);
  showQuestion();
}


function getTelegramWebAppSafe() {
  try {
    return window.Telegram && window.Telegram.WebApp ? window.Telegram.WebApp : null;
  } catch (_) {
    return null;
  }
}

function ensureQuizConfirmStyle() {
  if (document.getElementById('quiz-confirm-style')) return;
  const style = document.createElement('style');
  style.id = 'quiz-confirm-style';
  style.textContent = `
    .quiz-confirm-overlay {
      position: fixed;
      inset: 0;
      z-index: 30000;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 18px;
      background: rgba(15, 23, 42, 0.46);
      backdrop-filter: blur(6px);
      box-sizing: border-box;
    }
    .quiz-confirm-panel {
      width: min(92vw, 430px);
      border-radius: 24px;
      background: #ffffff;
      color: #111827;
      padding: 22px 20px 18px;
      box-shadow: 0 28px 80px rgba(15, 23, 42, 0.30);
      text-align: left;
    }
    .quiz-confirm-title {
      margin: 0 0 8px;
      font-size: 22px;
      font-weight: 900;
      letter-spacing: -0.03em;
    }
    .quiz-confirm-text {
      margin: 0 0 18px;
      color: #4b5563;
      font-size: 15px;
      line-height: 1.45;
      white-space: pre-line;
    }
    .quiz-confirm-actions {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 10px;
    }
    .quiz-confirm-actions button {
      min-height: 46px;
      border: 0;
      border-radius: 16px;
      font-size: 15px;
      font-weight: 800;
      cursor: pointer;
    }
    .quiz-confirm-cancel {
      background: rgba(99, 102, 241, 0.10);
      color: #4338ca;
    }
    .quiz-confirm-ok {
      background: linear-gradient(135deg, #4338ca 0%, #7c3aed 100%);
      color: #ffffff;
      box-shadow: 0 12px 28px rgba(79, 70, 229, 0.24);
    }
    body.dark-theme .quiz-confirm-panel {
      background: #111827;
      color: #f8fafc;
    }
    body.dark-theme .quiz-confirm-text {
      color: #cbd5e1;
    }
    body.dark-theme .quiz-confirm-cancel {
      background: rgba(129, 140, 248, 0.16);
      color: #c7d2fe;
    }
  `;
  document.head.appendChild(style);
}

function showQuizConfirmDialog(message, title = 'Завершить тест?') {
  return new Promise((resolve) => {
    try { document.getElementById('quiz-confirm-overlay')?.remove(); } catch (_) {}
    ensureQuizConfirmStyle();
    const overlay = document.createElement('div');
    overlay.id = 'quiz-confirm-overlay';
    overlay.className = 'quiz-confirm-overlay';
    overlay.innerHTML = `
      <div class="quiz-confirm-panel" role="dialog" aria-modal="true">
        <h3 class="quiz-confirm-title">${escapeHtml(title)}</h3>
        <p class="quiz-confirm-text">${escapeHtml(message)}</p>
        <div class="quiz-confirm-actions">
          <button class="quiz-confirm-cancel" type="button" data-confirm-action="cancel">Продолжить</button>
          <button class="quiz-confirm-ok" type="button" data-confirm-action="ok">Завершить</button>
        </div>
      </div>
    `;

    const cleanup = (confirmed) => {
      overlay.remove();
      if (!hasBlockingSurfaceOpen()) {
        document.body.classList.remove('app-surface-open');
      }
      resolve(!!confirmed);
    };

    overlay.addEventListener('click', (event) => {
      if (event.target === overlay) cleanup(false);
    });
    overlay.querySelector('[data-confirm-action="cancel"]')?.addEventListener('click', () => cleanup(false));
    overlay.querySelector('[data-confirm-action="ok"]')?.addEventListener('click', () => cleanup(true));
    document.body.classList.add('app-surface-open');
    document.body.appendChild(overlay);
  });
}

function renderTopFinishButton() {
  const card = document.querySelector('.card');
  if (!card) return;

  let topActions = card.querySelector('.test-top-actions');
  if (!topActions) {
    topActions = document.createElement('div');
    topActions.className = 'test-top-actions';

    const timerEl = document.getElementById('timer');
    if (timerEl) {
      card.insertBefore(topActions, timerEl);
    } else {
      card.prepend(topActions);
    }
  }

  topActions.innerHTML = '';

  const currentQuestion = Array.isArray(tests) ? tests[session?.index] : null;
  if (session.review || session.finished || !currentQuestion) {
    return;
  }

  const favoriteBtn = document.createElement('button');
  favoriteBtn.type = 'button';
  favoriteBtn.className = 'favorite-question-btn question-favorite-btn';
  applyFavoriteButtonState(favoriteBtn, isQuestionFavorite(currentQuestion, {
    sourceQuestionNumber: currentQuestion?.sourceQuestionNumber,
    sourceFile: session?.themeFile || getMainQuestionBankFile()
  }));
  favoriteBtn.addEventListener('click', () => {
    const isActive = toggleFavoriteQuestion(currentQuestion, {
      sourceQuestionNumber: currentQuestion?.sourceQuestionNumber,
      sourceFile: session?.themeFile || getMainQuestionBankFile()
    });
    applyFavoriteButtonState(favoriteBtn, isActive);
  });

  const finishBtn = document.createElement('button');
  finishBtn.type = 'button';
  finishBtn.className = 'top-finish-btn';
  finishBtn.textContent = 'Завершить тест';
  finishBtn.addEventListener('click', requestFinishConfirmation, { passive: false });

  topActions.appendChild(favoriteBtn);
  topActions.appendChild(finishBtn);
}

function renderNavButtons() {
  const optionsEl = document.getElementById('options');
  let nav = document.querySelector('.nav-buttons');

  if (!nav) {
    nav = document.createElement('div');
    nav.className = 'nav-buttons';
    optionsEl.appendChild(nav);
  }

  nav.innerHTML = '';
  const state = session.answers[session.index];
  const arrowsRow = document.createElement('div');
  arrowsRow.className = 'nav-arrows';

  if (session.index > 0 && (state?.answered || state?.timeout || session.review)) {
    const prev = document.createElement('button');
    prev.textContent = '←';
    prev.onclick = () => {
      session.index--;
      showQuestion();
    };
    arrowsRow.appendChild(prev);
  }

  if ((state || session.review) && session.index < tests.length - 1) {
    const next = document.createElement('button');
    next.textContent = '→';
    next.onclick = () => {
      session.index++;
      showQuestion();
    };
    arrowsRow.appendChild(next);
  }

  if (arrowsRow.children.length) {
    nav.appendChild(arrowsRow);
  }
}

async function requestFinishConfirmation(event) {
  try {
    event?.preventDefault?.();
    event?.stopPropagation?.();
    event?.stopImmediatePropagation?.();
  } catch (_) {}

  if (!session || session.review) return;

  const confirmed = await showQuizConfirmDialog(
    'Вы действительно хотите остановить тест?\n\nНажмите «Завершить», чтобы сохранить текущий результат, или «Продолжить», чтобы вернуться к тесту.',
    'Завершить тест?'
  );

  if (confirmed) {
    await finish({ manual: true });
  }
}

async function finish(options = {}) {
  if (!session) return;
  clearInterval(timer);
  stopSessionActivityHeartbeat();

  const finishedAt = normalizePositiveTimestamp(options?.finishedAt, Date.now());
  const answeredCount = getCompletedAnswerIndexes().length;
  const plannedQuestions = Number.isInteger(session.plannedTotal) ? session.plannedTotal : (Array.isArray(tests) ? tests.length : answeredCount);
  const isManualEarlyFinish = !!options?.manual && answeredCount < plannedQuestions;
  const finishOptions = {
    finishedAt,
    completionType: isManualEarlyFinish ? 'stopped_early' : 'finished',
    stopReason: isManualEarlyFinish ? 'manual_finish' : null,
    stopLabel: isManualEarlyFinish ? 'Досрочно завершён пользователем' : null
  };

  let entry = null;
  if (!session.saved) {
    try {
      entry = persistSessionResult(finishOptions);
    } catch (error) {
      console.warn('Не удалось штатно сохранить результат теста:', error);
      try {
        entry = normalizeHistoryEntryRecord(buildHistoryEntryFromSession(finishOptions));
        if (entry) {
          const history = getHistory();
          history.push(entry);
          saveHistory(history);
          try { upsertStatsSummaryEntry(entry); } catch (_) {}
          try { enrichHistoryEntryWithRetentionData(entry); } catch (_) {}
          try { queueTelegramResultsReport(entry); } catch (_) {}
        }
      } catch (_) {
        entry = null;
      } finally {
        session.saved = true;
        session.finished = true;
        clearActiveSessionSnapshot();
      }
    }
  }

  if (!entry) {
    try {
      entry = normalizeHistoryEntryRecord(buildHistoryEntryFromSession(finishOptions)) || buildHistoryEntryFromSession(finishOptions);
    } catch (_) {
      entry = null;
    }
  }

  session.finished = true;
  session.saved = true;
  clearActiveSessionSnapshot();

  if (entry?.id) {
    scheduleTelegramResultsQueueFlush([0, 500, 1500, 3500, 8000, 15000]);
    try {
      await Promise.race([
        tryFlushTelegramResultsQueue(),
        new Promise((resolve) => window.setTimeout(resolve, 1200))
      ]);
    } catch (error) {
      console.warn('Не удалось сразу отправить отчёт после завершения теста, он останется в очереди:', error);
    }
  }

  await new Promise((resolve) => window.setTimeout(resolve, 80));

  const card = document.querySelector('.card');
  if (!card) return;

  const fallbackEntry = entry || {
    id: session?.id || generateHistoryId(finishedAt),
    totalQuestions: answeredCount,
    plannedQuestions: plannedQuestions || answeredCount || 1,
    score: Math.max(0, Number(session?.score) || 0),
    finishedAt,
    finishedAtLabel: formatDateTimeToMinute(finishedAt),
    durationSeconds: getDurationSecondsFromElapsedMilliseconds(getSessionElapsedMilliseconds(session, finishedAt)),
    durationLabel: formatDuration(getDurationSecondsFromElapsedMilliseconds(getSessionElapsedMilliseconds(session, finishedAt))),
    answers: []
  };

  card.innerHTML = buildTestResultMarkup(fallbackEntry);
}

function startReview() {
  stopSessionActivityHeartbeat();
  session.review = true;
  session.index = 0;

  const answeredCount = getCompletedAnswerIndexes().length;
  if (answeredCount > 0 && answeredCount < tests.length) {
    tests = tests.slice(0, answeredCount);
    session.answers = session.answers.slice(0, answeredCount);
  }

  const card = document.querySelector('.card');
  if (!card) return;

  card.innerHTML = `<div id="timer"></div><div id="question"></div><div id="options"></div>`;
  showQuestion();
}




/* ===== HARD REBUILD: ACHIEVEMENTS MODAL ===== */
(function() {
  function buildAchievementsDirectHtml(sectionKey = CURRENT_QUIZ_SECTION) {
    const snapshot = getAchievementSnapshotSafe(sectionKey);
    const unlockedIds = new Set((snapshot?.unlocked || []).map((item) => item.id));
    const total = ACHIEVEMENTS_CONFIG.length;
    const unlockedCount = unlockedIds.size;
    const percent = total ? Math.round((unlockedCount / total) * 100) : 0;
    const sectionLabel = escapeHtml(getSectionLabel(sectionKey) || CURRENT_SECTION_CONFIG?.label || 'Раздел');

    return `
      <div class="history-panel achievements-panel achievements-panel-direct">
        <div class="history-panel-header achievements-header-direct">
          <div>
            <div class="history-title">30 достижений</div>
            <div class="history-subtitle">Сложные цели с живым прогрессом по текущему разделу</div>
          </div>
          <button id="achievements-direct-close" class="history-close" type="button" aria-label="Закрыть">×</button>
        </div>
        <div class="achievements-content">
          <div class="achievements-summary-card">
            <div class="achievements-summary-top">
              <div>
                <div class="achievements-summary-label">${sectionLabel}</div>
                <div class="achievements-summary-value">${unlockedCount} / ${total}</div>
              </div>
              <div class="achievements-summary-percent">${percent}%</div>
            </div>
            <div class="section-progress-track achievements-progress-track">
              <div class="section-progress-fill" style="width:${clamp(percent, 0, 100)}%"></div>
            </div>
            <div class="achievements-summary-note">Открытые достижения отмечаются автоматически. У каждого есть отдельный прогресс.</div>
          </div>
          <div class="achievements-grid">
            ${ACHIEVEMENTS_CONFIG.map((item) => {
              const rawProgress = buildAchievementProgressInfo(item, snapshot.context);
              const unlocked = unlockedIds.has(item.id) || rawProgress.unlocked;
              const progress = unlocked ? { ...rawProgress, percent: 100 } : rawProgress;
              return `
                <div class="achievement-card ${unlocked ? 'unlocked' : 'locked'}">
                  <div class="achievement-card-icon">${escapeHtml(item.icon || '🏅')}</div>
                  <div class="achievement-card-body">
                    <div class="achievement-card-title-row">
                      <div class="achievement-card-title">${escapeHtml(item.title || 'Достижение')}</div>
                      <span class="achievement-card-state">${unlocked ? 'Открыто' : 'В процессе'}</span>
                    </div>
                    <div class="achievement-card-desc">${escapeHtml(item.description || '')}</div>
                    <div class="achievement-card-progress-meta">${escapeHtml(progress.label || '')}</div>
                    <div class="section-progress-track achievement-inline-track">
                      <div class="section-progress-fill" style="width:${clamp(progress.percent, 0, 100)}%"></div>
                    </div>
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        </div>
      </div>
    `;
  }

  function closeAchievementsDirectModal() {
    document.body.classList.remove('achievements-modal-open');
    document.body.classList.remove('history-modal-open');
    document.body.classList.remove('app-surface-open');
    document.body.classList.remove('app-menu-open');
    const modal = document.getElementById('achievements-modal-direct');
    if (modal) modal.remove();
    document.getElementById('app-menu-overlay')?.classList.add('hidden');
  }

  function openAchievementsDirectModal(sectionKey = CURRENT_QUIZ_SECTION) {
    try { closeAppMenu(); } catch (_) {}
    closeAchievementsDirectModal();

    const modal = document.createElement('div');
    modal.id = 'achievements-modal-direct';
    modal.className = 'history-modal achievements-modal-direct-overlay';
    modal.style.zIndex = '25000';
    modal.innerHTML = buildAchievementsDirectHtml(sectionKey);

    modal.addEventListener('click', (event) => {
      if (event.target === modal) closeAchievementsDirectModal();
    });

    document.body.appendChild(modal);
    document.body.classList.add('achievements-modal-open');
    document.body.classList.add('app-surface-open');

    modal.querySelector('#achievements-direct-close')?.addEventListener('click', closeAchievementsDirectModal);
  }

  window.closeAchievementsDirectModal = closeAchievementsDirectModal;
  window.openAchievementsDirectModal = openAchievementsDirectModal;

  openAchievementsModalSafe = function(sectionKey = CURRENT_QUIZ_SECTION) {
    return openAchievementsModalReliable(sectionKey);
  };

  window.__forceOpenAchievements = function(eventOrSection) {
    try {
      if (eventOrSection && typeof eventOrSection.preventDefault === 'function') {
        eventOrSection.preventDefault();
        eventOrSection.stopPropagation?.();
        eventOrSection.stopImmediatePropagation?.();
      }
    } catch (_) {}
    const sectionKey = typeof eventOrSection === 'string' ? eventOrSection : CURRENT_QUIZ_SECTION;
    return openAchievementsModalReliable(sectionKey);
  };

  window.__openAchievementsFromInline = function(event) {
    return window.__forceOpenAchievements(event);
  };

  if (!window.__achievementsDirectGlobalBound) {
    window.__achievementsDirectGlobalBound = true;
    document.addEventListener('click', (event) => {
      const trigger = event.target.closest('[data-menu-action="achievements"], [data-action="achievements"], #achievements-toggle, [onclick*="__forceOpenAchievements"]');
      if (!trigger) return;
      event.preventDefault();
      event.stopPropagation();
      event.stopImmediatePropagation?.();
      openAchievementsModalReliable(CURRENT_QUIZ_SECTION);
    }, true);
  }
})();

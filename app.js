/* ============================================================
   ARDA YILDIZ — PORTFOLIO · app.js
   Vanilla JS only. No libraries.
   ============================================================ */

(function () {
  'use strict';

  /* ── 0a. Language (i18n) ─────────────────────────────────── */
  var LANG_KEY   = 'arda-lang';
  var langToggle = document.getElementById('lang-toggle');
  var langLabel  = document.getElementById('lang-label');
  var currentLang = localStorage.getItem(LANG_KEY) || 'en';

  function applyLang(lang) {
    currentLang = lang;
    document.documentElement.setAttribute('lang', lang === 'tr' ? 'tr' : 'en');
    localStorage.setItem(LANG_KEY, lang);

    var dict = window.TRANSLATIONS && window.TRANSLATIONS[lang];
    if (!dict) { return; }

    // Update all data-i18n elements
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) {
        el.textContent = dict[key];
      }
    });

    // Update lang button label (show the OTHER language as the switchable option)
    if (langLabel) {
      langLabel.textContent = lang === 'tr' ? 'EN' : 'TR';
    }

    // Re-trigger typewriter with correct language text
    restartTypewriter(lang);
  }

  function restartTypewriter(lang) {
    var typewriterEl = document.getElementById('hero-tagline');
    if (!typewriterEl) { return; }

    var textKey = lang === 'tr' ? 'data-typewriter-tr' : 'data-typewriter';
    var fullText   = typewriterEl.getAttribute(textKey) || typewriterEl.getAttribute('data-typewriter') || '';
    var textSpan   = typewriterEl.querySelector('.typewriter-text');
    var cursorSpan = typewriterEl.querySelector('.typewriter-cursor');
    if (!textSpan || !cursorSpan) { return; }

    // Clear current text and restart
    textSpan.textContent = '';
    cursorSpan.classList.remove('is-done');

    var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      textSpan.textContent = fullText;
      cursorSpan.classList.add('is-done');
      return;
    }

    var charIndex = 0;
    var speed     = 22;

    function typeNext() {
      if (charIndex < fullText.length) {
        textSpan.textContent += fullText.charAt(charIndex);
        charIndex++;
        setTimeout(typeNext, speed);
      } else {
        cursorSpan.classList.add('is-done');
      }
    }
    typeNext();
  }

  // Apply stored language on load (after DOM ready)
  applyLang(currentLang);

  if (langToggle) {
    langToggle.addEventListener('click', function () {
      applyLang(currentLang === 'tr' ? 'en' : 'tr');
    });
  }


  /* ── 0b. Theme toggle (dark / light) ────────────────────── */
  var themeToggle = document.getElementById('theme-toggle');
  var THEME_KEY = 'arda-theme';

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
  }

  var storedTheme = localStorage.getItem(THEME_KEY);
  if (storedTheme) {
    applyTheme(storedTheme);
  }

  if (themeToggle) {
    themeToggle.addEventListener('click', function () {
      var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      var current = document.documentElement.getAttribute('data-theme') || (prefersDark ? 'dark' : 'light');
      var next = current === 'dark' ? 'light' : 'dark';
      applyTheme(next);
      localStorage.setItem(THEME_KEY, next);
    });
  }


  /* ── Cached elements ────────────────────────────────────── */
  var nav       = document.getElementById('nav');
  var toggle    = document.getElementById('nav-toggle');
  var drawer    = document.getElementById('nav-drawer');
  var navLinks  = document.querySelectorAll('.nav__link, .drawer__link');
  var reveals   = document.querySelectorAll('.reveal');
  var revealGrp = document.querySelectorAll('.reveal-group');


  /* ── 1. Nav scroll state ────────────────────────────────── */
  function handleScroll() {
    if (window.scrollY > 24) {
      nav.classList.add('is-scrolled');
    } else {
      nav.classList.remove('is-scrolled');
    }
  }

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll(); // run once on load


  /* ── 2. Mobile menu ─────────────────────────────────────── */
  function openMenu() {
    drawer.classList.add('is-open');
    toggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    drawer.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  toggle.addEventListener('click', function () {
    var isOpen = drawer.classList.contains('is-open');
    if (isOpen) { closeMenu(); } else { openMenu(); }
  });

  // Close on any nav link click
  navLinks.forEach(function (link) {
    link.addEventListener('click', closeMenu);
  });

  // Close on Escape
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') { closeMenu(); }
  });


  /* ── 3. Smooth scroll ───────────────────────────────────── */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var targetId = this.getAttribute('href');
      if (targetId === '#') { return; }
      var target = document.querySelector(targetId);
      if (!target) { return; }

      e.preventDefault();
      var offset = nav.offsetHeight;
      var top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: top, behavior: 'smooth' });
    });
  });


  /* ── 4. Scroll reveal (IntersectionObserver) ────────────── */
  if ('IntersectionObserver' in window) {

    // Single elements
    var revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -48px 0px'
    });

    reveals.forEach(function (el) {
      revealObserver.observe(el);
    });

    // Stagger groups — observe parent, trigger children
    var groupObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll('.reveal').forEach(function (child) {
            child.classList.add('is-visible');
          });
          groupObserver.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.08,
      rootMargin: '0px 0px -32px 0px'
    });

    revealGrp.forEach(function (group) {
      groupObserver.observe(group);
    });

  } else {
    // Fallback: show everything immediately
    reveals.forEach(function (el) { el.classList.add('is-visible'); });
  }



  /* ── 5. Typewriter ───────────────────────────────────────── */
  /* Handled by restartTypewriter() called from applyLang() above */

})();

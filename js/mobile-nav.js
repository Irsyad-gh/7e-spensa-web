/* ============================================================
   mobile-nav.js — Hamburger Menu Toggle
   Tambahkan <script src="js/mobile-nav.js"></script>
   SETELAH <script src="js/script.js"></script> di semua halaman
   ============================================================ */

(function () {
  'use strict';

  function initMobileNav() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu   = document.querySelector('.nav-menu');

    if (!hamburger || !navMenu) return;

    // Toggle menu saat hamburger diklik
    hamburger.addEventListener('click', function (e) {
      e.stopPropagation();
      hamburger.classList.toggle('open');
      navMenu.classList.toggle('open');

      // Aksesibilitas
      const isOpen = navMenu.classList.contains('open');
      hamburger.setAttribute('aria-expanded', isOpen);
      hamburger.setAttribute('aria-label', isOpen ? 'Tutup menu' : 'Buka menu');
    });

    // Tutup menu saat link diklik (navigasi antar halaman)
    navMenu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        hamburger.classList.remove('open');
        navMenu.classList.remove('open');
      });
    });

    // Tutup menu saat klik di luar navbar
    document.addEventListener('click', function (e) {
      const navbar = document.querySelector('.navbar');
      if (navbar && !navbar.contains(e.target)) {
        hamburger.classList.remove('open');
        navMenu.classList.remove('open');
      }
    });

    // Tutup menu saat resize ke desktop
    window.addEventListener('resize', function () {
      if (window.innerWidth > 768) {
        hamburger.classList.remove('open');
        navMenu.classList.remove('open');
      }
    });
  }

  // Jalankan setelah DOM siap
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMobileNav);
  } else {
    initMobileNav();
  }
})();

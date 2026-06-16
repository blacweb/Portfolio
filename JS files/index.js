/* ═══════════════════════════════════════════════════════════
   CODIFY PORTFOLIO — index.js
   Features: Matrix rain | Navbar scroll | Hamburger menu |
             Smooth scroll | Scroll-reveal | Active nav link
═══════════════════════════════════════════════════════════ */

// ── Wait for DOM ──────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {

  /* ── 1. MATRIX RAIN CANVAS ─────────────────────────── */
  const canvas = document.getElementById('matrixCanvas');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    const CHAR_SIZE = 14;
    const CHARS = 'アイウエオカキクケコ0123456789ABCDEF</>{}[];()';
    let cols, drops;

    function resize() {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
      cols  = Math.floor(canvas.width / CHAR_SIZE);
      drops = Array.from({ length: cols }, () => Math.random() * -50);
    }

    function draw() {
      ctx.fillStyle = 'rgba(10,10,15,0.04)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = '#00ff41';
      ctx.font = `${CHAR_SIZE}px 'Fira Code', monospace`;

      for (let i = 0; i < cols; i++) {
        const char = CHARS[Math.floor(Math.random() * CHARS.length)];
        ctx.fillText(char, i * CHAR_SIZE, drops[i] * CHAR_SIZE);
        if (drops[i] * CHAR_SIZE > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    }

    resize();
    window.addEventListener('resize', resize);
    setInterval(draw, 55);
  }

  /* ── 2. NAVBAR SCROLL SHADOW ────────────────────────── */
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }, { passive: true });

  /* ── 3. HAMBURGER MENU ──────────────────────────────── */
  const hamburger   = document.getElementById('hamburger');
  const mobileMenu  = document.getElementById('mobileMenu');
  const mobileClose = document.getElementById('mobileClose');

  if (hamburger && mobileMenu && mobileClose) {
    hamburger.addEventListener('click', () => {
      mobileMenu.classList.add('open');
      document.body.style.overflow = 'hidden';
    });

    mobileClose.addEventListener('click', closeMenu);

    // Close on nav link click
    document.querySelectorAll('.mob-link').forEach(link => {
      link.addEventListener('click', closeMenu);
    });

    function closeMenu() {
      mobileMenu.classList.remove('open');
      document.body.style.overflow = '';
    }
  }

  /* ── 4. SMOOTH SCROLL for anchor links ─────────────── */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const offset = document.getElementById('navbar')?.offsetHeight || 72;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

  /* ── 5. SCROLL REVEAL ───────────────────────────────── */
  const revealEls = document.querySelectorAll('.reveal, .reveal-right');

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          // Keep observing for cards that might leave and re-enter (optional; remove if perf issue)
        }
      });
    },
    { threshold: 0.12 }
  );

  revealEls.forEach(el => observer.observe(el));

  /* ── 6. ACTIVE NAV LINK HIGHLIGHT ──────────────────── */
  const sections  = document.querySelectorAll('section[id], #hero');
  const navLinks  = document.querySelectorAll('.nav-link');
  const navHeight = navbar?.offsetHeight || 72;

  function updateActiveLink() {
    let current = '';
    sections.forEach(sec => {
      if (window.scrollY >= sec.offsetTop - navHeight - 60) {
        current = sec.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', updateActiveLink, { passive: true });
  updateActiveLink();

  /* ── 7. CARD STAGGER DELAYS (set dynamically) ───────── */
  const cards = document.querySelectorAll('.card');
  cards.forEach((card, i) => {
    card.style.transitionDelay = `${i * 0.08}s`;
    // Each card also needs reveal class for observer
    card.classList.add('reveal');
    observer.observe(card);
  });

});
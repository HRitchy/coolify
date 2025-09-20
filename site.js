(() => {
  const header = document.querySelector('.site-header');
  const navToggle = document.querySelector('[data-nav-toggle]');
  const navDrawer = document.querySelector('.nav-drawer');
  const navOverlay = document.querySelector('[data-nav-overlay]');
  const navLinks = document.querySelectorAll('.nav-drawer a, .main-nav a');

  const updateHeaderState = () => {
    if (!header) return;
    header.dataset.scrolled = window.scrollY > 16 ? 'true' : 'false';
  };

  updateHeaderState();
  window.addEventListener('scroll', updateHeaderState, { passive: true });

  const toggleNav = (shouldOpen) => {
    if (!navDrawer || !navOverlay || !navToggle) return;
    navDrawer.classList.toggle('is-open', shouldOpen);
    navOverlay.classList.toggle('is-active', shouldOpen);
    navOverlay.hidden = !shouldOpen;
    navToggle.classList.toggle('is-active', shouldOpen);
    navToggle.setAttribute('aria-expanded', shouldOpen ? 'true' : 'false');
    document.body.classList.toggle('nav-open', shouldOpen);
  };

  navToggle?.addEventListener('click', () => {
    const willOpen = !(navDrawer?.classList.contains('is-open'));
    toggleNav(willOpen);
  });

  navOverlay?.addEventListener('click', () => toggleNav(false));

  navLinks.forEach((link) => {
    link.addEventListener('click', () => toggleNav(false));
  });

  const yearElement = document.getElementById('annee');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
})();

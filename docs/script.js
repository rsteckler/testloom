// Mobile menu toggle
const sidebar = document.getElementById('sidebar');
const toggle  = document.getElementById('menu-toggle');

toggle.addEventListener('click', () => {
  sidebar.classList.toggle('open');
});

// Close sidebar when a link is clicked (mobile)
sidebar.addEventListener('click', (e) => {
  if (e.target.classList.contains('nav-link')) {
    sidebar.classList.remove('open');
  }
});

// Highlight active nav link on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

function setActiveLink() {
  const scrollY = window.scrollY + 100;

  let current = '';
  sections.forEach((section) => {
    if (section.offsetTop <= scrollY) {
      current = section.id;
    }
  });

  navLinks.forEach((link) => {
    link.classList.toggle('active', link.getAttribute('href') === '#' + current);
  });
}

window.addEventListener('scroll', setActiveLink, { passive: true });
setActiveLink();

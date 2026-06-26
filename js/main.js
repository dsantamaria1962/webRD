/* =========================================================
   RD GLOBAL TRADE — Droguería
   Script principal
   ========================================================= */

document.addEventListener('DOMContentLoaded', () => {

  /* === Navbar: cambia estilo al hacer scroll === */
  const navbar = document.getElementById('navbar');
  if (navbar) {
    const heroSection = document.querySelector('.hero');
    const getThreshold = () => heroSection ? heroSection.offsetHeight * 0.75 : window.innerHeight * 0.75;
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > getThreshold());
    });
  }

  /* === Menú móvil === */
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => navLinks.classList.toggle('open'));
    navLinks.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => navLinks.classList.remove('open'));
    });
  }

  /* === Animaciones al hacer scroll (reveal) === */
  const reveals = document.querySelectorAll('.reveal');
  if (reveals.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target); // optimización: deja de observar ya revelado
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
    reveals.forEach(el => observer.observe(el));
  }

  /* === Formulario de contacto === */
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Gracias por su mensaje. Nos pondremos en contacto pronto.');
      contactForm.reset();
    });
  }

});

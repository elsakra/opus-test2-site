import { animate, inView, scroll } from '@motionone/dom';

// Check for reduced motion preference
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!prefersReducedMotion) {
  // Animate hero elements on load
  document.addEventListener('DOMContentLoaded', () => {
    const heroElements = document.querySelectorAll('.hero-animate');
    heroElements.forEach((el, index) => {
      animate(
        el,
        { opacity: [0, 1], transform: ['translateY(20px)', 'translateY(0)'] },
        { duration: 0.6, delay: index * 0.1, easing: 'ease-out' }
      );
    });
  });

  // Animate sections on scroll
  const sections = document.querySelectorAll('.section-animate');
  sections.forEach((section) => {
    inView(section, () => {
      const elements = section.querySelectorAll('.fade-up');
      elements.forEach((el, index) => {
        animate(
          el,
          { opacity: [0, 1], transform: ['translateY(30px)', 'translateY(0)'] },
          { duration: 0.6, delay: index * 0.1, easing: 'ease-out' }
        );
      });
    });
  });

  // Navbar background on scroll
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    scroll(({ y }) => {
      if (y.progress > 0.05) {
        navbar.classList.add('bg-white/95', 'backdrop-blur-md', 'shadow-sm');
      } else {
        navbar.classList.remove('bg-white/95', 'backdrop-blur-md', 'shadow-sm');
      }
    });
  }

  // Parallax effect for background shapes
  const shapes = document.querySelectorAll('.parallax-shape');
  shapes.forEach((shape, index) => {
    scroll(animate(shape, { transform: ['translateY(0px)', 'translateY(-100px)'] }), {
      target: shape,
      offset: ['start end', 'end start']
    });
  });
}
import { useEffect } from 'react';

export function useScrollAnimation() {
  useEffect(() => {
    // Initialize reveal animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.reveal').forEach(item => {
      observer.observe(item);
    });

    // Initialize section fade-in animations
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          sectionObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    
    document.querySelectorAll('.section-fade-in').forEach(item => {
      sectionObserver.observe(item);
    });

    // Smooth parallax effect for elements with parallax class
    const parallaxElements = document.querySelectorAll('.parallax');
    
    const handleMouseMove = (e: MouseEvent) => {
      const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
      const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
      
      parallaxElements.forEach((card) => {
        if (card instanceof HTMLElement) {
          card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
        }
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      observer.disconnect();
      sectionObserver.disconnect();
    };
  }, []);
}
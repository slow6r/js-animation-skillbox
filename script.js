document.addEventListener('DOMContentLoaded', () => {
    gsap.from('.hero__title', { duration: 1.5, y: +50, opacity: 0, delay: 0.5, ease: 'power2.out' });
    gsap.from('.hero__descr', { duration: 1.5, y: 0, opacity: 0, delay: 1.5, ease: 'power2.out' });
    gsap.from('.hero__btn', { duration: 1, y: +50, opacity: 0, delay: 0.9, ease: 'power2.out' });
    gsap.from('.img1', { duration: 1.5, opacity: 0, delay: 1.1, ease: 'elastic.out(1, 0.3)', stagger: 0.3 });
    gsap.from('.img2', { duration: 1.5, opacity: 0, delay: 1.5, ease: 'elastic.out(1, 0.3)', stagger: 0.3 });
    gsap.from('.img3', { duration: 1.5, opacity: 0, delay: 1.9, ease: 'elastic.out(1, 0.3)', stagger: 0.3 });
});

document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger');
    const burgerLines = document.querySelectorAll('.burger__line');
    const crossLines = document.querySelectorAll('.cross__line');
    let isOpen = false;
  
    burger.addEventListener('click', () => {
      if (isOpen) {
        gsap.to(burgerLines, { opacity: 1, duration: 0.2 });
        gsap.to(crossLines, { display: 'none', duration: 0.2 });
      } else {
        gsap.to(burgerLines, { opacity: 0, duration: 0.2 });
        gsap.to(crossLines, { display: 'block', duration: 0.2 });
      }
      isOpen = !isOpen;
    });
  });
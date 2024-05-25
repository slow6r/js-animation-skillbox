document.addEventListener('DOMContentLoaded', () => {
    gsap.from('.hero__title', { duration: 1.5, y: +50, opacity: 0, delay: 0.5, ease: 'power2.out' });
    gsap.from('.hero__descr', { duration: 1.5, y: 0, opacity: 0, delay: 1.5, ease: 'power2.out' });
    gsap.from('.hero__btn', { duration: 1, y: +50, opacity: 0, delay: 0.9, ease: 'power2.out' });
    gsap.from('.img1', { duration: 1.5, opacity: 0, delay: 1.1, ease: 'elastic.out(1, 0.3)', stagger: 0.3 });
    gsap.from('.img2', { duration: 1.5, opacity: 0, delay: 1.5, ease: 'elastic.out(1, 0.3)', stagger: 0.3 });
    gsap.from('.img3', { duration: 1.5, opacity: 0, delay: 1.9, ease: 'elastic.out(1, 0.3)', stagger: 0.3 });
});

document.addEventListener('DOMContentLoaded', () => {
  const tl = gsap.timeline({ paused: true });
  const burger = document.querySelector('.burger');
  const menu = document.querySelector('.menu');
  let isOpen = false;
  tl.to(menu, { display: 'block', opacity: 1, duration: 0.25, }),
  tl.from('.menu__left', {duration: 0.8, y: +30, opacity: 1, ease: 'power2.out'}),
  tl.from('.menu__right', {duration: 0.8, y: +30, opacity: 1,ease: 'power2.out'});


  burger.addEventListener('click', () => {
    if (isOpen) {
      tl.reverse();
    } else {
      tl.play();
    }
    isOpen = !isOpen;
  });

  // Кнопка закрытия меню
  const closeBtn = document.querySelector('.close');
  closeBtn.addEventListener('click', () => {
    if (isOpen) {
      tl.reverse(0.25);
      isOpen = false;
    }
  });
});
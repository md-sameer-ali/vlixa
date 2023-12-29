var swiper = new Swiper(".thumSwiper", {
    speed:800,
    spaceBetween: 0,
    slidesPerView: 100,
    freeMode: true,
    watchSlidesProgress: true
  });
  var swiper2 = new Swiper(".gallerySwiper", {
    speed:800,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    thumbs: {
      swiper: swiper
    }
  });
var swiper = new Swiper(".blog-swipe", {
    slidesPerView: 7,
    spaceBetween: 17,
    // loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1.5,
        },
        480: {
            slidesPerView: 3,
        },
        992: {
            slidesPerView: 3.5,
        },
        1366: {
            slidesPerView: 7,
        },
    },
});

var swiper3 = new Swiper(".profile-swiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});


var swiper4 = new Swiper(".tabSwiper", {
    slidesPerView: "auto",
    spaceBetween: 7,
    // loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    // breakpoints: {
    //     0: {
    //         slidesPerView: 1.5,
    //     },
    //     480: {
    //         slidesPerView: 3,
    //     },
    //     992: {
    //         slidesPerView: 3.5,
    //     },
    //     1366: {
    //         slidesPerView: 7,
    //     },
    // },
});
// var swiper5 = new Swiper(".thumSwiper", {
//     loop: true,
//     spaceBetween: 10,
//     slidesPerView: 4,
//     freeMode: true,
//     watchSlidesProgress: true,
// });

var swiper6 = new Swiper(".gallerySwiper", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

$('.trending_slider').slick({
    infinite: true,
    dots: false,
    prevArrow: '<span class="prev-t"><i class="fa-solid fa-chevron-left"></i><span>',
    nextArrow: '<span class="next-t"><i class="fa-solid fa-chevron-right"></i><span>' ,
    speed: 300,
    /*autoplay: true,
    autoplaySpeed: 4000,*/
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 767,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true
        }
    },
    {
        breakpoint: 620,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true
        }
    },
    {
        breakpoint: 380,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
        }
    }
    ]
});
(function ($) {
    'use strict';

    // Sticky Menu
    $(window).scroll(function () {
        if ($('.navigation').offset().top > 10) {
            $('.navigation').addClass('nav-bg');
        } else {
            $('.navigation').removeClass('nav-bg');
        }
    });

    //Hero Slider
    $('.hero-slider').slick({
        autoplay: true,
        pauseOnFocus: false,
        pauseOnHover: false,
        infinite: true,
        arrows: false,
        autoplaySpeed: 7000,
        fade: true,
        dots: true
    });
    $('.hero-slider').slickAnimation();

    //   aos
    AOS.init();

    // -----------------------------
    //  Headroom Initialize
    // -----------------------------
    $('.navigation').headroom();

})(jQuery);
// js for testimonial section start
(function() {
    'use strict'; 
    const mySwiper = new Swiper ('#swiper1', {
        
        loop: false,
        
        slidesPerView: 'auto',
        centeredSlides: true,
        
        a11y: true,
        keyboardControl: true,
        grabCursor: true,
        forceToAxis: true,

        // pagination
        pagination: '.swiper-pagination',
        paginationClickable: true,
        
        // navigation arrows
        nextButton: '#testimonial-prev',
        prevButton: '#testimonial-prev',
        
    });
})();
// js for testimonial section end
new WOW().init();

var mySwiper = new Swiper('.swiper-container', {
    spaceBetween: 30,
    pagination: {
        el: '.projects-pagination',
        bulletClass:'projects-bullet',
        bulletActiveClass: 'projects-bullet-active',
        clickable: true
    },
});
//----- Owl Carousel plugin 
$(document).ready(function () {

    // HERO  SLIDER
    $('#hero-slider').owlCarousel({
        loop: true,
        margin: 1,
        nav: true,
        items: 1,
        dots: false,
        smartSpeed: 1000,
        navText: ['PREV', 'NEXT'],
        responsive: {
            0: {
                nav: false,
            },
            768: {
                nav: true,
            }
        }
    })

    // PROJECT  SLIDER
    $('#project-slider').owlCarousel({
        loop: true,
        margin: 1,
        nav: true,
        dots: false,
        smartSpeed: 1000,
        margin: 24,
        navText: ["PREV", "NEXT"],
        responsive: {
            0: {
                items: 1,
                margin: 0,
            },
            768: {
                items: 2,
            },
            1140: {
                items: 2,
                center: true,
            }
        }
    })

    // REVIEWS
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        dots: true,
        items: 1,
        smartSpeed: 500,

    })
});


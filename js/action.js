$('.carousel-holder').owlCarousel({
    // loop:true,
    margin: 10,
    responsiveClass: true,
    dots: true,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        992: {
            items: 3
        },
        1200: {
            items: 4
        }
    }
})
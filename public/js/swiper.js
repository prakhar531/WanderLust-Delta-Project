// var swiper = new Swiper(".mySwiper", {
//     slidesPerView: 7,
//     centeredSlides: true,
//     spaceBetween: 3,
//     pagination: {
//         el: ".swiper-pagination",
//         type: "fraction",
//     },
//     navigation: {
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev",
//     },
// });

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 2,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        640: {
            slidesPerView: 4,
            spaceBetween: 0,
        },
        768: {
            slidesPerView: 6,
            spaceBetween: 0,
        },
        1024: {
            slidesPerView: 8,
            spaceBetween: 0,
        },
    },
});
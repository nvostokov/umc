new Swiper('.image-slider', {
    /* стрелки */
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    /* Навигация */
    pagination: {
        el: '.swiper-pagination',
        /* Буллеты */
        clickable: true,
        /* Динамические буллеты */
        dynamicBullets: true,
        // Кастомные буллеты
        /* renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>'}; */
        },
/*     slidesPerView: 3, */
    loop: true,
    autoplay: {
        delay: 4500,
        disableOnInteraction: false,
    },
    speed: 3000,

    breakpoints: {// настройки для разных разрешений
        600: {
            slidesPerView: 1,
            /*spaceBetween: 20,*/
        },
        991: {
            slidesPerView: 2,
            /*spaceBetween: 20,*/
        },
        1200: {
            slidesPerView: 3,
            /*spaceBetween: 15,*/
        }
    }
        /* 3d effects */
    /* effect: 'cube', */
/*     cubeEffect: {
        slideShadows: true,
        shadow: true,
        shadowOffset: 20,
        shadowScale: 0.94
    } */
    /* Эффект потока */
    /* effects: 'coverflow',
    coverflowEffect: {
        rotate: 20,
        stretch: 50,
        slideShadows: true,
    }, */
    });

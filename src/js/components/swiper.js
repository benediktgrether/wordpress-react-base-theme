import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';

// configure Swiper to use modules
Swiper.use([Navigation, Pagination, Autoplay, EffectFade]);

export function initSwiper() {
    const swiperItems = document.querySelectorAll('[data-swiper]');
    console.log(swiperItems);
    if (swiperItems) {
        swiperItems.forEach((swiperItem) => {
            const config = setConfig(swiperItem);
            setSwiper(swiperItem.getAttribute('data-swiper-id'), config);
        });
    }
}

function setSwiper(swiperID, config) {
    const swiper = new Swiper(
        document.querySelector(`.swiper-id-${swiperID}`),
        config
    );
}

function setConfig(swiperItem) {
    const getAutoplay = setAutoplay(swiperItem);
    const getPagination = setPagination(swiperItem);
    const getNavigation = setNavigation(swiperItem);
    const getSlidesPerView = setSlidesPerView(swiperItem);
    const getFadeEffect = setFadeEffect(swiperItem);

    const config = {
        loop: swiperItem.getAttribute('data-swiper-loop'),
    };

    const mergeConfig = {
        ...config,
        ...getAutoplay,
        ...getPagination,
        ...getNavigation,
        ...getSlidesPerView,
        ...getFadeEffect,
    };

    return mergeConfig;
}

//TODO: Add for every attribute a condition to check if it is set or not and merge it into one config file
// https://stackoverflow.com/questions/73753190/change-settings-autoplay-effect-loop-of-swiper-js-settings-when-a-class-is-t/73891317#73891317?newreg=85ea82635d6f400090fe8279e79931e8

function setAutoplay(swiperItem) {
    let autoplayConfig = {};
    const autoplay = swiperItem.getAttribute('data-swiper-set-autoplay');
    const infiniteLoop = swiperItem.getAttribute('data-swiper-infiniteloop');
    console.log(infiniteLoop);
    if (autoplay) {
        if (infiniteLoop === 'true') {
            return (autoplayConfig = {
                autoplay: {
                    delay: 0,
                    disableOnInteraction: false,
                },
                speed: 15000,
            });
        }

        return (autoplayConfig = {
            autoplay: {
                delay: swiperItem.getAttribute('data-swiper-autoplay'),
                disableOnInteraction: false,
            },
        });
    }
    return false;
}

function setPagination(swiperItem) {
    let paginationConfig = {};
    const pagination = swiperItem.getAttribute('data-swiper-pagination');
    if (pagination) {
        return (paginationConfig = {
            pagination: {
                el: `.swiper-pagination-id-${swiperItem.getAttribute(
                    'data-swiper-id'
                )}`,
                clickable: true,
            },
        });
    }
    return false;
}

function setNavigation(swiperItem) {
    let navigationConfig = {};
    const navigation = swiperItem.getAttribute('data-swiper-navigation');
    if (navigation) {
        return (navigationConfig = {
            navigation: {
                nextEl: `.swiper-button__next-id-${swiperItem.getAttribute(
                    'data-swiper-id'
                )}`,
                prevEl: `.swiper-button__prev-id-${swiperItem.getAttribute(
                    'data-swiper-id'
                )}`,
            },
        });
    }
    return false;
}

function setSlidesPerView(swiperItem) {
    let slidesPerViewConfig = {};
    const slidesPerView = swiperItem.getAttribute(
        'data-swiper-slides-per-view'
    );

    console.log(slidesPerView);

    if (slidesPerView) {
        return (slidesPerViewConfig = {
            slidesPerView: 1,
            spaceBetween: 16,
            breakpoints: {
                // when window width is >= 640px
                1024: {
                    slidesPerView,
                    spaceBetween: 16,
                },
            },
        });
    }
}
function setFadeEffect(swiperItem) {
    let fadeConfig = {};
    const fade = swiperItem.getAttribute('data-swiper-effect');
    if (fade === 'fade') {
        console.log('fade effect');
        return (fadeConfig = {
            speed: 800,
            effect: 'fade',
            fadeEffect: {
                crossFade: true,
            },
        });
    }
    return false;
}

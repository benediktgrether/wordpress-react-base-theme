import '../scss/main.scss';

import { initSwiper } from './components/swiper';
import { Dropdown } from 'bootstrap';

window.addEventListener('load', async function () {
    console.log('Page Loaded');
    initSwiper();
});

import '../css/main.css';

import { initSwiper } from './components/swiper';
import { queryFilter } from './components/queryFilter';
import { accordion } from './components/accordion';
// import { Dropdown } from 'bootstrap';

window.addEventListener('load', async function () {
    console.log('Page Loaded');
    initSwiper();
    accordion();
    queryFilter();
});

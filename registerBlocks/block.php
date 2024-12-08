<?php

// Include the JSXBlock class
require_once get_template_directory() . '/registerBlocks/JSXBlock.php';

// Register blocks using JSXBlock
new JSXBlock('accordion-container', true);
new JSXBlock('accordion-item', true);

new JSXBlock('button', true);

new JSXBlock('container', true);

new JSXBlock('footer', true);

new JSXBlock('grid-container', true);
new JSXBlock('grid-item', true);

new JSXBlock('heading', true);

new JSXBlock('hero-slider', true);
new JSXBlock('hero-slider-item', true);

new JSXBlock('image', true);

new JSXBlock('navigation', true);

new JSXBlock('image-swiper', true);
new JSXBlock('image-swiper-item', true);

new JSXBlock('text', true);

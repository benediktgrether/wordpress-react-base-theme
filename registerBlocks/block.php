<?php

// Include the JSXBlock class
require_once get_template_directory() . '/registerBlocks/JSXBlock.php';

// Register blocks using JSXBlock
new JSXBlock('accordion-container', true);
new JSXBlock('accordion-item', true);

new JSXBlock('button', true);

new JSXBlock('container', true);

new JSXBlock("footer-container", true);
new JSXBlock("footer-item", true);
new JSXBlock("footer-navigation", true);
new JSXBlock("footer-social-media-container", true);
new JSXBlock("footer-social-media-icon", true);
new JSXBlock("footer-text", true);

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

new JSXBlock('googlemaps', true);

new JSXBlock('call-to-action-container', true);
new JSXBlock('call-to-action-item', true);

new JSXBlock('logo-swiper-container', true);
new JSXBlock('logo-swiper-item', true);

new JSXBlock('card', true);
new JSXBlock('big-teaser', true);

new JSXBlock('blog-post', true);
new JSXBlock('reference', true);

new JSXBlock('person', true);

<?php

// Include the JSXBlock class
require_once get_template_directory() . '/registerBlocks/JSXBlock.php';

// Register blocks using JSXBlock
// Registering a JSX block with localized data for a fallback image.
new JSXBlock('banner', true, ["fallbackImage" => get_theme_file_uri('/assets/images/placeholder-image.png')]);

// Registering a simple JSX block without a render callback or localized data.
new JSXBlock("heroslider", true);
new JSXBlock("heroslideitem", true, ["fallbackImage" => get_theme_file_uri('/assets/images/placeholder-image.png')]);

new JSXBlock("container", true);
new JSXBlock("container-two-columns", true);
new JSXBlock("container-row", true);
new JSXBlock("container-item", true);

new JSXBlock("accordion-container", true);
new JSXBlock("accordion-item", true);

new JSXBlock("herocontainer", true, ["fallbackImage" => get_theme_file_uri('/assets/images/placeholder-image.png')]);

new JSXBlock('image', true, ["fallbackImage" => get_theme_file_uri('/assets/images/placeholder-image.png')]);

new JSXBlock("imageswiper", true);

new JSXBlock('imageswiperitem', true, ["fallbackImage" => get_theme_file_uri('/assets/images/placeholder-image.png')]);

new JSXBlock('heading', true);
new JSXBlock('text', true);
new JSXBlock('list', true);
new JSXBlock('button', true);

new JSXBlock('navigation', true, ["fallbackImage" => get_theme_file_uri('/assets/images/placeholder-image.png')]);

new JSXBlock("footer", true, ["fallbackImage" => get_theme_file_uri('/assets/images/placeholder-image.png')]);

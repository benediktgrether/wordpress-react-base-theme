<?php

use basetheme\Utilities\Button_Utils;
use basetheme\Utilities\Image_Utils;
use basetheme\Utilities\Text_Utils;

Image_Utils::init_image($attributes);
Text_Utils::init_text($attributes);
Button_Utils::init_button($attributes);

if (!isset($attributes['subtitle'])) {
    $attributes['subtitle'] = '';
}

if (!isset($attributes['text'])) {
    $attributes['text'] = '';
}

if (!isset($attributes['linkObject'])) {
    $attributes['linkObject'] = '';
}

?>
<div class="swiper-slide hero-slide h-100">
    <div class="position-relative hero-slider">
        <div class="hero-image image-backdrop">
            <?php Image_Utils::render_image($attributes, "w-100 h-100 object-fit-cover"); ?>
        </div>
        <div class="position-absolute w-100 z-1 top-50 start-50 translate-middle">
            <div class="container">
                <div class="row">
                    <div class="col-12 col-lg-6">
                        <?php if ($attributes['text'] != "") : ?>
                            <?php echo Text_Utils::render_text($attributes["text"], $attributes, "fs-72 text-white mb-5"); ?>
                        <?php endif; ?>
                        <?php if ($attributes['subtitle'] != "") : ?>
                            <?php echo Text_Utils::render_text($attributes["subtitle"], $attributes, "fs-24 text-white mb-5"); ?>
                        <?php endif; ?>
                        <?php if ($attributes['linkObject'] != ""): ?>
                            <?php echo Button_Utils::render_button($attributes); ?>
                        <?php endif; ?>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
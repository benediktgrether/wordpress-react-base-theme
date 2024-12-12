<?php

use basetheme\Utilities\Image_Utils;

Image_Utils::init_image($attributes);
?>

<div class="swiper-slide logo-swiper-slide h-100">
    <div class="logo-swiper-image">
        <?php Image_Utils::render_image($attributes, "h-100 w-auto"); ?>
    </div>
</div>
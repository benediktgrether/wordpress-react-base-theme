<?php

use basetheme\Utilities\Image_Utils;

Image_Utils::init_image($attributes);
?>

<div class="swiper-slide image-swiper-item">
    <div class="position-relative">
        <?php Image_Utils::render_image($attributes, "img-fluid w-100 h-100 object-fit-cover"); ?>
    </div>
    <?php if ($attributes["title"]): ?>
        <div class="position-absolute top-50 start-50 translate-middle">
            <div class="fs-72 fw-bold text-white"><?php echo $attributes["title"]; ?></div>
        </div>
    <?php endif; ?>
</div>
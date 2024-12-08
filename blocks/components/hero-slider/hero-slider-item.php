<?php

use Everydayblocktheme\Utilities\Image_Utils;

Image_Utils::init_image($attributes);

?>
<div class="swiper-slide">
    <?php Image_Utils::render_image($attributes, "w-100 h-100 object-fit-cover"); ?>
</div>
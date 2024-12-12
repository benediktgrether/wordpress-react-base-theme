<?php

use basetheme\Utilities\Spacer_Utils;
use basetheme\Utilities\Swiper_Utils;

Swiper_Utils::init_swiper($attributes);

if (!isset($attributes["spacer"])) {
    $attributes["spacer"] = "medium";
}


?>

<section class="bs-logo-swiper logo-swiper <?php echo Spacer_Utils::render_spacer($attributes['spacer']); ?>">
    <div class="container-fluid px-0">
        <div class="swiper swiper-id-<?php echo $attributes["uuid"]; ?> <?php echo $attributes["infiniteLoop"] == "true" ? 'swiper-transition-timing-linear' : ''; ?>"
            data-swiper data-swiper-id=<?php echo $attributes["uuid"]; ?>
            data-swiper-loop="<?php echo $attributes["loop"]; ?>"
            data-swiper-set-autoplay="<?php echo $attributes["autoplay"]; ?>"
            data-swiper-autoplay="<?php echo $attributes["autoplaySpeed"]; ?>"
            data-swiper-pagination="<?php echo $attributes["pagination"]; ?>"
            data-swiper-navigation="<?php echo $attributes["navigation"]; ?>"
            data-swiper-effect="<?php echo $attributes["effect"]; ?>"
            data-swiper-space-between="<?php echo $attributes["spaceBetween"]; ?>"
            data-swiper-slides-per-view="<?php echo $attributes["slidesPerView"]; ?>"
            data-swiper-infiniteloop="<?php echo $attributes["infiniteLoop"] ? 'true' : 'false'; ?>">

            <div class="swiper-wrapper h-100">
                <?php echo $content; ?>
            </div>

            <?php if ($attributes["pagination"] == 'true') : ?>
                <div class="swiper-pagination swiper-pagination-id-<?php echo $attributes["uuid"]; ?>"></div>
            <?php endif; ?>
            <?php if ($attributes["navigation"] == 'true') : ?>

                <div class="swiper-button-prev swiper-button__prev-id-<?php echo $attributes["uuid"]; ?>"></div>
                <div class="swiper-button-next swiper-button__next-id-<?php echo $attributes["uuid"]; ?>"></div>

            <?php endif; ?>
        </div>
    </div>
</section>
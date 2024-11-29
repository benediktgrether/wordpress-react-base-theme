<?php
if (!isset($attributes['loop'])) {
    $attributes["loop"] = "true";
}

if (!isset($attributes['autoplay'])) {
    $attributes["autoplay"] = "true";
}

if (!isset($attributes['autoplaySpeed'])) {
    $attributes["autoplaySpeed"] = 3000;
}

if (!isset($attributes['pagination'])) {
    $attributes["pagination"] = "true";
}

if (!isset($attributes['navigation'])) {
    $attributes["navigation"] = "true";
}

if (!isset($attributes['effect'])) {
    $attributes["effect"] = "slide";
}

if (!isset($attributes['spaceBetween'])) {
    $attributes["spaceBetween"] = 0;
}

if (!isset($attributes['slidesPerView'])) {
    $attributes["slidesPerView"] = 1;
}

if (!isset($attributes['align'])) {
    $attributes["align"] = "full";
}

if (!isset($attributes['infiniteLoop'])) {
    $attributes["infiniteLoop"] = "false";
}

if ($attributes["infiniteLoop"] != "false") {
    $attributes["infiniteLoop"] = "true";
}

?>

<div class="swiper swiper-id-<?php echo $attributes["uuid"]; ?> <?php echo $attributes["infiniteLoop"] == "true" ? 'swiper-transition-timing-linear' : ''; ?> vw-100 vh-100"
    data-swiper data-swiper-id=<?php echo $attributes["uuid"]; ?>
    data-swiper-loop="<?php echo $attributes["loop"]; ?>"
    data-swiper-set-autoplay="<?php echo $attributes["autoplay"]; ?>"
    data-swiper-autoplay="<?php echo $attributes["autoplaySpeed"]; ?>"
    data-swiper-pagination="<?php echo $attributes["pagination"]; ?>"
    data-swiper-navigation="<?php echo $attributes["navigation"]; ?>"
    data-swiper-effect="<?php echo $attributes["effect"]; ?>"
    data-swiper-space-between="<?php echo $attributes["spaceBetween"]; ?>"
    data-swiper-slides-per-view="<?php echo $attributes["slidesPerView"]; ?>"
    data-swiper-infiniteloop="<?php echo $attributes["infiniteLoop"]; ?>">

    <div class="swiper-wrapper">
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
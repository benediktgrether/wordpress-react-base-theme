<?php

if (!isset($attributes['mediaUrl'])) {
    $attributes["mediaUrl"] = get_theme_file_uri('/assets/images/placeholder-image.png');
}

if (!isset($attributes['imageSize'])) {
    $attributes["imageSize"] = "full";
}

if (isset($attributes["loading"])) {
    $loading = "lazy";
} else {
    $loading = "eager";
}
?>

<div class="swiper-slide">
    <?php
    if (isset($attributes["mediaId"])): ?>
        <?php echo wp_get_attachment_image(
            $attributes["mediaId"],
            $attributes["imageSize"],
            "",
            [
                "class" => "img-fluid w-100 h-100 object-fit-cover",
                "loading" => $loading
            ]
        ); ?>
    <?php else: ?>
        <img src="<?php echo $attributes["mediaUrl"]; ?>" alt="Image" />
    <?php endif; ?>
</div>
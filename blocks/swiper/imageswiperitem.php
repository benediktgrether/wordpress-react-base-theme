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

<div class="swiper-slide image-swiper-item">
    <div class="position-relative">
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
    <?php if ($attributes["title"]): ?>
        <div class="position-absolute top-50 start-50 translate-middle">
            <div class="fs-230 fw-bold text-white opacity-40"><?php echo $attributes["title"]; ?></div>
        </div>
    <?php endif; ?>
</div>
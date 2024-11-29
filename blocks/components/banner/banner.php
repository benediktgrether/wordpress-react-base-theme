<?php

if (!defined('ABSPATH')) {
    exit;
}

if (!isset($attributes['imgURL'])) {
    $attributes["imgURL"] = get_theme_file_uri('/assets/images/placeholder-image.png');
}


?>

<div class="banner mt-10">
    <?php if (isset($attributes["imgID"])): ?>
        <?php echo wp_get_attachment_image(
            $attributes["imgID"],
            'pageBanner',
            "",
            [
                "class" => "img-fluid w-100 object-cover",
                "loading" => "lazy",
            ]
        ); ?>
    <?php else: ?>
        <img src="<?php echo $attributes["imgURL"]; ?>" alt="Image" />
    <?php endif; ?>
    <?php echo $content; ?>
</div>
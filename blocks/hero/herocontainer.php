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

<section>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="position-relative  overflow-hidden">
                    <?php
                    if (isset($attributes["mediaId"])): ?>
                        <?php echo wp_get_attachment_image(
                            $attributes["mediaId"],
                            $attributes["imageSize"],
                            "",
                            [
                                "class" => "hero-image object-fit-cover",
                                "loading" => $loading
                            ]
                        ); ?>
                    <?php else: ?>
                        <img src="<?php echo $attributes["mediaUrl"]; ?>" alt="Image" />
                    <?php endif; ?>
                    <div class="position-absolute bottom-0">
                        <div class="fs-400 hero-title fw-bold text-white">
                            <?php echo $attributes['title']; ?>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
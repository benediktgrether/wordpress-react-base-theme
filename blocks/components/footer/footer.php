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

<footer class="mt-12">
    <div class="bg-secondary">
        <div class="container">
            <div class="row justify-content-between align-items-center py-5">
                <div class="col-1">
                    <a href="#" class="">
                        <?php if (isset($attributes["mediaId"])): ?>
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
                    </a>
                </div>
                <div class="col-3 py-3">
                    <p class="text-footer fw-light font-family-footer">
                        <?php echo $attributes["address"]; ?>
                    </p>
                </div>
                <div class="col-3 py-3">
                    <p class="text-footer fw-light font-family-footer">
                        <?php echo $attributes["member"]; ?>
                    </p>
                </div>
                <div class="col-3 py-3">
                    <p class="text-footer fw-light font-family-footer">
                        <?php echo $attributes["copyRight"]; ?>
                    </p>
                </div>
            </div>
        </div>
    </div>
</footer>
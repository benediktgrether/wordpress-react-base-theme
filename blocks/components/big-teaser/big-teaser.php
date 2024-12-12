<?php

use basetheme\Utilities\Image_Utils;
use basetheme\Utilities\Spacer_Utils;

Image_Utils::init_image($attributes);


if (!isset($attributes["spacer"])) {
    $attributes["spacer"] = "";
}

?>

<section class="bs-big-teaser big-teaser <?php echo Spacer_Utils::render_spacer($attributes['spacer']); ?>">
    <?php Image_Utils::render_image($attributes, "w-100 h-100 object-fit-cover"); ?>
</section>
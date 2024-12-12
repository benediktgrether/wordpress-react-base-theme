<?php

use basetheme\Utilities\Image_Utils;

Image_Utils::init_image($attributes);
?>

<?php Image_Utils::render_image($attributes, "bs-image img-fluid w-100 h-100 object-fit-cover"); ?>
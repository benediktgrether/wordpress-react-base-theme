<?php

use basetheme\Utilities\Spacer_Utils;

if (!isset($attributes["spacer"])) {
    $attributes["spacer"] = "medium";
}

$spacer = Spacer_Utils::render_spacer($attributes['spacer']);

if (!isset($attributes["colorName"])) {
    $attributes["colorName"] = "white";
}

$bgColor = "";

switch ($attributes['colorName']) {
    case 'primary':
        $bgColor = 'bg-primary py-8';
        break;
    case 'secondary':
        $bgColor = 'bg-secondary py-8';
        break;
    case 'white':
        $bgColor = 'bg-white';
        break;
    case 'gray':
        $bgColor = 'bg-gray-500 py-8';
        break;
    default:
        $bgColor = 'bg-primary py-8';
        break;
}
?>

<section class="bs-grid-container grid-container <?php echo $bgColor; ?> <?php echo $spacer; ?>">
    <div class="container">
        <div class="row row-gap-4">
            <?php echo $content; ?>
        </div>
    </div>
</section>
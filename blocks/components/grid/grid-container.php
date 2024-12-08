<?php

use Everydayblocktheme\Utilities\Spacer_Utils;

if (!isset($attributes["spacer"])) {
    $attributes["spacer"] = "medium";
}

$spacer = Spacer_Utils::render_spacer($attributes['spacer']);
?>

<section class="grid-container <?php echo $spacer; ?>">
    <div class="container">
        <div class="row justify-content-center">
            <?php echo $content; ?>
        </div>
    </div>
</section>
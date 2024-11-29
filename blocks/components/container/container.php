<?php

use Everydayblocktheme\Utilities\Spacer_Utils;

if (!isset($attributes["spacer"])) {
    $attributes["spacer"] = "medium";
}

// TODO:
// Add a switch for spacer because i want to have the spacer attributes in the spacer.jsx is something is changed i only want to update the class in the container or in a spacer component
?>

<section class="container <?php echo Spacer_Utils::render_spacer($attributes['spacer']); ?>">
    <div class="row">
        <div class="col-12">
            <?php echo $content; ?>
        </div>
    </div>
</section>
<?php

use Everydayblocktheme\Utilities\Spacer_Utils;


if (!isset($attributes["spacer"])) {
    $attributes["spacer"] = "medium";
}

if (!isset($attributes['uuid'])) {
    $attributes['uuid'] = 'error';
}

?>

<div class="container <?php echo Spacer_Utils::render_spacer($attributes['spacer']); ?>">
    <div class="accordion" id="parent-accordion-id-<?php echo $attributes['uuid']; ?>">
        <?php echo $content; ?>
    </div>
</div>

<div class="accordion" id="accordionExample">
    <!-- Content -->
</div>
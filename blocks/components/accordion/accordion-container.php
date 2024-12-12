<?php

use basetheme\Utilities\Spacer_Utils;


if (!isset($attributes["spacer"])) {
    $attributes["spacer"] = "medium";
}

if (!isset($attributes['uuid'])) {
    $attributes['uuid'] = 'error';
}

?>
<div class="bs-accordion <?php echo Spacer_Utils::render_spacer($attributes['spacer']); ?>">
    <div class="accordion" id="parent-accordion-id-<?php echo $attributes['uuid']; ?>">
        <?php echo $content; ?>
    </div>
</div>
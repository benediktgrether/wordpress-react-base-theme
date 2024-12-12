<?php

use basetheme\Utilities\Text_Utils;

Text_Utils::init_text($attributes);

?>

<div class="bs-text text">
    <?php echo Text_Utils::render_text($attributes["text"], $attributes); ?>
</div>
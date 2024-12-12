<?php

use basetheme\Utilities\Button_Utils;

Button_Utils::init_button($attributes);
?>

<div class="bs-button button-wrapper">
    <?php Button_Utils::render_button($attributes); ?>
</div>
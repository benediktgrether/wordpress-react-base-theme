<?php

use Everydayblocktheme\Utilities\Button_Utils;

Button_Utils::init_button($attributes);

?>

<div class="button-wrapper">
    <?php Button_Utils::render_button($attributes); ?>
</div>
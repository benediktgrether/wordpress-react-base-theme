<?php

use Everydayblocktheme\Utilities\Text_Utils;

Text_Utils::init_text($attributes);

?>

<div class="text">
    <?php echo Text_Utils::render_text($attributes); ?>
</div>
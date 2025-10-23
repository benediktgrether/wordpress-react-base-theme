<?php

use basetheme\Utilities\Text_Utils;

Text_Utils::init_text($attributes);

?>

<div class="bs-text text">
    <?php echo Text_Utils::render_text($attributes["text"], $attributes); ?>
    <web-component-jo-text text="<?php echo esc_attr($attributes["text"]); ?>"></web-component-jo-text>
</div>
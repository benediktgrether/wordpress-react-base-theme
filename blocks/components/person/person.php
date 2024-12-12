<?php

use basetheme\Utilities\Image_Utils;
use basetheme\Utilities\Text_Utils;

if (!isset($attributes['firstname'])) {
    $attributes['firstname'] = 'Vorname';
}

if (!isset($attributes['lastname'])) {
    $attributes['lastname'] = 'Nachname';
}

if (!isset($attributes['position'])) {
    $attributes['position'] = 'Position';
}

Image_Utils::init_image($attributes);

?>

<div class="bs-person person">
    <div class="position-relative person-wrapper">
        <div class="person-image ratio ratio-1x1">
            <?php Image_Utils::render_image($attributes, "h-100 w-100 object-fit-cover"); ?>
        </div>
        <div class="position-absolute bottom-0 start-0 end-0 p-3 person-content">
            <h3 class="text-white"><?php echo $attributes['firstname'] . ' ' . $attributes['lastname']; ?></h3>
            <p class="text-white"><?php echo $attributes['position']; ?></p>
            <?php if (isset($attributes['email'])): ?>
                <div>
                    <a href="mailto:<?php echo $attributes['email']; ?>" class="text-white"><?php echo $attributes['email']; ?></a>
                </div>
            <?php endif; ?>
            <?php if (isset($attributes['phone'])): ?>
                <div>
                    <a href="tel:<?php echo $attributes['phone']; ?>" class="text-white
                "><?php echo $attributes['phone']; ?></a>
                </div>
            <?php endif; ?>
        </div>
    </div>
</div>
<?php

use basetheme\Utilities\Text_Utils;
use basetheme\Utilities\Button_Utils;

Text_Utils::init_text($attributes);
Button_Utils::init_button($attributes);

if (!isset($attributes["colorName"])) {
    $attributes["colorName"] = "white";
}

$bgColorClass = '';
$textColorClass = '';

switch ($attributes['colorName']) {
    case 'primary':
        $bgColorClass = 'bg-primary';
        $textColorClass = 'text-white';
        break;
    case 'secondary':
        $bgColorClass = 'bg-secondary';
        $textColorClass = 'text-white';
        break;
    case 'white':
        $bgColorClass = 'bg-white';
        $textColorClass = 'text-text';
        break;
    default:
        $bgColorClass = 'bg-primary';
        $textColorClass = 'text-white';
        break;
}

?>


<div class="bs-card <?php echo $bgColorClass; ?> p-4 shadow-lg">
    <h2 class="<?php echo $textColorClass; ?> fs-32"><?php echo $attributes["headline"]; ?></h2>
    <?php echo Text_Utils::render_text($attributes["text"], $attributes, "fs-18 mb-5 $textColorClass"); ?>
</div>
<?php

use basetheme\Utilities\Spacer_Utils;

if (!isset($attributes["spacer"])) {
    $attributes["spacer"] = "medium";
}

if (!isset($attributes["colorName"])) {
    $attributes["colorName"] = "white";
}

$bgColor = "";

switch ($attributes['colorName']) {
    case 'primary':
        $bgColor = 'bg-primary py-8';
        break;
    case 'secondary':
        $bgColor = 'bg-secondary py-8';
        break;
    case 'white':
        $bgColor = 'bg-white';
        break;
    case 'gray':
        $bgColor = 'bg-gray-500 py-8';
        break;
    default:
        $bgColor = 'bg-primary py-8';
        break;
}

// TODO:
// Add a switch for spacer because i want to have the spacer attributes in the spacer.jsx is something is changed i only want to update the class in the container or in a spacer component
?>

<section class="<?php echo $bgColor; ?> <?php echo Spacer_Utils::render_spacer($attributes['spacer']); ?>">
    <div class="container mx-auto">
        <div class="flex flex-wrap -mx-2">
            <div class="w-full px-2">
                <?php echo $content; ?>
            </div>
        </div>
    </div>
</section>
<?php

if (!isset($attributes["columnsWdith"])) {
    $attributes["columnsWdith"] = "col-12 col-md-6";
}

$columnsClass = "col-12 col-md-6";
switch ($attributes["columnsWdith"]) {
    case "1/2":
        $columnsClass = "col-12 col-md-6";
        break;
    case "1/3":
        $columnsClass = "col-12 col-md-4";
        break;
    case "2/3":
        $columnsClass = "col-12 col-md-8";
        break;
    case "1/4":
        $columnsClass = "col-12 col-md-3";
        break;
    case "2/5":
        $columnsClass = "col-12 col-md-5";
        break;
    case "3/4":
        $columnsClass = "col-12 col-md-9";
        break;
    default:
        $columnsClass = "col-12 col-md-6";
        break;
}

?>

<div class="<?php echo $columnsClass; ?>">
    <?php echo $content; ?>
</div>
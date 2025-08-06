<?php

if (!isset($attributes["columnsWdith"])) {
    $attributes["columnsWdith"] = "w-full px-2 md:w-6/12 px-2";
}

$columnsClass = "w-full px-2 md:w-6/12 px-2";
switch ($attributes["columnsWdith"]) {
    case "1/2":
        $columnsClass = "w-full px-2 md:w-6/12 px-2";
        break;
    case "1/3":
        $columnsClass = "w-full px-2 md:w-4/12 px-2";
        break;
    case "2/3":
        $columnsClass = "w-full px-2 md:w-8/12 px-2";
        break;
    case "1/4":
        $columnsClass = "w-full px-2 md:w-3/12 px-2";
        break;
    case "2/5":
        $columnsClass = "w-full px-2 md:w-5/12 px-2";
        break;
    case "3/4":
        $columnsClass = "w-full px-2 md:w-9/12 px-2";
        break;
    default:
        $columnsClass = "w-full px-2 md:w-6/12 px-2";
        break;
}

?>

<div class="<?php echo $columnsClass; ?>">
    <?php echo $content; ?>
</div>
<?php

if (!isset($attributes["tag"])) {
    $attributes["tag"] = "h1";
}

if (!isset($attributes["alignment"])) {
    $attributes["alignment"] = "left";
}

$alignmentClass = "text-left";
switch ($attributes["alignment"]) {
    case "left":
        $alignmentClass = "text-left";
        break;
    case "center":
        $alignmentClass = "text-center";
        break;
    case "right":
        $alignmentClass = "text-right";
        break;
    default:
        $alignmentClass = "text-left";
        break;
}

echo "<div class='bs-heading heading'>";
echo "<{$attributes['tag']} class='{$alignmentClass}'>{$attributes['text']}</{$attributes["tag"]}>";
echo "</div>";

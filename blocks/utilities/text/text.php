<?php

namespace Everydayblocktheme\Utilities;

class Text_Utils
{

    public static function init_text(&$attributes)
    {
        if (!isset($attributes["alignment"])) {
            $attributes["alignment"] = "left";
        }
    }

    public static function render_text($attributes, $class = "text")
    {

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

        return '<p class="' . $alignmentClass . ' ' . $class . '">' . $attributes["text"] . '</p>';
    }
}

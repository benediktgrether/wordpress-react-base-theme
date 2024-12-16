<?php

namespace basetheme\Utilities;

class Text_Utils
{

    public static function init_text(&$attributes)
    {
        if (!isset($attributes["alignment"])) {
            $attributes["alignment"] = "left";
        }
    }

    public static function render_text($text, $attributes, $class = "text")
    {

        $alignmentClass = "text-left";
        switch ($attributes["alignment"]) {
            case "left":
                $alignmentClass = "text-start";
                break;
            case "center":
                $alignmentClass = "text-center";
                break;
            case "right":
                $alignmentClass = "text-end";
                break;
            default:
                $alignmentClass = "text-start";
                break;
        }

        return '<p class="' . $alignmentClass . ' ' . $class . '">' . $text . '</p>';
    }
}

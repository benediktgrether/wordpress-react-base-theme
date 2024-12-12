<?php

namespace basetheme\Utilities;

class Button_Utils
{
    public static function init_button($attributes)
    {
        if (!isset($attributes['linkObject'])) {
            return;
        }

        if (!isset($attributes['linkObject']["openInNewTab"])) {
            $attributes['linkObject']['openInNewTab'] = false;
        }

        if (!isset($attributes['linkText'])) {
            $attributes['linkText'] = 'Mehr erfahren';
        }

        if (!isset($attributes['buttonColorName'])) {
            $attributes['buttonColorName'] = 'primary';
        }
    }

    public static function render_button($attributes)
    {
        if (!isset($attributes['linkObject'])) {
            return;
        }

        $linkUrl = $attributes['linkObject']['url'];

        // Check if the link contains 'https', if not, prepend 'https://'
        if (strpos($linkUrl, 'https://') === false && strpos($linkUrl, 'http://') === false) {
            $linkUrl = 'https://' . $linkUrl;
        }

        if (!isset($attributes['linkText'])) {
            $attributes['linkText'] = 'Mehr erfahren';
        }



        if (!isset($attributes['buttonColorName'])) {
            $attributes['buttonColorName'] = 'primary';
        }

        if (!isset($attributes['linkObject']["openInNewTab"])) {
            $attributes['linkObject']['openInNewTab'] = false;
        }

        $colorClass = '';
        $textColorClass = '';
        switch ($attributes['buttonColorName']) {
            case 'primary':
                $colorClass = 'btn-primary';
                $textColorClass = 'text-white';
                break;
            case 'secondary':
                $colorClass = 'btn-secondary';
                $textColorClass = 'text-white';
                break;
            case 'white':
                $colorClass = 'btn-white';
                $textColorClass = 'text-text';
                break;
            case 'gray':
                $colorClass = 'btn-gray-500';
                $textColorClass = 'text-primary';
                break;
            default:
                $colorClass = 'btn-primary';
                $textColorClass = 'text-white';
                break;
        }

        echo "<a href='{$linkUrl}' class='btn {$colorClass} {$textColorClass}' target='" . ($attributes['linkObject']['openInNewTab'] ? "_blank" : "_self") . "'>{$attributes['linkText']}</a>";
    }
}

<?php

namespace Everydayblocktheme\Utilities;

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
    }

    public static function render_button($attributes)
    {
        if (!isset($attributes['linkObject'])) {
            return;
        }

        if (!isset($attributes['text'])) {
            $attributes['text'] = 'Mehr erfahren';
        }

        if (!isset($attributes['colorName'])) {
            $attributes['colorName'] = 'primary';
        }

        $linkUrl = $attributes['linkObject']['url'];

        // Check if the link contains 'https', if not, prepend 'https://'
        if (strpos($linkUrl, 'https://') === false && strpos($linkUrl, 'http://') === false) {
            $linkUrl = 'https://' . $linkUrl;
        }

        // Determine if the link is internal or external
        $isExternal = (strpos($linkUrl, home_url()) === false);

        $colorClass = '';
        switch ($attributes['colorName']) {
            case 'primary':
                $colorClass = 'btn-primary';
                break;
            case 'primary-dark':
                $colorClass = 'btn-primary-dark';
                break;
            case 'secondary':
                $colorClass = 'btn-secondary';
                break;
            case 'white':
                $colorClass = 'btn-white';
                break;
            default:
                $colorClass = 'btn-primary';
                break;
        }

        echo "<a href='{$linkUrl}' class='btn {$colorClass}' target='" . ($attributes['linkObject']['openInNewTab'] ? "_blank" : "_self") . "'>{$attributes['text']}</a>";
    }
}

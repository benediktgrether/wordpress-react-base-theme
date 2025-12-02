<?php

namespace basetheme\Utilities;

class Button_Utils
{
    public static function init_button(&$attributes)
    {
        if (!isset($attributes['linkObject'])) {
            return;
        }

        $attributes['linkObject']['openInNewTab'] = $attributes['linkObject']['openInNewTab'] ?? false;
        $attributes['linkText'] = $attributes['linkText'] ?? 'Mehr erfahren';
        $attributes['buttonColorName'] = $attributes['buttonColorName'] ?? 'primary';
    }

    public static function render_button($attributes)
    {
        if (!isset($attributes['linkObject'])) {
            return;
        }

        $linkUrl = $attributes['linkObject']['url'] ?? '#';

        // Ensure URL has protocol
        if (strpos($linkUrl, 'https://') === false && strpos($linkUrl, 'http://') === false) {
            $linkUrl = 'https://' . $linkUrl;
        }

        $linkText = $attributes['linkText'] ?? 'Mehr erfahren';
        $openInNewTab = !empty($attributes['linkObject']['openInNewTab']);

        // Tailwind button styles
        $colorClass = self::get_tailwind_button_color($attributes['buttonColorName'] ?? 'primary');

        echo "<a href='{$linkUrl}' 
                class='{$colorClass} inline-block font-semibold py-2 px-4 rounded transition duration-300' 
                target='" . ($openInNewTab ? "_blank" : "_self") . "'>
                {$linkText}
              </a>";
    }

    private static function get_tailwind_button_color($colorName)
    {
        switch ($colorName) {
            case 'primary':
                return 'bg-primary-default hover:bg-primary-hover text-white';
            case 'secondary':
                return 'bg-secondary-default hover:bg-secondary-hover text-white';
            case 'white':
                return 'bg-white text-gray-800 border border-gray-300 hover:bg-gray-100';
            case 'gray':
                return 'bg-gray-200 hover:bg-gray-300 text-gray-800';
            default:
                return 'bg-primary-default hover:bg-primary-hover text-white';
        }
    }
}

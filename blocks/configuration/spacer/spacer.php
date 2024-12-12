<?php

namespace basetheme\Utilities;

class Spacer_Utils
{

    public static function render_spacer($attributes)
    {
        $spacer = $attributes;

        if (empty($spacer)) {
            return;
        }

        $spacerClass = "";

        switch ($spacer) {
            case 'none':
                $spacerClass = 'mt-0';
                break;
            case 'xSmall':
                $spacerClass = 'mt-2';
                break;
            case 'small':
                $spacerClass = 'mt-3';
                break;
            case 'medium':
                $spacerClass = 'mt-4';
                break;
            case 'large':
                $spacerClass = 'mt-3 mt-lg-5';
                break;
            case 'xLarge':
                $spacerClass = 'mt-5 mt-lg-10';
                break;
            case 'xxLarge':
                $spacerClass = 'mt-6 mt-lg-12';
                break;
            default:
                $spacerClass = 'mt-0';
                break;
        }

        return $spacerClass;
    }
}

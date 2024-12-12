<?php

namespace basetheme\Utilities;

class Align_Utils
{
    public static function render_align($attributes)
    {
        $algin = $attributes;

        if (empty($algin)) {
            return;
        }

        $alignClass = "";

        switch ($algin) {
            case 'left':
                $alignClass = 'justify-content-start';
                break;
            case 'center':
                $alignClass = 'justify-content-center';
                break;
            case 'right':
                $alignClass = 'justify-content-end';
                break;
            default:
                $alignClass = 'justify-content-start';
                break;
        }

        return $alignClass;
    }
}

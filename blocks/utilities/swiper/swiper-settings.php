<?php

namespace Everydayblocktheme\Utilities;

class Swiper_Utils
{

    public static function init_swiper(&$attributes)
    {
        if (! isset($attributes['loop'])) {
            $attributes["loop"] = "true";
        }

        if (!isset($attributes['autoplay'])) {
            $attributes["autoplay"] = "true";
        }

        if (!isset($attributes['autoplaySpeed'])) {
            $attributes["autoplaySpeed"] = 3000;
        }

        if (!isset($attributes['pagination'])) {
            $attributes["pagination"] = "true";
        }

        if (!isset($attributes['navigation'])) {
            $attributes["navigation"] = "true";
        }

        if (!isset($attributes['effect'])) {
            $attributes["effect"] = "slide";
        }

        if (!isset($attributes['spaceBetween'])) {
            $attributes["spaceBetween"] = 0;
        }

        if (!isset($attributes['slidesPerView'])) {
            $attributes["slidesPerView"] = 1;
        }

        if (!isset($attributes['infiniteLoop'])) {
            $attributes["infiniteLoop"] = "false";
        }

        // Normalize infiniteLoop setting
        if ($attributes["infiniteLoop"] != "false") {
            $attributes["infiniteLoop"] = "true";
        }
    }

    public function render_swiper_settings($attributes) {}
}

<?php

if (!isset($attributes['loop'])) {
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

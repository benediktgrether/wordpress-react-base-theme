<?php

if (!isset($attributes["tag"])) {
    $attributes["tag"] = "h1";
}

echo "<{$attributes['tag']} class='heading'>{$attributes['text']}</{$attributes["tag"]}>";

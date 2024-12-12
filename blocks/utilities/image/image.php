<?php

namespace basetheme\Utilities;

class Image_Utils
{

    public static function init_image(&$attributes)
    {
        if (!isset($attributes['mediaUrl'])) {
            $attributes["mediaUrl"] = get_theme_file_uri('/assets/images/placeholder-image.png');
        }

        if (!isset($attributes['imageSize'])) {
            $attributes["imageSize"] = "full";
        }

        if (isset($attributes["loading"])) {
            $attributes["loading"] = "lazy";
        } else {
            $attributes["loading"] = "eager";
        }
    }

    public static function render_image($attributes, $class = "img-fluid w-100 object-fit-cover")
    {
        if (isset($attributes["mediaId"])): ?>
            <?php echo wp_get_attachment_image(
                $attributes["mediaId"],
                $attributes["imageSize"],
                "",
                [
                    "class" => $class,
                    "loading" => $attributes["loading"]
                ]
            ); ?>
        <?php else: ?>
            <img src="<?php echo $attributes["mediaUrl"]; ?>" alt="Image" loading="<?php echo $attributes['loading']; ?>" class="<?php echo $class; ?>" />
<?php endif;
    }
}

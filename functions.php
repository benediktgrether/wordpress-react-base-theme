<?php

function features()
{
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    // add_theme_support('html5', array('search-form'));
    add_theme_support("editor-styles");
    add_editor_style(array('build/style-index.css', "build/index.css"));
}

add_action('after_setup_theme', 'features');

function addImageSizes()
{
    add_image_size("full", 1920, 1080);
    add_image_size('pageBanner', 1500, 350, true);
}

add_action('after_setup_theme', 'addImageSizes');

// Load CSS and JS
function files()
{
    wp_enqueue_script('main-js', get_theme_file_uri('/build/index.js'), NULL, microtime(), true);
    wp_enqueue_style('main_styles', get_theme_file_uri('/build/index.css'), NULL, microtime());
}

add_action('wp_enqueue_scripts', 'files');

/**
 * Class PlaceholderBlock
 * This class is responsible for registering a block in WordPress and providing a render callback for server-side rendering.
 */
class PlaceholderBlock
{
    /**
     * Constructor for the PlaceholderBlock class.
     *
     * @param string $name The name of the block.
     */
    function __construct($name)
    {
        $this->name = $name;
        // Hooking the 'onInit' function to the 'init' action.
        add_action('init', [$this, 'onInit']);
    }

    /**
     * Callback function for rendering the block.
     *
     * @param array $attributes The attributes passed to the block.
     * @param string $content The content inside the block.
     * @return string The output of the block rendering.
     */
    function ourRenderCallback($attributes, $content)
    {
        ob_start();
        // Include the block's PHP file for server-side rendering.
        require get_theme_file_path("/blocks/{$this->name}.php");
        return ob_get_clean();
    }

    /**
     * Registers the block and its associated JavaScript file on the 'init' action.
     */
    function onInit()
    {
        // Register the block's script.
        wp_register_script($this->name, get_stylesheet_directory_uri() . "/blocks/{$this->name}.jsx", array('wp-blocks', 'wp-editor'));

        // Register the block type with a render callback.
        register_block_type("everydayblocktheme/{$this->name}", array(
            'editor_script' => $this->name,
            "render_callback" => [$this, 'ourRenderCallback']
        ));
    }
}

// Register Blocks in config folder block.php
require_once get_template_directory() . '/registerBlocks/block.php';

// Register utilities
require_once get_template_directory() . '/blocks/configuration/spacer/spacer.php';
require_once get_template_directory() . '/blocks/configuration/align/align.php';
require_once get_template_directory() . '/blocks/utilities/swiper/swiper-settings.php';
require_once get_template_directory() . '/blocks/components/navigation/render_navigation.php';
require_once get_template_directory() . '/blocks/utilities/image/image.php';
require_once get_template_directory() . '/blocks/utilities/text/text.php';
require_once get_template_directory() . '/blocks/utilities/button/button.php';


// Return ref from Navigation block
function render_core_navigation($block_content, $block)
{
    // Get the reference to the navigation block
    $ref = $block['attrs']['ref'];
    $block_content = $ref;
    return $block_content;
}

add_filter('render_block_core/navigation', 'render_core_navigation', 10, 2);


/**
 * add SVG to allowed file uploads
 **/
function add_file_types_to_uploads($file_types)
{

    $new_filetypes = array();
    $new_filetypes['svg'] = 'image/svg+xml';
    $file_types = array_merge($file_types, $new_filetypes);

    return $file_types;
}
add_action('upload_mimes', 'add_file_types_to_uploads');

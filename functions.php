<?php

function features()
{
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    // add_theme_support('html5', array('search-form'));
    add_theme_support("editor-styles");
    add_editor_style(array('build/style-index.css', "build/index.css"));
}

add_action('wp_enqueue_scripts', function () {
    // Remove Global Styles inline CSS (added by block themes)
    wp_dequeue_style('global-styles');
    wp_dequeue_style('global-styles-inline-css');
}, 20);

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
        register_block_type("basetheme/{$this->name}", array(
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


// Return ref from Footer block
function render_core_footer($block_content, $block)
{
    // Get the reference to the footer block
    $ref = $block['attrs']['ref'];
    $block_content = $ref;
    return $block_content;
}

add_filter('render_block_core/footer', 'render_core_footer', 10, 2);

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

/**
 * Add custom classes to the form elements of Contact Form 7
 */

// Disable CF7 default form styles and classes
add_filter('wpcf7_form_class_attr', function ($class) {
    return ''; // Return empty string to remove default classes
});

add_filter('wpcf7_form_elements', function ($content) {
    // Remove all default CF7 classes from input, select, and textarea elements
    $content = preg_replace('/\sclass=".*?"/', '', $content);
    return $content;
});

add_filter('wpcf7_form_elements', function ($content) {
    // Add the 'form-label' class to all <label> elements
    $content = preg_replace('/<label(.*?)>/', '<label class="form-label w-100"$1>', $content);
    // Add the 'form-control' class to all input fields
    $content = preg_replace(
        '/<(input|textarea|select)(.*?)class="(.*?)"/',
        '<$1$2class="$3 form-control"',
        $content
    );

    // If no class attribute exists, add 'form-control' class
    $content = preg_replace(
        '/<(input|textarea|select)(?!.*?class=)/',
        '<$1 class="form-control"',
        $content
    );

    // Replace submit input field with a button element
    $content = preg_replace(
        '/<input([^>]*?)type="submit"([^>]*?)value="([^"]*?)"([^>]*?)>/',
        '<button type="submit" class="btn btn-primary text-white"$2$4>$3</button>',
        $content
    );

    return $content;
});


add_filter('wpcf7_form_elements', function ($content) {
    $content = preg_replace_callback(
        '/<label([^>]*)><input([^>]*)type="checkbox"([^>]*)>(.*?)<\/label>/s',
        function ($matches) {
            // Generate a unique ID for each checkbox
            $uniqueId = 'checkbox-' . uniqid();

            // Extract input attributes and label text
            $labelAttributes = $matches[1];
            $inputAttributes = $matches[2] . 'type="checkbox"' . $matches[3];
            $labelText = $matches[4];

            // Build the Bootstrap-formatted checkbox structure with connected label
            return '<div class="form-check">
                        <input class="form-check-input" id="' . $uniqueId . '"' . $inputAttributes . '>
                        <label class="form-check-label" for="' . $uniqueId . '"' . $labelAttributes . '>' . $labelText . '</label>
                    </div>';
        },
        $content
    );

    return $content;
});


add_filter('wpcf7_form_elements', function ($content) {
    $content = preg_replace_callback(
        '/<label([^>]*)><input([^>]*)type="radio"([^>]*)>(.*?)<\/label>/s',
        function ($matches) {
            // Generate a unique ID for each radio button
            $uniqueId = 'radio-' . uniqid();

            // Extract input attributes and label text
            $labelAttributes = $matches[1];
            $inputAttributes = $matches[2] . 'type="radio"' . $matches[3];
            $labelText = $matches[4];

            // Build the Bootstrap-formatted radio button structure
            return '<div class="form-check">
                        <input class="form-check-input" id="' . $uniqueId . '"' . $inputAttributes . '>
                        <label class="form-check-label" for="' . $uniqueId . '"' . $labelAttributes . '>' . $labelText . '</label>
                    </div>';
        },
        $content
    );

    return $content;
});

/**
 * Restrict the block types that can be used in the editor
 */
add_filter('allowed_block_types', 'my_function');

function my_function($allowed_block_types)
{

    return array(
        "basetheme/main",
        'core/paragraph',
        'basetheme/accordion-container',
        'basetheme/accordion-item',
        'basetheme/big-teaser',
        'basetheme/blog-post',
        'basetheme/button',
        'basetheme/call-to-action-container',
        'basetheme/call-to-action-item',
        'basetheme/card',
        'basetheme/container',
        'basetheme/heading',
        'basetheme/text',
        // 'basetheme/list',
        // 'basetheme/testimonial',
        'basetheme/button',
        'basetheme/blog-post',
        'basetheme/google-maps',
        'basetheme/reference',
        'basetheme/accordion-container',
        'contact-form-7/contact-form-selector',
        'basetheme/footer-container',
        'basetheme/footer-item',
        'basetheme/footer-navigation',
        'basetheme/footer-social-media-container',
        'basetheme/footer-social-media-icon',
        'basetheme/footer-text',
        'basetheme/grid-container',
        'basetheme/grid-item',
        'basetheme/person',
        'basetheme/hero-slider',
        'basetheme/hero-slider-item',
        'basetheme/image',
        'basetheme/logo-swiper-container',
        'basetheme/logo-swiper-item',
        'basetheme/navigation',
        'basetheme/image-swiper',
        'basetheme/image-swiper-item'

    );
}

<?php

/**
 * Class JSXBlock
 * This class extends the functionality of PlaceholderBlock by adding the ability to localize data and support JSX blocks.
 */
class JSXBlock
{
    /**
     * Constructor for the JSXBlock class.
     *
     * @param string $name The name of the block.
     * @param callable|null $renderCallback Whether the block should have a server-side render callback.
     * @param array|null $data Additional data to pass to the block.
     */
    function __construct($name, $renderCallback = null, $data = null)
    {
        $this->name = $name;
        $this->renderCallback = $renderCallback;
        $this->data = $data;
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

        // Define the block name without prefix (like 'blocks/')
        $block_name = str_replace('acf/', '', $this->name);

        // Search for the corresponding PHP file in the blocks folder
        $block_path = get_theme_file_path("/blocks/");
        $php_files = glob($block_path . '*/**/' . basename($block_name) . '.php');

        if (!empty($php_files) && file_exists($php_files[0])) {
            // Include the block's PHP file for server-side rendering.
            require $php_files[0];
        } else {
            // Fallback or error handling if PHP file is not found
            echo "Block PHP file for {$block_name} not found.";
        }

        return ob_get_clean();
    }

    /**
     * Registers the block, its associated JavaScript file, and optionally localizes data.
     */
    function onInit()
    {
        // Register the block's script with optional data localization.
        wp_register_script($this->name, get_stylesheet_directory_uri() . "/build/{$this->name}.jsx.js", array('wp-blocks', 'wp-editor'));

        // Localize script if data is provided.
        if ($this->data) {
            wp_localize_script($this->name, $this->name, $this->data);
        }

        // Arguments for registering the block type.
        $ourArgs = array(
            'editor_script' => $this->name,
        );

        // Add render callback if it is provided.
        if ($this->renderCallback) {
            $ourArgs['render_callback'] = [$this, 'ourRenderCallback'];
        }

        // Register the block type.
        register_block_type("basetheme/{$this->name}", $ourArgs);
    }
}

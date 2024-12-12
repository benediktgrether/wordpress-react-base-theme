<?php

if (!isset($attributes['mediaId'])) {
    return;
}

$mediaId = $attributes['mediaId'];
$socialMediaUrl = $attributes['socialMediaUrl'];

// Get the full path of the SVG file
$svgFilePath = get_attached_file($mediaId);

// Check if the file exists and is an SVG
if (file_exists($svgFilePath) && pathinfo($svgFilePath, PATHINFO_EXTENSION) === 'svg') {
    // Get the SVG content
    $svgContent = file_get_contents($svgFilePath);
?>
    <a href="<?php echo esc_url($socialMediaUrl); ?>" target="_blank">
        <span class="footer-icon">
            <?php echo $svgContent; // Output the SVG inline 
            ?>
        </span>
    </a>
<?php
} else {
    echo '<!-- SVG file not found or invalid -->';
}

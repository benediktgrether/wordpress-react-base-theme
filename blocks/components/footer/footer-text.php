<?php
if (!isset($attributes['text'])) {
    $attributes['text'] = '';
}

?>

<?php if (!empty($attributes['text'])) : ?>
    <div class="col-4">
        <div class="footer-text">
            <p class="text-white text-end">
                <?php echo $attributes['text']; ?>
            </p>
        </div>
    </div>
<?php endif; ?>
<?php
// Fetch the latest blog posts
if (!isset($attributes['postType'])) {
    $attributes['postType'] = 'reference';
}

if (!isset($attributes['postPerPage'])) {
    $attributes['postPerPage'] = 6;
}

if (!isset($attributes['orderby'])) {
    $attributes['orderby'] = 'post_date';
}

if (!isset($attributes['order'])) {
    $attributes['order'] = 'desc';
}

// Fetch categories for the buttons with posts in the specified post type
$args = array(
    'post_type' => $attributes['postType'],
    'posts_per_page' => -1, // Retrieve all posts for filtering
);
$query = new WP_Query($args);

$valid_category_ids = array();
if ($query->have_posts()) {
    while ($query->have_posts()) {
        $query->the_post();
        $post_categories = wp_get_post_categories(get_the_ID());
        $valid_category_ids = array_merge($valid_category_ids, $post_categories);
    }
}
wp_reset_postdata();

// Remove duplicates
$valid_category_ids = array_unique($valid_category_ids);

$categories = get_categories(array(
    'taxonomy' => 'category',
    'hide_empty' => true,
    'include' => $valid_category_ids, // Only include categories with posts
));

$selected_category = isset($_GET['category']) ? sanitize_text_field($_GET['category']) : '';
$args = array(
    'post_type' => $attributes['postType'],
    'posts_per_page' => $attributes["postPerPage"],
    'orderby' => $attributes['orderby'],
    'order' => $attributes['order'],
);

if (!empty($selected_category)) {
    $args['category_name'] = $selected_category;
}

$blog_posts = new WP_Query($args);
?>
<div class="bs-reference container mt-6">
    <!-- Filter Buttons -->
    <div class="mb-4">
        <button class="btn btn-primary text-white me-2 filter-button" data-filter data-category="">Alle</button>
        <?php foreach ($categories as $category) : ?>

            <button class="btn btn-outline-primary me-2 filter-button" data-filter data-category="<?php echo esc_attr($category->slug); ?>">
                <?php echo esc_html($category->name); ?>
            </button>

        <?php endforeach; ?>
    </div>

    <!-- Posts List -->
    <div class="row posts-container">
        <?php
        if ($blog_posts->have_posts()) : ?>
            <?php while ($blog_posts->have_posts()) : $blog_posts->the_post(); ?>
                <div class="col-12 col-lg-4 post-item" data-post data-category="<?php echo esc_attr(join(' ', wp_get_post_categories(get_the_ID(), array('fields' => 'slugs')))); ?>">
                    <div class="position-relative reference-wrapper">
                        <div class="reference-image">
                            <img src="<?php echo get_the_post_thumbnail_url(); ?>" alt="<?php the_title(); ?>" class="blog-post-image">
                        </div>
                        <div class="position-absolute bottom-0 start-0 end-0 p-3 reference-content">
                            <h3 class="text-white"><?php the_title(); ?></h3>
                        </div>
                    </div>
                </div>
            <?php endwhile; ?>
            <?php wp_reset_postdata(); ?>
        <?php else : ?>
            <p><?php esc_html_e('No posts found.', 'text-domain'); ?></p>
        <?php endif; ?>
    </div>
</div>
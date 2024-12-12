<?php
// Fetch the latest blog posts
if (!isset($attributes['postType'])) {
    $attributes['postType'] = 'post';
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

$args = array(
    'post_type' => $attributes['postType'],
    'posts_per_page' => $attributes["postPerPage"],
    'orderby' => $attributes['orderby'],
    'order' => $attributes['order']
);

$blog_posts = new WP_Query($args);

?>
<div class="bs-blog-post container mt-6">
    <div class="row">
        <?php
        if ($blog_posts->have_posts()) : ?>
            <?php while ($blog_posts->have_posts()) : $blog_posts->the_post(); ?>
                <div class="col-12 col-lg-4">
                    <div class="bg-white shadow-lg">
                        <img src="<?php echo get_the_post_thumbnail_url(); ?>" alt="<?php the_title(); ?>" class="blog-post-image">
                        <div class="p-4">
                            <h2 class=" fs-32"><?php the_title(); ?></h2>
                            <p><?php the_excerpt(); ?></p>
                            <a href="<?php the_permalink(); ?>" class="btn btn-primary">Read more</a>
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
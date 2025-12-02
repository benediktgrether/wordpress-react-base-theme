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

<div class="container mx-auto mt-6 px-4">
    <div class="flex flex-wrap -mx-2">
        <?php if ($blog_posts->have_posts()) : ?>
            <?php while ($blog_posts->have_posts()) : $blog_posts->the_post(); ?>
                <div class="w-full md:w-1/2 lg:w-1/3 px-2 mb-6">
                    <div class="bg-white shadow-lg rounded-lg overflow-hidden">
                        <?php if (has_post_thumbnail()) : ?>
                            <img src="<?php echo get_the_post_thumbnail_url(); ?>" alt="<?php the_title(); ?>" class="w-full h-56 object-cover">
                        <?php endif; ?>
                        <div class="p-4">
                            <h2 class="text-2xl font-semibold mb-2"><?php the_title(); ?></h2>
                            <p class="text-gray-600 mb-4"><?php the_excerpt(); ?></p>
                            <a href="<?php the_permalink(); ?>" class="inline-block bg-primary-default hover:bg-primary-hover mt-4 text-white font-medium py-2 px-4 rounded transition-colors duration-300 no-underline">
                                Read more
                            </a>
                        </div>
                    </div>
                </div>
            <?php endwhile; ?>
            <?php wp_reset_postdata(); ?>
        <?php else : ?>
            <p class="text-gray-600"><?php esc_html_e('No posts found.', 'text-domain'); ?></p>
        <?php endif; ?>
    </div>
</div>
<?php

namespace basetheme\Utilities;

class Render_Navigation
{
    public static function render_navigation(
        $navigation,
        $mediaId
    ) {
?>

        <!-- SVG Sprite -->

        <svg class="d-none">
            <symbol id="icon-login" width="12" height="16" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.50702 7.62618C8.86127 7.07644 9.80264 5.87435 9.80264 4.47435C9.80264 2.56126 8.05202 1 5.88852 1C3.72502 1 1.99092 2.55393 1.99092 4.47435C1.99092 5.90367 2.97358 7.13508 4.36912 7.66283C2.41206 8.26387 1 9.91309 1 11.8555V14.7361C1 14.8827 1.13212 15 1.29728 15H10.7027C10.8679 15 11 14.8827 11 14.7361V11.8555C11 9.87644 9.5384 8.19791 7.52353 7.62618H7.50702ZM5.89678 7.41361C4.07184 7.41361 2.57721 6.09424 2.57721 4.46702C2.57721 2.83979 4.07184 1.52775 5.89678 1.52775C7.72172 1.52775 9.21635 2.84712 9.21635 4.47435C9.21635 6.10157 7.72998 7.42094 5.89678 7.42094V7.41361ZM5.98761 7.94136C8.41536 7.94136 10.3889 9.69319 10.3889 11.8482V14.4649H1.58629V11.8482C1.58629 9.69319 3.55987 7.94136 5.98761 7.94136Z" fill="#FFF8F3" stroke="white" stroke-width="0.5" />
            </symbol>

        </svg>

        <!-- End SVG Sprite -->

        <header class="sticky-top">
            <nav class="navbar navbar-expand-lg bg-primary">
                <div class="container">
                    <a class="navbar-brand" href=" /" aria-label="Zur Startseite gehen">
                        <?php echo wp_get_attachment_image(
                            $mediaId,
                            "",
                            "",
                            [
                                "class" => "header-navigation-logo"
                            ]
                        );
                        ?>
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul class="navbar-nav ">
                            <?php
                            foreach ($navigation as $item) {
                                self::render_navigation_item($item);
                            }
                            ?>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    <?php
    }

    public static function render_navigation_item($item)
    {
        $has_children = !empty($item['children']);
        $current_url = home_url(add_query_arg(null, null)); // Get the current URL

        // Check if the current item or any of its children is active
        $is_active = self::is_active($item, $current_url);

    ?>
        <li class="nav-item <?php echo $has_children ? 'dropdown' : ''; ?> <?php echo $is_active ? 'active' : ''; ?>">
            <?php if ($has_children): ?>
                <button class="nav-link dropdown-toggle <?php echo $is_active ? 'active' : ''; ?>" id="navbarDropdown<?php echo esc_attr($item['title']); ?>" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <?php echo esc_html($item['title']); ?>
                </button>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown<?php echo esc_attr($item['title']); ?>">
                    <?php foreach ($item['children'] as $child): ?>
                        <li><a class="dropdown-item <?php echo self::is_active($child, $current_url) ? 'active' : ''; ?>" href="<?php echo esc_url($child['href']); ?>"><?php echo esc_html($child['title']); ?></a></li>
                    <?php endforeach; ?>
                </ul>
            <?php else: ?>
                <a class="nav-link <?php echo $is_active ? 'active' : ''; ?>" href="<?php echo esc_url($item['href']); ?>">
                    <?php echo esc_html($item['title']); ?>
                </a>
            <?php endif; ?>
        </li>
<?php
    }

    private static function is_active($item, $current_url)
    {
        // Check if the current item is active
        if (trailingslashit($item['href']) === trailingslashit($current_url)) {
            return true;
        }

        // Check if any of the children are active
        if (!empty($item['children'])) {
            foreach ($item['children'] as $child) {
                if (self::is_active($child, $current_url)) {
                    return true;
                }
            }
        }

        return false;
    }
}

<?php
$ref = $content;


function get_footer_navigation_links($ref)
{
    $response = wp_remote_get(home_url('/wp-json/wp/v2/navigation'));

    if (is_wp_error($response)) {
        return 'Navigation could not be loaded.';
    }

    $navigation_data = json_decode(wp_remote_retrieve_body($response));

    $all_links = [];

    foreach ($navigation_data as $item) {
        if ($item->id === (int) $ref) {
            $dom = new DOMDocument();

            // Ensure the content is treated as UTF-8
            $html_content = mb_convert_encoding($item->content->rendered, 'HTML-ENTITIES', 'UTF-8');
            @$dom->loadHTML($html_content);

            $all_links = parse_navigation_items($dom);
        }
    }

    return $all_links;
}

function parse_navigation_items($dom)
{
    $items = [];
    $xpath = new DOMXPath($dom);

    // Select all <li> elements in the document, not limited to those inside <ul>
    $li_elements = $xpath->query('//li');

    foreach ($li_elements as $node) {
        $link_element = $node->getElementsByTagName('a')->item(0);

        // Check if the <li> element has no parent <li> before adding it to items
        if ($link_element && !$xpath->query('ancestor::li', $node)->length) {
            $item = [
                'href'  => $link_element->getAttribute('href'),
                'title' => $link_element->textContent,
            ];

            $items[] = $item;
        }
    }

    return $items;
}

$footer_links = get_footer_navigation_links($ref);

?>

<div class="col-4">
    <div class="d-flex justify-content-between flex-col text-white">
        <?php foreach ($footer_links as $link): ?>
            <a href="<?php echo $link['href']; ?>" class="footer-link-hover link-white fw-light font-family-footer text-center text-lg-start">
                <?php echo $link['title']; ?>
            </a>
        <?php endforeach; ?>
    </div>
</div>
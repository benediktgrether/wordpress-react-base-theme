<?php

namespace basetheme\Utilities;

use DOMDocument;
use DOMXPath;

$ref = $content;

if (!isset($attributes["mediaId"])) {
    $attributes["mediaId"] = 0;
}
$mediaId = $attributes["mediaId"];


function get_nested_navigation_links($ref)
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
                'children' => []
            ];

            // Check if this <li> has a nested <ul> for child items
            $child_ul = $node->getElementsByTagName('ul')->item(0);
            if ($child_ul) {
                $item['children'] = parse_nested_items($child_ul);
            }

            $items[] = $item;
        }
    }

    return $items;
}

// Helper function to parse nested items within a <ul>
function parse_nested_items($ul_element)
{
    $children = [];
    foreach ($ul_element->getElementsByTagName('li') as $child_li) {
        $child_link = $child_li->getElementsByTagName('a')->item(0);

        if ($child_link) {
            $child_item = [
                'href'  => $child_link->getAttribute('href'),
                'title' => $child_link->textContent,
                'children' => []
            ];

            $sub_ul = $child_li->getElementsByTagName('ul')->item(0);
            if ($sub_ul) {
                $child_item['children'] = parse_nested_items($sub_ul);
            }

            $children[] = $child_item;
        }
    }
    return $children;
}


$nested_navigation_links = get_nested_navigation_links($ref);
Render_Navigation::render_navigation($nested_navigation_links, $mediaId);

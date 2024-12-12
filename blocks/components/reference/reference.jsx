import { useSelect } from '@wordpress/data';
import { store as coreStore } from '@wordpress/core-data';
import { registerBlockType } from '@wordpress/blocks';
import { layout } from '@wordpress/icons';
import { InspectorControls } from '@wordpress/block-editor';
import {
    PanelBody,
    PanelRow,
    SelectControl,
    TextControl,
} from '@wordpress/components';
registerBlockType('basetheme/reference', {
    title: 'Referenzen',
    icon: layout,
    category: 'layout',
    parent: ['basetheme/container'],
    description: 'A Description',
    keywords: '[]',
    supports: {},
    attributes: {
        postType: {
            type: 'string',
            default: 'reference',
        },
        postPerPage: {
            type: 'number',
            default: 6,
        },
        orderby: {
            type: 'string',
            default: 'post_date',
        },
        oder: {
            type: 'string',
            default: 'desc',
        },
    },

    edit: EditComponent,
    save: () => null,
});

function EditComponent(props) {
    const { attributes, setAttributes } = props;

    // postType defined in block.json
    const { postType } = attributes;

    // useSelect to retrieve all post types
    const postTypes = useSelect(
        (select) => select(coreStore).getPostTypes({ per_page: -1 }),
        []
    );

    // Options expects [{label: ..., value: ...}]
    const postTypeOptions = !Array.isArray(postTypes)
        ? postTypes
        : postTypes
              .filter(
                  // Filter out internal WP post types eg: wp_block, wp_navigation, wp_template, wp_template_part..
                  (type) => type.viewable === true
              )
              .map(
                  // Format the options for display in the <SelectControl/>
                  (type) => ({
                      label: type.labels.singular_name,
                      value: type.slug, // the value saved as postType in attributes
                  })
              );

    // TODO: How to get back all post types of the page?

    return (
        <>
            <InspectorControls>
                <PanelBody title="Blog Post Settings">
                    <PanelRow>
                        <SelectControl
                            label="Select a Post Type"
                            value={postType}
                            options={postTypeOptions}
                            onChange={(value) =>
                                setAttributes({ postType: value })
                            }
                        />
                    </PanelRow>
                    <PanelRow>
                        <TextControl
                            label="Posts per Page"
                            value={attributes.postPerPage}
                            onChange={(value) =>
                                setAttributes({ postPerPage: value })
                            }
                        />
                    </PanelRow>
                    <PanelRow>
                        <SelectControl
                            label="Order By"
                            value={attributes.orderby}
                            options={[
                                { label: 'Date', value: 'post_date' },
                                { label: 'Title', value: 'post_title' },
                                { label: 'Menu Order', value: 'menu_order' },
                                {
                                    label: 'Last Modified',
                                    value: 'modified',
                                },
                                {
                                    label: 'Comment Count',
                                    value: 'comment_count',
                                },
                                { label: 'Random', value: 'rand' },
                            ]}
                            onChange={(value) =>
                                setAttributes({ orderby: value })
                            }
                        />
                    </PanelRow>
                    <PanelRow>
                        <SelectControl
                            label="Order"
                            value={attributes.order}
                            options={[
                                { label: 'Ascending', value: 'asc' },
                                { label: 'Descending', value: 'desc' },
                            ]}
                            onChange={(value) =>
                                setAttributes({ order: value })
                            }
                        />
                    </PanelRow>
                </PanelBody>
            </InspectorControls>

            <div className="blog-post">
                <h2>Referenz Post</h2>
                <p className="alert alert-warning">
                    Post Types werden im Backend zurzeit nicht angezeigt.
                </p>
            </div>
        </>
    );
}

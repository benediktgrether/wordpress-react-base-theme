import { registerBlockType } from '@wordpress/blocks';
import {
    InspectorControls,
    InnerBlocks,
    useBlockProps,
} from '@wordpress/block-editor';
import { PanelBody, PanelRow, SelectControl } from '@wordpress/components';
import { layout } from '@wordpress/icons';

registerBlockType('everydayblocktheme/grid-item', {
    title: 'Grid Item',
    icon: layout,
    category: 'layout',
    description: 'A Description',
    keywords: '[]',
    supports: {},
    attributes: {
        columnsWdith: {
            type: 'string',
            default: '1/2',
        },
    },

    edit: EditComponent,
    save: SaveComponent,
});

function EditComponent(props) {
    const { attributes, setAttributes } = props;

    const allowedBlocks = [
        'everydayblocktheme/text',
        'everydayblocktheme/heading',
        'everydayblocktheme/image',
        'core/list',
        'everydayblocktheme/list',
        'everydayblocktheme/button',
        'everydayblocktheme/testimonial',
        'everydayblocktheme/calendar',
        'contact-form-7/contact-form-selector',
    ];

    return (
        <>
            <InspectorControls>
                <PanelBody title="Container Row Settings">
                    <PanelRow>
                        <SelectControl
                            label="Columns Width"
                            value={attributes.columnsWdith}
                            options={[
                                { label: '1/2', value: '1/2' },
                                { label: '1/3', value: '1/3' },
                                { label: '1/4', value: '1/4' },
                                { label: '2/5', value: '2/5' },
                                { label: '2/3', value: '2/3' },
                                { label: '3/4', value: '3/4' },
                            ]}
                            onChange={(columnsWdith) =>
                                setAttributes({ columnsWdith })
                            }
                        />
                    </PanelRow>
                </PanelBody>
            </InspectorControls>
            <div className={`grid-item-${attributes.columnsWdith}`}>
                <div className="border border-light p-2">
                    <InnerBlocks
                        allowedBlocks={allowedBlocks}
                        renderAppender={InnerBlocks.ButtonBlockAppender}
                    />
                </div>
            </div>
        </>
    );
}

function SaveComponent() {
    return <InnerBlocks.Content />;
}

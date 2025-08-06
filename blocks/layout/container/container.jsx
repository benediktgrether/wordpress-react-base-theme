import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks, InspectorControls } from '@wordpress/block-editor';
import { color, file } from '@wordpress/icons';

import {
    SpacerSettings,
    defaultSpacerAttributes,
    spacerClass,
} from '../../configuration/spacer/spacer';

import { ColorSettings } from '../../configuration/color/colors';

registerBlockType('basetheme/container', {
    title: 'Container',
    icon: file,
    category: 'layout',
    description: 'A container block',
    keywords: ['container', 'content', 'wrap'],
    supports: {},
    attributes: {
        ...defaultSpacerAttributes,
        colorName: { type: 'string', default: 'white' },
    },

    edit: EditComponent,
    save: SaveComponent,
});

function EditComponent(props) {
    const { attributes, setAttributes } = props;

    let bgColor;
    switch (attributes.colorName) {
        case 'primary':
            bgColor = 'bg-primary py-8';
            break;
        case 'secondary':
            bgColor = 'bg-secondary py-8';
            break;
        case 'black':
            bgColor = 'bg-black py-8';
            break;
        case 'white':
            bgColor = 'bg-white';
            break;
        case 'gray':
            bgColor = 'bg-gray-500 py-8';
            break;
        default:
            bgColor = 'bg-primary py-8';
    }

    const ALLOWED_BLOCKS = [
        'basetheme/heading',
        'basetheme/text',
        // 'basetheme/list',
        // 'basetheme/testimonial',
        'basetheme/button',
        'basetheme/blog-post',
        // 'basetheme/googlemaps',
        'basetheme/reference',
        'basetheme/accordion-container',
        'contact-form-7/contact-form-selector',
    ];
    return (
        <>
            <InspectorControls>
                <SpacerSettings
                    title="Container Settings"
                    attributes={attributes}
                    setAttributes={setAttributes}
                />
                <ColorSettings
                    title="Color Settings"
                    attributes={attributes}
                    setAttributes={setAttributes}
                />
            </InspectorControls>
            <div className={`my-4 ${bgColor}`}>
                <div className={`container ${spacerClass(attributes.spacer)}`}>
                    <div className="row">
                        <div className="border border-indigo-600 p-2">
                            <InnerBlocks allowedBlocks={ALLOWED_BLOCKS} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

function SaveComponent() {
    return <InnerBlocks.Content />;
}

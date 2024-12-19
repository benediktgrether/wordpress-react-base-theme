import { registerBlockType } from '@wordpress/blocks';
import {
    InnerBlocks,
    InspectorControls,
    useInnerBlocksProps,
    useBlockProps,
} from '@wordpress/block-editor';

import { row } from '@wordpress/icons';

import {
    SpacerSettings,
    defaultSpacerAttributes,
    spacerClass,
} from '../../configuration/spacer/spacer';

import { ColorSettings } from '../../configuration/color/colors';

registerBlockType('basetheme/grid-container', {
    title: 'Grid Container',
    icon: row,
    category: 'layout',
    description: 'A Description',
    keywords: '[]',
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

    const blockProps = useBlockProps({
        className: 'grid-row-wrapper',
    });

    const allowedBlocks = ['basetheme/grid-item'];
    const template = [['basetheme/grid-item'], ['basetheme/grid-item']];

    const innerBlocksProps = useInnerBlocksProps(
        {
            className: 'grid-row',
            style: {
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'flex-start', // Align to top
            },
        },
        {
            allowedBlocks,
            template,
            templateLock: false,
            // renderAppender: InnerBlocks.ButtonBlockAppender,
        }
    );

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
                <div className={`${spacerClass(attributes.spacer)}`}>
                    <div className="border border-light p-2">
                        <div className="container">
                            <div {...blockProps}>
                                <div {...innerBlocksProps} />
                            </div>
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

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

registerBlockType('everydayblocktheme/grid-container', {
    title: 'Grid Container',
    icon: row,
    category: 'layout',
    description: 'A Description',
    keywords: '[]',
    supports: {},

    attributes: {
        ...defaultSpacerAttributes,
    },

    edit: EditComponent,
    save: SaveComponent,
});

function EditComponent(props) {
    const { attributes, setAttributes } = props;
    const blockProps = useBlockProps({
        className: 'grid-row-wrapper',
    });

    const allowedBlocks = ['everydayblocktheme/grid-item'];
    const template = [
        ['everydayblocktheme/grid-item'],
        ['everydayblocktheme/grid-item'],
    ];

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
            </InspectorControls>

            <div className="my-4">
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

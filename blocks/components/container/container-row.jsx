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

registerBlockType('everydayblocktheme/container-row', {
    title: 'Container Row',
    icon: row,
    category: 'layout',
    description: 'A Description',
    keywords: '[]',
    supports: {
        layout: {
            allowEditing: false,
            default: {
                type: 'flex',
                flexWrap: 'nowrap',
            },
        },
    },

    attributes: {
        ...defaultSpacerAttributes,
    },

    edit: EditComponent,
    save: SaveComponent,
});

function EditComponent(props) {
    const { attributes, setAttributes } = props;
    const blockProps = useBlockProps({
        className: 'container-row-wrapper',
    });

    const allowedBlocks = ['everydayblocktheme/container-item'];
    const template = [
        ['everydayblocktheme/container-item'],
        ['everydayblocktheme/container-item'],
    ];

    const innerBlocksProps = useInnerBlocksProps(
        { className: 'container-row' },
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

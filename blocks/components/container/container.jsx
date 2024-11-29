import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks, InspectorControls } from '@wordpress/block-editor';
import { icon } from '../../configuration/icon/icons';

import {
    SpacerSettings,
    defaultSpacerAttributes,
    spacerClass,
} from '../../configuration/spacer/spacer';

registerBlockType('everydayblocktheme/container', {
    title: 'Container',
    icon: icon.container,
    category: 'layout',
    description: 'A container block',
    keywords: ['container', 'content', 'wrap'],
    supports: {},
    attributes: {
        ...defaultSpacerAttributes,
    },

    edit: EditComponent,
    save: SaveComponent,
});

function EditComponent(props) {
    const { attributes, setAttributes } = props;

    const ALLOWED_BLOCKS = [
        'everydayblocktheme/heading',
        'everydayblocktheme/text',
        'everydayblocktheme/list',
        'everydayblocktheme/testimonial',
        'everydayblocktheme/button',
        'everydayblocktheme/googlemaps',
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
            </InspectorControls>
            <div className="my-4">
                <div className={`container ${spacerClass(attributes.spacer)}`}>
                    <div className="row">
                        <div className="border border-light p-2">
                            <InnerBlocks
                                allowedBlocks={ALLOWED_BLOCKS}
                                renderAppender={InnerBlocks.ButtonBlockAppender}
                            />
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

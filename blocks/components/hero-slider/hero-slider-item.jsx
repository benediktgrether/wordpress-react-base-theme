import { registerBlockType } from '@wordpress/blocks';

import { InnerBlocks, InspectorControls } from '@wordpress/block-editor';
import {
    Image,
    ImageSettings,
    getDefaultImageAttributes,
} from '../../utilities/image/image';
import { icon } from '../../configuration/icon/icons';

const imageSizeOptions = [
    { value: 'pageBanner', label: 'Banner' },
    { value: 'full', label: 'Full' },
    { value: 'medium', label: 'Medium' },
];

registerBlockType('everydayblocktheme/hero-slider-item', {
    title: 'Hero Slide Item',
    icon: icon.heroSlideItem,
    parent: ['everydayblocktheme/heroslider'],
    supports: {},
    attributes: {
        ...getDefaultImageAttributes,
    },
    edit: EditComponent,
    save: SaveComponent,
});

function EditComponent(props) {
    const { attributes, setAttributes } = props;

    return (
        <>
            <InspectorControls>
                <ImageSettings
                    attributes={attributes}
                    setAttributes={setAttributes}
                    imageSizeOptions={imageSizeOptions}
                />
            </InspectorControls>

            <div className="ratio ratio-16x9">
                <Image mediaUrl={attributes.mediaUrl} />
            </div>
        </>
    );
}

function SaveComponent() {
    return <InnerBlocks.Content />;
}

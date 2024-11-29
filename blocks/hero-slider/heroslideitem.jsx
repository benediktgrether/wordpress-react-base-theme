import { registerBlockType } from '@wordpress/blocks';

import { InnerBlocks, InspectorControls } from '@wordpress/block-editor';
import {
    ImageComponent,
    getDefaultImageAttributes,
} from '../../utilities/image/image-component';
import { icon } from '../../configuration/icon/icons';

const imageSizeOptions = [
    { value: 'pageBanner', label: 'Banner' },
    { value: 'full', label: 'Full' },
    { value: 'medium', label: 'Medium' },
];

registerBlockType('everydayblocktheme/heroslideitem', {
    title: 'Hero Slide Item',
    icon: icon.heroSlideItem,
    parent: ['everydayblocktheme/heroslider'],
    supports: {},
    attributes: {
        ...getDefaultImageAttributes(heroslideitem),
    },
    edit: EditComponent,
    save: SaveComponent,
});

function EditComponent(props) {
    const { attributes, setAttributes } = props;

    return (
        <>
            <InspectorControls>
                <ImageComponent
                    attributes={attributes}
                    setAttributes={setAttributes}
                    imageSizeOptions={imageSizeOptions}
                />
            </InspectorControls>

            <div className="ratio ratio-16x9">
                <img
                    className="img-fluid object-fit-cover"
                    src={attributes.mediaUrl}
                    alt="Selected Image"
                />
            </div>
        </>
    );
}

function SaveComponent() {
    return <InnerBlocks.Content />;
}

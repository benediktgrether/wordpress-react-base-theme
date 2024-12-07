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

registerBlockType('everydayblocktheme/image', {
    title: 'Image',
    icon: icon.image,
    supports: {},
    attributes: {
        ...getDefaultImageAttributes('image'),
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

            <Image mediaUrl={attributes.mediaUrl} />
        </>
    );
}

function SaveComponent() {
    return <InnerBlocks.Content />;
}

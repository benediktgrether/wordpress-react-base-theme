import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks, InspectorControls } from '@wordpress/block-editor';
import {
    Image,
    ImageSettings,
    getDefaultImageAttributes,
} from '../../utilities/image/image';
import { image } from '@wordpress/icons';

const imageSizeOptions = [
    { value: 'pageBanner', label: 'Banner' },
    { value: 'full', label: 'Full' },
    { value: 'medium', label: 'Medium' },
];

registerBlockType('basetheme/image', {
    title: 'Image',
    icon: image,
    parent: ['basetheme/grid-item', 'basetheme/container'],
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

            <Image mediaUrl={attributes.mediaUrl} />
        </>
    );
}

function SaveComponent() {
    return <InnerBlocks.Content />;
}

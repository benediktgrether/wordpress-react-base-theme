//https://wordpress.github.io/gutenberg/?path=/story/icons-icon--library
import { registerBlockType } from '@wordpress/blocks';
import { layout } from '@wordpress/icons';
import { InspectorControls } from '@wordpress/block-editor';

import {
    Image,
    ImageSettings,
    getDefaultImageAttributes,
} from '../../utilities/image/image';

const imageSizeOptions = [
    { value: 'pageBanner', label: 'Banner' },
    { value: 'full', label: 'Full' },
    { value: 'medium', label: 'Medium' },
];

registerBlockType('basetheme/logo-swiper-item', {
    title: 'Logo-swiper-item',
    icon: layout,
    category: 'layout',
    parent: ['basetheme/logo-swiper-container'],
    description: 'A Description',
    keywords: '[]',
    supports: {},
    attributes: {
        ...getDefaultImageAttributes,
    },

    edit: EditComponent,
    save: () => null,
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
            <div className="container-item-1/4 logo-swiper-item-backend">
                <Image mediaUrl={attributes.mediaUrl} />
            </div>
        </>
    );
}

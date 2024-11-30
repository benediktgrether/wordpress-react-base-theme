//https://wordpress.github.io/gutenberg/?path=/story/icons-icon--library
import { registerBlockType } from '@wordpress/blocks';
import { layout } from '@wordpress/icons';
import { InspectorControls, RichText } from '@wordpress/block-editor';

import {
    ImageSettings,
    getDefaultImageAttributes,
} from '../../utilities/image/image-component';

const imageSizeOptions = [
    { value: 'pageBanner', label: 'Banner' },
    { value: 'full', label: 'Full' },
    { value: 'medium', label: 'Medium' },
];

registerBlockType('everydayblocktheme/imageswiperitem', {
    title: 'Image Swiper Item',
    icon: layout,
    category: 'layout',
    description: 'A Description',
    keywords: '[]',
    supports: {},
    attributes: {
        ...getDefaultImageAttributes(imageswiperitem),
        title: {
            type: 'string',
            default: '',
        },
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

            <div className="position-relative">
                <div className="ratio ratio-16x9">
                    <img
                        className="img-fluid object-fit-cover"
                        src={attributes.mediaUrl}
                        alt="Selected Image"
                    />
                </div>
                <div className="position-absolute w-100 top-50 start-50 translate-middle z-1">
                    <RichText
                        value={attributes.title}
                        onChange={(title) => setAttributes({ title })}
                        placeholder="Title"
                        className="fs-72 fw-bold text-white border border-light p-2 text-center"
                    />
                </div>
            </div>
        </>
    );
}

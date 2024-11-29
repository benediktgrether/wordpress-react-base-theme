//https://wordpress.github.io/gutenberg/?path=/story/icons-icon--library
import { registerBlockType } from '@wordpress/blocks';
import { postFeaturedImage } from '@wordpress/icons';

import {
    ImageComponent,
    getDefaultImageAttributes,
} from '../../utilities/image/image-component';

import { InspectorControls, RichText } from '@wordpress/block-editor';

const imageSizeOptions = [
    { value: 'pageBanner', label: 'Banner' },
    { value: 'full', label: 'Full' },
    { value: 'medium', label: 'Medium' },
];

registerBlockType('everydayblocktheme/herocontainer', {
    title: 'Hero Container',
    icon: postFeaturedImage,
    category: 'layout',
    description: 'A Description',
    keywords: '[]',
    supports: {},
    attributes: {
        ...getDefaultImageAttributes(herocontainer),
        title: {
            type: 'string',
            default: '',
        },
        loading: { type: 'boolean', default: false },
    },

    edit: EditComponent,
    save: () => null,
});

// TODO:
// Hero Container include Image and Heading
// Should Hero Container use InnerBlocks or Import directly?

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
            <div className="position-relative">
                <img
                    className="hero-image object-fit-cover"
                    src={attributes.mediaUrl}
                    alt="Selected Image"
                />
                <div className="position-absolute bottom-0">
                    <RichText
                        value={attributes.title}
                        onChange={(title) => setAttributes({ title })}
                        placeholder="Osiris"
                        className="fs-72 hero-title fw-bold border border-light p-2 text-white"
                    />
                </div>
            </div>
        </>
    );
}

import { registerBlockType } from '@wordpress/blocks';
import { InspectorControls } from '@wordpress/block-editor';

import { PanelBody, PanelRow, TextControl } from '@wordpress/components';

import { image } from '@wordpress/icons';
import {
    Image,
    ImageSettings,
    getDefaultImageAttributes,
} from '@utilities/image/image';

registerBlockType('basetheme/footer-social-media-icon', {
    title: 'Footer-social-media-icon',
    icon: image,
    parent: ['basetheme/footer-social-media-container'],
    attributes: {
        ...getDefaultImageAttributes,
        socialMediaUrl: {
            type: 'string',
            default: '',
        },
    },
    edit: EditComponent,
    save: () => null,
});

const imageSizeOptions = [
    { value: 'pageBanner', label: 'Banner' },
    { value: 'full', label: 'Full' },
    { value: 'medium', label: 'Medium' },
    { value: 'partnerLogo', label: 'Partner Logo' },
];

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
                <PanelBody title="Social Media Icon">
                    <PanelRow>
                        <TextControl
                            label="Social Media URL"
                            value={attributes.socialMediaUrl}
                            onChange={(socialMediaUrl) =>
                                setAttributes({ socialMediaUrl })
                            }
                        />
                    </PanelRow>
                </PanelBody>
            </InspectorControls>

            <div className="footer-social-media-icon">
                <Image mediaUrl={attributes.mediaUrl} alt="Upload Image" />
            </div>
        </>
    );
}

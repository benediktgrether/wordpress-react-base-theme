import { registerBlockType } from '@wordpress/blocks';
import { InspectorControls } from '@wordpress/block-editor';
import { image } from '@wordpress/icons';
import {
    Image,
    ImageSettings,
    getDefaultImageAttributes,
} from '../../utilities/image/image';

import {
    SpacerSettings,
    defaultSpacerAttributes,
    spacerClass,
} from '../../configuration/spacer/spacer';

registerBlockType('basetheme/big-teaser', {
    title: 'Big-teaser',
    icon: image,
    supports: {},
    attributes: {
        ...getDefaultImageAttributes,
        spacer: {
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
                <SpacerSettings
                    title="Container Settings"
                    attributes={{
                        spacer: attributes.spacer,
                    }}
                    setAttributes={(newAttributes) =>
                        setAttributes({
                            spacer: newAttributes.spacer,
                        })
                    }
                />
                <ImageSettings
                    attributes={attributes}
                    setAttributes={setAttributes}
                    imageSizeOptions={imageSizeOptions}
                />
            </InspectorControls>
            <div className={`big-teaser ${spacerClass(attributes.spacer)}`}>
                <Image
                    mediaUrl={attributes.mediaUrl}
                    alt="Upload Image"
                    variant="cover"
                />
            </div>
        </>
    );
}

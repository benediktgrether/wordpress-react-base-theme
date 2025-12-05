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

import { Text, defaultTextAttributes } from '../../utilities/text/text';
import { Button, defaultButtonAttributes } from '../../utilities/button/button';

registerBlockType('basetheme/big-teaser', {
    title: 'Big-teaser',
    icon: image,
    supports: {},
    attributes: {
        ...getDefaultImageAttributes,
        ...defaultTextAttributes,
        ...defaultButtonAttributes,
        subtitle: {
            type: 'string',
            default: 'Subtitle',
        },
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
                <div className="relative">
                    <Image
                        mediaUrl={attributes.mediaUrl}
                        alt="Upload Image"
                        variant="cover"
                    />

                    {/* Gradient + Text Container */}
                    <div
                        className="absolute bottom-0 left-0 w-full pb-24 
                        bg-gradient-to-t from-black/80 to-transparent"
                    >
                        <div className="container mx-auto">
                            <Text
                                attributes={attributes}
                                setAttributes={setAttributes}
                                className="text-white text-4xl"
                            />
                            <Text
                                attributes={{ text: attributes.subtitle }}
                                setAttributes={(newAttributes) =>
                                    setAttributes({
                                        subtitle: newAttributes.text,
                                    })
                                }
                                className="text-white text-lg mt-2"
                            />
                            <div className="mt-8">
                                <Button
                                    attributes={attributes}
                                    setAttributes={setAttributes}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

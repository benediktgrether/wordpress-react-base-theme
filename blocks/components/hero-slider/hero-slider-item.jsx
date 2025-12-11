import { registerBlockType } from '@wordpress/blocks';

import { InnerBlocks, InspectorControls } from '@wordpress/block-editor';
import {
    Image,
    ImageSettings,
    getDefaultImageAttributes,
} from '../../utilities/image/image';
import { icon } from '../../configuration/icon/icons';

import { Text, defaultTextAttributes } from '../../utilities/text/text';
import { Button, defaultButtonAttributes } from '../../utilities/button/button';

const imageSizeOptions = [
    { value: 'pageBanner', label: 'Banner' },
    { value: 'full', label: 'Full' },
    { value: 'medium', label: 'Medium' },
];

registerBlockType('basetheme/hero-slider-item', {
    title: 'Hero Slide Item',
    icon: icon.heroSlideItem,
    parent: ['basetheme/hero-slider'],
    supports: {},
    attributes: {
        ...getDefaultImageAttributes,
        ...defaultTextAttributes,
        ...defaultButtonAttributes,
        subtitle: {
            type: 'string',
            default: 'Subtitle',
        },
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
            <div className="hero-slider">
                <div className="relative h-full">
                    <div className="image-backdrop h-full">
                        <Image mediaUrl={attributes.mediaUrl} variant="cover" />
                    </div>
                    <div className="absolute inset-0 bg-black/50"></div>
                    <div className="absolute w-full z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <div className="container mx-auto">
                            <div className="flex flex-wrap -mx-2">
                                <div className="w-full md:w-1/2 px-2">
                                    <Text
                                        attributes={attributes}
                                        setAttributes={setAttributes}
                                        className="text-white text-[72px]"
                                    />
                                    <Text
                                        attributes={{
                                            text: attributes.subtitle,
                                        }}
                                        setAttributes={(newAttributes) => {
                                            setAttributes({
                                                subtitle: newAttributes.text,
                                            });
                                        }}
                                        className="text-white text-2xl"
                                    />

                                    <div className="flex">
                                        <Button
                                            attributes={attributes}
                                            setAttributes={setAttributes}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

function SaveComponent() {
    return <InnerBlocks.Content />;
}

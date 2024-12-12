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
                <div className="position-relative h-100">
                    <div className="image-backdrop h-100">
                        <Image mediaUrl={attributes.mediaUrl} variant="cover" />
                    </div>
                    <div className="position-absolute w-100 z-1 top-50 start-50 translate-middle">
                        <div className="container">
                            <div className="row">
                                <div className="col-6">
                                    <Text
                                        attributes={attributes}
                                        setAttributes={setAttributes}
                                        className="text-white fs-72"
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
                                        className="text-white fs-24"
                                    />
                                    <div className="d-flex">
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

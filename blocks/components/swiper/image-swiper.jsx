//https://wordpress.github.io/gutenberg/?path=/story/icons-icon--library
import { registerBlockType } from '@wordpress/blocks';
import { layout } from '@wordpress/icons';

import { InnerBlocks, InspectorControls } from '@wordpress/block-editor';
import {
    SwiperSettings,
    defaultSwiperAttributes,
} from '../../utilities/swiper/swiper-settings';

import {
    SpacerSettings,
    defaultSpacerAttributes,
    spacerClass,
} from '../../configuration/spacer/spacer';

import { useEffect } from '@wordpress/element';
import { v4 as uuidv4 } from 'uuid';

registerBlockType('basetheme/image-swiper', {
    title: 'Image Swiper',
    icon: layout,
    category: 'layout',
    description: 'A Description',
    keywords: '[]',
    supports: {},
    attributes: {
        align: { type: 'string', default: 'full' },
        uuid: {
            type: 'string',
            default: '',
        },
        ...defaultSwiperAttributes,
        ...defaultSpacerAttributes,
    },

    edit: EditComponent,
    save: SaveComponent,
});

function EditComponent(props) {
    const { attributes, setAttributes } = props;

    useEffect(() => {
        if (!attributes.uuid) {
            setAttributes({ uuid: uuidv4() });
        }
    }, []);

    const BLOCKS_TEMPLATE = [['basetheme/image-swiper-item']];

    return (
        <>
            <InspectorControls>
                <SwiperSettings
                    title="Hero Slider Settings"
                    attributes={attributes}
                    setAttributes={setAttributes}
                />
                <SpacerSettings
                    title="Container Settings"
                    attributes={attributes}
                    setAttributes={setAttributes}
                />
            </InspectorControls>

            <div className="my-4">
                <div className={`container ${spacerClass(attributes.spacer)}`}>
                    <div className="border border-light p-2 bg-gray-100">
                        <InnerBlocks
                            allowedBlocks={['basetheme/image-swiper-item']}
                            template={BLOCKS_TEMPLATE}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

function SaveComponent() {
    return <InnerBlocks.Content />;
}

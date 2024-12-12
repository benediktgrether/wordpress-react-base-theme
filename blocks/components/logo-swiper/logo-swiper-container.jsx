//https://wordpress.github.io/gutenberg/?path=/story/icons-icon--library
import { registerBlockType } from '@wordpress/blocks';
import { layout } from '@wordpress/icons';

import { useEffect } from '@wordpress/element';
import { v4 as uuidv4 } from 'uuid';

import {
    SpacerSettings,
    defaultSpacerAttributes,
    spacerClass,
} from '../../configuration/spacer/spacer';

import {
    InnerBlocks,
    InspectorControls,
    useInnerBlocksProps,
    useBlockProps,
} from '@wordpress/block-editor';
import {
    SwiperSettings,
    defaultSwiperAttributes,
} from '../../utilities/swiper/swiper-settings';

registerBlockType('basetheme/logo-swiper-container', {
    title: 'Logo-swiper-container',
    icon: layout,
    category: 'layout',
    description: 'A Description',
    keywords: '[]',
    supports: {
        layout: {
            allowEditing: false,
            default: {
                type: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'flex-start',
            },
        },
    },
    attributes: {
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
    }, [attributes.uuid, setAttributes]);

    const allowedBlocks = ['basetheme/logo-swiper-item'];
    const BLOCKS_TEMPLATE = [['basetheme/logo-swiper-item']];

    const blockProps = useBlockProps({
        className: 'container-row-wrapper',
    });

    const innerBlocksProps = useInnerBlocksProps(
        { className: 'container-row' },
        {
            allowedBlocks,
            BLOCKS_TEMPLATE,
            templateLock: false,
            // renderAppender: InnerBlocks.ButtonBlockAppender,
        }
    );

    return (
        <>
            <InspectorControls>
                <SpacerSettings
                    title="Container Settings"
                    attributes={attributes}
                    setAttributes={setAttributes}
                />
                <SwiperSettings
                    title="Hero Slider Settings"
                    attributes={attributes}
                    setAttributes={setAttributes}
                />
            </InspectorControls>
            <div className="my-4">
                <div
                    className={`container-fluid ${spacerClass(attributes.spacer)}`}
                >
                    <div className="border border-light p-2 bg-gray-100">
                        <div {...blockProps}>
                            <div {...innerBlocksProps} />
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

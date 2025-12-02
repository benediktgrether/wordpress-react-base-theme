import { registerBlockType } from '@wordpress/blocks';
import { useEffect } from '@wordpress/element';
import { v4 as uuidv4 } from 'uuid';

import { chevronDownSmall } from '@wordpress/icons';
import {
    InnerBlocks,
    InspectorControls,
    useInnerBlocksProps,
    useBlockProps,
} from '@wordpress/block-editor';

import {
    SpacerSettings,
    defaultSpacerAttributes,
} from '../../configuration/spacer/spacer';

registerBlockType('basetheme/accordion-container', {
    title: 'Accordion',
    icon: chevronDownSmall,
    category: 'layout',
    description: 'A Description',
    parent: ['basetheme/container'],
    keywords: '[]',
    supports: {},
    attributes: {
        ...defaultSpacerAttributes,
        uuid: {
            type: 'string',
            default: '',
        },
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

    const allowedBlocks = ['basetheme/accordion-item'];
    const template = [['basetheme/accordion-item', { uuid: attributes.uuid }]];

    return (
        <>
            <InspectorControls>
                <SpacerSettings
                    title="Container Settings"
                    attributes={attributes}
                    setAttributes={setAttributes}
                />
            </InspectorControls>
            <div className="border border-gray-200 p-2">
                <div className="accordion" id="accordionExample">
                    <InnerBlocks
                        allowedBlocks={allowedBlocks}
                        template={template}
                        templateLock={false}
                    />
                </div>
            </div>
        </>
    );
}

function SaveComponent() {
    return <InnerBlocks.Content />;
}

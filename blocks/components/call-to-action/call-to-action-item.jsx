//https://wordpress.github.io/gutenberg/?path=/story/icons-icon--library
import { registerBlockType } from '@wordpress/blocks';
import { layout } from '@wordpress/icons';

import {
    InspectorControls,
    InnerBlocks,
    useBlockProps,
} from '@wordpress/block-editor';

import {
    defaultColorNameAttributes,
    ColorSettings,
} from '../../configuration/color/colors';

import { Button, defaultButtonAttributes } from '../../utilities/button/button';

import { Text, defaultTextAttributes } from '../../utilities/text/text';

registerBlockType('basetheme/call-to-action-item', {
    title: 'Call-to-action-item',
    icon: layout,
    category: 'layout',
    parent: ['basetheme/call-to-action'],
    description: 'A Description',
    keywords: '[]',
    supports: {},
    attributes: {
        colorName: { type: 'string', default: 'white' },
        ...defaultTextAttributes,
        headline: {
            type: 'string',
            default: 'Headline',
        },
        ...defaultButtonAttributes,
    },

    edit: EditComponent,
    save: SaveComponent,
});

function EditComponent(props) {
    const { attributes, setAttributes } = props;

    let bgColor;
    let textColor;
    switch (attributes.colorName) {
        case 'primary':
            bgColor = 'bg-primary';
            textColor = 'text-white';
            break;
        case 'secondary':
            bgColor = 'bg-secondary';
            textColor = 'text-white';
            break;
        case 'black':
            bgColor = 'bg-black';
            textColor = 'text-white';
            break;
        case 'white':
            bgColor = 'bg-white';
            textColor = 'text-black';
            break;
        default:
            bgColor = 'bg-primary';
            textColor = 'text-white';
    }

    return (
        <>
            <InspectorControls>
                <ColorSettings
                    title="Color Settings"
                    attributes={attributes}
                    setAttributes={setAttributes}
                />
            </InspectorControls>
            <div className="grid-item-2/5">
                <div className={`${bgColor} p-4`}>
                    <Text
                        attributes={{
                            text: attributes.headline,
                        }}
                        setAttributes={(newAttributes) => {
                            setAttributes({
                                headline: newAttributes.text,
                            });
                        }}
                        className={` ${textColor} fs-32`}
                    />
                    <Text
                        attributes={attributes}
                        setAttributes={setAttributes}
                        className={`${textColor} fs-18`}
                    />
                    <Button
                        attributes={attributes}
                        setAttributes={setAttributes}
                    />
                </div>
            </div>
        </>
    );
}

function SaveComponent() {
    return <InnerBlocks.Content />;
}

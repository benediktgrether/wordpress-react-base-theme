import { useState } from '@wordpress/element';
import { link } from '@wordpress/icons';

import {
    ToolbarGroup,
    ToolbarButton,
    Popover,
    Button as WordPressButton,
} from '@wordpress/components';

import {
    RichText,
    InspectorControls,
    BlockControls,
    __experimentalLinkControl as LinkControl,
} from '@wordpress/block-editor';

import {
    SpacerSettings,
    defaultSpacerAttributes,
    spacerClass,
} from '../../configuration/spacer/spacer';

import {
    defaultColorNameAttributes,
    ColorSettings,
} from '../../configuration/color/colors';

import {
    defaultAlignAttributes,
    alignClass,
    AlignSettings,
} from '../../configuration/align/align';

export const defaultButtonAttributes = {
    ...defaultColorNameAttributes,
    ...defaultSpacerAttributes,
    ...defaultAlignAttributes,
    linkText: { type: 'string', default: 'Mehr erfahren' },
    linkObject: { type: 'object', default: { url: '' } },
    buttonColorName: { type: 'string', default: 'primary' },
};

export function ButtonSettings({
    attributes,
    setAttributes,
    setIsLinkPickerVisible,
}) {
    function buttonHandler() {
        setIsLinkPickerVisible((prev) => !prev);
    }

    return (
        <>
            <BlockControls>
                <ToolbarGroup>
                    <ToolbarButton onClick={buttonHandler} icon={link} />
                </ToolbarGroup>
            </BlockControls>
            <InspectorControls>
                <ColorSettings
                    title="Button Color Settings"
                    attributes={{ colorName: attributes.buttonColorName }}
                    setAttributes={(newAttrs) => {
                        if (newAttrs.colorName) {
                            setAttributes({
                                buttonColorName: newAttrs.colorName,
                            });
                        }
                    }}
                />
                <SpacerSettings
                    title="Container Settings"
                    attributes={attributes}
                    setAttributes={setAttributes}
                />
                <AlignSettings
                    title="Alignment Settings"
                    attributes={attributes}
                    setAttributes={setAttributes}
                />
            </InspectorControls>
        </>
    );
}

export function Button({ attributes, setAttributes }) {
    const [isLinkPickerVisible, setIsLinkPickerVisible] = useState(false);

    function handleLinkChange(newLink) {
        setAttributes({ linkObject: newLink });
    }

    function handleTextChange(setText) {
        setAttributes({ linkText: setText });
    }

    // Tailwind button styles
    let buttonClasses = '';
    switch (attributes.buttonColorName) {
        case 'primary':
            buttonClasses =
                'bg-primary-default hover:bg-primary-hover !text-white';
            break;
        case 'secondary':
            buttonClasses =
                'bg-secondary-default hover:bg-secondary-hover !text-white';
            break;
        case 'black':
            buttonClasses = 'bg-black hover:bg-gray-900 !text-white';
            break;
        case 'white':
            buttonClasses =
                'bg-white text-black border border-gray-300 hover:bg-gray-100';
            break;
        case 'gray':
            buttonClasses =
                'bg-gray-200 hover:bg-gray-300 !text-primary-default';
            break;
        default:
            buttonClasses =
                'bg-primary-default hover:bg-primary-hover !text-white';
    }

    return (
        <>
            <ButtonSettings
                attributes={attributes}
                setAttributes={setAttributes}
                isLinkPickerVisible={isLinkPickerVisible}
                setIsLinkPickerVisible={setIsLinkPickerVisible}
            />
            <div className={`flex ${alignClass(attributes.align)}`}>
                <RichText
                    allowedFormats={[]}
                    tagName="a"
                    className={`inline-block ${buttonClasses} font-semibold py-2 px-4 rounded transition duration-300 cursor-pointer ${spacerClass(
                        attributes.spacer
                    )}`}
                    value={attributes.linkText}
                    onChange={handleTextChange}
                />
            </div>
            {isLinkPickerVisible && (
                <Popover position="middle center">
                    <LinkControl
                        settings={[
                            {
                                id: 'openInNewTab',
                                title: 'Öffnen in neuem Tab',
                            },
                        ]}
                        value={attributes.linkObject}
                        onChange={handleLinkChange}
                    />
                    <WordPressButton
                        variant="primary"
                        onClick={() => setIsLinkPickerVisible(false)}
                        style={{ display: 'block', width: '100%' }}
                    >
                        Confirm Link
                    </WordPressButton>
                </Popover>
            )}
        </>
    );
}

import { useState } from '@wordpress/element';
import { button, link } from '@wordpress/icons';

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
    ...defaultColorNameAttributes, // This was your original block color
    ...defaultSpacerAttributes,
    ...defaultAlignAttributes,
    linkText: { type: 'string', default: 'Mehr erfahren' },
    linkObject: { type: 'object', default: { url: '' } },
    buttonColorName: { type: 'string', default: 'primary' }, // NEW attribute for button color
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

    let buttonColor;
    let textColor;

    switch (attributes.buttonColorName) {
        case 'primary':
            buttonColor = 'primary';
            textColor = 'text-white';
            break;
        case 'secondary':
            buttonColor = 'secondary';
            textColor = 'text-white';
            break;
        case 'black':
            buttonColor = 'black';
            textColor = 'text-white';
            break;
        case 'white':
            buttonColor = 'white';
            textColor = 'text-black';
            break;
        case 'gray':
            buttonColor = 'gray-500';
            textColor = 'text-primary';
            break;
        default:
            buttonColor = 'primary';
            textColor = 'text-white';
    }

    return (
        <>
            <ButtonSettings
                attributes={attributes}
                setAttributes={setAttributes}
                isLinkPickerVisible={isLinkPickerVisible}
                setIsLinkPickerVisible={setIsLinkPickerVisible}
            />
            <div className={`d-flex ${alignClass(attributes.align)}`}>
                <RichText
                    allowedFormats={[]}
                    tagName="a"
                    className={`btn btn-${buttonColor} ${textColor} ${spacerClass(attributes.spacer)}`}
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

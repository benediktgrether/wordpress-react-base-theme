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
                    title="Color Settings"
                    attributes={attributes}
                    setAttributes={setAttributes}
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
                    className={`btn btn-${attributes.colorName} ${spacerClass(attributes.spacer)}`}
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

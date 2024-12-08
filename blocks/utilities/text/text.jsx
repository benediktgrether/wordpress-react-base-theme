import {
    RichText,
    BlockControls,
    AlignmentToolbar,
} from '@wordpress/block-editor';

export const defaultTextAttributes = {
    text: {
        type: 'string',
    },
    alignment: {
        type: 'string',
    },
};

export function Text({ attributes, setAttributes, enableAlignment = true }) {
    let alignmentClass = '';
    switch (attributes.alignment) {
        case 'left':
            alignmentClass = 'text-left';
            break;
        case 'center':
            alignmentClass = 'text-center';
            break;
        case 'right':
            alignmentClass = 'text-right';
            break;
        default:
            alignmentClass = 'text-left';
    }

    // TODO: Set enable Alignment from attributes
    if (enableAlignment) {
        return (
            <>
                <BlockControls>
                    <AlignmentToolbar
                        value={attributes.alignment}
                        onChange={(newVal) =>
                            setAttributes({ alignment: newVal })
                        }
                    />
                </BlockControls>
                <RichText
                    value={attributes.text}
                    onChange={(newText) => setAttributes({ text: newText })}
                    placeholder="Text eingabe..."
                    className={alignmentClass}
                />
            </>
        );
    }
    return (
        <RichText
            value={attributes.text}
            onChange={(newText) => setAttributes({ text: newText })}
            placeholder="Text eingabe..."
            className={alignmentClass}
        />
    );
}

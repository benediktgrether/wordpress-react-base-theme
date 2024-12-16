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

export function Text({
    attributes,
    setAttributes,
    enableAlignment = true,
    className = '',
}) {
    let alignmentClass = '';
    switch (attributes.alignment) {
        case 'left':
            alignmentClass = 'text-start';
            break;
        case 'center':
            alignmentClass = 'text-center';
            break;
        case 'right':
            alignmentClass = 'text-end';
            break;
        default:
            alignmentClass = 'text-start';
    }

    const combinedClassName = `${alignmentClass} ${className}`.trim();

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
                    className={combinedClassName}
                />
            </>
        );
    }

    return (
        <RichText
            value={attributes.text}
            onChange={(newText) => setAttributes({ text: newText })}
            placeholder="Text eingabe..."
            className={combinedClassName}
        />
    );
}

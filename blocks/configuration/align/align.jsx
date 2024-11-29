import { PanelBody, PanelRow, SelectControl } from '@wordpress/components';

export const defaultAlignAttributes = {
    align: { type: 'string', default: 'left' },
};

export const alignClass = (align) => {
    switch (align) {
        case 'left':
            return 'justify-content-start';
        case 'center':
            return 'justify-content-center';
        case 'right':
            return 'justify-content-end';
        default:
            return 'justify-content-start';
    }
};

export function AlignSettings({ title, attributes, setAttributes }) {
    return (
        <PanelBody title={title}>
            <PanelRow>
                <SelectControl
                    label="Alignment"
                    value={attributes.align}
                    options={[
                        { label: 'Left', value: 'left' },
                        { label: 'Center', value: 'center' },
                        { label: 'Right', value: 'right' },
                    ]}
                    onChange={(align) => setAttributes({ align })}
                />
            </PanelRow>
        </PanelBody>
    );
}

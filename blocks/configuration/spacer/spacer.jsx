import { PanelBody, PanelRow, SelectControl } from '@wordpress/components';

export const defaultSpacerAttributes = {
    spacer: { type: 'string', default: 'medium' },
};

export const spacerClass = (spacer) => {
    switch (spacer) {
        case 'xSmall':
            return 'mt-2';
        case 'small':
            return 'mt-3';
        case 'medium':
            return 'mt-4';
        case 'large':
            return 'mt-3 mt-lg-5';
        case 'xLarge':
            return 'mt-5 mt-lg-10';
        case 'xxLarge':
            return 'mt-6 mt-lg-12';
        default:
            return 'mt-0';
    }
};

export function SpacerSettings({ title, attributes, setAttributes }) {
    return (
        <PanelBody title={title}>
            <PanelRow>
                <SelectControl
                    label="Spacer"
                    value={attributes.spacer}
                    options={[
                        { label: 'None', value: '' },
                        { label: 'Extra Small', value: 'xSmall' },
                        { label: 'Small', value: 'small' },
                        { label: 'Medium', value: 'medium' },
                        { label: 'Large', value: 'large' },
                        { label: 'Extra Large', value: 'xLarge' },
                        { label: 'Extra Extra Large', value: 'xxLarge' },
                    ]}
                    onChange={(spacer) => setAttributes({ spacer })}
                />
            </PanelRow>
        </PanelBody>
    );
}

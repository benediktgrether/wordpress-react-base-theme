import { PanelBody, PanelRow, SelectControl } from '@wordpress/components';

export const defaultSpacerAttributes = {
    spacer: { type: 'string', default: 'medium' },
};

// NEW: mapping version of your old switch
export const spacerClass = (spacer) => {
    const spacerMap = {
        xSmall: 'pt-2',
        small: 'pt-4',
        medium: 'pt-8',
        large: 'pt-16',
        xLarge: 'pt-32',
        xxLarge: 'pt-48',
        xxxLarge: 'pt-64',
    };

    // Return mapped class or fallback
    return spacerMap[spacer] ?? 'pt-0';
};

export function SpacerSettings({ title, attributes, setAttributes }) {
    return (
        <PanelBody title={title}>
            <PanelRow>
                <SelectControl
                    label="Spacer"
                    value={attributes.spacer}
                    options={[
                        { label: 'None', value: 'none' },
                        { label: 'Extra Small', value: 'xSmall' },
                        { label: 'Small', value: 'small' },
                        { label: 'Medium', value: 'medium' },
                        { label: 'Large', value: 'large' },
                        { label: 'Extra Large', value: 'xLarge' },
                        { label: 'Extra Extra Large', value: 'xxLarge' },
                        { label: 'Triple Extra Large', value: 'xxxLarge' },
                    ]}
                    onChange={(spacer) => setAttributes({ spacer })}
                />
            </PanelRow>
        </PanelBody>
    );
}

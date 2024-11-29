import { ColorPalette, PanelBody, PanelRow } from '@wordpress/components';
import { getColorObjectByColorValue } from '@wordpress/block-editor';

export const colorValues = [
    { name: 'primary', color: '#BE2830' },
    { name: 'secondary', color: '#5C5C5B' },
    { name: 'black', color: '#000000' },
];

export const defaultColorNameAttributes = {
    colorName: { type: 'string', default: 'primary' },
};

export function ColorSettings({ title, attributes, setAttributes }) {
    const currentColorValue = colorValues.filter((color) => {
        return color.name === attributes.colorName;
    })[0].color;

    function handleColorChange(colorCode) {
        // from the hex value that the color palette gives us, we need to find its color name
        const { name } = getColorObjectByColorValue(colorValues, colorCode);
        setAttributes({ colorName: name });
    }

    return (
        <PanelBody title={title}>
            <PanelRow>
                <ColorPalette
                    disableCustomColors={true}
                    clearable={false}
                    colors={colorValues}
                    value={currentColorValue}
                    onChange={handleColorChange}
                />
            </PanelRow>
        </PanelBody>
    );
}

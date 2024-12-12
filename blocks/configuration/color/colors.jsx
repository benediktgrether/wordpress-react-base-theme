import { ColorPalette, PanelBody, PanelRow } from '@wordpress/components';
import { getColorObjectByColorValue } from '@wordpress/block-editor';

export const colorValues = [
    { name: 'primary', color: '#003b49' },
    { name: 'secondary', color: '#ff7d45' },
    { name: 'black', color: '#000000' },
    { name: 'white', color: '#fff' },
    { name: 'gray', color: '#adb5bd' },
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

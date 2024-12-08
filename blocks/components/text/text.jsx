import { registerBlockType } from '@wordpress/blocks';
import { RichText } from '@wordpress/block-editor';
import { icon } from '../../configuration/icon/icons';

registerBlockType('everydayblocktheme/text', {
    title: 'Text',
    icon: icon.paragraph,
    category: 'layout',
    description: 'A Description',
    keywords: [],
    supports: {},
    attributes: {
        text: {
            type: 'string',
        },
    },
    parent: ['everydayblocktheme/container'],

    edit: EditComponent,
    save: () => null, // No save function, handled by PHP
});

function EditComponent(props) {
    const { attributes, setAttributes } = props;
    return (
        <>
            <div>
                <RichText
                    value={attributes.text}
                    onChange={(newText) => setAttributes({ text: newText })}
                    placeholder="Text eingabe..."
                />
            </div>
        </>
    );
}

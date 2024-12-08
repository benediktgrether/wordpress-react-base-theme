import { registerBlockType } from '@wordpress/blocks';
import { Text } from '../../utilities/text/text';
import { paragraph } from '@wordpress/icons';

registerBlockType('everydayblocktheme/text', {
    title: 'Text',
    icon: paragraph,
    category: 'layout',
    description: 'A Description',
    keywords: [],
    supports: {},
    attributes: {
        text: {
            type: 'string',
        },
        alignment: {
            type: 'string',
        },
    },
    parent: ['everydayblocktheme/container'],

    edit: EditComponent,
    save: () => null, // No save function, handled by PHP
});

function EditComponent(props) {
    const { attributes, setAttributes } = props;
    return <Text attributes={attributes} setAttributes={setAttributes} />;
}

//https://wordpress.github.io/gutenberg/?path=/story/icons-icon--library
import { registerBlockType } from '@wordpress/blocks';
import { layout } from '@wordpress/icons';

import { Text, defaultTextAttributes } from '../../utilities/text/text';

registerBlockType('basetheme/footer-text', {
    title: 'Footer-text',
    icon: layout,
    category: 'layout',
    parent: ['basetheme/footer-item'],
    description: 'A Description',
    keywords: '[]',
    supports: {},
    attributes: {
        ...defaultTextAttributes,
    },

    edit: EditComponent,
    save: () => null,
});

function EditComponent(props) {
    const { attributes, setAttributes } = props;
    return <Text attributes={attributes} setAttributes={setAttributes} />;
}

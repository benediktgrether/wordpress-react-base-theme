//https://wordpress.github.io/gutenberg/?path=/story/icons-icon--library
import { registerBlockType } from '@wordpress/blocks';
import { layout } from '@wordpress/icons';

import { Button, defaultButtonAttributes } from '../../utilities/button/button';

registerBlockType('everydayblocktheme/button', {
    title: 'Button',
    icon: layout,
    category: 'layout',
    description: 'A Description',
    keywords: '[]',
    supports: {},
    attributes: {
        ...defaultButtonAttributes,
    },

    edit: EditComponent,
    save: () => null,
});

function EditComponent(props) {
    const { attributes, setAttributes } = props;
    return (
        <>
            <Button attributes={attributes} setAttributes={setAttributes} />
        </>
    );
}

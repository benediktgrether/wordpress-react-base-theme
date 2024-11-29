import { registerBlockType } from '@wordpress/blocks';
import { postFeaturedImage } from '@wordpress/icons';
registerBlockType('everydayblocktheme/hero', {
    title: 'hero',
    icon: postFeaturedImage,
    category: 'layout',
    description: 'A Description',
    keywords: '[]',
    supports: {},
    attributes: {},

    edit: EditComponent,
    save: SaveComponent,
});

function EditComponent(props) {
    const { attributes, setAttributes } = props;
    return (
        <div>
            <h1>Hello World</h1>
        </div>
    );
}

function SaveComponent() {
    return (
        <div>
            <h1>Hello World</h1>
        </div>
    );
}

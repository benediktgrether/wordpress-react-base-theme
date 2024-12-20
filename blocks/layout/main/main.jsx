//https://wordpress.github.io/gutenberg/?path=/story/icons-icon--library
import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks } from '@wordpress/block-editor';
import { layout } from '@wordpress/icons';
registerBlockType('basetheme/main', {
    title: 'Main',
    icon: layout,
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
        <InnerBlocks
            allowedBlocks={['core/post-content']}
            template={[['core/post-content']]}
        />
    );
}

function SaveComponent() {
    return <InnerBlocks.Content />;
}

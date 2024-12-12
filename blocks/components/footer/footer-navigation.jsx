//https://wordpress.github.io/gutenberg/?path=/story/icons-icon--library
import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks } from '@wordpress/block-editor';
import { layout } from '@wordpress/icons';
registerBlockType('basetheme/footer-navigation', {
    title: 'Footer-navigation',
    icon: layout,
    category: 'layout',
    parent: ['basetheme/footer-item'],
    description: 'A Description',
    keywords: '[]',
    supports: {},
    attributes: {},

    edit: EditComponent,
    save: SaveComponent,
});

function EditComponent(props) {
    const { attributes, setAttributes } = props;

    const allowedBlocks = ['core/navigation'];
    const template = [['core/navigation']];
    return <InnerBlocks allowedBlocks={allowedBlocks} template={template} />;
}

function SaveComponent() {
    return <InnerBlocks.Content />;
}

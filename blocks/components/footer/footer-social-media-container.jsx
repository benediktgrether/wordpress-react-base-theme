//https://wordpress.github.io/gutenberg/?path=/story/icons-icon--library
import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks } from '@wordpress/block-editor';
import { layout } from '@wordpress/icons';
registerBlockType('basetheme/footer-social-media-container', {
    title: 'Footer-social-media-container',
    icon: layout,
    category: 'layout',
    parent: ['basetheme/footer-item'],
    description: 'A Description',
    keywords: '[]',
    supports: {
        layout: {
            allowEditing: false,
            default: {
                type: 'flex',
                flexWrap: 'wrap',
            },
        },
    },
    attributes: {},

    edit: EditComponent,
    save: SaveComponent,
});

function EditComponent() {
    return (
        <InnerBlocks
            allowedBlocks={['basetheme/footer-social-media-icon']}
            template={[['basetheme/footer-social-media-icon']]}
        />
    );
}

function SaveComponent() {
    return <InnerBlocks.Content />;
}

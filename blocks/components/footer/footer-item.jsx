//https://wordpress.github.io/gutenberg/?path=/story/icons-icon--library
import { registerBlockType } from '@wordpress/blocks';
import { layout } from '@wordpress/icons';

import { InnerBlocks } from '@wordpress/block-editor';

registerBlockType('basetheme/footer-item', {
    title: 'Footer-item',
    icon: layout,
    category: 'layout',
    parent: ['basetheme/footer-container'],
    description: 'A Description',
    keywords: '[]',
    supports: {
        layout: {
            allowEditing: false,
            default: {
                type: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
            },
        },
    },
    attributes: {},

    edit: EditComponent,
    save: SaveComponent,
});

function EditComponent(props) {
    const { attributes, setAttributes } = props;

    const allowedBlocks = [
        'basetheme/footer-social-media-container',
        'basetheme/footer-navigation',
        'basetheme/footer-text',
    ];
    const template = [
        ['basetheme/footer-navigation'],
        ['basetheme/footer-social-media-container'],
        ['basetheme/footer-text'],
    ];
    return (
        <div className="container-fluid bg-secondary">
            <div className="row justify-content-between align-items-center py-5">
                <InnerBlocks
                    allowedBlocks={allowedBlocks}
                    template={template}
                />
            </div>
        </div>
    );
}

function SaveComponent() {
    return <InnerBlocks.Content />;
}

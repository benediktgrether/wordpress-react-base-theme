//https://wordpress.github.io/gutenberg/?path=/story/icons-icon--library
import { registerBlockType } from '@wordpress/blocks';
import { footer } from '@wordpress/icons';

import { InnerBlocks } from '@wordpress/block-editor';

registerBlockType('basetheme/footer-container', {
    title: 'Footer-container',
    icon: footer,
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

    const allowedBlocks = ['basetheme/footer-item'];
    const template = [['basetheme/footer-item']];
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

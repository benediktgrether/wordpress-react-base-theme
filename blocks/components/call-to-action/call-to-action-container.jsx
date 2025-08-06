//https://wordpress.github.io/gutenberg/?path=/story/icons-icon--library
import { registerBlockType } from '@wordpress/blocks';
import { info } from '@wordpress/icons';
import {
    InnerBlocks,
    InspectorControls,
    useInnerBlocksProps,
    useBlockProps,
} from '@wordpress/block-editor';
registerBlockType('basetheme/call-to-action-container', {
    title: 'Call-to-action-container',
    icon: info,
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
    const blockProps = useBlockProps({
        className: 'grid-row-wrapper',
    });

    const allowedBlocks = ['basetheme/call-to-action-item'];
    const template = [
        ['basetheme/call-to-action-item'],
        ['basetheme/call-to-action-item'],
    ];

    const innerBlocksProps = useInnerBlocksProps(
        {
            className: 'grid-row',
            style: {
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'flex-start', // Align to top
                justifyContent: 'center',
            },
        },
        {
            allowedBlocks,
            template,
            templateLock: 'all',
            // renderAppender: InnerBlocks.ButtonBlockAppender,
        }
    );

    return (
        <>
            <div className="my-4">
                <div className="border border-light p-2">
                    <div className="container mx-auto">
                        <div {...blockProps}>
                            <div {...innerBlocksProps} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

function SaveComponent() {
    return <InnerBlocks.Content />;
}

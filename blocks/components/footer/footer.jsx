//https://wordpress.github.io/gutenberg/?path=/story/icons-icon--library
import { registerBlockType } from '@wordpress/blocks';
import {
    InnerBlocks,
    InspectorControls,
    RichText,
} from '@wordpress/block-editor';
import { layout } from '@wordpress/icons';

import {
    Image,
    ImageSettings,
    getDefaultImageAttributes,
} from '../../utilities/image/image-component';

const imageSizeOptions = [
    { value: 'pageBanner', label: 'Banner' },
    { value: 'full', label: 'Full' },
    { value: 'medium', label: 'Medium' },
];

registerBlockType('everydayblocktheme/footer', {
    title: 'Footer',
    icon: layout,
    category: 'layout',
    description: 'A Description',
    keywords: '[]',
    supports: {},
    attributes: {
        ...getDefaultImageAttributes(footer),
        address: {
            type: 'string',
            default: '',
        },
        member: {
            type: 'string',
            default: '',
        },
        copyRight: {
            type: 'string',
            default: '',
        },
    },

    edit: EditComponent,
    save: () => null,
});

function EditComponent(props) {
    const { attributes, setAttributes } = props;

    return (
        <>
            <InspectorControls>
                <ImageSettings
                    attributes={attributes}
                    setAttributes={setAttributes}
                    imageSizeOptions={imageSizeOptions}
                />
            </InspectorControls>

            <div className="container-fluid bg-secondary">
                <div className="row justify-content-between align-items-center py-5">
                    <div className="col-1">
                        <img
                            className="footer-logo"
                            src={attributes.mediaUrl}
                            alt="Selected Image"
                        />
                    </div>
                    <RichText
                        tagName="div"
                        className="col-3 text-footer py-3 fw-light font-family-footer"
                        value={attributes.address}
                        onChange={(address) => setAttributes({ address })}
                        placeholder="Address"
                    />
                    <RichText
                        tagName="div"
                        className="col-3 text-footer py-3 fw-light font-family-footer"
                        value={attributes.member}
                        onChange={(member) => setAttributes({ member })}
                        placeholder="Member"
                    />
                    <RichText
                        tagName="div"
                        className="col-3 text-footer py-3 fw-light font-family-footer"
                        value={attributes.copyRight}
                        onChange={(copyRight) => setAttributes({ copyRight })}
                        placeholder="Copy Right"
                    />
                </div>
            </div>
        </>
    );
}

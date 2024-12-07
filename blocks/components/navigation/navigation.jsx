import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks, InspectorControls } from '@wordpress/block-editor';

import {
    Image,
    ImageSettings,
    getDefaultImageAttributes,
} from '../../utilities/image/image';

const imageSizeOptions = [
    { value: 'thumbnail', label: 'Thumbnail' },
    { value: 'logo', label: 'Logo' },
];

registerBlockType('everydayblocktheme/navigation', {
    title: 'Navigation',
    icon: 'smiley',
    category: 'layout',
    description: 'A Description',
    keywords: ['navigation', 'menu'],
    supports: {},
    attributes: {
        ...getDefaultImageAttributes(navigation),
        imageSize: { type: 'string', default: 'logo' },
        loading: { type: 'boolean', default: false },
    },

    edit: EditComponent,
    save: SaveComponent,
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

            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <img
                        className="navbar-brand img-fluid object-fit-cover"
                        src={attributes.mediaUrl}
                        alt="Select in WordPress Backend"
                        style={{ width: '200px', height: '100px' }}
                    />
                    <div
                        className="collapse navbar-collapse justify-content-end"
                        id="navbarSupportedContent"
                    >
                        <InnerBlocks
                            template={[['core/navigation']]}
                            allowedBlocks={['core/navigation']}
                        />
                    </div>
                </div>
            </nav>
        </>
    );
}

function SaveComponent() {
    return <InnerBlocks.Content />;
}

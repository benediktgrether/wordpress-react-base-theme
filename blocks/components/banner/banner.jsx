import apiFetch from '@wordpress/api-fetch';
import { Button, PanelBody, PanelRow } from '@wordpress/components';
import {
    InnerBlocks,
    InspectorControls,
    MediaUpload,
    MediaUploadCheck,
} from '@wordpress/block-editor';
import { registerBlockType } from '@wordpress/blocks';
import { useEffect } from '@wordpress/element';

registerBlockType('everydayblocktheme/banner', {
    title: 'Banner',
    supports: {
        align: ['full'],
    },
    attributes: {
        align: { type: 'string', default: 'full' },
        imgID: { type: 'number' },
        imgURL: { type: 'string', default: banner.fallbackImage },
    },

    edit: EditComponent,
    save: SaveComponent,
});

function EditComponent(props) {
    useEffect(
        function () {
            if (props.attributes.imgID) {
                async function fetchImage() {
                    const response = await apiFetch({
                        path: `/wp/v2/media/${props.attributes.imgID}`,
                        method: 'GET',
                    });
                    props.setAttributes({
                        imgURL: response.media_details.sizes.pageBanner
                            .source_url,
                    });
                }
                fetchImage();
            }
        },
        [props.attributes.imgID]
    );

    function onFileSelect(media) {
        props.setAttributes({ imgID: media.id });
    }

    return (
        <>
            <InspectorControls>
                <PanelBody title="Background" initialOpen={true}>
                    <PanelRow>
                        <MediaUploadCheck>
                            <MediaUpload
                                onSelect={onFileSelect}
                                value={props.attributes.imgID}
                                render={({ open }) => {
                                    return (
                                        <Button onClick={open}>
                                            Choose Image
                                        </Button>
                                    );
                                }}
                            />
                        </MediaUploadCheck>
                    </PanelRow>
                </PanelBody>
            </InspectorControls>

            <div className="container">
                <div className="row"></div>
                <img src={props.attributes.imgURL} alt="Image" />
                <InnerBlocks
                    allowedBlocks={[
                        'ourblocktheme/genericheading',
                        'ourblocktheme/genericbutton',
                    ]}
                />
            </div>
        </>
    );
}

function SaveComponent() {
    return <InnerBlocks.Content />;
}

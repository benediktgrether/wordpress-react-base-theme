/* eslint-disable no-console */
/* eslint-disable jsx-a11y/img-redundant-alt */
import apiFetch from '@wordpress/api-fetch';
import {
    Button,
    PanelBody,
    PanelRow,
    SelectControl,
    ToggleControl,
} from '@wordpress/components';
import { MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';
import { useEffect } from '@wordpress/element';

import placeholderImage from '../../../assets/images/placeholder-image.png';

// Default attributes for the image component
export const getDefaultImageAttributes = {
    mediaId: { type: 'number' },
    mediaUrl: {
        type: 'string',
        default: placeholderImage,
    },
    imageSize: { type: 'string', default: 'full' },
    loading: { type: 'boolean', default: true },
};

// Reusable image component logic
export function ImageSettings({ attributes, setAttributes, imageSizeOptions }) {
    useEffect(() => {
        async function fetchImage() {
            try {
                if (!attributes.mediaId) {
                    console.error('Media ID is missing.');
                    return;
                }

                const response = await apiFetch({
                    path: `/wp/v2/media/${attributes.mediaId}`,
                    method: 'GET',
                });

                if (!response || !response.media_details) {
                    console.error('Invalid response:', response);
                    return;
                }

                setAttributes({
                    mediaUrl:
                        response.media_details.sizes[attributes.imageSize]
                            ?.source_url || response.source_url,
                });
            } catch (error) {
                console.error('Error fetching media:', error);
            }
        }

        fetchImage();
    }, [attributes.mediaId, attributes.imageSize, setAttributes]);

    function onFileSelect(media) {
        setAttributes({
            mediaId: media.id,
            mediaUrl: media.url,
        });
    }

    function onChangeSelectImageSize(imageSize) {
        setAttributes({ imageSize });
    }

    function onChangeImageLoading(loading) {
        setAttributes({ loading });
    }

    return (
        <>
            <PanelBody title="Bild Einstellungen" initialOpen={true}>
                <PanelRow>
                    <MediaUploadCheck>
                        <MediaUpload
                            onSelect={onFileSelect}
                            value={attributes.mediaId}
                            render={({ open }) => (
                                <Button variant="primary" onClick={open}>
                                    Bild auswählen
                                </Button>
                            )}
                        />
                    </MediaUploadCheck>
                </PanelRow>
                <PanelRow>
                    <div className="ratio ratio-16x9">
                        <img
                            className="img-fluid object-fit-cover"
                            src={attributes.mediaUrl}
                            alt="Select"
                            width={200}
                        />
                    </div>
                </PanelRow>
                <PanelRow>
                    <SelectControl
                        label="Bildgröße"
                        value={attributes.imageSize}
                        options={imageSizeOptions}
                        onChange={onChangeSelectImageSize}
                    />
                </PanelRow>
                <PanelRow>
                    <ToggleControl
                        label="Lazy Loading aktivieren"
                        checked={attributes.loading}
                        onChange={onChangeImageLoading}
                    />
                </PanelRow>
            </PanelBody>
        </>
    );
}

export function Image({ mediaUrl, variant }) {
    const classNames =
        variant === 'cover' ? 'w-100 h-100 object-fit-cover' : 'w-auto h-100';

    return <img className={classNames} src={mediaUrl} alt="Select Image" />;
}

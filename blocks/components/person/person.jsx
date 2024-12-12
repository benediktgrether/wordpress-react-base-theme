import { registerBlockType } from '@wordpress/blocks';
import { InspectorControls } from '@wordpress/block-editor';
import { people } from '@wordpress/icons';
import {
    Image,
    ImageSettings,
    getDefaultImageAttributes,
} from '../../utilities/image/image';

import { Text, defaultTextAttributes } from '../../utilities/text/text';

registerBlockType('basetheme/person', {
    title: 'Person',
    icon: people,
    supports: {},
    parent: ['basetheme/grid-item', 'basetheme/container'],
    attributes: {
        ...getDefaultImageAttributes,
        ...defaultTextAttributes,
        firstname: { type: 'string', default: 'First Name' },
        lastname: { type: 'string', default: 'Last Name' },
        position: { type: 'string', default: 'Position' },
        email: { type: 'string', default: 'Email' },
        phone: { type: 'string', default: 'Phone' },
    },
    edit: EditComponent,
    save: () => null,
});

const imageSizeOptions = [
    { value: 'pageBanner', label: 'Banner' },
    { value: 'full', label: 'Full' },
    { value: 'medium', label: 'Medium' },
    { value: 'partnerLogo', label: 'Partner Logo' },
];

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

            <div className="position-relative">
                <div className="ratio ratio-1x1">
                    <Image
                        mediaUrl={attributes.mediaUrl}
                        alt="Upload Image"
                        variant="cover"
                    />
                </div>
                <div className="position-absolute bottom-0 w-100 h-50 p-3">
                    <div className="bg-black h-100 text-white p-3">
                        <Text
                            attributes={{ text: attributes.firstname }}
                            setAttributes={(newVal) =>
                                setAttributes({ firstname: newVal.text })
                            }
                            enableAlignment={false}
                        />
                        <Text
                            attributes={{ text: attributes.lastname }}
                            setAttributes={(newVal) =>
                                setAttributes({ lastname: newVal.text })
                            }
                            enableAlignment={false}
                        />
                        <Text
                            attributes={{ text: attributes.position }}
                            setAttributes={(newVal) =>
                                setAttributes({ position: newVal.text })
                            }
                            enableAlignment={false}
                        />
                        <Text
                            attributes={{ text: attributes.email }}
                            setAttributes={(newVal) =>
                                setAttributes({ email: newVal.text })
                            }
                            enableAlignment={false}
                        />
                        <Text
                            attributes={{ text: attributes.phone }}
                            setAttributes={(newVal) =>
                                setAttributes({ phone: newVal.text })
                            }
                            enableAlignment={false}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

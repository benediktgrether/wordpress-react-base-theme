import { registerBlockType } from '@wordpress/blocks';
import { RichText, useBlockProps } from '@wordpress/block-editor';
import { useSelect } from '@wordpress/data';

import { useEffect } from '@wordpress/element';
import { v4 as uuidv4 } from 'uuid';

import { icon } from '../../configuration/icon/icons';

registerBlockType('basetheme/accordion-item', {
    title: 'Accordion Item',
    icon: icon.accordionItem,
    category: 'layout',
    parent: ['basetheme/accordion-container'],
    description: 'A Description',
    keywords: '[]',
    supports: {},
    attributes: {
        question: {
            type: 'string',
            default: 'Frage',
        },
        answer: {
            type: 'string',
            default: 'Antwort',
        },
        uuid: {
            type: 'string',
            default: '', // This will be inherited from the parent container
        },
        itemUuid: {
            type: 'string',
            default: '', // This will be generated for each item
        },
    },

    edit: EditComponent,
    save: () => null,
});

function EditComponent(props) {
    const { attributes, setAttributes, clientId } = props;

    // Get the parent block's attributes
    const parentUuid = useSelect(
        (select) => {
            const { getBlockParentsByBlockName, getBlock } =
                select('core/block-editor');
            const parentBlockId = getBlockParentsByBlockName(
                clientId,
                'basetheme/accordion-container'
            )[0];
            return parentBlockId
                ? getBlock(parentBlockId).attributes.uuid
                : null;
        },
        [clientId]
    );

    // Update the UUID attribute only if it's different from the parent
    useEffect(() => {
        if (attributes.uuid !== parentUuid) {
            setAttributes({ uuid: parentUuid });
        }
    }, [attributes.uuid, parentUuid, setAttributes]);

    useEffect(() => {
        if (!attributes.itemUuid) {
            setAttributes({ itemUuid: uuidv4() });
        }
    }, [attributes.itemUuid, setAttributes]);

    // Generate a new itemUuid if the block is copied
    useEffect(() => {
        const newItemUuid = uuidv4();
        setAttributes({ itemUuid: newItemUuid });
    }, [clientId, setAttributes]);

    return (
        <div className="accordion-item" {...useBlockProps()}>
            <h2 className="accordion-header" id={`heading-${attributes.uuid}`}>
                <div
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#collapse-${attributes.uuid}`}
                    aria-expanded="true"
                    aria-controls={`collapse-${attributes.uuid}`}
                >
                    <RichText
                        allowedFormats={[]}
                        placeholder="Enter your question"
                        value={attributes.question}
                        onChange={(newText) =>
                            setAttributes({ question: newText })
                        }
                    />
                </div>
            </h2>
            <div
                id={`collapse-${attributes.uuid}`}
                className="accordion-collapse collapse show"
                data-bs-parent="#accordionExample"
            >
                <div className="accordion-body">
                    <RichText
                        allowedFormats={[]}
                        placeholder="Enter your answer"
                        value={attributes.answer}
                        onChange={(newText) =>
                            setAttributes({ answer: newText })
                        }
                    />
                </div>
            </div>
        </div>
    );
}

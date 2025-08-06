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
    description: 'Accordion Item block always open (Tailwind)',
    supports: {},
    attributes: {
        question: { type: 'string', default: 'Frage' },
        answer: { type: 'string', default: 'Antwort' },
        uuid: { type: 'string', default: '' },
        itemUuid: { type: 'string', default: '' },
    },
    edit: EditComponent,
    save: () => null,
});

function EditComponent(props) {
    const { attributes, setAttributes, clientId } = props;

    // Fetch parent container UUID
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

    // Sync parent UUID
    useEffect(() => {
        if (attributes.uuid !== parentUuid) {
            setAttributes({ uuid: parentUuid });
        }
    }, [attributes.uuid, parentUuid, setAttributes]);

    // Generate initial item UUID
    useEffect(() => {
        if (!attributes.itemUuid) {
            setAttributes({ itemUuid: uuidv4() });
        }
    }, [attributes.itemUuid, setAttributes]);

    // Refresh UUID on duplication
    useEffect(() => {
        setAttributes({ itemUuid: uuidv4() });
    }, [clientId, setAttributes]);

    const blockProps = useBlockProps({
        className: 'accordion-item border-b border-gray-200',
    });

    return (
        <div {...blockProps}>
            <h2 className="bg-primary-default text-white px-4 py-3 font-semibold">
                <RichText
                    allowedFormats={[]}
                    placeholder="Enter your question"
                    value={attributes.question}
                    onChange={(newText) => setAttributes({ question: newText })}
                />
            </h2>
            <div className="accordion-body bg-gray-50 p-4 text-gray-700">
                <RichText
                    allowedFormats={[]}
                    placeholder="Enter your answer"
                    value={attributes.answer}
                    onChange={(newText) => setAttributes({ answer: newText })}
                />
            </div>
        </div>
    );
}

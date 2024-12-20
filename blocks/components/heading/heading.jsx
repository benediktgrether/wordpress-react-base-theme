import { Toolbar, ToolbarDropdownMenu } from '@wordpress/components';
import {
    RichText,
    BlockControls,
    AlignmentToolbar,
} from '@wordpress/block-editor';
import { registerBlockType } from '@wordpress/blocks';
import {
    heading,
    headingLevel1,
    headingLevel2,
    headingLevel3,
    headingLevel4,
    headingLevel5,
    headingLevel6,
} from '@wordpress/icons'; // Import heading icons

// Register the custom block
registerBlockType('basetheme/heading', {
    title: 'Heading',
    icon: heading,
    category: 'layout',
    parent: ['basetheme/grid-item', 'basetheme/container'],
    description: 'A Description',
    keywords: ['heading', 'title', 'text'],
    supports: {},

    attributes: {
        tag: {
            type: 'string',
            default: 'h1', // Default to h1 tag
        },
        text: {
            type: 'string',
        },
        alignment: {
            type: 'string',
        },
    },

    edit: EditComponent,
    save: () => null, // No save function, handled by PHP
});

// Icon map for each heading level
const headingIcons = {
    h1: headingLevel1,
    h2: headingLevel2,
    h3: headingLevel3,
    h4: headingLevel4,
    h5: headingLevel5,
    h6: headingLevel6,
};

// Edit Component
function EditComponent(props) {
    const { attributes, setAttributes } = props;
    const { tag, text } = attributes;

    // Function to update the tag attribute
    function onTagChange(newTag) {
        setAttributes({ tag: newTag });
    }

    // Function to update the text attribute
    function onTextChange(newText) {
        setAttributes({ text: newText });
    }

    // Determine the current icon based on the selected tag
    const currentIcon = headingIcons[tag] || headingLevel1;

    let alignmentClass = '';
    switch (attributes.alignment) {
        case 'left':
            alignmentClass = 'text-left';
            break;
        case 'center':
            alignmentClass = 'text-center';
            break;
        case 'right':
            alignmentClass = 'text-right';
            break;
        default:
            alignmentClass = 'text-left';
    }

    return (
        <>
            {/* Block controls for heading dropdown */}
            <BlockControls>
                <Toolbar label="Überschrift">
                    <ToolbarDropdownMenu
                        icon={currentIcon} // Display the selected heading level's icon in the toolbar
                        label="Wählen Sie eine Überschriftsebene"
                        controls={[
                            {
                                title: 'H1',
                                icon: headingLevel1,
                                onClick: () => onTagChange('h1'),
                                isActive: tag === 'h1', // Highlight active tag
                            },
                            {
                                title: 'H2',
                                icon: headingLevel2,
                                onClick: () => onTagChange('h2'),
                                isActive: tag === 'h2',
                            },
                            {
                                title: 'H3',
                                icon: headingLevel3,
                                onClick: () => onTagChange('h3'),
                                isActive: tag === 'h3',
                            },
                            {
                                title: 'H4',
                                icon: headingLevel4,
                                onClick: () => onTagChange('h4'),
                                isActive: tag === 'h4',
                            },
                            {
                                title: 'H5',
                                icon: headingLevel5,
                                onClick: () => onTagChange('h5'),
                                isActive: tag === 'h5',
                            },
                            {
                                title: 'H6',
                                icon: headingLevel6,
                                onClick: () => onTagChange('h6'),
                                isActive: tag === 'h6',
                            },
                        ]}
                    />
                </Toolbar>
                <AlignmentToolbar
                    value={attributes.alignment}
                    onChange={(newVal) => setAttributes({ alignment: newVal })}
                />
            </BlockControls>

            <RichText
                tagName={tag}
                value={text}
                onChange={onTextChange}
                placeholder="Überschrift eingeben..."
                className={alignmentClass}
            />
        </>
    );
}
export { EditComponent as Heading };

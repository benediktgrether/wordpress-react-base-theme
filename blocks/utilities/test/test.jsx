import { registerBlockType } from '@wordpress/blocks';
registerBlockType('everydayblocktheme/test', {
    title: 'Test',
    icon: 'smiley',
    supports: {},
    attributes: {},

    edit: EditComponent,
    save: SaveComponent,
});

function EditComponent(props, className) {
    const { attributes, setAttributes } = props;
    return (
        <div>
            <h1 className={props.className}>Hello World</h1>
        </div>
    );
}

function SaveComponent() {
    return (
        <div>
            <h1>Hello World</h1>
        </div>
    );
}

export default test = EditComponent;

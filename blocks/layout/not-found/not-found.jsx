//https://wordpress.github.io/gutenberg/?path=/story/icons-icon--library
import { registerBlockType } from '@wordpress/blocks';
import { layout } from '@wordpress/icons';
registerBlockType('everydayblocktheme/not-found', {
    title: 'not-found',
    icon: layout,
    category: 'layout',
    description: 'A Description',
    keywords: '[]',
    supports: {},
    attributes: {},

    edit: EditComponent,
    save: () => null,
});

function EditComponent() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="position-relative vh-97">
                        <div className="position-absolute top-50 start-50 translate-middle">
                            <h1 className="w-100 fs-300 fw-bold text-gray-light text-center">
                                404
                            </h1>
                        </div>
                        <div className="position-absolute top-50 start-50 translate-middle w-100">
                            <h2 className="w-100 fs-30 fw-bold text-gray-dark text-center">
                                Tut uns leid, die Seite konnte nicht gefunden
                                werden.
                            </h2>
                        </div>
                        <div className="position-absolute top-65 start-50 translate-middle">
                            <div className="btn btn-primary w-100">
                                Zur Startseite
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

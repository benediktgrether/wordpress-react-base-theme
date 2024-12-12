import {
    PanelBody,
    PanelRow,
    ToggleControl,
    TextControl,
    SelectControl,
} from '@wordpress/components';

// Default swiper attributes
export const defaultSwiperAttributes = {
    loop: { type: 'boolean', default: true },
    autoplay: { type: 'boolean', default: true },
    autoplaySpeed: { type: 'number', default: 3000 },
    pagination: { type: 'boolean', default: true },
    navigation: { type: 'boolean', default: true },
    slidesPerView: { type: 'number', default: 1 },
    spaceBetween: { type: 'number', default: 0 },
    effect: { type: 'string', default: 'slide' },
    infiniteLoop: { type: 'boolean', default: false },
};

// Reusable swiper settings component
export function SwiperSettings({ title, attributes, setAttributes }) {
    return (
        <PanelBody title={title}>
            <PanelRow>
                <ToggleControl
                    label="Loop"
                    value={attributes.loop}
                    checked={attributes.loop}
                    onChange={(loop) => setAttributes({ loop })}
                />
            </PanelRow>
            <PanelRow>
                <ToggleControl
                    label="Infinity Loop"
                    value={attributes.infiniteLoop}
                    checked={attributes.infiniteLoop}
                    onChange={(infiniteLoop) => setAttributes({ infiniteLoop })}
                />
            </PanelRow>
            <PanelRow>
                <ToggleControl
                    label="Autoplay"
                    value={attributes.autoplay}
                    checked={attributes.autoplay}
                    onChange={(autoplay) => setAttributes({ autoplay })}
                />
            </PanelRow>
            <PanelRow>
                <TextControl
                    label="Autoplay Speed"
                    value={attributes.autoplaySpeed}
                    onChange={(autoplaySpeed) =>
                        setAttributes({
                            autoplaySpeed: parseInt(autoplaySpeed, 10) || 0,
                        })
                    }
                />
            </PanelRow>
            <PanelRow>
                <ToggleControl
                    label="Pagination"
                    value={attributes.pagination}
                    checked={attributes.pagination}
                    onChange={(pagination) => setAttributes({ pagination })}
                />
            </PanelRow>
            <PanelRow>
                <ToggleControl
                    label="Navigation"
                    value={attributes.navigation}
                    checked={attributes.navigation}
                    onChange={(navigation) => setAttributes({ navigation })}
                />
            </PanelRow>
            <PanelRow>
                <TextControl
                    label="Slides Per View"
                    value={attributes.slidesPerView}
                    onChange={(slidesPerView) =>
                        setAttributes({
                            slidesPerView: parseInt(slidesPerView, 10) || 1,
                        })
                    }
                />
            </PanelRow>
            <PanelRow>
                <TextControl
                    label="Space Between"
                    value={attributes.spaceBetween}
                    onChange={(spaceBetween) =>
                        setAttributes({
                            spaceBetween: parseInt(spaceBetween, 10) || 0,
                        })
                    }
                />
            </PanelRow>
            <PanelRow>
                <SelectControl
                    label="Effect"
                    value={attributes.effect}
                    options={[
                        { value: 'slide', label: 'Slide' },
                        { value: 'fade', label: 'Fade' },
                    ]}
                    onChange={(effect) => setAttributes({ effect })}
                />
            </PanelRow>
        </PanelBody>
    );
}

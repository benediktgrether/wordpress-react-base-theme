const fs = require('fs');
const path = require('path');

// Base configuration with global defaults
const baseScenario = {
    cookiePath: 'backstop_data/engine_scripts/cookies.json',
    url: 'http://localhost:10068/komponentenubersicht/',
    referenceUrl: '',
    readyEvent: '',
    readySelector: '',
    delay: 2000,
    hideSelectors: [],
    removeSelectors: [],
    hoverSelector: '',
    clickSelector: '',
    postInteractionWait: 0,
    selectorExpansion: true,
    expect: 0,
    misMatchThreshold: 0.1,
    requireSameDimensions: true,
};

// Function to load and extend scenarios
function loadScenarios(dir) {
    return fs.readdirSync(dir).map((file) => {
        const scenario = require(path.join(__dirname, dir, file));
        return { ...baseScenario, ...scenario };
    });
}

module.exports = {
    id: 'backstop_default',
    viewports: [
        { label: 'phone', width: 320, height: 480 },
        { label: 'tablet', width: 1024, height: 768 },
        { label: 'Desktop', width: 1920, height: 1080 },
        { label: 'Desktop Large', width: 2560, height: 1440 },
    ],
    onBeforeScript: 'puppet/onBefore.js',
    onReadyScript: 'puppet/onReady.js',
    scenarios: loadScenarios('scenarios'),
    paths: {
        bitmaps_reference: 'backstop_data/bitmaps_reference',
        bitmaps_test: 'backstop_data/bitmaps_test',
        engine_scripts: 'backstop_data/engine_scripts',
        html_report: 'backstop_data/html_report',
        ci_report: 'backstop_data/ci_report',
    },
    report: ['browser'],
    engine: 'puppeteer',
    engineOptions: {
        args: ['--no-sandbox'],
    },
    asyncCaptureLimit: 5,
    asyncCompareLimit: 50,
    debug: false,
    debugWindow: false,
};

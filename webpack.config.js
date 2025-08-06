const path = require('path');
const defaultConfig = require('@wordpress/scripts/config/webpack.config');
const WebpackBuildNotifierPlugin = require('webpack-build-notifier');
const CleanTerminalPlugin = require('clean-terminal-webpack-plugin');

// Find CSS/PostCSS rule
const cssRule = defaultConfig.module.rules.find(
    (rule) => rule.test && rule.test.toString().includes('css')
);
const postCSSLoader = cssRule.use.find(
    (use) => use.loader && use.loader.includes('postcss-loader')
);

// Ensure postcssOptions object exists
postCSSLoader.options.postcssOptions =
    postCSSLoader.options.postcssOptions || {};
postCSSLoader.options.postcssOptions.plugins = [
    require('@tailwindcss/postcss'),
    require('autoprefixer')({ grid: true }),
];

module.exports = {
    ...defaultConfig,
    watchOptions: {
        ignored: [
            '**/node_modules',
            '**/*.asset.php',
            '**/index.css',
            '**/index-rtl.css',
        ],
    },
    resolve: {
        alias: {
            '@utilities': path.resolve(__dirname, 'blocks/utilities'),
            '@configuration': path.resolve(__dirname, 'blocks/configuration'),
        },
        extensions: ['.js', '.jsx'],
    },
    plugins: [
        ...defaultConfig.plugins,
        new WebpackBuildNotifierPlugin({
            title: 'Base Theme',
            logo: path.resolve('./webpack_icons/favicon.png'),
            suppressSuccess: true,
        }),
        // new CleanTerminalPlugin({
        //     beforeCompile: true,
        //     message: 'New Build Started...',
        //     onlyInWatchMode: false,
        // }),
    ],
};

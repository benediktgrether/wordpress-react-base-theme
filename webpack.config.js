const path = require('path');
const defaultConfig = require('@wordpress/scripts/config/webpack.config');
const WebpackBuildNotifierPlugin = require('webpack-build-notifier');
const CleanTerminalPlugin = require('clean-terminal-webpack-plugin');

module.exports = {
    ...defaultConfig,

    resolve: {
        alias: {
            '@utilities': path.resolve(__dirname, 'blocks/utilities'),
            '@configuration': path.resolve(__dirname, 'blocks/configuration'),
        },
        extensions: ['.js', '.jsx'], // Add file extensions for easier resolution
    },

    module: {
        ...defaultConfig.module,
        rules: [...defaultConfig.module.rules],
    },
    plugins: [
        ...defaultConfig.plugins,
        new WebpackBuildNotifierPlugin({
            title: 'Base Theme',
            logo: path.resolve('./webpack_icons/favicon.png'),
            suppressSuccess: true,
        }),
        new CleanTerminalPlugin({
            beforeCompile: true,
            message: 'New Build Started...',
            onlyInWatchMode: true,
        }),
    ],
};

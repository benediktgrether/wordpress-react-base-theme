const path = require('path');
const defaultConfig = require('@wordpress/scripts/config/webpack.config');
const WebpackBuildNotifierPlugin = require('webpack-build-notifier');
const CleanTerminalPlugin = require('clean-terminal-webpack-plugin');

module.exports = {
    ...defaultConfig,
    module: {
        ...defaultConfig.module,
        rules: [...defaultConfig.module.rules],
    },
    plugins: [
        ...defaultConfig.plugins,
        new WebpackBuildNotifierPlugin({
            title: 'Everyday Custom Elementor Components',
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

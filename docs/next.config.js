const withNextra = require('nextra')({
    theme: 'nextra-theme-docs',
    themeConfig: './theme.config.tsx',
});

module.exports = withNextra({
    reactStrictMode: false,
    basePath: '', // Adjusted to scope the app under '/docs' for better separation (optional, customize as needed)
    distDir: 'build', // Specifies a custom build output directory
    trailingSlash: true, // Ensures all routes use a trailing slash (optional for documentation sites)
    images: {
        unoptimized: true, // Useful for static exports or documentation where optimized images are not required
    },
    output: 'standalone', // Configures the app for a standalone production build, great for isolated setups
    webpack: (config, { isServer }) => {
        // Example: Custom webpack configuration
        if (!isServer) {
            config.resolve.fallback = {
                ...config.resolve.fallback,
                fs: false, // Disables 'fs' for client-side builds if imported unintentionally
            };
        }
        return config;
    },
});

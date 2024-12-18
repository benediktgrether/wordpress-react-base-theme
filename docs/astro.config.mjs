import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
    site: 'https://benediktgrether.github.io/wordpress-base-theme-docs',
    base: '/wordpress-base-theme-docs/',

    integrations: [
        starlight({
            title: 'WordPress Custom Gutenberg Documentation',
            social: {
                github: 'https://github.com/withastro/starlight',
            },
            sidebar: [
                {
                    label: 'Getting Started',
                    autogenerate: { directory: 'getting-started' },
                },
                {
                    label: 'Configuration',
                    autogenerate: { directory: 'configuration' },
                },
                {
                    label: 'Layout',
                    autogenerate: { directory: 'layout' },
                },
                {
                    label: 'Utilities',
                    autogenerate: { directory: 'utilities' },
                },
                {
                    label: 'Components',
                    autogenerate: { directory: 'components' },
                },
                {
                    label: 'WordPress',
                    autogenerate: { directory: 'wordpress' },
                },
            ],
        }),
    ],
});

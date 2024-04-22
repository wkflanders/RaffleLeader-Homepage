import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightBlog from 'starlight-blog';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://raffleleader.com',
  integrations: [
    starlightBlog({
      title: 'Blog',
      customCss: ['./src/styles/tailwind.css'],
      authors: {
        stephen: {
          name: 'Stephen',
          title: 'Dev Rel @ Wasp',
          picture: '/STEPHEN.jpg',
          // Images in the `public` directory are supported.
          url: 'https://raffleleader.com',
        },
      },
    }),
    starlight({
      title: 'Raffle Leader',
      customCss: ['./src/styles/tailwind.css'],
      description: 'Documentation for Raffle Leader.',
      logo: {
        src: '/src/assets/logo.png',
        alt: 'Raffle Leader',
      },
      head: [
        // Add your script tags here. Below is an example for Google analytics, etc.
        {
          tag: 'script',
          attrs: {
            src: 'https://www.googletagmanager.com/gtag/js?id=<YOUR-GOOGLE-ANALYTICS-ID>',
          },
        },
        {
          tag: 'script',
          content: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', '<YOUR-GOOGLE-ANALYTICS-ID>');
          `,
        },
      ],
      editLink: {
        baseUrl: 'https://github.com/',
      },
      components: {
        SiteTitle: './src/components/MyHeader.astro',
        MarkdownContent: 'starlight-blog/overrides/MarkdownContent.astro',
        Sidebar: 'starlight-blog/overrides/Sidebar.astro',
        // ThemeSelect: 'starlight-blog/overrides/ThemeSelect.astro',
      },

      social: {
        twitter: 'https://twitter.com/RaffleLeader',
      },
      sidebar: [
        {
          label: 'Start Here',
          items: [
            {
              label: 'Introduction',
              link: '/',
            },
          ],
        },
        {
          label: 'Guides',
          items: [
            {
              label: 'Example Guide',
              link: '/guides/example/',
            },
          ],
        },
      ],
    }),
    tailwind({ applyBaseStyles: false }),
  ],
});

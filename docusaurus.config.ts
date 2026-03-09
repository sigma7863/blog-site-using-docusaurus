import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'My Site',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'sigma7863',
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'ja',
    locales: ['ja','en'],
  },

  themes: ["@docusaurus/theme-mermaid"],

  markdown: {
    mermaid: true,
  },

  plugins: [
    [
      "@docusaurus/plugin-content-blog",
      {
        id: "blog-diary",
        routeBasePath: "diary",
        path: "diary",
      },
    ],
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
        },
        blog: {
          routeBasePath: 'blog',
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/my-icon.png',
    colorMode: {
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: 'Sigma Room',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          label: '今週のテックニュース！',
          to: 'docs/technews/2026',
        },
        {
          label: 'Books',
          to: 'docs/books',
        },
        {
          label: 'Blog',
          to: '/blog',
        },
        {
          label: 'Diary',
          to: '/diary',
        },
        // {
        //   label: 'Projects',
        //   to: '/projects'
        // },
        {
          href: 'https://github.com/sigma7863/blog-site-using-docusaurus',
          className: "header-github-link",
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Contents',
          items: [
            {
              label: '今週のテックニュース！',
              to: 'docs/technews/2026',
            },
            {
              label: 'Books',
              to: 'docs/books',
            },
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'Diary',
              to: '/diary',
            },
            // {
            //   label: 'Projects',
            //   to: '/projects'
            // },
            // {
            //   label: 'メモ',
            //   to: '/memo'
            // },
          ],
        },
        {
          title: 'Link',
          items: [
            {
              label: 'X',
              href: 'https://x.com/qktlg9',
            },
            {
              label: 'Github',
              href: 'https://github.com/sigma7863'
            },
            {
              label: 'Discord',
              href: 'https://discord.com/users/1078241292422762579',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/sigma7863',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} sigma7863, Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    algolia: {
      appId: 'HNCP2HFZ8P',
      apiKey: 'b0c0fc3e41a2f6d76e070fc1dc79f999',
      indexName: 'Test',
      contextualSearch: true,
      externalUrlRegex: 'external\\.com|domain\\.com',
      replaceSearchResultPathname: {
        from: '/docs/', // or as RegExp: /\/docs\//
        to: '/',
      },
      searchParameters: {},
      searchPagePath: false,
      insights: false,

      // Optional: whether you want to use the new Ask AI feature (undefined by default)
      // askAi: 'YOUR_ALGOLIA_ASK_AI_ASSISTANT_ID',

      //... other Algolia params
    },
  } satisfies Preset.ThemeConfig,
};

export default config;

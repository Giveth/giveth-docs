const math = require('remark-math')
const katex = require('rehype-katex')

module.exports = {
  title: 'Giveth Docs',
  tagline: 'The Future of Giving, Documented',
  url: 'https://docs.giveth.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'giveth', // Usually your GitHub org/user name.
  projectName: 'giveth-docs', // Usually your repo name.
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es', 'de', 'pt'],
    localeConfigs: {
      en: {
        label: 'English',
        direction: 'ltr',
        htmlLang: 'en-US'
      },
      // You can omit a locale (e.g. fr) if you don't need to override the defaults
      es: {
        label: 'Español',
        direction: 'ltr',
        htmlLang: 'es-MX'
      },
      pt: {
        label: 'Portugués',
        direction: 'ltr',
        htmlLang: 'pt-BR'
      },
      de: {
        label: 'Deutsch',
        direction: 'ltr',
        htmlLang: 'de-DE'
      }
    }
  },
  themeConfig: {
    algolia: {
      apiKey: 'fe5b34ba5c3a21a81a7e6f77e6bb1b5e',
      indexName: 'giveth',

      // Optional: see doc section below
      contextualSearch: false,

      // Optional: see doc section below
      appId: 'BH4D9OD16A',

      // Optional: Algolia search parameters
      searchParameters: {}

      //... other Algolia params
    },
    hideableSidebar: true,
    navbar: {
      title: 'Giveth Documentation',
      logo: {
        alt: 'Giveth Docs Logo',
        src: 'img/logo.svg'
      },
      items: [
        {
          to: 'whatisgiveth/',
          activeBasePath: 'whatisgiveth',
          label: 'What is Giveth?',
          position: 'left'
        },
        {
          to: 'dapps/',
          activeBasePath: 'dapps/',
          label: 'DApps',
          position: 'left'
        },
        {
          to: 'giveconomy/',
          activeBasePath: 'giveconomy',
          label: 'GIVeconomy',
          position: 'left'
        },
        {
          href: 'https://giveth.recruitee.com/',
          label: 'Jobs',
          position: 'left'
        },
        {
          to: 'newsletter',
          label: 'Newsletter',
          position: 'left'
        },
        {
          to: 'blog',
          label: 'Blog',
          position: 'left'
        },
        {
          type: 'localeDropdown',
          position: 'right'
        },
        {
          href: 'https://github.com/giveth/giveth-docs',
          label: 'GitHub',
          position: 'right'
        }
      ]
    },
    footer: {
      style: 'light',
      links: [
        {
          title: 'Get Started',
          items: [
            {
              label: 'Giveth.io',
              to: 'dapps/givethIO'
            },
            {
              label: 'Giveth TRACE',
              to: 'dapps/introTrace'
            },
            {
              label: 'GIVeconomy',
              to: 'giveconomy/'
            }
          ]
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Join',
              href: 'https://giveth.io/join'
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/givethio'
            }
          ]
        },
        {
          title: 'More',
          items: [
            {
              label: 'Jobs',
              href: 'https://giveth.recruitee.com/'
            },
            {
              label: 'GitHub',
              href: 'https://github.com/giveth/giveth-docs'
            }
          ]
        }
      ],
      copyright: `${new Date().getFullYear()} no rights reserved - made with ❤️ by Giveth.io`
    }
  },
  plugins: [
    [
      '@docusaurus/plugin-content-docs',

      {
        id: 'dapps',

        path: 'dapps',

        editUrl: 'https://github.com/giveth/giveth-docs/edit/master/',

        routeBasePath: '/',

        sidebarPath: require.resolve('./sidebarsDapps.js'),

        showLastUpdateAuthor: true,

        showLastUpdateTime: true,
        remarkPlugins: [math],
        rehypePlugins: [katex]
      }
    ],
    [
      '@docusaurus/plugin-content-docs',

      {
        id: 'whatisgiveth',

        path: 'whatisgiveth',

        editUrl: 'https://github.com/giveth/giveth-docs/edit/master/',

        routeBasePath: 'whatisgiveth',

        sidebarPath: require.resolve('./sidebarsWhatisgiveth.js'),

        showLastUpdateAuthor: true,

        showLastUpdateTime: true
      }
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'newsletter',
        routeBasePath: 'newsletter',
        sidebarPath: require.resolve('./sidebarNewsletter.js'),

        path: 'newsletter'
      }
    ]
    // [
    //   '@docusaurus/plugin-content-docs',
    //
    //   {
    //     id: 'jobs',
    //
    //     path: 'jobs',
    //
    //     editUrl: 'https://github.com/giveth/giveth-docs/edit/master/',
    //
    //     routeBasePath: 'jobs',
    //
    //     sidebarPath: require.resolve('./sidebarsjobs.js'),
    //
    //     showLastUpdateAuthor: true,
    //
    //     showLastUpdateTime: true
    //   }
    // ],
    // [
    //   '@docusaurus/plugin-content-docs',
    //
    //   {
    //     id: 'giveconomy',
    //
    //     path: 'giveconomy',
    //
    //     editUrl: 'https://github.com/giveth/giveth-docs/edit/master/',
    //
    //     routeBasePath: 'giveconomy',
    //
    //     sidebarPath: require.resolve('./sidebarsgiveconomy.js'),
    //
    //     showLastUpdateAuthor: true,
    //
    //     showLastUpdateTime: true,
    //     remarkPlugins: [math],
    //     rehypePlugins: [katex],
    //   }
    // ]
  ],

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        blog: {
          blogSidebarTitle: 'All posts',
          blogSidebarCount: 'ALL'
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css')
        }
      }
    ]
  ],
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.11/dist/katex.min.css',
      integrity:
        'sha384-Um5gpz1odJg5Z4HAmzPtgZKdTBHZdw8S29IecapCSB31ligYPhHQZMIlWLYQGVoc',
      crossorigin: 'anonymous'
    }
  ]
}

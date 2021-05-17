module.exports = {
  title: 'Giveth Docs',
  tagline: 'User and Developer Guides, Technical Documentation and much more!',
  url: 'https://docs.giveth.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'giveth', // Usually your GitHub org/user name.
  projectName: 'giveth-docs', // Usually your repo name.
  themeConfig: {
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
          to: 'givethio/',
          activeBasePath: 'givethio',
          label: 'Giveth.io',
          position: 'left'
        },
        {
          to: 'trace/',
          activeBasePath: 'trace',
          label: 'Giveth TRACE',
          position: 'left'
        },

       // {
          // to: 'givbacks/',
          // activeBasePath: 'givbacks',
          // label: 'GIVBacks - The Giveth Token',
          // position: 'left'
        // },
        {
          to: 'jobs/',
          activeBasePath: 'jobs',
          label: 'Jobs',
          position: 'left'
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
              to: 'givethio/'
            },
            {
              label: 'Giveth TRACE',
              to: 'trace/'
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
              to: 'jobs'
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
        id: 'givethio',

        path: 'givethio',

        editUrl: 'https://github.com/giveth/giveth-docs/edit/master/',

        routeBasePath: 'givethio',

        sidebarPath: require.resolve('./sidebarsGivethIO.js'),

        showLastUpdateAuthor: true,

        showLastUpdateTime: true
      }
    ],
      [
        '@docusaurus/plugin-content-docs',

        {
          id: 'trace',

          path: 'trace',

          editUrl: 'https://github.com/giveth/giveth-docs/edit/master/',

          routeBasePath: 'trace',

          sidebarPath: require.resolve('./sidebarsGivethTRACE.js'),

          showLastUpdateAuthor: true,

          showLastUpdateTime: true
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
        id: 'jobs',

        path: 'jobs',

        editUrl: 'https://github.com/giveth/giveth-docs/edit/master/',

        routeBasePath: 'jobs',

        sidebarPath: require.resolve('./sidebarsjobs.js'),

        showLastUpdateAuthor: true,

        showLastUpdateTime: true
      }
    ],
    [
      '@docusaurus/plugin-content-docs',

      {
        id: 'givbacks',

        path: 'givbacks',

        editUrl: 'https://github.com/giveth/giveth-docs/edit/master/',

        routeBasePath: 'givbacks',

        sidebarPath: require.resolve('./sidebarsgivbacks.js'),

        showLastUpdateAuthor: true,

        showLastUpdateTime: true
      }
    ]
  ],


  presets: [
    [
      '@docusaurus/preset-classic',
      {
        theme: {
          customCss: require.resolve('./src/css/custom.css')
        }
      }
    ]
  ]
}

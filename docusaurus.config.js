module.exports = {
  title: 'Giveth Docs',
  tagline: 'Documentation and Guides for Giveth.io',
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
          to: 'guides/',
          activeBasePath: 'guides',
          label: 'User Guides',
          position: 'left'
        },
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Developer Docs',
          position: 'left'
        },
        {
          to: 'whatisgiveth/',
          activeBasePath: 'whatisgiveth',
          label: 'What is Giveth?',
          position: 'left'
        },
        {
          to: 'givbacks/',
          activeBasePath: 'givbacks',
          label: 'GIVBacks - The Giveth Token',
          position: 'left'
        },
        { to: 'blog', label: 'Blog', position: 'left' },
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
              label: 'Users',
              to: 'docs/'
            },
            {
              label: 'Developers',
              to: 'guides/'
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
              label: 'Blog',
              to: 'blog'
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
        id: 'guides',

        path: 'guides',

        editUrl: 'https://github.com/giveth/giveth-docs/edit/master/',

        routeBasePath: 'guides',

        sidebarPath: require.resolve('./sidebarsGuides.js'),

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
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/giveth/giveth-docs/edit/master/'
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: 'https://github.com/giveth/giveth-docs/edit/master/'
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css')
        }
      }
    ]
  ]
}

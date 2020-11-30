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
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Developer Docs',
          position: 'left'
        },
        {
          to: 'guides/',
          activeBasePath: 'guides',
          label: 'User Guides',
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
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Style Guide',
              to: 'docs/'
            },
            {
              label: 'Second Doc',
              to: 'docs/doc2/'
            }
          ]
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/giveth'
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

        editUrl: 'https://github.com/giveth/giveth-docs/edit/master/website/',

        routeBasePath: 'guides',

        sidebarPath: require.resolve('./sidebarsGuides.js'),

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
          editUrl: 'https://github.com/giveth/giveth-docs/edit/master/website/'
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/giveth/giveth-docs/edit/master/website/blog/'
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css')
        }
      }
    ]
  ]
}

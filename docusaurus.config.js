const math = require('remark-math')
const katex = require('rehype-katex')

/**
 * docs.giveth.io
 *
 * Content is generated from Notion, which is the source of truth — see
 * scripts/notion_export.py. The navigation reproduces the Super site it
 * replaces, recovered into super-salvage/.
 *
 * Docs are served at the site root with flat, lowercase URLs (/givbacks,
 * /about-giveth) because that is what Super served and those URLs are indexed.
 * Each page carries its URL in frontmatter `slug`, set from scripts/slug_map.json.
 */
module.exports = {
  title: 'Giveth Docs',
  tagline: 'The Future of Giving, Documented',
  url: 'https://docs.giveth.io',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'giveth',
  projectName: 'giveth-docs',

  // The Super site served English only, so the rebuild does too. The previous
  // es/pt/tr translations covered the older markdown and remain in git history.
  i18n: {
    defaultLocale: 'en',
    locales: ['en']
  },

  themeConfig: {
    colorMode: {
      respectPrefersColorScheme: true
    },
    docs: {
      sidebar: {
        hideable: true
      }
    },
    algolia: {
      apiKey: 'fe5b34ba5c3a21a81a7e6f77e6bb1b5e',
      indexName: 'giveth',
      contextualSearch: false,
      appId: 'BH4D9OD16A',
      searchParameters: {}
    },
    navbar: {
      title: 'Giveth Docs',
      logo: {
        alt: 'Giveth Docs',
        src: 'img/logo.svg',
        className: 'no-border'
      },
      // Mirrors the Super navbar.
      items: [
        { to: '/about-giveth', label: 'About Giveth', position: 'left' },
        { to: '/gettingstarted', label: 'Getting Started', position: 'left' },
        { to: '/giveconomy', label: 'GIVeconomy', position: 'left' },
        { to: '/createproject', label: 'Create a Project', position: 'left' },
        { to: '/projectdonating', label: 'Donations', position: 'left' },
        { to: '/devouch', label: 'Devouch', position: 'left' },
        { to: '/brandbook', label: 'Brandbook', position: 'left' }
      ]
    },
    footer: {
      style: 'light',
      // Mirrors the Super footer — see super-salvage/super_footer.json.
      links: [
        {
          title: 'Giveth',
          items: [
            { label: 'Blog', href: 'https://blog.giveth.io/' },
            { label: 'News', href: 'https://news.giveth.io/' },
            { label: 'Jobs', href: 'https://giveth.recruitee.com/' },
            {
              label: 'Support us with a Donation',
              href: 'https://giveth.io/donate/the-giveth-community-of-makers'
            }
          ]
        },
        {
          title: 'Community',
          items: [
            { label: 'Discord', href: 'https://discord.com/invite/Uq2TaXP9bC' },
            { label: 'X', href: 'https://x.com/giveth' },
            { label: 'Farcaster', href: 'https://warpcast.com/~/channel/giveth' },
            { label: 'Reddit', href: 'https://www.reddit.com/r/giveth/' }
          ]
        },
        {
          title: 'More',
          items: [
            { label: 'GitHub', href: 'https://github.com/Giveth/' },
            { label: 'YouTube', href: 'https://www.youtube.com/givethio' },
            { label: 'Instagram', href: 'https://www.instagram.com/giveth.io/' },
            { label: 'Givtoken Linktree', href: 'https://linktr.ee/givtoken' }
          ]
        }
      ],
      copyright: `© ${new Date().getFullYear()} Giveth Docs — no rights reserved, made with ❤️ by Giveth`
    }
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          path: 'docs',
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebarsNotion.js'),
          editUrl: 'https://github.com/giveth/giveth-docs/edit/master/',
          showLastUpdateTime: true,
          remarkPlugins: [math],
          rehypePlugins: [katex]
        },
        blog: false,
        theme: {
          customCss: [
            require.resolve('./src/css/custom.css'),
            require.resolve('./src/css/notion-blocks.css')
          ]
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

/*
 * Site navigation.
 *
 * Generated once from super-salvage/super_nav.json and super_footer.json, then
 * maintained by hand. Super's sidebar was curated in its dashboard and does not
 * match the shape of the Notion tree -- 12 sections here versus 4 in Notion --
 * and that curated arrangement is the one the site keeps. See
 * NOTION-RENDERER-PLAN.md section 1.
 *
 * A page does not need an entry here to be reachable: every Notion page
 * resolves at its slug regardless. This file only controls what appears in nav.
 */

export interface NavLink {
  label: string
  href: string
}

export interface NavSection {
  label: string
  /** Key into SECTION_ICONS in components/icons.tsx. */
  icon: string
  /** A section with no children is a bare link, like FAQ. */
  href?: string
  items?: NavLink[]
}

export const SIDEBAR: NavSection[] = [
  {
    label: 'What Is Giveth?',
    icon: 'FileQuestion',
    items: [
      { label: 'About Giveth', href: '/about-giveth' },
      { label: 'Getting Started', href: '/gettingstarted' },
      { label: 'DAO Structure', href: '/daostructure' },
      { label: 'Zero Fees', href: '/zero-fees' },
      { label: 'Brandbook', href: '/brandbook' },
    ],
  },
  {
    label: 'Giveth Principles',
    icon: 'HeartHandshake',
    items: [
      { label: 'Code of Conduct', href: '/codeofconduct' },
      { label: 'Community Communications Guide', href: '/communitycommsguide' },
      { label: 'Community Covenant', href: '/covenant' },
    ],
  },
  {
    label: 'Giveth Processes',
    icon: 'AudioWaveform',
    items: [
      { label: 'Advice Process', href: '/adviceprocess' },
      { label: 'Governance Process', href: '/governanceprocess' },
    ],
  },
  {
    label: 'Projects Guide',
    icon: 'BookKey',
    items: [
      { label: 'Create a project', href: '/createproject' },
      { label: 'Adding Updates to Your Project', href: '/mandatoryupdates' },
      { label: 'Project Quality Assurance Guide', href: '/listedunlisted' },
      { label: 'Project Verification Processes and Guidelines', href: '/projectverification' },
    ],
  },
  {
    label: 'Donors Guide',
    icon: 'BookOpenCheck',
    items: [
      { label: 'Making a Donation', href: '/projectdonating' },
      { label: 'Recurring Donations', href: '/recurringdonation' },
      { label: 'Donating with Metamask', href: '/donatingmetamask' },
    ],
  },
  {
    label: 'Causes',
    icon: 'Sprout',
    href: '/donation-agents',
    items: [
      { label: 'How it Works', href: '/donation-agents/how-it-works' },
      { label: 'Creating a Cause', href: '/donation-agents/creating-a-cause' },
      { label: 'For Project Owners', href: '/donation-agents/for-project-owners' },
    ],
  },
  {
    label: 'Fundraising Guide',
    icon: 'Plus',
    items: [
      { label: 'Fundraising Campaign Guide with Giveth', href: '/fundraisingguide' },
      { label: 'Giveth Matching Pool', href: '/givethmatchingpool' },
      { label: 'The Givers PFP Collection', href: '/pfpcollection' },
      { label: 'Quadratic Funding', href: '/quadraticfunding' },
    ],
  },
  {
    label: 'Wallets Guide',
    icon: 'Wallet',
    items: [
      { label: 'MultiSig Wallets on Giveth', href: '/multisigs' },
    ],
  },
  {
    label: 'GIVeconomy',
    icon: 'HelpingHand',
    items: [
      { label: 'About GIVeconomy', href: '/giveconomy' },
      { label: 'GIVbacks', href: '/givbacks' },
      { label: 'GIVstream', href: '/givstream' },
      { label: 'GIVpower', href: '/givpower' },
      { label: 'Archived Staking Pools', href: '/what-is-giveth/the-giveconomy/archived-staking-pools' },
      { label: 'GIVdrop', href: '/givdrop' },
      { label: 'GIVgarden (Deprecated)', href: '/givgarden' },
      { label: 'GIVfarm (Deprecated)', href: '/givfarm' },
    ],
  },
  {
    label: 'Regen Farms',
    icon: 'Wheat',
    items: [
      { label: 'About Regen Farms', href: '/regenfarms' },
      { label: 'Regen Farm Contracts', href: '/regenfarmcontracts' },
    ],
  },
  {
    label: 'Devouch Docs',
    icon: 'Check',
    items: [
      { label: 'What Is Devouch?', href: '/devouch/what-is-devouch' },
      { label: 'Integrating Devouch', href: '/devouch/integrating-devouch' },
    ],
  },
  {
    label: 'Security & Troubleshooting',
    icon: 'BookOpen',
    items: [
      { label: 'Troubleshooting', href: '/troubleshooting' },
      { label: 'Reporting a Security Issue or Vulnerability', href: '/submit-vulnerability' },
    ],
  },
  {
    label: 'FAQ',
    icon: 'MessageCircleMore',
    href: '/faq',
  },
]

export const NAVBAR: NavLink[] = [
  { label: 'About Giveth', href: '/about-giveth' },
  { label: 'Getting Started', href: '/gettingstarted' },
  { label: 'GIVeconomy', href: '/giveconomy' },
  { label: 'Create a Project', href: '/createproject' },
  { label: 'Donations', href: '/projectdonating' },
  { label: 'Devouch', href: '/devouch' },
  { label: 'Brandbook', href: '/brandbook' },
]

export const FOOTER_LINKS: NavLink[] = [
  { label: 'Blog', href: 'https://blog.giveth.io/' },
  { label: 'News', href: 'https://news.giveth.io/' },
  { label: 'Recruitee', href: 'https://giveth.recruitee.com/' },
  { label: 'Farcaster', href: 'https://warpcast.com/~/channel/giveth' },
  { label: 'Givtoken Linktree', href: 'https://linktr.ee/givtoken' },
  { label: 'Support us with a Donation', href: 'https://giveth.io/donate/the-giveth-community-of-makers' },
]

export const FOOTER_SOCIALS: Array<{ type: string; href: string }> = [
  { type: 'twitter', href: 'https://x.com/giveth' },
  { type: 'discord', href: 'https://discord.com/invite/Uq2TaXP9bC' },
  { type: 'instagram', href: 'https://www.instagram.com/giveth.io/' },
  { type: 'github', href: 'https://github.com/Giveth/' },
  { type: 'medium', href: 'https://blog.giveth.io/' },
  { type: 'reddit', href: 'https://www.reddit.com/r/giveth/' },
  { type: 'youtube', href: 'https://www.youtube.com/givethio' },
]

export const FOOTER_NOTE = '© Giveth Docs'

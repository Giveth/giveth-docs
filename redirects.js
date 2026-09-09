/**
 * Super/Notion URL -> Docusaurus route redirects.
 *
 * The Super site served flat, all-lowercase URLs (/givbacks). Docusaurus serves
 * nested, camelCase routes (/giveconomy/givbacks). Only 3 of the 36 navigated
 * URLs happen to be identical, so nearly every inbound link needs a redirect.
 *
 * Generated from super-salvage/super_nav.json against the built route list.
 * Wire up with @docusaurus/plugin-client-redirects (not yet a dependency):
 *
 *   ['@docusaurus/plugin-client-redirects', { redirects: require('./redirects') }]
 */

module.exports = [
  // What Is Giveth?
  { from: '/about-giveth', to: '/whatisgiveth' }, // About Giveth
  { from: '/gettingstarted', to: '/dapps/gettingStarted' }, // Getting Started
  { from: '/daostructure', to: '/whatisgiveth/daoStructure' }, // DAO Structure
  { from: '/zero-fees', to: '/whatisgiveth/zero-fees' }, // Zero Fees
  { from: '/brandbook', to: '/whatisgiveth/brandBook' }, // Brandbook
  // Giveth Principles
  { from: '/codeofconduct', to: '/whatisgiveth/codeofconduct' }, // Code of Conduct
  { from: '/communitycommsguide', to: '/whatisgiveth/communityCommsGuide' }, // Community Communications Guide
  { from: '/covenant', to: '/whatisgiveth/covenant' }, // Community Covenant
  // Giveth Processes
  { from: '/adviceprocess', to: '/whatisgiveth/adviceProcess' }, // Advice Process
  { from: '/governanceprocess', to: '/whatisgiveth/governanceProcess' }, // Governance Process
  // Projects Guide
  { from: '/createproject', to: '/dapps/createproject' }, // Create a project
  { from: '/mandatoryupdates', to: '/dapps/projectUpdates' }, // Adding Updates to Your Project
  { from: '/listedunlisted', to: '/dapps/listedUnlisted' }, // Project Quality Assurance Guide
  { from: '/projectverification', to: '/dapps/projectVerification' }, // Project Verification Processes and Guidelines
  // Donors Guide
  { from: '/projectdonating', to: '/dapps/projectdonating' }, // Making a Donation
  { from: '/recurringdonation', to: '/dapps/recurringDonation' }, // Recurring Donations
  { from: '/donatingmetamask', to: '/dapps/donatingmetamask' }, // Donating with Metamask
  // Fundraising Guide
  { from: '/fundraisingguide', to: '/whatisgiveth/fundraisingGuide' }, // Fundraising Campaign Guide with Giveth
  { from: '/givethmatchingpool', to: '/givethMatchingPool' }, // Giveth Matching Pool
  { from: '/pfpcollection', to: '/dapps/giverspfp' }, // The Givers PFP Collection
  // Wallets Guide
  { from: '/multisigs', to: '/dapps/multisigs' }, // MultiSig Wallets on Giveth
  // GIVeconomy
  { from: '/givbacks', to: '/giveconomy/givbacks' }, // GIVbacks
  { from: '/givstream', to: '/giveconomy/givstream' }, // GIVstream
  { from: '/givpower', to: '/giveconomy/givpower' }, // GIVpower
  { from: '/givdrop', to: '/giveconomy/givdrop' }, // GIVdrop
  { from: '/givgarden', to: '/giveconomy/givgarden' }, // GIVgarden (Deprecated)
  { from: '/givfarm', to: '/giveconomy/givfarm' }, // GIVfarm (Deprecated)
  // Regen Farms
  { from: '/regenfarms', to: '/regenFarms' }, // About Regen Farms
  { from: '/regenfarmcontracts', to: '/dapps/regenFarmContracts' }, // Regen Farm Contracts
  // Devouch Docs
  { from: '/devouch/what-is-devouch', to: '/devouch' }, // What Is Devouch?
  // Security & Troubleshooting
  { from: '/troubleshooting', to: '/dapps/troubleshooting' }, // Troubleshooting
  { from: '/submit-vulnerability', to: '/security/responsible-disclosure' }, // Reporting a Security Issue or Vulnerability
]

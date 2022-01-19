---
id: contributors
title: Contributing to Giveth Development
slug: dapps/contributors
---
import useBaseUrl from '@docusaurus/useBaseUrl'
import styles from '../src/css/custom.css'

Giveth currently maintains three products that focus on funding management, peer to peer donations, and DeFi for-good token economics. These are [Giveth TRACE](https://trace.giveth.io), [Giveth.io](https://giveth.io) and the [GIVeconomy](https://giv.giveth.io) respectively

All our products share some common development standards that are paramount to learn before engaging in any development for Giveth. In this document we'll show you how to interact with our open-source repositories, getting in touch with the right people and how to begin creating and picking up issues.


## Github Management
First things first, you'll need to install the [zenhub extension for github](https://chrome.google.com/webstore/detail/zenhub-for-github/ogcgkffhplmphkaahpmffcafajaocjbd) for your web browser that will allow you to see the workspaces and pipelines we use in Github to manage issues.

<img alt='All-Devs Zenhub Board' width='85%' height='auto' src={useBaseUrl('img/content/allDevsZenhub.png')} />

We have transitioned to manage all three DApps(products) under one workspace, **`All-Devs`**.

### Repositories
The [Giveth Github organization](https://github.com/Giveth) has many, many repositories. Here’s a general overview of relevant repositories that relate to our active products:

<table>
  <tr>
   <td><h3>Product</h3>
   </td>
   <td><h3>Repository</h3>
   </td>
   <td><h3>Description</h3>
   </td>
  </tr>
  <tr>
   <td>Giveth.io
   </td>
   <td>impact-graph
   </td>
   <td>Backend of Giveth.io
   </td>
  </tr>
  <tr>
   <td>Giveth.io
   </td>
   <td>giveth-next
   </td>
   <td>Giveth.io current version
   </td>
  </tr>
  <tr>
   <td>Giveth.io
   </td>
   <td>giveth-io-typescript
   </td>
   <td>Givethio typescript version with new design.
   </td>
  </tr>
  <tr>
   <td>GIVEeconomy
   </td>
   <td>GIVeconomy
   </td>
   <td>Usually used for planning and issue tracking
   </td>
  </tr>
  <tr>
   <td>GIVeconomy
   </td>
   <td>giv-token-contracts
   </td>
   <td>Smart contract implementations
   </td>
  </tr>
  <tr>
   <td>GIVeconomy
   </td>
   <td>liquidity-mining-dapp
   </td>
   <td>GIVeconomy Frontend UI
   </td>
  </tr>
  <tr>
   <td>GIVeconomy
   </td>
   <td>giv-token-subgraph
   </td>
   <td>Calculating $GIV data for GIVeconomy Frontend
   </td>
  </tr>
  <tr>
   <td>GIVeconomy
   </td>
   <td>givback-calculation
   </td>
   <td>Calculating GIVbacks
   </td>
  </tr>
  <tr>
   <td>TRACE
   </td>
   <td>giveth-dapp
   </td>
   <td>Frontend and planning of giveth TRACE
   </td>
  </tr>
  <tr>
   <td>TRACE
   </td>
   <td>feathers-giveth
   </td>
   <td>Backend of Giveth TRACE
   </td>
  </tr>
  <tr>
   <td>TRACE
   </td>
   <td>dapp-mailer
   </td>
   <td>Email notification system for TRACE
   </td>
  </tr>
  <tr>
   <td>TRACE
   </td>
   <td>giveth-bridge
   </td>
   <td>Giveth Rinkeby - Mainnet Bridge system
   </td>
  </tr>
  <tr>
   <td>General Services
   </td>
   <td>ui-design-system
   </td>
   <td>npm package for Giveth design assets
   </td>
  </tr>
</table>

### Pipelines on the `All-Devs` Workspace
When you enter a workspace on the Zenhub tab you'll see a line of adjacent columns that are used to identify and manage the statuses of issues currently in the repositories. You can find a short description of each below:

**New Issues** - New bugs and features go here first.

**Epics** - Pipeline for Epic Issues. Larger tasks comprised of several smaller issues.

**Icebox** - Features or Suggestions that have been archived. Issues here are non-priority and might be added into sprints only if Devs have the bandwidth.

**Backlog** - Lower Priority Issues waiting to get pulled into Sprint Planning.

**Sprint Backlog** - These issues have been vetted and are ready to be worked on. They will be added into the next sprint according to priority and Developer bandwidth.

**In Progress** - Picked up and being worked on by the Developers, usually on local builds.

**Code Reviews** - Open Pull Requests waiting for review and eventual merge into the staging server.
:::info
It’s mandatory to have the code reviewed by one of the core team members, usually your mentor or the one which introduces the project to you can review it, pls ask for review before pushing it to any environment.
:::

**UAT Testing/QA** - The feature or bug fix is deployed on the staging server for user testing and Quality Assurance.

**Done** - Bug fix or feature has been completed, and is ready to be deployed on the live server.
:::info
All issues should meet DoD (Definition of Done) criteria to be approved as Done and being in this column:
Success Criteria passed (if it’s  get mentioned in User Story / Task or related issue)
Deployed in Staging
UAT Tested by a tester or PM
Documented
:::

**Closed** - The bug fix or feature has been copied live. It’s recommended that all closed issues get related to a release number in the zenhub and get closed right after the version goes live.

### Creating Issues
Creating Github issues is essential to ensure bug fixes or features are tracked properly and relevant information can be organized, and consolidated. The new issue template is a guide only, feel free to delete any heading that you don't use.

**Labels** will help add context to your issue, please use them so other developers can get a better understanding of issues at a glance and pick them up. Some commonly used labels in `All-Devs` are:

**`fast follow`** - Priority features or improvements following a product launch or version release.

**`documentation`** - Requesting creation or updates of technical documentation.

**`bugs`** - Functionality or feature of a product that is broken or not working as intended

**`feature request`** - Requesting for a new feature or functionality to be added to a product

**`design needed`** - Requesting support from the design team to create assets relevant to this issue

**`question`** - There is a pending question inside this issue that needs a response in order to move forward

**`security`** - Security issue or improvement

**`UI`** - This issue relates to the User Interface of a given product

**`UX`** - This issue relates to the User Experience of a given product

## Ceremonies

We host in the [Giveth Discord](https://discord.giveth.io) many Developer meetings throughout the week including:
- Daily Dev Standups from Tuesday to Thursday at 6:30am GMT-6  
- All-Devs Sync weekly on Mondays at 10:00am GMT-6
- GIVeconomy Sync weekly on Wednesdays at 8:00am GMT-6

These meetings are important places to stay up to date with DApp development and to integrate with the Giveth Team as a Development Contributor.

## Sprint Management

Framework: We’re practicing mostly Scrum, in biweekly iterations (called sprints), sometimes based on project situations we move to KanBan.

### What is Scrum?
In scrum, the sprint is a set period of time where all the work is done. However, before you can leap into action you have to set up the sprint. You need to decide on how long the time box is going to be, the sprint goal, and where you're going to start. The sprint planning session kicks off the sprint by setting the agenda and focus.

- **The What** –  The product owner describes the objective(or goal) of the sprint and what backlog items contribute to that goal. The scrum team decides what can be done in the coming sprint and what they will do during the sprint to make that happen.

- **The How** – The development team plans the work necessary to deliver the sprint goal. Ultimately, the resulting sprint plan is a negotiation between the development team and product owner based on value and effort.

- **The Who** – You cannot do sprint planning without the product owner or the development team. The product owner defines the goal based on the value that they seek. The development team needs to understand how they can or cannot deliver that goal. If either is missing from this event it makes planning the sprint almost impossible.

- **The Inputs** – A great starting point for the sprint plan is the product backlog as it provides a list of ‘stuff’ that could potentially be part of the current sprint. The team should also look at the existing work done in the increment and have a view to capacity.

- **The Outputs** – The most important outcome for the sprint planning meeting is that the team can describe the goal of the sprint and how it will start working toward that goal. This is made visible in the sprint backlog.

<img alt="sprint planning" width='75%' src={useBaseUrl('img/content/sprintInfo.png')} />

Before the iteration starts, you may need to have your expected total contribution hours in [Giveth Resource Planning Spreadsheet](https://docs.google.com/spreadsheets/d/1fJcFTLJof6o0rViKIy4C46sXuisySTud40HFsMGE1e0/edit#gid=311929329), the link usually gets shared in the Discord dev channel before the sprint meeting. You can find the sprint sheet and update the following cells:

<img alt='resource planning spreadsheet' src={useBaseUrl('img/content/resourcePlanningAllDevs.png')} />

It helps the Product Managers (PMs) to plan for the resources better and know if they are able to meet the milestone in each sprint or not. If you couldn’t find time to fill out the spreadsheet, you may be asked to do so during the meeting or whenever you can have an estimate, just DM it to PMs or put it in the dev channel.

The usual sprint planning goes like this:

1. PMs bring the issues (Preferably User Stories to the planning meeting, describe it and make sure it’s clear for the team to start implementing.
2. PM facilitates talks between devs to make it as clear as it can be.
3. PM asks for estimations in Story Points (Story Points are the unit of minimum effort spent on a product which can be delivered asap, like a simple bug fix, for example, could take half of a working day. )
4. PM starts building “Sprint Backlog” with prioritizing the issues and makes sure the total amount of Story Points are proportionate with the total capacity of the teams and contributors.
5. Everyone agrees on the sprint plan and commits to the expected goal.


## Key Contacts

- Development Working Group Steward - Amin
    - Discord Handle: `Amin#2164`
- GIVeconomy Product Manager - Lauren
    - Discord Handle: `karmaticacid#1218`
- Giveth TRACE, Giveth.io Product Manager - MoeNick
    - Discord Handle: `MoeNick#1374`
- Giveth.io Lead Developer - Mateo
    - Discord Handle: `mateodaza#3156`
- DevOps & Security - Kay
    - Discord Handle: `geleeroyale#3228`
- Lead Designer - Marko
    - Discord Handle: `markop#2007`

## Installation Guides for Local Development

- [Giveth.io](./givethioinstallation)
- [Giveth TRACE](./TRACEinstallation)
- [GIVeconomy](./installGIVeconomy)

## Testing Guidelines

- [Giveth.io](./testing-guidelines)
- [GIVeconomy](./testingGIVeconomy)

## Tools we Use

- [Segment](https://segment.com/) (Giveth TRACE, Giveth.io)
- [Sentry](https://sentry.io/welcome/) (Giveth TRACE, Giveth.io)
- [Infura](https://infura.io/) (Giveth TRACE, Giveth.io)
- [Autopilot](https://journeys.autopilotapp.com/features/email-marketing-software) (Giveth.io)
- [Amplitude](https://www.amplitude.com/) (Giveth TRACE, Giveth.io)
- [Docusaurus](https://docusaurus.io/) (Documentation)
- [The Graph](https://thegraph.com/en/) (GIVeconomy)
- [Netlify](https://www.netlify.com/) (Giveth TRACE)
- [Vercel](https://vercel.com/dashboard) (Giveth.io, GIVeconomy)
- [Cryptocompare](https://www.cryptocompare.com/) (Giveth TRACE)
- [Coingecko](https://www.coingecko.com/en/api) (All Products)
- [Github Actions](https://github.com/features/actions) (All Products)
- [MongoDB](https://www.mongodb.com/) (Giveth TRACE)
- [PostgreSQL](https://www.postgresql.org/) (Giveth.io)
- [Redis](https://redis.io/) (Giveth TRACE, Giveth.io)
- [Elastic Search](https://www.elastic.co/elasticsearch/) (Giveth TRACE)
- [Kibana](https://www.elastic.co/kibana/) (Giveth TRACE)
- [Pinata](https://www.pinata.cloud/) (Giveth.io, GIVeconomy)
- [Transak](https://transak.com/) (Giveth.io)
- [AdminBro](https://v2.adminbro.com/index.html) (Giveth.io)

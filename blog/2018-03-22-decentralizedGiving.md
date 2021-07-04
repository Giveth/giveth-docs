---
slug: decentralizedGiving
title: How Decentralized Giving could have helped (and will help) increase Transparency and avoid Cases like Oxfam’s Scandal
author: Lanski
author_image_url: /img/Lanski.jpeg
---
import useBaseUrl from '@docusaurus/useBaseUrl'
import styles from '../src/css/custom.css'


Oxfam, consistently rated [one of the best NGOs in the world](https://www.oxfam.org.uk/blogs/2012/01/oxfam-number-three-in-top-100-best-ngos) and a household name in most western countries, is mired in a scandal over allegedly [abusing of both people and funds](http://nationalpost.com/news/world/a-full-on-caligula-orgy-oxfam-charity-accused-of-exploiting-haiti-disaster-victims-for-sex) in Haiti during the aid mission deployed after the hurricane Harvey. Not only this, but it is also accused of its employees exchanging aid for sexual favours, plain and simple sexual abuse. The case has opened the door for a cry of the nonprofit sector to uncover and denounce these practises, which seem to be [more common than one would think](https://www.theguardian.com/global-development/audio/2018/feb/14/oxfam-allegations-are-tip-of-iceberg-sexual-harassment-and-aid-workers-podcast).

Transparency and accountability in charitable donations have been put in check after the scandal broke out, with the International Development Secretary of the UK announcing a big audit of the organizations funded by public money, under [threat of cutting the funding](https://www.independent.co.uk/news/uk/home-news/oxfam-sexual-abuse-aid-workers-haiti-prostitutes-scandal-national-crime-agency-mordaunt-latest-a8211211.html) if their standards are not met. Presumably, such an audit will be expensive and will not bring much to light, as the system is fundamentally opaque, spending more taxpayers’ money that could be dedicated to social impact projects.

Despite some challenges, I genuinely believe that almost every person working in the development sector is in it to help other people and that they do the best they can. Until now, we didn’t have tools that allowed for a different governance and management of large amounts of aid funds… but now we do.

Campaign-based giving
=====================

Nowadays, one gives money to an organization and must trust them to use it properly. The money is given a priori, being a grant from the government, from a granting organization or from individuals. Once the money is in their bank account, it’s -by design of how the banking system works- opaque to external people: we must trust them again to have proper procedures in place to avoid mismanagement of such funds i.e. [“Caligula orgy with prostitutes in Oxfam T-shirts”](https://www.thetimes.co.uk/article/oxfam-in-haiti-it-was-like-a-caligula-orgy-with-prostitutes-in-oxfam-t-shirts-p32wlk0rp).

With [Giveth](http://giveth.io/) you will be able to see how the project is laid out, [Milestone by Milestone](https://medium.com/giveth/what-is-the-future-of-giving-d50446b0a0e4), and how much money is required for each and every part. If a Milestone is not achieved, or the Milestone Reviewers (more on this category of validators shortly) perceive misconduct, 1) this Milestone will not be approved and paid out and 2) the Reviewer can decide to send all of the unspent funds back to the original Givers to be donated to other projects.

The most common issue raised here is: what happens if the Milestone Reviewer(s) is/are ‘greased’ by the Milestone Manager to approve an underachieved Milestone or to turn a blind eye on inappropriate behaviour? I see this as an excellent opportunity to bring together agents that have no special interest in colluding: a grassroots organization, the local community leadership, the government and an independent observer. One could decide that all of these need to agree on the validation and submit proof, similar to the videos used in Giveth’s [RewardDAO](https://medium.com/giveth/how-rewarddao-works-aka-what-are-points-7388f70269a). Technically, since the figure of the Reviewer is just an Ethereum address, it can be a contract, it could be a multisig wallet held by these relevant stakeholders. Another, if slightly more complex, setup is that a percentage of all Givers to a Campaign need to approve the Milestone after reviewing proof. Using a [Liquid Democracy](https://medium.com/giveth/liquid-democracy-what-that-bd3c63e8df52) governance system here would naturally concentrate voting power in people that are reputable and are perceived to be neutral in this particular Campaign or even Milestone.

I see this as a side benefit of Giveth’s Campaigns: the need to be in constant communication with Milestone Reviewers and Campaign Managers creates — apart from transparency — a true Community where problems are openly discussed and input comes from all sides, because everyone has stake in the game.

Communities solving problems
============================

Thinking of the bigger picture, how can we really shake the giving ‘industry’ awake? Without questioning the expertise and indubitable economies of scale and know-how transfer of the big International NGOs, Giveth enables another sort of organization: The DAC, the [Decentralized Altruistic Community](https://medium.com/giveth/giveth-introduces-decentralized-altruistic-communities-dacs-d1155a79bdc4). Can we do better than just trust Oxfam (or any equivalent INGO) to drop out of the air and deploy their tactics? The Giveth platform can be used for validation of Campaigns and Milestones, but … maybe we could go a step further.

Imagine the creation of a true DAC in Haiti, conformed by Givers, people on the ground (the ‘Makers’) and even representation of the INGOs, all communicating with each other and through an agreed form of governance that works to pledge resources the right way. This way we can make sure that Oxfam’s expertise is allocated where it can impact the most, in constant communication with other stakeholders and with fully transparent decision making.

You get some decision power, you get some more, and you get some too!
=====================================================================

Does it sound complicated? After all, you are not an expert in Haiti… maybe you’ve never even been there! How are you supposed to choose where to pledge funds or to know which Campaigns are going to be the most impactful? Giveth has got you covered. With Liquid Pledging, a concept derived from [liquid democracy](https://medium.com/giveth/liquid-democracy-what-that-bd3c63e8df52), you can delegate the choice of your donations to Communities you perceive as experts: this can be an influential development group — Oxfam if you really must!- but also your former roommate’s social impact group, which was really into this ‘making a better world’ thing. You delegate to a DAC, and it can send your donation to its chosen Campaign, a lot like how charity is supposed to work nowadays, but with much more oversight. You will be able to track your donation, veto any decisions the delegates make and get connected to the people/communities running the Campaigns you will be funding.

Once you start down the rabbit hole, the possibilities are endless: You can delegate half of your pledged funds to a DAC specializing in disaster relief, which in turn will fund some trusted Campaigns for smaller specific problems. The other half you can delegate to your favourite Campaign focusing on improving education in your hometown or even to another DAC that brings together all education projects in your area. Be as local or global as you want!

<img alt="Liquid pledging at work" src={useBaseUrl('img/blog/liquidPledging.png')} />

##### Liquid pledging at work

Help us solve the challenges
============================

The future is near. But not quite here yet, as this is not happening now. The main challenges are

*   Scalablity of the crypto ecosystem. Let’s face it, maybe we are not quite there yet. And I am not even speaking of unpredictable transaction fees raising the cost of donating and transactions not going through: Liquid Pledging is a complicated system that requires a lot of gas. Luckily [Giveth has a good stop-gap solution](https://medium.com/giveth/tackling-ethereum-scalability-issues-29bd700b5060).

> _If you are a Dev and/or working on scalability solutions, have a look at what ScalingNOW is doing_ [_here_](https://medium.com/giveth/scalingnow-bridge-chains-parity-8c359aca2b01) _and join us in building the future of Ethereum!_

*   Liquid pledging would benefit greatly from some sort of identity on the blockchain, integrated with [governance tools like AragonOS](https://blog.aragon.one/announcing-aragon-labs-a679693429ae). The UI/UX for most of these applications remains outside of the control of most individuals, let alone organizations in the humanitarian sector who shouldn’t have to focus on the technical side and should be able to interface seamlessly with the platform(s).

> _Our Social Coding circle pushes Open Source projects like BrightID for Proof-of-Identity and other great projects. Read more about them_ [_here_](https://steemit.com/blockchain4humanity/@giveth/what-is-the-social-coding-circle)_!_

*   Bridge Crypto — Fiat. How do you deal with international crypto transfers and especially the conversion of ETH (or whatever cryptocurrency Campaigns receive as donations) to fiat in order to pay for the expenses of the Campaigns?

> _If you are working on projects that are building solutions for the last mile, please get in touch!_

*   There are also many unanswered questions around taxation for the organizations deploying the Campaigns. They are receiving donations in crypto currencies and how this is to be treated is not well defined for taxation in most jurisdictions right now.

> _If you are a lawyer and/or have good resources on the regulatory aspect, please hit me up or leave them in the comments!_

[Join our community](http://join.giveth.io/): by tackling interesting problems like this one you can help us positively impact charitable giving forever!

*   Find us on [Riot](https://riot.im/app/#/group/+giveth:matrix.org) or [Slack](http://slack.giveth.io/)
*   Discover our [Site](http://giveth.io/) and [Wiki](https://wiki.giveth.io/)
*   Fork our code on [Github](http://github.com/Giveth/)
*   Follow us on [Medium](http://medium.com/giveth/), [Facebook](https://www.facebook.com/givethio), [Twitter](http://twitter.com/givethio) and [Reddit](https://www.reddit.com/r/giveth/)

Help us Build the Future of Giving: 🤲🏼 [Donate directly](http://donate.giveth.io/) 🤲🏼 or buy a Ledger with our [affiliate link](https://www.ledgerwallet.com/products/ledger-nano-s?utm_source=&utm_medium=affiliate&utm_campaign=d663) ⏎

Written by [Pol,](https://steemit.com/@pol-lanski) lovingly edited by [Griff](http://twitter.com/thegrifft) and [Kris](http://twitter.com/krrisis)

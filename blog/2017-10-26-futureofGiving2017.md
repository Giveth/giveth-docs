---
slug: futureOfGiving2017
title: What is the Future of Giving?
author: Kris
author_image_url: /img/krisAuthor.jpeg
---
import useBaseUrl from '@docusaurus/useBaseUrl'
import styles from '../src/css/custom.css'


An Overview of the Giveth Donation Application
==============================================

_Edit: for the current status of the development, more recent updates_ [_here_](https://medium.com/giveth/tagged/dappening)

If you ever talked to a Giveth [Unicorn](https://medium.com/giveth/giveth-introduces-decentralized-altruistic-communities-dacs-d1155a79bdc4) chances are high we did not let you go before you understood what Giveth is all about — we’re a passionate bunch. If you haven’t met people like [Griff Green](https://medium.com/@thegrifft), [Jordi Baylina](https://github.com/jbaylina), [Grace Torrellas](https://twitter.com/GraceTorrellas), [Vojtech Simetka](https://github.com/vojtechsimetka) and the [many other great faces](https://wiki.giveth.io/dac/team-organisation/) contributing to the Giveth Platform you might wonder **what it is exactly we’re building and why.**

To put it plain and simple: we want to make the **process of giving to causes you believe in effective and transparent**, and we are using blockchain technology to do so. In [October 2016](https://medium.com/giveth/the-minime-token-open-sourced-by-giveth-2710c0210787) the team started developing the DApp (Donation Application) and is now [coming closer](https://wiki.giveth.io/dapp) to the release of its Minimum Viable Product (MVP). In the build-up to this, we would like to take a moment to explain why we are creating the platform and give you a sneak peak of the user flow.

**Wait, but why?**

If you have ever donated to non-profits or charitable organizations chances are high your experience was similar to this one: on your way to the metro you got stopped by a convincing youth who got your name, mailing address and signature for a fixed monthly donation to a specific cause. Since that moment, a few times per year — if you’re lucky — you receive an old-school newsletter which you throw away without reading. **You are left entirely in the dark about where your donation went,** and the non-profit receives a monthly amount until you decide to cancel.


Giveth changes all this. As all donations are recorded on the Ethereum blockchain you can follow, in real-time, who gets your donations and why at a very granular level.

The Giveth platform has a simple result-based incentive structure: when funds are collected they are stored in our [Vault](https://medium.com/giveth/the-vault-contract-open-sourced-by-giveth-fe2261f7b91b) and only after Milestones are completed, can the funds be withdrawn. The Giver’s funds are under their control until their donations are locked for a specific purpose.

This basic structure gives them a clear view on the various people involved in the process and the possibility to contact everyone directly. And if they don’t like what their funds are intended to be used for, they have time to block its use.

We are building the **Future of Giving by cutting out the bureaucracy** so that funds can be spent more efficiently and everyone can collaborate in making the world a better place.

**Talk the Talk**

We are re-engineering how donations are made, and with it, we had to reinvent the [language](http://wiki.giveth.io/dapp/product-definition) to talk about it. The 3 key building blocks of the Giveth system are Communities (DACs), Campaigns and Milestones. A **DAC** — short for Decentralized Altruistic Community — is the group of people united around a cause they want to support. This DAC will fund and steer multiple **Campaigns**, which can in their turn also be supported by more than one DAC. A Campaign translates the dreams of a DAC into a more specific agenda to which action points are linked: we call these the **Milestones**. Milestones are the smallest entity within the Giveth system and are the last step in our donation flow. Once completed, the funds are released into the wild to reimburse and reward good people for their good work.

<img alt="Building Blocks of Giveth" src={useBaseUrl('img/blog/buildingBlocksGiveth.png')} />

##### The 3 key building blocks of Giveth are Communities (DACs), Campaigns and Milestones.

We focus on the technology so people can focus entirely on uniting around causes. In order to do so, we need to define **some of the basic roles** in our system.

A **Giver** can donate directly to a Campaign they believe in, or can decide to pledge funds to a DAC that will allocate these funds to appropriate Campaigns in the Giver’s name — we call this process [Liquid pledging](https://medium.com/giveth/liquid-democracy-what-that-bd3c63e8df52). By donating, the Giver automatically becomes part of the DAC and is connected with the rest of the community.

The **Delegates** are registered DAC members that take on the task of allocating funds sent to their DAC to one or more Campaigns.

The **Makers** are all the people within these campaigns making the change the DACs want to see in the world. There are a few specific roles the Makers have to fulfill.

*   The **Campaign Managers** are the Makers that create Campaigns, assign funds to specific Milestones and make sure their specific Campaign is a success.
*   The **Milestone Managers** are the Makers in charge of specific Milestones and need to assure these very specific actions are achieved as described.
*   The **Recipients** are the Makers that receive the funds when a Milestone is successfully completed.

<img alt="Giveth Roles" src={useBaseUrl('img/blog/givingBlogRoles1.png')} />

##### Main roles within the Giveth Platform: Giver, Delegate, Campaign Manager, Milestone Manager, Recipient.

Two additional roles have been created to **guarantee the correct usage of funds**.

*   The **Campaign Reviewer** can reject completion of any Milestone and can, as a strong security measure, even cancel a whole Campaign if it appears to be fraudulent.
*   The **Milestone Reviewer**’s role is to confirm the Milestone Manager really achieved the proposed goal or action described in the Milestone.

This brings us to the **true power** of the Giveth platform: at all times the Giver knows exactly what is happening to the donated funds, how these are being spent and is in full control through a **transparent network of accountabilities**. If a Milestone is canceled, the funds are returned to the Campaign. If a Campaign is canceled, the funds are automatically returned to the Delegates that supported it. If a Delegate quits, the funds are returned to the Giver. On top of this, one of the most revolutionary aspects of this system is that at any point up until the moment funds are locked into a Campaign, the Giver can decide to withdraw them.

<img alt="Giveth Additonal Roles" src={useBaseUrl('img/blog/givingBlogRoles2.png')} />

##### Two extra roles guarantee the correct usage of funds: Campaign Reviewer and Milestone Reviewer.

You can discover more about these roles and responsibilities by reading on in [the product definition](https://wiki.giveth.io/dapp/product-definition/) on our wiki.

**Walk the Walk**

The Giveth Donation Application is [now in beta stage on testnet](https://wiki.giveth.io/dapp), with all of the roles described above integrated, and currently undergoing testing with a select team of volunteers.

<iframe width="560" height="315" src="https://www.youtube.com/embed/gPXoEzuNQzc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

##### Giveth co-founder Griff Green explains what the Giveth Donation Application is about.

We always have opportunities for skilled developers to contribute to our project, and you can [donate](https://wiki.giveth.io/dac/finances/) to \`revolution.eth\` to reward and incentivize the devs that are making the Giveth platform a reality. Please join our [Slack](http://slack.giveth.io) and find out how you can contribute.

In the meantime, we will keep on building the platform and will share in the coming weeks and months how the different components work. Stay tuned for more!

Warm regards,

[Giveth](https://giveth.io/)

*   Discover our [Site](http://giveth.io/) and [Wiki](https://wiki.giveth.io/)
*   Fork our code on [Github](http://github.com/Giveth/)
*   Follow us on [Medium](http://medium.com/giveth/), [Facebook](https://www.facebook.com/givethio), [Twitter](http://twitter.com/givethio) and [Reddit](https://www.reddit.com/r/giveth/)

Help us Build the Future of Giving: 🤲🏼 [Donate directly](http://donate.giveth.io/) 🤲🏼 or buy a Ledger with our [affiliate link](https://www.ledgerwallet.com/products/ledger-nano-s?utm_source=&utm_medium=affiliate&utm_campaign=d663). ⏎

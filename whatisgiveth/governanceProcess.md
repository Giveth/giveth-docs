---
id: governanceProcess
title: Governance Process
---
import useBaseUrl from '@docusaurus/useBaseUrl'


Giveth Governance benefits from a robust design and utilizes several platforms to aggregrate and foster advice, consensus, signalling, voting and all the other wonderful actions enabled by Web3 decision-making systems.

We can divide governance participants into three categories based on their possible actions and the platforms they can use to participate. They are **GIV token holders**, **rDAO members**, and **the greater community** (or simply, the community).


#### (Or skip to the <a href="#TLDR">**TL;DR**</a>)


## The Community
Being part of the community has no requirements. If you know about Giveth and want to get engaged then we welcome you openly with our highest of vibes and spiciest of memes.

The best place for formal conversations around Giveth take place on our [Discourse forum](https://forum.giveth.io/). Our forum invites a wide variety of topics for anyone to introduce in-depth discussion, however more importantly, this is the quintessential launchpad where any legitimate governance proposal must start from.

Anyone in the community can create a proposal, however there are some considerations to make:
- <span id="proposal">Proposals</span> ideally have a clearly defined intention that outlines actions to be taken, potential consequences and funds requested (if applicable).
-  We adhere to a [**Community Covenant**](https://docs.giveth.io/whatisgiveth/covenant) which is our main reference point for any disputes or contentions.
-  We use [**Advice Process**](https://docs.giveth.io/whatisgiveth/adviceProcess/) to gather feedback and refine proposals.
- Proposals must remain on the forum, open for Advice Process, for a **minimum of 5 days**.

If all conditions have been met, including time requirements for Advice Process, proposals can move on into either the GIVgarden or the rDAO DApps for voting.  In order to participate in these DApps you must hold either GIV or nrGIV, respectively. All Giveth Governance DApps are deployed on Gnosis Chain (formerly xDai Network).

**If a proposal desires to skip or shorten the Advice Process,** in the case of financial urgency for example, they may do so while providing a written disclaimer and a reason for doing so on their proposal. Skipping or shortening the Advice Process decreases the chances of a proposal passing, **do so with great discretion!**

:::note
### Soft-Consensus
 We often use polls inside the forum or on Discord to get soft-consensus for preferred outcomes. It's acceptable to use these same methods for [informal or low-impact decisions](#informal-decisions). However, for formal proposals they must indicate a clear intended outcome to keep objectives as clear as possible. The on-chain voting systems we use do not support multiple-choice voting.*
:::

## GIV Token Holder

GIV token holders can get involved in decision making via the <a href="https://gardens.1hive.org/#/xdai/garden/0xb25f0ee2d26461e2b5b3d3ddafe197a0da677b98" target="_blank">GIVgarden</a>. It leverages [Conviction Voting](https://forum.giveth.io/t/conviction-voting/154) and [Tao Voting](https://forum.giveth.io/t/tao-voting-explained/155) systems to allow GIV token holders to create, signal and vote on proposals using their GIV tokens. Decisions made in here revolve around community funding requests and suggestions as well as any metagovernance modifications. To learn more [visit our documentation regarding the GIVgarden](../giveconomy/givgarden).

### Snapshot Voting
Snapshot allows all of a users GIV holdings, including GIV staked in GIVfarms or the GIVgarden to be counted and calculated towards their total voting power used on the [Giveth Snapshot](https://snapshot.org/#/giv.eth) Snapshot is gasless and chain-agnostic and is a magnificient tool to capture community sentiment on proposals and issues that do not directly request funds from Giveth.

Giveth has whitelisted three types of votes that can be used for proposals on Snapshot: **Basic Voting**, **Single Choice Voting** and **Ranked Choice Voting**. Any other types of voting methods are considered invalid at this time.

#### Single Choice Voting OR Basic Voting
This is a simple Single choice voting strategy. You'll have a range of options and you can only pick one. In Basic Voting you'll be able to choose between For (Yes), Against (No) or Abstain (Undecided/No Opinion).

**A single choice or YES option needs to receive 88% support in order to pass.** To arrive at the YES % we remove the abstain votes and divide the YES votes against the total amount of YES and NO votes. 

Our Quorum is the total amount of GIV tokens that need to particiapte in a vote in order for it to be considered valid. **The Quorum will be set to 1 Million GIV**

#### Ranked Choice Voting
This voting method allows you to select multiple options, signalling your most preferred outcome and then your 2nd favourite option, 3rd, 4th and so on.. (depending on how many options there are)

**There are no required support percentages for Ranked Choice voting.** Snapshot will calculate which option received the most support and we will choose the top result as the winner. 

**Quorum, will be set to 1 Million GIV**.

### Tokenlog 
Tokenlog is a voting tool for token-weighted backlog planning. Giveth uses it for decentralized roadmap planning and **allows GIV holders to have a say in what Giveth prioritizes building**. Features, improvements and core roadmap items for Giveth and it's products are captured in github issues and can be voted on using the [Tokenlog interface](https://tokenlog.generalmagic.io/Giveth/Roadmap). New ideas and proposals are reviewed by our product managers, if they make sense and align with Giveth's values they will be added to the Tokenlog for voting. 

Currently your Tokenlog voting power is calculated from your address' GIV and [wrapped GIV (gGIV)](../giveconomy/GIVgarden#wrapping-giv--earning-rewards) balances on Gnosis Chain. Your voting power is calculated from the sum of both aforementioned token balances where one token is equal to one vote.

You can access the [**Giveth Tokenlog** here](https://tokenlog.generalmagic.io/Giveth/Roadmap). If you have an idea for a feature or improvement for Giveth you can jump into our [discord](https://discord.giveth.io) or drop your idea on the [forum](https://forum.giveth.io/).

## nrGIV Token Holder

This is a form of executive council held for trusted Giveth contributors. nrGIV DAO members hold nrGIV and use an [Aragon DAO deployment](https://aragon.1hive.org/#/nrgiv/) to create and vote on proposals using simple Yes/No voting mechanics. Only nrGIV holders can vote or make proposals. Proposals will remain open for voting for 5 days and must adhere to the Quorum and Support Required percentages or else it will fail.

 In order to get nrGIV you must be a regular contributor to Giveth for at least 3 months and have an approved role proposal. If you're an eligible contributor and it's your first time, then you must request a current nrGIV holder to propose minting nrGIV tokens for you on your behalf, only during the quarterly minting periods. Forum posts will be made for each quarterly distribution and will be announced on our weekly Governance and Community calls.

### Role Proposals 

Role proposals are our way of keeping everyone in touch with what are the roles each contributor is filling. This takes the form of a document and a short description in a topic posted on [our forum](https://forum.giveth.io), which is then left open for comment and approval via [advice process](./adviceProcess.md). Only contributors who have finished their trial period can move to create a role proposal. Once passed advice process, it is put up as a vote for on the nrGIV DAO for on-chain voting; if the vote passes, you're in as an official Giveth regular contributor!

If you have a work agreement and work casually for Giveth, usually there is no explicit need to go through the entire role proposal process. However if you record 30 or over hours monthly for 3 consecutive months then it is required for you to create a role proposal in order to continue to be paid by the Giveth DAO.


:::info
When the first tokens are minted for a quarterly nrGIV distribution, all eligible contributors have 1 month from that date to request tokens. After this period the round is closed and no more token requests will be accepted for this period. Eligible contributors will still be able to request tokens for the next token distribution.
:::

Learn how to become a contributor (and get nrGIV) in our [Giveth Basics document](https://www.notion.so/giveth/Giveth-Basics-bff76dceaec64839b73aa89ba2fb8be4).  
## Informal Decisions
Not all decisions require formal on-chain votes. There is room for making low-impact, agile decisions via a range of platforms that Giveth's community utilizes. For the most clarity we refer to the Covenant's section on [off-chain decision making](./whatisgiveth/covenant/#off-chain):

> Giveth uses Advice Process as its primary practice for flat decision making to empower contributors with agency to move their cultural proposals forward. Advice Process is written in the Giveth documentation and promoted verbally in community calls. When a non-financial, no-code decision will likely affect a large part of the community, the use of off-chain voting using polls in the Discord or Forum is implemented. A decision is considered legitimate when it respects this covenant, is promoted to the awareness of the community and its results aren’t challenged within 2 weeks.  

> Giveth community spaces, including the Giveth Forum, GitHub and Discord, as well as other off-chain forums that may emerge in the future, are expected to adhere to this covenant.

<h2 id="TLDR">TL;DR</h2>

1. Make a <a href="#proposal">proposal</a> on the Giveth <a href="https://forum.giveth.io" target="_blank">forum</a>.
    - Allow a minimum of 5 days for advice process.
2. Create a proposal in the DApp for on-chain voting; this should link to your forum proposal.
    - [GIVgardens](https://gardens.1hive.org/#/xdai/garden/0xb25f0ee2d26461e2b5b3d3ddafe197a0da677b98) for GIV token holders requesting funds
    - [Snapshot](https://snapshot.org/#/giv.eth) for GIV token holders regarding issues or proposals not directly requesting funds
    - [rDAO](https://aragon.1hive.org/#/nrgiv/) for nrGIV token holders
3. Wait for results.
4. Execute required actions.

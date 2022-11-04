---
id: entitiesAndRoles
title: Giveth Entities and Roles
slug: dapps/entitiesAndRoles
---
import useBaseUrl from '@docusaurus/useBaseUrl'
import styles from '../../../../src/css/custom.css'
import NotTranslatedMessage from '../../_notTranslatedTR.mdx'
import TraceDeprecated from './_traceDeprecatedTR.mdx'

<TraceDeprecated />
<NotTranslatedMessage />


*Content and ideas have been modified from this excellent article [“An Overview of the Giveth Donation Application”](https://medium.com/giveth/what-is-the-future-of-giving-d50446b0a0e4) authored by Kris Decoodt in 2017. Many things have been revised and modified since 2017. Here we breakdown the DApp as it is in 2022.*

This document explains how different interactions within the Giveth DApp can be made. The goal is to provide a clear outline of the entities and roles within the Giveth TRACE DApp. This document has been tailored for several audiences and use cases as follows:
* **Developers:** can use this document as part of System Requirements.
* **Testers:** can use this document to understand how the DApp should work in order to determine what behaviour is wrong and should be reported as a bug. This document is not a formal Test Case in SDLC (Software Development Life Cycle) but can still be used for guidance.
* **The Support Team:** can use this document as a refererence to help new users who experience difficulties with the DApp.
* **The End User:** can use this document to gain a greater understanding of how the DApp works. However, foundational knowledge of Blockchain, Ethereum and Giveth is recommended.

## Roles
We have eight roles in Giveth TRACE. In this section we explain in-depth each role, their function, how to become one and the power each role has.
1. <a href="#giver"><strong>Giver</strong></a>
2. <a href="#communityManager"><strong>Community Manager</strong></a>
3. <a href="#campaignManager"><strong>Campaign Manager</strong></a>
4. <a href="#campaignReviewer"><strong>Campaign Reviewer</strong></a>
5. <a href="#traceManager"><strong>Trace Manager</strong></a>
6. <a href="#traceReviewer"><strong>Trace Reviewer</strong></a>
7. <a href="#recipient"><strong>Recipient</strong></a>
8. <a href="#websiteUser"><strong>Website User</strong></a>

### Website User
This refers to any person who visits our website. Without registering as a user on Rinkeby they cannot interact with any Giveth entity nor make donations on Giveth TRACE.
#### How to become a Website User
* Anyone with the address of the Giveth TRACE website can become a User.
#### Power of a Website User
* Browse through Communities, Campaigns and Traces.
* Register a profile.
* Edit their profile.
* View someones else's profile.
* Subscribe to a Community, Campaign or Trace.

***Note:** Most site actions require authentication through an Ethereum web wallet; currently Giveth TRACE only supports MetaMask.*

### <a name="giver">Giver</a>
The term Giver describes anyone who uses our platform to give donations to a Community, Campaign or Trace. Givers can interact with all 3 entities but  are not explicitly part of any unless they choose to join a Community or assume another role as well.
#### How to become a Giver
* Anyone with an Ethereum wallet can donate to a Community, Campaign, or Trace in the DApp and become a Giver.
#### Power of a Giver
* Accept or reject a delayed delegation from a Community or Campaign.

***Note:** Givers can veto or "reject" a proposed Delegation within 3 days of the delegation proposal. This is referred to as a delegation "delay". After 3 days, the delayed delegation will be accepted by the DApp automatically.*

### <a name="communityManager">Community Manager</a> (formerly Delegate)
A Community Manager is the registered user owning a Community. They can delegate the funds donated to their Communities. A delegation is a process, where the donation pledged to a Community is transferred to a Campaign or Trace. Once delegated, the Giver has 3 days to reject (or approve) the delegation. After that time, the money is auto-approved and locked in the Campaign or Trace to which the money was delegated.
#### How to become a Community Manager
* A user can create a Community and become the Community Manager after being whitelisted by a DApp Admin.
#### Power of a Community Manager
* Edit the name, description, image, and link of their Community.
* Give Community funds (via delayed delegation) to Campaigns, and Traces.

***Note:** In order to initiate a delayed delegation, the Community Manager should go to the Traces or Campaign page, and click the `Delegate Funds` button.*

### <a name="campaignManager">Campaign Manager</a>
Campaign Managers are Giveth.io users who have chosen to make their project traceable and have passed the project verification process. The role of the Campaign Manager is to create Traces through which they can fund the work of people and the cost of resources behind the project.

#### How to become a Campaign Manager
* Verify their Giveth.io project and request to become traceable, upgrading to a Campaign on TRACE and becoming the Campaign Manager of said Campaign.
#### Power of a Campaign Manager
* Edit their Campaign.
* Send Campaign funds (via delegation) to Traces within their Campaign.
* Reject or accept proposed Traces to their Campaign.
* Create or edit Traces in their own Campaign.

***Note:** A Trace has to belong to at least one Campaign and needs to be approved by the Campaign Manager.*

### <a name="campaignReviewer">Campaign Reviewer</a>
Because donations to a Campaign are locked, a Campaign Reviewer role is critical to review and track the Campaign's progress. Campaign Reviewers have the responsiblity of checking the legitimacy of a Campaign and its Traces. They also have considerable power within a Campaign.
#### How to become a Campaign Reviewer
* A Campaign Manager can assign a user to become a Campaign Reviewer.
#### Power of a Campaign Reviewer
* Reject or approve Completed Traces.
* Cancel Traces within their Campaign.
* Cancel a Campaign.

### <a name="traceManager">Trace Manager</a> (formerly Milestone Manager)
Traces are the foundation of the Giveth system. Any registered user can propose a Trace to a Campaign. However, a Campaign Manager or Campaign Reviewer must approve the Trace proposed to their Campaign for it to become valid. Traces can represent several types of requests for funding. More info on <a href="#traceTypes">types of Traces</a> are detailed further in this document.
#### How to become a Trace Manager
* A user can propose a Trace to Campaign and become the Trace Manager.
#### Power of a Trace Manager
* Edit their Trace.
* In the case of creating a Bounty or Milestone, a Trace Manager can set a Trace Reviewer.
* Mark a Trace as complete.

***Note**: A Trace can no longer be edited once it has received a delegation or donation.*
### <a name="traceReviewer">Trace Reviewer</a>
* A Trace Reviewer can be assigned by a Trace Manager.
#### Power of a Trace Reviewer
* Reject or approve a completed Trace.
* Cancel a Trace.

***Note:** In the case that a Trace is cancelled, the currency returns to the source, i.e. to the Giver for a donation or to the Community/Campaign for a delegation.*

### <a name="recipient">Recipient</a>
A Recipient is a registered user who will receive payment from their successfully completed Trace. In the majority of cases, the Recipient is also the Trace Manager as they are the one working on the Trace. However, in some cases the recipient is separate, such as for payments to a supplier or a Milestone for a Campaign.
#### How to become a Recipient
* A Recipient can be designated by a Trace Manager; it can be the Trace Manager or another user.
#### Power of a Recipient
* Mark a Trace as complete.
* Request payout of the Trace funds.

***Note:** In the case that the Trace has a Reviewer, collecting funds needs the Reviewer's approval.*
#### Latency
Some actions need to be registered to the Ethereum blockchain network. Adding transactions to the blockchain does not happen immediately, so we observe a latency in some actions. This latency depends on the network conditions, for example traffic on the network.
#### Locality of Roles
All roles have a limited scope and once an entity ceases to exist, so do the connected roles. Every Community contains exactly one Manager. Every Campaign has one Campaign Manager and one Campaign Reviewer. Every Trace has one Trace Manager, one Recipient and potentially one Reviewer. The Giver is not explicitly associated with any entity but may interact with all of them.

<img alt="Relations between Communities, Campaigns and Traces" src={useBaseUrl('img/content/trace/role-locality.svg')} />

### Currency Flow
Giveth TRACE on a technical level is a system for managing currency. Terms referring to the movement of funds within the Giveth system are defined as follows:

* **Donation:** When a Giver sends funds from their wallet to a Trace, Campaign, or Community.
* **Collecting:** When the Recipient sends or "collects" funds from a Trace to their wallet.
* **Disbursing:** When a Trace Manager sends funds from a Trace account to the Recipient's wallet.
* **Delegation:** When a Campaign Manager or Community Manager sends money from the Campaign or Community account to Trace account on behalf of the original Giver. A Giver can reject Delegation within 72 hours, after which the Currency transfer becomes irreversible.
* **Refund:** A Giver who has contributed to a Community can withdraw their funds as long as they are not yet committed to a Campaign or Trace. A Giver contributing to a Campaign can withdraw their funds as long as they are not yet committed to a Trace.

<img alt="Currency Flow on Giveth TRACE" src={useBaseUrl('img/content/trace/currencyFlow.svg')} />

###### Currency Flow on Giveth TRACE

## Entities
Giveth TRACE, on a technical level, is a system for managing currency. The DApp’s entities are accounts to which people can deposit, transfer or withdraw currency. We have three entities on Giveth TRACE, <a href="#communities">**Communities**</a>, <a href="#campaigns">**Campaigns**</a> and <a href="#traces">**Traces**</a>. The relationship between them are defined in the chart below. Each entitity corresponds to one or more smart contracts.

***Note:** In Q1 2021 the Giveth team rebranded the entities **DAC**s (Decentralized Altruistic Communities) to simply **Communities**, and **Milestones** to **Traces**.*

<img alt="Relationship between The DApp's Entities" src={useBaseUrl('img/content/trace/relations.svg')} />

##### Relationship between the DApp's Entities

### <a name="communities">Communities</a>

Communities, **formerly known as DACs**, are the most general entity in the Giveth System. The purpose of a Community is to unite Givers around a cause and provide them with the possibility to give money to a cause without having to do the research involved in finding the exact Campaign to contribute to. Any money donated to a Community can be retrieved by the Giver, however we strongly discourage Givers to do so. The funds remain in the Community until they are delegated to a Campaign or a Trace, or withdrawn by the Giver. **Community Managers** can support any Campaign or Trace by sending currency to the account of the recipient.

<img alt="Community to Campaign delegation state diagram" src={useBaseUrl('img/content/trace/dac-campaign-donation-statediagram.svg')} />

##### **State diagram for Community -> Campaign delegation flow**, showing how donations made to a DAC are delegated to a Campaign.

<img alt="Community to Trace delegation state diagram" src={useBaseUrl('img/content/trace/dac-milestone-donation-statediagram.svg')} />

##### **State diagram for Community -> Trace delegation flow**, showing how donations made to a Community are delegated directly to a Trace.

### <a name="campaigns">Campaigns</a>
Campaigns are in the center of the Giveth donation system. They are effectively tools to steer money towards the smallest entities, Traces. A Campaign can be supported by more than one Community or by no Community at all. Campaign co-owners can only accept or reject proposed Traces. **Campaign Reviewers** can cancel the Campaign if the Campaign is bad or no longer active.

Donations made to a Campaign are locked, and unless the Campaign gets cancelled, the Giver no longer has control over the donation. The reason we lock the donations is to give the people behind the Campaign some level of certainty that they can count on getting the pledged donations and pledge them to one of their Traces.

<img alt="Campaign Donation state diagram" src={useBaseUrl('img/content/trace/campaign-donation-statediagram.svg')} />

##### **State diagram for donations made to Campaign.**


### <a name="traces">Traces</a>
The main building blocks of the DApp are Traces, **formerly known as Milestones**. A Trace is the only way by which funds can exit the Giveth system. Traces must be created inside of a Campaign. Compared to a Community or Campaign, Traces are more complex because more roles can interact with them.

### <a name="traceTypes">Trace Entities</a>
To tailor Traces to meet the specific needs of Communities and Campaigns, there are certain rules that can be applied.

 * **Capped Traces:** The maximum currency which can be given to to the Trace is set. This maximum is called the cap.
* **Trace with Reviewer:** The funds cannot be collected or disbursed from this Trace without confirmation by an assigned Trace Reviewer.
* **Specify Currency Received:** The Trace Creator is able to specify which of the whitelisted cryptocurrencies they would like to receive their funds in.

Based on these rules we can have *four* types of Traces with their own distinct properties: **Milestones, Bounties, Expenses** and **Payments**.


### **Milestones**
**Important goals or events for a Campaign. Any funds collected in Milestones go to the Campaign that it is a part of.**

*The Lifecycle of Milestones in the DApp is as follows:*

<img alt="Lifecycle of Milestones" src={useBaseUrl('img/content/trace/milestone.png')} />

###  **Bounties**
**If a Campaign or Community needs to outsource work to be done, they can use a Bounty to compensate contributors for completing specific tasks.**

*The Lifecycle of Bounties is as follows:*

<img alt="Lifecycle of Bounties" src={useBaseUrl('img/content/trace/Bounty.png')} />


### **Expenses**
**If there are recurring or singular expenses that were paid by a Campaign or Community Member, they can be tracked and reimbursed by this Trace.**

*The Lifecycle of Expenses is as follows:*

<img alt="Lifecycle of Expenses" src={useBaseUrl('img/content/trace/Expense.png')} />

### **Payments**
**Payments are compensation to Campaign members for the work they have done. Payments can be uncapped or capped for the funding they can receive.**

 *The Lifecycle for Payments with NO cap is as follows:*

 <img alt="Lifecycle of Payments without Cap" src={useBaseUrl('img/content/trace/paymentNoCap.png')} />


 *The Lifecycle for Payments with a cap is as follows:*

 <img alt="Lifecycle of Payments with Cap" src={useBaseUrl('img/content/trace/paymentWithCap.png')} />


A breakdown of their functions can be summarized in the table below:


| Trace Type      | Funding is Capped | Specify Currency Received   |  Can Assign Reviewer | Currency Destination |
| --------------- | ------ | --- | ------------- | -------------------- |
| Milestone       | No     |  No   | Yes           | Campaign             |
| Bounty          | No     |  No   | Yes           | Any Address          |
| Expense         | Yes    |  Yes   | No            | Any Address          |
| Payment NO Cap | No     |  Yes   | No            | Any Address          |
| Payment with Cap  | Yes    | Yes    | No            | Any Address          |

### Notes:
* *In coding Entities are called `projects`.*
* *When money goes from a Community to a Trace or Campaign, Giveth then connects the Community with that Campaign or Trace. This means that you will see that Campaign or Trace represented on the Community page.*
* *If a Trace/Campaign/Community is canceled, the funds are returned to the source contributor automatically.*
* *Currency that goes to a Community is a loose commitment: at any point up until the moment funds are locked into a Campaign/Milestone, the Giver can decide to withdraw (refund) them.*
* *Currency that went to a Campaign/Trace is fully committed, because Trace Managers and Campaigns Manager take actions based on these funds.*

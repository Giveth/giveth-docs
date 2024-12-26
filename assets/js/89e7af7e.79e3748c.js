"use strict";(self.webpackChunkgiveth_docs=self.webpackChunkgiveth_docs||[]).push([[8287],{3159:(e,n,i)=>{i.d(n,{Ay:()=>o,RM:()=>r});var a=i(4848),t=i(8453);const r=[];function s(e){const n={a:"a",em:"em",hr:"hr",p:"p",strong:"strong",...(0,t.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:(0,a.jsx)(n.em,{children:(0,a.jsxs)(n.strong,{children:["Giveth TRACE has officially been deprecated. After 5 years of faithful service, Giveth and its platform, services and products have fully migrated to ",(0,a.jsx)(n.a,{href:"https://giveth.io",children:"Giveth.io"}),". With the deprecation of the Rinkeby network and low user activity, the Giveth DAO decided to sunset its original dApp in Q3 of 2022. The code has and will forever be open-source, and you can find it in ",(0,a.jsx)(n.a,{href:"https://github.com/Giveth",children:"Giveth's Github repositories"}),"."]})})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.em,{children:(0,a.jsx)(n.strong,{children:"This documentation will remain available for historical reference."})})}),"\n",(0,a.jsx)(n.hr,{})]})}function o(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(s,{...e})}):s(e)}},7740:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>g,frontMatter:()=>c,metadata:()=>a,toc:()=>h});const a=JSON.parse('{"id":"entitiesAndRoles","title":"Giveth Entities and Roles","description":"Content and ideas have been modified from this excellent article \u201cAn Overview of the Giveth Donation Application\u201d authored by Kris Decoodt in 2017. Many things have been revised and modified since 2017. Here we breakdown the DApp as it is in 2022.","source":"@site/dapps/entitiesAndRoles.md","sourceDirName":".","slug":"/dapps/entitiesAndRoles","permalink":"/dapps/entitiesAndRoles","draft":false,"unlisted":false,"editUrl":"https://github.com/giveth/giveth-docs/edit/master/dapps/entitiesAndRoles.md","tags":[],"version":"current","lastUpdatedBy":"Mitch Oz","lastUpdatedAt":1667254190000,"frontMatter":{"id":"entitiesAndRoles","title":"Giveth Entities and Roles","slug":"dapps/entitiesAndRoles"},"sidebar":"dapps","previous":{"title":"Intro to Giveth TRACE","permalink":"/dapps/introTrace"},"next":{"title":"Getting your project on TRACE","permalink":"/dapps/makeTraceableProject"}}');var t=i(4848),r=i(8453),s=i(6025),o=i(3159);const c={id:"entitiesAndRoles",title:"Giveth Entities and Roles",slug:"dapps/entitiesAndRoles"},l=void 0,d={},h=[...o.RM,{value:"Roles",id:"roles",level:2},{value:"Website User",id:"website-user",level:3},{value:"How to become a Website User",id:"how-to-become-a-website-user",level:4},{value:"Power of a Website User",id:"power-of-a-website-user",level:4},{value:"<a>Giver</a>",id:"giver",level:3},{value:"How to become a Giver",id:"how-to-become-a-giver",level:4},{value:"Power of a Giver",id:"power-of-a-giver",level:4},{value:"<a>Community Manager</a> (formerly Delegate)",id:"community-manager-formerly-delegate",level:3},{value:"How to become a Community Manager",id:"how-to-become-a-community-manager",level:4},{value:"Power of a Community Manager",id:"power-of-a-community-manager",level:4},{value:"<a>Campaign Manager</a>",id:"campaign-manager",level:3},{value:"How to become a Campaign Manager",id:"how-to-become-a-campaign-manager",level:4},{value:"Power of a Campaign Manager",id:"power-of-a-campaign-manager",level:4},{value:"<a>Campaign Reviewer</a>",id:"campaign-reviewer",level:3},{value:"How to become a Campaign Reviewer",id:"how-to-become-a-campaign-reviewer",level:4},{value:"Power of a Campaign Reviewer",id:"power-of-a-campaign-reviewer",level:4},{value:"<a>Trace Manager</a> (formerly Milestone Manager)",id:"trace-manager-formerly-milestone-manager",level:3},{value:"How to become a Trace Manager",id:"how-to-become-a-trace-manager",level:4},{value:"Power of a Trace Manager",id:"power-of-a-trace-manager",level:4},{value:"<a>Trace Reviewer</a>",id:"trace-reviewer",level:3},{value:"Power of a Trace Reviewer",id:"power-of-a-trace-reviewer",level:4},{value:"<a>Recipient</a>",id:"recipient",level:3},{value:"How to become a Recipient",id:"how-to-become-a-recipient",level:4},{value:"Power of a Recipient",id:"power-of-a-recipient",level:4},{value:"Latency",id:"latency",level:4},{value:"Locality of Roles",id:"locality-of-roles",level:4},{value:"Currency Flow",id:"currency-flow",level:3},{value:"Currency Flow on Giveth TRACE",id:"currency-flow-on-giveth-trace",level:6},{value:"Entities",id:"entities",level:2},{value:"Relationship between the DApp&#39;s Entities",id:"relationship-between-the-dapps-entities",level:5},{value:"<a>Communities</a>",id:"communities",level:3},{value:"<strong>State diagram for Community -&gt; Campaign delegation flow</strong>, showing how donations made to a DAC are delegated to a Campaign.",id:"state-diagram-for-community---campaign-delegation-flow-showing-how-donations-made-to-a-dac-are-delegated-to-a-campaign",level:5},{value:"<strong>State diagram for Community -&gt; Trace delegation flow</strong>, showing how donations made to a Community are delegated directly to a Trace.",id:"state-diagram-for-community---trace-delegation-flow-showing-how-donations-made-to-a-community-are-delegated-directly-to-a-trace",level:5},{value:"<a>Campaigns</a>",id:"campaigns",level:3},{value:"<strong>State diagram for donations made to Campaign.</strong>",id:"state-diagram-for-donations-made-to-campaign",level:5},{value:"<a>Traces</a>",id:"traces",level:3},{value:"<a>Trace Entities</a>",id:"trace-entities",level:3},{value:"<strong>Milestones</strong>",id:"milestones",level:3},{value:"<strong>Bounties</strong>",id:"bounties",level:3},{value:"<strong>Expenses</strong>",id:"expenses",level:3},{value:"<strong>Payments</strong>",id:"payments",level:3},{value:"Notes:",id:"notes",level:3}];function m(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.Ay,{}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsxs)(n.em,{children:["Content and ideas have been modified from this excellent article ",(0,t.jsx)(n.a,{href:"https://medium.com/giveth/what-is-the-future-of-giving-d50446b0a0e4",children:"\u201cAn Overview of the Giveth Donation Application\u201d"})," authored by Kris Decoodt in 2017. Many things have been revised and modified since 2017. Here we breakdown the DApp as it is in 2022."]})}),"\n",(0,t.jsx)(n.p,{children:"This document explains how different interactions within the Giveth DApp can be made. The goal is to provide a clear outline of the entities and roles within the Giveth TRACE DApp. This document has been tailored for several audiences and use cases as follows:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Developers:"})," can use this document as part of System Requirements."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Testers:"})," can use this document to understand how the DApp should work in order to determine what behaviour is wrong and should be reported as a bug. This document is not a formal Test Case in SDLC (Software Development Life Cycle) but can still be used for guidance."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"The Support Team:"})," can use this document as a refererence to help new users who experience difficulties with the DApp."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"The End User:"})," can use this document to gain a greater understanding of how the DApp works. However, foundational knowledge of Blockchain, Ethereum and Giveth is recommended."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"roles",children:"Roles"}),"\n",(0,t.jsx)(n.p,{children:"We have eight roles in Giveth TRACE. In this section we explain in-depth each role, their function, how to become one and the power each role has."}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)("a",{href:"#giver",children:(0,t.jsx)("strong",{children:"Giver"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)("a",{href:"#communityManager",children:(0,t.jsx)("strong",{children:"Community Manager"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)("a",{href:"#campaignManager",children:(0,t.jsx)("strong",{children:"Campaign Manager"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)("a",{href:"#campaignReviewer",children:(0,t.jsx)("strong",{children:"Campaign Reviewer"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)("a",{href:"#traceManager",children:(0,t.jsx)("strong",{children:"Trace Manager"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)("a",{href:"#traceReviewer",children:(0,t.jsx)("strong",{children:"Trace Reviewer"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)("a",{href:"#recipient",children:(0,t.jsx)("strong",{children:"Recipient"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)("a",{href:"#websiteUser",children:(0,t.jsx)("strong",{children:"Website User"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"website-user",children:"Website User"}),"\n",(0,t.jsx)(n.p,{children:"This refers to any person who visits our website. Without registering as a user on Rinkeby they cannot interact with any Giveth entity nor make donations on Giveth TRACE."}),"\n",(0,t.jsx)(n.h4,{id:"how-to-become-a-website-user",children:"How to become a Website User"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Anyone with the address of the Giveth TRACE website can become a User."}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"power-of-a-website-user",children:"Power of a Website User"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Browse through Communities, Campaigns and Traces."}),"\n",(0,t.jsx)(n.li,{children:"Register a profile."}),"\n",(0,t.jsx)(n.li,{children:"Edit their profile."}),"\n",(0,t.jsx)(n.li,{children:"View someones else's profile."}),"\n",(0,t.jsx)(n.li,{children:"Subscribe to a Community, Campaign or Trace."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsxs)(n.em,{children:[(0,t.jsx)(n.strong,{children:"Note:"})," Most site actions require authentication through an Ethereum web wallet; currently Giveth TRACE only supports MetaMask."]})}),"\n",(0,t.jsx)(n.h3,{id:"giver",children:(0,t.jsx)("a",{name:"giver",children:"Giver"})}),"\n",(0,t.jsx)(n.p,{children:"The term Giver describes anyone who uses our platform to give donations to a Community, Campaign or Trace. Givers can interact with all 3 entities but  are not explicitly part of any unless they choose to join a Community or assume another role as well."}),"\n",(0,t.jsx)(n.h4,{id:"how-to-become-a-giver",children:"How to become a Giver"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Anyone with an Ethereum wallet can donate to a Community, Campaign, or Trace in the DApp and become a Giver."}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"power-of-a-giver",children:"Power of a Giver"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Accept or reject a delayed delegation from a Community or Campaign."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsxs)(n.em,{children:[(0,t.jsx)(n.strong,{children:"Note:"}),' Givers can veto or "reject" a proposed Delegation within 3 days of the delegation proposal. This is referred to as a delegation "delay". After 3 days, the delayed delegation will be accepted by the DApp automatically.']})}),"\n",(0,t.jsxs)(n.h3,{id:"community-manager-formerly-delegate",children:[(0,t.jsx)("a",{name:"communityManager",children:"Community Manager"})," (formerly Delegate)"]}),"\n",(0,t.jsx)(n.p,{children:"A Community Manager is the registered user owning a Community. They can delegate the funds donated to their Communities. A delegation is a process, where the donation pledged to a Community is transferred to a Campaign or Trace. Once delegated, the Giver has 3 days to reject (or approve) the delegation. After that time, the money is auto-approved and locked in the Campaign or Trace to which the money was delegated."}),"\n",(0,t.jsx)(n.h4,{id:"how-to-become-a-community-manager",children:"How to become a Community Manager"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"A user can create a Community and become the Community Manager after being whitelisted by a DApp Admin."}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"power-of-a-community-manager",children:"Power of a Community Manager"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Edit the name, description, image, and link of their Community."}),"\n",(0,t.jsx)(n.li,{children:"Give Community funds (via delayed delegation) to Campaigns, and Traces."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsxs)(n.em,{children:[(0,t.jsx)(n.strong,{children:"Note:"})," In order to initiate a delayed delegation, the Community Manager should go to the Traces or Campaign page, and click the ",(0,t.jsx)(n.code,{children:"Delegate Funds"})," button."]})}),"\n",(0,t.jsx)(n.h3,{id:"campaign-manager",children:(0,t.jsx)("a",{name:"campaignManager",children:"Campaign Manager"})}),"\n",(0,t.jsx)(n.p,{children:"Campaign Managers are Giveth.io users who have chosen to make their project traceable and have passed the project verification process. The role of the Campaign Manager is to create Traces through which they can fund the work of people and the cost of resources behind the project."}),"\n",(0,t.jsx)(n.h4,{id:"how-to-become-a-campaign-manager",children:"How to become a Campaign Manager"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Verify their Giveth.io project and request to become traceable, upgrading to a Campaign on TRACE and becoming the Campaign Manager of said Campaign."}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"power-of-a-campaign-manager",children:"Power of a Campaign Manager"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Edit their Campaign."}),"\n",(0,t.jsx)(n.li,{children:"Send Campaign funds (via delegation) to Traces within their Campaign."}),"\n",(0,t.jsx)(n.li,{children:"Reject or accept proposed Traces to their Campaign."}),"\n",(0,t.jsx)(n.li,{children:"Create or edit Traces in their own Campaign."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsxs)(n.em,{children:[(0,t.jsx)(n.strong,{children:"Note:"})," A Trace has to belong to at least one Campaign and needs to be approved by the Campaign Manager."]})}),"\n",(0,t.jsx)(n.h3,{id:"campaign-reviewer",children:(0,t.jsx)("a",{name:"campaignReviewer",children:"Campaign Reviewer"})}),"\n",(0,t.jsx)(n.p,{children:"Because donations to a Campaign are locked, a Campaign Reviewer role is critical to review and track the Campaign's progress. Campaign Reviewers have the responsiblity of checking the legitimacy of a Campaign and its Traces. They also have considerable power within a Campaign."}),"\n",(0,t.jsx)(n.h4,{id:"how-to-become-a-campaign-reviewer",children:"How to become a Campaign Reviewer"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"A Campaign Manager can assign a user to become a Campaign Reviewer."}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"power-of-a-campaign-reviewer",children:"Power of a Campaign Reviewer"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Reject or approve Completed Traces."}),"\n",(0,t.jsx)(n.li,{children:"Cancel Traces within their Campaign."}),"\n",(0,t.jsx)(n.li,{children:"Cancel a Campaign."}),"\n"]}),"\n",(0,t.jsxs)(n.h3,{id:"trace-manager-formerly-milestone-manager",children:[(0,t.jsx)("a",{name:"traceManager",children:"Trace Manager"})," (formerly Milestone Manager)"]}),"\n",(0,t.jsxs)(n.p,{children:["Traces are the foundation of the Giveth system. Any registered user can propose a Trace to a Campaign. However, a Campaign Manager or Campaign Reviewer must approve the Trace proposed to their Campaign for it to become valid. Traces can represent several types of requests for funding. More info on ",(0,t.jsx)("a",{href:"#traceTypes",children:"types of Traces"})," are detailed further in this document."]}),"\n",(0,t.jsx)(n.h4,{id:"how-to-become-a-trace-manager",children:"How to become a Trace Manager"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"A user can propose a Trace to Campaign and become the Trace Manager."}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"power-of-a-trace-manager",children:"Power of a Trace Manager"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Edit their Trace."}),"\n",(0,t.jsx)(n.li,{children:"In the case of creating a Bounty or Milestone, a Trace Manager can set a Trace Reviewer."}),"\n",(0,t.jsx)(n.li,{children:"Mark a Trace as complete."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsxs)(n.em,{children:[(0,t.jsx)(n.strong,{children:"Note"}),": A Trace can no longer be edited once it has received a delegation or donation."]})}),"\n",(0,t.jsx)(n.h3,{id:"trace-reviewer",children:(0,t.jsx)("a",{name:"traceReviewer",children:"Trace Reviewer"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"A Trace Reviewer can be assigned by a Trace Manager."}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"power-of-a-trace-reviewer",children:"Power of a Trace Reviewer"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Reject or approve a completed Trace."}),"\n",(0,t.jsx)(n.li,{children:"Cancel a Trace."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsxs)(n.em,{children:[(0,t.jsx)(n.strong,{children:"Note:"})," In the case that a Trace is cancelled, the currency returns to the source, i.e. to the Giver for a donation or to the Community/Campaign for a delegation."]})}),"\n",(0,t.jsx)(n.h3,{id:"recipient",children:(0,t.jsx)("a",{name:"recipient",children:"Recipient"})}),"\n",(0,t.jsx)(n.p,{children:"A Recipient is a registered user who will receive payment from their successfully completed Trace. In the majority of cases, the Recipient is also the Trace Manager as they are the one working on the Trace. However, in some cases the recipient is separate, such as for payments to a supplier or a Milestone for a Campaign."}),"\n",(0,t.jsx)(n.h4,{id:"how-to-become-a-recipient",children:"How to become a Recipient"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"A Recipient can be designated by a Trace Manager; it can be the Trace Manager or another user."}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"power-of-a-recipient",children:"Power of a Recipient"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Mark a Trace as complete."}),"\n",(0,t.jsx)(n.li,{children:"Request payout of the Trace funds."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsxs)(n.em,{children:[(0,t.jsx)(n.strong,{children:"Note:"})," In the case that the Trace has a Reviewer, collecting funds needs the Reviewer's approval."]})}),"\n",(0,t.jsx)(n.h4,{id:"latency",children:"Latency"}),"\n",(0,t.jsx)(n.p,{children:"Some actions need to be registered to the Ethereum blockchain network. Adding transactions to the blockchain does not happen immediately, so we observe a latency in some actions. This latency depends on the network conditions, for example traffic on the network."}),"\n",(0,t.jsx)(n.h4,{id:"locality-of-roles",children:"Locality of Roles"}),"\n",(0,t.jsx)(n.p,{children:"All roles have a limited scope and once an entity ceases to exist, so do the connected roles. Every Community contains exactly one Manager. Every Campaign has one Campaign Manager and one Campaign Reviewer. Every Trace has one Trace Manager, one Recipient and potentially one Reviewer. The Giver is not explicitly associated with any entity but may interact with all of them."}),"\n",(0,t.jsx)("img",{alt:"Relations between Communities, Campaigns and Traces",src:(0,s.Ay)("img/content/trace/role-locality.svg")}),"\n",(0,t.jsx)(n.h3,{id:"currency-flow",children:"Currency Flow"}),"\n",(0,t.jsx)(n.p,{children:"Giveth TRACE on a technical level is a system for managing currency. Terms referring to the movement of funds within the Giveth system are defined as follows:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Donation:"})," When a Giver sends funds from their wallet to a Trace, Campaign, or Community."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Collecting:"}),' When the Recipient sends or "collects" funds from a Trace to their wallet.']}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Disbursing:"})," When a Trace Manager sends funds from a Trace account to the Recipient's wallet."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Delegation:"})," When a Campaign Manager or Community Manager sends money from the Campaign or Community account to Trace account on behalf of the original Giver. A Giver can reject Delegation within 72 hours, after which the Currency transfer becomes irreversible."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Refund:"})," A Giver who has contributed to a Community can withdraw their funds as long as they are not yet committed to a Campaign or Trace. A Giver contributing to a Campaign can withdraw their funds as long as they are not yet committed to a Trace."]}),"\n"]}),"\n",(0,t.jsx)("img",{alt:"Currency Flow on Giveth TRACE",src:(0,s.Ay)("img/content/trace/currencyFlow.svg")}),"\n",(0,t.jsx)(n.h6,{id:"currency-flow-on-giveth-trace",children:"Currency Flow on Giveth TRACE"}),"\n",(0,t.jsx)(n.h2,{id:"entities",children:"Entities"}),"\n",(0,t.jsxs)(n.p,{children:["Giveth TRACE, on a technical level, is a system for managing currency. The DApp\u2019s entities are accounts to which people can deposit, transfer or withdraw currency. We have three entities on Giveth TRACE, ",(0,t.jsx)("a",{href:"#communities",children:(0,t.jsx)(n.strong,{children:"Communities"})}),", ",(0,t.jsx)("a",{href:"#campaigns",children:(0,t.jsx)(n.strong,{children:"Campaigns"})})," and ",(0,t.jsx)("a",{href:"#traces",children:(0,t.jsx)(n.strong,{children:"Traces"})}),". The relationship between them are defined in the chart below. Each entitity corresponds to one or more smart contracts."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsxs)(n.em,{children:[(0,t.jsx)(n.strong,{children:"Note:"})," In Q1 2021 the Giveth team rebranded the entities ",(0,t.jsx)(n.strong,{children:"DAC"}),"s (Decentralized Altruistic Communities) to simply ",(0,t.jsx)(n.strong,{children:"Communities"}),", and ",(0,t.jsx)(n.strong,{children:"Milestones"})," to ",(0,t.jsx)(n.strong,{children:"Traces"}),"."]})}),"\n",(0,t.jsx)("img",{alt:"Relationship between The DApp's Entities",src:(0,s.Ay)("img/content/trace/relations.svg")}),"\n",(0,t.jsx)(n.h5,{id:"relationship-between-the-dapps-entities",children:"Relationship between the DApp's Entities"}),"\n",(0,t.jsx)(n.h3,{id:"communities",children:(0,t.jsx)("a",{name:"communities",children:"Communities"})}),"\n",(0,t.jsxs)(n.p,{children:["Communities, ",(0,t.jsx)(n.strong,{children:"formerly known as DACs"}),", are the most general entity in the Giveth System. The purpose of a Community is to unite Givers around a cause and provide them with the possibility to give money to a cause without having to do the research involved in finding the exact Campaign to contribute to. Any money donated to a Community can be retrieved by the Giver, however we strongly discourage Givers to do so. The funds remain in the Community until they are delegated to a Campaign or a Trace, or withdrawn by the Giver. ",(0,t.jsx)(n.strong,{children:"Community Managers"})," can support any Campaign or Trace by sending currency to the account of the recipient."]}),"\n",(0,t.jsx)("img",{alt:"Community to Campaign delegation state diagram",src:(0,s.Ay)("img/content/trace/dac-campaign-donation-statediagram.svg")}),"\n",(0,t.jsxs)(n.h5,{id:"state-diagram-for-community---campaign-delegation-flow-showing-how-donations-made-to-a-dac-are-delegated-to-a-campaign",children:[(0,t.jsx)(n.strong,{children:"State diagram for Community -> Campaign delegation flow"}),", showing how donations made to a DAC are delegated to a Campaign."]}),"\n",(0,t.jsx)("img",{alt:"Community to Trace delegation state diagram",src:(0,s.Ay)("img/content/trace/dac-milestone-donation-statediagram.svg")}),"\n",(0,t.jsxs)(n.h5,{id:"state-diagram-for-community---trace-delegation-flow-showing-how-donations-made-to-a-community-are-delegated-directly-to-a-trace",children:[(0,t.jsx)(n.strong,{children:"State diagram for Community -> Trace delegation flow"}),", showing how donations made to a Community are delegated directly to a Trace."]}),"\n",(0,t.jsx)(n.h3,{id:"campaigns",children:(0,t.jsx)("a",{name:"campaigns",children:"Campaigns"})}),"\n",(0,t.jsxs)(n.p,{children:["Campaigns are in the center of the Giveth donation system. They are effectively tools to steer money towards the smallest entities, Traces. A Campaign can be supported by more than one Community or by no Community at all. Campaign co-owners can only accept or reject proposed Traces. ",(0,t.jsx)(n.strong,{children:"Campaign Reviewers"})," can cancel the Campaign if the Campaign is bad or no longer active."]}),"\n",(0,t.jsx)(n.p,{children:"Donations made to a Campaign are locked, and unless the Campaign gets cancelled, the Giver no longer has control over the donation. The reason we lock the donations is to give the people behind the Campaign some level of certainty that they can count on getting the pledged donations and pledge them to one of their Traces."}),"\n",(0,t.jsx)("img",{alt:"Campaign Donation state diagram",src:(0,s.Ay)("img/content/trace/campaign-donation-statediagram.svg")}),"\n",(0,t.jsx)(n.h5,{id:"state-diagram-for-donations-made-to-campaign",children:(0,t.jsx)(n.strong,{children:"State diagram for donations made to Campaign."})}),"\n",(0,t.jsx)(n.h3,{id:"traces",children:(0,t.jsx)("a",{name:"traces",children:"Traces"})}),"\n",(0,t.jsxs)(n.p,{children:["The main building blocks of the DApp are Traces, ",(0,t.jsx)(n.strong,{children:"formerly known as Milestones"}),". A Trace is the only way by which funds can exit the Giveth system. Traces must be created inside of a Campaign. Compared to a Community or Campaign, Traces are more complex because more roles can interact with them."]}),"\n",(0,t.jsx)(n.h3,{id:"trace-entities",children:(0,t.jsx)("a",{name:"traceTypes",children:"Trace Entities"})}),"\n",(0,t.jsx)(n.p,{children:"To tailor Traces to meet the specific needs of Communities and Campaigns, there are certain rules that can be applied."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Capped Traces:"})," The maximum currency which can be given to to the Trace is set. This maximum is called the cap."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Trace with Reviewer:"})," The funds cannot be collected or disbursed from this Trace without confirmation by an assigned Trace Reviewer."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Specify Currency Received:"})," The Trace Creator is able to specify which of the whitelisted cryptocurrencies they would like to receive their funds in."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Based on these rules we can have ",(0,t.jsx)(n.em,{children:"four"})," types of Traces with their own distinct properties: ",(0,t.jsx)(n.strong,{children:"Milestones, Bounties, Expenses"})," and ",(0,t.jsx)(n.strong,{children:"Payments"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"milestones",children:(0,t.jsx)(n.strong,{children:"Milestones"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Important goals or events for a Campaign. Any funds collected in Milestones go to the Campaign that it is a part of."})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"The Lifecycle of Milestones in the DApp is as follows:"})}),"\n",(0,t.jsx)("img",{alt:"Lifecycle of Milestones",src:(0,s.Ay)("img/content/trace/milestone.png")}),"\n",(0,t.jsx)(n.h3,{id:"bounties",children:(0,t.jsx)(n.strong,{children:"Bounties"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"If a Campaign or Community needs to outsource work to be done, they can use a Bounty to compensate contributors for completing specific tasks."})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"The Lifecycle of Bounties is as follows:"})}),"\n",(0,t.jsx)("img",{alt:"Lifecycle of Bounties",src:(0,s.Ay)("img/content/trace/Bounty.png")}),"\n",(0,t.jsx)(n.h3,{id:"expenses",children:(0,t.jsx)(n.strong,{children:"Expenses"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"If there are recurring or singular expenses that were paid by a Campaign or Community Member, they can be tracked and reimbursed by this Trace."})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"The Lifecycle of Expenses is as follows:"})}),"\n",(0,t.jsx)("img",{alt:"Lifecycle of Expenses",src:(0,s.Ay)("img/content/trace/Expense.png")}),"\n",(0,t.jsx)(n.h3,{id:"payments",children:(0,t.jsx)(n.strong,{children:"Payments"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Payments are compensation to Campaign members for the work they have done. Payments can be uncapped or capped for the funding they can receive."})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"The Lifecycle for Payments with NO cap is as follows:"})}),"\n",(0,t.jsx)("img",{alt:"Lifecycle of Payments without Cap",src:(0,s.Ay)("img/content/trace/paymentNoCap.png")}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"The Lifecycle for Payments with a cap is as follows:"})}),"\n",(0,t.jsx)("img",{alt:"Lifecycle of Payments with Cap",src:(0,s.Ay)("img/content/trace/paymentWithCap.png")}),"\n",(0,t.jsx)(n.p,{children:"A breakdown of their functions can be summarized in the table below:"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Trace Type"}),(0,t.jsx)(n.th,{children:"Funding is Capped"}),(0,t.jsx)(n.th,{children:"Specify Currency Received"}),(0,t.jsx)(n.th,{children:"Can Assign Reviewer"}),(0,t.jsx)(n.th,{children:"Currency Destination"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Milestone"}),(0,t.jsx)(n.td,{children:"No"}),(0,t.jsx)(n.td,{children:"No"}),(0,t.jsx)(n.td,{children:"Yes"}),(0,t.jsx)(n.td,{children:"Campaign"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Bounty"}),(0,t.jsx)(n.td,{children:"No"}),(0,t.jsx)(n.td,{children:"No"}),(0,t.jsx)(n.td,{children:"Yes"}),(0,t.jsx)(n.td,{children:"Any Address"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Expense"}),(0,t.jsx)(n.td,{children:"Yes"}),(0,t.jsx)(n.td,{children:"Yes"}),(0,t.jsx)(n.td,{children:"No"}),(0,t.jsx)(n.td,{children:"Any Address"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Payment NO Cap"}),(0,t.jsx)(n.td,{children:"No"}),(0,t.jsx)(n.td,{children:"Yes"}),(0,t.jsx)(n.td,{children:"No"}),(0,t.jsx)(n.td,{children:"Any Address"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Payment with Cap"}),(0,t.jsx)(n.td,{children:"Yes"}),(0,t.jsx)(n.td,{children:"Yes"}),(0,t.jsx)(n.td,{children:"No"}),(0,t.jsx)(n.td,{children:"Any Address"})]})]})]}),"\n",(0,t.jsx)(n.h3,{id:"notes",children:"Notes:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsxs)(n.em,{children:["In coding Entities are called ",(0,t.jsx)(n.code,{children:"projects"}),"."]})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.em,{children:"When money goes from a Community to a Trace or Campaign, Giveth then connects the Community with that Campaign or Trace. This means that you will see that Campaign or Trace represented on the Community page."})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.em,{children:"If a Trace/Campaign/Community is canceled, the funds are returned to the source contributor automatically."})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.em,{children:"Currency that goes to a Community is a loose commitment: at any point up until the moment funds are locked into a Campaign/Milestone, the Giver can decide to withdraw (refund) them."})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.em,{children:"Currency that went to a Campaign/Trace is fully committed, because Trace Managers and Campaigns Manager take actions based on these funds."})}),"\n"]})]})}function g(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(m,{...e})}):m(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>s,x:()=>o});var a=i(6540);const t={},r=a.createContext(t);function s(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);
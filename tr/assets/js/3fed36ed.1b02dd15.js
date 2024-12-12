"use strict";(self.webpackChunkgiveth_docs=self.webpackChunkgiveth_docs||[]).push([[1055],{1179:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>c,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>d});const o=JSON.parse('{"id":"devouch-api","title":"Integrating DeVouch","description":"DeVouch prioritizes accessiblity of information and easy integration. Reading and writing data to DeVouch is accessible to all! We have three topics to cover in this article:","source":"@site/devouch/api.md","sourceDirName":".","slug":"/integrating-devouch","permalink":"/tr/devouch/integrating-devouch","draft":false,"unlisted":false,"editUrl":"https://github.com/giveth/giveth-docs/edit/master/devouch/api.md","tags":[],"version":"current","lastUpdatedBy":"Amin Latifi","lastUpdatedAt":1718288098000,"frontMatter":{"id":"devouch-api","title":"Integrating DeVouch","slug":"/integrating-devouch"},"sidebar":"whatisdevouch","previous":{"title":"What is DeVouch?","permalink":"/tr/devouch/"}}');var i=n(4848),s=n(8453),a=n(6025);const r={id:"devouch-api",title:"Integrating DeVouch",slug:"/integrating-devouch"},c=void 0,h={},d=[{value:"How to issue DeVouch attestations",id:"how-to-issue-devouch-attestations",level:2},{value:"Make the Attestation Onchain",id:"make-the-attestation-onchain",level:3},{value:"No recipient address",id:"no-recipient-address",level:3},{value:"Project Source",id:"project-source",level:3},{value:"Project Id",id:"project-id",level:3},{value:"Giveth",id:"giveth",level:4},{value:"Gitcoin",id:"gitcoin",level:4},{value:"Retro Funding 4",id:"retro-funding-4",level:4},{value:"Vouch",id:"vouch",level:3},{value:"Comment",id:"comment",level:3},{value:"Referenced Attestations",id:"referenced-attestations",level:3},{value:"Ready to submit!",id:"ready-to-submit",level:3},{value:"Adding your Attester Group to DeVouch",id:"adding-your-attester-group-to-devouch",level:2},{value:"Overview of the DeVouch Graphql API &amp; Cookbook",id:"overview-of-the-devouch-graphql-api--cookbook",level:2}];function l(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"DeVouch prioritizes accessiblity of information and easy integration. Reading and writing data to DeVouch is accessible to all! We have three topics to cover in this article:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"How to issue DeVouch attestations"}),"\n",(0,i.jsx)(t.li,{children:"Adding your Attester Group to DeVouch"}),"\n",(0,i.jsx)(t.li,{children:"Overview of the DeVouch Graphql API & Cookbook"}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"how-to-issue-devouch-attestations",children:"How to issue DeVouch attestations"}),"\n",(0,i.jsx)(t.p,{children:"There is a standardized attestation schema that all DeVouch eligible attestations MUST USE. You can find them here:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://sepolia.easscan.org/schema/view/0x97b0c9911936fad57e77857fac6eef6771f8d0bf025be9549214e32bf9e2415a",children:"Sepolia (for testing)"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://optimism.easscan.org/schema/view/0x97b0c9911936fad57e77857fac6eef6771f8d0bf025be9549214e32bf9e2415a",children:"Optimism Mainnet"})}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["We recommend using the ",(0,i.jsx)(t.a,{href:"https://github.com/ethereum-attestation-service/eas-sdk",children:"EAS SDK"})," to integrate making attestations from your application, but for demonstration purposes we will show you how it looks on the easscan UI."]}),"\n",(0,i.jsx)("img",{alt:"easscan view of devouch attestation",src:(0,a.Ay)("img/devouch/devouchAttestationExample.png")}),"\n",(0,i.jsx)(t.h3,{id:"make-the-attestation-onchain",children:"Make the Attestation Onchain"}),"\n",(0,i.jsx)(t.p,{children:"You need to set the attestation as onchain in order for it to be indexed by DeVouch."}),"\n",(0,i.jsx)(t.h3,{id:"no-recipient-address",children:"No recipient address"}),"\n",(0,i.jsx)(t.p,{children:"You don't need to set a recipient address for DeVouch attestations."}),"\n",(0,i.jsx)(t.h3,{id:"project-source",children:"Project Source"}),"\n",(0,i.jsxs)(t.p,{children:["This is the name of the source platform that the project is from, currently there are these three: ",(0,i.jsx)(t.code,{children:"gitcoin"}),", ",(0,i.jsx)(t.code,{children:"giveth"}),", ",(0,i.jsx)(t.code,{children:"rf4"})," (Retro Funding round 4). More source platforms may be added later."]}),"\n",(0,i.jsx)(t.h3,{id:"project-id",children:"Project Id"}),"\n",(0,i.jsx)(t.p,{children:"Project identifier (ID) from the source platform. This is the unique identifier for the project on the source platform."}),"\n",(0,i.jsx)(t.h4,{id:"giveth",children:"Giveth"}),"\n",(0,i.jsxs)(t.p,{children:["For Giveth projects you can find the id of a project by going to the ",(0,i.jsx)(t.a,{href:"https://mainnet.serve.giveth.io/graphql",children:"Giveth graphQL API"})," and running a query like this:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-graphql",children:'query { \n  projectBySlug(slug: "project/slug/goes/here") {\n    id\n    title\n  }\n}\n'})}),"\n",(0,i.jsxs)(t.p,{children:["This will give you a number like ",(0,i.jsx)(t.code,{children:"12345"})," that you should use for the project Id when attesting to a Giveth project."]}),"\n",(0,i.jsx)(t.h4,{id:"gitcoin",children:"Gitcoin"}),"\n",(0,i.jsxs)(t.p,{children:["For Gitcoin grants projects you can find the id of a project by going to the ",(0,i.jsx)(t.a,{href:"https://grants-stack-indexer-v2.gitcoin.co/graphiql",children:"Gitcoin graphQL API"})," and running a query like this:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-graphql",children:'query {\n  projects(\n    filter: {tags: {contains: "allo-v2"}, projectType: {equalTo: CANONICAL}, not: {tags: {contains: "program"}}, rounds: {every: {applicationsExist: true}}}\n    condition: {name: "{name of project}"}\n  ) {\n    id\n    name\n  }\n}\n\n'})}),"\n",(0,i.jsxs)(t.p,{children:["This will give you a hash like ",(0,i.jsx)(t.code,{children:"0x7f4b4b6cecc3bdaf95098ea2b2f5cd9c31ea742880d5076b540f83caf8247e16"})," that you should use for the project Id when attesting to a Gitcoin project."]}),"\n",(0,i.jsx)(t.h4,{id:"retro-funding-4",children:"Retro Funding 4"}),"\n",(0,i.jsxs)(t.p,{children:["For Retro Funding projects you can find the id of a project by going to the ",(0,i.jsx)(t.a,{href:"https://round4-api-eas.retrolist.app/projects",children:"Retrolist projects API"}),":"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"https://round4-api-eas.retrolist.app/projects\n"})}),"\n",(0,i.jsx)(t.p,{children:"the response on this page will be a very large JSON file which can be parsed to find the project ID you need to use for the attestation."}),"\n",(0,i.jsx)(t.h3,{id:"vouch",children:"Vouch"}),"\n",(0,i.jsx)(t.p,{children:"This is a simple true/false value, vouching = true, flagging = false."}),"\n",(0,i.jsx)(t.h3,{id:"comment",children:"Comment"}),"\n",(0,i.jsx)(t.p,{children:"This is a text comment that will be displayed on the DeVouch UI next to the associated attestation. This should be limited to 256 characters for it to be shown appropriately on the DeVouch UI and to limit gas expenses on submitting the transaction."}),"\n",(0,i.jsx)(t.h3,{id:"referenced-attestations",children:"Referenced Attestations"}),"\n",(0,i.jsx)(t.p,{children:"This is an important part where you associate the attestations with an attester organization. You'll need to get the attestation UID that links the attester organization relation to the attestation. Look at this example below in the easscan UI:"}),"\n",(0,i.jsx)("img",{alt:"easscan view of attester org referencing",src:(0,a.Ay)("img/devouch/exampleAttesterOrgReference.png")}),"\n",(0,i.jsxs)(t.p,{children:["This for example is used to associate ",(0,i.jsx)(t.code,{children:"divinecomedian.eth"})," as an RPGF3 Badgeholder, you can see the attestation UID near the top of the page. This is the value you need to use in the ",(0,i.jsx)(t.code,{children:"Referenced Attestations"})," field."]}),"\n",(0,i.jsx)(t.h3,{id:"ready-to-submit",children:"Ready to submit!"}),"\n",(0,i.jsx)(t.p,{children:"When you have all those fields filled out, you can submit the attestation to the blockchain. Once it is confirmed, it will be indexed by DeVouch and show up on the DeVouch UI and graphQL API."}),"\n",(0,i.jsx)(t.h2,{id:"adding-your-attester-group-to-devouch",children:"Adding your Attester Group to DeVouch"}),"\n",(0,i.jsx)(t.p,{children:"In order to add your attester group to DeVouch there's a few steps you need to take:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["Fork the ",(0,i.jsx)(t.a,{href:"https://github.com/Giveth/DeVouch-BE",children:"DeVouch BE repo on Github"})]}),"\n",(0,i.jsxs)(t.li,{children:["Make a ",(0,i.jsx)(t.code,{children:"org-config.jsonc"})," config file by copying from ",(0,i.jsx)(t.code,{children:"org-config.template.jsonc"}),".\na. Change the ",(0,i.jsx)(t.code,{children:"name"})," variable to the name of your attester group.\nb. Change the ",(0,i.jsx)(t.code,{children:"schemaId"})," variable to the schema ID of the attestations related to your organization\nc. Change the ",(0,i.jsx)(t.code,{children:"authorizedAttestor"})," variable to the address authorized to add addresses to your attester group or whoever the issuer is/was of the valid attestations.\nd. Ensure the ",(0,i.jsx)(t.code,{children:"network"})," variable is set to the correct network. ",(0,i.jsx)(t.code,{children:"eth-sepolia"})," for testing, ",(0,i.jsx)(t.code,{children:"optimism-mainnet"})," for production.\ne. Optional to change the ",(0,i.jsx)(t.code,{children:"color"})," variable to a hex colour value that will be associated with your attester group & shown on the UI.\nf. Optional to set ",(0,i.jsx)(t.code,{children:"startBlock"})," to the block number you want to start indexing attestations from. This is useful if you have attestation in the past that you want to index. If so, the ",(0,i.jsx)(t.code,{children:"startBlcock"})," should the block number of the first attestation you want to index."]}),"\n",(0,i.jsxs)(t.li,{children:["Run the script with ",(0,i.jsx)(t.code,{children:"node add-organisation.js"}),". You should noticy a new migration file was made under the ",(0,i.jsx)(t.code,{children:"db/migrations"})," folder."]}),"\n",(0,i.jsx)(t.li,{children:"Create a PR to the main DeVouch BE repo with your changes."}),"\n",(0,i.jsx)(t.li,{children:"Wait for Approval and merging from the DeVouch team."}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"overview-of-the-devouch-graphql-api--cookbook",children:"Overview of the DeVouch Graphql API & Cookbook"}),"\n",(0,i.jsx)(t.p,{children:"The DeVouch Graphql API is an accessible endpoint that allows you to query for any information from the DeVouch indexer. There are two endpoints available:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Staging/Sepolia: ",(0,i.jsx)(t.a,{href:"https://backend.devouch.xyz/graphql",children:"https://backend.devouch.xyz/graphql"})]}),"\n",(0,i.jsxs)(t.li,{children:["Production/Optimism Mainnet: ",(0,i.jsx)(t.a,{href:"https://optimism.backend.devouch.xyz/graphql",children:"https://optimism.backend.devouch.xyz/graphql"})]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"The graphQL API is hyper flexible and provides a nearly unlimited amount of ways to query data. The rest of this document will be dedicated to providing examples of how to query the DeVouch API."}),"\n",(0,i.jsxs)(n,{children:[(0,i.jsx)("summary",{children:"Fetching All Projects"}),(0,i.jsxs)(t.p,{children:["This query will fetch ",(0,i.jsx)(t.strong,{children:"information for all projects"})," listed on DeVouch."]}),(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-graphql",children:"query MyQuery {\n  projects {\n    id\n    image\n    description\n    projectId\n    source\n    title\n    totalAttests\n    totalFlags\n    totalVouches\n  }\n}\n"})}),(0,i.jsxs)(t.p,{children:["To query for ",(0,i.jsx)(t.strong,{children:"projects from a specific source"}),", you can add a ",(0,i.jsx)(t.code,{children:"where"})," clause to the query like this:"]}),(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-graphql",children:'query MyQuery {\n  projects(where: {source_eq: "giveth"}) {\n    id\n    image\n    description\n    projectId\n    source\n    title\n    totalAttests\n    totalFlags\n    totalVouches\n  }\n}\n'})}),(0,i.jsxs)(t.p,{children:["To query for ",(0,i.jsx)(t.strong,{children:"projects that have only received attestations from a specific attester group"}),", you'll need the schemaID associated with the attester group. When you have this you can make a quiery like this:"]}),(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-graphql",children:'query {\n  projectAttestations (where:{\n    attestorOrganisation:{\n      organisation:{\n        id_eq: "0xf63f2a7159ee674aa6fce42196a8bb0605eafcf20c19e91a7eafba8d39fa0404"\n      }\n    }\n  }) {\n    project {\n      id\n      title\n    }\n    }\n  }\n'})}),(0,i.jsxs)(t.p,{children:["Search all projects for ",(0,i.jsx)(t.strong,{children:"keyword match"})," in title:"]}),(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-graphql",children:'{\n  projects(where: {title_containsInsensitive: "blockchain"}) {\n    totalFlags\n    totalVouches\n    title\n    source\n    description\n    slug\n    attestedOrganisations {\n      id\n      count\n      vouch\n  \n    }\n  }\n}\n'})})]}),"\n",(0,i.jsxs)(n,{children:[(0,i.jsx)("summary",{children:"Fetching Information for a specific Project"}),(0,i.jsx)(t.p,{children:"To query the Attestation data made to a specific project you will need to know the source platform and the project ID. Once you have that you can query attestation data like this:"}),(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-graphql",children:'query {\n  projects(where: {source_eq: "rf4", projectId_eq: "0x897d6172efca2d24a6b14f235db5127f7d747d923287ede38d776126bf02cbfe"}) {\n    id\n    source\n    projectId\n    totalFlags\n    totalVouches\n    attests {\n      vouch\n      comment\n      attestorOrganisation {\n        attestor {\n          id\n        }\n        organisation {\n          id\n          name\n        }\n      }\n    }\n  }\n}\n\n'})}),(0,i.jsxs)(t.p,{children:["Note: Inside of the ",(0,i.jsx)(t.code,{children:"attests"})," field you can query for the ",(0,i.jsx)(t.code,{children:"attestor"})," and ",(0,i.jsx)(t.code,{children:"organisation"})," entities. The organisation refers to the attester group associated with the attestation. The attestor is the user that made the attestation and it's ",(0,i.jsx)(t.code,{children:"id"})," is their address."]})]}),"\n",(0,i.jsxs)(n,{children:[(0,i.jsxs)(t.p,{children:[(0,i.jsx)("summary",{children:"Fetching Information about a specific attester"}),"\nTo fetch information about a specific attestor you'll need their address, then you can query like this:"]}),(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-graphql",children:'{\n  projectAttestations(where: {attestorOrganisation: {attestor: {id_eq: "0x826976d7c600d45fb8287ca1d7c76fc8eb732030"}}}) {\n    attestTimestamp\n    comment\n    vouch\n    project {\n      id\n      title\n    }\n    attestorOrganisation {\n      attestor {\n        id\n      }\n      attestTimestamp\n      organisation {\n        name\n      }\n    }\n  }\n}\n'})}),(0,i.jsxs)(t.p,{children:["This response provided all the attestations made by the attestor with the address ",(0,i.jsx)(t.code,{children:"0x826976d7c600d45fb8287ca1d7c76fc8eb732030"}),". This include which projects they attested to, the details of the attestation, the attester group they used and the timestamp they attested."]})]})]})}function u(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>r});var o=n(6540);const i={},s=o.createContext(i);function a(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);
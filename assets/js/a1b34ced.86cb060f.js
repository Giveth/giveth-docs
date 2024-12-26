"use strict";(self.webpackChunkgiveth_docs=self.webpackChunkgiveth_docs||[]).push([[4128],{9534:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>h,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>d});const a=JSON.parse('{"id":"whatisdevouch","title":"What is DeVouch?","description":"DeVouch is a system for members of reputable organizations in the Ethereum ecosystem to vouch for projects that are looking to raise funding. By vouching for a project, the organization can lend its credibility to the project, building confidence for those looking to support with funding.","source":"@site/devouch/whatisdevouch.md","sourceDirName":".","slug":"/","permalink":"/devouch/","draft":false,"unlisted":false,"editUrl":"https://github.com/giveth/giveth-docs/edit/master/devouch/whatisdevouch.md","tags":[],"version":"current","lastUpdatedBy":"Mitch Oz","lastUpdatedAt":1717630611000,"frontMatter":{"id":"whatisdevouch","title":"What is DeVouch?","slug":"/"},"sidebar":"whatisdevouch","next":{"title":"Integrating DeVouch","permalink":"/devouch/integrating-devouch"}}');var i=o(4848),s=o(8453),n=o(6025);const r={id:"whatisdevouch",title:"What is DeVouch?",slug:"/"},h=void 0,c={},d=[{value:"Attester Groups",id:"attester-groups",level:2},{value:"Navigating DeVouch",id:"navigating-devouch",level:2},{value:"Vouching and Flagging projects",id:"vouching-and-flagging-projects",level:2},{value:"Editing Attestations",id:"editing-attestations",level:2},{value:"Deleting Attestations",id:"deleting-attestations",level:2}];function l(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"DeVouch is a system for members of reputable organizations in the Ethereum ecosystem to vouch for projects that are looking to raise funding. By vouching for a project, the organization can lend its credibility to the project, building confidence for those looking to support with funding."}),"\n",(0,i.jsxs)(t.p,{children:["DeVouch collects projects ",(0,i.jsx)(t.a,{href:"https://gitcoin.co/",children:"Gitcoin"}),", ",(0,i.jsx)(t.a,{href:"https://giveth.io/",children:"Giveth"})," and ",(0,i.jsx)(t.a,{href:"https://vote.optimism.io/",children:"Optimism Retro Funding"})," and shows them in a singe place allowing users to either vouch or flag for each project. More platforms may be added in the future."]}),"\n",(0,i.jsx)(t.p,{children:'Visitors to the website can see the vouches and flags received by each project, tracked by the "Attester Group" that the vouch or flag came from. Learn more about "Attester Groups" below.'}),"\n",(0,i.jsx)(t.p,{children:"We believe that by providing a way for members of reputable organizations to vouch for projects, we can leverage the social fabric of the Ethereum community to make more informed decisions on the allocation of capital."}),"\n",(0,i.jsx)(t.h2,{id:"attester-groups",children:"Attester Groups"}),"\n",(0,i.jsxs)(t.p,{children:["DeVouch functions using a system of Attestations from ",(0,i.jsx)(t.a,{href:"https://attest.org/",children:"EAS"}),'. At the top level DeVouch identifies "Attester Groups" by looking at on-chain attestation data, Attester Groups are best defined as a group of addresses that hold the same type of attestations (defined by it\'s schema ID) that were all issued by the same address (the "Issuing Authority").']}),"\n",(0,i.jsx)(t.p,{children:"Check out this attestation for example:"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"https://optimism.easscan.org/attestation/view/0x3ef6cc3d97a1386c1eb6a9ed7903c7247883f348eb8784db17678b1392c0c136",children:"https://optimism.easscan.org/attestation/view/0x3ef6cc3d97a1386c1eb6a9ed7903c7247883f348eb8784db17678b1392c0c136"})}),"\n",(0,i.jsx)("img",{alt:"attestestation example",src:(0,n.Ay)("img/devouch/attesterOrganizationExamples.png")}),"\n",(0,i.jsxs)(t.p,{children:['In this case, you see the schema is called "RETROPGF BADGEHOLDER" with an ID of ',(0,i.jsx)(t.code,{children:"0xfdcfdad2dbe7489e0ce56b260348b7f14e8365a8a325aef9834818c00d46b31b"})," and the Issuing Authority is ",(0,i.jsx)(t.code,{children:"0x621477dBA416E12df7FF0d48E14c4D20DC85D7D9"})," (presumably someone from the Optimism team). DeVouch would consider all addresses that hold attestations with this schema ID, issued by the same Issuing Authority address to be part of the same Attester Group. The Attester Groups that the DeVouch indexer recognizes were defined at launch by the DeVouch team, and more can be added by following the instructions in the ",(0,i.jsx)(t.a,{href:"https://github.com/Giveth/DeVouch-BE",children:"DeVouch repository"}),"."]}),"\n",(0,i.jsx)(t.p,{children:"Anyone can make an attestation to either vouch or flag a project at any time, but DeVouch only considers attestations from recognized Attester Groups when indexing information."}),"\n",(0,i.jsx)(t.h2,{id:"navigating-devouch",children:"Navigating DeVouch"}),"\n",(0,i.jsx)(t.p,{children:"There are four main pages on DeVouch:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:'The "All Projects" view, which shows project card summaries of all projects that have been indexed by DeVouch.'}),"\n",(0,i.jsx)(t.li,{children:'The "Project Details" view, which shows detailed information about a single project, including the vouches and flags it has received.'}),"\n",(0,i.jsx)(t.li,{children:'The "My Attestations" view, which shows all the eligible DeVouch attestations you have made, and allows you to edit or delete them.'}),"\n",(0,i.jsx)(t.li,{children:'The "User Attestations" view, which shows all the eligible DeVouch attestations made by a specific address.'}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"On any page there are a myriad of options for filtering, sorting, and searching for exactly the information you're looking for! Make use of them to optimize you're experience and see the data that's relevant for you."}),"\n",(0,i.jsx)(t.h2,{id:"vouching-and-flagging-projects",children:"Vouching and Flagging projects"}),"\n",(0,i.jsx)(t.p,{children:'When you vouch for a project, you are saying that you know this project and that you trust it. When you belong to a "Atterster Group" in a way you are lending the credibility of the Attester Group to the project you vouched for.'}),"\n",(0,i.jsx)(t.p,{children:"Similarily, when you flag a project, you are saying that you don't trust this project or you don't believe it is legitimate."}),"\n",(0,i.jsx)(t.p,{children:"Be aware that your address will be associated with the vouch or flag you make, and that this information is public and can be seen by anyone. You can additionally add a comment to your vouch or flag to provide more context."}),"\n",(0,i.jsx)(t.p,{children:"It is possible that an address could belong to multiple Attester Groups, when you create an attestation, you can choose which Attester Group you want to vouch or flag from. Each attestation made with a unique Attester Group used by the same address counts as a separate vouch or flag. You can only use one Attester Group per attestation on DeVouch."}),"\n",(0,i.jsx)(t.h2,{id:"editing-attestations",children:"Editing Attestations"}),"\n",(0,i.jsx)(t.p,{children:"You can edit your attestation, whether it was a vouch or a flag. This will allow you to change your vouch to a flag or vice versa and also write a new comment into your attestation. This will create a new on-chain attestation that will replace the old one. If you attest to the project as part of other Attester Groups, those attestations will remain unchanged."}),"\n",(0,i.jsx)(t.p,{children:"You can edit your attestations from either the project details page of the project you attested to or from the 'My Attestations' page."}),"\n",(0,i.jsx)(t.h2,{id:"deleting-attestations",children:"Deleting Attestations"}),"\n",(0,i.jsx)(t.p,{children:"You can delete your attestation, whether it was a vouch or a flag. This creates an on-chain revocation of your attestation. This will remove your vouch or flag from the project. If you attested to the project as part of other Attester Groups, those attestations will remain."}),"\n",(0,i.jsx)(t.p,{children:"You can delete your attestations from either the project details page of the project you attested to or from the 'My Attestations' page."}),"\n",(0,i.jsx)(t.h1,{id:"integrating-devouch",children:"Integrating DeVouch"}),"\n",(0,i.jsx)(t.p,{children:"If you'd like to integrate DeVouch data into your platform or analytics we have several graphQL APIs available."}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Sepolia (for testing) - ",(0,i.jsx)(t.a,{href:"https://backend.devouch.xyz/graphql",children:"https://backend.devouch.xyz/graphql"})]}),"\n",(0,i.jsxs)(t.li,{children:["Optimism Mainnet - ",(0,i.jsx)(t.a,{href:"https://optimism.backend.devouch.xyz/graphql",children:"https://optimism.backend.devouch.xyz/graphql"})]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["To learn more about the APIs and how to issue DeVouch attestations continue on to ",(0,i.jsx)(t.a,{href:"/devouch/integrating-devouch",children:"this article"}),"."]})]})}function u(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},8453:(e,t,o)=>{o.d(t,{R:()=>n,x:()=>r});var a=o(6540);const i={},s=a.createContext(i);function n(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:n(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);
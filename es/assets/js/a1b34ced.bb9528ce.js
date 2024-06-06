"use strict";(self.webpackChunkgiveth_docs=self.webpackChunkgiveth_docs||[]).push([[4901],{3905:(t,e,o)=>{o.d(e,{Zo:()=>l,kt:()=>d});var a=o(7294);function n(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function r(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,a)}return o}function i(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?r(Object(o),!0).forEach((function(e){n(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function s(t,e){if(null==t)return{};var o,a,n=function(t,e){if(null==t)return{};var o,a,n={},r=Object.keys(t);for(a=0;a<r.length;a++)o=r[a],e.indexOf(o)>=0||(n[o]=t[o]);return n}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)o=r[a],e.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(t,o)&&(n[o]=t[o])}return n}var c=a.createContext({}),h=function(t){var e=a.useContext(c),o=e;return t&&(o="function"==typeof t?t(e):i(i({},e),t)),o},l=function(t){var e=h(t.components);return a.createElement(c.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},p=a.forwardRef((function(t,e){var o=t.components,n=t.mdxType,r=t.originalType,c=t.parentName,l=s(t,["components","mdxType","originalType","parentName"]),p=h(o),d=n,f=p["".concat(c,".").concat(d)]||p[d]||u[d]||r;return o?a.createElement(f,i(i({ref:e},l),{},{components:o})):a.createElement(f,i({ref:e},l))}));function d(t,e){var o=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var r=o.length,i=new Array(r);i[0]=p;var s={};for(var c in e)hasOwnProperty.call(e,c)&&(s[c]=e[c]);s.originalType=t,s.mdxType="string"==typeof t?t:n,i[1]=s;for(var h=2;h<r;h++)i[h]=o[h];return a.createElement.apply(null,i)}return a.createElement.apply(null,o)}p.displayName="MDXCreateElement"},3843:(t,e,o)=>{o.r(e),o.d(e,{assets:()=>h,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var a=o(7462),n=(o(7294),o(3905)),r=o(4996);const i={id:"whatisdevouch",title:"What is DeVouch?",slug:"/"},s=void 0,c={unversionedId:"whatisdevouch",id:"whatisdevouch",title:"What is DeVouch?",description:"DeVouch is a system for members of reputable organizations in the Ethereum ecosystem to vouch for projects that are looking to raise funding. By vouching for a project, the organization can lend its credibility to the project, building confidence for those looking to support with funding.",source:"@site/devouch/whatisdevouch.md",sourceDirName:".",slug:"/",permalink:"/es/devouch/",draft:!1,editUrl:"https://github.com/giveth/giveth-docs/edit/master/devouch/whatisdevouch.md",tags:[],version:"current",lastUpdatedBy:"Mitch Oz",lastUpdatedAt:1717630611,formattedLastUpdatedAt:"5 jun 2024",frontMatter:{id:"whatisdevouch",title:"What is DeVouch?",slug:"/"},sidebar:"whatisdevouch",next:{title:"Integrating DeVouch",permalink:"/es/devouch/integrating-devouch"}},h={},l=[{value:"Attester Groups",id:"attester-groups",level:2},{value:"Navigating DeVouch",id:"navigating-devouch",level:2},{value:"Vouching and Flagging projects",id:"vouching-and-flagging-projects",level:2},{value:"Editing Attestations",id:"editing-attestations",level:2},{value:"Deleting Attestations",id:"deleting-attestations",level:2}],u={toc:l};function p(t){let{components:e,...o}=t;return(0,n.kt)("wrapper",(0,a.Z)({},u,o,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"DeVouch is a system for members of reputable organizations in the Ethereum ecosystem to vouch for projects that are looking to raise funding. By vouching for a project, the organization can lend its credibility to the project, building confidence for those looking to support with funding. "),(0,n.kt)("p",null,"DeVouch collects projects ",(0,n.kt)("a",{parentName:"p",href:"https://gitcoin.co/"},"Gitcoin"),", ",(0,n.kt)("a",{parentName:"p",href:"https://giveth.io/"},"Giveth")," and ",(0,n.kt)("a",{parentName:"p",href:"https://vote.optimism.io/"},"Optimism Retro Funding")," and shows them in a singe place allowing users to either vouch or flag for each project. More platforms may be added in the future. "),(0,n.kt)("p",null,'Visitors to the website can see the vouches and flags received by each project, tracked by the "Attester Group" that the vouch or flag came from. Learn more about "Attester Groups" below.'),(0,n.kt)("p",null,"We believe that by providing a way for members of reputable organizations to vouch for projects, we can leverage the social fabric of the Ethereum community to make more informed decisions on the allocation of capital."),(0,n.kt)("h2",{id:"attester-groups"},"Attester Groups"),(0,n.kt)("p",null,"DeVouch functions using a system of Attestations from ",(0,n.kt)("a",{parentName:"p",href:"https://attest.org/"},"EAS"),'. At the top level DeVouch identifies "Attester Groups" by looking at on-chain attestation data, Attester Groups are best defined as a group of addresses that hold the same type of attestations (defined by it\'s schema ID) that were all issued by the same address (the "Issuing Authority"). '),(0,n.kt)("p",null,"Check out this attestation for example: "),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://optimism.easscan.org/attestation/view/0x3ef6cc3d97a1386c1eb6a9ed7903c7247883f348eb8784db17678b1392c0c136"},"https://optimism.easscan.org/attestation/view/0x3ef6cc3d97a1386c1eb6a9ed7903c7247883f348eb8784db17678b1392c0c136")),(0,n.kt)("img",{alt:"attestestation example",src:(0,r.Z)("img/devouch/attesterOrganizationExamples.png")}),(0,n.kt)("p",null,'In this case, you see the schema is called "RETROPGF BADGEHOLDER" with an ID of ',(0,n.kt)("inlineCode",{parentName:"p"},"0xfdcfdad2dbe7489e0ce56b260348b7f14e8365a8a325aef9834818c00d46b31b")," and the Issuing Authority is ",(0,n.kt)("inlineCode",{parentName:"p"},"0x621477dBA416E12df7FF0d48E14c4D20DC85D7D9")," (presumably someone from the Optimism team). DeVouch would consider all addresses that hold attestations with this schema ID, issued by the same Issuing Authority address to be part of the same Attester Group. The Attester Groups that the DeVouch indexer recognizes were defined at launch by the DeVouch team, and more can be added by following the instructions in the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/Giveth/DeVouch-BE"},"DeVouch repository"),". "),(0,n.kt)("p",null,"Anyone can make an attestation to either vouch or flag a project at any time, but DeVouch only considers attestations from recognized Attester Groups when indexing information."),(0,n.kt)("h2",{id:"navigating-devouch"},"Navigating DeVouch"),(0,n.kt)("p",null,"There are four main pages on DeVouch: "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},'The "All Projects" view, which shows project card summaries of all projects that have been indexed by DeVouch.'),(0,n.kt)("li",{parentName:"ul"},'The "Project Details" view, which shows detailed information about a single project, including the vouches and flags it has received.'),(0,n.kt)("li",{parentName:"ul"},'The "My Attestations" view, which shows all the eligible DeVouch attestations you have made, and allows you to edit or delete them.'),(0,n.kt)("li",{parentName:"ul"},'The "User Attestations" view, which shows all the eligible DeVouch attestations made by a specific address.')),(0,n.kt)("p",null,"On any page there are a myriad of options for filtering, sorting, and searching for exactly the information you're looking for! Make use of them to optimize you're experience and see the data that's relevant for you."),(0,n.kt)("h2",{id:"vouching-and-flagging-projects"},"Vouching and Flagging projects"),(0,n.kt)("p",null,'When you vouch for a project, you are saying that you know this project and that you trust it. When you belong to a "Atterster Group" in a way you are lending the credibility of the Attester Group to the project you vouched for. '),(0,n.kt)("p",null,"Similarily, when you flag a project, you are saying that you don't trust this project or you don't believe it is legitimate."),(0,n.kt)("p",null,"Be aware that your address will be associated with the vouch or flag you make, and that this information is public and can be seen by anyone. You can additionally add a comment to your vouch or flag to provide more context."),(0,n.kt)("p",null,"It is possible that an address could belong to multiple Attester Groups, when you create an attestation, you can choose which Attester Group you want to vouch or flag from. Each attestation made with a unique Attester Group used by the same address counts as a separate vouch or flag. You can only use one Attester Group per attestation on DeVouch."),(0,n.kt)("h2",{id:"editing-attestations"},"Editing Attestations"),(0,n.kt)("p",null,"You can edit your attestation, whether it was a vouch or a flag. This will allow you to change your vouch to a flag or vice versa and also write a new comment into your attestation. This will create a new on-chain attestation that will replace the old one. If you attest to the project as part of other Attester Groups, those attestations will remain unchanged. "),(0,n.kt)("p",null,"You can edit your attestations from either the project details page of the project you attested to or from the 'My Attestations' page."),(0,n.kt)("h2",{id:"deleting-attestations"},"Deleting Attestations"),(0,n.kt)("p",null,"You can delete your attestation, whether it was a vouch or a flag. This creates an on-chain revocation of your attestation. This will remove your vouch or flag from the project. If you attested to the project as part of other Attester Groups, those attestations will remain. "),(0,n.kt)("p",null,"You can delete your attestations from either the project details page of the project you attested to or from the 'My Attestations' page."),(0,n.kt)("h1",{id:"integrating-devouch"},"Integrating DeVouch"),(0,n.kt)("p",null,"If you'd like to integrate DeVouch data into your platform or analytics we have several graphQL APIs available. "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Sepolia (for testing) - ",(0,n.kt)("a",{parentName:"li",href:"https://backend.devouch.xyz/graphql"},"https://backend.devouch.xyz/graphql")),(0,n.kt)("li",{parentName:"ul"},"Optimism Mainnet - ",(0,n.kt)("a",{parentName:"li",href:"https://optimism.backend.devouch.xyz/graphql"},"https://optimism.backend.devouch.xyz/graphql"))),(0,n.kt)("p",null,"To learn more about the APIs and how to issue DeVouch attestations continue on to ",(0,n.kt)("a",{parentName:"p",href:"/es/devouch/integrating-devouch"},"this article"),"."))}p.isMDXComponent=!0}}]);
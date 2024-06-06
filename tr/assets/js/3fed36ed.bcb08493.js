"use strict";(self.webpackChunkgiveth_docs=self.webpackChunkgiveth_docs||[]).push([[1158],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(n),h=o,g=d["".concat(s,".").concat(h)]||d[h]||p[h]||r;return n?a.createElement(g,i(i({ref:t},u),{},{components:n})):a.createElement(g,i({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<r;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},173:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var a=n(7462),o=(n(7294),n(3905)),r=n(4996);const i={id:"devouch-api",title:"Integrating DeVouch",slug:"/integrating-devouch"},c=void 0,s={unversionedId:"devouch-api",id:"devouch-api",title:"Integrating DeVouch",description:"DeVouch prioritizes accessiblity of information and easy integration. Reading and writing data to DeVouch is accessible to all! We have three topics to cover in this article:",source:"@site/devouch/api.md",sourceDirName:".",slug:"/integrating-devouch",permalink:"/tr/devouch/integrating-devouch",draft:!1,editUrl:"https://github.com/giveth/giveth-docs/edit/master/devouch/api.md",tags:[],version:"current",lastUpdatedBy:"Mitch Oz",lastUpdatedAt:1717630611,formattedLastUpdatedAt:"5 Haz 2024",frontMatter:{id:"devouch-api",title:"Integrating DeVouch",slug:"/integrating-devouch"},sidebar:"whatisdevouch",previous:{title:"What is DeVouch?",permalink:"/tr/devouch/"}},l={},u=[{value:"How to issue DeVouch attestations",id:"how-to-issue-devouch-attestations",level:2},{value:"Make the Attestation Onchain",id:"make-the-attestation-onchain",level:3},{value:"No recipient address",id:"no-recipient-address",level:3},{value:"Project Source",id:"project-source",level:3},{value:"Project Id",id:"project-id",level:3},{value:"Giveth",id:"giveth",level:4},{value:"Gitcoin",id:"gitcoin",level:4},{value:"Retro Funding",id:"retro-funding",level:4}],p={toc:u};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"DeVouch prioritizes accessiblity of information and easy integration. Reading and writing data to DeVouch is accessible to all! We have three topics to cover in this article:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"How to issue DeVouch attestations "),(0,o.kt)("li",{parentName:"ul"},"Adding your Attester Group to DeVouch"),(0,o.kt)("li",{parentName:"ul"},"Overview of the DeVouch Graphql API & Cookbook")),(0,o.kt)("h2",{id:"how-to-issue-devouch-attestations"},"How to issue DeVouch attestations"),(0,o.kt)("p",null,"There is a standardized attestation schema that all DeVouch eligible attestations MUST USE. You can find them here: "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://sepolia.easscan.org/schema/view/0x97b0c9911936fad57e77857fac6eef6771f8d0bf025be9549214e32bf9e2415a"},"Sepolia (for testing)")," "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://optimism.easscan.org/schema/view/0x97b0c9911936fad57e77857fac6eef6771f8d0bf025be9549214e32bf9e2415a"},"Optimism Mainnet"))),(0,o.kt)("p",null,"We recommend using the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ethereum-attestation-service/eas-sdk"},"EAS SDK")," to integrate making attestations from your application, but for demonstration purposes we will show you how it looks on the easscan UI."),(0,o.kt)("img",{alt:"easscan view of devouch attestation",src:(0,r.Z)("img/devouch/devouchAttestationExample.png")}),(0,o.kt)("h3",{id:"make-the-attestation-onchain"},"Make the Attestation Onchain"),(0,o.kt)("p",null,"You need to set the attestation as onchain in order for it to be indexed by DeVouch."),(0,o.kt)("h3",{id:"no-recipient-address"},"No recipient address"),(0,o.kt)("p",null,"You don't need to set a recipient address for DeVouch attestations."),(0,o.kt)("h3",{id:"project-source"},"Project Source"),(0,o.kt)("p",null,"This is the name of the source platform that the project is from, currently there are these four: ",(0,o.kt)("inlineCode",{parentName:"p"},"gitcoin"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"giveth"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"rf4")," (Retro Funding round 4). More source platforms may be added later."),(0,o.kt)("h3",{id:"project-id"},"Project Id"),(0,o.kt)("p",null,"This is different for each source platform."),(0,o.kt)("h4",{id:"giveth"},"Giveth"),(0,o.kt)("p",null,"For Giveth projects you can find the id of a project by going to the ",(0,o.kt)("a",{parentName:"p",href:"https://mainnet.serve.giveth.io/graphql"},"Giveth graphQL API")," and running a query like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},'query { \n  projectBySlug(slug: "project/slug/goes/here") {\n    id\n    title\n  }\n}\n')),(0,o.kt)("p",null,"This will give you a number like ",(0,o.kt)("inlineCode",{parentName:"p"},"12345")," that you should use for the project Id when attesting to a Giveth project."),(0,o.kt)("h4",{id:"gitcoin"},"Gitcoin"),(0,o.kt)("p",null,"For Gitcoin grants projects you can find the id of a project by going to the ",(0,o.kt)("a",{parentName:"p",href:"https://grants-stack-indexer-v2.gitcoin.co/graphiql"},"Gitcoin graphQL API")," and running a query like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},'query {\n  projects(\n    filter: {tags: {contains: "allo-v2"}, projectType: {equalTo: CANONICAL}, not: {tags: {contains: "program"}}, rounds: {every: {applicationsExist: true}}}\n    condition: {name: "{name of project}"}\n  ) {\n    id\n    name\n  }\n}\n\n')),(0,o.kt)("p",null,"This will give you a hash like ",(0,o.kt)("inlineCode",{parentName:"p"},"0x7f4b4b6cecc3bdaf95098ea2b2f5cd9c31ea742880d5076b540f83caf8247e16")," that you should use for the project Id when attesting to a Gitcoin project."),(0,o.kt)("h4",{id:"retro-funding"},"Retro Funding"),(0,o.kt)("p",null,"For Retro Funding projects you can find the id of a project by going to the ",(0,o.kt)("a",{parentName:"p",href:"https://vote.optimism.io/graphql"},"Optimism Retro Funding graphQL API")," and running a query like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"NEED TO ADD\n")))}d.isMDXComponent=!0}}]);
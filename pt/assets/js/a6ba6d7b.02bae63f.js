"use strict";(self.webpackChunkgiveth_docs=self.webpackChunkgiveth_docs||[]).push([[956],{5663:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>h,contentTitle:()=>r,default:()=>g,frontMatter:()=>l,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"multisigs","title":"MultiSig Wallets on Giveth","description":"It is possible to use Giveth with your Safe Multisig Wallet. However there are a few steps to get setup and a few things to keep in mind. If you don\'t know what a multisig wallet is or how to make one, check out the Safe documentation for Getting Started with Multisig Wallets.","source":"@site/dapps/multisigs.md","sourceDirName":".","slug":"/dapps/multisigs","permalink":"/pt/dapps/multisigs","draft":false,"unlisted":false,"editUrl":"https://github.com/giveth/giveth-docs/edit/master/dapps/multisigs.md","tags":[],"version":"current","lastUpdatedBy":"Mitch Oz","lastUpdatedAt":1705519516000,"frontMatter":{"id":"multisigs","title":"MultiSig Wallets on Giveth","slug":"dapps/multisigs"},"sidebar":"dapps","previous":{"title":"Doando com Metamask","permalink":"/pt/dapps/donatingmetamask"},"next":{"title":"Importar a chave privada do Torus para a Metamask","permalink":"/pt/dapps/importTorusMM"}}');var s=t(4848),o=t(8453),a=t(6025);const l={id:"multisigs",title:"MultiSig Wallets on Giveth",slug:"dapps/multisigs"},r=void 0,h={},d=[{value:"Logging into Giveth with a Multisig Wallet",id:"logging-into-giveth-with-a-multisig-wallet",level:2},{value:"Add and Open the Giveth App on the Safe website",id:"add-and-open-the-giveth-app-on-the-safe-website",level:3},{value:"Creating your Multisig Session",id:"creating-your-multisig-session",level:3},{value:"Creating Transactions with your Multisig Wallet on Giveth",id:"creating-transactions-with-your-multisig-wallet-on-giveth",level:2},{value:"Project Management for your Multisig Signers",id:"project-management-for-your-multisig-signers",level:2},{value:"Known Issues",id:"known-issues",level:2},{value:"&#39;Infinite&#39; Sign In Loop",id:"infinite-sign-in-loop",level:3},{value:"Rejected Donation Transactions",id:"rejected-donation-transactions",level:3},{value:"Quadratic Funding Eligiblity",id:"quadratic-funding-eligiblity",level:3}];function c(e){const i={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(i.p,{children:["It is possible to use Giveth with your Safe Multisig Wallet. However there are a few steps to get setup and a few things to keep in mind. If you don't know what a multisig wallet is or how to make one, check out the Safe documentation for ",(0,s.jsx)(i.a,{href:"https://help.safe.global/en/collections/9801-getting-started",children:"Getting Started with Multisig Wallets"}),"."]}),"\n",(0,s.jsx)(i.h2,{id:"logging-into-giveth-with-a-multisig-wallet",children:"Logging into Giveth with a Multisig Wallet"}),"\n",(0,s.jsx)(i.h3,{id:"add-and-open-the-giveth-app-on-the-safe-website",children:"Add and Open the Giveth App on the Safe website"}),"\n",(0,s.jsxs)(i.ol,{children:["\n",(0,s.jsxs)(i.li,{children:["Go to the page on the ",(0,s.jsx)(i.a,{href:"https://app.safe.global/welcome",children:"Safe website"})," of your Multisig Wallet that you wish to login with."]}),"\n",(0,s.jsxs)(i.li,{children:["Click on the ",(0,s.jsx)(i.code,{children:"Apps"})," tab, and find the Giveth app in the list of official Safe Apps and skip to the next section of this guide. If it doesn't show up in the list, no problem then click ",(0,s.jsx)(i.code,{children:"My Custom Apps"})," from the window menu and follow steps #3 & #4."]}),"\n"]}),"\n",(0,s.jsx)("img",{alt:"safe Ui custom app",src:(0,a.Ay)("img/multisigGuide/step1.png")}),"\n",(0,s.jsxs)(i.ol,{start:"3",children:["\n",(0,s.jsxs)(i.li,{children:["Enter the Giveth URL ",(0,s.jsx)(i.code,{children:"https://giveth.io"}),", click ",(0,s.jsx)(i.code,{children:"Add"})," then click on the Giveth App card that will appear in the list of Custom Apps. (Native Giveth Safe app coming soon!)"]}),"\n"]}),"\n",(0,s.jsx)("img",{alt:"enter giveth url in custom app page",src:(0,a.Ay)("img/multisigGuide/step2.png")}),"\n",(0,s.jsxs)(i.ol,{start:"4",children:["\n",(0,s.jsx)(i.li,{children:"Check off the trust warnings (you trust us, right?) and proceed to open the Giveth dApp."}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"creating-your-multisig-session",children:"Creating your Multisig Session"}),"\n",(0,s.jsx)(i.p,{children:"Once you have Giveth dApp open from the Safe website you should notice a few things:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"Your Safe address (or profile name if your Safe already has one) is displayed in the top right corner of the app."}),"\n",(0,s.jsx)(i.li,{children:"You cannot switch networks inside the Giveth App. You must switch the Safe Multisig/Network on the Safe website and then open the Giveth app again from the corresponding page."}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.strong,{children:"To proceed logging in:"})}),"\n",(0,s.jsxs)(i.ol,{children:["\n",(0,s.jsxs)(i.li,{children:["Click on ",(0,s.jsx)(i.code,{children:"Create Project"})," or ",(0,s.jsx)(i.code,{children:"My Account"})," from the drop down menu shown when you hover over your Safe Address in the top right corner."]}),"\n"]}),"\n",(0,s.jsx)("img",{alt:"click create project",src:(0,a.Ay)("img/multisigGuide/step4.png")}),"\n",(0,s.jsxs)(i.ol,{start:"2",children:["\n",(0,s.jsxs)(i.li,{children:["Click ",(0,s.jsx)(i.code,{children:"Sign In"})," from the following modal. Then choose your wallet provider, such as MetaMask (NOT SAFE), click to proceed."]}),"\n"]}),"\n",(0,s.jsx)("img",{alt:"click sign in",src:(0,a.Ay)("img/multisigGuide/step5.png")}),"\n",(0,s.jsxs)(i.ol,{start:"3",children:["\n",(0,s.jsxs)(i.li,{children:["Choose how long you want to keep your Multisig session open for. This is the length of time your sessions remains open for before you need to complete this sign in process again. Choose a duration then click ",(0,s.jsx)(i.code,{children:"Let's Go"}),"."]}),"\n"]}),"\n",(0,s.jsx)("img",{alt:"choose session duration",src:(0,a.Ay)("img/multisigGuide/step6.png")}),"\n",(0,s.jsxs)(i.ol,{start:"4",children:["\n",(0,s.jsxs)(i.li,{children:["You will be prompted to sign a message with your wallet. Click ",(0,s.jsx)(i.code,{children:"Sign-in"})," or ",(0,s.jsx)(i.code,{children:"Confirm"})," to sign the message."]}),"\n"]}),"\n",(0,s.jsx)("img",{alt:"sign message",src:(0,a.Ay)("img/multisigGuide/step7.png")}),"\n",(0,s.jsxs)(i.ol,{start:"5",children:["\n",(0,s.jsxs)(i.li,{children:["You will be redirected to a message signing page on your Safe Multisig, this message must be signed by the minimum threshold of signers on this Multisig within ",(0,s.jsx)(i.strong,{children:"one week"}),". Click ",(0,s.jsx)(i.code,{children:"Sign"})," to sign the message. Once you've signed the message contact the other signers to sign the message as well."]}),"\n"]}),"\n",(0,s.jsx)("img",{alt:"sign message",src:(0,a.Ay)("img/multisigGuide/step8.png")}),"\n",(0,s.jsxs)(i.admonition,{type:"info",children:[(0,s.jsx)(i.mdxAdmonitionTitle,{}),(0,s.jsxs)(i.p,{children:["While waiting for other signers to sign the message, you can safely close the modal by clicking the ",(0,s.jsx)(i.strong,{children:"X"})," in the top right corner (",(0,s.jsx)(i.strong,{children:"contrary to the warning message(s)"}),"). You can also ignore and close the pop-up window from step 3 if it appears, this is a ",(0,s.jsx)(i.a,{href:"#known-issues",children:"Known Issue"})," that can happen. From here you can continue browsing Giveth, but you will not be able to create a project, update your profile/projects or donate until the message has been signed by the minimum threshold of signers."]})]}),"\n",(0,s.jsxs)(i.ol,{start:"6",children:["\n",(0,s.jsx)(i.li,{children:"Once the message has been signed by the minimum threshold of signers, return to the Giveth App through the Safe website. If you already had the page open while waiting for the message to be signed, you will need to refresh the page."}),"\n"]}),"\n",(0,s.jsxs)(i.p,{children:["To find where the pending message is to be signed, from the Safe UI go to ",(0,s.jsx)(i.code,{children:"Transactions"})," then click ",(0,s.jsx)(i.code,{children:"Messages"})," from the tabs available."]}),"\n",(0,s.jsx)("img",{alt:"find message to sign",src:(0,a.Ay)("img/multisigGuide/step9.png")}),"\n",(0,s.jsxs)(i.ol,{start:"7",children:["\n",(0,s.jsx)(i.li,{children:"You should now be logged in and able to create projects, update your profile/projects and boost projects with GIVpower!"}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"creating-transactions-with-your-multisig-wallet-on-giveth",children:"Creating Transactions with your Multisig Wallet on Giveth"}),"\n",(0,s.jsx)(i.p,{children:"While signed in with your Multisig Wallet you can initiate donations to projects using the funds in your Multisig Wallet. However, you and the other signers will need to sign the transaction with your Multisig Wallet before it can be executed. Any blockchain transaction needs to be signed individually by the minimum threshold Multisig signers before it can be executed, this is the nature of how Multisigs work. This can include:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"Donating to a Project"}),"\n",(0,s.jsx)(i.li,{children:"Staking GIV tokens in the GIVfarm"}),"\n",(0,s.jsx)(i.li,{children:"Locking Tokens in the GIVpower farm"}),"\n",(0,s.jsx)(i.li,{children:"Claiming GIVbacks"}),"\n",(0,s.jsx)(i.li,{children:"Claiming your GIVstream"}),"\n",(0,s.jsx)(i.li,{children:"Harvesting your GIVfarm rewards"}),"\n",(0,s.jsx)(i.li,{children:"Unstaking your GIV tokens from the GIVfarm"}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"project-management-for-your-multisig-signers",children:"Project Management for your Multisig Signers"}),"\n",(0,s.jsx)(i.p,{children:"While a session for your multisig is active on the Giveth dApp all other signers on your multisig will be able to access its Giveth profile by signing a message from their wallet. This means they too can manage the profile, projects and GIVpower allocations owned by the Multisig."}),"\n",(0,s.jsxs)(i.p,{children:["If you would liked to have multiple people be able to manage a set of projects then setting a Multisig as the owner of the project is a great way to do this. If you have an existing project on Giveth and would like to enable this, reach out to us on ",(0,s.jsx)(i.a,{href:"https://discord.giveth.io",children:"Discord"})]}),"\n",(0,s.jsx)(i.h2,{id:"known-issues",children:"Known Issues"}),"\n",(0,s.jsx)(i.h3,{id:"infinite-sign-in-loop",children:"'Infinite' Sign In Loop"}),"\n",(0,s.jsxs)(i.p,{children:["If you get to step 4 in ",(0,s.jsx)(i.a,{href:"#creating-your-multisig-session",children:"Creating Your MultiSig Session"})," and then go back to the Giveth page you may be prompted by the same modal in step 3 again. This is because the Giveth dApp is not detecting that you already have a pending message to sign."]}),"\n",(0,s.jsx)(i.p,{children:"This is usually due to some lag in the network and the communication between the Safe website and the Giveth app. Wait a few minutes, refresh the page and it should be resolved. However you will not be able to proceed making projects etc. until the pending message is fully signed."}),"\n",(0,s.jsx)(i.h3,{id:"rejected-donation-transactions",children:"Rejected Donation Transactions"}),"\n",(0,s.jsxs)(i.p,{children:["If a transaction to create a donation is rejected by the Multisig signers it can show as ",(0,s.jsx)(i.code,{children:"pending"})," for a very long time on the project page in the Giveth app."]}),"\n",(0,s.jsx)(i.h3,{id:"quadratic-funding-eligiblity",children:"Quadratic Funding Eligiblity"}),"\n",(0,s.jsx)(i.p,{children:"Currently our Sybil defense provider, Gitcoin Passport, does not support Multisigs. This means you will not be able to have your donation matched during a QF round if having a Passport score is a requirement for the given round (it usually is). We recommend making your QF donations via a regular wallet that is able to connect to Gitcoin Passport. Your donations to verified projects will still of course be eligible for GIVbacks."})]})}function g(e={}){const{wrapper:i}={...(0,o.R)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},8453:(e,i,t)=>{t.d(i,{R:()=>a,x:()=>l});var n=t(6540);const s={},o=n.createContext(s);function a(e){const i=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function l(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),n.createElement(o.Provider,{value:i},e.children)}}}]);
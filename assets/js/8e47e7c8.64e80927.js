"use strict";(self.webpackChunkgiveth_docs=self.webpackChunkgiveth_docs||[]).push([[9440],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var o=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=o.createContext({}),l=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return o.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,s=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=l(r),d=a,y=m["".concat(s,".").concat(d)]||m[d]||c[d]||n;return r?o.createElement(y,i(i({ref:t},u),{},{components:r})):o.createElement(y,i({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,i=new Array(n);i[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var l=2;l<n;l++)i[l]=r[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1717:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var o=r(7462),a=(r(7294),r(3905)),n=r(4996);const i={id:"importTorusMM",title:"Import Torus Private Key into Metamask",slug:"dapps/importTorusMM"},p=void 0,s={unversionedId:"importTorusMM",id:"importTorusMM",title:"Import Torus Private Key into Metamask",description:"The purpose of this guide is to explain how to import Torus private key into a MetaMask wallet, thereby enabling broader functionality and easier access to decentralized applications (dApps).",source:"@site/dapps/ImportTorusMM.md",sourceDirName:".",slug:"/dapps/importTorusMM",permalink:"/dapps/importTorusMM",draft:!1,editUrl:"https://github.com/giveth/giveth-docs/edit/master/dapps/ImportTorusMM.md",tags:[],version:"current",lastUpdatedBy:"krmet",lastUpdatedAt:1717802515,formattedLastUpdatedAt:"Jun 7, 2024",frontMatter:{id:"importTorusMM",title:"Import Torus Private Key into Metamask",slug:"dapps/importTorusMM"},sidebar:"dapps",previous:{title:"MultiSig Wallets on Giveth",permalink:"/dapps/multisigs"},next:{title:"Create a project",permalink:"/dapps/createproject"}},l={},u=[{value:"Transfer Your Funds to MetaMask",id:"transfer-your-funds-to-metamask",level:2},{value:"Import Torus Private Key Into MetaMask",id:"import-torus-private-key-into-metamask",level:2},{value:"Get your Torus Private Key",id:"get-your-torus-private-key",level:3},{value:"Import Private Key",id:"import-private-key",level:3}],c={toc:u};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The purpose of this guide is to explain how to import Torus private key into a MetaMask wallet, thereby enabling broader functionality and easier access to decentralized applications (dApps)."),(0,a.kt)("p",null,"For instructions on how to get started with a MetaMask wallet, ",(0,a.kt)("a",{parentName:"p",href:"https://metamask.zendesk.com/hc/en-us/articles/360015489531-Getting-Started-With-MetaMask"},"check out this article from the Metamask team"),"."),(0,a.kt)("h2",{id:"transfer-your-funds-to-metamask"},"Transfer Your Funds to MetaMask"),(0,a.kt)("p",null,"Once you are logged into your Torus wallet, navigate to the transfer page using the navigation bar at the top of the page. "),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Copy the public key from MetaMask."),(0,a.kt)("li",{parentName:"ol"},"Paste into the \u2018Transfer to\u2019 line."),(0,a.kt)("li",{parentName:"ol"},"Enter the amount you\u2019d like to send.")),(0,a.kt)("p",null,"Once you are satisfied with the parameters of the transaction, click the transfer button at the bottom of the page.\nIf you have multiple tokens in your Torus Wallet, you will have to repeat this process for each token. "),(0,a.kt)("img",{alt:"Download Private Key in Torus",width:"75%",height:"auto",class:"center",src:(0,n.Z)("img/content/transferTorusMM.png")}),(0,a.kt)("h2",{id:"import-torus-private-key-into-metamask"},"Import Torus Private Key Into MetaMask"),(0,a.kt)("h3",{id:"get-your-torus-private-key"},"Get your Torus Private Key"),(0,a.kt)("p",null,"Once you\u2019re signed in to your Torus wallet, navigate to the ",(0,a.kt)("inlineCode",{parentName:"p"},"Settings")," page using the menu at the top of the page. Once on the ",(0,a.kt)("inlineCode",{parentName:"p"},"Settings")," page, click ",(0,a.kt)("inlineCode",{parentName:"p"},"Account Details")," in the ",(0,a.kt)("inlineCode",{parentName:"p"},"Privacy and Security")," section. This will open a pop-up with two options for getting your private key."),(0,a.kt)("img",{alt:"Download Private Key in Torus",width:"75%",height:"auto",class:"center",src:(0,n.Z)("img/content/toruspk.png")}),(0,a.kt)("p",null,"Choose the option to download a JSON file with your private key or to view and copy the private key securely."),(0,a.kt)("h3",{id:"import-private-key"},"Import Private Key"),(0,a.kt)("p",null,"Assuming you are set up and logged in with your Metamask wallet, the next step is to import your private key into MetaMask. First, click the circular icon in the top right corner of your MetaMask wallet. This will open the accounts menu. Click the ",(0,a.kt)("inlineCode",{parentName:"p"},"Import Account")," option in this menu. Here you can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"Select Type")," option to select which option you\u2019d like to use to import your private key."),(0,a.kt)("img",{alt:"Import Private Key into MetaMask",width:"50%",height:"auto",class:"center",src:(0,n.Z)("img/content/mmimportkey.png")}),(0,a.kt)("p",null,"Important note : Your private key is crucial for accessing and managing your funds securely. To maintain the security of your accounts, never share your private key with anyone."),(0,a.kt)("p",null,"If you copied your private key from Torus, the ",(0,a.kt)("inlineCode",{parentName:"p"},"Private Key")," option will let you paste the key into MetaMask. If you downloaded the JSON file, select ",(0,a.kt)("inlineCode",{parentName:"p"},"JSON File"),", then use the ",(0,a.kt)("inlineCode",{parentName:"p"},"Choose File")," button to select the private key JSON you downloaded from Torus. Enter the password you created to download the private key file from Torus, then click ",(0,a.kt)("inlineCode",{parentName:"p"},"Import"),". Your new account should now appear in MetaMask and be ready to interact with the GIVeconomy dApps!"),(0,a.kt)("img",{alt:"Paste Private Key",height:"auto",width:"40%",class:"leftfloat",src:(0,n.Z)("img/content/mmimportkey1.png")}),(0,a.kt)("img",{alt:"Select Private Key File",height:"auto",width:"40%",src:(0,n.Z)("img/content/mmimportkey2.png")}))}m.isMDXComponent=!0}}]);
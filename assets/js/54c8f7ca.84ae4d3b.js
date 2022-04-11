"use strict";(self.webpackChunkgiveth_docs=self.webpackChunkgiveth_docs||[]).push([[6579],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return p}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=u(n),p=i,k=c["".concat(s,".").concat(p)]||c[p]||m[p]||r;return n?a.createElement(k,o(o({ref:t},d),{},{components:n})):a.createElement(k,o({ref:t},d))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var u=2;u<r;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},2855:function(e,t,n){n.r(t),n.d(t,{assets:function(){return v},contentTitle:function(){return f},default:function(){return G},frontMatter:function(){return h},metadata:function(){return g},toc:function(){return b}});var a=n(3117),i=n(102),r=n(7294),o=n(3905),l=n(2389),s=n(9575),u=n(6010),d="tabItem_LplD";function m(e){var t,n,i,o=e.lazy,l=e.block,m=e.defaultValue,c=e.values,p=e.groupId,k=e.className,h=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=c?c:h.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),g=(0,s.lx)(f,(function(e,t){return e.value===t.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var v=null===m?m:null!=(t=null!=m?m:null==(n=h.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(i=h[0])?void 0:i.props.value;if(null!==v&&!f.some((function(e){return e.value===v})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var b=(0,s.UB)(),y=b.tabGroupChoices,G=b.setTabGroupChoices,I=(0,r.useState)(v),w=I[0],N=I[1],V=[],T=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=p){var C=y[p];null!=C&&C!==w&&f.some((function(e){return e.value===C}))&&N(C)}var D=function(e){var t=e.currentTarget,n=V.indexOf(t),a=f[n].value;a!==w&&(T(t),N(a),null!=p&&G(p,a))},E=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=V.indexOf(e.currentTarget)+1;n=V[a]||V[0];break;case"ArrowLeft":var i=V.indexOf(e.currentTarget)-1;n=V[i]||V[V.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":l},k)},f.map((function(e){var t=e.value,n=e.label,i=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:function(e){return V.push(e)},onKeyDown:E,onFocus:D,onClick:D},i,{className:(0,u.Z)("tabs__item",d,null==i?void 0:i.className,{"tabs__item--active":w===t})}),null!=n?n:t)}))),o?(0,r.cloneElement)(h.filter((function(e){return e.props.value===w}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},h.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==w})}))))}function c(e){var t=(0,l.Z)();return r.createElement(m,(0,a.Z)({key:String(t)},e))}function p(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}var k=["components"],h={id:"testingGIVeconomy",title:"GIVeconomy Testing Guidelines",slug:"dapps/testingGIVeconomy"},f=void 0,g={unversionedId:"testingGIVeconomy",id:"testingGIVeconomy",title:"GIVeconomy Testing Guidelines",description:"This is a guide for thorough user testing scenarios for the GIVeconomy DApp. Testing should be done on the staging server which can be found at https://staging.giveth.io/.",source:"@site/dapps/testingGIVeconomy.md",sourceDirName:".",slug:"/dapps/testingGIVeconomy",permalink:"/dapps/testingGIVeconomy",editUrl:"https://github.com/giveth/giveth-docs/edit/master/dapps/testingGIVeconomy.md",tags:[],version:"current",lastUpdatedBy:"mitch",lastUpdatedAt:1649688459,formattedLastUpdatedAt:"4/11/2022",frontMatter:{id:"testingGIVeconomy",title:"GIVeconomy Testing Guidelines",slug:"dapps/testingGIVeconomy"},sidebar:"dapps",previous:{title:"Installing the GIVeconomy Front-End",permalink:"/dapps/installGIVeconomy"},next:{title:"Regen Farm Smart Contract Guide",permalink:"/dapps/regenFarmContracts"}},v={},b=[{value:"Requirements",id:"requirements",level:2},{value:"Use Cases",id:"use-cases",level:2},{value:"General",id:"general",level:3},{value:"GIVgarden",id:"givgarden",level:3},{value:"GIVfarm",id:"givfarm",level:3},{value:"GIVbacks",id:"givbacks",level:2},{value:"GIVstream",id:"givstream",level:2}],y={toc:b};function G(e){var t=e.components,n=(0,i.Z)(e,k);return(0,o.kt)("wrapper",(0,a.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This is a guide for thorough user testing scenarios for the GIVeconomy DApp. Testing should be done on the staging server which can be found at ",(0,o.kt)("a",{parentName:"p",href:"https://staging.giveth.io/"},"https://staging.giveth.io/"),"."),(0,o.kt)("h2",{id:"requirements"},"Requirements"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Please use a modern browser. If you encounter a bug, please try the same thing with another browser. Please make an issue in any case, but tell us if the issue might be browser specific"),(0,o.kt)("li",{parentName:"ul"},"Use issues in ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/Giveth/GIVeconomy/issues"},"GitHub")," for reports and feedback.")),(0,o.kt)("h2",{id:"use-cases"},"Use Cases"),(0,o.kt)("p",null,"The following actions are defined as core functionality. If one of these steps is buggy, that represents a critical error."),(0,o.kt)("h3",{id:"general"},"General"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'Buttons on "Overview" page are responsive'),(0,o.kt)("li",{parentName:"ul"},"Tabs ",(0,o.kt)("inlineCode",{parentName:"li"},"GIVgarden"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"GIVfarm"),", etc.. are responsive"),(0,o.kt)("li",{parentName:"ul"},"Navbar Header buttons are responsive"),(0,o.kt)("li",{parentName:"ul"},"Can successfully sign in on Navbar with Web Wallet (currently optimized for MetaMask)"),(0,o.kt)("li",{parentName:"ul"},"Footer links are working and link correctly")),(0,o.kt)("h3",{id:"givgarden"},"GIVgarden"),(0,o.kt)("p",null,"The GIVgarden staging deployment uses both Kovan Network and Gnosis Chain (formerly xDai Network). The token used for this deployment is ",(0,o.kt)("em",{parentName:"p"},"DRGIV3"),"."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"DRGIV3 can be wrapped in the ",(0,o.kt)("a",{parentName:"p",href:"https://gardens-staging.1hive.org/#/xdai/garden/0x16388d99199a74810fc572049b3d4d657e7d5deb"},"DRGIV3 Garden")," to receive gDRGIV3. This is the same action as staking your DRGIV3 in the GIVgarden Staking in the GIVfarm on Gnosis Chain."))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Buttons linking to GIVgarden are working"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"LEARN MORE")," links are working"),(0,o.kt)("li",{parentName:"ul"},"Wrap DRGIV3 on the GIVgarden - Check that your Token amount updates on the GIVgarden Staking in the GIVfarm on Gnosis Chain."),(0,o.kt)("li",{parentName:"ul"},"Unwrap DRGIV3 on the GIVgarden - Check that your Token amount updates on the GIVgarden Staking in the GIVfarm on Gnosis Chain.")),(0,o.kt)("h3",{id:"givfarm"},"GIVfarm"),(0,o.kt)("p",null,"The GIVfarm staging deployment uses both Gnosis Chain and Kovan (Mainnet) Network. The token used for this deployment is ",(0,o.kt)("em",{parentName:"p"},"DRGIV3"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"0x83a8eea6427985C523a0c4d9d3E62C051B6580d3")," on Gnosis Chain"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"0x29434a25abd94ae882aa883eea81585aaa5b078d")," on Kovan")),(0,o.kt)("p",null,"Test tokens used for providing liquidity on Gnosis Chain are as follow:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Gnosis Chain TestHNY: ",(0,o.kt)("inlineCode",{parentName:"li"},"0x69F79C9eA174d4659B18c7993c7EFbBbB58cF068")),(0,o.kt)("li",{parentName:"ul"},"Gnosis Chain TestWETH:",(0,o.kt)("inlineCode",{parentName:"li"},"0x736a98655049433f79dCcF5e54b887E8890b63D1"),"  ")),(0,o.kt)("p",null,"On Kovan, regular Kovan ETH is used for providing liquidity and paying gas."),(0,o.kt)(c,{className:"tabs",mdxType:"Tabs"},(0,o.kt)(p,{value:"gnosis",label:"Gnosis Chain",default:!0,mdxType:"TabItem"},(0,o.kt)("h3",null,"Gnosis Chain (formerly xDai Network) Test Cases"),(0,o.kt)("ul",null,(0,o.kt)("li",null,"Gnosis Chain/Ethereum Network toggle works"),(0,o.kt)("li",null,(0,o.kt)("code",null,"?")," hover tooltips work"),(0,o.kt)("li",null,"Provide Liquidity with DRGIV3 & TestHoney on Honeyswap"),(0,o.kt)("li",null,"Provide Liquidity with DRGIV3 and TestETH on Sushiswap"),(0,o.kt)("li",null,"Can stake LP tokens in respective GIV/HNY or GIV/ETH farms - LP Token amounts to Stake/Unstake update on UI"),(0,o.kt)("li",null,"Can stake DRGIV3 in GIVgarden Staking - Token amounts to Stake/Unstake update on UI"),(0,o.kt)("li",null,"After staking DRGIV3, check wrapped token amount (gDRGIV3) amount updates on the ",(0,o.kt)("a",{href:"https://gardens-staging.1hive.org/#/xdai/garden/0x16388d99199a74810fc572049b3d4d657e7d5deb",target:"_blank",alt:"DRGIV3 Garden"},"DRGIV3 Garden")),(0,o.kt)("li",null,"APR is displaying correctly (if it shows 0% that's bad)"),(0,o.kt)("li",null,"Clicking `?` on APR row opens APR modal, links are functional in modal"),(0,o.kt)("li",null,"Claimable amount updates over time"),(0,o.kt)("li",null,"Streaming amount is shown (up to 2 decimal places)"),(0,o.kt)("li",null,"If the amount is very small  ",(0,o.kt)("code",null,"0.0001")," is shown"),(0,o.kt)("li",null,'"Your GIVfarm Rewards" (top right of page) displays correctly total pending rewards from all farms combined.'),(0,o.kt)("li",null,"Harvesting from each farm - Transactions are successful and Claimable, Streaming, and GIV in wallet amounts update correctly"),(0,o.kt)("li",null,"Can Unstake Tokens from all farms - Token amounts to Stake/Unstake update on UI"),(0,o.kt)("li",null,"After unstaking DRGIV3 from the GIVgarden farm, check wrapped token amount (gDRGIV3) amount updates on the ",(0,o.kt)("a",{href:"https://gardens-staging.1hive.org/#/xdai/garden/0x16388d99199a74810fc572049b3d4d657e7d5deb",target:"_blank",alt:"DRGIV3 Garden"},"DRGIV3 Garden")))),(0,o.kt)(p,{value:"kovan",label:"Kovan Testnet",default:!0,mdxType:"TabItem"},(0,o.kt)("h3",null,"Kovan (mainnet) Network Test Cases"),(0,o.kt)("ul",null,(0,o.kt)("li",null,"Gnosis Chain/Ethereum Network toggle works"),(0,o.kt)("li",null,(0,o.kt)("code",null,"?")," hover tooltips work"),(0,o.kt)("li",null,"Mint Univ3 NFT with DRGIV3 & ETH on Uniswap (Kovan)"),(0,o.kt)("li",null,"Provide Liquidity with DRGIV3 and WETH on Balancer (Kovan)"),(0,o.kt)("li",null,"Can stake Univ3 NFT in GIV/ETH Uniswap farm - NFT amount updates below Stake/Unstake buttons"),(0,o.kt)("li",null,"Can stake LP tokens in GIV/ETH Balancer farm - LP Token amounts to Stake/Unstake update on UI"),(0,o.kt)("li",null,"Can stake DRGIV3 in Single Asset Staking - Token amounts to Stake/Unstake update on UI"),(0,o.kt)("li",null,"APR is displaying correctly (if it shows 0% that's bad)"),(0,o.kt)("li",null,"Clicking ",(0,o.kt)("code",null,"?")," on APR row opens APR modal, links are functional in modal"),(0,o.kt)("li",null,"Claimable amount updates over time"),(0,o.kt)("li",null,"Streaming amount is shown (up to 2 decimal places)"),(0,o.kt)("li",null,'Your GIVfarm Rewards" (top right of page) displays correctly total pending rewards from all farms combined.'),(0,o.kt)("li",null,"Harvesting from each farm - Transactions are successful and Claimable, Streaming, and GIV in wallet amounts update correctly"),(0,o.kt)("li",null,"Can Unstake Tokens from all farms - Token amounts to Stake/Unstake update on UI")))),(0,o.kt)("h2",{id:"givbacks"},"GIVbacks"),(0,o.kt)("p",null,"To learn how to create a test GIVback distribution, contact a Developer or mitch (divine_comedian#5493) on Discord to help you."),(0,o.kt)("p",null,"You'll have to make a legitimate donation to a verified project on Giveth.io in order to test GIVbacks with your own Ethereum Address."),(0,o.kt)("p",null," Once you have executed a test distribution you can verify a few pieces of the ",(0,o.kt)("inlineCode",{parentName:"p"},"GIVbacks")," page:"),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"GIVbacks are only available on Gnosis Chain (formerly xDai Network)."))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Verify your GIVbacks Reward amount, checking that the calculations align with the donations you made to a verified project during your defined GIVbacks period."),(0,o.kt)("li",{parentName:"ul"},"Your GIVbacks claimable amount should be a set amount (not increasing like GIVfarm rewards)."),(0,o.kt)("li",{parentName:"ul"},"Your GIVbacks streaming amount should be in the GIVstream history table at the time of GIVbacks distribution."),(0,o.kt)("li",{parentName:"ul"},"Harvest GIVbacks is successful."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"DONATE")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"VERIFY")," buttons work.")),(0,o.kt)("h2",{id:"givstream"},"GIVstream"),(0,o.kt)("p",null,"The GIVstream is available on both Gnosis Chain and Kovan. Make sure you have pending farming rewards on both networks to fully test the GIVstream."),(0,o.kt)("p",null,"-Gnosis Chain/Ethereum Network toggle works"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Buttons for ",(0,o.kt)("inlineCode",{parentName:"li"},"PROJECTS"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"PROPOSALS"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"OPPORTUNITIES")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"LEARN MORE")," work."),(0,o.kt)("li",{parentName:"ul"},"Can Harvest GIVstream rewards in the top right modal on both Gnosis Chain and Kovan."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"?")," image on GIVstream rewards modal shows pop-up when clicked, links and button within modal are functional"),(0,o.kt)("li",{parentName:"ul"},"'?' hover tooltips work"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"GIViverse Expansion")," displays correctly (if it's 0% that's bad.)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Time remaining")," shows correctly (GIVstream ends on December 23, 2026)"),(0,o.kt)("li",{parentName:"ul"},"GIVstream flowrate increases are shown in the history table. GIVfarm rewards should appear in the table after claiming from the GIVfarm. GIVbacks rewards should appear in the table at the moment of GIVbacks distribution.")),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Don\u2019t forget to participate in the Platform Circle\u2019s weekly meetings to stay in the loop. Read up on our ",(0,o.kt)("a",{parentName:"p",href:"./contributors"},"Development Contributor\u2019s guide")," for all the information you need to become a regular contributor to Giveth Development & Testing."))}G.isMDXComponent=!0}}]);
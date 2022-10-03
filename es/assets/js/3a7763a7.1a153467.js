"use strict";(self.webpackChunkgiveth_docs=self.webpackChunkgiveth_docs||[]).push([[4232],{3905:(e,a,t)=>{t.d(a,{Zo:()=>i,kt:()=>k});var n=t(7294);function s(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){s(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function p(e,a){if(null==e)return{};var t,n,s=function(e,a){if(null==e)return{};var t,n,s={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(s[t]=e[t]);return s}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var m=n.createContext({}),l=function(e){var a=n.useContext(m),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},i=function(e){var a=l(e.components);return n.createElement(m.Provider,{value:a},e.children)},c={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},h=n.forwardRef((function(e,a){var t=e.components,s=e.mdxType,r=e.originalType,m=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),h=l(t),k=s,d=h["".concat(m,".").concat(k)]||h[k]||c[k]||r;return t?n.createElement(d,o(o({ref:a},i),{},{components:t})):n.createElement(d,o({ref:a},i))}));function k(e,a){var t=arguments,s=a&&a.mdxType;if("string"==typeof e||s){var r=t.length,o=new Array(r);o[0]=h;var p={};for(var m in a)hasOwnProperty.call(a,m)&&(p[m]=a[m]);p.originalType=e,p.mdxType="string"==typeof e?e:s,o[1]=p;for(var l=2;l<r;l++)o[l]=t[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}h.displayName="MDXCreateElement"},9704:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>p,default:()=>h,frontMatter:()=>o,metadata:()=>m,toc:()=>i});var n=t(7462),s=(t(7294),t(3905)),r=t(4996);const o={id:"givpower",title:"GIVpower",slug:"giveconomy/givpower"},p="GIVpower",m={unversionedId:"givpower",id:"givpower",title:"GIVpower",description:"GIVpower was created to build a win-win relationship between projects & donors. GIV holders get GIVpower and earn a yield when they stake and - if they choose - lock GIV in the GIVfarm. They will eventually be able to use their GIVpower to \u201cboost\u201d projects on Giveth and help improve their ranking. Top ranked projects will get benefits on the platform. Initially their donors will get more GIVbacks, and eventually, they will get matching funds and other benefits.",source:"@site/dapps/GIVpower.md",sourceDirName:".",slug:"/giveconomy/givpower",permalink:"/es/giveconomy/givpower",draft:!1,editUrl:"https://github.com/giveth/giveth-docs/edit/master/dapps/GIVpower.md",tags:[],version:"current",lastUpdatedBy:"Mitch Oz",lastUpdatedAt:1664802928,formattedLastUpdatedAt:"3 oct 2022",frontMatter:{id:"givpower",title:"GIVpower",slug:"giveconomy/givpower"},sidebar:"dapps",previous:{title:"El Angel Vault",permalink:"/es/angelVault"},next:{title:"$nice Token",permalink:"/es/giveconomy/niceToken"}},l={},i=[{value:"Contracts",id:"contracts",level:3},{value:"Staking &amp; Locking",id:"staking--locking",level:2},{value:"GIVfarm APR",id:"givfarm-apr",level:3},{value:"Unlocking",id:"unlocking",level:4},{value:"The Multiplier",id:"the-multiplier",level:3},{value:"Rewards Allocation",id:"rewards-allocation",level:2},{value:"Boosting (Phase 2)",id:"boosting-phase-2",level:2}],c={toc:i};function h(e){let{components:a,...t}=e;return(0,s.kt)("wrapper",(0,n.Z)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"givpower"},"GIVpower"),(0,s.kt)("p",null,"GIVpower was created to build a win-win relationship between projects & donors. GIV holders get GIVpower and earn a yield when they stake and - if they choose - lock GIV in the GIVfarm. They will eventually be able to use their GIVpower to \u201cboost\u201d projects on Giveth and help improve their ranking. Top ranked projects will get benefits on the platform. Initially their donors will get more GIVbacks, and eventually, they will get matching funds and other benefits."),(0,s.kt)("p",null,"The 1st phase of GIVpower, formerly known as GIVcuration, launched on October 4th, 2022 and adds a new layer of mechanics for staking GIV on the GIVfarm. "),(0,s.kt)("img",{alt:"givpower staking card",width:"30%",heigh:"auto",src:(0,r.Z)("img/givpowerCard.png")}),(0,s.kt)("p",null,"In addition to the APR of GIV rewards and receiving ",(0,s.kt)("a",{parentName:"p",href:"https://docs.giveth.io/giveconomy/givgarden"},"gGIV for Giveth governance"),", users will now also get ",(0,s.kt)("strong",{parentName:"p"},"GIVpower"),", a non-transferrable ERC-20 token. Staked GIV is matched 1:1 with GIVpower.\ni.e. If you stake 100 GIV you will get 100 GIVpower. "),(0,s.kt)("p",null,'Users will also be able to "Lock" their staked GIV on the GIVfarm to multiply their rewards APR and their GIVpower.'),(0,s.kt)("h3",{id:"contracts"},"Contracts"),(0,s.kt)("p",null,"GIVpower(POW) Token - 0xD93d3bDBa18ebcB3317a57119ea44ed2Cf41C2F2\nGIVpower Staking - 0xD93d3bDBa18ebcB3317a57119ea44ed2Cf41C2F2 "),(0,s.kt)("h2",{id:"staking--locking"},"Staking & Locking"),(0,s.kt)("p",null,"Users can now increase their rewards from staking GIV by locking them up for a period of time. Locking GIV means that it cannot be unstaked for a given amount of time, you can see the date a particular batch of GIV unlocks in the \u201cLocked GIV Details\u201d pop-up."),(0,s.kt)("admonition",{type:"info"},(0,s.kt)("p",{parentName:"admonition"},"GIVpower is only available on Gnosis Chain and ",(0,s.kt)("strong",{parentName:"p"},"GIV staking on Mainnet has ended"),". You'll need to harvest, unstake and ",(0,s.kt)("a",{parentName:"p",href:"https://omni.gnosischain.com/bridge"},"bridge your GIV")," from Mainnet to Gnosis Chain to continue staking GIV and earning rewards.  ")),(0,s.kt)("p",null,"GIV can be locked according to bi-weekly segments following the same schedule as GIVbacks, the minimum amount of time is 1 round (2 weeks), up to 26 rounds (1 year). "),(0,s.kt)("p",null,"The longer you lock your GIV the greater the multiplier will be for that specific amount of GIV locked. A bigger multiplier means you will get more GIV from the GIVfarm rewards (you get a higher APR) and you will also get more GIVpower.The amount of gGIV you receive will not increase."),(0,s.kt)("img",{alt:"givpower multiplier",width:"80%",heigh:"auto",src:(0,r.Z)("img/givpowerMultiplier.png")}),(0,s.kt)("p",null,"You can lock up multiple batches of GIV tokens for different lengths of time, each batch might have a different APR, depending on how long you locked up your tokens. "),(0,s.kt)("img",{alt:"givpower locked giv details",width:"80%",heigh:"auto",src:(0,r.Z)("img/givpowerLockedDetails.png")}),(0,s.kt)("p",null,"After the locking period for your GIV ends your GIV becomes unlocked, meaning it can be unstaked from the GIVfarm. Unstaking your GIV means you will lose any associated GIVpower and gGIV. You can get it back however by staking your GIV again."),(0,s.kt)("h3",{id:"givfarm-apr"},"GIVfarm APR"),(0,s.kt)("p",null,"When you lock up your GIV you will see an estimated APR for that amount of GIV being locked up. The actual APR will change based on the actual total amount of GIV staked in the farm across all users, and might be different for each batch of tokens locked. You will be able to see your actual APR for each batch by navigating to the \"Locked GIV Details'' pop-up on the GIVpower staking card."),(0,s.kt)("img",{alt:"locked givpower aprs",width:"80%",heigh:"auto",src:(0,r.Z)("img/givpowerLockedapr.png")}),(0,s.kt)("p",null,"On the GIVpower staking card the APR shown is the weighted average of all batches of your locked GIV. If you have no GIV locked in GIVpower you will be shown a range of the lowest and highest possible APRs at that moment."),(0,s.kt)("img",{alt:"givpower staking card apr",width:"30%",heigh:"auto",src:(0,r.Z)("img/givpowerCardapr.png")}),(0,s.kt)("h4",{id:"unlocking"},"Unlocking"),(0,s.kt)("p",null,"Unlocking only happens at the beginning of a new round, so if you lock your GIV in the middle of a round, the unlock date will be calculated from when the next round begins."),(0,s.kt)("p",null,"For example:"),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Mohammad locks up his staked GIV for 5 rounds (10 weeks), today is day 5 of round 25. His GIV would remain locked for all of round 25 (9 more days) until round 26 begins, PLUS 5 more rounds, meaning his GIV would finally unlock at the end of round 31.")),(0,s.kt)("p",null,"When the duration of your locking period for each batch ends then that batch of GIV becomes unlocked, thus reducing your APR of that batch to the minimum APR for GIV staking. To increase your APR again you will need to lock up your GIV."),(0,s.kt)("h3",{id:"the-multiplier"},"The Multiplier"),(0,s.kt)("p",null,"The basic formula for calculating the multiplier of GIV APR rewards and GIVpower is:"),(0,s.kt)("div",{className:"math math-display"},(0,s.kt)("span",{parentName:"div",className:"katex-display"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("msqrt",{parentName:"mrow"},(0,s.kt)("mo",{parentName:"msqrt",stretchy:"false"},"(")),(0,s.kt)("mn",{parentName:"mrow"},"1"),(0,s.kt)("mo",{parentName:"mrow"},"+"),(0,s.kt)("mi",{parentName:"mrow"},"N"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\sqrt(1 + N)")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1.24em",verticalAlign:"-0.25612499999999994em"}}),(0,s.kt)("span",{parentName:"span",className:"mord sqrt"},(0,s.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.983875em"}},(0,s.kt)("span",{parentName:"span",className:"svg-align",style:{top:"-3.2em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3.2em"}}),(0,s.kt)("span",{parentName:"span",className:"mopen",style:{paddingLeft:"1em"}},"(")),(0,s.kt)("span",{parentName:"span",style:{top:"-2.9438750000000002em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3.2em"}}),(0,s.kt)("span",{parentName:"span",className:"hide-tail",style:{minWidth:"1.02em",height:"1.28em"}},(0,s.kt)("svg",{parentName:"span",width:"400em",height:"1.28em",viewBox:"0 0 400000 1296",preserveAspectRatio:"xMinYMin slice"},(0,s.kt)("path",{parentName:"svg",d:"M263,681c0.7,0,18,39.7,52,119\nc34,79.3,68.167,158.7,102.5,238c34.3,79.3,51.8,119.3,52.5,120\nc340,-704.7,510.7,-1060.3,512,-1067\nl0 -0\nc4.7,-7.3,11,-11,19,-11\nH40000v40H1012.3\ns-271.3,567,-271.3,567c-38.7,80.7,-84,175,-136,283c-52,108,-89.167,185.3,-111.5,232\nc-22.3,46.7,-33.8,70.3,-34.5,71c-4.7,4.7,-12.3,7,-23,7s-12,-1,-12,-1\ns-109,-253,-109,-253c-72.7,-168,-109.3,-252,-110,-252c-10.7,8,-22,16.7,-34,26\nc-22,17.3,-33.3,26,-34,26s-26,-26,-26,-26s76,-59,76,-59s76,-60,76,-60z\nM1001 80h400000v40h-400000z"}))))),(0,s.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.25612499999999994em"}},(0,s.kt)("span",{parentName:"span"}))))),(0,s.kt)("span",{parentName:"span",className:"mord"},"1"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222222222222222em"}}),(0,s.kt)("span",{parentName:"span",className:"mbin"},"+"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222222222222222em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10903em"}},"N"),(0,s.kt)("span",{parentName:"span",className:"mclose"},")")))))),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},"N = number of rounds locked")),(0,s.kt)("p",null,"Let's look at an example to understand how this works: "),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Carlos decides to lock up 100 of his staked GIV for 10 rounds (20 weeks). His multiplier, rounded to 2 decimal places, is ",(0,s.kt)("strong",{parentName:"p"},"3.32"),"."),(0,s.kt)("div",{parentName:"blockquote",className:"math math-display"},(0,s.kt)("span",{parentName:"div",className:"katex-display"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("msqrt",{parentName:"mrow"},(0,s.kt)("mo",{parentName:"msqrt",stretchy:"false"},"(")),(0,s.kt)("mn",{parentName:"mrow"},"1"),(0,s.kt)("mo",{parentName:"mrow"},"+"),(0,s.kt)("mn",{parentName:"mrow"},"10"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")"),(0,s.kt)("mo",{parentName:"mrow"},"="),(0,s.kt)("mn",{parentName:"mrow"},"3.3166247903554")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\sqrt(1 + 10) = 3.3166247903554")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1.24em",verticalAlign:"-0.25612499999999994em"}}),(0,s.kt)("span",{parentName:"span",className:"mord sqrt"},(0,s.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.983875em"}},(0,s.kt)("span",{parentName:"span",className:"svg-align",style:{top:"-3.2em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3.2em"}}),(0,s.kt)("span",{parentName:"span",className:"mopen",style:{paddingLeft:"1em"}},"(")),(0,s.kt)("span",{parentName:"span",style:{top:"-2.9438750000000002em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3.2em"}}),(0,s.kt)("span",{parentName:"span",className:"hide-tail",style:{minWidth:"1.02em",height:"1.28em"}},(0,s.kt)("svg",{parentName:"span",width:"400em",height:"1.28em",viewBox:"0 0 400000 1296",preserveAspectRatio:"xMinYMin slice"},(0,s.kt)("path",{parentName:"svg",d:"M263,681c0.7,0,18,39.7,52,119\nc34,79.3,68.167,158.7,102.5,238c34.3,79.3,51.8,119.3,52.5,120\nc340,-704.7,510.7,-1060.3,512,-1067\nl0 -0\nc4.7,-7.3,11,-11,19,-11\nH40000v40H1012.3\ns-271.3,567,-271.3,567c-38.7,80.7,-84,175,-136,283c-52,108,-89.167,185.3,-111.5,232\nc-22.3,46.7,-33.8,70.3,-34.5,71c-4.7,4.7,-12.3,7,-23,7s-12,-1,-12,-1\ns-109,-253,-109,-253c-72.7,-168,-109.3,-252,-110,-252c-10.7,8,-22,16.7,-34,26\nc-22,17.3,-33.3,26,-34,26s-26,-26,-26,-26s76,-59,76,-59s76,-60,76,-60z\nM1001 80h400000v40h-400000z"}))))),(0,s.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.25612499999999994em"}},(0,s.kt)("span",{parentName:"span"}))))),(0,s.kt)("span",{parentName:"span",className:"mord"},"1"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222222222222222em"}}),(0,s.kt)("span",{parentName:"span",className:"mbin"},"+"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222222222222222em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"1"),(0,s.kt)("span",{parentName:"span",className:"mord"},"0"),(0,s.kt)("span",{parentName:"span",className:"mclose"},")"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}}),(0,s.kt)("span",{parentName:"span",className:"mrel"},"="),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.64444em",verticalAlign:"0em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"3"),(0,s.kt)("span",{parentName:"span",className:"mord"},"."),(0,s.kt)("span",{parentName:"span",className:"mord"},"3"),(0,s.kt)("span",{parentName:"span",className:"mord"},"1"),(0,s.kt)("span",{parentName:"span",className:"mord"},"6"),(0,s.kt)("span",{parentName:"span",className:"mord"},"6"),(0,s.kt)("span",{parentName:"span",className:"mord"},"2"),(0,s.kt)("span",{parentName:"span",className:"mord"},"4"),(0,s.kt)("span",{parentName:"span",className:"mord"},"7"),(0,s.kt)("span",{parentName:"span",className:"mord"},"9"),(0,s.kt)("span",{parentName:"span",className:"mord"},"0"),(0,s.kt)("span",{parentName:"span",className:"mord"},"3"),(0,s.kt)("span",{parentName:"span",className:"mord"},"5"),(0,s.kt)("span",{parentName:"span",className:"mord"},"5"),(0,s.kt)("span",{parentName:"span",className:"mord"},"4")))))),(0,s.kt)("p",{parentName:"blockquote"},"If at the time of locking the minimum GIV staking APR is 35% then his APR at the time of locking will be ~116%. The actual amount will be variable depending, as mentioned, on the total amount of GIV staked into the farm, but that same multiplier of 3.32 would be applied to the current staking APR for the GIV rewards that Carlos earns."),(0,s.kt)("p",{parentName:"blockquote"},"Carlos also would get a multiplier on his GIVpower. Assuming he had 500 GIV staked and chooses to lockup 100 of that 500 he would then have 732 GIVpower."),(0,s.kt)("div",{parentName:"blockquote",className:"math math-display"},(0,s.kt)("span",{parentName:"div",className:"katex-display"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("mn",{parentName:"mrow"},"100"),(0,s.kt)("mo",{parentName:"mrow"},"\u2217"),(0,s.kt)("mn",{parentName:"mrow"},"3.32"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")"),(0,s.kt)("mo",{parentName:"mrow"},"+"),(0,s.kt)("mn",{parentName:"mrow"},"400"),(0,s.kt)("mo",{parentName:"mrow"},"="),(0,s.kt)("mn",{parentName:"mrow"},"732")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"(100 * 3.32) + 400 = 732")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord"},"1"),(0,s.kt)("span",{parentName:"span",className:"mord"},"0"),(0,s.kt)("span",{parentName:"span",className:"mord"},"0"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222222222222222em"}}),(0,s.kt)("span",{parentName:"span",className:"mbin"},"\u2217"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222222222222222em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"3"),(0,s.kt)("span",{parentName:"span",className:"mord"},"."),(0,s.kt)("span",{parentName:"span",className:"mord"},"3"),(0,s.kt)("span",{parentName:"span",className:"mord"},"2"),(0,s.kt)("span",{parentName:"span",className:"mclose"},")"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222222222222222em"}}),(0,s.kt)("span",{parentName:"span",className:"mbin"},"+"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222222222222222em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.64444em",verticalAlign:"0em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"4"),(0,s.kt)("span",{parentName:"span",className:"mord"},"0"),(0,s.kt)("span",{parentName:"span",className:"mord"},"0"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}}),(0,s.kt)("span",{parentName:"span",className:"mrel"},"="),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.64444em",verticalAlign:"0em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"7"),(0,s.kt)("span",{parentName:"span",className:"mord"},"3"),(0,s.kt)("span",{parentName:"span",className:"mord"},"2"))))))),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"After the 10 rounds that Carlos locked his GIV, his GIVpower will no longer have a multiplier, becoming reduced to only 500, matching 1:1 his staked GIV and his APR will go down to the minimum staking APR.")),(0,s.kt)("admonition",{type:"success"},(0,s.kt)("h4",{parentName:"admonition",id:"streamed-rewards"},"Streamed Rewards"),(0,s.kt)("p",{parentName:"admonition"},"As always, all GIVeconomy rewards are distributed according to the GIVstream. Check out the ",(0,s.kt)("a",{parentName:"p",href:"https://giveth.io/givstream"},(0,s.kt)("strong",{parentName:"a"},"GIViverse Expansion"))," to understand how much your claimable rewards will be.")),(0,s.kt)("img",{alt:"GIVpower overview",src:(0,r.Z)("img/GIVpowerOverview.png")}),(0,s.kt)("h2",{id:"rewards-allocation"},"Rewards Allocation"),(0,s.kt)("p",null,"7 Million GIV was allocated to the first 6 months of GIVpower Rewards. Near the end of the first 6 months Giveth will assess the program's performance and allocate more rewards accordingly.."),(0,s.kt)("h2",{id:"boosting-phase-2"},"Boosting (Phase 2)"),(0,s.kt)("p",null,"As mentioned, users will now get GIVpower for staking their GIV in the GIVfarm. Coming closely on the heels of phase 1 will be the release of phase 2 which will allow users to boost projects with GIVpower."),(0,s.kt)("p",null,"Users will be able to stake their GIVpower on projects to boost them. Boosted projects will be ranked on the platform based on how much GIVpower has been staked on them and based on their ranking they will generate more GIVbacks to their donors. "),(0,s.kt)("p",null,"Top-ranked projects will also benefit from matching funds from the ",(0,s.kt)("a",{parentName:"p",href:"https://forum.giveth.io/t/givmatching-idea-generation-on-how-to-distribute-funds/346/21"},"GIVmatching Program"),". "),(0,s.kt)("p",null,"Both Boosting and GIVmatching are yet to be released and we will update this documentation as more details become available."),(0,s.kt)("admonition",{type:"info"},(0,s.kt)("h4",{parentName:"admonition",id:"delegation"},"Delegation"),(0,s.kt)("p",{parentName:"admonition"},"Giveth in the future will also be implementing the ability for users to delegate their GIVpower, letting trusted Givers curate projects on their behalf, stay tuned for more details!")))}h.isMDXComponent=!0}}]);
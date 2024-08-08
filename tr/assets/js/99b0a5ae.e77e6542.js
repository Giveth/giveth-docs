"use strict";(self.webpackChunkgiveth_docs=self.webpackChunkgiveth_docs||[]).push([[3578],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var i=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=i.createContext({}),u=function(e){var t=i.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=u(e.components);return i.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(a),m=n,h=c["".concat(s,".").concat(m)]||c[m]||d[m]||r;return a?i.createElement(h,l(l({ref:t},p),{},{components:a})):i.createElement(h,l({ref:t},p))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,l=new Array(r);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var u=2;u<r;u++)l[u]=a[u];return i.createElement.apply(null,l)}return i.createElement.apply(null,a)}c.displayName="MDXCreateElement"},7957:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>u,toc:()=>d});var i=a(7462),n=(a(7294),a(3905)),r=a(4996),l=a(9661);const o={id:"testing-guidelines",title:"Giveth.io Testing Guidelines",slug:"dapps/testing-guidelines"},s=void 0,u={unversionedId:"testing-guidelines",id:"testing-guidelines",title:"Giveth.io Testing Guidelines",description:"This guide provides a framework for testing the Giveth.io DApp.",source:"@site/i18n/tr/docusaurus-plugin-content-docs-dapps/current/doc1b-testing-guidelines.md",sourceDirName:".",slug:"/dapps/testing-guidelines",permalink:"/tr/dapps/testing-guidelines",draft:!1,editUrl:"https://github.com/giveth/giveth-docs/edit/master/dapps/doc1b-testing-guidelines.md",tags:[],version:"current",lastUpdatedBy:"divine-comedian",lastUpdatedAt:1657203832,formattedLastUpdatedAt:"7 Tem 2022",frontMatter:{id:"testing-guidelines",title:"Giveth.io Testing Guidelines",slug:"dapps/testing-guidelines"}},p={},d=[{value:"Requirements",id:"requirements",level:2},{value:"Use Cases",id:"use-cases",level:2},{value:"General",id:"general",level:3},{value:"<strong>Home page</strong>",id:"home-page",level:3},{value:"<strong>Public Profile Page</strong>",id:"public-profile-page",level:3},{value:"<strong>Projects Page</strong>",id:"projects-page",level:3},{value:"<strong>Project Public View</strong>",id:"project-public-view",level:3},{value:"<strong>Sign-in</strong>",id:"sign-in",level:3},{value:"<strong>Onboarding</strong>",id:"onboarding",level:3},{value:"<strong>My Account</strong>",id:"my-account",level:3},{value:"General Purposes Pages",id:"general-purposes-pages",level:3},{value:"Check mobile view and responsiveness",id:"check-mobile-view-and-responsiveness",level:3},{value:"Project Creator",id:"project-creator",level:3},{value:"Create Project",id:"create-project",level:4},{value:"Edit Project",id:"edit-project",level:4},{value:"Update Project",id:"update-project",level:3},{value:"Donor",id:"donor",level:3},{value:"Donation Page",id:"donation-page",level:3}],c={toc:d};function m(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,i.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(l.ZP,{mdxType:"NotTranslatedMessage"}),(0,n.kt)("p",null,"This guide provides a framework for testing the ",(0,n.kt)("a",{parentName:"p",href:"https://giveth.io/"},"Giveth.io")," DApp."),(0,n.kt)("h2",{id:"requirements"},"Requirements"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"User testing should be done on ",(0,n.kt)("a",{parentName:"li",href:"https://staging.giveth.io"},"https://staging.giveth.io")," - ",(0,n.kt)("strong",{parentName:"li"},"Our staging environment is deployed on both Ropsten (Mainnet) and Gnosis Chain")," (formerly xDai Network)."),(0,n.kt)("li",{parentName:"ul"},"Please use a modern browser. If you encounter a bug, please try the same thing with another browser. Please make an issue in any case, but tell us if the issue might be browser specific."),(0,n.kt)("li",{parentName:"ul"},"Use issues in ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/Giveth/giveth-next/issues"},"GitHub")," for reports and feedback.")),(0,n.kt)("h2",{id:"use-cases"},"Use Cases"),(0,n.kt)("p",null,"The following actions are defined as core functionality. If one of these steps is buggy, that represents a critical error."),(0,n.kt)("h3",{id:"general"},(0,n.kt)("a",{parentName:"h3",href:"https://github.com/Giveth/giveth-2/issues/800"},"General")),(0,n.kt)("p",null,"This use case will be partially automated but requires user-testing, especially to ensure that all external links function correctly."),(0,n.kt)("h3",{id:"home-page"},(0,n.kt)("strong",{parentName:"h3"},"Home page")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"View Home page, hover all over project cards to see load more, and donate button"),(0,n.kt)("li",{parentName:"ul"},"Check all links on the home page"),(0,n.kt)("li",{parentName:"ul"},"Check all footer links including social links"),(0,n.kt)("li",{parentName:"ul"},'"Liking" projects - successful and "heart count" updates'),(0,n.kt)("li",{parentName:"ul"},"Header navbar buttons (",(0,n.kt)("inlineCode",{parentName:"li"},"Home"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"Projects"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"GIVeconomy"),", etc. ) are functional"),(0,n.kt)("li",{parentName:"ul"},'"GIV currently in wallet" (on navbar) shows correctly (token address: ',(0,n.kt)("inlineCode",{parentName:"li"},"0x4f4F9b8D5B4d0Dc10506e5551B0513B61fD59e75"),")"),(0,n.kt)("li",{parentName:"ul"},"Project Badges such as ",(0,n.kt)("inlineCode",{parentName:"li"},"Verified"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"Traceable"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"New")," display correctly")),(0,n.kt)("img",{alt:"testingsocialmedia",src:(0,r.Z)("img/testingguidelines/testingguideline1.png")}),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Signup for newsletter"),(0,n.kt)("li",{parentName:"ul"},"Subscribe to emails - validation of email, success subscribe"),(0,n.kt)("li",{parentName:"ul"},"My wallet drop down menu is functional"),(0,n.kt)("li",{parentName:"ul"},"Account name/address shows properly on navbar when logged in"),(0,n.kt)("li",{parentName:"ul"},"Report a bug"),(0,n.kt)("li",{parentName:"ul"},"Sign in/sign out"),(0,n.kt)("li",{parentName:"ul"},"Check that projects appear on the project page (correct format, correct number)"),(0,n.kt)("li",{parentName:"ul"},"Links inside ",(0,n.kt)("a",{parentName:"li",href:"https://giveth.io/join"},"https://giveth.io/join")," are functional"),(0,n.kt)("li",{parentName:"ul"},"Content inside ",(0,n.kt)("a",{parentName:"li",href:"https://giveth.io/about"},"https://giveth.io/about")," displays correctly, including ",(0,n.kt)("inlineCode",{parentName:"li"},"Mission & Vision"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"History")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"Team")," tabs")),(0,n.kt)("h3",{id:"public-profile-page"},(0,n.kt)("strong",{parentName:"h3"},"Public Profile Page")),(0,n.kt)("p",null,"View Public Profile Page - when you click on the project owner"),(0,n.kt)("img",{alt:"testingpublicprofile",src:(0,r.Z)("img/testingguidelines/testingguideline2.png")}),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Surf in all tabs and make sure all data in this profile is accurate"),(0,n.kt)("li",{parentName:"ul"},"For example: the number of donations, amount received and donated, and also the number of projects should be accurate"),(0,n.kt)("li",{parentName:"ul"},"On the donation tab, test the tx link, sorting by amount, USD value, and date"),(0,n.kt)("li",{parentName:"ul"},"Make sure the USD value is accurate"),(0,n.kt)("li",{parentName:"ul"},"Test copy address of the user and also test the external link")),(0,n.kt)("img",{alt:"testingadress",src:(0,r.Z)("img/testingguidelines/testingguideline3.png")}),(0,n.kt)("h3",{id:"projects-page"},(0,n.kt)("strong",{parentName:"h3"},"Projects Page")),(0,n.kt)("p",null,"View the projects list, by clicking the projects links in the header"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Make sure badges of verified and trace is working properly"),(0,n.kt)("li",{parentName:"ul"},"If signed in view red hearts - remove hearts. If you\u2019re not signed in: you should get asked for sign-in before proceeding")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Test sort by /filter / search")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Filter by category and make sure filtering works fine"),(0,n.kt)("li",{parentName:"ul"},"Sort by Amount raised, newest, oldest, hearts"),(0,n.kt)("li",{parentName:"ul"},"In sort by field, we have some items that should act as the filtered items: Accept GIV token (all projects excluding Giving Block projects) - Trace - Verified. all of them should filter the results"),(0,n.kt)("li",{parentName:"ul"},"In search, you can easily find results by title, description, impact Location, (project owner is not searchable now but it\u2019s implementing)"),(0,n.kt)("li",{parentName:"ul"},"If no result is found, the formatting of no result page should look normal"),(0,n.kt)("li",{parentName:"ul"},"Back - in the search box should clear the input and show all projects"),(0,n.kt)("li",{parentName:"ul"},"Back in the no result should also do the above")),(0,n.kt)("h3",{id:"project-public-view"},(0,n.kt)("strong",{parentName:"h3"},"Project Public View")),(0,n.kt)("p",null,"Public view means the view that everyone can see. If you are the owner of this project and you are signed in, you may have another view, called the Project Owner view, which you can see in the following doc."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Project single page public view -when you click on learn more you can view the details of the project"),(0,n.kt)("li",{parentName:"ul"},"About tab should show the project description"),(0,n.kt)("li",{parentName:"ul"},"Sidebar: donate button, hover on the button to see the changing color"),(0,n.kt)("li",{parentName:"ul"},"The share should work properly"),(0,n.kt)("li",{parentName:"ul"},"Like the projects - if not signed in, you should get asked to sign in, if signed in, it should get red after giving heart"),(0,n.kt)("li",{parentName:"ul"},"Tags: categories and badges of verified should work properly"),(0,n.kt)("li",{parentName:"ul"},"GIVback toast message link ",(0,n.kt)("inlineCode",{parentName:"li"},"LEARN MORE")," should go to docs"),(0,n.kt)("li",{parentName:"ul"},"Report issue link should work properly"),(0,n.kt)("li",{parentName:"ul"},"Updates have to be shown properly, (to test better as the owner you can post an update, log out and see as public view if it is updated or not)"),(0,n.kt)("li",{parentName:"ul"},"Donations Table: Make sure all-time funding received is accurate. Test count, sorting on the date, amount, and USD value, also search in donation")),(0,n.kt)("h3",{id:"sign-in"},(0,n.kt)("strong",{parentName:"h3"},"Sign-in")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Signing with Ethereum: select meta-mask, torus, and walletConnect"),(0,n.kt)("li",{parentName:"ul"},"Sign-in: you are prompted to connect your wallet and you get asked to sign again for doing some specific actions, for example: liking (\u201chearting\u201d), viewing your account, viewing the project in owner view, or creating a project"),(0,n.kt)("li",{parentName:"ul"},"Social links on sign in should load torus:")),(0,n.kt)("img",{alt:"testingsocialmedialinks",src:(0,r.Z)("img/testingguidelines/testingguideline4.png")}),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Do it with a registered and not registered address"),(0,n.kt)("li",{parentName:"ul"},"For specific actions, you may need to sign-in with your wallet")),(0,n.kt)("h3",{id:"onboarding"},(0,n.kt)("strong",{parentName:"h3"},"Onboarding")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"If you don't have a complete profile, you get asked to complete your profile in a wizard"),(0,n.kt)("li",{parentName:"ul"},"Check required fields"),(0,n.kt)("li",{parentName:"ul"},"If you are not signed in you should get asked to do it before submitting the data"),(0,n.kt)("li",{parentName:"ul"},"Check verification of emails and URLs"),(0,n.kt)("li",{parentName:"ul"},"Upload photos, do it with very large and small photos"),(0,n.kt)("li",{parentName:"ul"},"Submit your data and the header should load right after you have this information")),(0,n.kt)("h3",{id:"my-account"},(0,n.kt)("strong",{parentName:"h3"},"My Account")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Test it with a newly registered address: you should get asked to complete your profile by a yellow banner up there, and the \u201cDon\u2019t be a stranger\u201d purple banner below the overview"),(0,n.kt)("li",{parentName:"ul"},"When clicking on these yellow or purple banners you should get redirected to the onboarding page"),(0,n.kt)("li",{parentName:"ul"},"Test if you complete your profile that  you can edit your profile"),(0,n.kt)("li",{parentName:"ul"},"Please test all fields and test verification of the correct email. URL and required field"),(0,n.kt)("li",{parentName:"ul"},"Delete your profile photo"),(0,n.kt)("li",{parentName:"ul"},"Edit your profile photo"),(0,n.kt)("li",{parentName:"ul"},"Overview tab checks numbers to be accurate"),(0,n.kt)("li",{parentName:"ul"},"Projects Tab - test sorting, links, all provided data including verified and listed projects (you can change the provided amount in admin bro and check it here again to make sure it reflects the latest changes)"),(0,n.kt)("li",{parentName:"ul"},"Donations Tab (like public profile)"),(0,n.kt)("li",{parentName:"ul"},"Liked Projects tab (like public profile)")),(0,n.kt)("h3",{id:"general-purposes-pages"},"General Purposes Pages"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"QAing About Us"),(0,n.kt)("li",{parentName:"ul"},"QAing History"),(0,n.kt)("li",{parentName:"ul"},"QAing Team"),(0,n.kt)("li",{parentName:"ul"},"QAing Terms of Use"),(0,n.kt)("li",{parentName:"ul"},"QAing Partners")),(0,n.kt)("h3",{id:"check-mobile-view-and-responsiveness"},"Check mobile view and responsiveness"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Resize your browser"),(0,n.kt)("li",{parentName:"ul"},"Use different devices: phones, tablets"),(0,n.kt)("li",{parentName:"ul"},"Dig into header, menus, all static pages")),(0,n.kt)("h3",{id:"project-creator"},(0,n.kt)("a",{parentName:"h3",href:"https://github.com/Giveth/giveth-2/issues/798"},"Project Creator")),(0,n.kt)("p",null,"This use case is partially automated to ensure functionality before changes are made. However, user testing is still required."),(0,n.kt)("h4",{id:"create-project"},"Create Project"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Verification: required fields should be filled and not submitted empty"),(0,n.kt)("li",{parentName:"ul"},"Add Project details"),(0,n.kt)("li",{parentName:"ul"},"Use rich text formats (bold, italics, quotes, headers, etc.), and ensure they render properly"),(0,n.kt)("li",{parentName:"ul"},"In the description please test emojis and report all formatting and bad UX"),(0,n.kt)("li",{parentName:"ul"},"In the description, all the formatting should save and work properly"),(0,n.kt)("li",{parentName:"ul"},"In the description, embed images, test \u201cupdate pictures\u201d, resize them and ensure they render properly"),(0,n.kt)("li",{parentName:"ul"},"Upload cover photo, delete, upload it again with large and tiny pictures"),(0,n.kt)("li",{parentName:"ul"},"Use predefined photos, and change them to see any abnormal behavior"),(0,n.kt)("li",{parentName:"ul"},"Embed videos and ensure they render properly"),(0,n.kt)("li",{parentName:"ul"},"In address, it should prevent reused ETH addresses, it should be a valid ETH address and not a contract address"),(0,n.kt)("li",{parentName:"ul"},"For impact, search locations, cities, areas as well as countries or continents and make sure it\u2019s working properly"),(0,n.kt)("li",{parentName:"ul"},"Category select"),(0,n.kt)("li",{parentName:"ul"},"Google maps selection"),(0,n.kt)("li",{parentName:"ul"},"Preview (save as a draft) means you can reach out to the projects later in your account but it\u2019s not active yet"),(0,n.kt)("li",{parentName:"ul"},"Publish. and you have to see the success page and all information and links on the public page should work properly"),(0,n.kt)("li",{parentName:"ul"},"Publish directly and publish a preview project to make sure there are no differences."),(0,n.kt)("li",{parentName:"ul"},'Check that projects are all listed in "my projects"'),(0,n.kt)("li",{parentName:"ul"},"Check that projects show up on homepage*"),(0,n.kt)("li",{parentName:"ul"},"Deactivate/reactivate project")),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},'*Projects created on the DApp have an automatic "unlisted" Status, meaning they will not show up until their status is changed to "listed". Reach out to someone with the ',(0,n.kt)("inlineCode",{parentName:"p"},"Verification Team")," role on the ",(0,n.kt)("a",{parentName:"p",href:"https://discord.giveth.io"},"Giveth Discord")," who can show you how to list your project on staging in order to continue testing.")),(0,n.kt)("h4",{id:"edit-project"},"Edit Project"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Change photo"),(0,n.kt)("li",{parentName:"ul"},"Use rich text formats (bold, italics, quotes, headers, etc.), and ensure they render properly"),(0,n.kt)("li",{parentName:"ul"},"Embed videos or images, and ensure they render properly"),(0,n.kt)("li",{parentName:"ul"},"Change text fields"),(0,n.kt)("li",{parentName:"ul"},"Update donation address"),(0,n.kt)("li",{parentName:"ul"},"Check that updates are applied")),(0,n.kt)("h3",{id:"update-project"},"Update Project"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Add an update to your project"),(0,n.kt)("li",{parentName:"ul"},"Use rich text formats (bold, italics, quotes, headers, etc.), and ensure they render properly"),(0,n.kt)("li",{parentName:"ul"},"Embed videos or images, and ensure they render properly"),(0,n.kt)("li",{parentName:"ul"},"Update is saved and displays properly on the project page")),(0,n.kt)("h3",{id:"donor"},(0,n.kt)("a",{parentName:"h3",href:"https://github.com/Giveth/giveth-2/issues/799"},"Donor")),(0,n.kt)("p",null,"This use case does not include any automated testing and must be fully user-tested."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Donate with different tokens: ETH and ERC-20 tokens on Ropsten (Mainnet) and xDAI, ERC-20 tokens on Gnosis Chain (formerly xDai Network)"),(0,n.kt)("li",{parentName:"ul"},"Donate with alternate wallets (other than sign in)"),(0,n.kt)("li",{parentName:"ul"},"Check that funds leave wallet"),(0,n.kt)("li",{parentName:"ul"},"Check that funds received/tracked by project"),(0,n.kt)("li",{parentName:"ul"},"View donations made (correct $ amount, correct currency type)")),(0,n.kt)("h3",{id:"donation-page"},"Donation Page"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Before sign-in you should see connect wallet button"),(0,n.kt)("li",{parentName:"ul"},"Donate and check the modals look"),(0,n.kt)("li",{parentName:"ul"},"Check the links and content on the page to make sure it's working"),(0,n.kt)("li",{parentName:"ul"},"Change wallet and change network to check it\u2019s working with your wallet"),(0,n.kt)("li",{parentName:"ul"},"Repeat the donation on both ETH(Ropsten) and gnosis Chain networks"),(0,n.kt)("li",{parentName:"ul"},"Do it with an insufficient token number"),(0,n.kt)("li",{parentName:"ul"},"Do it with too tiny amounts"),(0,n.kt)("li",{parentName:"ul"},"Check the project card view beside the donation token"),(0,n.kt)("li",{parentName:"ul"},"Search bar for tokens to donate - tokens show up appropriately when searching"),(0,n.kt)("li",{parentName:"ul"},"Giving Block - GIV donations should load a Twitter modal about Gemini"),(0,n.kt)("li",{parentName:"ul"},"Success Page with eligible and with non-eligible token should differ - on GIVback eligible token donation you may see a banner saying you are eligible for GIVbacks"),(0,n.kt)("li",{parentName:"ul"},"Anonymous donations should not show in public profile view")),(0,n.kt)("p",null,"For GIVeconomy testing guidelines, ",(0,n.kt)("a",{parentName:"p",href:"/tr/dapps/testingGIVeconomy/"},"click here"),"."))}m.isMDXComponent=!0},9661:(e,t,a)=>{a.d(t,{ZP:()=>l});var i=a(7462),n=(a(7294),a(3905));const r={toc:[{value:"<em>Bu makalenin terc\xfcmesi yap\u0131lmam\u0131\u015ft\u0131r ve yaln\u0131zca orijinal \u0130ngilizce haliyle mevcuttur. Bu makalenin terc\xfcmesinde bize yard\u0131mc\u0131 olmak isterseniz a\xe7\u0131k kaynakl\u0131 repository&#39;den \xe7evirinizi g\xf6nderebilir veya Discord sunucumuzdan bizimle ileti\u015fime ge\xe7ebilirsiniz.</em>",id:"bu-makalenin-terc\xfcmesi-yap\u0131lmam\u0131\u015ft\u0131r-ve-yaln\u0131zca-orijinal-i\u0307ngilizce-haliyle-mevcuttur-bu-makalenin-terc\xfcmesinde-bize-yard\u0131mc\u0131-olmak-isterseniz-a\xe7\u0131k-kaynakl\u0131-repositoryden-\xe7evirinizi-g\xf6nderebilir-veya-discord-sunucumuzdan-bizimle-ileti\u015fime-ge\xe7ebilirsiniz",level:4}]};function l(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,i.Z)({},r,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h4",{id:"bu-makalenin-terc\xfcmesi-yap\u0131lmam\u0131\u015ft\u0131r-ve-yaln\u0131zca-orijinal-i\u0307ngilizce-haliyle-mevcuttur-bu-makalenin-terc\xfcmesinde-bize-yard\u0131mc\u0131-olmak-isterseniz-a\xe7\u0131k-kaynakl\u0131-repositoryden-\xe7evirinizi-g\xf6nderebilir-veya-discord-sunucumuzdan-bizimle-ileti\u015fime-ge\xe7ebilirsiniz"},(0,n.kt)("em",{parentName:"h4"},"Bu makalenin terc\xfcmesi yap\u0131lmam\u0131\u015ft\u0131r ve yaln\u0131zca orijinal \u0130ngilizce haliyle mevcuttur. Bu makalenin terc\xfcmesinde bize yard\u0131mc\u0131 olmak isterseniz a\xe7\u0131k kaynakl\u0131 repository'den \xe7evirinizi g\xf6nderebilir veya ",(0,n.kt)("a",{parentName:"em",href:"https://discord.giveth.io"},"Discord")," sunucumuzdan bizimle ileti\u015fime ge\xe7ebilirsiniz.")),(0,n.kt)("hr",null))}l.isMDXComponent=!0}}]);
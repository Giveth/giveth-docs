(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{185:function(e,t,o){"use strict";o.d(t,"a",(function(){return u})),o.d(t,"b",(function(){return m}));var n=o(0),r=o.n(n);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function c(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=r.a.createContext({}),h=function(e){var t=r.a.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},u=function(e){var t=h(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=h(o),d=n,m=u["".concat(i,".").concat(d)]||u[d]||p[d]||a;return o?r.a.createElement(m,s(s({ref:t},l),{},{components:o})):r.a.createElement(m,s({ref:t},l))}));function m(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,i=new Array(a);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var l=2;l<a;l++)i[l]=o[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,o)}d.displayName="MDXCreateElement"},186:function(e,t,o){"use strict";o.d(t,"b",(function(){return a})),o.d(t,"a",(function(){return i}));var n=o(17),r=o(187);function a(){var e=Object(n.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,o=void 0===t?"/":t,a=e.url;return{withBaseUrl:function(e,t){return function(e,t,o,n){var a=void 0===n?{}:n,i=a.forcePrependBaseUrl,s=void 0!==i&&i,c=a.absolute,l=void 0!==c&&c;if(!o)return o;if(o.startsWith("#"))return o;if(Object(r.b)(o))return o;if(s)return t+o;var h=o.startsWith(t)?o:t+o.replace(/^\//,"");return l?e+h:h}(a,o,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,a().withBaseUrl)(e,t)}},187:function(e,t,o){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!n(e)}o.d(t,"b",(function(){return n})),o.d(t,"a",(function(){return r}))},83:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return s})),o.d(t,"metadata",(function(){return c})),o.d(t,"toc",(function(){return l})),o.d(t,"default",(function(){return u}));var n=o(3),r=o(7),a=(o(0),o(185)),i=o(186),s=(o(38),{slug:"communitySpotlight1",title:"Community Project Spotlight #1",author:"Mitch",author_image_url:"/img/mitchAuthor.jpeg",image:"/img/blog/communitySpotlight1Cover.jpeg"}),c={permalink:"/blog/communitySpotlight1",source:"@site/blog/2021-08-12-communtiySpotlight1.md",description:"We\u2019re back with a silver platter of community curated projects to celebrate and highlight! Our Giveth contributors went through the list and chose their top picks. We\u2019ve found six great projects that are live on Giveth now and looking for funding to meet their goals. Read on to discover some of our favourite projects from a diverse range of causes using our DApps.",date:"2021-08-12T00:00:00.000Z",formattedDate:"August 12, 2021",tags:[],title:"Community Project Spotlight #1",readingTime:7.07,truncated:!1,prevItem:{title:"Community Project Spotlight #2",permalink:"/blog/communitySpotlight2"},nextItem:{title:"Change-Makers: Final Round-up!",permalink:"/blog/changeMakersRoundup2"}},l=[{value:"<strong>Want to get more involved?</strong>",id:"want-to-get-more-involved",children:[]}],h={toc:l};function u(e){var t=e.components,o=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},h,o,{components:t,mdxType:"MDXLayout"}),Object(a.b)("img",{alt:"Watching for those doing good",src:Object(i.a)("/img/blog/communitySpotlight1Cover.jpeg")}),Object(a.b)("p",null,"We\u2019re back with a silver platter of community curated projects to celebrate and highlight! Our Giveth contributors went through the list and chose their top picks. We\u2019ve found six great projects that are ",Object(a.b)("a",{parentName:"p",href:"https://giveth.io/projects"},"live on Giveth now")," and looking for funding to meet their goals. Read on to discover some of our favourite projects from a diverse range of causes using our DApps."),Object(a.b)("img",{alt:"Colorado Multiversity",src:Object(i.a)("/img/blog/communitySpotlight1.png")}),Object(a.b)("h1",{id:"colorado-multiversity"},"Colorado Multiversity"),Object(a.b)("p",null,"Is a partnership of local and international organizations based in the Northern Caribbean side of Costa Rica. They provide resources for disaster relief workers and environmental conservationists. The biodiversity contained in Costa Rica cannot be understated and the preservation of the plethora of unique flora and fauna in this region is paramount to the Multiversity\u2019s mission. They currently steward a land area of 1235 acres located within the Barra del Colorado National Refuge which has been designated by UNESCO as one of most important places for natural conservation."),Object(a.b)("p",null,"Currently, Colorado Multiversity operates out of a biological station called \u201cEl Zota\u201d, which is one of the Multiversity\u2019s partners. El Zota carries out research and training for those who are passionate about conservation and biodiversity. There is also The Refuge Project, another one of the Multiversity\u2019s organizations, that utilizes the facility as a safe space for disaster relief workers worldwide to meet, rest, teach and learn."),Object(a.b)("p",null,"The Colorado Multiversity has been recognized by some notable organizations for potential funding, including the SDG Impact Fund, Gaia Gives and the Spanish Cooperation. They are seeking initial funding to kick-start their mission and meet the funding criteria outlined by these organizations. They have a wide range of projects being launched including decarbonization initiatives, international volunteering programs, agricultural development research and plastic recycling. Check out their introduction video below and ",Object(a.b)("a",{parentName:"p",href:"https://giveth.io/project/colorado-multiversity"},"visit their project on Giveth")," to learn more and donate!"),Object(a.b)("img",{alt:"Feed the Hungry in Chilliwack, BC, Canada",src:Object(i.a)("/img/blog/communitySpotlight2.jpeg")}),Object(a.b)("h1",{id:"feed-the-hungry-in-chilliwack-bc-canada"},"Feed the Hungry in Chilliwack, BC, Canada"),Object(a.b)("p",null,"Is a local effort led by a man named David to make a contribution to the homeless population prevalent in the local community of Chilliwack, a city near Vancouver, British Columbia. In Vancouver the homeless population is ever-present and expanding. The temperate climate of southern BC has allowed this region to become a year-round hub for the Canadian demographic experiencing homelessness. The problem in Chilliwack is exacerbated as the city of Vancouver rounds up the homeless on one-way buses to Chilliwack, dropping them off in the town with no return."),Object(a.b)("p",null,"Feeding the hungry is a simple and powerful gesture. David\u2019s trusty team, consisting of him and his daughter, plans to create food packages to hand out to the population experiencing homelessness in Chilliwack. David is seeking funding to purchase ingredients for the food packages, cover gas costs and pay for lodging expenses. At the time of writing this article, David\u2019s team is gearing up and getting ready to execute their plan in the coming weeks. Funds contributed to this project will allow them to scale their mission and feed more people. ",Object(a.b)("a",{parentName:"p",href:"https://giveth.io/project/Feed-the-Hungry-in-Chilliwack-BC-Canada"},"Find their project on Giveth.io"),", make a donation and stay tuned for updates in the near future!"),Object(a.b)("img",{alt:"Women of Crypto Art (WOCA)",src:Object(i.a)("/img/blog/communitySpotlight3.png")}),Object(a.b)("h1",{id:"women-of-crypto-art-woca"},"Women of Crypto Art (WOCA)"),Object(a.b)("p",null,"Have launched an inclusive community to celebrate, support and connect the women in the crypto art space. The voices of women are extremely important and often underrepresented so WOCA is championing the presence of women in the crypto sphere. They share ideas and information and promote each other\u2019s work across all realms of cryptocurrency. In 6 short months their community has quickly grown to over 400 members."),Object(a.b)("p",null,"WOCA has kept pace with their rapid growth, improving their organization in many ways. They\u2019ve built a website to showcase their community talent, they launched a Colony DAO to manage their thriving tribe and have formed great relationships with entities such as Panvala and Cryptovoxels. WOCA is seeking funding to reach their next milestones, including building a permanent gallery, onboarding members to the DAO and promoting all of the incredible work done by women artists. Check out WOCA and make a donation to their ",Object(a.b)("a",{parentName:"p",href:"https://giveth.io/project/women-of-crypto-art-(woca)"},"project on Giveth"),"."),Object(a.b)("img",{alt:"Vukani",src:Object(i.a)("/img/blog/communitySpotlight4.jpeg")}),Object(a.b)("h1",{id:"vukani"},"Vukani"),Object(a.b)("p",null,"Translates to \u201cWake Up\u201d in the regional isiZulu tongue, and is the motto of this project based in rural Zimbabwe. The entire country faces extreme food security challenges, driven by political and environmental factors. This project is dedicated to finding food security solutions for one of the most important, yet vulnerable groups in society: the children. The project\u2019s owner, Tim Olsson, believes that satisfying the nutritional needs of children allows them to focus on their education and development. Children will create the future of tomorrow and providing them with the means to succeed will help them overcome the challenges we still face today."),Object(a.b)("p",null,"Vukani\u2019s immediate goal is to grow food to nourish the local school children. Research is needed to find an agricultural system that works in the unique conditions of Zimbabwe. Once an effective system is found by the initial pilot project, their aim is to scale up and one day serve the entire country. Progress has been made for finding a water source but more infrastructure needs to be acquired to effectively distribute it for irrigation. Funds to this project will help make purchases for water pumps and solar-powered irrigation systems. Head over to ",Object(a.b)("a",{parentName:"p",href:"https://giveth.io/project/vukani"},"Vukani\u2019s project on Giveth")," to read more and make a donation!"),Object(a.b)("img",{alt:"MyCrypto",src:Object(i.a)("/img/blog/communitySpotlight5.jpeg")}),Object(a.b)("h1",{id:"mycrypto"},"MyCrypto"),Object(a.b)("p",null,"Is making wallet management a breeze in the Ethereum ecosystem. MyCrypto is a hub for creating and connecting your Ethereum wallets. It boasts a great UI that can consolidate and keep track of all your tokens and their values on Mainnet and several Ethereum sidechains. MyCrypto also allows you to deploy and carry out direct interactions with Ethereum smart contracts! Neato! Apart from those wonderful tools, it can also facilitate sending, requesting, swapping and buying crypto as well as tracking eligible airdrops. They also have a desktop app for offline wallet management, useful for managing private keys and seed phrases."),Object(a.b)("p",null,"MyCrypto is open-source and has developed many free tools for Ethereum user security, such as a ",Object(a.b)("a",{parentName:"p",href:"https://cryptoscamdb.org/"},"database for tracking known crypto scams"),", ",Object(a.b)("a",{parentName:"p",href:"https://chrome.google.com/webstore/detail/etheraddresslookup/pdknmigbbbhmllnmgdfalmedcmcefdfn"},"a web extension for preventing phishing attempts")," and an ",Object(a.b)("a",{parentName:"p",href:"https://findeth.io/"},"application for finding lost Ethereum addresses"),". Donations to their project will help secure funding to keep their platforms alive and maintained. Experience their DApp on ",Object(a.b)("a",{parentName:"p",href:"https://app.mycrypto.com"},"https://app.mycrypto.com")," and ",Object(a.b)("a",{parentName:"p",href:"https://giveth.io/project/mycrypto"},"visit their project on Giveth")," to make a contribution."),Object(a.b)("img",{alt:"Free the Food",src:Object(i.a)("/img/blog/communitySpotlight6.jpeg")}),Object(a.b)("h1",{id:"free-the-food"},"Free the Food"),Object(a.b)("p",null,"Believes in creating regenerative food sources using the vacant areas along the sides of roads. Harnessing the knowledge of Syntropic Farming they have launched their project along the lush rural roads of Costa Rica. According to Devin & Arthur, Free the Food\u2019s co-founders, Syntropic Farming is the gateway to restoring ecological diversity, creating wildlife habitats and holistically super-charging the generation of delicious and healthy food."),Object(a.b)("p",null,"They have already begun with three streetside syntropic plantations to grow food, with more sites on the way. Their grand vision is to create a network of streetside syntropics and to engineer a grants system allowing new communities to spring up, acquiring the knowledge to begin propagating these regenerative food sources. They are seeking funding now to develop their website and purchase irrigation tools, water tanks, seeds, tools, as well as to provide a monthly budget for 1 employee. ",Object(a.b)("a",{parentName:"p",href:"https://giveth.io/project/free-the-food"},"Find their project on Giveth")," and learn more about Free the Food!"),Object(a.b)("p",null,"There you have it! Six spicy projects running the gambit from art, crypto, nature and all the goodness in between. Don\u2019t see your project on the list? Don\u2019t sweat! We\u2019ll be regularly highlighting more ventures on our blog and social media channels, and you can catch our eye by tweeting about your project and tagging us ",Object(a.b)("a",{parentName:"p",href:"https://twitter.com/Givethio"},"@givethio"),"."),Object(a.b)("p",null,"If you have a for-good project looking for funding, get on ",Object(a.b)("a",{parentName:"p",href:"https://giveth.io/"},"Giveth.io")," to give the world easy access to donate cryptocurrency to your cause. If you want to spread the love as a donor, check out both our DApps, ",Object(a.b)("a",{parentName:"p",href:"https://giveth.io/"},"Giveth.io")," and ",Object(a.b)("a",{parentName:"p",href:"https://trace.giveth.io/"},"Giveth TRACE")," for more ways to give!"),Object(a.b)("h2",{id:"want-to-get-more-involved"},Object(a.b)("strong",{parentName:"h2"},"Want to get more involved?")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Join us on ",Object(a.b)("a",{parentName:"li",href:"https://discord.gg/JftjK8Un3z"},"Discord")," or ",Object(a.b)("a",{parentName:"li",href:"http://t.me/givethio"},"Telegram")),Object(a.b)("li",{parentName:"ul"},"Discover our ",Object(a.b)("a",{parentName:"li",href:"https://docs.giveth.io/"},"Docs")),Object(a.b)("li",{parentName:"ul"},"Fork our code on ",Object(a.b)("a",{parentName:"li",href:"https://github.com/Giveth/"},"GitHub")),Object(a.b)("li",{parentName:"ul"},"Follow us on ",Object(a.b)("a",{parentName:"li",href:"http://medium.com/giveth/"},"Medium"),", ",Object(a.b)("a",{parentName:"li",href:"https://www.facebook.com/givethio"},"Facebook"),", ",Object(a.b)("a",{parentName:"li",href:"http://twitter.com/givethio"},"Twitter"),", ",Object(a.b)("a",{parentName:"li",href:"https://www.reddit.com/r/giveth/"},"Reddit")," and ",Object(a.b)("a",{parentName:"li",href:"https://www.youtube.com/channel/UClfutpRoY0WTVnq0oB0E0wQ"},"YouTube"))),Object(a.b)("p",null,"Help us Build the Future of Giving: \ud83e\udd84 ",Object(a.b)("a",{parentName:"p",href:"http://donate.giveth.io/"},"Donate directly")," \ud83e\udd84 or ",Object(a.b)("a",{parentName:"p",href:"https://www.ledgerwallet.com/products/ledger-nano-s?utm_source=&utm_medium=affiliate&utm_campaign=d663"},"buy a Ledger with our affiliate link")))}u.isMDXComponent=!0}}]);
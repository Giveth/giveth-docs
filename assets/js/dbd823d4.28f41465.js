"use strict";(self.webpackChunkgiveth_docs=self.webpackChunkgiveth_docs||[]).push([[5850],{7384:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>g,frontMatter:()=>l,metadata:()=>u,toc:()=>d});var n=o(7462),a=(o(7294),o(3905)),i=o(2004),r=o(4996);const l={id:"recurringDonation",title:"Recurring Donations",slug:"dapps/recurringDonation"},s="Recurring Donations",u={unversionedId:"recurringDonation",id:"recurringDonation",title:"Recurring Donations",description:"On Giveth you can use the power of Superfluid to create recurring donations to projects. This allows you to provide continuous support over a long-period to your favourite projects. In this article we will explain the key concepts of recurring donations and how to interact with them on the Giveth Dapp.",source:"@site/dapps/recurringDonation.md",sourceDirName:".",slug:"/dapps/recurringDonation",permalink:"/dapps/recurringDonation",draft:!1,editUrl:"https://github.com/giveth/giveth-docs/edit/master/dapps/recurringDonation.md",tags:[],version:"current",lastUpdatedBy:"Mitch Oz",lastUpdatedAt:1714611545,formattedLastUpdatedAt:"May 2, 2024",frontMatter:{id:"recurringDonation",title:"Recurring Donations",slug:"dapps/recurringDonation"},sidebar:"dapps",previous:{title:"GIVdrop (Finished)",permalink:"/giveconomy/givdrop"},next:{title:"Quadratic Funding",permalink:"/quadraticfunding"}},c={},d=[{value:"How it works",id:"how-it-works",level:2},{value:"For Donors",id:"for-donors",level:2},{value:"Creating a recurring donation",id:"creating-a-recurring-donation",level:3},{value:"Watch this video to see how to create a recurring donation",id:"watch-this-video-to-see-how-to-create-a-recurring-donation",level:4},{value:"Donating with an existing Stream Balance",id:"donating-with-an-existing-stream-balance",level:4},{value:"Managing a recurring donation",id:"managing-a-recurring-donation",level:3},{value:"Modifying",id:"modifying",level:4},{value:"Ending",id:"ending",level:4},{value:"Managing Stream Balances",id:"managing-stream-balances",level:3},{value:"Depositing",id:"depositing",level:4},{value:"Withdrawing",id:"withdrawing",level:4},{value:"Project Owners",id:"project-owners",level:2},{value:"Making your project eligible",id:"making-your-project-eligible",level:3},{value:"Deploying an anchor contract",id:"deploying-an-anchor-contract",level:4},{value:"Claiming your funds",id:"claiming-your-funds",level:3},{value:"Quadratic Funding and GIVbacks Eligiblity",id:"quadratic-funding-and-givbacks-eligiblity",level:2}],h={toc:d};function g(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},h,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"recurring-donations"},"Recurring Donations"),(0,a.kt)("p",null,"On Giveth you can use the power of ",(0,a.kt)("a",{parentName:"p",href:"https://www.superfluid.finance/"},"Superfluid")," to create recurring donations to projects. This allows you to provide continuous support over a long-period to your favourite projects. In this article we will explain the key concepts of recurring donations and how to interact with them on the Giveth Dapp."),(0,a.kt)("p",null,"Currently recurring donations on Giveth can only be made using the ",(0,a.kt)("strong",{parentName:"p"},"Optimism network"),"."),(0,a.kt)("h2",{id:"how-it-works"},"How it works"),(0,a.kt)("p",null,'For recurring donations, a key concept to understand are "Stream Balances" which represent the amount of funds available to create recurring donations with. Stream Balances are denominated in tokens such as ETH, OP, DAI, USDC or GIV. Stream Balances are distinguished from regular tokens by adding an x suffix to the token symbol, for example: ETHx, OPx, DAIx, USDCx, GIVx.'),(0,a.kt)("p",null,'In order to get a Stream Balance all you need to do is deposit funds in any eligible token to your "Stream Balance". This upgrades your regular tokens into "Super Tokens" giving them the ability to be streamed. You can also withdraw your tokens, which will downgrade them back to regular tokens. Tokens are upgraded and downgraded at a 1:1 ratio, meaning that if you deposit 100 DAI you will have 100 DAIx in your Stream Balance.'),(0,a.kt)("p",null,"When you create a recurring donation, you are streaming funds to a project by the second from the tokens in your Stream Balance, to make it more familiar we represent this as a monthly amount. The project owner can withdraw their received recurring donation at any time and the stream will continue to send funds until either the donor ends the recurring donation or the donor's Stream Balance runs out of funds."),(0,a.kt)("p",null,'For each recurring donation you create using the same token you increase the "Stream Rate" which is the amount of tokens per second (represented monthly) that are being streamed. This means that if you have multiple recurring donations to the same project in the same token, your Stream Balance will decrease at a faster rate.'),(0,a.kt)("p",null,"Consider this infographic:"),(0,a.kt)("img",{alt:"recurring donation infographic",src:(0,r.Z)("img/recurringDonations/recurringDonationInfoGraphic.svg")}),(0,a.kt)("p",null,"In this scenario the donor currently has a Stream Balance of 100 DAI (DAIx), they are donating to 3 projects for a total of 50 DAI monthly (or 0.000019026 DAI per second). Since they have a Stream Balance of 100 DAI we would expect it to run out in 2 months since 100 / 50 = 2. If the user had a separate Stream Balance, for example in GIV, it would not be affected by the recurring donations made in DAI."),(0,a.kt)("p",null,"When a Stream Balance runs out of funds, recurring donations made in that token will stop and the project(s) will no longer receive funds, if that happens you will need to deposit more funds to your Stream Balance and create a new recurring donation to the project(s)."),(0,a.kt)("p",null,"Using an analogy from the default world, ",(0,a.kt)("strong",{parentName:"p"},"think of your Stream Balances as prepaid visa cards"),". Each token such as GIV, USDC, DAI is a different card with its own amount of available credit. Depositing tokens to your Stream Balance is like topping up the card with more credit; creating a recurring donation is like setting up a monthly payment from that card. When the card runs out of funds the payment stops, you'll need to top it up and set up your payments again."),(0,a.kt)("h2",{id:"for-donors"},"For Donors"),(0,a.kt)("h3",{id:"creating-a-recurring-donation"},"Creating a recurring donation"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Find a ",(0,a.kt)("a",{parentName:"p",href:"https://giveth.io/projects/all?filter=AcceptFundOnOptimism"},"project with an Optimism address"),' that you would like to support and hit DONATE. From there you will see two tabs, "One-Time Donation" and "Recurring Donation", click on Recurring Donation.')),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},'If you haven\'t created a recurring donation before you will need to deposit tokens to your Stream Balance. Choose a token to deposit from the drop down menu "Select a Token". Eligible tokens to deposit currently are: DAI, USDC, ETH, GIV, OP. Once you have selected a token, enter the amount you would like to deposit.')),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"To choose how much tokens you want to donate monthly, you can use the slider bar to adjust by how much of your tokens that you're depositing that you wish to donate monthly. You'll see on the page an estimation of how many months your recurring donation will last until you need to top-up your Stream Balance.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"You can also optionally donate a percent of your recurring donation to Giveth, this will create a separate recurring donation to the ",(0,a.kt)("a",{parentName:"p",href:"https://giveth.io/project/the-giveth-community-of-makers"},"Giveth project")," that supports Giveth's running costs.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click DONATE, you will get a confirmation screen that outlines how much you're depositing and the details of your donation to the project and also the details of the donation to Giveth if you chose to donate a percent of your recurring donation. If everything looks good, click Confirm and you will be prompted to sign two transactions in your wallet. The first one is to approve the Superfluid contracts to use your tokens, the second is to deposit your tokens and create the recurring donations. Congratulations, you're done!"))),(0,a.kt)("h4",{id:"watch-this-video-to-see-how-to-create-a-recurring-donation"},"Watch this video to see how to create a recurring donation"),(0,a.kt)("div",{class:"react-player"},(0,a.kt)(i.Z,{playing:!0,light:"/video/createRecurringDonation_thumbnail.png",controls:!0,url:"/video/createRecurringDonation.mp4",width:"900px",height:"506px",mdxType:"ReactPlayer"})),(0,a.kt)("h4",{id:"donating-with-an-existing-stream-balance"},"Donating with an existing Stream Balance"),(0,a.kt)("p",null,"If you're creating a recurring donation with an existing Stream Balance, you can skip the deposit step and go straight to choosing how much you want to donate monthly. The amount you can donate monthly is limited by the amount you're donating to other projects using the same Stream Balance."),(0,a.kt)("p",null," You cannot create a recurring donation that would cause your Stream Balance to have ",(0,a.kt)("strong",{parentName:"p"},"less than one month worth of funds left"),", the slider bar will turn red and you will not be able to proceed. In this case you should consider Topping up your Stream Balance, which can be done directly from the donate page. You can also reduce the amount you are donating to other projects with the same Stream Balance, allowing more to be donated to a given project. Learn more below in the ",(0,a.kt)("a",{parentName:"p",href:"#managing-stream-balances"},"Managing Stream Balances")," section."),(0,a.kt)("h3",{id:"managing-a-recurring-donation"},"Managing a recurring donation"),(0,a.kt)("h4",{id:"modifying"},"Modifying"),(0,a.kt)("p",null,"You can modify your recurring donation to a project in two ways:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Visting the donate page of the project and selecting the same token you're already donating reccuringly"),(0,a.kt)("li",{parentName:"ul"},'Visiting the Recurring Donation tab on the "My Donations" page in the Giveth DApp')),(0,a.kt)("p",null,"To modify from the donate page you will be able to increase or decrease the amount you're donating monthly, the same limitations apply as with donating with an existing Stream Balance, you won't be able to increase the amount if it would cause your Stream Balance to have less than one month worth of funds left."),(0,a.kt)("img",{alt:"recurring donation infographic",src:(0,r.Z)("img/recurringDonations/modifyDonatePage.png")}),(0,a.kt)("p",null,'From the Recurring Donation tab on the "My Donations" page you can see the details of all the recurring donations you have created in a table. Clicking on the actions menu for a specific recurring donation will present you with two options: "Modify" and "End". Modifying will give you the same options as above, increasing or decreasing the monthly amount. Ending a recurring donation will stop the stream and the project will no longer receive funds, thus reducing the rate at which your Stream balance decreases.'),(0,a.kt)("img",{alt:"modify button in recurring donation table",src:(0,r.Z)("img/recurringDonations/modifyButton.png")}),(0,a.kt)("h4",{id:"ending"},"Ending"),(0,a.kt)("p",null,'Recurring donations end in two ways: manually by the donor from the Recurring Donation tab on the "My Donations" page or automatically when the Stream Balance runs out of funds.'),(0,a.kt)("p",null,'To end a recurring donation from the Recurring Donation tab on the "My Donations" page, click on the actions menu for the recurring donation you want to end and select "End". You\'ll need to sign a transaction in your wallet to confirm the end of the recurring donation. When a recurring donation ends it will show up on the project\'s donation tab as "Finalized" under the amount column. There will also be a record of the total amount donated and the USD value of the recurring donation.'),(0,a.kt)("p",null,'From the the Recurring Donation tab on the "My Donations" page you can see all the recurring donations you have made. There\'s two possible actions for an "Ended" recurring donation: Start a new recurring donation or "Archive". Archiving a recurring donation will hide it from the "My Donations" table, you can click a toggle at the top of the table if you wish to see your archived recurring donations.'),(0,a.kt)("img",{alt:"ending a recurring donation",src:(0,r.Z)("img/recurringDonations/endedDonationButton.png")}),(0,a.kt)("p",null,"Starting a new recurring donation will take you to the donate page of the project and allow you to create a new recurring donation to the same project."),(0,a.kt)("h3",{id:"managing-stream-balances"},"Managing Stream Balances"),(0,a.kt)("p",null,'Stream Balances can be managed from two different places, either on the donate page of a project or from  the "My Recurring Donations" page.'),(0,a.kt)("p",null,'To manage a Stream Balance from the donate page you can go to an eligible project\'s donate page, and when you select to donate from one of your existing Stream Balances you will see a link to "Top-up Stream Balance". Clicking this link will open a pop-up allowing you to Deposit or Withdraw from your Stream Balance.'),(0,a.kt)("img",{alt:"recurring donation top up button",src:(0,r.Z)("img/recurringDonations/topUpButton.png")}),(0,a.kt)("p",null,'From the Recurring Donation tab on the "My Donations" page there is a table with all the Stream Balances associated with your account. You will be able to see details such as the "Stream Rate" for each Stream Balance and how many projects you are supporting with it. Clicking the Deposit/Withdraw link will show you a pop-up allowing you to Deposit or Withdraw from your Stream Balance.'),(0,a.kt)("img",{alt:"action buttons on streamable token table",src:(0,r.Z)("img/recurringDonations/streamActionButton.png")}),(0,a.kt)("h4",{id:"depositing"},"Depositing"),(0,a.kt)("p",null,"Depositing tokens into your Stream Balance will require you hold the underlying tokens in your connected wallet. For example to deposit into your ETH Stream Balance you will need ETH in your wallet. Depositing tokens will increase the duration of any active recurring donations using that Stream Balance. To deposit you will need to sign two transactions, the first is to approve the Superfluid contracts to use your tokens, the second is to deposit your tokens. ETH however only requires 1 transaction, deposit."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"When depositing ETH you should be cautious not to deposit ALL of your balance, since you require those tokens to pay the network's gas fees. Always leave a prudent amount of the native tokens in your wallet so you don't get stuck.")),(0,a.kt)("h4",{id:"withdrawing"},"Withdrawing"),(0,a.kt)("p",null,"Withdrawing tokens from your Stream Balance into your wallet can be done at any time, but there are some considerations. Withdrawing tokens will decrease the duration of any active recurring donations using that Stream Balance. If you withdraw a large portion of your tokens from a Stream Balance, recurring donations using that Stream Balance may stop unexpectedly. To withdraw you will need to sign a transaction in your wallet to initiate the withdrawal."),(0,a.kt)("p",null,"If you're withdrawing from your Stream Balance while it has active recurring donations you're available balance to withdraw will be slightly less than your actual balance. This is because technically your Stream Balance is decreasing by the second making it hard to calculate the exact amount you can withdraw, a small buffer is added worth about 60 seconds of your current stream rate."),(0,a.kt)("p",null,"To prevent any anomalies it's highly recommended to end any recurring donations using that Stream Balance before withdrawing all of your tokens."),(0,a.kt)("h2",{id:"project-owners"},"Project Owners"),(0,a.kt)("h3",{id:"making-your-project-eligible"},"Making your project eligible"),(0,a.kt)("p",null,"To allow donors to create recurring donations to your project ",(0,a.kt)("strong",{parentName:"p"},"you will need to have added a recipient address on the Optimism network"),". After that your project will need to integrate with Allo Protocol by creating an anchor contract, this contract will receive the streamed funds from donors and allow you to withdraw them to your recipient address."),(0,a.kt)("p",null,"Allo Protocol is a system of smart contracts deployed and used primarily by Gitcoin, you can ",(0,a.kt)("a",{parentName:"p",href:"https://docs.allo.gitcoin.co/"},"find out more about it here"),". "),(0,a.kt)("h4",{id:"deploying-an-anchor-contract"},"Deploying an anchor contract"),(0,a.kt)("p",null,"DO NOT PANIC! This step is pretty easy and can be done in two ways: "),(0,a.kt)("p",null,"The first way can be done by the project owner, from the create project page (or edit project page for an existing project). Scrolling down to the field for your Optimism recipeint address, below that there is a toggle to enable recurring donations. Switch this toggle to on and when you go to publish your project a transaction will be generated to deploy your anchor contract, sign the transaction and that's it! "),(0,a.kt)("img",{alt:"toggle creation of anchor contract",src:(0,r.Z)("img/recurringDonations/alloButton.png")}),(0,a.kt)("p",null,"The second way can be done by the donor, if you have already added an Optimism recipient address to your project then on your first recurring donation, when a donor creates a recurring donation to your project, they will be prompted to deploy an anchor contract for your project. The donor signs a transaction, the contract is deployed for your project and that's it!"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Once you've deployed an anchor contract for your project you will not be able to disable receiving funds on Optimism, however you can still change your recipient address at any time.")),(0,a.kt)("h3",{id:"claiming-your-funds"},"Claiming your funds"),(0,a.kt)("p",null,'When a donor creates a recurring donation to your project, the funds will be streamed to your anchor contract. You can claim these funds at any time by visiting the "My Projects" page in the Giveth DApp. Find the project you wish to claim your funds from and click on the "Actions" drop-down menu. '),(0,a.kt)("img",{alt:"claim recurring donations button",src:(0,r.Z)("img/recurringDonations/claimButton.png")}),(0,a.kt)("p",null,'Click on "Claim Recurring Donations" and you will be shown a pop-up with a list of all the available tokens you can claim. Click on the claim button next to each corresponding token and you will be prompted to sign a transaction in your wallet to claim the funds. The tokens will be sent to the recipient address on Optimism that you have set.'),(0,a.kt)("p",null,"If you have multiple tokens to claim you will have to do them one by one, sorry about that, we're working on it."),(0,a.kt)("h2",{id:"quadratic-funding-and-givbacks-eligiblity"},"Quadratic Funding and GIVbacks Eligiblity"),(0,a.kt)("p",null,"Recurring Donations made to eligible projects during Quadratif Funding rounds will be matched! Only the value of the donations made between the start date and the end date of the round will be matched. To learn more about Quadratic Funding, ",(0,a.kt)("a",{parentName:"p",href:"/quadraticFunding"},"read this article"),"."),(0,a.kt)("p",null,"However, at time of writing, recurring donations will ",(0,a.kt)("strong",{parentName:"p"},"not be eligible to reward GIVbacks")," to donors. We are working on a solution to this and hope to have it implemented soon. Sorry about that."))}g.isMDXComponent=!0}}]);
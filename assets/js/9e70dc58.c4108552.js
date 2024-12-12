"use strict";(self.webpackChunkgiveth_docs=self.webpackChunkgiveth_docs||[]).push([[9564],{9806:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>l});const r=JSON.parse('{"id":"regenFarmContracts","title":"Regen Farm Smart Contract Guide","description":"GIVeconomy is a collection of audited smart contracts which work together to provide capabilities, including: token streaming, airdropping, and various types of farming. Contracts and scripts can be found at the Giveth giv-token-contracts repository.","source":"@site/dapps/regenFarmContracts.md","sourceDirName":".","slug":"/dapps/regenFarmContracts","permalink":"/dapps/regenFarmContracts","draft":false,"unlisted":false,"editUrl":"https://github.com/giveth/giveth-docs/edit/master/dapps/regenFarmContracts.md","tags":[],"version":"current","lastUpdatedBy":"Amin Latifi","lastUpdatedAt":1652119118000,"frontMatter":{"id":"regenFarmContracts","title":"Regen Farm Smart Contract Guide","slug":"dapps/regenFarmContracts"}}');var i=n(4848),s=n(8453);const o={id:"regenFarmContracts",title:"Regen Farm Smart Contract Guide",slug:"dapps/regenFarmContracts"},a=void 0,d={},l=[{value:"Contracts",id:"contracts",level:2},{value:"Streaming",id:"streaming",level:3},{value:"Air Drop",id:"air-drop",level:3},{value:"Farming",id:"farming",level:3},{value:"Deployment",id:"deployment",level:2}];function c(e){const t={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:["GIVeconomy is a collection of audited smart contracts which work together to provide capabilities, including: token streaming, airdropping, and various types of farming. Contracts and scripts can be found at the ",(0,i.jsx)(t.strong,{children:"Giveth"})," ",(0,i.jsx)(t.a,{href:"https://github.com/Giveth/giv-token-contracts",children:"giv-token-contracts"})," repository."]}),"\n",(0,i.jsx)(t.h2,{id:"contracts",children:"Contracts"}),"\n",(0,i.jsx)(t.h3,{id:"streaming",children:"Streaming"}),"\n",(0,i.jsxs)(t.p,{children:["The streaming allows any rewards (e.g. airdrop, liquidity mining reward, ...) to be released gradually across a given time span instead of the whole sum moving immediately to the end user's wallet. To achieve that, every reward payment to users will be an ",(0,i.jsx)(t.code,{children:"allocate"})," on stream instead of a traditional ",(0,i.jsx)(t.code,{children:"transfer/safeTransfer"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["Each instance of a ",(0,i.jsx)(t.strong,{children:"Stream"})," is deployed with these configuration parameters:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Total Tokens:"})," Total amount of tokens that will be distributed over the stream period"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Start Time:"})," The time stamp that the stream begins"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Duration:"})," Total duration of the stream. At the end of stream 100% of tokens are released and can be claimed by recipients."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Cliff Period:"})," The length of an initial period after the start of the stream. During this period, only the intitial percentage of the stream can be claimed and not more."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Initial Percentage:"})," The percentage of immediately claimable rewards during the ",(0,i.jsx)(t.em,{children:"Cliff Period"})]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.strong,{children:"TokenDistro"})," is the smart contract which has implemented the streaming feature.  Any eligible smart contract or eligible user can call ",(0,i.jsx)(t.code,{children:"allocate"})," method on the ",(0,i.jsx)(t.strong,{children:"TokenDistro"})," to add to the recipient's balance of their stream. Eligible contracts or users who can call ",(0,i.jsx)(t.code,{children:"allocate"})," should have the ",(0,i.jsx)(t.strong,{children:"DISTRIBUTOR"})," role for the ",(0,i.jsx)(t.strong,{children:"TokenDistro"})," smart contract. They are called ",(0,i.jsx)(t.strong,{children:"Distributors"}),". Each Distributor has a balance that they can distribute. Therefore, on each allocation the allocated amount sent is decreased from the distributor's balance and is added to recipient's balance."]}),"\n",(0,i.jsx)(t.p,{children:"A percentage of the allocated amount is claimable immediately, and the remaining percent goes into increasing recipient's stream flowrate. The flowrate is an expression of how many tokens become claimable from their stream over a weekly period. Over time, a greater percentage of the recipient's balance will be claimable immediately following the continued expansion of the stream."}),"\n",(0,i.jsx)(t.h3,{id:"air-drop",children:"Air Drop"}),"\n",(0,i.jsxs)(t.p,{children:["The initial token distribution can be done by the ",(0,i.jsx)(t.strong,{children:"MerkleDistro"})," smart contract. It utilizes ",(0,i.jsx)(t.em,{children:"Merkle Tree"})," theory and each eligible recipient should provide its own unique proof data to claim their air drop. The air drop value actually will be allocated by calling ",(0,i.jsx)(t.code,{children:"allocate"})," on ",(0,i.jsx)(t.strong,{children:"TokenDistro"})," and will be added to user's stream balance."]}),"\n",(0,i.jsxs)(t.p,{children:["Each instance of ",(0,i.jsx)(t.strong,{children:"MerkleDistro"})," is deployed with these configuration parameters:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Merkle Tree Root:"})," The key of the merkle tree root (read blow)."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Token Distro Address:"})," The address of the deployed TokenDistro instance."]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["In order to deploy the ",(0,i.jsx)(t.strong,{children:"MerkleDistro"})," smart contract, the deployer must generate a merkle tree. The value of root will be used on the smart contract at deployment time, and the whole tree data is needed to obtain each user unique path to root. In ",(0,i.jsx)(t.a,{href:"https://github.com/Giveth/giv-token-contracts",children:"giv-token-contracts"})," repo, there is a script to generate merkle tree data."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"ts-node scripts/generate-merkle-root.ts --input <airdrop json file path> --output <output file path>\n"})}),"\n",(0,i.jsxs)(t.p,{children:["A JSON format of the airdrop data is not easy to generate for everyone, an ",(0,i.jsx)(t.code,{children:"airdrop json file"})," can be generated by a separate script from a CSV file, which is a more convenient format."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"ts-node scripts/csv2json.ts <airdrop csv list path> <airdrop json file path>\n"})}),"\n",(0,i.jsx)(t.h3,{id:"farming",children:"Farming"}),"\n",(0,i.jsxs)(t.p,{children:["Giveth uses the ",(0,i.jsx)(t.strong,{children:"UnipoolTokenDistro"}),", a derivative of the ",(0,i.jsx)(t.em,{children:"Unipool"})," smart contract, for farming purposes. The difference is that ",(0,i.jsx)(t.strong,{children:"UnipoolTokenDistro"})," pays stakers' rewards by calling ",(0,i.jsx)(t.code,{children:"allocate"})," method on the ",(0,i.jsx)(t.em,{children:"TokenDistro(stream)"})," instead of transferring real tokens to the recipient's address."]}),"\n",(0,i.jsxs)(t.p,{children:["Generally, the Unipool contract rewards stakers based on the liquidity they have staked. The liquidity token is named ",(0,i.jsx)(t.code,{children:"uni"})," deposited by stakers, and can be any token such as native token (e.g. GIV, FOX, ...)  or a LP token obtained by staking in a pool (e.g. UniswapV2, SushiSwap, HoneySwap, ...)."]}),"\n",(0,i.jsxs)(t.p,{children:["The Unipool reward amount is set by calling the ",(0,i.jsx)(t.code,{children:"notifyRewardAmount(uint256 reward)"})," method by the ",(0,i.jsx)(t.strong,{children:"rewardDistribution"}),". ",(0,i.jsx)(t.strong,{children:"rewardDistribution"})," can be set by the ",(0,i.jsx)(t.strong,{children:"owner"})," role and in the deployment script, deployer set its own address as ",(0,i.jsx)(t.strong,{children:"rewardDistribution"})," by default. Each time this method is called, the Unipool will set to disperse rewards in the ",(0,i.jsx)(t.code,{children:"duration"})," length period to stakers. Therefore, the reward distributor need to regularly call ",(0,i.jsx)(t.code,{children:"notifyRewardAmount"})," to keep a positive reward rate, and adjust the reward rate as it can be different on each round.\nEach instance of the ",(0,i.jsx)(t.strong,{children:"UnipoolTokenDistro"})," is deployed with these configuration parameters:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"TokenDistro Address:"})," The address of deployed TokenDistro instance."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Uni Token Address:"})," The liquidity token address"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Duration:"})," Each rewarding program round length"]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"deployment",children:"Deployment"}),"\n",(0,i.jsxs)(t.p,{children:["Deployment of a stream with farms and an airdrop is complicated and would be error prone to be done manually. Therefore, ",(0,i.jsx)(t.a,{href:"https://github.com/Giveth/giv-token-contracts",children:"giv-token-contracts"})," has scripts to make it easier. Most of these scripts are tailored for GIVeconomy use cases."]}),"\n",(0,i.jsxs)(t.p,{children:["However, a script is ready for DAOs to deploy their own stream (tokenDistro) and farming programs (Unipools). The script can be found in the path ",(0,i.jsx)(t.code,{children:"deployments/regenFarms/1_regenFarm.ts"}),". The script reads the deployment configuration from ",(0,i.jsx)(t.code,{children:"deployments/regenFarms/config.ts"})," file. The configuration format in ",(0,i.jsx)(t.code,{children:"config.ts"})," is as below:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:'const config: IRegenConfig = {\n    alreadyDeployedTokenDistroAddress: "",\n    newTokenDistroParams: {\n        startTime: <start time timestamp>\n        cliffPeriod: <cliff time duration seconds>\n        duration: <duration seconds>\n        initialPercentage: <percentage number, like 20_00>, // two decimals of precision, 20_00 means 20%\n        tokenAddress: <Reward token address>\n        totalTokens: <Total number of tokens to distribute limit>, // In ether format\n        cancelable: <boolean>, // whether admins can cancel an allocation\n    },\n    unipools: {\n        <Key>: {\n            uniTokenAddress: <unit token address>,\n            lmDuration: <unipool reward round duration seconds>\n            rewardAmount: <Unipool balance on token distro>, // Number of tokens it can allocate\n        },\n        ...\n    },\n};\n'})}),"\n",(0,i.jsx)(t.p,{children:"To deploy via script these environmental variables should be set:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"INFURA_PROJECT_ID:"})," When the network is not xDai (Gnosis-Chain)"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"PRIVATE_KEY:"})," The private key of deployer account, used when network is not xDAI (Gnosis-Chain)"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"PRIVATE_KEY_XDAI:"})," The private key of deployer account, used when network is xDAI (Gnosis-Chain)"]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"The script can be run by this command"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"HARDHAT_NETWORK=<network e.g. xDAI, mainnet, kovan> ts-node deployments/regenFarms/1_regenFarm.ts\n"})})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>a});var r=n(6540);const i={},s=r.createContext(i);function o(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);
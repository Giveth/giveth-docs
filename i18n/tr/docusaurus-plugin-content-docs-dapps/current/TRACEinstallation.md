---
id: TRACEinstallation
title: Installing Giveth TRACE for Local Development
slug: dapps/TRACEinstallation
---
import useBaseUrl from '@docusaurus/useBaseUrl'
import NotTranslatedMessage from '../../_notTranslatedTR.mdx'
import TraceDeprecated from './_traceDeprecatedTR.mdx'

<TraceDeprecated />
<NotTranslatedMessage />


 This is a comprehensive guide that will walk through new contributors on how to run Giveth TRACE locally. We'll be dealing with 2 repos found in the Giveth Github: the [**`giveth-dapp`**](https://github.com/Giveth/giveth-dapp) for the front-end and [**`feathers-giveth`**](https://github.com/Giveth/feathers-giveth) for smart contract interfacing and the back-end database.

## Feathers Installation
<img alt='Feathers Installation Header' src={useBaseUrl('img/content/trace/feathers-header.png')} />

#### Packages and Applications Needed:
- yarn
- NodeJS v10.24.0
- MongoDB
- Redis
- MetaMask


#### Linux
  If your operating system is any distrubution of Linux, you can use the all-in-one installation scripts, special thanks to Dapp contributor Jurek Brisbane, available [here](https://github.com/Giveth/giveth-dapp/files/3674808/givethBuildStartScripts_2019-09-29.zip) along with a Youtube [video](https://www.youtube.com/watch?v=rzLhxxAz73k&feature=youtu.be).


#### Any OS
  1. Click **Star** on this repo near the top-right corner of this web page (if you want to).
  2. Join our [Contributors Discord](https://discord.giveth.io) if you haven't already.
  3. Fork this repo by clicking **Fork** button in top-right corner of this web page. Continue to follow instruction steps from your own feathers-giveth repo.
  5. The rest of these steps must be done from your machine's command line. Clone your own "feathers-giveth" repo. Copy the link from the "Clone or download" button near the top right of this repo's home page.
      ```bash
      git clone git@github.com:Giveth/feathers-giveth.git
      ```
  6. Change directories to feathers-giveth:
      ```bash
      cd feathers-giveth/
      ```
  5. Make sure you have [NodeJS](https://nodejs.org/) (v10.24.0), [yarn](https://www.yarnpkg.com/) (v0.27.5 or higher), and npm (5.4.1 or higher) installed.
  6. Install dependencies from within feathers-giveth directory:
      ```bash
      yarn install
      ```
  7. Install Mongo (we recommend installing via [Brew](https://treehouse.github.io/installation-guides/mac/mongo-mac.html)).
  8. Run Mongo in a terminal window `mongod` or in the background `mongod --fork --syslog`.
  9. Install Redis (we recommend install via Brew `brew install redis`).
  10. Run Redis in terminal window `redis-server` or in the background `redis-server --daemonize yes`.
  11. (optionally) Install [IPFS](https://ipfs.io/docs/install/) (we recommend installing via [Brew](https://brew.sh/)).
     **If you don't install ipfs, image uploading will be affected. You can update the config `ipfsGateway` value to use a public ipfs gateway ex. [https://ipfs.io/ipfs/](https://ipfs.io/ipfs/), however your uploads will be removed at some point.*

### Run server
The Feathers server will need to connect to an Ethereum node via WebSocket. Typically this will be a local TestRPC instance.
The configuration param `blockchain.nodeUrl` is used to establish a connection. The default nodeUrl is `ws://localhost:8545`

1. We need to deploy any contract to that we intend to call. *NOTE:* The following cmd will clear the `data` dir, thus starting off in a clean state.

   ```bash
   yarn deploy-local
   ```

   After deploying local, make sure to copy-paste the MiniMeToken address in default.json.

2. We provide an easy way to start the bridge & 2 ganache-cli instances. *VERY IMPORTANT:* this command enables Home Ganache and Foreign Ganache networks; if you are using MetaMask you will need to **add a Custom RPC** to your networks config; `http://localhost:8546` will be Foreign Ganache, and Home Ganache is normally added by default which is `http://localhost:8545` if needed.

    ```bash
    yarn start:networks
    ```
3. Since the bridge & ganache-cli is now running, open a new terminal window, and navigate to the same feathers-giveth directory.

4. Optionally open a new terminal window and start the ipfs daemon.

   ```bash
   ipfs daemon
   ```
5. Run db migration files (if this the first time you want to start application, it's not needed to run migrations).
   ```bash
    ./node_modules/.bin/migrate-mongo up
   ```
5. Start your app.

    ```bash
    yarn start
    ```

### Kill Ganache
If you run into errors like wallet balance not loading, it is very likely that Ganache is stuck.
`netstat -vanp tcp | grep 8545`
Find the process that is listening on `*.8545` and `127.0.0.1.8545`, and kill it with `kill -9 PID` (which is in the last colomn).

### IPFS Support
If the `ipfsApi` is a valid ipfs node that we can connect to, we will pin every ipfs hash that is stored in feathers. We currently do not remove any orphaned (hashes with no references in feathers) ipfs hashs. In the future we will provide a script that you can run as a cronjob to unpin any orphaned hashes.

### Video Walkthrough
Video tutorial walkthrough here: https://tinyurl.com/y9lx6jrl


### Scripts

The `feathers-giveth/scripts` directory contains a few scripts to help development.

* `deploy.js` - deploys a new vault & liquidPledging contract

* `getState.js` - prints the current state of the deployed vault & liquidPledging contracts

* `confirm.js` - confirms any payments that are pending in the vault

* `makeUserAdmin.js` - make a user admin

### Testing

Simply run `yarn test`, and all your tests in the `/src` directory will be run.
It's included some integration tests, so for running tests, you need to run a mongodb in your local system (on port 27017).

### Debugging

You can control the logging level with the `LOG_LEVEL` env variable. Available levels can be found at: https://github.com/winstonjs/winston/tree/2.x#logging-levels

To enable debug logging simply start the server with `LOG_LEVEL=debug yarn start`.

## Production

We use docker-compose for orchestration of our docker containers in our production servers.
* make Make sure you have a file named `production.json` in config folder.
* Install docker and docker-compose on your server.
* run this command: `docker-compose -f docker-compose-production.yml up -d`.

PS: It's good to see Github Actions config(`./.github/workflows/CI-CD.yml`) to better understand the deployment structure.

## RSK

1. You will need to download the [rsk node](https://github.com/rsksmart/rskj/wiki/Install-RskJ-and-join-the-RSK-Orchid-Mainnet-Beta). After installing, you will run the node w/ the `regtest` network for local development.

  ```
  java -jar rskj-core-0.5.2-ORCHID-all.jar co.rsk.Start --regtest
  ```
  or
  ```
  java -Drsk.conf.file=rsk.conf -jar rskj-core-0.5.2-ORCHID-all.jar co.rsk.Start
  ```

2. We need to deploy any contracts that we intend to call. *NOTE:* You will also need to ensure that your rsk node is in a clean state (reset) for the configured addresses to be correct.

   ```
   npm run deploy-local:rsk
   ```

3. Optionally open a new terminal window and start the ipfs daemon.

   ```
   ipfs daemon
   ```

4. Start your app.

    ```
    yarn start:rsk
    ```

## Audit Log
The Audit log system logs every Create, Update, Patch and
Remove on **Campaigns**, **Traces**, **Events**, **Users**,
**PledgeAdmins**, **Communities**, **Donations**.
For enabling audit log locally you should change `enableAuditLog`
in config to `true`, then
* cd elk
* docker-compose up

You can see the logs after logging in `localhost:5601` with user:`elastic`, password: `changeme`.

### Usage

Each of these services are available via rRest or WebSocket:

```
campaigns
communities
donations
donationsHistory
traces
uploads
users
emails
homePaymentsTransactions
subscriptions
```
If the server is using default configurations, you can see data for any of these services through your web browser at `http://localhost:3030/SERVICE_NAME`

PS: For accessing all features like creating `communities` and `campaigns` it's suggested to
make `isAdmin` field true, for your user in you local MongoDb.

## Giveth DApp (Giveth TRACE front-end) Installation
<img alt='Giveth-DApp Installation Header' src={useBaseUrl('img/content/trace/giveth-dapp-header.png')} />

### Getting Started
In the following sections you will learn all you need to know to run the DApp locally and to start contributing. All the steps are also described in this amazing [Video Tutorial Walkthrough](https://tinyurl.com/y9lx6jrl) by Oz.

#### Prerequisites
- NodeJS v10 LTS.
- yarn (v1.22.10 or higher)
- [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

### Install
1. Click **Star** on the [`giveth-dapp`](https://github.com/Giveth/giveth-dapp) repo near the top-right corner of this web page (if you want to).
2. Join us on [Element](http://join.giveth.io) or [Discord](https://discord.gg/Uq2TaXP9bC) if you haven't already.
3. Fork this repo by clicking **Fork** button in top-right corner of this web page. Continue to follow instruction steps from your own giveth-dapp repo.
4. Clone your own "giveth-dapp" repo. Copy the link from the "Clone or download" button near the top right of this repo's home page.
5. The rest of these steps must be done from your machine's command line. See the [OSX and Linux](#for-osx-and-linux) or [Windows](#for-windows) section to continue.

#### <a id='for-osx-and-linux'>OSX and Linux</a>
If your operative system is any distribution of Linux you can use the all-in-one installation scripts, special thanks to Dapp contributor Jurek Brisbane, available [here](https://github.com/Giveth/giveth-dapp/files/3674808/givethBuildStartScripts_2019-09-29.zip) along with a Youtube [video](https://www.youtube.com/watch?v=rzLhxxAz73k&feature=youtu.be), otherwise try the following:

1. From the desired directory you wish to copy the "giveth-dapp" folder with source files to.
    ```bash
    git clone git@github.com:Giveth/giveth-dapp.git
    ```
   NOTE: Please use `develop` branch for contributing.
    ```bash
    git clone -b develop git@github.com:Giveth/giveth-dapp.git
    ```
2. Change directories to giveth-dapp:
    ```bash
    cd giveth-dapp
    ```
3. Make sure you have [NodeJS](https://nodejs.org/) (v10) and [yarn](https://yarnpkg.com/) (v1.22.10 or higher) installed.
4. Install dependencies from within giveth-dapp directory:
    ```bash
    yarn install
    ```
5. That is it - you are now ready to run the giveth-dapp! Head to the [Run DApp](#run) section for further instructions.

#### <a id='for-windows'>Windows</a>
1. Install the latest version of Python from this [Link](https://www.python.org/downloads/). (Make sure Python is added to $PATH.)
2. Install Microsoft Visual Studio 2017 (double-check the version) from this [link](https://download.visualstudio.microsoft.com/download/pr/3e542575-929e-4297-b6c6-bef34d0ee648/639c868e1219c651793aff537a1d3b77/vs_buildtools.exe). Giveth-Dapp needs the node-gyp module, and node-gyp needs VS C++ 2017 Build Tools to be installed.
3. After downloading, install the packages marked from this [image](https://cdn.discordapp.com/attachments/849682448102457374/850480734291623946/unknown.png).
4. Then run command below in command prompt
   ```bash
   npm config set msvs_version 2017
   ```
5. After installing the above, you should install NodeJS version 10 [LTS](https://nodejs.org/dist/latest-v10.x/) (it is better to be v10.24.1 LTS).
6. Download and run the node-v10.24.1-x64.msi installer, then continue through the installation as normal. Be sure to have the "Enable in PATH" option enabled before installing.
7. Open the command line in administrator mode by right-clicking on the cmd.exe application and selecting "Run as administrator"
8. In the administrator command prompt, change to the directory where you want to store this repository.
   ```bash
   cd C:\some\directory\for\repositories
   ```
9. Double-check the node version with CMD command:
   ```bash
   node -v
   ```
10. After that, install the latest version of Yarn.  Be careful not to install packages with NPM. If you have already tried "npm install", you should first delete "node modules" folder.
    ```bash
    yarn install
    ```
11. That is it - you are now ready to run the giveth-dapp!

### <a id='run'>Run</a>
1. The Giveth dapp will need to connect to a [feathers-giveth](https://github.com/Giveth/feathers-giveth) server. Follow the feathers-giveth readme instructions to install and run server before proceeding further. Alternatively, you could change the configuration to connect to the `develop` environment, see the [Configuration](#configuration) section.
2. Start the dapp.
    ```bash
    yarn start
    ```
3. Once the dapp is up in your browser, click "Sign In" from the main menu.
4. For testing locally, choose any of the wallet files found in the `giveth-dapp/keystores/` folder using the wallet password: `password`. **DO NOT USE THESE ON ANY MAINNET EVMs.**

5. Using the test token
   To use the test token you need to import the keystore.json you use for your account to MetaMask.
   After importing, click on 'Add token' > 'Custom token', and enter the MiniMe Token address that can be found when deploying the contracts
   (should be `0xe78A0F7E598Cc8b0Bb87894B0F60dD2a88d6a8Ab` by default but make sure to check).
   The token balance should show up automatically, and the token symbol is MMT.
   However, in the DApp the token symbol is referred to as ANT, b/c the DApp needs to be able to fetch a conversion rate.

NOTE:
When resetting feathers or redeploying the contracts, you need to remove the keystore from Metamask and follow this procedure again.

### Build
```bash
yarn run build
```

NOTE: due to some web3 libraries that are not transpiled from es6, we have to use our [giveth-react-scripts](https://github.com/Giveth/create-react-app/tree/master/packages/react-scripts) fork of react-scripts.

### <a id='configuration'>Configuration</a>
The DApp has several node environment variables which can be used to alter the DApp behaviour without changing the code. You can set them through `.env` or `.env.local` files in the DApp folder.

Variable name | Default Value | Description |
---|---|---|
PORT | 3010 | Port on which the DApp runs |
REACT_APP_ENVIRONMENT | 'localhost' | To which feathers environment should the DApp connect. By default it connects to localhost feathers. Allowed values are: `localhost`, `develop`, `release`, `alpha`, `mainnet`. See [Deployment Environments](#deploy-environments). |
REACT_APP_DECIMALS | 8 | How many decimal should be shown for cryptocurrency values. Note that the calculations are still done with 18 decimals. |
REACT_APP_FEATHERJS_CONNECTION_URL | Differs per REACT_APP_ENVIRONMENT | Overwrites the environment injected feathers connection URL. |
REACT_APP_NODE_CONNECTION_URL | Differs per REACT_APP_ENVIRONMENT | Overwrites the EVM node connection URL for making EVM transactions. |
REACT_APP_LIQUIDPLEDGING_ADDRESS | Differs per REACT_APP_ENVIRONMENT | Overwrites the Liquid Pledging contract address. |
REACT_APP_DAC_FACTORY_ADDRESS | Differs per REACT_APP_ENVIRONMENT | Overwrites the Communities contract address. |
REACT_APP_CAMPAIGN_FACTORY_ADDRESS | Differs per REACT_APP_ENVIRONMENT | Overwrites the Campaign Factory contract address. |
REACT_APP_MILESTONE_FACTORY_ADDRESS | Differs per REACT_APP_ENVIRONMENT | Overwrites the MilestoneFactory contract address. |
REACT_APP_TOKEN_ADDRESSES | Differs per REACT_APP_ENVIRONMENT | Overwrites the bridged token addresses. This is a JSON object string w/ token name: token address. |
REACT_APP_BLOCKEXPLORER | Differs per REACT_APP_ENVIRONMENT | Overwrites the block explorer base URL. The DApp assumes such blockexplorer api is `\<BLOCKEXPLORER\>/tx/\<TRANSACTION_HASH\>` |
REACT_APP_DEFAULT_GASPRICE | 10 | Overwrites the default gasPrice that is used if ethgasstation service is down. The value is in gwei. |
REACT_APP_ANALYTICS_KEY | "" | Overwrites `Segment` analytics key.

Example of `.env.local` file that makes the DApp run on port 8080, connects to the **develop** environment and uses custom blockexplorer:

```bash
PORT=8080
REACT_APP_ENVIRONMENT='develop'
REACT_APP_BLOCKEXPLORER='www.awesomeopensourceexplorer.io'
```

The rest of the configuration can be found in `configuration.js`

### Analytics
Segment Analytics can be enabled by setting REACT_APP_ANALYTICS_KEY.

### Query Strings
The milestone creation/proposal view now supports query string arguments!
The following arguments are available:

| Argument | Expected Values | Type |
|------------------|------------------------------------------------------------|--------|
| title | The title of the milestone | string |
| description | The description of the milestone | string |
| recipientAddress | The address of the recipient | string |
| reviewerAddress | The address of the reviewer | string |
| selectedFiatType | A valid fiat type (i.e. USD) | string |
| date | A valid milestone date string | string |
| token | A valid token symbol (i.e. DAI) | string |
| tokenAddress | A valid token address | string |
| maxAmount | A valid max amount of ETH or token | number |
| fiatAmount | A valid max amount of fiat (dependant on selectedFiatType) | number |
| isCapped | Determines whether the milestone should be capped | 0 or 1 (boolean) |
| requireReviewer | Determines whether the milestone should require a reviewer | 0 or 1 (boolean) |

### Local Development
At first you would like to run the DApp locally. When running `testrpc` locally in `deterministic` mode, you can use any of the keystores in the `giveth-dapp/keystores` as your wallet.
This will provide you access to the testrpc accounts for local development. Each keystore uses the same password: `password`. **DO NOT USE THESE ON ANY MAINNET EVMs**

The keystores are seeded with 10.000 ANT tokens for testing donations. To get started with testing donations,
make sure to add your account's keystore to MetaMask and swith MetaMask to Ganache. The donation modal should
then show the appropriate balance when donating in ANT tokens.

**NOTE**: If you get a nonce error in MetaMask or if the DApp fails to load with your MetaMask unlocked, it could be because MetaMask is confused. You should go to "settings" -> "Reset Account" in MetaMask in order to reset the nonce & cached account data.

### Development and PR Testing
1. The Giveth Dapp is auto deployed from the develop branch and is live on Rinkeby [develop.giveth.io](https://develop.giveth.io). All pull requests are autodeployed, and the PR preview will be generated upon submission. To learn how to access PR previews see [Development Process & Quality Assurance](https://wiki.giveth.io/documentation/DApp/product-development-testing/) on our wiki.
2. In order to use the DApp you will need to create account. If this is your first time, click "sign up" to create an account. If you already have a valid keychain file, use it to sign in.
3. You will need test ether on the Rinkeby network. Go to the "wallet" page to see your new address (0x..). Copy that address, and use the Faucet to get some: https://faucet.rinkeby.io/.


### <a id='deploy-environments'>Deployment Environments</a>
At Giveth, we are using the [gitflow](http://nvie.com/posts/a-successful-git-branching-model/) branching model to deploy to 4 different environments.

Name | Blockchain | Branch Deployed | Auto Deploy | Use |
-----|------------|-----------------|-------------|-----|
[mainnet](https://mainnet.giveth.io) | Ethereum Main Network | master | no | Main network deployment for now abandoned due to high transaction costs until sustainable solution is found.
[alpha](https://alpha.giveth.io)  | Rinkeby Test Network | master | no | Environment used as a production version until scalability is resolved.
[release](https://release.giveth.io) | Rinkeby Test Network | release | yes | Environment for release candidate quality control testing by non-devs.
[develop](https://develop.giveth.io) | Rinkeby Test Network | develop | yes | Development environment for integrating new features. Feature and pull request branches are also automatically deployed to this environment.

You can change the environment to which the DApp connects through the node environment variables. See the [Configuration](#Configuration) section for more details.

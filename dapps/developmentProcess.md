---
id: developmentProcess
title: Development Process
slug: dapps/developmentProcess
---
import TraceDeprecated from './_traceDeprecated.mdx'

<TraceDeprecated />

*This section details the Giveth TRACE development process, deployments, and how merging and testing is handled.*

## Development Planning, Sprints and Where to get Involved.
We run on a 2 week sprint cycle with weekly developer meetings to plan sprints and assess progress. You can checkout when the next one is on our [Google Calendar](https://calendar.google.com/calendar/embed?src=givethdotio%40gmail.com) and you can also reach out on the [Giveth Discord](https://discord.giveth.io) to `@moenick` the Giveth TRACE project manager. You can find the current [Giveth TRACE repository on Github](https://github.com/Giveth/giveth-dapp).

## Deployments and Branch Organisation
Giveth TRACE has transitioned from passive to active development for post-beta release coming soon. There are two deployments currently used for the development process.

Name | Blockchain | Branch Deployed | Auto Deploy | Use |
-----|------------|-----------------|-------------|-----|
[beta](https://trace.giveth.io) | Mainnet/Rinkeby | master | no | Bridged deployment; Rinkeby for internal contract interactions, Mainnet for sending and receiving real funds.
[develop](https://develop.giveth.io) | Ropsten Test Network | develop | yes | Development environment for integrating and testing new features. Feature and pull request branches are deployed to this environment.

The two branches below  are being used in the gitflow.

Name | Description |
-----|------------|
master | The master branch tracks released code only. Commits are made to master around the middle of each month so as not to interfere with payment processes happening near the end and beginning of these months.
develop | Deployments made to develop are from local builds and include new features and bug fixes.

## Usage of Zenhub Boards
Currently we use the Zenhub Boards extension for Github to track progress on features and fixes. You can get the [Zenhub extension here](https://www.zenhub.com/extension).

The Current Github issue flow is as follows:

Name | Usage |
-----|------------|
New Issues | Create a new Issue for a new feature request or to report a bug. Tag a developer or `@moenick` to make sure it get's noticed. Use labels to add context to your issue.
Icebox | Features and Ideas to consider for future development, to be assesed by the Giveth Team only when developer bandwidth allows.
Product Backlog | Issues that need to be dealt with or approved new features for development. These will be queued into the next sprint progressively.
Epics | Large tasks which have been broken down into smaller issues.
Needs Clarification | Issues which require more clarification from the issue creator in order to move forward.
Sprint Backlog | Issues being worked on in the current sprint.
Bugs & Ops | Urgent tasks that need to be prioritized. Bandwidth is set aside in the sprint schedule for developers to address any issues here.
In Progress | Issues that have been picked up by a dev for the current sprint.
Code Review | Devs should review code referenced in these issues for quality assurance and fixing potential issues before moving to user testing.
UAT (User Acceptance Testing) | Features or Fixes ready to be user tested.
Done | Issues ready to be merged to `master` according to the commit cycle.


### Making a Pull Request
Before making new Pull Request, make sure that your code does not have any linter issues and can be deployed. Only PRs that successfully deploy and don't have any merge conflicts will be merged. You can also easily check the deploy preview on Github Netlify autodeploy integration.
![Autodeploy Integration](https://d33wubrfki0l68.cloudfront.net/cfa6124f4e0bf556de850f40e97c6b4cc66231f9/d42f0/images/product-development/deploy-preview.png)
**Deployment preview.** Each pull request to the DApp repository has a Netlify deploy preview. You can access it at the bottom of the Conversation tab after clicking **Show all checks** button and **Details**.

## Integration & Testing
Integration of new features is done by the **development team** after a DApp dev meeting where PRs are reviewed. After the PRs are reviewed and fixed, they are merged to the develop branch. Testing of the new features is done in the [`develop`](https://develop.giveth.io) environment to ensure the features do what they say and work well with the rest of the DApp.

## Quality Assurance Testing
After new features are integrated and dev tested in the [`develop`](https://develop.giveth.io) environment, developers will ping testers with requests or updates in the [Giveth TRACE Dev Channel](https://discord.gg/79uUbyVCtE) on Discord. Testing should not be done by developers and is open to anyone who wishes to contribute.

## Production Deployment
Only once all the newly introduced bugs are removed in the `develop` branch it can be merged to master and pushed to production. It is done manually by DApp devteam (by `@aminlatifi` and `@MohammadPCh`).

**To deploy the newest version of feathers-giveth**
```
$ ssh user@feathers.alpha.giveth.io

$ cd /home/deploy/feathers-giveth/
$ sudo -u deploy bash

$ git pull

$ yarn install --pure-lockfile
$ yarn serve
```

Next, check the feathers deploy status
```
$ pm2 logs
```

If the logs are clear, the last step is to deploy the latest master branch commit on [Netlify](http://netlify.com/) and locking the deploy.

## Back-end Webservices Documentation
If you're a new contributor and would like more in depth technical documentation on all the Webservices leveraged from the back-end (feathers-giveth) to the front-end (giveth-dapp), check out our pages on **Swagger** for both Production and Staging deployments:

[feathers-giveth Production](https://feathers.beta.giveth.io/docs/?url=/docs#/)  
[feathers-giveth Staging](https://feathers.develop.giveth.io/docs)


## FAQ

 **What is the definition of a feature?**

A Feature is any non-trivial improvement (less than 10 lines of code). Most features have issue in the corresponding Github Repository.

 **What about fixes?**

 Big non-critical fixes are treated just like any other feature. If a fix is time critical, it is created as new branch with `hotfix/` prefix as a fork from the `master` branch. Such hotfix is tested at minimum by 2 people from dev team before being merged to `master`and `develop` branches.

 **Where do we communicate what needs testing?**

The QA testing is announced in the `Giveth-1 Dev` channel on [Discord](https://discord.giveth.io).

**How do we prioritize when tests fail / bug fixes?**

Bug fixes are done ad-hoc as soon as discovered during the testing process. The bugs can be tackled by the DApp dev team or external contributors can be asked to help. Bug fixing has a priority over new development.

**Who does deployments and how are they deployed?**

The `develop` branch is autodeployed to its environment. The `master` branch is deployed by the dev team (`@aminlatifi`, `@RamRamez` and `@MohammadPCh`) once there are no new known bugs in the `develop` branch. The process is manual and there is a deployment procedure.

**What is the release cycle frequency?**

 There is new release every 2 weeks as depicted in the [product development cycle gant chart](#product-development-testing-fig-release).

---
id: testing-guidelines
title: Testing Guidelines
---


This guide provides a framework for testing the [Giveth.io](https://giveth.io/) DApp.

Each use case has a corresponding issue (linked in the titles below) in our GitHub. These issues will be closed after testing each sprint and reopened for the following one. If you wish to take on testing a use case, please assign yourself to the issue for that sprint.

## Requirements
* User testing should be done on https://next.giveth.io
* Please use a modern browser. If you encounter a bug, please try the same thing with another browser. Please make an issue in any case, but tell us if the issue might be browser specific
* Use issues in [GitHub](https://github.com/Giveth/giveth-next) for reports and feedback

## Use Cases

The following actions are defined as core functionality. If one of these steps is buggy, that represents a critical error.

###  [Project Creator](https://github.com/Giveth/giveth-2/issues/798)

This use case is partially automated to ensure functionality before changes are made. However, user testing is still required.

#### Create Project
* Project details
* Upload image / image formatting
* Location selection / global impact
* Category select
* Google maps selection
* Check that projects are all listed in "my projects"
* Check that projects show up on homepage
* Deactivate/reactivate project

#### Edit Project
* Change photo
* Change text fields
* Update donation address
* Check that updates are applied

#### Edit Profile
* Name
* Email
* Location
* Website

### [Donor](https://github.com/Giveth/giveth-2/issues/799)

This use case does not include any automated testing and must be fully user-tested.

* Donate in different tokens: ETH, ERC20, Mainnet, xDai
* Donate with alternate wallets (other than sign in)
* Check that funds leave wallet
* Check that funds received/tracked by project
* View donations made (correct \$ amount, correct currency type)

### [General](https://github.com/Giveth/giveth-2/issues/800)

This use case will be partially automated, but requires user-testing, especially to ensure that all external links function correctly.

* "Liking" projects
* Sharing via Social
* All links on homepage
* Signup for newsletter
* "My wallet"
* Report a Bug
* Sign in/sign out
* Sort/Filter/Seach projects
* Check that projects appear in project page (correct format, correct number)

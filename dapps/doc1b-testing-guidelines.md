---
id: testing-guidelines
title: Giveth.io Testing Guidelines
slug: dapps/testing-guidelines
---


This guide provides a framework for testing the [Giveth.io](https://giveth.io/) DApp.

Each use case has a corresponding issue (linked in the titles below) in our GitHub. These issues will be closed after testing each sprint and reopened for the following one. If you wish to take on testing a use case, please assign yourself to the issue for that sprint.

## Requirements
* User testing should be done on https://next.giveth.io - **Our staging environment is deployed on both xDai and Ropsten (Mainnet) Networks**.
* Please use a modern browser. If you encounter a bug, please try the same thing with another browser. Please make an issue in any case, but tell us if the issue might be browser specific
* Use issues in [GitHub](https://github.com/Giveth/giveth-next/issues) for reports and feedback

## Use Cases

The following actions are defined as core functionality. If one of these steps is buggy, that represents a critical error.

###  [Project Creator](https://github.com/Giveth/giveth-2/issues/798)

This use case is partially automated to ensure functionality before changes are made. However, user testing is still required.

#### Create Project
* Project details
* Use rich text formats (bold, italics, quotes, headers etc..) and ensure they render properly
* Embed Videos or Images and ensure they render properly
* Location selection / global impact
* Category select
* Google maps selection
* Check that projects are all listed in "my projects"
* Check that projects show up on homepage*
* Deactivate/reactivate project


:::info
*Projects created on the DApp have an automatic "unlisted" Status meaning they will not show up until their status is changed to "listed". Reach out to someone with the `Verification Team` role on the [Giveth Discord](https://discord.giveth.io) who can show you how to list your project on staging in order to continue testing.
:::

#### Edit Project
* Change photo
* Use rich text formats (bold, italics, quotes, headers etc..) and ensure they render properly
* Embed Videos or Images and ensure they render properly
* Change text fields
* Update donation address
* Check that updates are applied

#### Edit Profile
* Name
* Email
* Location
* Website

#### Update Project
* Add an Update to your project
* Use rich text formats (bold, italics, quotes, headers etc..) and ensure they render properly
* Embed Videos or Images and ensure they render properly
* Update is saved and displays properly on project page

### [Donor](https://github.com/Giveth/giveth-2/issues/799)

This use case does not include any automated testing and must be fully user-tested.

* Donate in different tokens: ETH, ERC20, Ropsten (Mainnet), xDai (Gnosis Chain)
* Donate with alternate wallets (other than sign in)
* Check that funds leave wallet
* Check that funds received/tracked by project
* View donations made (correct $ amount, correct currency type)

### [General](https://github.com/Giveth/giveth-2/issues/800)

This use case will be partially automated, but requires user-testing, especially to ensure that all external links function correctly.

* "Liking" projects - Successful and "Heart count" updates
* Header Navbar Buttons (`Home`, `Projects`, `GIVeconomy` etc.. ) are functional
* "GIV currently in wallet" (on Navbar) shows correctly (Token Address: `0x4f4F9b8D5B4d0Dc10506e5551B0513B61fD59e75`)
* Project Badges such as `Verified`, `Traceable`, `New` display correctly
* Footer links
* Sharing via Social
* All links on homepage
* Signup for newsletter
* My wallet drop down menu is functional
* Account Name/Address shows properly on Navbar when logged in
* Report a Bug
* Sign in/sign out
* Sort/Filter/Search projects
* Check that projects appear in project page (correct format, correct number)
* Links inside https://giveth.io/join are functional
* Content inside https://giveth.io/about displays correctly, including `Mission & Vision`, `History` and `Team` tabs

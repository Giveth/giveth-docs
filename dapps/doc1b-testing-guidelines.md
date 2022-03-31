---
id: testing-guidelines
title: Giveth.io Testing Guidelines
slug: dapps/testing-guidelines
---


This guide provides a framework for testing the [Giveth.io](https://giveth.io/) DApp.

## Requirements
* User testing should be done on https://next.giveth.io - **Our staging environment is deployed on both Ropsten (Mainnet) and Gnosis Chain** (formerly xDai Network).
* Please use a modern browser. If you encounter a bug, please try the same thing with another browser. Please make an issue in any case, but tell us if the issue might be browser specific.
* Use issues in [GitHub](https://github.com/Giveth/giveth-next/issues) for reports and feedback.

## Use Cases

The following actions are defined as core functionality. If one of these steps is buggy, that represents a critical error.

### [General](https://github.com/Giveth/giveth-2/issues/800)

This use case will be partially automated but requires user-testing, especially to ensure that all external links function correctly.

### **Home page**

* View Home page, hover all over project cards to see load more, and donate button
* Check all links on the home page
* Check all footer links including social links
* "Liking" projects - successful and "heart count" updates
* Header navbar buttons (`Home`, `Projects`, `GIVeconomy`, etc. ) are functional
* "GIV currently in wallet" (on navbar) shows correctly (token address: `0x4f4F9b8D5B4d0Dc10506e5551B0513B61fD59e75`)
* Project Badges such as `Verified`, `Traceable`, `New` display correctly

<img alt='testingsocialmedia' src={useBaseUrl('img/testingguidelines/testingguideline1.png')} />

* Signup for newsletter
* Subscribe to emails - validation of email, success subscribe
* My wallet drop down menu is functional
* Account name/address shows properly on navbar when logged in
* Report a bug
* Sign in/sign out
* Check that projects appear on the project page (correct format, correct number)
* Links inside https://giveth.io/join are functional
* Content inside https://giveth.io/about displays correctly, including `Mission & Vision`, `History` and `Team` tabs

### **Public Profile Page**

View Public Profile Page - when you click on the project owner

<img alt='testingpublicprofile' src={useBaseUrl('img/testingguidelines/testingguideline2.png')} />

* Surf in all tabs and make sure all data in this profile is accurate
* For example: the number of donations, amount received and donated, and also the number of projects should be accurate
* On the donation tab, test the tx link, sorting by amount, USD value, and date
* Make sure the USD value is accurate
* Test copy address of the user and also test the external link

<img alt='testingadress' src={useBaseUrl('img/testingguidelines/testingguideline3.png')} />

### **Projects Page**

View the projects list, by clicking the projects links in the header

* Make sure badges of verified and trace is working properly
* If signed in view red hearts - remove hearts. If you’re not signed in: you should get asked for sign-in before proceeding

**Test sort by /filter / search**

* Filter by category and make sure filtering works fine
* Sort by Amount raised, newest, oldest, hearts
* In sort by field, we have some items that should act as the filtered items: Accept GIV token (all projects excluding Giving Block projects) - Trace - Verified. all of them should filter the results
* In search, you can easily find results by title, description, impact Location, (project owner is not searchable now but it’s implementing)
* If no result is found, the formatting of no result page should look normal
* Back - in the search box should clear the input and show all projects
* Back in the no result should also do the above

### **Project Public View**

Public view means the view that everyone can see. If you are the owner of this project and you are signed in, you may have another view, called the Project Owner view, which you can see in the following doc.

* Project single page public view -when you click on learn more you can view the details of the project
* About tab should show the project description
* Sidebar: donate button, hover on the button to see the changing color
* The share should work properly
* Like the projects - if not signed in, you should get asked to sign in, if signed in, it should get red after giving heart
* Tags: categories and badges of verified should work properly
* GIVback toast message link `LEARN MORE` should go to docs
* Report issue link should work properly
* Updates have to be shown properly, (to test better as the owner you can post an update, log out and see as public view if it is updated or not)
* Donations Table: Make sure all-time funding received is accurate. Test count, sorting on the date, amount, and USD value, also search in donation

### **Sign-in**

* Signing with Ethereum: select meta-mask, torus, and walletConnect
* Sign-in: you are prompted to connect your wallet and you get asked to sign again for doing some specific actions, for example: liking (“hearting”), viewing your account, viewing the project in owner view, or creating a project
* Social links on sign in should load torus:

<img alt='testingsocialmedialinks' src={useBaseUrl('img/testingguidelines/testingguideline4.png')} />

* Do it with a registered and not registered address
* For specific actions, you may need to sign-in with your wallet

### **Onboarding**

* If you don't have a complete profile, you get asked to complete your profile in a wizard
* Check required fields
* If you are not signed in you should get asked to do it before submitting the data
* Check verification of emails and URLs
* Upload photos, do it with very large and small photos
* Submit your data and the header should load right after you have this information

### **My Account**

* Test it with a newly registered address: you should get asked to complete your profile by a yellow banner up there, and the “Don’t be a stranger” purple banner below the overview
* When clicking on these yellow or purple banners you should get redirected to the onboarding page
* Test if you complete your profile that  you can edit your profile
* Please test all fields and test verification of the correct email. URL and required field
* Delete your profile photo
* Edit your profile photo
* Overview tab checks numbers to be accurate
* Projects Tab - test sorting, links, all provided data including verified and listed projects (you can change the provided amount in admin bro and check it here again to make sure it reflects the latest changes)
* Donations Tab (like public profile)
* Liked Projects tab (like public profile)

### General Purposes Pages

* QAing About Us
* QAing History
* QAing Team
* QAing Terms of Use
* QAing Partners

### Check mobile view and responsiveness

* Resize your browser
* Use different devices: phones, tablets
* Dig into header, menus, all static pages


###  [Project Creator](https://github.com/Giveth/giveth-2/issues/798)

This use case is partially automated to ensure functionality before changes are made. However, user testing is still required.

#### Create Project

* Verification: required fields should be filled and not submitted empty
* Add Project details
* Use rich text formats (bold, italics, quotes, headers, etc.), and ensure they render properly
* In the description please test emojis and report all formatting and bad UX
* In the description, all the formatting should save and work properly
* In the description, embed images, test “update pictures”, resize them and ensure they render properly
* Upload cover photo, delete, upload it again with large and tiny pictures
* Use predefined photos, and change them to see any abnormal behavior
* Embed videos and ensure they render properly
* In address, it should prevent reused ETH addresses, it should be a valid ETH address and not a contract address
* For impact, search locations, cities, areas as well as countries or continents and make sure it’s working properly
* Category select
* Google maps selection
* Preview (save as a draft) means you can reach out to the projects later in your account but it’s not active yet
* Publish. and you have to see the success page and all information and links on the public page should work properly
* Publish directly and publish a preview project to make sure there are no differences.
* Check that projects are all listed in "my projects"
* Check that projects show up on homepage*
* Deactivate/reactivate project


:::info
*Projects created on the DApp have an automatic "unlisted" Status, meaning they will not show up until their status is changed to "listed". Reach out to someone with the `Verification Team` role on the [Giveth Discord](https://discord.giveth.io) who can show you how to list your project on staging in order to continue testing.
:::

#### Edit Project

* Change photo
* Use rich text formats (bold, italics, quotes, headers, etc.), and ensure they render properly
* Embed videos or images, and ensure they render properly
* Change text fields
* Update donation address
* Check that updates are applied

### Update Project

* Add an update to your project
* Use rich text formats (bold, italics, quotes, headers, etc.), and ensure they render properly
* Embed videos or images, and ensure they render properly
* Update is saved and displays properly on the project page

### [Donor](https://github.com/Giveth/giveth-2/issues/799)

This use case does not include any automated testing and must be fully user-tested.

* Donate with different tokens: ETH and ERC-20 tokens on Ropsten (Mainnet) and xDAI, ERC-20 tokens on Gnosis Chain (formerly xDai Network)
* Donate with alternate wallets (other than sign in)
* Check that funds leave wallet
* Check that funds received/tracked by project
* View donations made (correct $ amount, correct currency type)

###  Donation Page

* Before sign-in you should see connect wallet button
* Donate and check the modals look
* Check the links and content on the page to make sure it's working
* Change wallet and change network to check it’s working with your wallet
* Repeat the donation on both ETH(Ropsten) and gnosis Chain networks
* Do it with an insufficient token number
* Do it with too tiny amounts
* Check the project card view beside the donation token
* Donating with a custom token - copy and paste the address
* GIVING block - GIV donations should load a Twitter modal about Gemini
* Success Page with eligible and with non-eligible token should differ - on GIVback eligible token donation you may see a banner saying you are eligible for GIVbacks
* Anonymous donations should not show in public profile view

For GIVeconomy testing guidelines, [click here](https://docs.giveth.io/dapps/testingGIVeconomy/).

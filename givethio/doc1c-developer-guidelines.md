---
id: dev-guidelines
title: Developer Guidelines
---

Developers on Giveth are expected to follow these guidelines.

## Code quality
We take time to do things right, as we strive for excellence. 

## Linting
We use StandardJS for all linting. All code should follow it's guidelines


## Test driven development


## Gitflow

**Commit messages** 
Git messages should ideally include an issue number and the title of the Issue in the commit title. For example '#235 White label Giveth Dapp - Remove search box'. Give as much detail as is reasonable in the body of the message.

We encourage you to clan up your git history, as much as possible before opening a pull request. You can squash consequtive commits if that makes sense, you can change older commit messages, quite easily inside of most GUI git tools.


### Pull requests

**Checklist**
1. You should make sure there are no warnings, in the browser console, or the NodeJS console, before you open a pull request.

**master** branch is locked and only for PR's that have been **tested in staging** and noncritical hotfixes like typo's after merging - `master` deploys to https://v2.giveth.io

**staging** branch is the default branch where PR's should be directed to. A deploy preview by netlify is offered inside the Pull Request.

**New features** should be pushed to a new branch named **$featurename** (No **develop** or **release** branches currently, but at least **develop** will be added in the future to have a proper staging environment) 

## Styling

Styling should be done in cooperation with senior contributors so a minimum of new styles is introduced locally. As a rule of thumb: all styles that are used more than once or are not very specific to one component should be added in the **Theme UI definition**`src/gatsby-plugin-theme-ui/index.js` whenever possible and additionally to a gatsby page we use to collect all defined styles `src/pages/viewstyles.js` to quickly check consistency.
Please refer to some examples in the code to see how we deal with styles. Local overrides and extensions should be done via `sx prop` or `emotionJS`.

## Code conventions
- as mentioned above contributor code should be linted with StandardJS
- React components for into the folder `/src/components` and component filenames should be written in Camel case.

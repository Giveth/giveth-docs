---
id: testing-guidelines
title: Testing Guidelines
---

This guide provides a framework for testing the Giveth DApp.

## Requirements
- User testing should be done on https://staging.giveth.io
- Please use a modern browser. If you encounter a bug, please try the same thing with another browser. Please make an issue in any case, but tell us if the issue might be browser specific
- Use [issues in GitHub](https://github.com/Giveth/giveth-2/issues) for reports and feedback

## User flow
Following actions are defined as core functionality. If one of these steps is buggy, that represents a critical error:

- Sign In
- Create a project
- Visit your project
- Edit your project
- Donate to a project
- Write an update for your project
- Access your account page
- Access your project page
- Access your donations page
- Sign Out

## MVP features in work
These features are currently worked on - they are defined as being part of MVP. Please refer to our [issue list in GitHub](https://github.com/Giveth/giveth-2/issues) for a detailed view.

- Global search for projects
- Filtering the projects list
- Like (favourite) projects
- Social sharing for projects
- Add details to your account page

## Testing use cases
A great way to test the application is to roleplay a use case. You can find some use cases defined [in this google doc](https://docs.google.com/document/d/1jpxVDSW4K1CieCJ4oqSeK4JrzEFeURHGFyjc_XzrlJE/edit)
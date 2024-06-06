---
id: devouch-api
title: Integrating DeVouch
slug: /integrating-devouch
---
import useBaseUrl from '@docusaurus/useBaseUrl'


DeVouch prioritizes accessiblity of information and easy integration. Reading and writing data to DeVouch is accessible to all! We have three topics to cover in this article:

- How to issue DeVouch attestations 
- Adding your Attester Group to DeVouch
- Overview of the DeVouch Graphql API & Cookbook

## How to issue DeVouch attestations

There is a standardized attestation schema that all DeVouch eligible attestations MUST USE. You can find them here: 

- [Sepolia (for testing)](https://sepolia.easscan.org/schema/view/0x97b0c9911936fad57e77857fac6eef6771f8d0bf025be9549214e32bf9e2415a) 
- [Optimism Mainnet](https://optimism.easscan.org/schema/view/0x97b0c9911936fad57e77857fac6eef6771f8d0bf025be9549214e32bf9e2415a)

We recommend using the [EAS SDK](https://github.com/ethereum-attestation-service/eas-sdk) to integrate making attestations from your application, but for demonstration purposes we will show you how it looks on the easscan UI.

<img alt="easscan view of devouch attestation" src={useBaseUrl('img/devouch/devouchAttestationExample.png')} />

### Make the Attestation Onchain
You need to set the attestation as onchain in order for it to be indexed by DeVouch.
### No recipient address
You don't need to set a recipient address for DeVouch attestations.
### Project Source
This is the name of the source platform that the project is from, currently there are these four: `gitcoin`, `giveth`, `rf4` (Retro Funding round 4). More source platforms may be added later.
### Project Id
This is different for each source platform.

#### Giveth
For Giveth projects you can find the id of a project by going to the [Giveth graphQL API](https://mainnet.serve.giveth.io/graphql) and running a query like this:

```graphql
query { 
  projectBySlug(slug: "project/slug/goes/here") {
    id
    title
  }
}
```

This will give you a number like `12345` that you should use for the project Id when attesting to a Giveth project.

#### Gitcoin 

For Gitcoin grants projects you can find the id of a project by going to the [Gitcoin graphQL API](https://grants-stack-indexer-v2.gitcoin.co/graphiql) and running a query like this:

```graphql
query {
  projects(
    filter: {tags: {contains: "allo-v2"}, projectType: {equalTo: CANONICAL}, not: {tags: {contains: "program"}}, rounds: {every: {applicationsExist: true}}}
    condition: {name: "{name of project}"}
  ) {
    id
    name
  }
}

```

This will give you a hash like `0x7f4b4b6cecc3bdaf95098ea2b2f5cd9c31ea742880d5076b540f83caf8247e16` that you should use for the project Id when attesting to a Gitcoin project.

#### Retro Funding 

For Retro Funding projects you can find the id of a project by going to the [Optimism Retro Funding graphQL API](https://vote.optimism.io/graphql) and running a query like this:

```graphql
NEED TO ADD
```
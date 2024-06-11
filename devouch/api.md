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

#### Retro Funding 4

For Retro Funding projects you can find the id of a project by going to the [Retrolist projects API](https://round4-api-eas.retrolist.app/projects):

```
https://round4-api-eas.retrolist.app/projects
```

the response on this page will be a very large JSON file which can be parsed to find the project ID you need to use for the attestation.

### Vouch

This is a simple true/false value, vouching = true, flagging = false.

### Comment
This is a text comment that will be displayed on the DeVouch UI next to the associated attestation. This should be limited to 256 characters for it to be shown appropriately on the DeVouch UI and to limit gas expenses on submitting the transaction.

### Referenced Attestations
This is an important part where you associate the attestations with an attester organization. You'll need to get the attestation UID that links the address of the attester organization to the attestation. Look at this example below in the easscan UI:


<img alt="easscan view of attester org referencing" src={useBaseUrl('img/devouch/exampleAttesterOrgReference.png')} />

This for example is used to associate `divinecomedian.eth` as an RPGF3 Badgeholder, you can see the attestation UID near the top of the page. This is the value you need to use in the `Referenced Attestations` field.

### Ready to submit! 

When you have all those fields filled out, you can submit the attestation to the blockchain. Once it is confirmed, it will be indexed by DeVouch and show up on the DeVouch UI and graphQL API.

## Adding your Attester Group to DeVouch

In order to add your attester group to DeVouch there's a few steps you need to take:

1. Fork the [DeVouch BE repo on Github](https://github.com/Giveth/DeVouch-BE)
2. Modify the `add-organisation.js` file in the root folder.
  a. Change the `ORGANISATION_NAME` variable to the name of your attester group.
  b. Change the `SCHEMA_ID` variable to the schema ID of the attestations related to your organization
  c. Change the `AUTHORIZED_ATTESTOR` variable to the address authorized to add addresses to your attester group or whoever the issuer is/was of the valid attestations.
  d. Change the `COLOR` variable to a hex colour value that will be associated with your attester group & shown on the UI.
  e. Ensure the `network` variable is set to the correct network. `eth-sepolia` for testing, `optimism-mainnet` for production.
3. Run the script with `node add-organisation.js`. You should noticy a new migration file was made under the `db/migrations` folder.
4. Create a PR to the main DeVouch BE repo with your changes.
5. Wait for Approval and merging from the DeVouch team.

## Overview of the DeVouch Graphql API & Cookbook

The DeVouch Graphql API is an accessible endpoint that allows you to query for any information from the DeVouch indexer. There are two endpoints available: 

- Staging/Sepolia: [https://backend.devouch.xyz/graphql](https://backend.devouch.xyz/graphql)
- Production/Optimism Mainnet: [https://optimism.backend.devouch.xyz/graphql](https://optimism.backend.devouch.xyz/graphql)

The graphQL API is hyper flexible and provides a nearly unlimited amount of ways to query data. The rest of this document will be dedicated to providing examples of how to query the DeVouch API. 

<details>
<summary>Fetching All Projects</summary>

This query will fetch **information for all projects** listed on DeVouch. 

```graphql
query MyQuery {
  projects {
    id
    image
    description
    projectId
    source
    title
    totalAttests
    totalFlags
    totalVouches
  }
}
```

To query for **projects from a specific source**, you can add a `where` clause to the query like this:

```graphql
query MyQuery {
  projects(where: {source_eq: "giveth"}) {
    id
    image
    description
    projectId
    source
    title
    totalAttests
    totalFlags
    totalVouches
  }
}
```

To query for **projects that have only received attestations from a specific attester group**, you'll need the schemaID associated with the attester group. When you have this you can make a quiery like this:
```graphql
query {
  projectAttestations (where:{
    attestorOrganisation:{
      organisation:{
        id_eq: "0xf63f2a7159ee674aa6fce42196a8bb0605eafcf20c19e91a7eafba8d39fa0404"
      }
    }
  }) {
    project {
      id
      title
    }
    }
  }
  ```

Search all projects for **keyword match** in title: 
```graphql
{
  projects(where: {title_containsInsensitive: "blockchain"}) {
    totalFlags
    totalVouches
    title
    source
    description
    slug
    attestedOrganisations {
      id
      count
      vouch
  
    }
  }
}
```

</details>

<details>
<summary>Fetching Information for a specific Project</summary>

To query the Attestation data made to a specific project you will need to know the source platform and the project ID. Once you have that you can query attestation data like this:

```graphql
query {
  projects (where: {
    id_in: "rf4-0x897d6172efca2d24a6b14f235db5127f7d747d923287ede38d776126bf02cbfe"
    attests_some:{
    }
  }) {
    id
    source
    projectId
    totalFlags
    totalVouches
    attests {
      vouch
      comment
      attestorOrganisation {
         attestor {
           id
         }
        organisation {
          id
          name
        }
      }
    }
  }
}
```
Note: Inside of the `attests` field you can query for the `attestor` and `organisation` entities. The organisation refers to the attester group associated with the attestation. The attestor is the user that made the attestation and it's `id` is their address.

</details>

<details>
<summary>Fetching Information about a specific attester</summary>
To fetch information about a specific attestor you'll need their address, then you can query like this:

```graphql
{
  projectAttestations(where: {attestorOrganisation: {attestor: {id_eq: "0x826976d7c600d45fb8287ca1d7c76fc8eb732030"}}}) {
    attestTimestamp
    comment
    vouch
    project {
      id
      title
    }
    attestorOrganisation {
      attestor {
        id
      }
      attestTimestamp
      organisation {
        name
      }
    }
  }
}
```
This response provided all the attestations made by the attestor with the address `0x826976d7c600d45fb8287ca1d7c76fc8eb732030`. This include which projects they attested to, the details of the attestation, the attester group they used and the timestamp they attested.


</details>
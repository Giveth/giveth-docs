---
id: whatisdevouch
title: What is DeVouch?
slug: /
---
import useBaseUrl from '@docusaurus/useBaseUrl'


DeVouch is a system for members of reputable organizations in the Ethereum ecosystem to vouch for projects that are looking to raise funding. By vouching for a project, the organization can lend its credibility to the project, building confidence for those looking to support with funding. 

DeVouch collects projects [Gitcoin](https://gitcoin.co/), [Giveth](https://giveth.io/) and [Optimism Retro Funding](https://vote.optimism.io/) and shows them in a singe place allowing users to either vouch or flag for each project. More platforms may be added in the future. 

Visitors to the website can see the vouches and flags received by each project, tracked by the "Attester Group" that the vouch or flag came from. Learn more about "Attester Groups" below.

We believe that by providing a way for members of reputable organizations to vouch for projects, we can leverage the social fabric of the Ethereum community to make more informed decisions on the allocation of capital.

## Attester Groups 

DeVouch functions using a system of Attestations from [EAS](https://attest.org/). At the top level DeVouch identifies "Attester Groups" by looking at on-chain attestation data, Attester Groups are best defined as a group of addresses that hold the same type of attestations (defined by it's schema ID) that were all issued by the same address (the "Issuing Authority"). 

Check out this attestation for example: 

https://optimism.easscan.org/attestation/view/0x3ef6cc3d97a1386c1eb6a9ed7903c7247883f348eb8784db17678b1392c0c136

<img alt='attestestation example' src={useBaseUrl('img/devouch/attesterOrganizationExamples.png')} />

In this case, you see the schema is called "RETROPGF BADGEHOLDER" with an ID of `0xfdcfdad2dbe7489e0ce56b260348b7f14e8365a8a325aef9834818c00d46b31b` and the Issuing Authority is `0x621477dBA416E12df7FF0d48E14c4D20DC85D7D9` (presumably someone from the Optimism team). DeVouch would consider all addresses that hold attestations with this schema ID, issued by the same Issuing Authority address to be part of the same Attester Group. The Attester Groups that the DeVouch indexer recognizes were defined at launch by the DeVouch team, and more can be added by following the instructions in the [DeVouch repository](https://github.com/Giveth/DeVouch-BE). 

Anyone can make an attestation to either vouch or flag a project at any time, but DeVouch only considers attestations from recognized Attester Groups when indexing information.

## Navigating DeVouch

There are four main pages on DeVouch: 
- The "All Projects" view, which shows project card summaries of all projects that have been indexed by DeVouch.
- The "Project Details" view, which shows detailed information about a single project, including the vouches and flags it has received.
- The "My Attestations" view, which shows all the eligible DeVouch attestations you have made, and allows you to edit or delete them.
- The "User Attestations" view, which shows all the eligible DeVouch attestations made by a specific address.

On any page there are a myriad of options for filtering, sorting, and searching for exactly the information you're looking for! Make use of them to optimize you're experience and see the data that's relevant for you.

## Vouching and Flagging projects 

When you vouch for a project, you are saying that you know this project and that you trust it. When you belong to a "Atterster Group" in a way you are lending the credibility of the Attester Group to the project you vouched for. 

Similarily, when you flag a project, you are saying that you don't trust this project or you don't believe it is legitimate.

Be aware that your address will be associated with the vouch or flag you make, and that this information is public and can be seen by anyone. You can additionally add a comment to your vouch or flag to provide more context.

It is possible that an address could belong to multiple Attester Groups, when you create an attestation, you can choose which Attester Group you want to vouch or flag from. Each attestation made with a unique Attester Group used by the same address counts as a separate vouch or flag. You can only use one Attester Group per attestation on DeVouch.

## Editing Attestations

You can edit your attestation, whether it was a vouch or a flag. This will allow you to change your vouch to a flag or vice versa and also write a new comment into your attestation. This will create a new on-chain attestation that will replace the old one. If you attest to the project as part of other Attester Groups, those attestations will remain unchanged. 

You can edit your attestations from either the project details page of the project you attested to or from the 'My Attestations' page.

## Deleting Attestations

You can delete your attestation, whether it was a vouch or a flag. This creates an on-chain revocation of your attestation. This will remove your vouch or flag from the project. If you attested to the project as part of other Attester Groups, those attestations will remain. 

You can delete your attestations from either the project details page of the project you attested to or from the 'My Attestations' page.

# Integrating DeVouch

If you'd like to integrate DeVouch data into your platform or analytics we have several graphQL APIs available. 

- Sepolia (for testing) - https://backend.devouch.xyz/graphql
- Optimism Mainnet - https://optimism.backend.devouch.xyz/graphql

To learn more about the APIs and how to issue DeVouch attestations continue on to [this article](./api.md). 

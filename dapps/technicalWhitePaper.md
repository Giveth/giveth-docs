---
id: technicalWhitePaper
title: Technical White Paper
slug: technicalWhitePaper
---
import TraceDeprecated from './_traceDeprecated.mdx'

<TraceDeprecated />


The purpose of our technology is to give cryptocurrency users the ability to donate effortlessly to Campaigns focused on making the world a better place. They can use the Giveth platform to find those Campaigns and donate directly, or they can pledge their crypto to a cause and have a Delegate choose an appropriate Campaign or Trace for them. As an alternative to traditional donation systems, our ***Liquid Pledging*** contract allows Givers to take back their pledge if they disagree with how their donations were allocated. This can only occur before it has been locked into a Campaign for a specific purpose.

#### To make this new way of giving possible, we have to overcome a few challenges:

**1.** How to offer a means for Givers to donate without losing ownership of their funds.
**2.** How to allow third parties to distribute these crypto donations to individuals who can use them effectively.
**3.** How to securely transfer ownership to the individuals who are making the world a better place.
**4.** How to determine whether ownership of distributed Ethereum tokens should be transferred or not. In other words: How to be sure a recipient deserves the donated crypto before we transfer it.

#### Challenge #1 - Donate without losing ownership
This is handled by our [vault](https://github.com/Giveth/vaultcontract) contract. This is a solidity smart contract that can safely store crypto on behalf of the cryptocurrency’s owner. This is how and why a Giver may control or take back their donations. When a giver donates cryptocurrency through Giveth, the coins are actually stored in a vault with the Giver as the owner.

Once stored in the vault, the cryptocurrency is held in place and cannot be moved further without the owner's permission.

#### Challenge #2 - Distribute collected funds
 Our [Minime](https://github.com/Giveth/minime) contract partly handles this challenge. This is a solidity smart contract that can represent Ether and ERC-20's with replica tokens.

Instead of transferring actual Ethereum tokens to individuals for their efforts to do good, we can distribute Minime tokens with the assurance that the real crypto is stored in the vault. Minime tokens are used by a number of well-known projects in the Ethereum space.

Our Giveth TRACE uses another strategy for flexible transfers. [***Liquid Pledging***](https://github.com/Giveth/liquidpledging) is a solidity smart contract that allows us to redistribute Ether in a myriad of networked permutations (aka a graph). It's a bit like liquid democracy, but there is no voting (unless you add that as a plugin).

At its core, Liquid Pledging maintains a list of Ethereum token transfers and owners. These two lists serve as the data structure for the graph. The contract's API provides the means to donate, delegate, and transfer Ethereum tokens stored in the vault.

#### Challenge #3 - Transfer ownership
Once again, this is resolved by our [vault](https://github.com/Giveth/vaultcontract) contract. Ethereum tokens are only ever released to addresses whitelisted with the permission of the original donor. In order to fully meet the requirements of challenge #3, we must set some sort of approval process.

#### Challenge #4 - Determine if transfer should occur
The rules for how transfers are approved are handled by liquid-pledging plugins (lpp). These plugins are separate contracts referenced by the Liquid Pledging contract (*see challenge #2*).

For example, you could use our [lpp-milestone](https://github.com/Giveth/lpp-milestone) plugin to require reviewer approval as a condition to releasing Ether from its original donor. In this case, the reviewer is another Ethereum address. If 'acceptMilestone' is called from this approved reviewer address, then the ownership of donated Ether can be released to the Trace (formerly Milestone) recipient's address.

You don’t have to use our lpp-milestone plugin. You can make your own with whatever you want. Use a contract that mandates the rules you need for your community.

This concludes the Giveth TRACE Technical White Paper for now. Reach out to us on [Discord](https://discord.gg/qf7XZ48gCU) if you have something you want to do with the ideas listed. We are an open-source project, and it is our mission to help communities.

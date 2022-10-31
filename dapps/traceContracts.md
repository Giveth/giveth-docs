---
id: traceContracts
title: Contracts, Bridges and Multisigs Technical Information
slug: dapps/traceContracts
---
import TraceDeprecated from './_traceDeprecated.mdx'

<TraceDeprecated />


## Contracts:
* GivethBridge on Mainnet
* ForeignGivethBridge on Rinkeby
* LiquidPledging contracts on Rinkeby
* Escapable contracts to Mainnet for each contract on Rinkeby


#### Mainnet multisigs:
* [Giveth Mainnet: 0x8f951903c9360345b4e1b536c7f5ae8f88a64e79](https://etherscan.io/address/0x8f951903c9360345b4e1b536c7f5ae8f88a64e79) (6 of 13 multisig)
* [Giveth Overflow: 0x16fda2fcc887dd7ac65c46be144473067cff8654](https://etherscan.io/address/0x16fda2fcc887dd7ac65c46be144473067cff8654) (4 of 7 multisig)
* [EscapeHatch Caller: 0x1e9f6746147e937e8e1c29180e15af0bd5fd64bb](https://etherscan.io/address/0x1e9f6746147e937e8e1c29180e15af0bd5fd64bb) (1 of x multisig)

#### Rinkeby multisigs:
* [EscapeHatch Caller: 0xc3b2128ca330871037d35fdc5f7b05e195aac5ce](https://rinkeby.etherscan.io/address/0xc3b2128ca330871037d35fdc5f7b05e195aac5ce) (1 of x multisig)
* [Dapp God/EscapeHatch Destination: 0x20fc2ec2518dec7041b4c3e82663d6071bae953f](https://rinkeby.etherscan.io/address/0x20fc2ec2518dec7041b4c3e82663d6071bae953f) (3 of 6 multisig)


 ## Contract Roles/params:
### Mainnet
 - [**GivethBridge**: 0x30f938fED5dE6e06a9A7Cd2Ac3517131C317B1E7](https://etherscan.io/address/0x30f938fED5dE6e06a9A7Cd2Ac3517131C317B1E7)
     - Owns the bridge.
     - Receives and deals with donations.
     - Can cancel payments in the bridge.
     - Can pause and unpause the bridge.
     - Add tokens to whitelist.
     - Can change the max security guard delay.
     - Can change the security guard.
     - Can change the 2 day time lock in the bridge.
     - Can change the escape hatch caller.
     - Can remove/change ownership.
     - Can call the `escapeHatch(address _token)` in an emergency to move all the money out of the bridge for the specified token.
     - Can call `escapeFunds(address _token, uint _amount) ` to move some of the money out of the bridge to be extra cautious.
     - Has all the powers needed to decentralize the bridge.
 - [**Giveth Overflow**: 0x16fda2fcc887dd7ac65c46be144473067cff8654](https://etherscan.io/address/0x16fda2fcc887dd7ac65c46be144473067cff8654)
     - Receives overflow/escaped funds from the bridge.
     - Sends funds back to the bridge when funds get low using `depositEscapedFunds()`.
 - [**EscapeHatch Caller**: 0x1e9f6746147e937e8e1c29180e15af0bd5fd64bb](https://etherscan.io/address/0x1e9f6746147e937e8e1c29180e15af0bd5fd64bb)
     -  Can call the `escapeHatch(address _token)` in an emergency to move all the money out of the bridge for the specified token.
     -  Can call `escapeFunds(address _token, uint _amount) ` to move some of the money out of the bridge to be extra cautious.
 - [**SecurityGuard**: 0xDAa172456F5815256831aeE19C8A370a83522871](https://etherscan.io/address/0xDAa172456F5815256831aeE19C8A370a83522871)
     - MaxSecurityGuardDelay:  1 month

### Rinkeby
 - [**ForeignGivethBridge**: 0xfF9CD5140e79377feB23f6DFaF1f8b558C0FE621](https://rinkeby.etherscan.io/address/0xff9cd5140e79377feb23f6dfaf1f8b558c0fe621)
      - Mints tokens on Rinkeby.
      - Can delegate tokens to Liquidpledging.
 - [**EscapeHatch Caller**: 0xc3b2128ca330871037d35fdc5f7b05e195aac5ce](https://rinkeby.etherscan.io/address/0xc3b2128ca330871037d35fdc5f7b05e195aac5ce)
     - In case there is a weird unexpected movement of Rinkeby tokens (which represent our accounting in the bridge), this Multisig would be able to get the tokens out to maintain our accounting.
 - [**Dapp God/EscapeHatch Destination**: 0x20fc2ec2518dec7041b4c3e82663d6071bae953f](https://rinkeby.etherscan.io/address/0x20fc2ec2518dec7041b4c3e82663d6071bae953f)
     - This multisig has a special place in the AragonApp it: authorizes upgrades to any smart contract in our system.
     - Also acts as the escape hatch destination for the Rinkeby LP Vault.
- [**Token Factory:** 0xf3012a211fAcf4a1590086A14482Aaa88397aF15](https://rinkeby.etherscan.io/address/0xf3012a211facf4a1590086a14482aaa88397af15)
    - Mints Minime tokens to be sent to Liquid Pledging.
#### Liquid Pledging Contracts (Rinkeby)
 - [LPVault: 0xA2B1485Bd9ad623b9e51FC41952B226313250Ada](https://rinkeby.etherscan.io/address/0xa2b1485bd9ad623b9e51fc41952b226313250ada)
    - Constructor params: None
 - [LiquidPledging: 0x8eB047585ABeD935a73ba4b9525213F126A0c979](https://rinkeby.etherscan.io/address/0x8eb047585abed935a73ba4b9525213f126a0c979)
    - Constructor params: None
 - [LPPCampaignFactory: 0x71408CE2125b1F07f614b93C8Bd0340e8Fc31CFA](https://rinkeby.etherscan.io/address/0x71408CE2125b1F07f614b93C8Bd0340e8Fc31CFA)
    - Constructor params: 000000000000000000000000a018199569d94c9dfb6de1d8e8cb37928f20d444
 - [milestoneFactoryAddress: 0x8E8d4840568c786E2e4c83C761ca002F256aD9c2](https://rinkeby.etherscan.io/address/0x8e8d4840568c786e2e4c83c761ca002f256ad9c2)
    - Constructor params: 000000000000000000000000a018199569d94c9dfb6de1d8e8cb37928f20d444
 - [LPPCappedMilestoneFactory: 0x19e88e279844f0201079b39c736a94b87b32b6b6](https://rinkeby.etherscan.io/address/0x19e88e279844f0201079b39c736a94b87b32b6b6)
    - Constructor params: 000000000000000000000000a018199569d94c9dfb6de1d8e8cb37928f20d444


**NOTE:** All escapeHatches for liquidPledging contracts (not bridge) have been replaced with the recoveryVault functionality of AragonOS. We will register 1 recoveryVault (Giveth Multisig on Rinkeby) in the kernel and all app will be “escapable” to that vault.

**Wallet Funding Account:** 0xf94230D278b36a29fD1363Bd57D12AEb8b8D426B

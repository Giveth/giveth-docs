---
id: whatDappened1
title: "What DAppened: March 17–31"
author: Lauren
author_title: Blockchain DAbbler and Heart-Centered Jack of All Trades
author_image_url: /img/laurenAuthor.png
image: img/blog/whatsDappening1Meme.gif
---
import useBaseUrl from '@docusaurus/useBaseUrl'
import styles from '../src/css/custom.css'


_Hello friends and fans of Giveth! This is one part of a series of short transparency posts where we keep you in the loop with updates on what’s in development for_ [_giveth.io_](http://giveth.io)_._

Our new DApp [went live](2021-03-24-futureofGiving.md) at [giveth.io](https://giveth.io/) on March 24, 2021, and since then we got some great feedback from our testers and community, and we’ve been hard at work fixing bugs and adding new features.

First, we addressed the issue of gas fees not being calculated correctly, added an informative banner, and enabled users to login directly on xDai chain. We disabled the ability of a project creator to use a contract address for their project so that donations to all projects can be done either on Mainnet or xDai. We also added more tokens to our list in order to allow the Giver to donate with even more flexibility!

We onboarded a new member into our dev team and thanks to him we now have functional automated testing that allows us to make changes to the DApp in development and then push to our testing site with greater confidence.

Next we tackled a bigger fish: the development and implementation of a quality score, sorting/filtering method, and search function to add greater flow and organization to the projects page.

<img alt="Magic Sorting" class="leftfloat" src={useBaseUrl('img/blog/whatsDappening1Meme.gif')} width="375" height="auto" />

Now the projects are sorted by default using a “quality score” — a combination of number of likes, number of donations and quality of project description. We have also added the ability for the user to filter projects by category, and to change the sorting method from the default to “number of likes” or “amount raised”.


Lastly, you are now able to use the search bar to quickly and easily find the exact project you want to view or Give to!

<img alt="Filter and Sort on Giveth.io" src={useBaseUrl('img/blog/whatsDappening1img1.png')} width="800" height="auto" />

###### “Filter by Category”, “Sort By” and “Search Projects” Features on [Giveth.io](https://giveth.io/)

Another exciting update is that we’re now using [Segment](https://segment.com/) analytics and [Autopilot](https://www.autopilothq.com/) to track activity on the DApp and send appropriate corresponding notifications. We also worked on some internal organization in our [Discord server](https://discord.com/invite/JftjK8Un3z) that enables us to receive notifications so we can monitor site actions (such as new project creation, new donation, etc.) in-house.

In the next sprint we’re excited to continue with QA by getting email notifications working smoothly and ensuring that the donation amount (at time of donation) is being calculated and added to the database correctly. We also plan to add rich text formatting to the project creation flow, and enable the Maker to add videos and/or images to their project description. Furthermore, we are now developing systems for project verification to increase the quality of projects on the DApp.

In the coming weeks we will be investigating fiat integration for on-ramping and off-ramping solutions, and continuing to work on creating a white-label option.

As always, we are committed to building the future of giving based on feedback from you, our community! Let us know what you’d like to see us work on in future sprints by [trying out the DApp](http://giveth.io) and sharing your thoughts in our [Discord](https://discord.com/invite/JftjK8Un3z).

<img alt="Darth Vaders Wants you on Giveth!" class="center" src={useBaseUrl('img/blog/whatsDappening1Meme2.jpeg')} />

Thanks for reading and we’ll see you at the end of the next sprint for more dev updates ;)

_Many thanks to our amazing team for making all this possible: James Farrell, Mateo Daza, Kay, Merlin Egalite, Danielle Gennety, Willy Ogorzaly, Griff Green, Mark Prljic, Mitch, Ashley Wagner, and Lauren Bajin!_

## Want to get more involved?

*   Join us on [Discord](https://discord.gg/JftjK8Un3z) or [Telegram](http://t.me/givethio)
*   Discover our [Site](http://giveth.io/) and [Wiki](https://wiki.giveth.io/)
*   Fork our code on [GitHub](https://github.com/Giveth/)
*   Follow us on [Medium](http://medium.com/giveth/), [Facebook](https://www.facebook.com/givethio), [Twitter](http://twitter.com/givethio), [Reddit](https://www.reddit.com/r/giveth/) and [YouTube](https://www.youtube.com/channel/UClfutpRoY0WTVnq0oB0E0wQ)

Help us Build the Future of Giving: 🦄 [Donate directly](http://donate.giveth.io/) 🦄 or [buy a Ledger with our affiliate link](https://www.ledgerwallet.com/products/ledger-nano-s?utm_source=&utm_medium=affiliate&utm_campaign=d663)

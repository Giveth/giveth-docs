---
id: troubleshooting
title: Troubleshooting
---
import useBaseUrl from '@docusaurus/useBaseUrl'


If you are having technical problems with the Giveth DApp, you may find a solution on this page.

## Brave Browser

If you try to sign into the Giveth DApp with Brave browser, tor.us (the wallet provider) notifies you that it needs cookies to operate (tor.us needs these permissions for their OAuth services - so our users can be provided easily with their own ethereum wallet that is tied i.e. their Google Account).

To quickly solve this problem you can: 

- click on the site settings (brave icon)
- change the cookie setting just for giveth.io to "all cookies allowed"

<img
  alt="Enable Cookies in Brave"
  src={useBaseUrl('img/content/screenshot-brave-cookies.png')}
/>;

[Read more about handling cookies in Brave.](https://support.brave.com/hc/en-us/articles/360050634931-How-Do-I-Manage-Cookies-In-Brave-)

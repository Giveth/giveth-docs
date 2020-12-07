---
slug: how-to    
title: How to contribute to documentation
author: geleeroyale
author_title: Giveth
author_url: https://github.com/geleeroyale
author_image_url: https://avatars1.githubusercontent.com/u/317685?s=460&u=cad937f322db29d6ade49956c8d7d289a583fa9c&v=4
tags: [how-to, documentation]
---

import useBaseUrl from '@docusaurus/useBaseUrl'

Hello dear contributor!

It is very easy to contribute to our new Giveth documentation website. We use [docusaurus v2](https://v2.docusaurus.io), so you can also refer to their documentation, especially for advanced changes.

However - here are the simple ways to contribute:

## Change something in a page

<img
  alt="Editing a page"
  src={useBaseUrl('img/content/screenshot-edit-page.png')}
/>;

`Click` on the *Edit page* link at the bottom of any entry.

## Add an image

If your content needs an image, you should place it in this folder: `static/img/content`

For relative links you should also import the `useBaseUrl` hook from @docusaurus/useBaseUrl - place it immediately after your *front matter*.

```js
import useBaseUrl from '@docusaurus/useBaseUrl'
```

Then you can import the image - i.e. the image I used above to demonstrate the look of the edit link:

```js
<img
  alt="Editing a page"
  src={useBaseUrl('img/content/screenshot-edit-page.png')}
/>;
```

## Make a new page

In order for this to work nicely, please fork and clone from our main repository on github and make a pull request after you have made your changes.

Docusaurus will automatically create new pages from any added markdown (`.md`) files with the correct frontmatter (look at current pages to get an example).

So to create a new page, you should create a new markdown document, depending on the type of content.

- User guides should be created in the `guides` folder
- Developer documentation should be created in the `docs` folder
- Updates, content that does not easily fit other categories, as well as longer entries should go into the `blog` folder

If you want the entry to show up in the respective sidebar you will need to add the title to the existing array:

- `sidebars.js` for the docs section
- `sidebarsGuides.js` for the guides section
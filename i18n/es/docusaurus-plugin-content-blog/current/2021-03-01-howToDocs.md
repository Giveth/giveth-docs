---
slug: howToDocs    
title: Como contribuir a la documentación
author: geleeroyale
author_title: Giveth
author_url: https://github.com/geleeroyale
author_image_url: https://avatars1.githubusercontent.com/u/317685?s=460&u=cad937f322db29d6ade49956c8d7d289a583fa9c&v=4
tags: [how-to, documentation]
---

import useBaseUrl from '@docusaurus/useBaseUrl'

¡Hola querido colaborador!

Es muy fácil contribuir a nuestro nuevo sitio web de documentación de Giveth. Usamos [docusaurus v2](https://v2.docusaurus.io), por lo que también puede consultar su documentación, especialmente para cambios avanzados.

Sin embargo, estas son las formas simples de contribuir:

## Cambiar algo en una página

<img
  alt="Editar una página"
  src={useBaseUrl('img/content/screenshot-edit-page.png')}
/>;

`Haga clic` en el enlace *Editar página* en la parte inferior de cualquier entrada.

## Agrega una imagen

Si su contenido necesita una imagen, debe colocarla en esta carpeta: `static/img/content`

Para los enlaces relativos, también debe importar el gancho `useBaseUrl` de @docusaurus/useBaseUrl; colóquelo inmediatamente después de su *importante*.

```js
importar useBaseUrl desde '@docusaurus/useBaseUrl'
```

Luego puede importar la imagen, es decir, la imagen que usé arriba para demostrar el aspecto del enlace de edición:

```js
<img
  alt="Editar una página"
  src={useBaseUrl('img/content/screenshot-edit-page.png')}
/>;
```

## Hacer una nueva página

Para que esto funcione bien, haga un fork y clone desde nuestro repositorio principal en github y haga un Pull request después de haber realizado los cambios.

Docusaurus creará automáticamente nuevas páginas a partir de cualquier archivo de descuento agregado (`.md`) con el frente correcto (mire las páginas actuales para obtener un ejemplo).

Entonces, para crear una nueva página, debe crear un nuevo documento de descuento, según el tipo de contenido.

- Las guías de usuario deben crearse en la carpeta `guides`
- La documentación del desarrollador debe crearse en la carpeta `docs`
- Las actualizaciones, el contenido que no encaja fácilmente en otras categorías, así como las entradas más largas, deben ir a la carpeta `blog`

Si desea que la entrada aparezca en la barra lateral respectiva, deberá agregar el título a la matriz existente:

- `sidebars.js` para la sección de documentos
- `sidebarsGuides.js` para la sección de guías
 Sin nueva línea al final del archivo

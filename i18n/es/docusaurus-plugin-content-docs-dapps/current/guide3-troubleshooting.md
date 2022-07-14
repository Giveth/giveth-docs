---
id: troubleshooting
title: Troubleshooting
slug: dapps/troubleshooting
---
import useBaseUrl from '@docusaurus/useBaseUrl'


Si tiene problemas técnicos con Giveth DApp, puede encontrar una solución en esta página.
## Navegador Brave

Si intenta iniciar sesión en Giveth DApp con el navegador Brave, Torus (el proveedor de la billetera) le notifica que necesita cookies para funcionar. (Torus necesita estos permisos para sus servicios OAuth, por lo que nuestros usuarios pueden recibir fácilmente su propia billetera Ethereum que está vinculada a su cuenta de Google).

Para solucionar rápidamente este problema puedes:

- Haga click en la configuración del sitio (icono de Brave)
- Cambie la configuración de cookies sólo para Giveth.io a "todas las cookies permitidas"

<img
  alt="Enable Cookies in Brave"
  src={useBaseUrl('img/content/screenshot-brave-cookies.png')}
/>

[Leer más sobre las Cookies en Brave.](https://support.brave.com/hc/en-us/articles/360050634931-How-Do-I-Manage-Cookies-In-Brave-)

### Giveth.io muestra una pantalla en blanco! ¡Ayuda!

A veces, las actualizaciones se envían al sitio web de Giveth.io, y sus archivos y cookies en caché no siempre se llevan bien con las nuevas actualizaciones en el sitio, por lo que deberá borrar su caché, eliminar sus cookies y luego actualizar el navegador. 

Para borrar tu caché y cookies en Brave, ve a: ``Configuración -> Configuración adicional -> Privacidad y seguridad -> Borrar datos de navegación`` Una vez que haya llegado allí, marque `Cookies` e `Imágenes y archivos en caché` y asegúrese de marcar en la parte superior de la ventana emergente el Intervalo de tiempo adecuado. Puedes seleccionar `Todo el tiempo` solo para asegurarse de que los tiene todos.

Al borrar las cookies, se desconectará de la mayoría de los sitios. Si no desea pasar por la molestia de volver a iniciar sesión en todos los sitios web que frecuenta, diríjase a: ``Privacidad y seguridad -> Cookies y otros datos del sitio -> Ver todas las cookies del sitio y otros datos`` Luego desde este menú busca el dominio de Giveth así:

<img alt="Deleting Cookies in Brave" src={useBaseUrl('img/content/givethcookies.png')} />

Luego haga click en el icono de la papelera para eliminar la cookie de Giveth. Luego de esto, abra una nueva ventana del navegador Brave, regrese a Giveth y ¡listo!

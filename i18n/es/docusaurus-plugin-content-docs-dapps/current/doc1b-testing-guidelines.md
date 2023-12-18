---
id: testing-guidelines
title: Guía de pruebas de Giveth.io
slug: dapps/testing-guidelines
---


Esta guía proporciona un marco para probar la DApp [Giveth.io](https://giveth.io/).

Cada caso de uso tiene un problema correspondiente (vinculado en los títulos a continuación) en nuestro GitHub. Estos problemas se cerrarán después de probar cada sprint y se reabrirán para el siguiente. Si desea probar un caso de uso, asígnese el problema para ese sprint.

## Requisitos
* Las pruebas de usuario deben realizarse en https://next.giveth.io - **Nuestro entorno de prueba se implementa tanto en Ropsten (Mainnet) como en Gnosis Chain** (anteriormente xDai Network).
* Utilice un navegador moderno. Si encuentra un error, intente lo mismo con otro navegador. Haga un problema en cualquier caso, pero díganos si el problema puede ser específico del navegador.
* Si tiene problemas utilice [GitHub](https://github.com/Giveth/giveth-next/issues) para informes y comentarios.

## Casos de uso

Las siguientes acciones se definen como funcionalidad principal. Si uno de estos pasos tiene errores, eso representa un error crítico.

### [Creador del proyecto](https://github.com/Giveth/giveth-2/issues/798)

Este caso de uso está parcialmente automatizado para garantizar la funcionalidad antes de que se realicen cambios. Sin embargo, aún se requieren pruebas de usuario.

#### Crear proyecto
* Detalles del proyecto
* Use formatos de texto enriquecido (negrita, cursiva, comillas, encabezados, etc.) y asegúrese de que se representen correctamente
* Incruste videos o imágenes y asegúrese de que se reproduzcan correctamente
* Selección de ubicación / impacto global
* Selección de categoría
* Selección de mapas de Google
* Comprueba que todos los proyectos estén listados en "mis proyectos"
* Verifique que los proyectos aparezcan en la página de inicio *
* Desactivar/reactivar proyecto


:::info
*Los proyectos creados en la DApp tienen un estado automático "no listado", lo que significa que no aparecerán hasta que su estado cambie a "listado". Comuníquese con alguien con el rol de 'Equipo de verificación' en [Giveth Discord](https://discord.giveth.io) que pueda mostrarle cómo incluir su proyecto en la etapa de preparación para continuar con las pruebas.
:::

#### Editar proyecto
* Cambiar foto
* Use formatos de texto enriquecido (negrita, cursiva, comillas, encabezados, etc.) y asegúrese de que se representen correctamente
* Incruste videos o imágenes y asegúrese de que se reproduzcan correctamente
* Cambiar campos de texto
* Actualizar dirección de donación
* Comprobar que se aplican las actualizaciones

#### Editar perfil
* Nombre
* Correo electrónico
* Ubicación
* Sitio web

#### Proyecto de actualización
* Agregue una actualización a su proyecto
* Use formatos de texto enriquecido (negrita, cursiva, comillas, encabezados, etc.) y asegúrese de que se representen correctamente
* Incruste videos o imágenes y asegúrese de que se reproduzcan correctamente
* La actualización se guarda y se muestra correctamente en la página del proyecto

### [Donante](https://github.com/Giveth/giveth-2/issues/799)

Este caso de uso no incluye ninguna prueba automatizada y debe ser completamente probado por el usuario.

* Done con diferentes tokens: tokens ETH y ERC-20 en Ropsten (Mainnet) y xDAI, tokens ERC-20 en Gnosis Chain (anteriormente xDai Network)
* Done con billeteras alternativas (aparte de iniciar sesión)
* Revisar que los fondos salgan de la billetera
* Verifique que los fondos recibidos/seguidos por proyecto
* Ver donaciones realizadas (cantidad correcta en $, tipo de moneda correcto)

### [General](https://github.com/Giveth/giveth-2/issues/800)

Este caso de uso estará parcialmente automatizado, pero requiera pruebas de usuario, especialmente para garantizar que todos los enlaces externos funcionen correctamente.

* Proyectos "Me gusta": actualizaciones exitosas y "recuento de corazones"
* Los botones de la barra de navegación del encabezado (`Inicio`, `Proyectos`, `GIVeconomy`, etc.) son funcionales
* "GIV actualmente en la billetera" (en la barra de navegación) se muestra correctamente (dirección del token: `0x4f4F9b8D5B4d0Dc10506e5551B0513B61fD59e75`)
* Las insignias del proyecto como `Verificado`, `Trazable`, `Nuevo` se muestran correctamente
* Enlaces de pie de página
* Compartir a través de las redes sociales
* Todos los enlaces en la página de inicio
* Suscríbete al boletín
* El menú desplegable de mi billetera es funcional
* El nombre/dirección de la cuenta se muestra correctamente en la barra de navegación cuando se inicia sesión
* Reportar un error
* Iniciar/cerrar sesión
* Ordenar/filtrar/buscar proyectos
* Comprobar que los proyectos aparecen en la página del proyecto (formato correcto, número correcto)
* Los enlaces dentro de https://giveth.io/join son funcionales
* El contenido dentro de https://giveth.io/about se muestra correctamente, incluidas las pestañas `Misión y visión`, `Historia` y `Equipo`

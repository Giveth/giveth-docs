---
id: bridgeSecurity
title: Implementación de seguridad del puente Giveth
slug: dapps/bridgeSecurity
---
import useBaseUrl from '@docusaurus/useBaseUrl'
import styles from '../../../../src/css/custom.css'
import TraceDeprecated from './_traceDeprecatedES.mdx'

<TraceDeprecated />

#### Una descripción técnica de las características, roles y teoría detrás de la seguridad del Puente Giveth.
*Este documento asume que el lector tiene conocimientos básicos de contratos inteligentes, contratos multisig y cadenas de testnet de Ethereum.*

### ¿Qué es exactamente el puente Giveth?
El puente tiene 3 partes: un contrato en Ethereum Mainnet, un contrato en Rinkeby Testnet y un servicio fuera de la cadena que conecta estos dos contratos. El servicio fuera de la cadena escucha los eventos de estos contratos y transmite los comandos de un contrato al otro.


<img id="contentimg" alt='Dar flujo de TRACE Bridge' src={useBaseUrl('img/content/trace/givethbridge.png')} />


### ¿Como funciona?
El contrato de Giveth Bridge en la red principal es simplemente un contrato de bóveda con 1 medida de seguridad adicional y algunas modificaciones para que funcione como un puente. Los pagos solo se pagan bajo ciertas condiciones. Cada pago puente tiene un bloqueo de tiempo estándar de 48 horas antes de que se pueda realizar el pago.

Durante este tiempo, el guardia de seguridad tiene la capacidad de retrasar un pago más allá de las 48 horas estándar, hasta 30 días. Esto da tiempo para determinar si un pago debe cancelarse o no. No se pueden emitir pagos sin un registro del Guardia de seguridad que ocurra XX minutos después de que se solicitó el pago. Este check-in se realizará diariamente para no retrasar los pagos autorizados.

También hay un `escapeHatch` que puede ser llamado por un `escapeHatchCaller` para enviar los fondos en el puente al multisig de financiación durante el retraso de 48 horas, o cualquier retraso adicional generado por el Guardia de Seguridad.

Este multigrado de financiamiento también retendrá fondos durante algún tiempo para diversificar el riesgo entre el contrato Bridge y el contrato Multisig Consensus, cuando el puente tenga demasiado valor, el multisig de financiamiento `escapeFunds()` del puente y cuando el puente se esté poniendo bajo, el multisig de financiación lo completará manualmente.

Las donaciones y los retiros se realizarán directamente desde el puente. Cuando se realiza una donación al puente, TokenFactory crea un token (a 1:1 ETH) y lo envía a LiquidPledging, donde se toman las decisiones sobre los gastos. Cuando se solicita un pago, los tokens se envían desde Liquid Pledge y se queman en ForeignGivethBridge, momento en el que se emite el comando de vuelta a través del Ghetto Bridge usando la llave del puente para el Giveth Bridge para emitir un pago.

En caso de que por alguna razón el puente se caiga, el servicio de escucha emitirá alarmas para notificar una interrupción del servicio. El servicio de escucha también creará una alarma si se crean tokens sin una donación correspondiente, o si no se crean tokens en el momento de la donación.

## Funciones de seguridad

### Propietario de red principal
Este es el Giveth multisig que puede emitir comandos de control al puente. Pueden cancelar cualquier pago y pueden arrancar el Vigilante de Seguridad o quitar el gastador aprobado (llave puente).
### Financiación de Mainnet y Destino EscapeHatch
Este multisig se utiliza para enviar fondos a Mainnet Bridge (Vault) y actuar como destino de la llamada EscapeHatch.
### Guardia de seguridad
Vigila todos los pagos solicitados, verifica todos los días y retrasa los pagos sospechosos.
### Red principal EscapeHatchCaller
Este es un 1 de x multisig que puede hacer que la bóveda descargue sus fondos en una billetera predeterminada. Tenemos personas que están dispersas por todo el mundo, múltiples puntos de contacto que pueden hacer esto.
### Gastadores permitidos
Estas direcciones son una lista blanca que puede emitir una solicitud de pago al contrato del puente. En la aplicación, la clave puente es el único Gastador Permitido.
### Propietario de ForeignGivethBridge
La llave del puente.
### Rinkeby DappGod Multisig
Este multisig controla las actualizaciones y tiene acceso total para controlar ForeignGivethBridge. También actúa como `escapeHatchDestination` para ForeignGivethBridge y Liquid Pledge.
### Rinkeby EscapeHatchCaller
Este es un 1 de x multisig que puede activar los contratos ForeignGivethBridge y Liquid Pledge para descargar sus tokens en una billetera predeterminada.

## Posibles escenarios de problemas de seguridad

**Bridge Key está comprometida:**
Un pirata informático podría usar la clave de puente para crear transacciones que envíen ETH a su propia dirección para forzar las transacciones. El guardia de seguridad puede retrasar estos pagos el tiempo suficiente para que el propietario multisig cancele el pago y elimine la clave comprometida en Mainnet.

También podrían crear tokens GivETH como controlador de tokens en el lado de rinkeby. Sin embargo, el servicio de escucha detectaría esto y haría sonar la alarma cada vez que se generen tokens GivETH sin una donación de Ether correspondiente. (también suena una alarma si el servicio de claves del puente decide tomar una siesta y no crea tokens GiveETH cuando se recibe una donación).

**El propietario multisig tiene un error y se puede tomar el control (como el hack de paridad) o 6 claves de 11 claves están comprometidas:**
Esto es muy poco probable, pero si esto sucede, no habrá pérdida de fondos. Este multisig no tiene fondos, solo controla el puente. se podría reducir el retraso de 48 horas a 25 horas, el Guardia de seguridad aún puede retrasar cualquier pago, pero el Guardia de seguridad puede ser reemplazado por el propietario. Los fondos podrían escaparse dentro de las 25 horas en este escenario.

**Las claves de EscapeHatchCaller se ven comprometidas:**
En este caso, lo peor que puede pasar es que se interrumpa el flujo de la DApp en Rinkeby. Sin embargo, esto se puede reparar eliminando la clave comprometida en EscapeHatch 1 de x multisig y DAppGod. Una vez hecho esto, simplemente envíe los tokens de devolución a la dirección de donde provienen, es posible un escenario similar en Mainnet. EscapeHatch Caller solo puede mover dinero a un destino de escape, y a ningún otro lugar. Si una clave se ve comprometida, lo peor que pueden hacer es eliminar a todos los propietarios y a ellos mismos del EscapeHatch multisig, pero el propietario 6 de 11 multisig en la red principal aún puede llamar a EscapeHatch y puede reemplazar a la persona que llama EscapeHatch y el 3 de 5 multisig en rinkeby puede también.

**La financiación Multisig tiene un error y se puede tomar el control (como el truco de la paridad) o 4 claves de las 7 claves están comprometidas:**
Esto es extremadamente improbable, pero si esto sucede, habrá una pérdida de fondos. Sin embargo, la pérdida no sería catastrófica ya que los fondos se dividen entre el puente y el multisig.

**El puente en la red principal tiene un error que permite que otra persona se haga cargo como propietario:**
El retraso de 48 horas solo se puede reducir a 25 horas. El guardia de seguridad aún puede retrasar cualquier pago, pero el guardia de seguridad puede ser reemplazado por el propietario. Los fondos podrían escaparse dentro de las 25 horas en este escenario.

**DAppGod Multisig en la red de prueba decide hacerse cargo:**
Si esto ocurriera, el EscapeHatch del puente evitaría cualquier pérdida de fondos, y la configuración de la red de prueba podría volver a implementarse manualmente.

**¿Qué pasa si la llave del guardia de seguridad y el controlador de la llave del puente se ven comprometidos (o sus titulares se confabulan para robar fondos)**:
El Titular multisig puede cancelar pagos y extender el tiempo de demora a más de 48 horas. En este escenario, probablemente no tendrían que hacerlo porque los fondos puente pueden escaparse a la multisig de financiación. Este es el único escenario que podría representar un riesgo grave para los fondos en la bóveda del puente. Esto podría evitarse dentro de las 48 horas posteriores al inicio del evento debido a la demora predeterminada y los fondos pueden escaparse durante ese período.

**Finalmente, ¿qué pasa si Event Listener se desconecta justo antes de cualquiera de los ataques antes mencionados que activan alarmas en caso de compromiso?**
El guardia de seguridad debe ver cualquier transacción sospechosa y puede retrasar los pagos hasta que se solucionen.
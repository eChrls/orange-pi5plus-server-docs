# 1. Introduccion y objetivos

## Que es esta guia

Esta documentacion explica, de forma practica y desde cero, como construir un servidor personal para selfhosting sobre hardware ARM64 de bajo consumo.

La guia esta pensada para un perfil principiante o para cualquier persona interesada en entender un flujo real de trabajo: decision de hardware, arquitectura, seguridad, contenedores y despliegue.

## Por que este proyecto

El objetivo principal es tener una plataforma estable 24/7 para:

- Aprender infraestructura y operaciones con casos reales.
- Publicar proyectos propios sin depender de terceros.
- Centralizar servicios personales (por ejemplo nube privada).
- Probar nuevas aplicaciones sin romper el entorno base.

## Criterios de diseno

La solucion se define por cuatro prioridades:

1. Rendimiento suficiente para varios servicios concurrentes.
2. Consumo electrico contenido para operacion continua.
3. Escalabilidad simple para crecer por fases.
4. Mantenimiento claro, documentado y reproducible.

## Resumen de la eleccion de hardware

La eleccion de una placa ARM64 con 16 GB de RAM y SSD NVMe de 1 TB responde a necesidades concretas:

- Memoria amplia para ejecutar varios servicios de selfhosting, domotica y aplicaciones personalizadas sin saturar el sistema.
- Almacenamiento rapido y con capacidad suficiente para casos de uso de nube personal.
- Coste energetico menor frente a alternativas tipicas que suelen consumir mas en funcionamiento 24/7.

Nota de seguridad: este capitulo evita datos identificables del entorno real. Cuando aparecen valores tecnicos concretos, se usan ejemplos ficticios.

## Que se puede montar en una plataforma asi

Ejemplos habituales de software y casos de uso:

- Nube personal: Nextcloud.
- Domotica: Home Assistant.
- Acceso remoto seguro: VPN.
- Multimedia: streaming en red local o remota.
- Publicacion web: sitios estaticos o aplicaciones en contenedores.
- Operacion y observabilidad: panel de gestion de contenedores y monitorizacion.

## Alcance de esta guia

Esta guia se centra en lo necesario para una primera version funcional y segura.

Incluye:

- Decision de hardware basada en objetivos.
- Arquitectura base para separar servicios y datos.
- Endurecimiento de seguridad inicial.
- Uso de Docker para despliegue y mantenimiento.
- Publicacion de servicios con HTTPS y buenas practicas.

## Estructura del resto de capitulos

- Capitulo 2: eleccion de hardware y analisis coste-rendimiento.
- Capitulo 3: arquitectura del sistema y flujo de servicios.
- Capitulo 4: seguridad base y controles recomendados.
- Capitulo 5: Docker y gestion de servicios.
- Capitulo 6: despliegue/selfhosting paso a paso y validaciones finales.
- Anexo: errores frecuentes y resolucion (troubleshooting de referencia).

## Recomendaciones antes de seguir

- Leer cada capitulo completo antes de ejecutar comandos.
- Mantener una hoja de cambios con fecha, motivo y resultado.
- Aplicar cambios por bloques pequenos y validar en cada paso.
- Usar siempre documentacion oficial para comandos criticos.

## Precauciones importantes

- No publicar credenciales, tokens, claves ni rutas privadas.
- No copiar ejemplos tecnicos con valores reales sin revisarlos.
- No abrir puertos ni servicios sin justificacion y control.
- No tratar ejemplos de este documento como valores finales de produccion.

## Nota sobre datos inventados

Cuando en capitulos posteriores aparezcan ejemplos de dominio, IP, usuario, puertos o credenciales, esos valores seran inventados para evitar filtraciones.

Para obtener valores reales en tu entorno, consulta siempre la documentacion oficial de cada herramienta y valida con comandos de inspeccion del propio sistema.

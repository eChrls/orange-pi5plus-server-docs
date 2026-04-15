# 2. Eleccion de hardware

## Por que este hardware y no otro

La decision se tomo con una idea clara: montar un servidor personal que pueda estar encendido 24/7, con buen rendimiento real para selfhosting y sin disparar el coste electrico.

Los tres puntos clave fueron:

- Memoria suficiente para ejecutar varios servicios a la vez.
- Almacenamiento rapido y amplio para nube personal.
- Consumo bajo para uso continuo.

En la practica, esto se traduce en una plataforma ARM64 con 16 GB de RAM y SSD NVMe de 1 TB.

## Requisitos que se definieron al principio

Antes de comprar, se fijaron requisitos minimos para no quedarse corto en pocos meses.

| Area           | Requisito recomendado         | Motivo                                                        |
| -------------- | ----------------------------- | ------------------------------------------------------------- |
| CPU            | 8 nucleos ARM64 o equivalente | Manejar varios servicios y tareas en paralelo                 |
| RAM            | 16 GB                         | Selfhosting + domotica + apps propias sin saturacion temprana |
| Almacenamiento | NVMe 1 TB                     | Nube personal, copias, medios y crecimiento                   |
| Red            | Ethernet gigabit o superior   | Estabilidad en acceso remoto y transferencia                  |
| Consumo        | Bajo para 24/7                | Reducir coste mensual y temperatura                           |

## Lo que aporta cada componente

### CPU ARM64

Una CPU ARM64 moderna ofrece un equilibrio muy bueno entre rendimiento y consumo.

Para este tipo de servidor, eso significa:

- Buena respuesta en contenedores y servicios web.
- Menor calor sostenido frente a hardware de mayor consumo.
- Coste energetico mas contenido a largo plazo.

### RAM de 16 GB

El motivo principal de elegir 16 GB fue evitar cuellos de botella cuando conviven varios servicios.

Ejemplo tipico de carga (dato orientativo, inventado para explicar el dimensionado):

| Bloque                          | RAM aproximada |
| ------------------------------- | -------------- |
| Sistema base                    | 1.5 a 2.5 GB   |
| Contenedores de infraestructura | 2 a 4 GB       |
| Base de datos + cache           | 1.5 a 3 GB     |
| Servicios de aplicacion         | 2 a 4 GB       |
| Margen operativo                | 2 a 4 GB       |

Recomendacion: valida tus consumos reales con herramientas de monitorizacion en lugar de copiar estos valores como finales.

### NVMe de 1 TB

El SSD NVMe de 1 TB se eligio para dar margen real a un uso mixto:

- Nube personal (por ejemplo Nextcloud).
- Datos de aplicaciones.
- Backups locales temporales.
- Recursos multimedia o ficheros de trabajo.

Ademas, el salto de rendimiento frente a almacenamiento lento se nota en:

- Arranque de servicios.
- Tiempos de respuesta de base de datos.
- Copias y sincronizaciones.

## Comparativa rapida de opciones

| Opcion                 | Ventaja principal         | Desventaja principal                          | Encaje para este proyecto |
| ---------------------- | ------------------------- | --------------------------------------------- | ------------------------- |
| SBC ARM64 de gama alta | Muy buena eficiencia 24/7 | Mas trabajo manual inicial                    | Alto                      |
| Mini PC x86            | Compatibilidad amplia     | Consumo y coste superiores en continuo        | Medio                     |
| NAS comercial          | Integracion simple        | Menor flexibilidad para stacks personalizados | Medio                     |
| VPS cloud              | Sin hardware local        | Coste mensual y menos control fisico          | Medio                     |

La eleccion final prioriza control total, aprendizaje real y coste energetico razonable.

## Consumo 24/7 y coste: como calcularlo

Para estimar coste anual:

$$
	ext{kWh/año} = \frac{\text{W promedio} \times 24 \times 365}{1000}
$$

$$
	ext{Coste anual} = \text{kWh/año} \times \text{precio por kWh}
$$

Ejemplo inventado para comparar:

- Equipo A: 12 W promedio.
- Equipo B: 50 W promedio.
- Precio electricidad: 0.20 por kWh.

Resultado aproximado:

- Equipo A: 105.12 kWh/año -> 21.02 al año.
- Equipo B: 438.00 kWh/año -> 87.60 al año.

La diferencia acumulada en varios años justifica la decision en escenarios 24/7.

## Software que esta alineado con esta eleccion

Con esta base de hardware, es viable ejecutar un stack como:

- Nube personal: Nextcloud.
- Domotica: Home Assistant.
- Acceso seguro remoto: VPN.
- Publicacion de proyectos web en contenedores.
- Streaming y catalogos multimedia.
- Herramientas de administracion y monitorizacion.

No hace falta desplegar todo a la vez. Lo recomendable es crecer por fases y validar estabilidad en cada una.

## Paso a paso recomendado para elegir hardware similar

1. Define tus casos de uso reales para 12-24 meses.
2. Estima RAM segun concurrencia, no solo por servicio individual.
3. Elige almacenamiento pensando en datos y copias, no solo en sistema operativo.
4. Calcula consumo anual antes de comprar.
5. Comprueba soporte oficial del sistema operativo para la arquitectura.
6. Revisa disponibilidad de imagenes Docker para ARM64 de los servicios que quieres montar.

## Precauciones practicas

- Evita dimensionar solo para "arrancar"; dimensiona para operar con margen.
- No bases la compra en benchmarks aislados sin carga real.
- No supongas compatibilidad universal: valida cada servicio en ARM64.
- No publiques inventario de hardware con identificadores sensibles del entorno.

## Donde ampliar informacion

- Fichas tecnicas oficiales del fabricante del hardware.
- Documentacion oficial de Ubuntu Server para ARM64.
- Documentacion oficial de Docker y de cada servicio que quieras desplegar.

Si hay discrepancias entre una guia externa y la documentacion oficial, prioriza siempre la documentacion oficial y pruebas controladas en tu entorno.

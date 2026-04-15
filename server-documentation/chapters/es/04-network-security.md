# 4. Seguridad base

## Objetivo del capitulo

Este capitulo define una base de seguridad realista para un servidor personal en produccion continua.

La meta es simple: reducir superficie de ataque, limitar impacto de errores y mantener una operacion estable sin volver el sistema inmantenible.

## Enfoque de seguridad

La seguridad se aplica en capas:

1. Acceso administrativo seguro.
2. Exposicion minima de red.
3. Proteccion automatica ante intentos de abuso.
4. Cifrado de trafico publico.
5. Revisiones periodicas.

## Herramientas recomendadas segun objetivo

| Objetivo                      | Herramienta recomendada     | Cuándo usarla                                                | Nivel      |
| ----------------------------- | --------------------------- | ------------------------------------------------------------ | ---------- |
| Bloquear fuerza bruta         | Fail2Ban                    | Siempre que haya acceso remoto o paneles publicados          | Base       |
| Reducir superficie de red     | Firewall del host           | Siempre, desde el primer dia                                 | Base       |
| Cifrar trafico publico        | TLS en proxy reverso        | Siempre en servicios web publicados                          | Base       |
| Revisar malware conocido      | ClamAV (escaneo programado) | Recomendable en servidores con ficheros subidos por usuarios | Intermedio |
| Filtrar ataques web complejos | WAF (ejemplo: ModSecurity)  | Cuando hay formularios expuestos o riesgo alto de abuso web  | Avanzado   |

Nota practica:

- Para uso personal o selfhosting inicial, la base suele ser: firewall + Fail2Ban + HTTPS.
- Si el servicio crece o recibe mucho trafico automatizado, conviene añadir WAF.

## Capa 1: acceso administrativo

### Recomendacion

- Usar autenticacion por clave para administracion remota.
- Desactivar acceso administrativo por contrasena en servicios expuestos.
- Limitar usuarios con permisos de administracion.

### Paso a paso

1. Crear claves en el equipo cliente.
2. Registrar clave publica en el servidor.
3. Probar acceso por clave antes de endurecer mas.
4. Aplicar endurecimiento de configuracion SSH.
5. Reiniciar servicio y validar acceso real.

### Precaucion

Nunca cierres la sesion activa hasta confirmar que el nuevo acceso funciona.

## Capa 2: control de red

### Regla base

Politica por defecto: bloquear entrada y abrir solo puertos necesarios.

### Ejemplo de politica (valores ficticios)

```text
Entrada: denegada por defecto
Salida: permitida por defecto
Permitir solo:
- SSH_ADMIN_PORT/tcp
- 80/tcp
- 443/tcp
```

### Paso a paso

1. Definir politica por defecto.
2. Habilitar solo puertos de servicios necesarios.
3. Activar logging del firewall.
4. Verificar reglas efectivas.

### Precaucion

No abras puertos de herramientas internas al exterior por comodidad.

## Capa 3: proteccion contra fuerza bruta

### Recomendacion

Configurar bloqueo automatico de intentos repetidos en servicios criticos.

Herramienta habitual: Fail2Ban.

### Parametros tipicos (ejemplo inventado)

| Parametro | Valor de ejemplo |
| --------- | ---------------- |
| maxretry  | 3                |
| findtime  | 10 minutos       |
| bantime   | 2 horas          |

### Paso a paso

1. Activar proteccion para acceso administrativo.
2. Confirmar que lee logs correctos del sistema.
3. Probar ban y unban en entorno controlado.
4. Revisar estado del servicio periodicamente.

### Precaucion

Asegura lista de exclusiones locales para no bloquear acceso legitimo desde tu red de administracion.

### Como implementarlo sin complicarte

1. Empieza protegiendo solo acceso administrativo.
2. Activa ban temporal corto y revisa falsos positivos.
3. Ajusta umbrales de forma gradual.
4. Amplia a otros servicios solo cuando ya tengas trazabilidad clara en logs.

Con este orden, reduces riesgo real sin romper accesos legitimos.

## Capa 4: HTTPS y certificados

### Recomendacion

Todo servicio publico debe salir por HTTPS con certificados validos y renovacion automatica.

### Flujo operativo

1. El proxy recibe trafico publico.
2. Solicita o renueva certificados automaticamente.
3. Redirige HTTP a HTTPS.
4. Aplica cabeceras de seguridad recomendadas.

Herramientas comunes para esta capa:

- Proxy dinamico con TLS automatico: Traefik.
- Proxy con panel visual: Nginx Proxy Manager.

La eleccion depende de tu perfil:

- Si priorizas automatizacion por etiquetas y despliegue con contenedores, Traefik suele encajar mejor.
- Si priorizas gestion visual desde panel web, Nginx Proxy Manager suele ser mas sencillo al principio.

### Validaciones minimas

- El dominio responde por HTTPS.
- HTTP redirige a HTTPS.
- El certificado no esta caducado.
- La cadena de confianza es valida.

## Capa 5: higiene operativa

### Controles semanales recomendados

- Estado de firewall.
- Estado de proteccion contra fuerza bruta.
- Certificados proximos a vencimiento.
- Servicios criticos en ejecucion.
- Espacio en disco y logs.

Si usas ClamAV, incluye tambien:

- Confirmar ejecucion del ultimo escaneo programado.
- Revisar resumen del ultimo informe.
- Validar que no haya bloqueos falsos en rutas de aplicacion.

### Controles mensuales recomendados

- Actualizaciones de seguridad.
- Revision de puertos expuestos.
- Prueba de restauracion de backup.
- Revalidacion de cuentas y permisos.

## Checklist de seguridad base

- Acceso administrativo por clave activo.
- Acceso por contrasena desactivado en servicios expuestos.
- Firewall con politica restrictiva.
- Solo puertos necesarios abiertos.
- Proteccion automatica anti-fuerza-bruta activa.
- Servicios publicos por HTTPS.
- Renovacion de certificados automatizada.
- Registro de eventos habilitado y revisado.

## Errores frecuentes y como evitarlos

1. Endurecer SSH sin probar acceso alternativo.
2. Abrir puertos temporales y olvidarlos.
3. Configurar HTTPS una vez y no revisar renovacion.
4. Suponer que un servicio esta protegido sin validar logs.
5. No documentar cambios de seguridad.

## Recomendaciones finales

- Empieza por controles simples y consistentes.
- Automatiza solo lo que entiendes y puedes auditar.
- Cambia una cosa cada vez y valida inmediatamente.
- Manten un historial de cambios con fecha y motivo.

## Guia rapida de stack por nivel

### Nivel base (recomendado para empezar)

- Firewall del host.
- Fail2Ban para acceso administrativo.
- Proxy reverso con HTTPS.
- Backups probados.

### Nivel intermedio

- ClamAV con escaneo programado.
- Alertas de estado y seguridad.
- Reglas mas finas por servicio.

### Nivel avanzado

- WAF (por ejemplo ModSecurity) delante de servicios publicos.
- Segmentacion de red mas estricta.
- Revisiones de seguridad periodicas con checklist formal.

## Nota sobre datos inventados

En este capitulo, cualquier dominio, IP, usuario, puerto o ruta mostrados como ejemplo son datos inventados.

Para configurar valores reales, usa documentacion oficial de cada herramienta y valida con comandos de inspeccion de tu propio entorno.

# 7. FAQ y Troubleshooting de referencia

## Objetivo del capitulo

Este capitulo recopila problemas tipicos que pueden aparecer en un servidor de selfhosting y una forma ordenada de resolverlos.

No describe el estado actual de un entorno concreto. Es una guia de referencia para actuar con metodo.

## Metodo recomendado cuando algo falla

1. Confirmar sintoma real.
2. Identificar capa afectada (red, proxy, aplicacion, base de datos, sistema).
3. Revisar logs de esa capa.
4. Aplicar una correccion cada vez.
5. Validar resultado antes del siguiente cambio.
6. Documentar causa y solucion.

## FAQ 1: El servicio no abre por HTTPS

### Sintoma

- El dominio responde por HTTP o no responde por HTTPS.

### Causas habituales

- Certificado no emitido o caducado.
- DNS apuntando a destino incorrecto.
- Regla de proxy incompleta.

### Que revisar

- Estado del proxy reverso.
- Estado de certificado.
- Resolucion DNS.
- Redireccion HTTP a HTTPS.

### Solucion tipo

1. Confirmar DNS.
2. Confirmar router/NAT.
3. Revisar router/regla de proxy.
4. Forzar reintento de emision de certificado.
5. Validar certificado y redireccion.

## FAQ 2: El contenedor entra en bucle de reinicio

### Sintoma

- Estado restarting continuo.

### Causas habituales

- Configuracion invalida.
- Permisos de volumen incorrectos.
- Dependencia no disponible (por ejemplo base de datos).

### Que revisar

- Logs del contenedor.
- Healthcheck.
- Montajes de volumen.
- Variables de entorno obligatorias.

### Solucion tipo

1. Corregir configuracion.
2. Recrear servicio.
3. Verificar health endpoint interno.
4. Validar acceso desde proxy.

## FAQ 3: Funciona por dentro pero no desde fuera

### Sintoma

- Servicio responde en local pero no desde internet.

### Causas habituales

- Puerto no publicado o no redirigido.
- Firewall bloqueando.
- DNS sin actualizar.

### Que revisar

- Reglas de firewall.
- NAT en router.
- Resolucion DNS externa.
- Servicio escuchando en el puerto esperado.

### Solucion tipo

1. Verificar puertos abiertos necesarios.
2. Revisar NAT.
3. Forzar update DNS dinamico si aplica.
4. Repetir prueba externa.

## FAQ 4: La base de datos queda expuesta por error

### Sintoma

- Puerto de base de datos accesible desde red no esperada.

### Causa habitual

- Publicacion de puerto en compose o regla abierta sin querer.

### Solucion tipo

1. Quitar publicacion externa de puerto.
2. Dejar base de datos solo en red privada interna.
3. Verificar reglas de firewall.
4. Confirmar acceso solo desde servicios autorizados.

## FAQ 5: Error tras actualizar imagen de contenedor

### Sintoma

- Servicio deja de responder despues de actualizar.

### Causas habituales

- Cambio incompatible de version.
- Migracion de datos no aplicada.
- Variable de entorno nueva no definida.

### Solucion tipo

1. Volver a la version previa estable.
2. Revisar changelog oficial.
3. Aplicar cambios requeridos en entorno.
4. Reintentar en ventana controlada.

## FAQ 6: Consumo de recursos fuera de control

### Sintoma

- CPU, RAM o disco suben de forma sostenida.

### Causas habituales

- Logs creciendo sin rotacion.
- Servicio en error repetitivo.
- Falta de limites o de limpieza periodica.

### Solucion tipo

1. Identificar proceso/contenedor responsable.
2. Revisar logs y rotacion.
3. Ajustar limites y politicas de reinicio.
4. Programar tareas de mantenimiento.

## Checklist rapido de recuperacion

- Servicio critico levantado.
- Acceso HTTPS operativo.
- Certificado valido.
- Datos intactos y persistentes.
- No hay puertos sensibles expuestos.
- Logs sin errores criticos repetitivos.

## Recomendaciones para prevenir recurrencia

- Mantener cambios pequenos y trazables.
- Versionar configuraciones.
- Hacer backup antes de cambios relevantes.
- Probar restauracion de backup regularmente.
- Evitar automatizaciones que no puedas auditar.

## Nota sobre valores de ejemplo

Todos los valores de dominio, IP, usuario, puerto, ruta o credencial que aparezcan en ejemplos de esta guia son inventados.

Para valores reales, consulta documentacion oficial de cada herramienta y valida en tu entorno con comandos de inspeccion.

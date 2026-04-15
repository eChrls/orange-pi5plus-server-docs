# Orange Pi 5 Plus Server - Documentacion publica

Proyecto de documentacion tecnica publica del servidor Orange Pi 5 Plus.

Incluye:

- Guia paso a paso de instalacion, seguridad, Docker, monitorizacion y troubleshooting.
- 10 capitulos en Markdown en espanol e ingles.
- Web interactiva estatica para lectura y navegacion.

## Estructura

- index.html: shell principal de la web.
- assets/: estilos, javascript e imagenes.
- chapters/: capitulos en Markdown (es/en).
- deploy/: stack de despliegue seguro para Traefik.

## Despliegue recomendado (server-doc.duckdns.org)

Modelo elegido por simplicidad, seguridad y mantenimiento:

- Contenedor Nginx estatico.
- Reverse proxy y SSL en Traefik.
- HTTP forzado a HTTPS.
- Bloqueo de dotfiles y rutas sensibles a nivel Nginx.
- Contenedor con hardening basico (read_only, no-new-privileges, tmpfs).

Archivos de despliegue:

- deploy/docker-compose.server-doc.yml
- deploy/nginx.server-doc.conf
- deploy/deploy-server-doc.sh

## Lanzar en el servidor

Ejecutar en bash de Orange Pi:

```bash
cd /mnt/data/www/portfolio-projects/server-documentation
chmod +x deploy/deploy-server-doc.sh
sudo ./deploy/deploy-server-doc.sh
```

## Verificacion post-despliegue

```bash
docker ps --filter name=server-doc
docker logs --tail 100 server-doc
curl -I http://server-doc.duckdns.org
curl -I https://server-doc.duckdns.org
curl -I https://server-doc.duckdns.org/.git/config
curl -I https://server-doc.duckdns.org/.env
```

Resultado esperado:

- HTTP responde con redireccion a HTTPS.
- HTTPS responde 200.
- .git y .env responden 403 o 404.

## Nota de idioma

La web abre por defecto en espanol (ES) y permite cambio manual a ingles.

## Dominio publico

- https://server-doc.duckdns.org/

Actualizado: 15 abril 2026

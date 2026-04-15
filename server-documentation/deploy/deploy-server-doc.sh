#!/usr/bin/env bash
set -euo pipefail

STACK_DIR="/mnt/data/docker/server-doc"
SOURCE_DIR="/mnt/data/www/portfolio-projects/server-documentation"
COMPOSE_SOURCE="$SOURCE_DIR/deploy/docker-compose.server-doc.yml"
COMPOSE_TARGET="$STACK_DIR/docker-compose.yml"
NGINX_SOURCE="$SOURCE_DIR/deploy/nginx.server-doc.conf"
DUCKDNS_SCRIPT="/home/casa74b/scripts/duckdns-update.sh"
DUCKDNS_DOMAINS_ACCOUNT_1="isabelles,mi-galeria,porfolio,server-doc"

if [[ "$(id -u)" -ne 0 ]]; then
  echo "Este script debe ejecutarse con sudo."
  exit 1
fi

if [[ ! -f "$COMPOSE_SOURCE" ]]; then
  echo "No existe $COMPOSE_SOURCE"
  exit 1
fi

if [[ ! -f "$NGINX_SOURCE" ]]; then
  echo "No existe $NGINX_SOURCE"
  exit 1
fi

mkdir -p "$STACK_DIR"
cp "$COMPOSE_SOURCE" "$COMPOSE_TARGET"
chmod 640 "$COMPOSE_TARGET"

# Ensure DuckDNS account 1 updates the exact requested domains.
if [[ -f "$DUCKDNS_SCRIPT" ]]; then
  if grep -q "${DUCKDNS_DOMAINS_ACCOUNT_1}" "$DUCKDNS_SCRIPT"; then
    echo "DuckDNS ya configurado con dominios esperados para cuenta 1."
  elif grep -q '^DUCKDNS_DOMAINS_1=' "$DUCKDNS_SCRIPT"; then
    cp "$DUCKDNS_SCRIPT" "${DUCKDNS_SCRIPT}.bak.$(date +%Y%m%d-%H%M%S)"
    sed -i "s|^DUCKDNS_DOMAINS_1=.*$|DUCKDNS_DOMAINS_1=${DUCKDNS_DOMAINS_ACCOUNT_1}|" "$DUCKDNS_SCRIPT"
    chmod 700 "$DUCKDNS_SCRIPT"
    echo "DuckDNS cuenta 1 actualizada mediante DUCKDNS_DOMAINS_1=${DUCKDNS_DOMAINS_ACCOUNT_1}"
  else
    echo "No se pudo actualizar DuckDNS automaticamente: formato no reconocido."
    echo "Edita manualmente $DUCKDNS_SCRIPT y ajusta cuenta 1 a: ${DUCKDNS_DOMAINS_ACCOUNT_1}"
  fi
else
  echo "No se encontro $DUCKDNS_SCRIPT. Configuralo manualmente."
fi

if ! docker network inspect traefik-public >/dev/null 2>&1; then
  echo "La red traefik-public no existe. Creala antes de seguir."
  exit 1
fi

docker compose -f "$COMPOSE_TARGET" pull
docker compose -f "$COMPOSE_TARGET" up -d

echo "Esperando a que el servicio responda..."
for _ in {1..20}; do
  if docker exec server-doc wget -q --spider http://127.0.0.1:8080/; then
    echo "OK: server-doc responde dentro del contenedor."
    break
  fi
  sleep 2
done

docker ps --filter "name=server-doc" --format "table {{.Names}}\t{{.Status}}\t{{.Ports}}"
echo "Despliegue completado. Verifica: https://server-doc.duckdns.org"

# Ekso — Схема серверов

## Серверы

### Сервер 1 (основной)
- Hetzner CAX21: 4 ядра, 8 GB RAM, 80 GB SSD.
- €4/мес.
- Node.js + Fastify + ws.
- PostgreSQL, Redis, coturn, Nginx, pm2.

### Сервер 2 (резервный)
- Текущий (138.3.242.63): 2 ядра, 956 MB RAM, 45 GB SSD.
- Резервный.
- SEC-General (3 версии).

### Сервер 3 (облако)
- Backblaze B2.
- 10 GB бесплатно.
- Медиа, аватарки, SEC-General (1 версия), SEC-Channel, бэкапы.

## Cloudflare
- CDN, DDoS, SSL, прокси.

## Схема
Клиент → Cloudflare → Сервер 1.
Сервер 1 → Сервер 2 (репликация).
Сервер 1 → Backblaze B2.
# Trivial del Día

Un trivial diario con 700+ preguntas de cultura general en español. Juega la partida del día o en modo libre.

🌐 **Web:** [trivial.hugopvigo.es](https://trivial.hugopvigo.es)

## Características

- **Modo Diario:** Una nueva partida cada día con 10 preguntas aleatorias
- **Modo Libre:** Jugar sin límite las veces que quieras
- **Feedback visual:** Aciertos en verde, fallos en rojo
- **Estadísticas:** Partidas jugadas, racha actual, mejor racha, porcentaje de acierto
- **Compartir:** Resultado tipo Wordle (🟩🟥) para copiar y pegar
- **700+ preguntas** en 9 categorías: Geografía, Historia, Ciencia, Deportes, Arte/Literatura, Naturaleza, Cine/Música, Gastronomía, Tecnología

## Desarrollo

Proyecto vanilla HTML/CSS/JS. Sin frameworks, sin build tools.

```bash
# Abrir directamente en el navegador
open index.html
```

## Docker

```bash
docker compose up -d --build
```

La app queda disponible en `http://localhost:8082`.

## Deploy en VPS 7

```bash
# Copiar archivos al servidor
scp -i ~/.ssh/REDACTED_KEY -P 2220 \
  index.html style.css script.js data.js Dockerfile docker-compose.yml \
  ubuntu@REDACTED_IP:/opt/Trivial/

# SSH al servidor
ssh -i ~/.ssh/REDACTED_KEY -p 2220 ubuntu@REDACTED_IP

# Construir y arrancar
cd /opt/Trivial
sudo docker compose up -d --build
```

Configurar en Apache (VPS 7):
- Crear `/etc/apache2/sites-available/trivial.hugopvigo.conf` con ProxyPass a `127.0.0.1:8082`
- `sudo a2ensite trivial.hugopvigo.conf && sudo systemctl reload apache2`

## Licencia

CC0 1.0 Universal (dominio público)

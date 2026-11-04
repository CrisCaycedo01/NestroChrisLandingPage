# Chris Wine

Landing page en Next.js. Node.js 20.9 o posterior.

## Desarrollo y validación

```sh
npm ci
npm run dev
npm run lint
npm run build
npm run start
npm audit --omit=dev
```

## SEO y despliegue

La URL canónica por defecto es https://nestro-chris-landing-page.vercel.app/.
Para cambiar de dominio, define `SITE_URL` con la URL absoluta antes de compilar.
Los metadatos, `/robots.txt` y `/sitemap.xml` se generan en la compilación.
Tras desplegar, verifica esos endpoints y registra el sitemap en Google Search Console.

## Auditoría reproducible

Con la compilación de producción en http://localhost:3000:

```sh
npx lighthouse http://localhost:3000 --output=html --output-path=lighthouse-mobile.html
npx lighthouse http://localhost:3000 --preset=desktop --output=html --output-path=lighthouse-desktop.html
```

Los informes contienen datos del entorno local; repetir en la URL pública tras desplegar.
La puntuación automatizada no sustituye la revisión manual con teclado, zoom y lector de pantalla.
HubSpot y las etiquetas configuradas en Google Tag Manager siguen activos. Sus cookies,
recursos y cambios externos pueden afectar buenas prácticas y rendimiento. La accesibilidad
interna del formulario de HubSpot se debe administrar también desde HubSpot.
No se han enviado formularios ni modificado el contenedor GTM durante la validación.
El teléfono existente debe confirmarse antes del lanzamiento.

## Cambios

- Metadatos descriptivos, Open Graph, Twitter, canonical, robots y sitemap.
- Enlace funcional al formulario de contacto en lugar de los campos iniciales sin envío.
- Regiones semánticas, salto al contenido, foco visible, navegación móvil,
  contraste y movimiento reducido.
- Eliminación de fuentes descargadas que el diseño no utilizaba.
- Aviso de fallo de carga de HubSpot y carga diferida de su script.
- Actualización de Next.js y dependencias compatibles; auditoría de producción sin vulnerabilidades.
  Persisten 8 avisos moderados en herramientas de desarrollo; no se aplica la degradación
  incompatible de ESLint propuesta por `npm audit fix --force`.

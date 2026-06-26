# RD Global Trade — Web institucional

## Objetivo
Landing page de una sola página (one-page) para RD Global Trade Droguería: importadora peruana de productos especiales y distintivos, con foco en área médica.

## Contexto
Refactor del `index.html` original (todo embebido en un solo archivo). Se separó en HTML / CSS / JS, se optimizó el código y se actualizaron los recursos visuales.

## Estructura
```
2026-06-rd-global-trade-web/
├── index.html            # Solo HTML (estructura)
├── css/
│   └── styles.css        # Todos los estilos
├── js/
│   └── main.js           # Navbar scroll, menú móvil, animaciones, formulario
├── assets/
│   ├── logo.png           # Logo principal (navbar, footer, favicon)
│   └── logo_sin_fondo.png # Logo del hero (centro de la página)
└── README.md
```

## Recursos pendientes que debes colocar
La sección **Distribución** tiene 3 espacios (placeholders) para fotos. Descarga las que prefieras,
renómbralas y colócalas en `assets/` con estos nombres exactos:

- `assets/distribucion-1.jpg` → almacenamiento / bodega de dispositivos médicos
- `assets/distribucion-2.jpg` → control de inventario / estanterías
- `assets/distribucion-3.jpg` → distribución / transporte / entrega

Luego, en `index.html`, dentro de cada `.distribucion-item`, reemplaza el bloque
`<div class="placeholder">...</div>` por la línea `<img>` que está comentada justo encima.

### Fotos libres sugeridas (uso comercial gratis, sin atribución)
Busca y descarga desde estas páginas (todas permiten uso comercial):

- Pexels — Almacén / logística: https://www.pexels.com/search/warehouse%20logistics/
- Pexels — Equipo médico: https://www.pexels.com/search/medical%20equipment/
- Pexels — Suministros / distribución: https://www.pexels.com/search/supply/
- Pixabay — Equipo médico (sin atribución): https://pixabay.com/images/search/medical%20equipment/

Sugerencia de términos de búsqueda: "medical warehouse", "pharmacy inventory",
"medical supplies distribution", "logistics delivery".

## Cambios realizados
- CSS y JS separados del HTML.
- Hero (primera página): fondo **blanco** limpio (se quitó la imagen de fondo).
- Logo añadido en `assets/logo.png` (navbar, footer, favicon).
- `logo_sin_fondo.png` solo en el centro del hero.
- Nueva sección **Distribución** (galería de 3 fotos) entre "Quiénes Somos" y "Área Médica", con enlace en el navbar.
- Emails des-ofuscados y corregidos:
  - Rosa Ramírez: rosa.ramirez@rdglobaltrade.com
  - Hernán Gutiérrez: hgutierrez@rdglobaltrade.com
  - César Ramírez: cramirez@rdglobaltrade.com
- Eliminado el script de Cloudflare `email-decode` (inútil fuera de su CDN).
- Eliminados los "orbs" decorativos del fondo.
- Formulario movido a JS (`#contactForm`) en vez de `onsubmit` inline.
- `IntersectionObserver` deja de observar elementos ya revelados (más eficiente).
- Añadida `<meta name="description">` para SEO.

## Entregables
- Sitio estático funcional, listo para abrir en navegador o subir a hosting.

## Estado
- ✅ Refactor, separación, logo y emails completados.
- ✅ Hero con fondo blanco y sección Distribución agregada.
- ⚠️ Pendiente: colocar las 3 fotos reales en `assets/` y descomentar las etiquetas `<img>`.

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
│   ├── logo_sin_fondo.png # Logo del hero (centro de la página)
│   └── Background.png     # Fondo del hero
└── README.md
```

## Cambios realizados
- CSS y JS separados del HTML.
- Hero (primera página): `Background.png` de fondo + overlay claro para legibilidad del texto.
- `logo_sin_fondo.png` solo en el centro del hero (navbar/footer/favicon siguen con `logo.png`).
- Emails des-ofuscados → ahora son `mailto:` reales (placeholder `*@rdglobaltrade.com`, ajústalos a los reales).
- Eliminado el script de Cloudflare `email-decode` (solo aplica en su CDN, inútil en local).
- Eliminados los "orbs" decorativos del fondo (ya no hacen falta con la imagen de fondo).
- Formulario movido a JS (`#contactForm`) en vez de `onsubmit` inline.
- `IntersectionObserver` ahora deja de observar elementos ya revelados (más eficiente).
- Añadida `<meta name="description">` para SEO.

## Entregables
- Sitio estático funcional, listo para abrir en navegador o subir a hosting.

## Estado
- ✅ Refactor y separación completados.
- ⚠️ Pendiente: copiar `logo.png` a la raíz y reemplazar los emails placeholder por los reales.

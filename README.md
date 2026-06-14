# SnapPage — Photobooks Personalizados

Sitio web moderno, minimalista y responsive para el negocio de photobooks **SnapPage**.

## Tecnologías
- Next.js 15 (App Router)
- React 19
- Tailwind CSS v4
- TypeScript

## Instalación local

```bash
npm install
npm run dev
```

Abre http://localhost:3000

## Configuración importante

Antes de publicar, edita `/lib/data.ts` y actualiza:

```ts
export const WHATSAPP_NUMBER = "51999999999"; // ← Tu número con código de país
export const GOOGLE_CALENDAR_LINK = "https://calendar.app.google/NX1ZESq47e3DvpwN6"; // ← Tu link de Google Calendar
```

## Personalización del banner promocional

En `/app/components/HeroSection.tsx`, busca el objeto `PROMO`:

```ts
const PROMO = {
  activa: true,                          // true/false para mostrar/ocultar
  texto: "Especial Día del...", // Texto del banner
  bgColor: "#b28776",                    // Color de fondo
  textColor: "#FDF8F5",                  // Color del texto
};
```

## Agregar plantillas

En `/lib/data.ts`, añade elementos al arreglo `plantillas`:

```ts
{
  id: 10,
  nombre: "Nombre de la plantilla",
  categoria: "Viajes",         // Debe coincidir con categorias[]
  imagen: "/plantillas/imagen.jpg",
  portadas: ["/portadas/p1.jpg", "/portadas/p2.jpg"],
}
```

## Imágenes

Coloca tus imágenes reales en `/public/`:
- `/public/plantillas/` — previews de plantillas
- `/public/portadas/` — modelos de portadas
- `/public/galeria/` — fotos y videos del trabajo terminado

## Deploy en Vercel

```bash
npm i -g vercel
vercel
```

O conecta el repositorio directamente en vercel.com.

## Estructura de carpetas

```
snap-page/
├── app/
│   ├── components/        # Componentes reutilizables
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── HeroSection.tsx
│   │   ├── QuienesSomos.tsx
│   │   ├── ComoFunciona.tsx
│   │   ├── PlanesPreview.tsx
│   │   ├── FlipbookImages.tsx
│   │   ├── FlipbookPDF.tsx
│   │   └── WhatsAppFloat.tsx
│   ├── planes/            # Página de planes
│   ├── plantillas/        # Página de plantillas
│   ├── galeria/           # Página de galería
│   ├── layout.tsx
│   ├── page.tsx           # Home
│   └── globals.css
└── lib/
    └── data.ts            # Todos los datos del sitio
```

export const WHATSAPP_NUMBER = "51922272439"; // Reemplaza con tu número

export const whatsappLinks = {
  minimal: `https://wa.me/${WHATSAPP_NUMBER}?text=Hola%2C%20quiero%20realizar%20un%20pedido%20del%20Plan%20Minimal%20%F0%9F%93%96`,
  personalizado: `https://wa.me/${WHATSAPP_NUMBER}?text=Hola%2C%20quiero%20continuar%20con%20el%20Plan%20Personalizado%20%F0%9F%8C%B8`,
  tengoDiseno: `https://wa.me/${WHATSAPP_NUMBER}?text=Hola%2C%20tengo%20mi%20dise%C3%B1o%20listo%20y%20quiero%20imprimirlo%20con%20ustedes%20%F0%9F%92%AB`,
  premium: `https://wa.me/${WHATSAPP_NUMBER}?text=Hola%2C%20me%20interesa%20el%20Plan%20Premium%20y%20quisiera%20agendar%20una%20reuni%C3%B3n%20%E2%9C%A8`,
  general: `https://wa.me/${WHATSAPP_NUMBER}?text=Hola%2C%20estoy%20interesad@%20en%20crear%20un%20photobook%20%F0%9F%93%96`,
};

export const GOOGLE_CALENDAR_LINK = "https://calendar.app.google/NX1ZESq47e3DvpwN6"; // Reemplaza con tu link

export const planes = [
  {
    id: "minimal",
    nombre: "Minimal",
    precio: "Desde S/ 89",
    descripcion: "Ideal para quienes desean imprimir sus recuerdos de forma sencilla.",
    incluye: ["1 foto por página", "Organización automática", "Portada personalizada"],
    boton: "Crear mi photobook",
    destacado: false,
  },
  {
    id: "personalizado",
    nombre: "Personalizado",
    precio: "Desde S/ 149",
    descripcion: "Ideal para viajes, aniversarios y ocasiones especiales.",
    incluye: ["Plantillas temáticas", "Espacios para textos", "Distribución según tu orden"],
    boton: "Elegir plantilla",
    destacado: true,
  },
  {
    id: "tengo-diseno",
    nombre: "Tengo mi Diseño",
    precio: "Desde S/ 99",
    descripcion: "Para clientes que ya diseñaron su photobook en Canva u otro programa.",
    incluye: ["Impresión profesional", "Revisión básica del archivo", "Listo para imprimir"],
    boton: "Subir mi diseño",
    destacado: false,
  },
  {
    id: "premium",
    nombre: "Premium",
    precio: "Desde S/ 299",
    descripcion: "Experiencia completamente personalizada con asesoría completa.",
    incluye: ["Videollamada con la diseñadora", "Diseño desde cero", "Asesoría completa"],
    boton: "Agendar reunión",
    destacado: false,
  },
];

export const categorias = [
  "Todos",
  "Viajes",
  "Parejas",
  "Bebés",
  "Graduación",
  "Familia",
  "Navidad",
];

export const plantillas = [
  {
    id: 1,
    nombre: "Golden Hour",
    categoria: "Viajes",
    imagen: "/plantillas/viajes-1.jpg",
    portadas: ["/portadas/portada-1.jpg", "/portadas/portada-2.jpg"],
  },
  {
    id: 2,
    nombre: "Wanderlust",
    categoria: "Viajes",
    imagen: "/plantillas/viajes-2.jpg",
    portadas: ["/portadas/portada-1.jpg", "/portadas/portada-3.jpg"],
  },
  {
    id: 3,
    nombre: "Pour Toujours",
    categoria: "Parejas",
    imagen: "/plantillas/parejas-1.jpg",
    portadas: ["/portadas/portada-2.jpg", "/portadas/portada-4.jpg"],
  },
  {
    id: 4,
    nombre: "Mon Amour",
    categoria: "Parejas",
    imagen: "/plantillas/parejas-2.jpg",
    portadas: ["/portadas/portada-1.jpg", "/portadas/portada-3.jpg"],
  },
  {
    id: 5,
    nombre: "Little Star",
    categoria: "Bebés",
    imagen: "/plantillas/bebes-1.jpg",
    portadas: ["/portadas/portada-2.jpg", "/portadas/portada-4.jpg"],
  },
  {
    id: 6,
    nombre: "Baby Bloom",
    categoria: "Bebés",
    imagen: "/plantillas/bebes-2.jpg",
    portadas: ["/portadas/portada-1.jpg", "/portadas/portada-2.jpg"],
  },
  {
    id: 7,
    nombre: "Cap & Gown",
    categoria: "Graduación",
    imagen: "/plantillas/graduacion-1.jpg",
    portadas: ["/portadas/portada-3.jpg", "/portadas/portada-4.jpg"],
  },
  {
    id: 8,
    nombre: "Together Always",
    categoria: "Familia",
    imagen: "/plantillas/familia-1.jpg",
    portadas: ["/portadas/portada-1.jpg", "/portadas/portada-2.jpg"],
  },
  {
    id: 9,
    nombre: "Winter Magic",
    categoria: "Navidad",
    imagen: "/plantillas/navidad-1.jpg",
    portadas: ["/portadas/portada-3.jpg", "/portadas/portada-4.jpg"],
  },
];

export const pasos = [
  {
    numero: "01",
    titulo: "Elige tu plan",
    descripcion: "Selecciona el plan que mejor se adapte a tu historia.",
  },
  {
    numero: "02",
    titulo: "Envía tus fotos",
    descripcion: "Revisa nuestro video para enviar tus fotos enumeradas en alta calidad .",
  },
  {
    numero: "03",
    titulo: "Revisa la previsualización",
    descripcion: "Te enviamos un preview en PDF de cómo quedará tu photobook.",
  },
  {
    numero: "04",
    titulo: "Realiza tu pedido",
    descripcion: "Confirma y realiza el pago del 50%. Nosotros nos encargamos del resto.",
  },
];

export const beneficios = [
  {
    icono: "✦",
    titulo: "Diseños exclusivos",
    descripcion: "Cada photobook es único, creado especialmente para ti.",
  },
  {
    icono: "◈",
    titulo: "Materiales premium",
    descripcion: "Impresión de alta calidad con materiales que duran años.",
  },
  {
    icono: "◇",
    titulo: "Atención personalizada",
    descripcion: "Te acompañamos en cada paso del proceso con amor.",
  },
];

export const faqItems = [
  {
    pregunta: "¿Cuánto tiempo tarda en estar listo mi photobook?",
    respuesta: "El tiempo de producción es de 5 a 7 días hábiles después de aprobar la previsualización.",
  },
  {
    pregunta: "¿Cómo envío mis fotos?",
    respuesta: "Puedes subirlas directamente desde nuestra web o enviarlas por WhatsApp en el formato que prefieras.",
  },
  {
    pregunta: "¿Hacen envíos a todo el país?",
    respuesta: "Sí, enviamos a todo el territorio nacional. El costo de envío varía según tu ubicación.",
  },
  {
    pregunta: "¿Puedo ver cómo quedará antes de confirmar el pedido?",
    respuesta: "¡Por supuesto! Siempre enviamos una previsualización completa para tu aprobación antes de imprimir.",
  },
  {
    pregunta: "¿Qué formatos de archivo aceptan?",
    respuesta: "Aceptamos JPG, PNG y PDF. Para el Plan Tengo mi Diseño, el PDF debe estar en alta resolución (300 DPI).",
  },
];

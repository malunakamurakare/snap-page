import { whatsappLinks } from "@/lib/data";

// Sample gallery items — replace images/videos with real assets
const galeriaItems = [
  { tipo: "imagen", titulo: "Viaje a Europa", descripcion: "Álbum de 40 páginas" },
  { tipo: "imagen", titulo: "Baby Shower", descripcion: "Plan Personalizado" },
  { tipo: "imagen", titulo: "Aniversario", descripcion: "Plan Premium" },
  { tipo: "imagen", titulo: "Graduación 2024", descripcion: "Álbum de 30 páginas" },
  { tipo: "imagen", titulo: "Familia Ramírez", descripcion: "Plan Personalizado" },
  { tipo: "imagen", titulo: "Boda", descripcion: "Plan Premium" },
  { tipo: "video", titulo: "Unboxing photobook", descripcion: "Ve el resultado final" },
  { tipo: "imagen", titulo: "Navidad en familia", descripcion: "Plan Minimal" },
  { tipo: "imagen", titulo: "Primera comunión", descripcion: "Plan Personalizado" },
];

export default function GaleriaPage() {
  return (
    <main className="pt-24 min-h-screen bg-[#FDF8F5]">
      {/* Header */}
      <div className="py-16 px-6 text-center bg-[#F9EEE7]">
        <p className="text-xs tracking-[0.3em] uppercase text-[#B8935A] mb-4">Inspiración</p>
        <h1 className="font-display text-5xl md:text-6xl font-light text-[#1C1613] mb-4">
          Galería
        </h1>
        <p className="text-sm font-light text-[#8A7A74] max-w-md mx-auto">
          Cada photobook cuenta una historia única. Déjate inspirar por nuestros trabajos anteriores.
        </p>
      </div>

      {/* Gallery grid */}
      <div className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="columns-2 md:columns-3 gap-4 space-y-4">
            {galeriaItems.map((item, i) => (
              <div
                key={i}
                className="break-inside-avoid group relative overflow-hidden border border-[#E8D9D0] hover:border-[#C9A99A] transition-colors duration-300"
              >
                {/* Image placeholder (replace with actual <Image /> tags) */}
                <div
                  className="bg-[#F9EEE7] flex flex-col items-center justify-center group-hover:bg-[#F0DDD4] transition-colors duration-300"
                  style={{
                    height: `${200 + (i % 3) * 80}px`,
                  }}
                >
                  {item.tipo === "video" ? (
                    <div className="text-center">
                      <div className="w-12 h-12 rounded-full border-2 border-[#C9A99A] flex items-center justify-center mx-auto mb-3">
                        <div className="w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[10px] border-l-[#C9A99A] ml-1" />
                      </div>
                      <p className="text-xs text-[#C9A99A] tracking-wider">VIDEO</p>
                    </div>
                  ) : (
                    <span className="font-display text-5xl font-light italic text-[#C9A99A]/40">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  )}
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-[#1C1613]/0 group-hover:bg-[#1C1613]/40 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center px-4">
                    <p className="text-white text-sm font-medium">{item.titulo}</p>
                    <p className="text-[#C9A99A] text-xs mt-1">{item.descripcion}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-20 px-6 bg-[#1C1613] text-center">
        <p className="text-xs tracking-[0.3em] uppercase text-[#B8935A] mb-4">¿Lista para crear el tuyo?</p>
        <h2 className="font-display text-4xl md:text-5xl font-light text-white mb-6">
          Tu historia también merece un lugar
        </h2>
        <a
          href={whatsappLinks.general}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-10 py-4 border border-[#B8935A] text-[#B8935A] text-sm tracking-wider hover:bg-[#B8935A] hover:text-white transition-all duration-300"
        >
          Comenzar mi photobook
        </a>
      </div>
    </main>
  );
}

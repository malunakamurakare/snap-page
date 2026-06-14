"use client";
import { useState } from "react";
import { plantillas, categorias, whatsappLinks } from "@/lib/data";

type Plantilla = typeof plantillas[0];

export default function PlantillasPage() {
  const [categoria, setCategoria] = useState("Todos");
  const [selected, setSelected] = useState<Plantilla | null>(null);
  const [portadaIdx, setPortadaIdx] = useState(0);

  const filtradas = categoria === "Todos"
    ? plantillas
    : plantillas.filter((p) => p.categoria === categoria);

  const handleSelect = (p: Plantilla) => {
    setSelected(p);
    setPortadaIdx(0);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const waLink = selected
    ? `${whatsappLinks.personalizado}&text=Hola%2C%20quiero%20continuar%20con%20el%20Plan%20Personalizado.%20Me%20gust%C3%B3%20la%20plantilla%20%22${encodeURIComponent(selected.nombre)}%22%20%F0%9F%8C%B8`
    : whatsappLinks.personalizado;

  return (
    <main className="pt-24 min-h-screen bg-[#FDF8F5]">
      {/* Header */}
      <div className="py-16 px-6 text-center bg-[#F9EEE7]">
        <p className="text-xs tracking-[0.3em] uppercase text-[#B8935A] mb-4">Plan Personalizado</p>
        <h1 className="font-display text-5xl md:text-6xl font-light text-[#1C1613] mb-4">
          Elige tu plantilla
        </h1>
        <p className="text-sm font-light text-[#8A7A74] max-w-md mx-auto">
          Selecciona una plantilla, elige tu portada y continúa con tu pedido.
        </p>
      </div>

      {/* Selected template detail */}
      {selected && (
        <div className="py-12 px-6 bg-white border-b border-[#E8D9D0]">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <p className="text-xs tracking-[0.25em] uppercase text-[#B8935A] mb-2">
                  {selected.categoria}
                </p>
                <h2 className="font-display text-4xl font-light text-[#1C1613] mb-4">
                  {selected.nombre}
                </h2>
                <p className="text-sm text-[#8A7A74] mb-6">Elige un modelo de portada:</p>

                <div className="flex gap-3 mb-8">
                  {selected.portadas.map((src, i) => (
                    <button
                      key={i}
                      onClick={() => setPortadaIdx(i)}
                      className={`w-20 h-20 overflow-hidden border-2 transition-all ${
                        portadaIdx === i ? "border-[#B8935A]" : "border-[#E8D9D0]"
                      }`}
                    >
                      <div className="w-full h-full bg-[#F9EEE7] flex items-center justify-center text-xs text-[#C9A99A]">
                        Portada {i + 1}
                      </div>
                    </button>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a
                    href={waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3.5 bg-[#1C1613] text-[#FDF8F5] text-sm tracking-wider text-center hover:bg-[#B8935A] transition-colors duration-300"
                  >
                    Continuar por WhatsApp
                  </a>
                  <button
                    onClick={() => setSelected(null)}
                    className="px-4 border border-[#C9A99A] text-[#8A7A74] text-sm hover:border-[#1C1613] hover:text-[#1C1613] transition-colors"
                  >
                    Cambiar
                  </button>
                </div>
              </div>

              {/* Template preview mock */}
              <div className="bg-[#F9EEE7] aspect-[4/3] flex items-center justify-center">
                <div className="text-center">
                  <p className="font-display text-3xl font-light italic text-[#C9A99A]">{selected.nombre}</p>
                  <p className="text-xs text-[#C9A99A] mt-2 tracking-widest uppercase">{selected.categoria}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Category filter */}
      <div className="py-8 px-6 border-b border-[#E8D9D0]">
        <div className="max-w-6xl mx-auto flex gap-2 overflow-x-auto pb-1">
          {categorias.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategoria(cat)}
              className={`flex-shrink-0 text-xs tracking-wider px-5 py-2 transition-all duration-200 ${
                categoria === cat
                  ? "bg-[#1C1613] text-white"
                  : "border border-[#C9A99A] text-[#8A7A74] hover:border-[#1C1613] hover:text-[#1C1613]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Templates grid */}
      <div className="py-12 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-6">
          {filtradas.map((plantilla) => (
            <div
              key={plantilla.id}
              className={`group cursor-pointer border transition-all duration-300 ${
                selected?.id === plantilla.id
                  ? "border-[#B8935A]"
                  : "border-[#E8D9D0] hover:border-[#C9A99A]"
              }`}
              onClick={() => handleSelect(plantilla)}
            >
              {/* Placeholder image */}
              <div className="aspect-[4/3] bg-[#F9EEE7] flex flex-col items-center justify-center relative overflow-hidden">
                <span className="font-display text-4xl font-light italic text-[#C9A99A] group-hover:scale-110 transition-transform duration-300">
                  {plantilla.nombre[0]}
                </span>
                <span className="text-xs text-[#C9A99A]/60 mt-1 tracking-widest uppercase">
                  {plantilla.categoria}
                </span>
                {selected?.id === plantilla.id && (
                  <div className="absolute inset-0 bg-[#B8935A]/10 border-2 border-[#B8935A]" />
                )}
              </div>

              <div className="p-4 flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-[#1C1613]">{plantilla.nombre}</p>
                  <p className="text-xs text-[#C9A99A] mt-0.5">{plantilla.categoria}</p>
                </div>
                <span className="text-xs text-[#B8935A] tracking-wider group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

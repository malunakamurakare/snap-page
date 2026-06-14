"use client";
import { useState } from "react";
import Link from "next/link";
import { whatsappLinks, GOOGLE_CALENDAR_LINK } from "@/lib/data";
import FlipbookImages from "../components/FlipbookImages";
import FlipbookPDF from "../components/FlipbookPDF";

type Modal = "minimal-opts" | "minimal-upload" | "tengo-diseno" | null;

export default function PlanesPage() {
  const [modal, setModal] = useState<Modal>(null);

  const close = () => setModal(null);

  return (
    <main className="pt-24 min-h-screen bg-[#FDF8F5]">
      {/* Header */}
      <div className="py-16 px-6 text-center bg-[#F9EEE7]">
        <p className="text-xs tracking-[0.3em] uppercase text-[#B8935A] mb-4">Nuestros planes</p>
        <h1 className="font-display text-5xl md:text-6xl font-light text-[#1C1613]">
          Elige tu historia
        </h1>
      </div>

      {/* Plans grid */}
      <div className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">

          {/* ─── Plan Minimal ─── */}
          <div className="bg-white border border-[#E8D9D0] p-10 flex flex-col">
            <p className="text-xs tracking-[0.25em] uppercase text-[#B8935A] mb-2">01</p>
            <h2 className="font-display text-4xl font-light text-[#1C1613] mb-2">Minimal</h2>
            <p className="font-display text-2xl text-[#B8935A] mb-4">Desde S/ 89</p>
            <p className="text-sm font-light text-[#8A7A74] leading-relaxed mb-6">
              Ideal para quienes desean imprimir sus recuerdos de forma sencilla.
            </p>
            <ul className="space-y-2 mb-8 flex-1">
              {["1 foto por página", "Organización automática", "Portada personalizada"].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm font-light text-[#8A7A74]">
                  <span className="text-[#B8935A]">✦</span> {item}
                </li>
              ))}
            </ul>
            <button
              onClick={() => setModal("minimal-opts")}
              className="py-3.5 bg-[#1C1613] text-[#FDF8F5] text-sm tracking-wider hover:bg-[#B8935A] transition-colors duration-300"
            >
              Crear mi photobook
            </button>
          </div>

          {/* ─── Plan Personalizado ─── */}
          <div className="bg-[#1C1613] border border-[#1C1613] p-10 flex flex-col relative">
            <div className="absolute top-4 right-4 bg-[#B8935A] text-white text-xs tracking-widest px-3 py-1 uppercase">
              Popular
            </div>
            <p className="text-xs tracking-[0.25em] uppercase text-[#B8935A] mb-2">02</p>
            <h2 className="font-display text-4xl font-light text-white mb-2">Personalizado</h2>
            <p className="font-display text-2xl text-[#B8935A] mb-4">Desde S/ 149</p>
            <p className="text-sm font-light text-[#C9A99A] leading-relaxed mb-6">
              Ideal para viajes, aniversarios y ocasiones especiales.
            </p>
            <ul className="space-y-2 mb-8 flex-1">
              {["Plantillas temáticas", "Espacios para textos", "Distribución según tu orden"].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm font-light text-[#C9A99A]">
                  <span className="text-[#B8935A]">✦</span> {item}
                </li>
              ))}
            </ul>
            <Link
              href="/plantillas"
              className="py-3.5 bg-[#B8935A] text-white text-sm tracking-wider text-center hover:bg-[#D4AF7A] transition-colors duration-300 block"
            >
              Elegir plantilla
            </Link>
          </div>

          {/* ─── Plan Tengo mi Diseño ─── */}
          <div className="bg-white border border-[#E8D9D0] p-10 flex flex-col">
            <p className="text-xs tracking-[0.25em] uppercase text-[#B8935A] mb-2">03</p>
            <h2 className="font-display text-4xl font-light text-[#1C1613] mb-2">Tengo mi Diseño</h2>
            <p className="font-display text-2xl text-[#B8935A] mb-4">Desde S/ 99</p>
            <p className="text-sm font-light text-[#8A7A74] leading-relaxed mb-6">
              Para clientes que ya diseñaron su photobook en Canva u otro programa.
            </p>
            <ul className="space-y-2 mb-8 flex-1">
              {["Impresión profesional", "Revisión básica del archivo", "Listo para imprimir"].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm font-light text-[#8A7A74]">
                  <span className="text-[#B8935A]">✦</span> {item}
                </li>
              ))}
            </ul>
            <button
              onClick={() => setModal("tengo-diseno")}
              className="py-3.5 bg-[#1C1613] text-[#FDF8F5] text-sm tracking-wider hover:bg-[#B8935A] transition-colors duration-300"
            >
              Subir mi diseño
            </button>
          </div>

          {/* ─── Plan Premium ─── */}
          <div className="bg-[#F9EEE7] border border-[#E8D9D0] p-10 flex flex-col">
            <p className="text-xs tracking-[0.25em] uppercase text-[#B8935A] mb-2">04</p>
            <h2 className="font-display text-4xl font-light text-[#1C1613] mb-2">Premium</h2>
            <p className="font-display text-2xl text-[#B8935A] mb-4">Desde S/ 299</p>
            <p className="text-sm font-light text-[#8A7A74] leading-relaxed mb-6">
              Experiencia completamente personalizada con asesoría completa.
            </p>
            <ul className="space-y-2 mb-8 flex-1">
              {["Videollamada con la diseñadora", "Diseño desde cero", "Asesoría completa"].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm font-light text-[#8A7A74]">
                  <span className="text-[#B8935A]">✦</span> {item}
                </li>
              ))}
            </ul>
            <a
              href={GOOGLE_CALENDAR_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="py-3.5 border border-[#1C1613] text-[#1C1613] text-sm tracking-wider text-center hover:bg-[#1C1613] hover:text-white transition-all duration-300 block"
            >
              Agendar reunión
            </a>
          </div>
        </div>
      </div>

      {/* ─── MODAL: Minimal options ─── */}
      {modal === "minimal-opts" && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4" onClick={close}>
          <div className="bg-[#FDF8F5] max-w-sm w-full p-10" onClick={(e) => e.stopPropagation()}>
            <h3 className="font-display text-3xl font-light text-[#1C1613] mb-2">Plan Minimal</h3>
            <p className="text-sm text-[#8A7A74] mb-8">¿Cómo quieres enviarnos tus fotos?</p>
            <div className="flex flex-col gap-4">
              <a
                href={whatsappLinks.minimal}
                target="_blank"
                rel="noopener noreferrer"
                className="py-4 bg-[#1C1613] text-[#FDF8F5] text-sm tracking-wider text-center hover:bg-[#B8935A] transition-colors duration-300"
                onClick={close}
              >
                Enviar fotos por WhatsApp
              </a>
              <button
                onClick={() => setModal("minimal-upload")}
                className="py-4 border border-[#C9A99A] text-[#8A7A74] text-sm tracking-wider hover:border-[#1C1613] hover:text-[#1C1613] transition-colors duration-300"
              >
                Subir fotos y previsualizar
              </button>
            </div>
            <button onClick={close} className="mt-6 text-xs text-[#C9A99A] hover:text-[#8A7A74] w-full text-center">
              Cancelar
            </button>
          </div>
        </div>
      )}

      {/* ─── MODAL: Minimal upload flipbook ─── */}
      {modal === "minimal-upload" && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 overflow-y-auto" onClick={close}>
          <div className="bg-[#FDF8F5] max-w-2xl w-full p-8 my-8" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="font-display text-3xl font-light text-[#1C1613]">Tu photobook</h3>
                <p className="text-sm text-[#8A7A74] mt-1">Sube tus fotos y previsualiza cómo quedará.</p>
              </div>
              <button onClick={close} className="text-[#C9A99A] hover:text-[#1C1613] text-xl">✕</button>
            </div>
            <FlipbookImages planId="minimal" whatsappLink={whatsappLinks.minimal} />
          </div>
        </div>
      )}

      {/* ─── MODAL: Tengo mi Diseño ─── */}
      {modal === "tengo-diseno" && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 overflow-y-auto" onClick={close}>
          <div className="bg-[#FDF8F5] max-w-2xl w-full p-8 my-8" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="font-display text-3xl font-light text-[#1C1613]">Tu diseño</h3>
                <p className="text-sm text-[#8A7A74] mt-1">Sube tu PDF y previsualiza antes de confirmar.</p>
              </div>
              <button onClick={close} className="text-[#C9A99A] hover:text-[#1C1613] text-xl">✕</button>
            </div>
            <FlipbookPDF />
          </div>
        </div>
      )}
    </main>
  );
}

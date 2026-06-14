"use client";
import Link from "next/link";

const PROMO = {
  activa: true,
  texto: "Especial Día del Padre · 20% de descuento",
  bgColor: "#b28776",
  textColor: "#FDF8F5",
};

export default function HeroSection() {
  return (
    <section className="relative flex flex-col">

      {/* PROMO BANNER */}
      {PROMO.activa && (
        <div
          className="fixed top-0 left-0 right-0 z-[110] text-center text-sm py-3 px-4 tracking-wide"
          style={{
            backgroundColor: PROMO.bgColor,
            color: PROMO.textColor,
          }}
        >
          {PROMO.texto}
        </div>
      )}

      {/* HERO BACKGROUND */}
      <div
        className="relative h-[80vh] flex items-center justify-center text-center px-6 overflow-hidden z-0"
        style={{
          backgroundImage: "url('/hero-banner.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/20" />

        {/* CONTENT */}
        <div className="relative z-10 flex flex-col items-center text-center">

          {/* Eyebrow */}
          <p className="text-xs tracking-[0.3em] uppercase text-white mb-30">
            
          </p>

          {/* Headline (más abajo sin mover botón) */}
          <h1 className="text-6xl md:text-8xl font-bold text-white leading-[1.1] mb-12 mt-10 max-w-4xl">
            PHOTOBOOKS ÚNICOS{" "}
            <em className="italic text-[#F5D7B5] not-italic font-light" />
          </h1>

          {/* CTA BUTTON (único y centrado) */}
          <div className="flex justify-center">
            <Link
              href="/planes"
              className="px-8 py-4 bg-[#1C1613] text-[#FDF8F5] hover:bg-[#B8935A] transition-colors duration-300"
            >
              Comenzar mi photobook
            </Link>
          </div>

        </div>
      </div>

      {/* decorative strip */}
      <div className="h-1 bg-gradient-to-r from-[#F9EEE7] via-[#B8935A] to-[#F9EEE7]" />
    </section>
  );
}
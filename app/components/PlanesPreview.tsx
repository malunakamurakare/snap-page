import Link from "next/link";
import { planes } from "@/lib/data";

export default function PlanesPreview() {
  return (
    <section className="py-24 px-6 bg-[#F9EEE7]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-[#B8935A] mb-4"></p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-[#1C1613]">
            Encuentra tu plan ideal
          </h2>
        </div>

        <div className="grid md:grid-cols-4 gap-4">
          {planes.map((plan) => (
            <div
              key={plan.id}
              className={`relative flex flex-col p-8 transition-all duration-300 group ${
                plan.destacado
                  ? "bg-[#1C1613] text-white"
                  : "bg-[#FDF8F5] hover:bg-white border border-[#E8D9D0]"
              }`}
            >
              {plan.destacado && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <span className="bg-[#B8935A] text-white text-xs tracking-widest px-4 py-1 uppercase">
                    Popular
                  </span>
                </div>
              )}

              <p className={`text-xs tracking-[0.2em] uppercase mb-2 ${plan.destacado ? "text-[#B8935A]" : "text-[#B8935A]"}`}>
                {plan.nombre}
              </p>
              <p className={`font-display text-3xl font-light mb-4 ${plan.destacado ? "text-white" : "text-[#1C1613]"}`}>
                {plan.precio}
              </p>
              <p className={`text-sm font-light leading-relaxed mb-6 ${plan.destacado ? "text-[#C9A99A]" : "text-[#8A7A74]"}`}>
                {plan.descripcion}
              </p>

              <div className="flex flex-col gap-2 mb-8 flex-1">
                {plan.incluye.map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <span className="text-[#B8935A] text-xs">✦</span>
                    <span className={`text-sm font-light ${plan.destacado ? "text-[#C9A99A]" : "text-[#8A7A74]"}`}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <Link
                href="/planes"
                className={`text-sm tracking-wider text-center py-3 transition-all duration-300 ${
                  plan.destacado
                    ? "bg-[#B8935A] text-white hover:bg-[#D4AF7A]"
                    : "border border-[#1C1613] text-[#1C1613] hover:bg-[#1C1613] hover:text-white"
                }`}
              >
                {plan.boton}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

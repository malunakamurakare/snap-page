import { pasos } from "@/lib/data";

export default function ComoFunciona() {
  return (
    <section className="py-24 px-6 bg-[#1C1613]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-[#B8935A] mb-4">El proceso</p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-white">
            Así de sencillo
          </h2>
        </div>

        <div className="grid md:grid-cols-4 gap-0">
          {pasos.map((paso, i) => (
            <div key={i} className="relative flex flex-col items-start p-6 md:p-8 group">
              {/* Connector line (desktop) */}
              {i < pasos.length - 1 && (
                <div className="hidden md:block absolute right-0 top-12 w-px h-px">
                  <div className="absolute top-0 right-0 translate-x-full -translate-y-1/2 w-8 h-px bg-[#B8935A]/30" />
                </div>
              )}

              {/* Number */}
              <span className="font-display text-5xl font-light text-white mb-4 leading-none">
  {paso.numero}
</span>

              {/* Dot */}
              <div className="w-1.5 h-1.5 rounded-full bg-[#B8935A] mb-4" />

              {/* Content */}
              <h3 className="text-base font-medium text-white mb-2">{paso.titulo}</h3>
              <p className="text-sm font-light text-[#fff1de] leading-relaxed">{paso.descripcion}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

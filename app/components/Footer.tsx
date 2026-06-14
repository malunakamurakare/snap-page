import Link from "next/link";
import { whatsappLinks } from "@/lib/data";
import { faqItems } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-[#1C1613] text-[#C9A99A] mt-0">
      {/* FAQ strip */}
      <div className="border-b border-[#2E2420] py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <h3 className="font-display text-2xl font-light text-white mb-8 text-center">
            Preguntas frecuentes
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {faqItems.map((item, i) => (
              <div key={i} className="border-b border-[#2E2420] pb-5">
                <p className="text-sm text-white font-medium mb-2">{item.pregunta}</p>
                <p className="text-sm text-[#8A7A74] leading-relaxed">{item.respuesta}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="py-12 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <p className="font-display text-2xl font-light tracking-widest text-white mb-3">
              Snap<span className="text-[#B8935A]">Page</span>
            </p>
            <p className="text-sm text-[#8A7A74] leading-relaxed">
              Photobooks personalizados con amor, para que tus recuerdos duren para siempre.
            </p>
          </div>

          {/* Redes */}
          <div>
            <h4 className="text-xs tracking-[0.15em] uppercase text-[#B8935A] mb-5">Síguenos</h4>
            <div className="flex flex-col gap-3">
              {[
                { name: "Instagram", href: "https://instagram.com/" },
                { name: "TikTok", href: "https://tiktok.com/" },
                { name: "Facebook", href: "https://facebook.com/" },
              ].map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#8A7A74] hover:text-white transition-colors"
                >
                  {s.name}
                </a>
              ))}
            </div>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="text-xs tracking-[0.15em] uppercase text-[#B8935A] mb-5">Contacto</h4>
            <div className="flex flex-col gap-3">
              <a
                href={whatsappLinks.general}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[#8A7A74] hover:text-white transition-colors"
              >
                WhatsApp
              </a>
              <a
                href="mailto:hola@snappageph.com"
                className="text-sm text-[#8A7A74] hover:text-white transition-colors"
              >
                hola@snappageph.com
              </a>
              <p className="text-sm text-[#8A7A74]">
                Lun – Sáb · 9 AM – 7 PM
              </p>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-xs tracking-[0.15em] uppercase text-[#B8935A] mb-5">Legal</h4>
            <div className="flex flex-col gap-3">
              <Link href="/privacidad" className="text-sm text-[#8A7A74] hover:text-white transition-colors">
                Política de privacidad
              </Link>
              <Link href="/terminos" className="text-sm text-[#8A7A74] hover:text-white transition-colors">
                Términos y condiciones
              </Link>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto mt-12 pt-6 border-t border-[#2E2420] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-[#4A3E3A]">© 2025 SnapPage. Todos los derechos reservados.</p>
          <a
            href={whatsappLinks.general}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs tracking-wider border border-[#B8935A] text-[#B8935A] px-5 py-2 hover:bg-[#B8935A] hover:text-white transition-all duration-300"
          >
            Comenzar mi photobook →
          </a>
        </div>
      </div>
    </footer>
  );
}

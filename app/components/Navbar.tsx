"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { whatsappLinks } from "@/lib/data";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "/", label: "Inicio" },
    { href: "/planes", label: "Planes" },
    { href: "/plantillas", label: "Plantillas" },
    { href: "/galeria", label: "Galería" },
  ];

  return (
    <nav
  className={`fixed top-10 left-0 right-0 z-[100] transition-all duration-500 ${
        "bg-[#FDF8F5]/95 backdrop-blur-sm shadow-sm"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
  <img
    src="/logo.png"
    alt="Snap Page"
    className="h-8 md:h-10 object-contain"
  />
</Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-light tracking-wider text-[#8A7A74] hover:text-[#1C1613] transition-colors duration-200"
            >
              {l.label}
            </Link>
          ))}
          <a
            href={whatsappLinks.general}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm tracking-wider border border-[#B8935A] text-[#B8935A] px-5 py-2 hover:bg-[#B8935A] hover:text-white transition-all duration-300"
          >
            WhatsApp
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-[#1C1613]"
          aria-label="Menú"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#FDF8F5] border-t border-[#F0E4DC] px-6 py-6 flex flex-col gap-4">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-sm tracking-wider text-[#8A7A74] hover:text-[#1C1613] py-1"
            >
              {l.label}
            </Link>
          ))}
          <a
            href={whatsappLinks.general}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm tracking-wider text-center border border-[#B8935A] text-[#B8935A] px-5 py-2.5 mt-2"
          >
            Contáctanos por WhatsApp
          </a>
        </div>
      )}
    </nav>
  );
}

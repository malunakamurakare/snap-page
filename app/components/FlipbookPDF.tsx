"use client";
import { useState, useRef, useCallback } from "react";
import { Upload } from "lucide-react";
import { whatsappLinks } from "@/lib/data";

export default function FlipbookPDF() {
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [fileName, setFileName] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFile = (file: File) => {
    if (file.type !== "application/pdf") return;
    const url = URL.createObjectURL(file);
    setPdfUrl(url);
    setFileName(file.name);
  };

  const onDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file) handleFile(file);
  }, []);

  if (!pdfUrl) {
    return (
      <div
        className={`border-2 border-dashed transition-colors duration-200 p-12 text-center cursor-pointer ${
          isDragging ? "border-[#B8935A] bg-[#F9EEE7]" : "border-[#C9A99A] hover:border-[#B8935A]"
        }`}
        onClick={() => fileInputRef.current?.click()}
        onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
        onDragLeave={() => setIsDragging(false)}
        onDrop={onDrop}
      >
        <Upload size={32} className="text-[#C9A99A] mx-auto mb-4" />
        <p className="text-sm font-light text-[#8A7A74] mb-2">Sube tu archivo PDF</p>
        <p className="text-xs text-[#C9A99A]">PDF en alta resolución (300 DPI recomendado)</p>
        <input
          ref={fileInputRef}
          type="file"
          accept="application/pdf"
          className="hidden"
          onChange={(e) => e.target.files?.[0] && handleFile(e.target.files[0])}
        />
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between text-xs text-[#8A7A74] bg-[#F9EEE7] px-4 py-2">
        <span className="truncate">{fileName}</span>
        <button
          onClick={() => { setPdfUrl(null); setFileName(""); }}
          className="text-[#C9A99A] hover:text-[#1C1613] ml-4 transition-colors"
        >
          Cambiar archivo
        </button>
      </div>

      {/* PDF preview */}
      <div className="w-full border border-[#E8D9D0]" style={{ height: "500px" }}>
        <iframe
          src={`${pdfUrl}#toolbar=0&navpanes=0`}
          className="w-full h-full"
          title="Previsualización del diseño"
        />
      </div>

      <a
        href={whatsappLinks.tengoDiseno}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full text-center py-4 bg-[#1C1613] text-[#FDF8F5] text-sm tracking-wider hover:bg-[#B8935A] transition-colors duration-300"
      >
        ¡Me gusta! Comprar por WhatsApp →
      </a>
    </div>
  );
}

"use client";
import { useState, useRef, useCallback } from "react";
import { Upload, ChevronLeft, ChevronRight, X } from "lucide-react";
import { whatsappLinks } from "@/lib/data";

interface FlipbookImageProps {
  planId: string;
  whatsappLink: string;
}

export default function FlipbookImages({ planId, whatsappLink }: FlipbookImageProps) {
  const [images, setImages] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFiles = (files: FileList | null) => {
    if (!files) return;
    const newImages: string[] = [];
    Array.from(files).forEach((file) => {
      if (file.type.startsWith("image/")) {
        const url = URL.createObjectURL(file);
        newImages.push(url);
      }
    });
    setImages((prev) => [...prev, ...newImages]);
  };

  const onDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    handleFiles(e.dataTransfer.files);
  }, []);

  const removeImage = (idx: number) => {
    setImages((prev) => {
      const next = prev.filter((_, i) => i !== idx);
      if (currentPage >= next.length && next.length > 0) {
        setCurrentPage(next.length - 1);
      }
      return next;
    });
  };

  if (images.length === 0) {
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
        <p className="text-sm font-light text-[#8A7A74] mb-2">Arrastra tus fotos aquí</p>
        <p className="text-xs text-[#C9A99A]">o haz clic para seleccionarlas · JPG, PNG</p>
        <input
          ref={fileInputRef}
          type="file"
          multiple
          accept="image/jpeg,image/png,image/jpg"
          className="hidden"
          onChange={(e) => handleFiles(e.target.files)}
        />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Flipbook viewer */}
      <div className="relative bg-[#1C1613] aspect-[3/2] max-w-2xl mx-auto overflow-hidden">
        {/* Page */}
        <div className="absolute inset-0 flex">
          {/* Left page (previous) */}
          <div className="w-1/2 relative overflow-hidden">
            {currentPage > 0 ? (
              <img
                src={images[currentPage - 1]}
                alt={`Página ${currentPage}`}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-[#2E2420] flex items-center justify-center">
                <span className="font-display text-6xl font-light italic text-[#B8935A]/20">SP</span>
              </div>
            )}
          </div>

          {/* Spine */}
          <div className="w-px bg-[#B8935A]/30 shadow-lg z-10" />

          {/* Right page (current) */}
          <div className="w-1/2 relative overflow-hidden">
            <img
              src={images[currentPage]}
              alt={`Página ${currentPage + 1}`}
              className="w-full h-full object-cover"
            />
            {/* Page number */}
            <span className="absolute bottom-2 right-3 text-xs text-white/50 font-light">
              {currentPage + 1} / {images.length}
            </span>
          </div>
        </div>

        {/* Navigation */}
        <button
          onClick={() => setCurrentPage((p) => Math.max(0, p - 1))}
          disabled={currentPage === 0}
          className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-black/40 text-white disabled:opacity-20 hover:bg-black/60 transition-colors rounded-full"
        >
          <ChevronLeft size={16} />
        </button>
        <button
          onClick={() => setCurrentPage((p) => Math.min(images.length - 1, p + 1))}
          disabled={currentPage === images.length - 1}
          className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-black/40 text-white disabled:opacity-20 hover:bg-black/60 transition-colors rounded-full"
        >
          <ChevronRight size={16} />
        </button>
      </div>

      {/* Thumbnails */}
      <div className="flex gap-2 overflow-x-auto pb-2">
        {images.map((img, i) => (
          <div key={i} className="relative flex-shrink-0 group">
            <button
              onClick={() => setCurrentPage(i)}
              className={`w-14 h-14 overflow-hidden border-2 transition-all ${
                i === currentPage ? "border-[#B8935A]" : "border-transparent"
              }`}
            >
              <img src={img} alt="" className="w-full h-full object-cover" />
            </button>
            <button
              onClick={() => removeImage(i)}
              className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#1C1613] text-white opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
            >
              <X size={10} />
            </button>
          </div>
        ))}
        {/* Add more */}
        <button
          onClick={() => fileInputRef.current?.click()}
          className="flex-shrink-0 w-14 h-14 border-2 border-dashed border-[#C9A99A] flex items-center justify-center text-[#C9A99A] hover:border-[#B8935A] hover:text-[#B8935A] transition-colors"
        >
          <span className="text-lg">+</span>
        </button>
        <input
          ref={fileInputRef}
          type="file"
          multiple
          accept="image/jpeg,image/png,image/jpg"
          className="hidden"
          onChange={(e) => handleFiles(e.target.files)}
        />
      </div>

      {/* CTA */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full text-center py-4 bg-[#1C1613] text-[#FDF8F5] text-sm tracking-wider hover:bg-[#B8935A] transition-colors duration-300"
      >
        ¡Me gusta! Comprar por WhatsApp →
      </a>
    </div>
  );
}

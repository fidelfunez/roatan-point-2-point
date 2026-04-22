"use client";

import Image from "next/image";
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { createPortal } from "react-dom";
import {
  galleryAltText,
  galleryImageFilenames,
} from "@/data/gallery-images";

function GalleryEmpty() {
  return (
    <section id="galeria" className="py-12 sm:py-16 lg:py-28 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-h2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--navy)]">
          Galería
        </h2>
        <p className="mt-4 sm:mt-6 max-w-xl mx-auto text-base sm:text-lg text-gray-600 leading-relaxed">
          Estamos actualizando las fotos del evento. Pronto vas a ver acá las nuevas
          imágenes.
        </p>
      </div>
    </section>
  );
}

function GalleryCarousel() {
  const total = galleryImageFilenames.length;
  const [current, setCurrent] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => setMounted(true), []);

  const next = useCallback(
    () => setCurrent((c) => (c + 1) % total),
    [total]
  );
  const prev = useCallback(
    () => setCurrent((c) => (c - 1 + total) % total),
    [total]
  );

  const openLightbox = () => setLightboxOpen(true);
  const closeLightbox = () => setLightboxOpen(false);

  useLayoutEffect(() => {
    if (lightboxOpen) closeBtnRef.current?.focus();
  }, [lightboxOpen]);

  useEffect(() => {
    if (!lightboxOpen) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        closeLightbox();
        return;
      }
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        setCurrent((c) => (c - 1 + total) % total);
      }
      if (e.key === "ArrowRight") {
        e.preventDefault();
        setCurrent((c) => (c + 1) % total);
      }
    };

    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [lightboxOpen, total]);

  const filename = galleryImageFilenames[current];
  const alt = galleryAltText(filename);

  const lightbox =
    lightboxOpen && mounted ? (
      <div
        className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6"
        role="dialog"
        aria-modal="true"
        aria-label="Foto ampliada de la galería"
      >
        <div
          className="absolute inset-0 bg-[var(--navy)]/92 backdrop-blur-[2px]"
          onClick={closeLightbox}
          aria-hidden
        />

        <button
          ref={closeBtnRef}
          type="button"
          className="absolute right-3 top-3 z-[102] flex h-11 w-11 items-center justify-center rounded-full bg-white/95 text-[var(--navy)] shadow-md transition hover:bg-white min-h-[44px] min-w-[44px]"
          onClick={closeLightbox}
          aria-label="Cerrar"
        >
          <svg
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div className="relative z-[101] flex max-h-[min(92vh,900px)] w-full max-w-6xl flex-col items-center gap-3 sm:gap-4">
          <div className="relative aspect-video w-full max-h-[min(78vh,760px)] min-h-[200px] rounded-xl bg-black/40 sm:rounded-2xl">
            <Image
              src={`/photos/Gallery/${filename}`}
              alt={alt}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 1152px"
              loading="lazy"
            />

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              className="absolute left-1 top-1/2 z-[103] flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 text-[var(--navy)] shadow-md transition hover:bg-white sm:left-2 sm:h-12 sm:w-12 min-h-[44px] min-w-[44px]"
              aria-label="Anterior"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              className="absolute right-1 top-1/2 z-[103] flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 text-[var(--navy)] shadow-md transition hover:bg-white sm:right-2 sm:h-12 sm:w-12 min-h-[44px] min-w-[44px]"
              aria-label="Siguiente"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          <p className="rounded-full bg-white/90 px-4 py-1.5 text-sm font-medium text-[var(--navy)]/80 tabular-nums shadow-sm">
            {current + 1} / {total}
          </p>
          <p className="text-center text-xs text-white/75 max-w-md px-2">
            Flechas del teclado: anterior / siguiente · Escape: cerrar
          </p>
        </div>
      </div>
    ) : null;

  return (
    <section id="galeria" className="py-12 sm:py-16 lg:py-28 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-2xl">
          {galleryImageFilenames.map((fn, i) => (
            <div
              key={fn}
              className={`transition-all duration-500 ease-out ${
                i === current ? "block" : "hidden"
              }`}
            >
              <button
                type="button"
                onClick={openLightbox}
                className="group relative block w-full cursor-zoom-in rounded-2xl border-0 bg-transparent p-0 text-left outline-none ring-[var(--accent)] transition focus-visible:ring-2 focus-visible:ring-offset-2"
                aria-label={`Ampliar imagen ${i + 1} de ${total}`}
              >
                <div className="relative aspect-[16/9] overflow-hidden rounded-2xl bg-[var(--navy-light)]/20">
                  <Image
                    src={`/photos/Gallery/${fn}`}
                    alt={galleryAltText(fn)}
                    fill
                    className={`object-cover transition duration-300 group-hover:brightness-95 ${
                      i < 10 || (i >= 11 && i < 15)
                        ? "object-[center_72%]"
                        : i === 16
                          ? "object-[center_28%]"
                          : i >= 27 && i <= 29
                            ? "object-[center_8%]"
                            : i >= 17 && i <= 40
                              ? "object-[center_18%]"
                              : "object-center"
                    }`}
                    sizes="(max-width: 1024px) 100vw, 1024px"
                    loading="lazy"
                  />
                  <span className="pointer-events-none absolute bottom-3 right-3 rounded-full bg-black/55 px-3 py-1 text-xs font-medium text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100">
                    Clic para ampliar
                  </span>
                </div>
              </button>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center gap-4 sm:gap-6 mt-4 sm:mt-6">
          <button
            type="button"
            onClick={prev}
            className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[var(--navy)]/10 flex items-center justify-center text-[var(--navy)] hover:bg-[var(--navy)]/20 transition-colors min-w-[44px] min-h-[44px]"
            aria-label="Anterior"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <p className="text-sm font-medium text-[var(--navy)]/70 tabular-nums min-w-[5.5rem] text-center">
            {current + 1} / {total}
          </p>

          <button
            type="button"
            onClick={next}
            className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[var(--navy)]/10 flex items-center justify-center text-[var(--navy)] hover:bg-[var(--navy)]/20 transition-colors min-w-[44px] min-h-[44px]"
            aria-label="Siguiente"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>

      {mounted && lightbox
        ? createPortal(lightbox, document.body)
        : null}
    </section>
  );
}

export default function Gallery() {
  if (galleryImageFilenames.length === 0) {
    return <GalleryEmpty />;
  }
  return <GalleryCarousel />;
}

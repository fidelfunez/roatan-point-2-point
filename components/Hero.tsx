"use client";

import { useEffect, useLayoutEffect, useState } from "react";

const heroVideoV = "20260418c";

const portraitSrc = `/videos/roatan-point-2-point-hero-banner-mobile.mp4?v=${heroVideoV}`;
const desktopSrc = `/videos/roatan-point-2-point-hero-banner-desktop.mp4?v=${heroVideoV}`;
const posterSrc = `/videos/roatan-point-2-point-hero-poster.webp?v=${heroVideoV}`;

function pickVariant(): "mobile" | "desktop" {
  return window.matchMedia("(max-width: 768px)").matches ? "mobile" : "desktop";
}

export default function Hero() {
  const [variant, setVariant] = useState<"mobile" | "desktop" | null>(null);
  /** En móvil retrasa el MP4 para no competir con LCP / fuentes / imágenes críticas (~3.5 MB en red lenta). */
  const [videoAllowed, setVideoAllowed] = useState(false);

  useLayoutEffect(() => {
    const apply = () => {
      const v = pickVariant();
      setVariant(v);
      if (v === "desktop") setVideoAllowed(true);
      else setVideoAllowed(false);
    };
    apply();
    const mq = window.matchMedia("(max-width: 768px)");
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  useEffect(() => {
    if (variant !== "mobile" || videoAllowed) return;
    const run = () => setVideoAllowed(true);
    if (typeof window.requestIdleCallback === "function") {
      const id = window.requestIdleCallback(run, { timeout: 1400 });
      return () => window.cancelIdleCallback(id);
    }
    const t = window.setTimeout(run, 1200);
    return () => window.clearTimeout(t);
  }, [variant, videoAllowed]);

  const src =
    videoAllowed && variant === "mobile"
      ? portraitSrc
      : videoAllowed && variant === "desktop"
        ? desktopSrc
        : undefined;

  return (
    <section className="relative min-h-[100dvh] min-h-screen flex flex-col items-center justify-center text-white px-4 sm:px-6 pt-28 pb-20 sm:pt-32 sm:pb-24 overflow-hidden">
      <video
        key={src ?? "poster-only"}
        src={src}
        autoPlay
        muted
        loop
        playsInline
        preload={
          src ? (variant === "mobile" ? "metadata" : "auto") : "none"
        }
        poster={posterSrc}
        className="absolute inset-0 w-full h-full object-cover"
        aria-hidden
        onLoadedData={(e) => {
          void e.currentTarget.play().catch(() => {});
        }}
      />
      <div className="absolute inset-0 bg-black/55" aria-hidden />
      <div className="relative z-10 max-w-4xl mx-auto text-center w-full">
        <h1 className="font-h1 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold uppercase tracking-tight leading-tight">
          Roatán
          <br />
          Point 2 Point
        </h1>
        <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-white/95 max-w-2xl mx-auto leading-relaxed px-1 drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)]">
          Fiesta internacional de MTB y Ruta: recorrés Roatán de punta a punta,
          con playas claras y caminos exigentes. Además de la carrera, hay
          turismo con propósito, vínculo con la comunidad local y apoyo a causas
          solidarias.
        </p>
        <a
          href="#eventos"
          className="mt-8 sm:mt-10 inline-flex items-center px-6 py-3.5 sm:px-8 sm:py-4 rounded-full bg-[var(--accent)] text-white text-sm sm:text-base font-semibold hover:bg-[var(--accent-hover)] transition-colors min-h-[44px] items-center"
        >
          Explorar eventos
        </a>
      </div>
    </section>
  );
}

const heroVideoV = "20260417d";

export default function Hero() {
  const portraitSrc = `/videos/roatan-point-2-point-hero-banner-mobile.mp4?v=${heroVideoV}`;
  const desktopSrc = `/videos/roatan-point-2-point-hero-banner-desktop.mp4?v=${heroVideoV}`;

  return (
    <section className="relative min-h-[100dvh] min-h-screen flex flex-col items-center justify-center text-white px-4 sm:px-6 pt-28 pb-20 sm:pt-32 sm:pb-24 overflow-hidden">
      {/* Video de fondo */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        aria-hidden
      >
        <source src={portraitSrc} type="video/mp4" media="(max-width: 768px)" />
        <source src={desktopSrc} type="video/mp4" media="(min-width: 769px)" />
      </video>
      {/* Overlay oscuro para legibilidad del texto */}
      <div className="absolute inset-0 bg-black/55" aria-hidden />
      <div className="relative z-10 max-w-4xl mx-auto text-center w-full">
        <h1 className="font-h1 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl md:text-7xl lg:text-8xl font-bold uppercase tracking-tight leading-tight">
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

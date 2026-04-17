"use client";

import { useState } from "react";

const testimonials = [
  {
    name: "María González",
    event: "Roatán P2P 2024",
    quote:
      "Cruzar la isla de punta a punta con ciclistas de todo el mundo fue increíble. Rutas y organización impecables; el espíritu solidario del P2P no tiene comparación. Te vas cansado y con ganas de repetir. ¡Vuelvo sin duda!",
  },
  {
    name: "Carlos Martínez",
    event: "Roatán P2P 2024",
    quote:
      "Pensé que sería solo una carrera, y fue mucho más: comunidad, paisajes del Caribe y una energía que me dejó sin palabras. El apoyo de la gente en ruta te llena; volvería sin pensarlo dos veces. 100% recomendado.",
  },
  {
    name: "Ana Rodríguez",
    event: "Roatán P2P 2023",
    quote:
      "Mi primera vez en Roatán y no podría haber sido mejor. El equipo de P2P se encargó de cada detalle y siempre con buena onda. Las rutas son desafiantes pero accesibles. Una experiencia que marca para siempre.",
  },
  {
    name: "Roberto Hernández",
    event: "Roatán P2P 2023",
    quote:
      "El evento ciclo-turístico más grande de Honduras no exagera. La logística, el apoyo en ruta y la fiesta al final valen cada kilómetro. Se siente orgullo local con calidad internacional. Honduras tiene un tesoro en Roatán.",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = () =>
    setCurrent((c) => (c + 1) % testimonials.length);
  const prev = () =>
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="testimonios" className="py-12 sm:py-16 lg:py-28 bg-[#f5f0e8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-h2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--navy)] mb-8 sm:mb-12">
          Lo que dicen nuestros ciclistas
        </h2>

        <div className="flex items-start gap-3 sm:gap-6">
          <button
            onClick={prev}
            className="flex-shrink-0 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[var(--accent)] text-white flex items-center justify-center hover:bg-[var(--accent-hover)] transition-colors min-w-[44px] min-h-[44px]"
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

          <div className="flex-1 min-w-0">
            <p className="text-base sm:text-xl md:text-2xl font-bold text-[var(--navy)] leading-relaxed max-sm:min-h-[6lh] max-sm:line-clamp-6">
              &ldquo;{testimonials[current].quote}&rdquo;
            </p>
            <p className="mt-6 min-w-0 text-[0.6875rem] leading-snug sm:text-sm sm:leading-normal font-semibold text-[var(--navy)] uppercase tracking-wide sm:tracking-wider whitespace-nowrap overflow-hidden text-ellipsis">
              {testimonials[current].name}, {testimonials[current].event}
            </p>
          </div>

          <button
            onClick={next}
            className="flex-shrink-0 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[var(--accent)] text-white flex items-center justify-center hover:bg-[var(--accent-hover)] transition-colors min-w-[44px] min-h-[44px]"
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

        <div className="mt-8 flex items-center justify-center gap-2">
          <span className="text-sm text-[var(--navy)]/70">
            {current + 1}/{testimonials.length}
          </span>
        </div>
      </div>
    </section>
  );
}

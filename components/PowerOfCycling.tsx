"use client";

import { useState } from "react";

const highlights = [
  {
    id: "1",
    title: "Deporte Y Salud",
    content:
      "Impulsamos MTB y Ruta con un desafío serio: sirve tanto si recién arrancás como si buscás medirte de verdad. Distancias claras, terreno exigente y acompañamiento en carrera.",
    subcontent:
      "Recreativo en 50, 80 o 100 km; competitivo en 80 y 100 km, más una categoría Gravel abierta. En MTB mezclás asfalto, terracería y subidas demandantes; en Ruta vas sobre asfalto, con intensidad media-alta.",
  },
  {
    id: "2",
    title: "Turismo Sostenible",
    content:
      "El recorrido invita a conocer Roatán pedaleando: naturaleza, historia y la cocina de la isla en un mismo camino.",
    subcontent:
      "Salís desde West End hacia Camp Bay y volvés al punto de partida, pasando por comunidades, miradores y sitios como Punta Gorda. Ciclistas de Honduras y del exterior ayudan a mover la economía cotidiana de la isla.",
  },
  {
    id: "3",
    title: "Compromiso Social",
    content:
      "Pedalear también es devolver: parte del espíritu del evento es canalizar fondos hacia organizaciones locales que trabajan con quien más lo necesita.",
    subcontent:
      "Además de la competencia con trofeos y medallas, sumamos retos que meten adrenalina: Lightning Challenge (10 km) y el tramo KOM/QOM (1 km de escalada), con premios por categoría y género.",
  },
  {
    id: "4",
    title: "Comunidad Internacional",
    content:
      "Se suman deportistas de más de 15 países en un mismo clima de celebración, hombro a hombro con la gente de acá.",
    subcontent:
      "Se cruza gente de todo el mundo con quien vive la isla: no queda en una sola idea de “carrera”, sino en deporte, turismo responsable y mano solidaria en el mismo relato.",
  },
];

export default function PowerOfCycling() {
  const [active, setActive] = useState(0);

  return (
    <section
      id="experiencia"
      className="py-12 sm:py-16 lg:py-28 bg-[var(--accent)] text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="font-h1 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-wide">
            el poder del ciclismo
          </h2>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg text-white/90 leading-relaxed">
            Roatán Point 2 Point es la experiencia que te lleva a cruzar una
            isla del Caribe pedaleando: rendimiento, viaje con propósito y apoyo
            concreto a causas locales en un mismo recorrido.
          </p>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg text-white/90 leading-relaxed">
            Desafiá tus límites donde el mar acompaña cada tramo y dejá huella
            en quienes reciben la ayuda que el evento impulsa.
          </p>
        </div>

        <div className="mt-10 sm:mt-16 flex flex-col lg:flex-row gap-8 sm:gap-12 lg:gap-16">
          <div className="lg:w-1/3">
            <h3 className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-white/80 mb-4 sm:mb-6">
              highlights
            </h3>
            <div className="space-y-1">
              {highlights.map((h, i) => (
                <button
                  key={h.id}
                  onClick={() => setActive(i)}
                  className={`block w-full text-left py-3 px-4 rounded-lg transition-colors min-h-[44px] flex items-center ${
                    active === i
                      ? "bg-white/20 font-semibold underline"
                      : "text-white/80 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {h.id} {h.title}
                </button>
              ))}
            </div>
          </div>

          <div className="lg:w-2/3">
            <div className="bg-black/20 rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-12">
              <h4 className="font-h2 text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
                {highlights[active].title}
              </h4>
              <p className="text-white/95 text-sm sm:text-base leading-relaxed">
                {highlights[active].content}
              </p>
              <p className="mt-3 sm:mt-4 text-white/90 text-sm sm:text-base leading-relaxed">
                {highlights[active].subcontent}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useId, useState } from "react";

const mainEvent = {
  title: "Roatán Point 2 Point 2026",
  date: "4 de octubre · 5:30 a. m. · Décima edición",
  tagline: "Salida y meta: Charankako, West Bay, Islas de la Bahía",
  description:
    "Unas 6 horas de evento · MTB y Ruta · Inscripción $59.00 USD · cierre 30 de septiembre",
  cta: "Inscribirme",
  ticketHref: "https://www.smartticket.fun/event/roatan-point-2-point-2026",
};

const routeDetails = {
  meta: "50 km · 80 km · 100 km",
  heading: "La ruta y las categorías",
  tagline:
    "De West End a Camp Bay: comunidades, miradores y cultura local",
  description:
    "Hay recreativo y competitivo, categoría Gravel abierta, más los desafíos Lightning (10 km) y el KOM/QOM (1 km de escalada).",
  ticketCta: "Comprar entrada",
};

export default function EventCalendar() {
  const [detailsOpen, setDetailsOpen] = useState(true);
  const panelId = useId();

  return (
    <section id="eventos" className="py-12 sm:py-16 lg:py-28 bg-[var(--navy)] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-h1 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-wide text-center mb-10 sm:mb-16">
          calendario de eventos
        </h2>

        <div className="max-w-5xl mx-auto">
          <div className="relative overflow-hidden rounded-xl sm:rounded-2xl">
            <div className="bg-[var(--navy-light)]/50 backdrop-blur p-5 sm:p-6 lg:p-12 rounded-xl sm:rounded-2xl border border-white/10 hover:border-white/20 transition-colors">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 sm:gap-6">
                <div>
                  <span className="text-xs sm:text-sm font-medium text-[var(--accent)] uppercase tracking-wider">
                    {mainEvent.date}
                  </span>
                  <h3 className="font-h2 text-xl sm:text-2xl md:text-3xl font-bold mt-1 sm:mt-2">
                    {mainEvent.title}
                  </h3>
                  <p className="text-gray-300 mt-2">{mainEvent.tagline}</p>
                  <p className="text-sm text-gray-400 mt-1">
                    {mainEvent.description}
                  </p>
                </div>
                <a
                  href={mainEvent.ticketHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex shrink-0 items-center justify-center px-5 py-2.5 sm:px-6 sm:py-3 rounded-full bg-[var(--accent)] text-white text-sm sm:text-base font-semibold hover:bg-[var(--accent-hover)] transition-colors w-fit min-h-[44px] self-start lg:self-center"
                >
                  {mainEvent.cta}
                </a>
              </div>

              <div className="mt-8 sm:mt-10 border-t border-white/10 pt-6 sm:pt-8">
                <button
                  type="button"
                  id={`${panelId}-trigger`}
                  aria-expanded={detailsOpen}
                  aria-controls={panelId}
                  onClick={() => setDetailsOpen((o) => !o)}
                  className="flex w-full items-center justify-between gap-3 rounded-lg px-1 py-2 text-left text-sm font-semibold text-white outline-none ring-offset-2 ring-offset-[var(--navy)] transition hover:text-[var(--accent)] focus-visible:ring-2 focus-visible:ring-[var(--accent)] sm:text-base"
                >
                  <span>
                    {detailsOpen
                      ? "Ocultar ruta y categorías"
                      : "Ruta y categorías"}
                  </span>
                  <svg
                    className={`h-5 w-5 shrink-0 text-[var(--accent)] transition-transform duration-200 ${
                      detailsOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={`${panelId}-trigger`}
                  hidden={!detailsOpen}
                  className="mt-4 space-y-3 border-l-2 border-[var(--accent)]/60 pl-4 sm:pl-5"
                >
                  <span className="text-xs sm:text-sm font-medium text-[var(--accent)] uppercase tracking-wider">
                    {routeDetails.meta}
                  </span>
                  <p className="font-h2 text-lg sm:text-xl font-bold text-white">
                    {routeDetails.heading}
                  </p>
                  <p className="text-gray-300">{routeDetails.tagline}</p>
                  <p className="text-sm text-gray-400">
                    {routeDetails.description}
                  </p>
                  <a
                    href={mainEvent.ticketHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-5 py-2.5 sm:px-6 sm:py-3 rounded-full border border-white/25 bg-white/5 text-white text-sm sm:text-base font-semibold hover:border-[var(--accent)] hover:bg-[var(--accent)]/15 hover:text-white transition-colors w-fit min-h-[44px] mt-2"
                  >
                    {routeDetails.ticketCta}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

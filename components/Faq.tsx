import Image from "next/image";

const faqs = [
  {
    q: "¿Qué hace único este evento?",
    a: "Es el único de la región en el que atravesás una isla del Caribe de costa a costa. Mezcla competencia con turismo consciente y con acciones a favor de organizaciones locales.",
  },
  {
    q: "¿Por qué debería participar?",
    a: "Porque es más que un fin de semana intenso en un paraíso: conocés corredores de muchos lados, vivís la isla en serio y colaborás con iniciativas que mejoran la vida en Roatán.",
  },
  {
    q: "¿Cuánto cuesta y qué incluye la inscripción?",
    a: "La inscripción cuesta $59.00 USD. Incluye expo bike y muestras de sponsors; mecánica; cóctel de bienvenida; fiesta de cierre con refrigerio; sorteos y premios; entrada a los retos Lightning y KOM/QOM; kit con camiseta finisher, número, chip y fotografía; hidratación en ruta; escolta; ambulancia y primeros auxilios; asistencia médica; y medalla finisher.",
  },
  {
    q: "¿Cuáles son las fechas límite?",
    a: "Inscripciones hasta el 30 de septiembre. Si querés merchandising del evento, la compra cierra el 30 de agosto.",
  },
  {
    q: "¿Qué requisitos debo cumplir?",
    a: "Casco obligatorio durante todo el trayecto. Bicicleta en buen estado mecánico. Al retirar el kit, hay que firmar el descargo de responsabilidad.",
  },
  {
    q: "¿Consejos de transporte y hospedaje?",
    a: "Reservá ferry (Galaxy Wave) o vuelo doméstico con tiempo; a veces hay promos si mostrás la inscripción. Para dormir, West End o West Bay quedan cerca de la salida. Paquetes coordinados: Turista Roatán Travel.",
  },
];

const FAQ_SECTION_COVER = "/photos/section-covers/roatan-point-2-point-faq-section-cover.webp";

export default function Faq() {
  return (
    <section
      id="faq"
      className="relative isolate overflow-hidden py-12 sm:py-16 lg:py-28 border-t border-[var(--navy)]/10"
    >
      <Image
        src={FAQ_SECTION_COVER}
        alt=""
        fill
        sizes="(max-width: 768px) 100vw, 896px"
        quality={50}
        loading="lazy"
        className="object-cover pointer-events-none -z-20"
        aria-hidden
      />
      <div
        className="absolute inset-0 -z-10 bg-[#f5f0e8]/88"
        aria-hidden
      />
      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-h2 text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--navy)] mb-8 sm:mb-10">
          Preguntas frecuentes
        </h2>
        <div className="space-y-3">
          {faqs.map((item) => (
            <details
              key={item.q}
              className="group rounded-xl border border-[var(--navy)]/15 bg-white px-4 sm:px-5 py-1 open:shadow-sm"
            >
              <summary className="cursor-pointer list-none py-3 font-semibold text-[var(--navy)] flex items-center justify-between gap-2 min-h-[44px] [&::-webkit-details-marker]:hidden">
                {item.q}
                <span className="text-[var(--accent)] text-xl leading-none group-open:rotate-45 transition-transform">
                  +
                </span>
              </summary>
              <p className="pb-4 text-sm sm:text-base text-gray-600 leading-relaxed border-t border-gray-100 pt-3">
                {item.a}
              </p>
            </details>
          ))}
        </div>

        <div
          id="contacto"
          className="mt-12 sm:mt-16 pt-10 sm:pt-12 border-t border-[var(--navy)]/15 scroll-mt-24"
        >
          <h2 className="font-h2 text-xl sm:text-2xl font-bold text-[var(--navy)] mb-4">
            Contacto
          </h2>
          <p className="text-gray-600 text-sm sm:text-base mb-6">
            Escribinos si tenés dudas de inscripción, patrocinios o logística.
          </p>
          <ul className="space-y-3 text-[var(--navy)]">
            <li>
              <a
                href="mailto:Roatanpoint2point@gmail.com"
                className="text-[var(--accent)] font-medium hover:underline"
              >
                Roatanpoint2point@gmail.com
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/50432221643"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--accent)] font-medium hover:underline"
              >
                WhatsApp +504 3222-1643
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/roatanpoint2point"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--accent)] font-medium hover:underline"
              >
                Instagram @roatanpoint2point
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/share/1FhWopUKWz/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--accent)] font-medium hover:underline"
              >
                Facebook
              </a>
            </li>
            <li className="pt-4 text-gray-600 text-sm">
              Agencia oficial de viajes:{" "}
              <a
                href="https://www.instagram.com/turistaroatantravel"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--accent)] font-medium hover:underline"
              >
                @turistaroatantravel
              </a>
              {" · "}
              <a
                href="https://wa.me/50489237707"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--accent)] font-medium hover:underline"
              >
                +504 8923-7707
              </a>
            </li>
          </ul>
        </div>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((item) => ({
              "@type": "Question",
              name: item.q,
              acceptedAnswer: {
                "@type": "Answer",
                text: item.a,
              },
            })),
          }),
        }}
      />
    </section>
  );
}

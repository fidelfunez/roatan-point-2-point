export default function Newsletter() {
  return (
    <section id="newsletter" className="py-12 sm:py-16 lg:py-28 bg-white">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-h2 text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--navy)] mb-3 sm:mb-4">
          Inscripción y novedades
        </h2>
        <p className="text-gray-600 text-sm sm:text-base mb-6 sm:mb-8">
          La entrada oficial es por SmartTicket: $59.00 USD. Podés inscribirte
          hasta el 30 de septiembre; si querés merch del evento, la compra
          cierra el 30 de agosto.
        </p>
        <a
          href="https://www.smartticket.fun/event/roatan-point-2-point-2026"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[var(--accent)] text-white font-semibold hover:bg-[var(--accent-hover)] transition-colors min-h-[44px]"
        >
          Ir a inscripción
        </a>
      </div>
    </section>
  );
}

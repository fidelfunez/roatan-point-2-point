"use client";

import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Connect to your email service / API
    setSubmitted(true);
  };

  return (
    <section id="newsletter" className="py-12 sm:py-16 lg:py-28 bg-white">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-h2 text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--navy)] mb-3 sm:mb-4">
          Inscripción y novedades
        </h2>
        <p className="text-gray-600 text-sm sm:text-base mb-4 sm:mb-6">
          La entrada oficial es por SmartTicket: $59.00 USD. Podés inscribirte
          hasta el 30 de septiembre; si querés merch del evento, la compra
          cierra el 30 de agosto.
        </p>
        <a
          href="https://www.smartticket.fun/event/roatan-point-2-point-2026"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[var(--accent)] text-white font-semibold hover:bg-[var(--accent-hover)] transition-colors min-h-[44px] mb-8 sm:mb-10"
        >
          Ir a inscripción
        </a>
        <p className="text-gray-600 text-sm sm:text-base mb-6">
          Preferís el mail? Dejanos tu correo y te mandamos novedades, sin
          spam.
        </p>

        {submitted ? (
          <p className="text-lg text-green-600 font-medium">
            ¡Gracias! Te contactaremos pronto.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                placeholder="Nombre"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent outline-none text-base min-h-[44px]"
                required
              />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent outline-none text-base min-h-[44px]"
                required
              />
            </div>
            <button
              type="submit"
              className="mx-auto flex w-full sm:w-auto items-center justify-center px-8 py-3 min-h-[44px] rounded-full bg-[var(--accent)] text-white font-semibold transition-colors hover:bg-[var(--accent-hover)]"
            >
              Suscribirme
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

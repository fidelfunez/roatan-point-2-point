"use client";

import Image from "next/image";

/** Subí este valor cuando reemplacés logos en `public/sponsors/` sin cambiar el nombre del archivo (evita caché). */
const sponsorAssetsVersion = "20260417g";

function sponsorLogoSrc(path: string) {
  const q = path.includes("?") ? "&" : "?";
  return `${path}${q}v=${sponsorAssetsVersion}`;
}

type Sponsor = {
  name: string;
  logo: string;
  /** default = ancho base; lg / xl = celdas más anchas para marcas detalladas o wordmarks */
  logoScale?: "lg" | "xl";
  /** Zoom extra dentro de la misma celda (misma altura de franja) */
  logoBoost?: boolean;
};

/** Cada entrada = un logo en `public/sponsors/roatan-point-2-point-sponsor-*.webp` (mantener 1:1 con archivos). */
const sponsors: Sponsor[] = [
  {
    name: "Gatorade",
    logo: "/sponsors/roatan-point-2-point-sponsor-gatorade.webp",
  },
  {
    name: "Renovart Platinum",
    logo: "/sponsors/roatan-point-2-point-sponsor-renovart-platinum.webp",
    logoScale: "xl",
  },
  {
    name: "Farmacia del Ahorro",
    logo: "/sponsors/roatan-point-2-point-sponsor-farmacia-del-ahorro.webp",
    logoScale: "xl",
  },
  {
    name: "Ismania",
    logo: "/sponsors/roatan-point-2-point-sponsor-ismania.webp",
    logoScale: "xl",
    logoBoost: true,
  },
  {
    name: "Quarz Sparkling Water",
    logo: "/sponsors/roatan-point-2-point-sponsor-quarz-sparkling-water.webp",
  },
  {
    name: "Bloom Seltzer",
    logo: "/sponsors/roatan-point-2-point-sponsor-bloom-seltzer.webp",
    logoScale: "lg",
  },
  {
    name: "GARMIN HN",
    logo: "/sponsors/roatan-point-2-point-sponsor-garmin-hn.webp",
    logoScale: "xl",
  },
  {
    name: "Galaxy Wave",
    logo: "/sponsors/roatan-point-2-point-sponsor-galaxy-wave.webp",
    logoScale: "lg",
  },
  {
    name: "Mayan Princess",
    logo: "/sponsors/roatan-point-2-point-sponsor-mayan-princess.webp",
    logoBoost: true,
  },
  {
    name: "SUN Water",
    logo: "/sponsors/roatan-point-2-point-sponsor-sun-water.webp",
  },
  {
    name: "Turista Roatán Travel",
    logo: "/sponsors/roatan-point-2-point-sponsor-turista-roatan-travel.webp",
  },
  {
    name: "Dibisa",
    logo: "/sponsors/roatan-point-2-point-sponsor-dibisa.webp",
    logoScale: "lg",
  },
  {
    name: "Imasa",
    logo: "/sponsors/roatan-point-2-point-sponsor-imasa.webp",
    logoScale: "lg",
    logoBoost: true,
  },
  {
    name: "Maca Sportswear",
    logo: "/sponsors/roatan-point-2-point-sponsor-maca-sportswear.webp",
    logoScale: "lg",
  },
  {
    name: "Dunlop (Grupo Autollantas)",
    logo: "/sponsors/roatan-point-2-point-sponsor-dunlop-grupo-autollantas.webp",
    logoScale: "xl",
    logoBoost: true,
  },
  {
    name: "La Meta",
    logo: "/sponsors/roatan-point-2-point-sponsor-la-meta.webp",
    logoScale: "xl",
    logoBoost: true,
  },
];

const MARQUEE_COPIES = 3;
const marqueeItems = Array.from({ length: MARQUEE_COPIES }, () => sponsors).flat();

/** Franja más baja; el logo usa `fill` y llena este alto */
const slotBase =
  "mx-2 flex h-16 flex-shrink-0 items-center justify-center sm:mx-4 sm:h-[4.75rem]";
const slotDefault = "w-44 sm:w-56";
const slotLg = "w-48 sm:w-[15.5rem]";
const slotXl = "w-[13rem] sm:w-[19.5rem]";

function slotClass(scale: Sponsor["logoScale"]) {
  if (scale === "xl") return slotXl;
  if (scale === "lg") return slotLg;
  return slotDefault;
}

function imgSizes(sponsor: Sponsor) {
  const { logoScale, logoBoost } = sponsor;
  if (logoScale === "xl") {
    return logoBoost
      ? "(max-width: 640px) 240px, 360px"
      : "(max-width: 640px) 208px, 312px";
  }
  if (logoScale === "lg") {
    return logoBoost
      ? "(max-width: 640px) 208px, 272px"
      : "(max-width: 640px) 192px, 248px";
  }
  return logoBoost
    ? "(max-width: 640px) 208px, 256px"
    : "(max-width: 640px) 192px, 240px";
}

/** Misma altura de franja; el logo se “acerca” con scale (recorte suave vía overflow del slot). */
function imageScaleClass(sponsor: Sponsor) {
  const { logoScale, logoBoost } = sponsor;
  if (logoScale === "xl") {
    return logoBoost ? "scale-[1.14] sm:scale-[1.1]" : "";
  }
  if (logoScale === "lg") {
    return logoBoost
      ? "scale-[1.16] sm:scale-[1.12]"
      : "scale-[1.08] sm:scale-[1.06]";
  }
  return logoBoost
    ? "scale-[1.22] sm:scale-[1.16]"
    : "scale-[1.14] sm:scale-[1.1]";
}

export default function SponsorsStrip() {
  return (
    <section
      className="sponsors-strip group/ribbon relative border-y border-[var(--navy)]/[0.07] bg-gradient-to-b from-[#f6f4f1] via-[#ebe9e4] to-[#e4e1db] py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.72)] sm:py-4"
      aria-label={`Patrocinadores: ${sponsors.length} marcas en carrusel`}
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/80 to-transparent opacity-90" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-2 sm:mb-2.5">
        <p className="text-center font-h2 text-[0.625rem] sm:text-[0.6875rem] font-semibold uppercase tracking-[0.32em] text-[var(--navy)]/38">
          Patrocinadores
        </p>
      </div>

      <div className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-[#ebe9e4] from-[18%] to-transparent sm:w-20"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-[#ebe9e4] from-[18%] to-transparent sm:w-20"
        />

        <div className="flex w-max animate-marquee">
          {marqueeItems.map((sponsor, i) => (
            <div
              key={`sponsor-slot-${i}`}
              className={`${slotBase} ${slotClass(sponsor.logoScale)} relative overflow-hidden`}
            >
              <Image
                fill
                src={sponsorLogoSrc(sponsor.logo)}
                alt={`${sponsor.name} — patrocinador Roatán Point 2 Point`}
                sizes={imgSizes(sponsor)}
                className={`object-contain object-center p-0 opacity-[0.92] transition-opacity duration-500 ease-out group-hover/ribbon:opacity-100 origin-center ${imageScaleClass(sponsor)}`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

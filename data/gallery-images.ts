/**
 * Fotos en `public/photos/Gallery/` (WebP), orden del carrusel.
 * Nombres SEO: prefijo `roatan-point-2-point-gallery-`.
 */
export const galleryImageFilenames = [
  "roatan-point-2-point-gallery-grupo-ciclistas-playa-gatorade-medallas.webp",
  "roatan-point-2-point-gallery-grupo-participantes-playa-rolling-in-paradise.webp",
  "roatan-point-2-point-gallery-peloton-ciclismo-carretera-vista-mar-roatan.webp",
  "roatan-point-2-point-gallery-ciclista-ruta-mujer-dorsal-98-subida-oceano.webp",
  "roatan-point-2-point-gallery-ciclista-mtb-mujer-bike-girls-sendero-orilla-agua.webp",
  "roatan-point-2-point-gallery-salida-mtb-arco-gatorade-meta-multitud.webp",
  "roatan-point-2-point-gallery-ciclista-mtb-dorsal-216-bosque-sendero.webp",
  "roatan-point-2-point-gallery-grupo-adr-vacation-rentals-henry-morgan-resort.webp",
  "roatan-point-2-point-gallery-ciclista-ruta-arco-gatorade-meta-dorsal-102-pinarello.webp",
  "roatan-point-2-point-gallery-peloton-mtb-arco-gatorade-playeras-point2point.webp",
  "roatan-point-2-point-gallery-ciclista-scott-speedster-medalla-oro-muro-sponsors.webp",
  "roatan-point-2-point-gallery-peloton-ruta-galaxy-cycling-dorsal-010-gel.webp",
  "roatan-point-2-point-gallery-ciclista-mtb-celebracion-placa-guatemala-carretera.webp",
  "roatan-point-2-point-gallery-grupo-mtb-cinco-ciclistas-dorsales-256-234.webp",
  "roatan-point-2-point-gallery-equipo-galaxy-wave-camiseta-azul-terminal.webp",
  "roatan-point-2-point-gallery-participantes-camiseta-rolling-in-paradise-finisher.webp",
  "roatan-point-2-point-gallery-camiseta-oficial-mannequin-henry-morgan-resort.webp",
  "roatan-point-2-point-gallery-fiesta-premios-sun2coast-garmin-gatorade-playa.webp",
  "roatan-point-2-point-gallery-grupo-mtb-medallas-arco-renovart-platinum-gatorade.webp",
  "roatan-point-2-point-gallery-mtb-arco-renovart-platinum-ciclistas-muro-shimano.webp",
  "roatan-point-2-point-gallery-cuatrociclistas-letras-turisticas-roatan-muelle-mar.webp",
  "roatan-point-2-point-gallery-peloton-mtb-team-mtb-del-valle-specialized-trek.webp",
  "roatan-point-2-point-gallery-grupo-bike-mart-scott-amarillo-flores-roatan.webp",
  "roatan-point-2-point-gallery-cuatrociclistas-mtb-carretera-bosque-tropical.webp",
  "roatan-point-2-point-gallery-ciclista-mtb-jersey-guatemala-vista-mar.webp",
  "roatan-point-2-point-gallery-mtb-carretera-mural-barco-pirata-roatan.webp",
  "roatan-point-2-point-gallery-peloton-mtb-arco-renovart-mayan-princess-resort.webp",
  "roatan-point-2-point-gallery-tres-participantes-jersey-rojo-dorsal-225-251.webp",
  "roatan-point-2-point-gallery-bicicleta-specialized-ruta-grupo-henry-morgan.webp",
  "roatan-point-2-point-gallery-grupo-ada-vacation-resort-henry-morgan-maniquies.webp",
  "roatan-point-2-point-gallery-seleccion-guatemala-mtb-giant-shimano-scott.webp",
  "roatan-point-2-point-gallery-ciclista-mtb-specialized-dorsal-226-costera-palmeras.webp",
  "roatan-point-2-point-gallery-ciclista-mtb-ns-bikes-rockshox-dorsal-115-mar.webp",
  "roatan-point-2-point-gallery-duo-ciclismo-ruta-vista-oceano-roatan.webp",
  "roatan-point-2-point-gallery-ciclista-mtb-wheelie-bosque-farmacias-del-ahorro.webp",
  "roatan-point-2-point-gallery-grupo-seleccion-guatemala-mtb-shimano-scott.webp",
  "roatan-point-2-point-gallery-peloton-mixto-cervelo-mtb-grava-banderas-farmacias.webp",
  "roatan-point-2-point-gallery-peloton-costera-palmeras-carretera-evento.webp",
  "roatan-point-2-point-gallery-ocho-ciclistas-letras-gigantes-roatan-muelle.webp",
  "roatan-point-2-point-gallery-meta-mtb-trek-medalla-finisher-dorsal-558.webp",
  "roatan-point-2-point-gallery-grupo-trofeos-playa-premios-gran-fondo.webp",
] as readonly string[];

export function galleryAltText(filename: string): string {
  const slug = filename
    .replace(/\.(jpe?g|webp)$/i, "")
    .replace(/^roatan-point-2-point-gallery-/, "");
  const words = slug.replace(/-/g, " ");
  return `Roatán Point 2 Point — ${words}.`;
}

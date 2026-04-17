/**
 * URL canónica del sitio (OG, sitemap, JSON-LD). En producción definí
 * `NEXT_PUBLIC_SITE_URL` en el hosting (sin barra final).
 */
const FALLBACK_SITE_URL = "https://roatanpoint2point.com";

export function getSiteUrl(): string {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (!raw) return FALLBACK_SITE_URL;
  return raw.replace(/\/$/, "");
}

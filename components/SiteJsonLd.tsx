import { getSiteUrl } from "@/lib/site";

const TICKET_URL =
  "https://www.smartticket.fun/event/roatan-point-2-point-2026";

export default function SiteJsonLd() {
  const base = getSiteUrl();
  const logo = `${base}/logos/roatan-point-2-point-logo-transparent.webp`;

  const graph = [
    {
      "@type": "Organization",
      "@id": `${base}/#organization`,
      name: "Roatán Point 2 Point",
      url: base,
      logo: { "@type": "ImageObject", url: logo },
      sameAs: [
        "https://www.instagram.com/roatanpoint2point",
        "https://www.facebook.com/share/1FhWopUKWz/?mibextid=wwXIfr",
      ],
    },
    {
      "@type": "SportsEvent",
      "@id": `${base}/#event-2026`,
      name: "Roatán Point 2 Point 2026",
      description:
        "Fiesta internacional de ciclismo MTB y Ruta que cruza la isla de Roatán de punta a punta.",
      eventStatus: "https://schema.org/EventScheduled",
      startDate: "2026-10-04T05:30:00-06:00",
      location: {
        "@type": "Place",
        name: "Charankako, West Bay",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Roatán",
          addressRegion: "Islas de la Bahía",
          addressCountry: "HN",
        },
      },
      organizer: { "@id": `${base}/#organization` },
      offers: {
        "@type": "Offer",
        url: TICKET_URL,
        price: "59.00",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
        validThrough: "2026-09-30",
      },
      image: `${base}/photos/section-covers/roatan-point-2-point-faq-section-cover.webp`,
    },
  ];

  const schema = {
    "@context": "https://schema.org",
    "@graph": graph,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

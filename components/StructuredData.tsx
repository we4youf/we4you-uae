const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
const instagramUrl = "https://www.instagram.com/we4youfzellc/?utm_source=qr&mdxt=ZmR3bDE1bGVicnY3";
const mapUrl = "https://maps.app.goo.gl/DCuDWwrFmKypC3926?g_st=aw";

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "LocalBusiness"],
      "@id": `${siteUrl}/#organization`,
      name: "WE4YOU UAE",
      legalName: "WE4YOU FZE LLC",
      description:
        "WE4YOU UAE provides printing, trading, import and export, e-commerce, web design and digital content services in the UAE.",
      url: siteUrl,
      logo: `${siteUrl}/assets/we4you-favicon.webp`,
      image: `${siteUrl}/assets/we4you-hero.webp`,
      telephone: "+971568152689",
      sameAs: [instagramUrl, mapUrl],
      hasMap: mapUrl,
      address: {
        "@type": "PostalAddress",
        streetAddress: "26th Floor, Amber Gem Tower, Al Rashidiya 3",
        addressLocality: "Ajman",
        addressCountry: "AE",
      },
      areaServed: [
        { "@type": "City", name: "Ajman" },
        { "@type": "Country", name: "United Arab Emirates" },
      ],
      serviceType: [
        "Printing services",
        "Trading",
        "Import and export",
        "Digital solutions",
        "E-commerce",
        "Web design",
      ],
      knowsAbout: [
        "Printing equipment and materials",
        "Mobile phone trading",
        "Electrical and electronic spare parts",
        "Multimedia development",
        "Digital content services",
      ],
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+971558325749",
          contactType: "customer service",
          areaServed: "AE",
          availableLanguage: ["en", "ml"],
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "WE4YOU UAE",
      description: "Trading, printing and digital solutions in the UAE.",
      publisher: { "@id": `${siteUrl}/#organization` },
      inLanguage: "en-AE",
    },
    {
      "@type": "ItemList",
      "@id": `${siteUrl}/#services`,
      name: "WE4YOU UAE services",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Printing & Printing Solutions",
          description: "Professional printing support, materials and equipment for business needs.",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Trading, Import & Export",
          description: "Mobile phones, general trading and electrical spare parts sourcing and movement.",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Digital Solutions",
          description: "E-commerce, multimedia development, web design and digital content services.",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Ink and Printing Material",
          description: "Ink, toner, paper rolls and printing materials for business and production needs.",
        },
        {
          "@type": "ListItem",
          position: 5,
          name: "Electrical and Electronics Applications Spare Parts Trading",
          description: "Trading and sourcing support for electrical and electronics application spare parts.",
        },
      ],
    },
  ],
};

export default function StructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

const siteUrl = "https://www.we4youfzellc.com";
const siteName = "WE4YOU UAE";
const siteTitle = "WE4YOU UAE | Trading, Printing & Digital Solutions in Ajman";
const siteDescription =
  "WE4YOU FZE LLC is an Ajman, UAE business providing printing, trading, import and export, and digital solutions across the United Arab Emirates.";
const instagramUrl = "https://www.instagram.com/we4youfzellc/?utm_source=qr&mdxt=ZmR3bDE1bGVicnY3";
const mapUrl = "https://maps.app.goo.gl/DCuDWwrFmKypC3926?g_st=aw";
const organizationId = `${siteUrl}/#organization`;

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "LocalBusiness"],
      "@id": organizationId,
      name: siteName,
      legalName: "WE4YOU FZE LLC",
      description:
        "WE4YOU UAE provides printing, trading, import and export, e-commerce, web design and digital content services in the UAE.",
      url: siteUrl,
      logo: `${siteUrl}/assets/we4you-uae-logo.webp`,
      image: `${siteUrl}/assets/we4you-hero.webp`,
      telephone: "+971568152689",
      sameAs: [instagramUrl],
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
      name: siteName,
      description: "Trading, printing and digital solutions in the UAE.",
      publisher: { "@id": organizationId },
      inLanguage: "en-AE",
    },
    {
      "@type": "WebPage",
      "@id": `${siteUrl}/#webpage`,
      url: siteUrl,
      name: siteTitle,
      description: siteDescription,
      isPartOf: { "@id": `${siteUrl}/#website` },
      about: { "@id": organizationId },
      mainEntity: { "@id": organizationId },
      primaryImageOfPage: `${siteUrl}/assets/we4you-hero.webp`,
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
    {
      "@type": "FAQPage",
      "@id": `${siteUrl}/#faq`,
      url: `${siteUrl}/#faq`,
      inLanguage: "en-AE",
      mainEntity: [
        {
          "@type": "Question",
          name: "What services does WE4YOU UAE provide?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "WE4YOU UAE provides printing and printing materials, trading, import and export, electrical and electronic spare parts trading, e-commerce, web design and digital content services.",
          },
        },
        {
          "@type": "Question",
          name: "Where is WE4YOU FZE LLC located?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "WE4YOU FZE LLC is located on the 26th Floor of Amber Gem Tower, Al Rashidiya 3, Ajman, United Arab Emirates.",
          },
        },
        {
          "@type": "Question",
          name: "Does WE4YOU UAE serve customers across the UAE?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. WE4YOU UAE is based in Ajman and serves business and customer needs across the United Arab Emirates.",
          },
        },
        {
          "@type": "Question",
          name: "How can I contact WE4YOU UAE?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Contact WE4YOU UAE at +971 56 815 2689 or +971 55 832 5749, or start a WhatsApp conversation at https://wa.me/971558325749.",
          },
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

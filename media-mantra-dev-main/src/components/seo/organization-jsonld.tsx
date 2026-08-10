import { siteConfig } from "@/lib/site-config";

export function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: siteConfig.url,
    description: siteConfig.description,
    logo: `${siteConfig.url}/brand/mm-global-lockup.png`,
    sameAs: [
      "https://www.linkedin.com/company/mediamantaraglobal/",
      "https://www.instagram.com/",
    ],
    address: [
      {
        "@type": "PostalAddress",
        streetAddress: "11th floor, SAS Tower, Medicity",
        addressLocality: "Gurugram",
        addressRegion: "Haryana",
        postalCode: "122001",
        addressCountry: "IN",
      },
      {
        "@type": "PostalAddress",
        streetAddress: "Churchill Tower, 6th Floor, 615, Business Bay",
        addressLocality: "Dubai",
        addressRegion: "Dubai",
        addressCountry: "AE",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

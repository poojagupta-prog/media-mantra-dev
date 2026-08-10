/** Client names — order & spelling from approved website content PDF. */
export const clientLogos = [
  "Sony",
  "BOAT",
  "Falcons of Majlis",
  "Virgio",
  "Vattikuti foundation",
  "ieema",
  "OPG mobility",
  "Elecrama",
  "AIDA",
  "Swastik",
  "BNW Development",
  "Blaupunkt",
  "ISMA",
  "Acatel",
  "Amirah Developers",
  "Haldirams",
  "Zuari Industries",
  "SYSTRA",
  "LPU",
  "Ministry of Culture",
  "Barista",
  "SebaMed",
  "FORE",
  "Centurion Properties",
  "Wehnk.",
  "Bradford International",
  "NutraONE",
  "Eastman Energy Ltd",
  "Horiba",
  "H&S Real Estate Dubai",
  "Floward",
  "DECA",
  "Crown Prince — Saudi Prince visit to India",
] as const;

/** Explicit brand → logo file map (approved client logo pack). */
export const clientLogoFiles: Partial<Record<(typeof clientLogos)[number], string>> = {
  Sony: "/clients/logo-sony.svg",
  BOAT: "/clients/logo-boat.png",
  "Falcons of Majlis": "/clients/logo-03.png",
  Virgio: "/clients/logo-04.png",
  "Vattikuti foundation": "/clients/logo-05.png",
  ieema: "/clients/logo-06.png",
  "OPG mobility": "/clients/logo-07.png",
  Elecrama: "/clients/logo-08.png",
  AIDA: "/clients/logo-09.png",
  Swastik: "/clients/logo-29.png",
  "BNW Development": "/clients/logo-10.png",
  Blaupunkt: "/clients/logo-11.png",
  ISMA: "/clients/logo-12.png",
  Acatel: "/clients/logo-27.png",
  "Amirah Developers": "/clients/logo-13.png",
  Haldirams: "/clients/logo-14.png",
  "Zuari Industries": "/clients/logo-15.png",
  SYSTRA: "/clients/logo-16.png",
  LPU: "/clients/logo-17.png",
  "Ministry of Culture": "/clients/logo-18.png",
  Barista: "/clients/logo-19.png",
  SebaMed: "/clients/logo-20.png",
  FORE: "/clients/logo-21.png",
  "Centurion Properties": "/clients/logo-22.png",
  "Wehnk.": "/clients/logo-28.png",
  "Bradford International": "/clients/logo-23.png",
  NutraONE: "/clients/logo-24.png",
  "Eastman Energy Ltd": "/clients/logo-25.png",
  Horiba: "/clients/logo-26.png",
  "H&S Real Estate Dubai": "/clients/logo-hs-real-estate.png",
  Floward: "/clients/logo-floward.png",
  DECA: "/clients/logo-deca.png",
};

export function getClientLogoSrc(brandName: string): string | undefined {
  return (clientLogoFiles as Record<string, string | undefined>)[brandName];
}

/** Homepage logo grid — brand logos only (flagship names run in ticker). */
export const clientGridBrands = clientLogos.filter(
  (brand) => brand !== "Crown Prince — Saudi Prince visit to India",
);

/** Homepage ticker — government / flagship associations. */
export const clientTickerBrands = ["Crown Prince — Saudi Prince visit to India"] as const;

function clientSlug(brand: string) {
  return brand
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export const clientGridEntries = clientGridBrands.map((brand) => ({
  id: clientSlug(brand),
  brand,
  logo: getClientLogoSrc(brand),
}));

/** Awards content — sourced from Awards.xlsx (client delivery). */

export type AwardItem = {
  id: string;
  title: string;
  lines?: readonly string[];
  href?: string;
  imageSrc?: string;
  imageAlt?: string;
};

export type AwardColumn = {
  key: "pooja" | "udit" | "industry";
  label: string;
  items: readonly AwardItem[];
};

export const homeAwardsLead = {
  eyebrow: "Recognition",
  titleLine1: "Awards &",
  titleLine2: "accolades",
  description:
    "Founder honours and industry recognition across Adgully IMAGEXX, SABRE, IPRCCA, BW Excel, PRPCL, and more.",
  viewAllLabel: "View all awards",
  viewAllHref: "/awards",
} as const;

/** Homepage — four featured awards (row 1 + imagery where provided). */
export const homeFeaturedAwards: readonly AwardItem[] = [
  {
    id: "udit-brand-icon-2026",
    title: "Brand Communication Icon 2026",
    imageSrc: "/awards/award-1.jpg",
    imageAlt: "Udit Pathak — Brand Communication Icon 2026",
    href: "https://www.instagram.com/reel/DVqiKSIka8P/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    id: "industry-imagexx-2026",
    title: "AdGully IMAGEXX Agency of the Year 2026",
    lines: ["14 Awards (6 Gold and 5 Silver)"],
    imageSrc: "/awards/imagexx-agency-2026.jpg",
    imageAlt: "Media Mantra — AdGully IMAGEXX Agency of the Year 2026",
    href: "https://www.instagram.com/p/DZMl6JIiEvF/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    id: "pooja-e4m-mentor",
    title: "E4m Mentor of the Year 2024",
    imageSrc: "/awards/puja-e4m-mentor-2024.jpg",
    imageAlt: "Puja Pathak — E4m Mentor of the Year 2024",
    href: "https://www.instagram.com/p/DGnz81rzp2g/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    id: "industry-iprcca-2024",
    title: "IPRCCA 2024",
    lines: ["2 Gold, 3 Silver, 2 Bronze"],
    imageSrc: "/awards/award-4.jpg",
    imageAlt: "Media Mantra — IPRCCA 2024 Education & Science award",
    href: "https://www.instagram.com/p/DLOzb_VRhmS/?igsh=N21lOXpjOWZlMmlv",
  },
] as const;

export const awardsPageLead = {
  eyebrow: "Recognition",
  title: "Awards & accolades",
  description:
    "Founder honours and industry recognition across Adgully IMAGEXX, SABRE, IPRCCA, BW Excel, PRPCL, and more.",
} as const;

export const awardColumns: readonly AwardColumn[] = [
  {
    key: "udit",
    label: "Udit Pathak Awards",
    items: [
      {
        id: "udit-pr-head-2026",
        title: "PR Agency Head of the Year 2026",
        imageSrc: "/awards/udit-pr-head-2026.png",
        imageAlt: "Udit Pathak — PR Agency Head of the Year 2026",
        href: "https://www.linkedin.com/posts/uditpathak_mediamantra-imagexxawards2026-publicrelations-activity-7468181386911264768-Z3GG?utm_source=share&utm_medium=member_desktop&rcm=ACoAAAdSJvcB84zoBYco4bx4x1Jm2iEeKZziJiE",
      },
      {
        id: "udit-brand-icon-2026",
        title: "Brand Communication Icon 2026",
        imageSrc: "/awards/award-1.jpg",
        imageAlt: "Udit Pathak — Brand Communication Icon 2026",
        href: "https://www.instagram.com/reel/DVqiKSIka8P/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      },
      {
        id: "udit-imagexx-head-2024",
        title: "PR Agency Head of the Year at Adgully IMAGEXX Awards 2024",
      },
      {
        id: "udit-e4m-maestro-2024",
        title: "PR & Corp Comm Maestro 2024 by e4m",
      },
      {
        id: "udit-iprcca-professional-2021-2022",
        title: "PR Professional of the Year 2022 and 2021 by IPRCCA",
      },
      {
        id: "udit-e4m-game-changers",
        title: "Top 100 Influential Game Changers by E4M 2022 & 2023",
      },
      {
        id: "udit-campaign-india-head-2022",
        title: "People & Team PR Agency Head of the Year 2022 at Campaign India Awards",
      },
      {
        id: "udit-e4m-30-40-under",
        title: "Featured in e4m's '30 Under 30' and '40 Under 40' lists",
      },
      {
        id: "udit-top-10-men-pr",
        title: "Top 10 men leading large PR agencies in India",
      },
    ],
  },
  {
    key: "pooja",
    label: "Puja Pathak Awards",
    items: [
      {
        id: "pooja-adgully-2026",
        title: "Women Entrepreneur of the Year 2026 by Adgully",
        imageSrc: "/awards/puja-women-entrepreneur-2026.jpg",
        imageAlt: "Puja Pathak — Women Entrepreneur of the Year 2026 by Adgully",
        href: "https://www.instagram.com/p/DV-XqfxkaKU/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      },
      {
        id: "pooja-sabre-2025",
        title: "SABRE Award Jury Member SE Asia 2025",
        href: "https://www.instagram.com/p/DLRvTFGRWVk/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      },
      {
        id: "pooja-e4m-mentor",
        title: "E4m Mentor of the Year 2024",
        imageSrc: "/awards/puja-e4m-mentor-2024.jpg",
        imageAlt: "Puja Pathak — E4m Mentor of the Year 2024",
        href: "https://www.instagram.com/p/DGnz81rzp2g/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      },
      {
        id: "pooja-iimc-trailblazers",
        title:
          "Featured in Trailblazers, an initiative by Dept. of Media Business Studies at IIMC Delhi",
        href: "https://www.linkedin.com/posts/puja-pathak-b864aa110_mediamantragroup-influentialvoicesofpr-mediabusinessstudies-activity-7422616340563279874-qQKR?utm_source=share&utm_medium=member_desktop&rcm=ACoAAAdSJvcB84zoBYco4bx4x1Jm2iEeKZziJiE",
      },
      {
        id: "pooja-e4m-40-under-40-2019",
        title: "2019 E4M — 40 Under 40 in PR",
      },
      {
        id: "pooja-adgully-influencer-2021",
        title: "Adgully's Powerful Influencer Award in 2021",
      },
    ],
  },
  {
    key: "industry",
    label: "Industry Awards",
    items: [
      {
        id: "industry-imagexx-2026",
        title: "AdGully IMAGEXX Agency of the Year 2026",
        lines: ["14 Awards (6 Gold and 5 Silver)"],
        imageSrc: "/awards/imagexx-agency-2026.jpg",
        imageAlt: "Media Mantra — AdGully IMAGEXX Agency of the Year 2026",
        href: "https://www.instagram.com/p/DZMl6JIiEvF/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      },
      {
        id: "industry-prpcl-north-2026",
        title: "PRPCL North Winner 2026",
        href: "https://www.linkedin.com/posts/media-mantra_mediamantragroup-prcommunications-pragency-activity-7444302346429435904-Ur2O?utm_source=share&utm_medium=member_desktop&rcm=ACoAAAdSJvcB84zoBYco4bx4x1Jm2iEeKZziJiE",
      },
      {
        id: "industry-e4m-journey",
        title: "Media Mantra's journey to e4m PR Agencies — 13 Years of Bold Thinking",
        href: "https://www.linkedin.com/company/media-mantra/",
      },
      {
        id: "industry-e4m-top-20-2026",
        title: "Top 20 PR Companies by e4m PR & Corporate Communications Watchlist 2026 (Certificate)",
        href: "https://www.instagram.com/p/DSU-3nJEUWU/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      },
      {
        id: "industry-imagexx-2025",
        title: "Adgully IMAGEXX — Independent PR Agency of the Year 2025",
        lines: ["12 Awards (5 Gold, 2 Silver, 3 Bronze)"],
        href: "https://www.linkedin.com/posts/media-mantra_imagexx-awards-2025-activity-7353019477443141633-XYr2?utm_source=share&utm_medium=member_desktop&rcm=ACoAAAdSJvcB84zoBYco4bx4x1Jm2iEeKZziJiE",
      },
      {
        id: "industry-iprcca-2025",
        title: "IPRCCA 2025 — Large PR Consultancy of the Year",
        lines: ["3 Golds, 3 Silvers, 2 Bronzes"],
        href: "https://www.linkedin.com/posts/media-mantra_iprcca-awards-activity-7344320209672904704-TQlo?utm_source=share&utm_medium=member_desktop&rcm=ACoAAAdSJvcB84zoBYco4bx4x1Jm2iEeKZziJiE",
      },
      {
        id: "industry-bw-excel-2025",
        title: "BW Excel Awards 2025",
        lines: ["Agency of the Year (Large)"],
        href: "https://www.instagram.com/p/C3u3OuEvRIi/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      },
      {
        id: "industry-prpcl-2025",
        title: "PRPCL 2025",
        href: "https://www.instagram.com/p/DHTLNtvTIRz/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      },
      {
        id: "industry-imagexx-2024",
        title: "IMAGEXX 2024",
        lines: ["8 Gold, 2 Silver, 4 Bronze"],
        href: "https://www.instagram.com/reel/C9m8MLsvs16/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      },
      {
        id: "industry-iprcca-2024",
        title: "IPRCCA 2024",
        lines: ["2 Gold, 3 Silver, 2 Bronze"],
        imageSrc: "/awards/award-4.jpg",
        imageAlt: "Media Mantra — IPRCCA 2024 Education & Science award",
        href: "https://www.instagram.com/p/DLOzb_VRhmS/?igsh=N21lOXpjOWZlMmlv",
      },
      {
        id: "industry-prpcl-2024",
        title: "PRPCL 2024",
        href: "https://www.instagram.com/p/C8ZRsQhvt2q/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      },
      {
        id: "industry-pride-2026",
        title: "India's PRide 2026 by Brand Communications",
        href: "https://www.linkedin.com/posts/media-mantra_pride2026-brandcommunion-publicrelations-activity-7439625957658796032-tR47?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE7ZkWEBvaR75KMKEi6mbT-4dlxGJSQsZSc",
      },
      {
        id: "industry-swastik-hospitality",
        title:
          'Best Hospitality and Travel Sector Campaign — "#BloomInAbundance" for Swastik Wellbeing',
        href: "https://www.linkedin.com/posts/fulcrum-awards1_bloominabundance-activity-7375200115558481920-Nhmn?utm_source=share&utm_medium=member_desktop&rcm=ACoAAAdSJvcB84zoBYco4bx4x1Jm2iEeKZziJiE",
      },
    ],
  },
] as const;

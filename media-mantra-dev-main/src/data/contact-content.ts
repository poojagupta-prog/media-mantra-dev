/** Contact page — Website Content Document */

export type ContactOffice = {
  readonly region: string;
  readonly city?: string;
  readonly addressLines: readonly string[];
  readonly phone?: string;
  readonly email: string;
  readonly timings?: string;
};

export const contactPageContent = {
  headline: "Contact Us",
  intro: "Let's chat. Get in touch by phone, email or just pop in.",
  emailLabel: "Email",
  email: "info@mediamantraglobal.com",
  officesTitle: "Offices",
  offices: [
    {
      region: "India",
      city: "Gurgaon (Headquarters)",
      addressLines: [
        "Ground floor, Plot no. 63, Sector 32",
        "Gurugram, Haryana - 122001",
      ],
      phone: "+91-9990795002",
      email: "info@mediamantraglobal.com",
      timings: "Timings: Mon-Fri 9:30am–6:30pm IST",
    },
    {
      region: "UAE",
      city: "Dubai",
      addressLines: ["Churchill Tower, 6th floor, 615, Business Bay"],
      phone: "+971-561791863",
      email: "info@mediamantraglobal.com",
      timings: "Timings: Mon-Fri 9:00am–6:00pm GST",
    },
    {
      region: "Singapore",
      addressLines: ["ADDRESS"],
      email: "info@mediamantraglobal.com",
    },
    {
      region: "USA, Texas",
      addressLines: ["ADDRESS"],
      email: "info@mediamantraglobal.com",
    },
    {
      region: "Australia",
      city: "Sydney",
      addressLines: ["16 Earl Street, Hunters Hill, NSW 2110"],
      email: "info@mediamantraglobal.com",
    },
  ] satisfies readonly ContactOffice[],
  careersLabel: "Explore careers →",
  careersHref: "/careers",
  form: {
    recipient: "info@mediamantraglobal.com",
    title: "Send us a message",
    successMessage: "Your email app should open with your message addressed to our team. Send it from there and we will reply shortly.",
  },
} as const;

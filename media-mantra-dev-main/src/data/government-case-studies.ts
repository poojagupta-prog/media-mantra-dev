import type { CaseStudy } from "@/data/case-studies";

export const GOVERNMENT_CASE_STUDY_INTRO =
  "Media Mantra Global has been entrusted with communications for some of India's most significant government-led cultural, diplomatic, and public affairs events. Mandates that demand zero-error execution, sovereign-level coordination, and the kind of communications precision that governments rely on." as const;

export const GOVERNMENT_CASE_STUDY_ORDER = [
  "rashtriya-sanskriti-mahotsav-2016",
  "nayi-disha-naya-sankalp-dav-2016",
  "saudi-crown-prince-visit-2019",
  "p-chidambaram-ivca-conclave",
  "tryst-with-ayodhya-balbir-punj-2024",
] as const;

const governmentCaseStudyBySlug: Record<(typeof GOVERNMENT_CASE_STUDY_ORDER)[number], CaseStudy> = {
  "rashtriya-sanskriti-mahotsav-2016": {
    slug: "rashtriya-sanskriti-mahotsav-2016",
    title: "Rashtriya Sanskriti Mahotsav 2016",
    brand: "Ministry of Culture, Government of India",
    campaign: "Rashtriya Sanskriti Mahotsav 2016",
    category: "Government · Culture",
    section: "government",
    brief: [
      "The Ministry of Culture, Government of India mandated comprehensive communications support for the Rashtriya Sanskriti Mahotsav, a flagship national cultural festival designed to celebrate India's civilisational diversity and promote the vision of Ek Bharat, Shreshtha Bharat. The festival brought together folk, tribal, and classical artists from every corner of the country in a singular, nationally broadcast cultural celebration. Media Mantra was tasked with creating awareness, mobilising media, managing on-ground communications, and ensuring the event received the national prominence it deserved.",
    ],
    excerpt:
      "The Ministry of Culture, Government of India mandated comprehensive communications support for the Rashtriya Sanskriti Mahotsav, a flagship national cultural festival designed to celebrate India's civilisational diversity.",
    idea: [
      "Position the Mahotsav as India's foremost cultural convergence and a living demonstration that the country's diversity is its strength. The communications strategy centred on cultural pride, national unity, and the discovery narrative, helping urban audiences experience folk traditions they had never encountered. Every press interaction and media piece was anchored in the idea that culture is diplomacy.",
    ],
    execution: [
      "End-to-end PR and media management for the Ministry of Culture. Media Mantra coordinated national press coverage across print, broadcast, and digital platforms. The team managed media logistics, press briefings, and journalist facilitation on-ground. Media outreach extended across the country's major English and Hindi language publications, regional press, and cultural media. Stakeholder communications were managed across the Ministry and cultural organisations under the event's umbrella.",
    ],
    results: [
      "Coverage secured across 50+ national and regional publications including leading English and Hindi dailies",
      "Event drew footfall from artists representing all 28 states and 8 Union Territories",
      "All-India broadcast coverage achieved across Doordarshan and private news networks",
      "Media Mantra's work established the communications template that the Ministry continued to build on across subsequent editions of the Mahotsav, which became one of India's most-attended annual cultural events",
      "The Rashtriya Sanskriti Mahotsav has since grown to attract 50,000+ visitors per day in its open-ground editions",
    ],
    resultsHighlights: [
      { value: "50+", label: "Publications" },
      { value: "28", label: "States represented" },
      { value: "50K+", label: "Daily visitors" },
    ],
    heroImage: "/campaigns/rashtriya-sanskriti-mahotsav/stage-dignitaries-2016.png",
    accent: "from-mm-gold/45 to-mm-royal/40",
    campaignImages: [
      "/campaigns/rashtriya-sanskriti-mahotsav/stage-dignitaries-2016.png",
      "/campaigns/rashtriya-sanskriti-mahotsav/classical-dance-performance.png",
      "/campaigns/rashtriya-sanskriti-mahotsav/classical-music-performance.png",
      "/campaigns/rashtriya-sanskriti-mahotsav/president-cultural-event.png",
      "/campaigns/rashtriya-sanskriti-mahotsav/press-hindustan-times.png",
      "/campaigns/rashtriya-sanskriti-mahotsav/press-ndtv-food.png",
    ],
  },
  "nayi-disha-naya-sankalp-dav-2016": {
    slug: "nayi-disha-naya-sankalp-dav-2016",
    title: "Nayi Disha, Naya Sankalp · DAV 2016",
    brand: "DAV College Managing Committee",
    campaign: "Nayi Disha, Naya Sankalp",
    category: "Government · Education",
    section: "government",
    brief: [
      "The Dayanand Anglo Vedic (DAV) College Managing Committee, one of India's largest educational networks with over 900 institutions and 1.4 million students organised a landmark national convocation titled 'Nayi Disha, Naya Sankalp' (New Direction, New Resolve) to mark a new chapter in the DAV educational mission. The Honourable Prime Minister Narendra Modi addressed students and teachers at the event. Media Mantra was engaged to lead all communications, media management, and event visibility for one of the largest educational gatherings in modern India.",
    ],
    excerpt:
      "The Dayanand Anglo Vedic (DAV) College Managing Committee organised a landmark national convocation titled 'Nayi Disha, Naya Sankalp' with the Honourable Prime Minister Narendra Modi as keynote.",
    idea: [
      "Frame the event not as an institutional ceremony but as a moment of national educational renewal. With the Prime Minister as the keynote voice, the communications strategy was built around the aspiration of raising India's global stature through education rooted in national values, the same mission Swami Dayananda envisioned when founding the Arya Samaj. Media Mantra positioned the event at the intersection of tradition and transformation.",
    ],
    execution: [
      "Full-spectrum media management for the event, which took place on 14 February 2016 in New Delhi. Media Mantra handled press accreditation, media logistics, press conference facilitation, national and regional media outreach, and post-event coverage tracking. Given the Prime Minister's participation, communications required precision coordination with PMO communications channels and institutional stakeholders across the DAV network. The team managed real-time coverage amplification and ensured the event's message of educational ambition grounded in Indian values carried across all major platforms.",
    ],
    results: [
      "Prime-time coverage across all major national TV channels including NDTV, India TV, Aaj Tak, DD News",
      "Coverage by major wire services PTI and ANI, syndicated nationally and internationally",
      "Featured prominently in leading national dailies including The Times of India, Hindustan Times, Indian Express, and Hindi publications",
      "PMO India's official X account amplified the Prime Minister's address, generating significant social reach",
      "Event attended by representatives from 900+ DAV institutions across 29 states",
      "PM's address 'Nayi Disha, Naya Sankalp' became a referenced quote in national education policy discourse",
    ],
    resultsHighlights: [
      { value: "900+", label: "DAV institutions" },
      { value: "29", label: "States represented" },
      { value: "PM", label: "Keynote address" },
    ],
    heroImage: "/campaigns/nayi-disha-naya-sankalp-dav-2016/pm-stadium-address.png",
    accent: "from-mm-royal/50 to-mm-gold/35",
    campaignImages: [
      "/campaigns/nayi-disha-naya-sankalp-dav-2016/pm-stadium-address.png",
      "/campaigns/nayi-disha-naya-sankalp-dav-2016/pm-modi-stage-wave.png",
      "/campaigns/nayi-disha-naya-sankalp-dav-2016/pm-dav-way-of-life-book.png",
      "/campaigns/nayi-disha-naya-sankalp-dav-2016/pm-stadium-jumbotron.png",
    ],
  },
  "saudi-crown-prince-visit-2019": {
    slug: "saudi-crown-prince-visit-2019",
    title: "Saudi Crown Prince State Visit · India 2019",
    brand: "Saudi Crown Prince HRH Mohammed bin Salman",
    campaign: "State Visit to India, February 2019",
    category: "Government · Diplomacy",
    section: "government",
    brief: [
      "Crown Prince Mohammed bin Salman of Saudi Arabia undertook his first bilateral state visit to India on 19-20 February 2019. He was received by Prime Minister Narendra Modi in a historically significant gesture of diplomatic importance. The visit included delegation-level bilateral talks at the Hyderabad House, a ceremonial welcome at Rashtrapati Bhawan, and a state dinner hosted by President Ram Nath Kovind. Media Mantra provided strategic communications support for stakeholder elements of the visit.",
    ],
    excerpt:
      "Crown Prince Mohammed bin Salman of Saudi Arabia undertook his first bilateral state visit to India on 19-20 February 2019.",
    idea: [
      "A state visit of this magnitude required communications that elevated the bilateral narrative, India-Saudi Arabia as a strategic partnership of mutual consequence, not a transactional oil-and-remittance relationship. The Saudi delegation arrived with ministers, senior officials, and leading Saudi businessmen, and the communications framing needed to reflect that this was a visit about the future of bilateral trade, energy, investment, and defence.",
    ],
    execution: [
      "Media Mantra supported strategic communications for the visit, managing media engagement for stakeholder interactions associated with the delegation. The team worked within the broader diplomatic communications framework to ensure that bilateral agenda such as energy security, trade (Saudi Arabia was India's fourth largest trading partner with USD 27.48 billion in bilateral trade), investment, and counter-terrorism cooperation was accurately and comprehensively reflected in media coverage. Coordination included managing communications touchpoints with the business delegation, and ensuring accurate and comprehensive media framing across all major platforms.",
    ],
    results: [
      "The visit generated front-page coverage across every major national daily and led broadcast bulletins on all news channels for 2 consecutive days",
      "Coverage by Reuters, AP, AFP, Al Jazeera, Bloomberg placing the event in global diplomatic media",
      "5 bilateral MoUs signed across industry, culture, and security covered prominently with correct framing",
    ],
    resultsHighlights: [
      { value: "2", label: "Days of lead coverage" },
      { value: "5", label: "Bilateral MoUs" },
      { value: "$27.5B", label: "Bilateral trade" },
    ],
    heroImage: "/campaigns/saudi-crown-prince-visit-2019/rashtrapati-bhavan-welcome.png",
    accent: "from-mm-graphite/55 to-mm-royal/45",
    campaignImages: [
      "/campaigns/saudi-crown-prince-visit-2019/rashtrapati-bhavan-welcome.png",
      "/campaigns/saudi-crown-prince-visit-2019/modi-mbs-handshake.png",
      "/campaigns/saudi-crown-prince-visit-2019/crown-prince-arrival.png",
      "/campaigns/saudi-crown-prince-visit-2019/press-al-jazeera.png",
    ],
  },
  "p-chidambaram-ivca-conclave": {
    slug: "p-chidambaram-ivca-conclave",
    title: "P. Chidambaram · IVCA Conclave",
    brand: "Indian Venture & Alternate Capital Association",
    campaign: "IVCA Conclave",
    category: "Government · Policy & Finance",
    section: "government",
    brief: [
      "The Indian Venture and Alternate Capital Association (IVCA) Conclave is India's most consequential annual gathering for the alternate asset industry, bringing together senior executives from PE and VC funds, Limited Partners, Family Offices, entrepreneurs, and policymakers. Media Mantra was engaged to manage all communications for the Conclave edition featuring Former Finance Minister P. Chidambaram was keynote speaker, a session carrying significant implications for PE-VC policy, regulatory direction, and the investment climate.",
    ],
    excerpt:
      "Media Mantra was engaged to manage all communications for the IVCA Conclave edition featuring Former Finance Minister P. Chidambaram as keynote speaker.",
    idea: [
      "Shri P. Chidambaram address was an opportunity to position the IVCA Conclave as the definitive policy conversation in Indian alternative capital. The strategy centred on amplifying policy signals from keynote while ensuring Conclave's broader themes received institutional coverage the industry required.",
    ],
    execution: [
      "Media Mantra managed all communications including pre-event media engagement, speaker announcements, press accreditation, on-ground facilitation, and post-event amplification. The team coordinated with financial media, business press, and policy journalists to ensure the address was covered in proper context. Press briefings, media kits, and distribution were executed across print, digital, and broadcast financial media.",
    ],
    results: [
      "Coverage in India's leading financial and business publications including Economic Times, Business Standard, Financial Express, Mint, and LiveMint",
      "Broadcast coverage on CNBC-TV18, ET Now, and Bloomberg Quint",
      "Chidambaram's policy remarks were cited in subsequent coverage of regulatory developments in PE-VC sector",
    ],
    resultsHighlights: [
      { value: "ET", label: "Tier A coverage" },
      { value: "CNBC", label: "Broadcast reach" },
      { value: "PE-VC", label: "Policy discourse" },
    ],
    heroImage: "/campaigns/p-chidambaram-ivca-conclave/ivca-conclave-auditorium.png",
    accent: "from-mm-royal/45 to-mm-graphite/50",
    campaignImages: [
      "/campaigns/p-chidambaram-ivca-conclave/ivca-conclave-auditorium.png",
      "/campaigns/p-chidambaram-ivca-conclave/chidambaram-keynote.png",
      "/campaigns/p-chidambaram-ivca-conclave/ivca-stage-panel.png",
    ],
  },
  "tryst-with-ayodhya-balbir-punj-2024": {
    slug: "tryst-with-ayodhya-balbir-punj-2024",
    title: "Tryst with Ayodhya · Balbir Punj 2024",
    brand: "Balbir Punj",
    campaign: "Launch of 'Tryst with Ayodhya: Decolonization of India'",
    category: "Government · Public Affairs",
    section: "government",
    brief: [
      "Former Rajya Sabha Member and author Balbir Punj released 'Tryst with Ayodhya: Decolonization of India', a deeply researched work examining the civilisational significance of Ram Janmabhoomi, 9 days before the historic Pran Pratishtha of Ram Mandir on 22 January 2024. Defence Minister Rajnath Singh presided over the launch at Delhi University. Media Mantra managed a complete communications strategy for one of the most high-profile literary and cultural events of 2024.",
    ],
    excerpt:
      "Former Rajya Sabha Member Balbir Punj released 'Tryst with Ayodhya: Decolonization of India' nine days before the historic Pran Pratishtha of Ram Mandir.",
    idea: [
      "The book launch was a cultural moment, timed at the cusp of one of India's most historically significant occasions in recent memory, the strategy framed the book as essential intellectual context for Ram Mandir consecration. Media Mantra positioned the launch as the intellectual companion to an event that was simultaneously a legal, cultural, and civilisational milestone, making it essential coverage for news, cultural, and political media.",
    ],
    execution: [
      "Media Mantra team managed media accreditation, on-ground logistics, author and speaker press engagement, and a targeted outreach campaign across national news, political, and cultural media. Pre-event seeding, day-of coverage management, and post-event amplification were executed within a compressed timeline given proximity to the January 22 consecration.",
    ],
    results: [
      "Front-page and prominent coverage in national dailies including The Tribune, Deccan Herald, The Hindu, and Times of India",
      "Wire service coverage by PTI, syndicated to 400+ publications nationally",
      "Defence Minister Rajnath Singh's key quote, 'Ayodhya does not divide, it unites' trended across digital and social media",
      "Delhi University Vice Chancellor's remarks covered across education and national media",
      "Book generated significant social media discussion, with the author's thesis cited across news commentary in the run-up to January 22",
      "Media Mantra's compressed-timeline execution, from brief to full national coverage in under a week became a case study in time-critical political communications",
    ],
    resultsHighlights: [
      { value: "400+", label: "PTI syndications" },
      { value: "<1 wk", label: "Brief to coverage" },
      { value: "Front page", label: "National dailies" },
    ],
    heroImage:
      "/campaigns/tryst-with-ayodhya-balbir-punj-2024/book-launch-delhi-university.png",
    accent: "from-mm-gold/40 to-mm-royal/45",
    campaignImages: [
      "/campaigns/tryst-with-ayodhya-balbir-punj-2024/book-launch-delhi-university.png",
      "/campaigns/tryst-with-ayodhya-balbir-punj-2024/rajnath-singh-keynote.png",
      "/campaigns/tryst-with-ayodhya-balbir-punj-2024/lamp-lighting-ceremony.png",
      "/campaigns/tryst-with-ayodhya-balbir-punj-2024/pre-book-release-press-conference.png",
      "/campaigns/tryst-with-ayodhya-balbir-punj-2024/constitution-club-press-conference.png",
    ],
  },
};

export const governmentCaseStudies: CaseStudy[] = GOVERNMENT_CASE_STUDY_ORDER.map(
  (slug) => governmentCaseStudyBySlug[slug],
);

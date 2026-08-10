# Website changes checklist (from *Media Mantra Global WEBSITE Changes.pptx*)

Approved layout/styling directives were extracted from the deck. **Body copy still must be pulled from the linked Google Docs** where the slides say “TAKE CONTENT FROM DOC”:

- Main content hub: https://docs.google.com/document/d/1R-v8TLOcHeRcTdwARrkwpWHG3ezwfkHaKhQyEfw3pmc/edit  
- Case studies (referenced on one slide): https://docs.google.com/document/d/1si5vwdL0P5OYnVHmute7LKDx1__QNCP1Co0UKO7KZ0o/edit  

## Implemented in code (partial — see repo)

| Slide | Directive | Repo status |
| --- | --- | --- |
| 1 | White sections: blue headlines · Graphite: white + gold accents | Utilities `mm-headline-brand-blue`; mixed borders on graphite bands |
| 3 | Header graphite; video after header | Header always graphite; hero unchanged stacking |
| 4 | Video blur; music off | Hero video lightly blurred + scaled; muted |
| 6 | Locations + revolving globe motif | Homepage locations band adds slow-spin globe visual |
| 7 | Clients headline right-aligned | Clients section heading block `lg:text-right` |
| 9–11 | Case study preview / bands | White bands use blue majors where applicable |
| 12–16 | About + framework | About hero simplified (no gradient headline); founders’ gold toned down; closing CTA → thin “See our work” |
| 17–18 | Services index = cards only | Listing cards trimmed to title + index + arrow |
| 19–21 | Service detail banner + pillars | Banner H1 = **service title only** (no puff headline); pillar sidebar removed; **main story on white canvas** + navy headings (deck Slide 1 white/graphite rhythm — not entire viewport graphite) |
| 22 | Case study listing CTA | Footer strip tightened |
| 29–30 | Careers | Banner + accordion-style open roles |
| 31–32 | Contact | Hero banner; “Studios” → **Offices**; white + graphite split |

## Still dependent on DOC / external references

- Exact paragraph copy across About, Locations, Clients, Metrics, Contact, Careers.  
- Full case study index + internal layouts per Romans / Edelman references (URLs in deck).  

When the Docs are finalized, paste into `src/data/about-content.ts`, `home-content.ts`, and related modules.

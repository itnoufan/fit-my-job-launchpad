

## Plan: Highlight Course Names and Add Download Brochure Button

### Changes to `src/components/landing/CoursesSection.tsx`

**1. Highlight course titles**
- Apply a gradient text effect or bold accent color to the course name (e.g., `text-gradient` or `text-primary font-bold text-xl`) so each course title stands out prominently
- Add a subtle underline accent beneath the title for visual emphasis

**2. Add "Download Brochure" button above "Enquire Now"**
- Add a secondary/outline-styled button labeled "Download Brochure" with a `Download` icon (from Lucide) above the existing WhatsApp "Enquire Now" button
- This button links to a brochure PDF (placeholder URL for now, e.g., `#brochure`)
- Style it as an outline or ghost variant to contrast with the green WhatsApp button below it

### Files to Edit
- `src/components/landing/CoursesSection.tsx` — highlight course titles with gradient/accent styling, add Download Brochure button with `Download` icon above the Enquire Now button




## Plan: Upgrade Course Card Icons to Premium Aesthetic

### Changes to `src/components/landing/CoursesSection.tsx`

**Enhanced icon container (line 84-86):**
- Increase size from `w-10 h-10` to `w-14 h-14` with `rounded-2xl` for more presence
- Add a gradient border ring effect using `ring-2 ring-primary/10` for featured, `ring-accent/10` for others
- Add a subtle inner shadow and the card's gradient border technique for depth
- Increase icon size from 20 to 24
- Add a floating animation on hover (`group-hover:scale-110 transition-transform`)
- For featured cards, add a soft outer glow (`shadow-[0_0_20px_hsl(250_55%_52%/0.15)]`)

**Feature list checkmarks (line 100-103):**
- Replace plain `✓` text with a small filled circle-check style: a `w-5 h-5 rounded-full bg-accent/10` container with a smaller accent checkmark inside for a polished look

**Card interaction:**
- Add `group` class to the card container so icon scales on card hover

### Files to Edit
- `src/components/landing/CoursesSection.tsx` — larger icon containers with glow/ring, hover scale, upgraded checkmarks


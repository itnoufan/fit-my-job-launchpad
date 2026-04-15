

## Plan: Add Student Placements Gallery Section

Add a new "PlacementsSection" component showcasing real placed students using the uploaded images. This builds massive trust and social proof.

### What will be built

A new section titled "Our Placed Students" or "Placement Success" placed between SocialProofSection and FinalCTASection. It will display the 11 uploaded student placement images in a visually appealing, horizontally scrolling carousel or responsive grid.

### Technical details

**1. Copy all 11 images to `src/assets/placements/`**
- `rahila.jpeg`, `anshida.jpeg`, `hena.jpeg`, `safvan.jpeg`, `shahna.jpeg`, `noufal.jpeg`, `irfan.jpeg`, `shebeeba.jpeg`, `shahla.jpeg`, `mazin.jpeg`, `thesni.jpeg`

**2. Create `src/components/landing/PlacementsSection.tsx`**
- Section heading with eyebrow "Placements" and title "Our Students Are Getting Placed"
- Auto-scrolling horizontal carousel of placement cards (CSS animation, infinite scroll)
- Each card shows the student image with name, role, and company overlaid or below
- Cards styled with `rounded-2xl`, subtle shadow, and hover scale effect
- Two rows scrolling in opposite directions for a dynamic "wall of success" effect
- ScrollReveal wrapper for entrance animation

**3. Update `src/pages/Index.tsx`**
- Import and add `PlacementsSection` between `SocialProofSection` and `FinalCTASection`

**4. Add CSS keyframes in `src/index.css`**
- `@keyframes scroll-left` and `scroll-right` for infinite horizontal marquee animation

### Files to create/edit
- Copy 11 images to `src/assets/placements/`
- Create `src/components/landing/PlacementsSection.tsx`
- Edit `src/pages/Index.tsx` -- add import and component
- Edit `src/index.css` -- marquee animation keyframes


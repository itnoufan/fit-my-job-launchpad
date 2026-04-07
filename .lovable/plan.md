

## Plan: Premium Logo Integration, Animated WhatsApp Button, and High-Trust CTA Upgrades

### 1. Add the Logo to the Project
- Copy the uploaded logo image to `src/assets/logo.png`
- Use it in the **StickyHeader** (replacing the text-only "Fit My Job Academy" with the actual logo image) and in the **Footer**

### 2. Animated WhatsApp Floating Button (FloatingButtons.tsx)
- Add a multi-ring pulse animation: two concentric rings that expand and fade out, creating a "radar ping" effect
- Add a subtle bounce-in on first appearance
- Add a ripple ring around the button using CSS pseudo-elements
- Mobile bottom bar: add a shimmer/shine animation across the CTA text to draw attention

### 3. Premium CTA Buttons Across the Site
- **Hero CTA**: Upgrade to a larger, more impactful button with a gradient shimmer animation (a light sweep that moves across the button), an outer glow ring, and a subtle arrow icon that slides on hover
- **FinalCTA Section**: Add a trust bar beneath the CTA ("100% Free Consultation | No Spam | Reply in 5 min") with shield/lock icons for trust signals; add a radial gradient background behind the section
- **Header CTA**: Add a subtle pulsing dot indicator next to "WhatsApp Us" to signal availability ("We're online")

### 4. CSS Animations (index.css)
- Add `@keyframes shimmer` — a light sweep moving left-to-right across buttons
- Add `@keyframes radar-ping` — expanding concentric rings for the floating button
- Add `.btn-premium` utility class with the shimmer overlay and enhanced shadow
- Add `.trust-badge` utility for the trust indicators

### Files to Edit
- Copy `user-uploads://Fitmy_Job_Academy_Logo_2.pdf.png` → `src/assets/logo.png`
- `src/components/landing/StickyHeader.tsx` — replace text logo with image, add online indicator to CTA
- `src/components/landing/Footer.tsx` — add logo image
- `src/components/landing/FloatingButtons.tsx` — radar-ping animation, shimmer on mobile bar
- `src/components/landing/HeroSection.tsx` — premium shimmer CTA button with arrow
- `src/components/landing/FinalCTASection.tsx` — trust bar beneath CTA, enhanced styling
- `src/index.css` — new keyframes (shimmer, radar-ping), premium button utilities


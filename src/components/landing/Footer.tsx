import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="relative px-5 py-14 md:px-8" style={{ background: "hsl(var(--footer-bg))" }} id="contact">
    {/* Gradient top border */}
    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

    <div className="container grid sm:grid-cols-2 md:grid-cols-4 gap-8">
      <div className="sm:col-span-2 md:col-span-1 space-y-3">
        <p className="font-heading font-bold text-lg" style={{ color: "hsl(var(--footer-heading))" }}>
          Fit My Job <span className="text-gradient">Academy</span>
        </p>
        <p className="text-sm leading-relaxed" style={{ color: "hsl(var(--footer-text))" }}>
          Focused on skill-based education and employability.
        </p>
      </div>
      <div className="space-y-3">
        <h4 className="font-heading font-semibold text-sm" style={{ color: "hsl(var(--footer-heading))" }}>Courses</h4>
        <ul className="text-sm space-y-1.5" style={{ color: "hsl(var(--footer-text))" }}>
          {["UAE HR Management", "HR Management Online", "Office Administration", "UAE Payroll"].map(c => (
            <li key={c} className="transition-colors duration-200 hover:text-white/80 cursor-pointer">{c}</li>
          ))}
        </ul>
      </div>
      <div className="space-y-3">
        <h4 className="font-heading font-semibold text-sm" style={{ color: "hsl(var(--footer-heading))" }}>Contact</h4>
        <div className="text-sm space-y-2" style={{ color: "hsl(var(--footer-text))" }}>
          <p className="flex items-center gap-2 transition-colors duration-200 hover:text-white/80"><Phone size={13} /> +91 97464 86969</p>
          <p className="flex items-center gap-2 transition-colors duration-200 hover:text-white/80"><Mail size={13} /> info@fitmyjob.com</p>
          <p className="flex items-center gap-2"><MapPin size={13} /> India & UAE</p>
        </div>
      </div>
      <div className="space-y-3">
        <h4 className="font-heading font-semibold text-sm" style={{ color: "hsl(var(--footer-heading))" }}>Follow Us</h4>
        <div className="text-sm space-y-1.5" style={{ color: "hsl(var(--footer-text))" }}>
          {["Instagram", "LinkedIn", "YouTube"].map(s => (
            <p key={s} className="transition-colors duration-200 hover:text-white/80 cursor-pointer">{s}</p>
          ))}
        </div>
      </div>
    </div>
    <div className="container mt-10 pt-6 text-center text-xs" style={{ color: "hsl(var(--footer-text))" }}>
      <div className="border-t border-white/10 pt-6">
        © {new Date().getFullYear()} Fit My Job Academy. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;

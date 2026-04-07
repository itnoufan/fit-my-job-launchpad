import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="bg-dark-bg px-5 py-14 md:px-8" id="contact">
    <div className="container grid sm:grid-cols-2 md:grid-cols-4 gap-8">
      <div className="sm:col-span-2 md:col-span-1 space-y-3">
        <p className="font-heading font-bold text-lg text-white">
          Fit My Job <span className="text-gradient">Academy</span>
        </p>
        <p className="text-sm leading-relaxed" style={{ color: "hsl(220 15% 45%)" }}>
          Focused on skill-based education and employability.
        </p>
      </div>
      <div className="space-y-3">
        <h4 className="font-heading font-semibold text-white text-sm">Courses</h4>
        <ul className="text-sm space-y-1.5" style={{ color: "hsl(220 15% 45%)" }}>
          <li>UAE HR Management</li>
          <li>HR Management Online</li>
          <li>Office Administration</li>
          <li>UAE Payroll</li>
        </ul>
      </div>
      <div className="space-y-3">
        <h4 className="font-heading font-semibold text-white text-sm">Contact</h4>
        <div className="text-sm space-y-2" style={{ color: "hsl(220 15% 45%)" }}>
          <p className="flex items-center gap-2"><Phone size={13} /> +91 XXXXX XXXXX</p>
          <p className="flex items-center gap-2"><Mail size={13} /> info@fitmyjob.com</p>
          <p className="flex items-center gap-2"><MapPin size={13} /> India & UAE</p>
        </div>
      </div>
      <div className="space-y-3">
        <h4 className="font-heading font-semibold text-white text-sm">Follow Us</h4>
        <div className="text-sm space-y-1.5" style={{ color: "hsl(220 15% 45%)" }}>
          <p>Instagram</p>
          <p>LinkedIn</p>
          <p>YouTube</p>
        </div>
      </div>
    </div>
    <div className="container mt-10 pt-6 border-t text-center text-xs" style={{ borderColor: "hsl(220 15% 15%)", color: "hsl(220 15% 30%)" }}>
      © {new Date().getFullYear()} Fit My Job Academy. All rights reserved.
    </div>
  </footer>
);

export default Footer;

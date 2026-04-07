import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="bg-foreground px-4 py-14 md:px-8" id="contact">
    <div className="container grid md:grid-cols-3 gap-10">
      <div className="space-y-3">
        <h3 className="font-heading font-bold text-lg text-background">Fit My Job Academy</h3>
        <p className="text-sm text-background/50 leading-relaxed">
          Focused on skill-based education and employability. Your career starts here.
        </p>
      </div>
      <div className="space-y-3">
        <h4 className="font-heading font-semibold text-background">Courses</h4>
        <ul className="text-sm space-y-1.5 text-background/50">
          <li>UAE HR Management</li>
          <li>HR Management Online</li>
          <li>Office Administration</li>
          <li>UAE Payroll</li>
        </ul>
      </div>
      <div className="space-y-3">
        <h4 className="font-heading font-semibold text-background">Contact</h4>
        <div className="text-sm space-y-2 text-background/50">
          <p className="flex items-center gap-2"><Phone size={14} /> +91 XXXXX XXXXX</p>
          <p className="flex items-center gap-2"><Mail size={14} /> info@fitmyjob.com</p>
          <p className="flex items-center gap-2"><MapPin size={14} /> India & UAE</p>
        </div>
      </div>
    </div>
    <div className="container mt-10 pt-6 border-t border-background/10 text-center text-xs text-background/30">
      © {new Date().getFullYear()} Fit My Job Academy. All rights reserved.
    </div>
  </footer>
);

export default Footer;

import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="bg-foreground text-background/80 px-4 py-12 md:px-8">
    <div className="container grid md:grid-cols-3 gap-8">
      <div className="space-y-3">
        <h3 className="font-bold text-lg text-background">Fit My Job Academy</h3>
        <p className="text-sm">Focused on skill-based education and employability. Your career starts here.</p>
      </div>
      <div className="space-y-3">
        <h4 className="font-semibold text-background">Courses</h4>
        <ul className="text-sm space-y-1">
          <li>UAE HR Management</li>
          <li>HR Management Online</li>
          <li>Office Administration</li>
          <li>UAE Payroll</li>
        </ul>
      </div>
      <div className="space-y-3">
        <h4 className="font-semibold text-background">Contact</h4>
        <div className="text-sm space-y-2">
          <p className="flex items-center gap-2"><Phone size={14} /> +91 XXXXX XXXXX</p>
          <p className="flex items-center gap-2"><Mail size={14} /> info@fitmyjob.com</p>
          <p className="flex items-center gap-2"><MapPin size={14} /> India & UAE</p>
        </div>
      </div>
    </div>
    <div className="container mt-8 pt-6 border-t border-background/10 text-center text-xs">
      © {new Date().getFullYear()} Fit My Job Academy. All rights reserved.
    </div>
  </footer>
);

export default Footer;

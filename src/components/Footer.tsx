import { Instagram, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer id="footer" className="bg-primary text-primary-foreground py-16 md:py-20">
      <div className="section-padding max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-14">
          <div className="col-span-2 md:col-span-1">
            <h3 className="font-display text-lg font-medium mb-4">LBS Essentials</h3>
            <p className="text-sm opacity-70 leading-relaxed max-w-xs mb-4">
              Lightweight everyday bags & 18k gold-plated jewelry. Melbourne-based, shipping worldwide.
            </p>
            <a
              href="mailto:hello@lbsessentials.com"
              className="inline-flex items-center gap-2 text-sm opacity-80 hover:opacity-100 transition-opacity"
            >
              <Mail size={15} />
              hello@lbsessentials.com
            </a>
          </div>

          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase font-medium mb-4 opacity-80">Shop</h4>
            <ul className="space-y-2.5 text-sm opacity-70">
              <li><a href="/collection/all" className="hover:opacity-100 transition-opacity">All Accessories</a></li>
              <li><a href="/collection/totes-work-bags" className="hover:opacity-100 transition-opacity">Totes & Work Bags</a></li>
              <li><a href="/collection/crossbody-bags" className="hover:opacity-100 transition-opacity">Crossbody Bags</a></li>
              <li><a href="/collection/jewelry" className="hover:opacity-100 transition-opacity">Gold Jewelry</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase font-medium mb-4 opacity-80">Policies</h4>
            <ul className="space-y-2.5 text-sm opacity-70">
              <li><a href="/#faq" className="hover:opacity-100 transition-opacity">Shipping & Returns</a></li>
              <li><a href="/#faq" className="hover:opacity-100 transition-opacity">Privacy Policy</a></li>
              <li><a href="/#faq" className="hover:opacity-100 transition-opacity">Terms of Service</a></li>
              <li><a href="/contact" className="hover:opacity-100 transition-opacity">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase font-medium mb-4 opacity-80">Connect</h4>
            <a
              href="https://www.instagram.com/lbs.essentials/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm opacity-70 hover:opacity-100 transition-opacity"
            >
              <Instagram size={18} />
              Instagram
            </a>
          </div>
        </div>

        <div className="border-t border-primary-foreground/15 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs opacity-50">
            © {new Date().getFullYear()} LBS Essentials. All rights reserved.
          </p>
          <p className="text-xs opacity-40">
            Melbourne, Australia · ABN on request
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

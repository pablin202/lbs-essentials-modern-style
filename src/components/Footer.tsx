import { Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer id="footer" className="bg-primary text-primary-foreground py-16 md:py-20">
      <div className="section-padding max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-14">
          <div className="col-span-2 md:col-span-1">
            <h3 className="font-display text-lg font-medium mb-4">LBS Essentials</h3>
            <p className="text-sm opacity-70 leading-relaxed max-w-xs">
              Everyday bags designed for real life. Practical, elegant, affordable luxury.
            </p>
          </div>

          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase font-medium mb-4 opacity-80">Shop</h4>
            <ul className="space-y-2.5 text-sm opacity-70">
              <li><a href="#collection" className="hover:opacity-100 transition-opacity">All Bags</a></li>
              <li><a href="#collection" className="hover:opacity-100 transition-opacity">Totes</a></li>
              <li><a href="#collection" className="hover:opacity-100 transition-opacity">Crossbody</a></li>
              <li><a href="#collection" className="hover:opacity-100 transition-opacity">New Arrivals</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase font-medium mb-4 opacity-80">Company</h4>
            <ul className="space-y-2.5 text-sm opacity-70">
              <li><a href="#" className="hover:opacity-100 transition-opacity">About</a></li>
              <li><a href="#journal" className="hover:opacity-100 transition-opacity">Journal</a></li>
              <li><a href="#faq" className="hover:opacity-100 transition-opacity">FAQ</a></li>
              <li><a href="mailto:hello@lbsessentials.com" className="hover:opacity-100 transition-opacity">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase font-medium mb-4 opacity-80">Connect</h4>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm opacity-70 hover:opacity-100 transition-opacity"
            >
              <Instagram size={18} />
              Instagram
            </a>
          </div>
        </div>

        <div className="border-t border-primary-foreground/15 pt-8 text-center">
          <p className="text-xs opacity-50">
            © {new Date().getFullYear()} LBS Essentials. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

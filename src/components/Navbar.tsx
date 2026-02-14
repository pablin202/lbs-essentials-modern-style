import { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { CartDrawer } from "./CartDrawer";

const catalogLinks = [
  { label: "Crossbody Bags", to: "/collection/crossbody-bags" },
  { label: "Everyday Bags", to: "/collection/everyday-bags" },
  { label: "Mini & Evening", to: "/collection/evening-mini-bags" },
  { label: "Totes & Work Bags", to: "/collection/totes-work-bags" },
  { label: "All", to: "/collection/all" },
];

const customerServiceLinks = [
  { label: "Contact Us", to: "/contact" },
  { label: "FAQ", to: "/#faq" },
  { label: "Shipping & Handling", to: "/#faq" },
  { label: "Track Your Order", to: "/contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [catalogOpen, setCatalogOpen] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);
  const catalogRef = useRef<HTMLLIElement>(null);
  const serviceRef = useRef<HTMLLIElement>(null);
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
    setCatalogOpen(false);
    setServiceOpen(false);
  }, [location]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (catalogRef.current && !catalogRef.current.contains(e.target as Node)) setCatalogOpen(false);
      if (serviceRef.current && !serviceRef.current.contains(e.target as Node)) setServiceOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <nav className="section-padding flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="font-display text-xl md:text-2xl font-medium tracking-wide text-foreground">
          LBS Essentials
        </Link>

        <ul className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide text-muted-foreground">
          <li><Link to="/" className="hover:text-foreground transition-colors">Home</Link></li>

          {/* Catalog dropdown */}
          <li ref={catalogRef} className="relative">
            <button
              onClick={() => { setCatalogOpen(!catalogOpen); setServiceOpen(false); }}
              className="flex items-center gap-1 hover:text-foreground transition-colors"
            >
              Catalog <ChevronDown size={14} className={`transition-transform ${catalogOpen ? "rotate-180" : ""}`} />
            </button>
            {catalogOpen && (
              <div className="absolute top-full left-0 mt-2 w-52 bg-background border border-border rounded-sm shadow-lg py-2">
                {catalogLinks.map((link) => (
                  <Link key={link.to} to={link.to} className="block px-4 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors">
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </li>

          <li><Link to="/journal" className="hover:text-foreground transition-colors">Everyday Style Journal</Link></li>

          {/* Customer Service dropdown */}
          <li ref={serviceRef} className="relative">
            <button
              onClick={() => { setServiceOpen(!serviceOpen); setCatalogOpen(false); }}
              className="flex items-center gap-1 hover:text-foreground transition-colors"
            >
              Customer Service <ChevronDown size={14} className={`transition-transform ${serviceOpen ? "rotate-180" : ""}`} />
            </button>
            {serviceOpen && (
              <div className="absolute top-full left-0 mt-2 w-52 bg-background border border-border rounded-sm shadow-lg py-2">
                {customerServiceLinks.map((link) => (
                  <a key={link.label} href={link.to} className="block px-4 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors">
                    {link.label}
                  </a>
                ))}
              </div>
            )}
          </li>
        </ul>

        <div className="flex items-center gap-4">
          <CartDrawer />
          <button className="md:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Menu">
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="md:hidden bg-background border-t border-border max-h-[80vh] overflow-y-auto">
          <ul className="flex flex-col py-4 section-padding gap-1 text-sm font-medium text-muted-foreground">
            <li><Link to="/" className="block py-2 hover:text-foreground transition-colors">Home</Link></li>

            <li className="pt-2 border-t border-border mt-2">
              <p className="py-2 text-xs tracking-[0.2em] uppercase text-muted-foreground/60">Catalog</p>
              {catalogLinks.map((link) => (
                <Link key={link.to} to={link.to} className="block py-2 pl-3 hover:text-foreground transition-colors">
                  {link.label}
                </Link>
              ))}
            </li>

            <li className="pt-2 border-t border-border mt-2">
              <Link to="/#journal" className="block py-2 hover:text-foreground transition-colors">Everyday Style Journal</Link>
            </li>

            <li className="pt-2 border-t border-border mt-2">
              <p className="py-2 text-xs tracking-[0.2em] uppercase text-muted-foreground/60">Customer Service</p>
              {customerServiceLinks.map((link) => (
                <a key={link.label} href={link.to} onClick={() => setMobileOpen(false)} className="block py-2 pl-3 hover:text-foreground transition-colors">
                  {link.label}
                </a>
              ))}
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;

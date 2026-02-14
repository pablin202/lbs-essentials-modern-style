import { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { CartDrawer } from "./CartDrawer";

const shopLinks = [
  { label: "All Products", to: "/collection/all" },
  { label: "Best Sellers", to: "/collection/best-sellers" },
  { label: "Crossbody Bags", to: "/collection/crossbody-bags" },
  { label: "Shoulder & Everyday", to: "/collection/everyday-bags" },
  { label: "Totes & Work Bags", to: "/collection/totes-work-bags" },
  { label: "Evening & Mini", to: "/collection/evening-mini-bags" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [shopOpen, setShopOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
    setShopOpen(false);
  }, [location]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setShopOpen(false);
      }
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
          <li ref={dropdownRef} className="relative">
            <button
              onClick={() => setShopOpen(!shopOpen)}
              className="flex items-center gap-1 hover:text-foreground transition-colors"
            >
              Shop <ChevronDown size={14} className={`transition-transform ${shopOpen ? "rotate-180" : ""}`} />
            </button>
            {shopOpen && (
              <div className="absolute top-full left-0 mt-2 w-56 bg-background border border-border rounded-sm shadow-lg py-2">
                {shopLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className="block px-4 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </li>
          <li><a href="/#journal" className="hover:text-foreground transition-colors">Journal</a></li>
          <li><a href="/#faq" className="hover:text-foreground transition-colors">FAQ</a></li>
          <li><a href="/#footer" className="hover:text-foreground transition-colors">Contact</a></li>
        </ul>

        <div className="flex items-center gap-4">
          <CartDrawer />
          <button className="md:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Menu">
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <ul className="flex flex-col py-4 section-padding gap-1 text-sm font-medium text-muted-foreground">
            <li className="py-2 text-xs tracking-[0.2em] uppercase text-muted-foreground/60">Shop</li>
            {shopLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="block py-2 pl-3 hover:text-foreground transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="border-t border-border mt-2 pt-2">
              <a href="/#journal" onClick={() => setMobileOpen(false)} className="block py-2 hover:text-foreground transition-colors">Journal</a>
            </li>
            <li><a href="/#faq" onClick={() => setMobileOpen(false)} className="block py-2 hover:text-foreground transition-colors">FAQ</a></li>
            <li><a href="/#footer" onClick={() => setMobileOpen(false)} className="block py-2 hover:text-foreground transition-colors">Contact</a></li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;

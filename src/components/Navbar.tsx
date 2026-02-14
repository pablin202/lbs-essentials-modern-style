import { useState } from "react";
import { ShoppingBag, Menu, X } from "lucide-react";
import { CartDrawer } from "./CartDrawer";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <nav className="section-padding flex items-center justify-between h-16 md:h-20">
        <a href="/" className="font-display text-xl md:text-2xl font-medium tracking-wide text-foreground">
          LBS Essentials
        </a>

        <ul className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide text-muted-foreground">
          <li><a href="#collection" className="hover:text-foreground transition-colors">Shop</a></li>
          <li><a href="#journal" className="hover:text-foreground transition-colors">Journal</a></li>
          <li><a href="#faq" className="hover:text-foreground transition-colors">FAQ</a></li>
          <li><a href="#footer" className="hover:text-foreground transition-colors">Contact</a></li>
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
          <ul className="flex flex-col py-4 section-padding gap-4 text-sm font-medium text-muted-foreground">
            <li><a href="#collection" onClick={() => setMobileOpen(false)} className="block py-2 hover:text-foreground transition-colors">Shop</a></li>
            <li><a href="#journal" onClick={() => setMobileOpen(false)} className="block py-2 hover:text-foreground transition-colors">Journal</a></li>
            <li><a href="#faq" onClick={() => setMobileOpen(false)} className="block py-2 hover:text-foreground transition-colors">FAQ</a></li>
            <li><a href="#footer" onClick={() => setMobileOpen(false)} className="block py-2 hover:text-foreground transition-colors">Contact</a></li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;

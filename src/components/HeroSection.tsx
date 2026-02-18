import { Link } from "react-router-dom";
import { Package, ShieldCheck, RotateCcw } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="LBS Essentials curated accessories styled in a modern setting"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-transparent" />
      </div>

      <div className="relative z-10 section-padding w-full max-w-2xl py-32 md:py-40">
        <p className="text-xs tracking-[0.35em] uppercase text-muted-foreground mb-6 animate-fade-up">
          Melbourne-Based · Curated Accessories
        </p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium leading-[1.15] text-foreground mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
          Lightweight Everyday Bags<br />& 18k Gold-Plated<br />Jewelry
        </h1>
        <p className="text-base md:text-lg text-muted-foreground max-w-sm mb-8 leading-relaxed animate-fade-up" style={{ animationDelay: "0.2s" }}>
          Tarnish-resistant gold pieces & structured bags — designed to last, priced to love.
        </p>

        {/* Trust line */}
        <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground mb-10 animate-fade-up" style={{ animationDelay: "0.25s" }}>
          <span className="flex items-center gap-1.5"><Package size={13} /> Ships from AU</span>
          <span className="hidden sm:inline text-border">|</span>
          <span className="flex items-center gap-1.5"><ShieldCheck size={13} /> Tracked shipping</span>
          <span className="hidden sm:inline text-border">|</span>
          <span className="flex items-center gap-1.5"><RotateCcw size={13} /> 30-day returns</span>
        </div>

        {/* Dual CTAs */}
        <div className="flex flex-wrap gap-3 animate-fade-up" style={{ animationDelay: "0.3s" }}>
          <Link
            to="/collection/all"
            className="inline-block bg-foreground text-background px-10 py-4 text-xs font-medium tracking-[0.2em] uppercase hover:opacity-90 transition-opacity"
          >
            Shop Bags
          </Link>
          <Link
            to="/collection/jewelry"
            className="inline-block border border-foreground text-foreground px-10 py-4 text-xs font-medium tracking-[0.2em] uppercase hover:bg-foreground hover:text-background transition-colors"
          >
            Shop Jewelry
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

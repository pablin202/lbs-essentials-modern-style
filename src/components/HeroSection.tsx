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
        <div className="absolute inset-0 bg-gradient-to-r from-background/85 via-background/50 to-transparent" />
      </div>

      <div className="relative z-10 section-padding w-full max-w-2xl py-32 md:py-40">
        <p className="text-xs tracking-[0.35em] uppercase text-muted-foreground mb-6 animate-fade-up">
          LBS Essentials — Melbourne
        </p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium leading-[1.15] text-foreground mb-8 animate-fade-up" style={{ animationDelay: "0.1s" }}>
          Curated Accessories<br />for Elevated<br />Everyday Style
        </h1>
        <p className="text-base md:text-lg text-muted-foreground max-w-sm mb-12 leading-relaxed animate-fade-up" style={{ animationDelay: "0.2s" }}>
          Refined bags & gold jewelry — designed for women who value elegance in every detail.
        </p>
        <a
          href="#collection"
          className="inline-block bg-foreground text-background px-10 py-4 text-xs font-medium tracking-[0.2em] uppercase hover:opacity-90 transition-opacity animate-fade-up"
          style={{ animationDelay: "0.3s" }}
        >
          Explore the Edit
        </a>
      </div>
    </section>
  );
};

export default HeroSection;

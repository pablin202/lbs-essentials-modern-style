import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="LBS Essentials everyday handbags in a modern setting"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/40 to-transparent" />
      </div>

      <div className="relative z-10 section-padding w-full max-w-2xl py-32 md:py-40">
        <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4 animate-fade-up">
          LBS Essentials
        </p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-medium leading-tight text-foreground mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
          Everyday Bags<br />& Accessories
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-md mb-10 animate-fade-up" style={{ animationDelay: "0.2s" }}>
          Designed for real life. Styled for every day.
        </p>
        <a
          href="#collection"
          className="inline-block bg-primary text-primary-foreground px-8 py-3.5 text-sm font-medium tracking-widest uppercase hover:opacity-90 transition-opacity animate-fade-up"
          style={{ animationDelay: "0.3s" }}
        >
          Shop Collection
        </a>
      </div>
    </section>
  );
};

export default HeroSection;

const WhySection = () => {
  return (
    <section className="py-24 md:py-36 bg-warm">
      <div className="section-padding max-w-3xl mx-auto text-center">
        <p className="text-xs tracking-[0.35em] uppercase text-muted-foreground mb-4">Our Philosophy</p>
        <h2 className="text-3xl md:text-4xl font-display font-medium text-foreground mb-8 leading-snug">
          Intentional Accessories<br />for Considered Living
        </h2>
        <p className="text-base text-muted-foreground leading-relaxed max-w-xl mx-auto mb-12">
          Every piece in our collection is chosen with care — designed to feel effortless, 
          look refined, and become part of your daily ritual. From structured bags to delicate gold jewelry, 
          LBS Essentials is where everyday meets elevated.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 mt-16">
          <div className="flex flex-col items-center">
            <p className="text-sm font-medium text-foreground mb-2">Thoughtful Design</p>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-[240px]">
              Smart details and clean silhouettes that serve your lifestyle.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-sm font-medium text-foreground mb-2">Quality Materials</p>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-[240px]">
              18k PVD gold plating and premium PU leather — made to last.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-sm font-medium text-foreground mb-2">Curated, Not Crowded</p>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-[240px]">
              A focused collection of pieces that work together beautifully.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySection;

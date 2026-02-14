import { Ruler, Heart, Sparkles } from "lucide-react";

const features = [
  {
    icon: Ruler,
    title: "Practical Design",
    description: "Every bag is crafted with smart compartments and thoughtful details for your daily essentials.",
  },
  {
    icon: Heart,
    title: "Everyday Comfort",
    description: "Lightweight construction and adjustable straps designed to move with you, all day long.",
  },
  {
    icon: Sparkles,
    title: "Modern Style",
    description: "Clean lines and neutral tones that pair effortlessly with any outfit, any occasion.",
  },
];

const WhySection = () => {
  return (
    <section className="py-20 md:py-28 bg-warm">
      <div className="section-padding max-w-5xl mx-auto text-center">
        <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-3">Why LBS Essentials</p>
        <h2 className="text-3xl md:text-4xl font-display font-medium text-foreground mb-16">
          Made for Your Everyday
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="flex flex-col items-center">
              <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center mb-5">
                <feature.icon size={22} className="text-accent-foreground" />
              </div>
              <h3 className="text-lg font-medium text-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhySection;

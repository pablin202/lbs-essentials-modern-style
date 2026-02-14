import { Link } from "react-router-dom";
import collectionTotes from "@/assets/collection-totes.jpg";
import collectionCrossbody from "@/assets/collection-crossbody.jpg";
import collectionShoulder from "@/assets/collection-shoulder.jpg";
import collectionMini from "@/assets/collection-mini.jpg";

const collections = [
  {
    title: "Totes",
    subtitle: "Work & Weekend",
    image: collectionTotes,
    alt: "Model carrying a structured beige tote bag in a modern city setting",
  },
  {
    title: "Crossbody",
    subtitle: "Hands-Free Style",
    image: collectionCrossbody,
    alt: "Model wearing a taupe crossbody bag in a minimalist cafe",
  },
  {
    title: "Shoulder Bags",
    subtitle: "Effortless Everyday",
    image: collectionShoulder,
    alt: "Model with a black shoulder bag in a bright modern apartment",
  },
  {
    title: "Mini Bags",
    subtitle: "Evening & Beyond",
    image: collectionMini,
    alt: "Model holding a blush pink mini bag at golden hour on a rooftop",
  },
];

const CollectionShowcase = () => {
  return (
    <section className="py-20 md:py-28 section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-3">
            Shop by Category
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-medium text-foreground">
            Find Your Everyday Bag
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {collections.map((collection) => (
            <Link
              to={`/#collection`}
              key={collection.title}
              className="group relative overflow-hidden rounded-sm"
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={collection.image}
                  alt={collection.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-display font-medium text-background">
                  {collection.title}
                </h3>
                <p className="text-sm text-background/80 mt-0.5">
                  {collection.subtitle}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollectionShowcase;

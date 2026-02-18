import { Link } from "react-router-dom";
import collectionTotes from "@/assets/collection-totes.jpg";
import collectionMini from "@/assets/collection-mini.jpg";

const collections = [
  {
    title: "Bags",
    subtitle: "Crossbody · Totes · Shoulder · Mini",
    image: collectionTotes,
    alt: "Curated collection of structured everyday bags",
    to: "/collection/all",
  },
  {
    title: "Gold Jewelry",
    subtitle: "18k PVD · Tarnish-Resistant",
    image: collectionMini,
    alt: "Minimalist gold-plated jewelry capsule collection",
    to: "/collection/jewelry",
  },
];

const CollectionShowcase = () => {
  return (
    <section className="py-20 md:py-28 section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-medium text-foreground">
            Shop by Category
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {collections.map((collection) => (
            <Link
              to={collection.to}
              key={collection.title}
              className="group relative overflow-hidden rounded-sm"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={collection.image}
                  alt={collection.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <h3 className="text-2xl md:text-3xl font-display font-medium text-background">
                  {collection.title}
                </h3>
                <p className="text-sm text-background/80 mt-1">
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

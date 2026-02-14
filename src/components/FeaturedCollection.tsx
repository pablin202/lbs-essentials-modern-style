import { ShoppingBag } from "lucide-react";

import productTote1 from "@/assets/product-tote-1.jpg";
import productCrossbody1 from "@/assets/product-crossbody-1.jpg";
import productSmallBag1 from "@/assets/product-small-bag-1.jpg";
import productShoulder1 from "@/assets/product-shoulder-1.jpg";
import productMini1 from "@/assets/product-mini-1.jpg";
import productTote2 from "@/assets/product-tote-2.jpg";
import productCrossbody2 from "@/assets/product-crossbody-2.jpg";
import productEveryday1 from "@/assets/product-everyday-1.jpg";

const products = [
  { name: "The Classic Tote", price: 68, image: productTote1, tag: "Bestseller" },
  { name: "The Crossbody", price: 52, image: productCrossbody1 },
  { name: "The Noir Mini", price: 45, image: productSmallBag1 },
  { name: "The Blush Shoulder", price: 58, image: productShoulder1, tag: "New" },
  { name: "The Grey Top Handle", price: 62, image: productMini1 },
  { name: "The Camel Tote", price: 72, image: productTote2 },
  { name: "The Chain Crossbody", price: 48, image: productCrossbody2 },
  { name: "The Olive Everyday", price: 65, image: productEveryday1 },
];

const FeaturedCollection = () => {
  return (
    <section id="collection" className="py-20 md:py-28 section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-3">Featured</p>
          <h2 className="text-3xl md:text-4xl font-display font-medium text-foreground">
            The Collection
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {products.map((product) => (
            <div key={product.name} className="group cursor-pointer">
              <div className="relative aspect-square bg-secondary rounded-sm overflow-hidden mb-3">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                {product.tag && (
                  <span className="absolute top-3 left-3 bg-primary text-primary-foreground text-[10px] tracking-widest uppercase px-2.5 py-1 font-medium">
                    {product.tag}
                  </span>
                )}
                <button
                  className="absolute bottom-3 right-3 w-9 h-9 rounded-full bg-background/90 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-background"
                  aria-label={`Add ${product.name} to bag`}
                >
                  <ShoppingBag size={15} className="text-foreground" />
                </button>
              </div>
              <h3 className="text-sm font-medium text-foreground">{product.name}</h3>
              <p className="text-sm text-muted-foreground mt-0.5">${product.price}.00</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollection;

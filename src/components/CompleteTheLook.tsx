import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Loader2, ShoppingBag } from "lucide-react";
import { fetchProducts, type ShopifyProduct } from "@/lib/shopify";
import { useCartStore } from "@/stores/cartStore";
import { toast } from "sonner";

interface Pairing {
  title: string;
  description: string;
  bagQuery: string;
  jewelryQuery: string;
}

const pairings: Pairing[] = [
  {
    title: "Day to Evening",
    description: "A structured crossbody paired with dainty gold — effortless for any occasion.",
    bagQuery: "tag:crossbody_bags",
    jewelryQuery: "tag:jewelry AND product_type:Jewelry AND title:necklace",
  },
  {
    title: "Everyday Essentials",
    description: "Your go-to tote complemented by minimal gold hoops for polished daily style.",
    bagQuery: "tag:totes_work_bags",
    jewelryQuery: "tag:jewelry AND product_type:Jewelry AND title:hoops",
  },
];

const CompleteTheLook = () => {
  const [looks, setLooks] = useState<{ bag: ShopifyProduct | null; jewelry: ShopifyProduct | null }[]>([]);
  const [loading, setLoading] = useState(true);
  const addItem = useCartStore((s) => s.addItem);
  const isCartLoading = useCartStore((s) => s.isLoading);

  useEffect(() => {
    const loadLooks = async () => {
      try {
        const results = await Promise.all(
          pairings.map(async (p) => {
            const [bags, jewels] = await Promise.all([
              fetchProducts(1, p.bagQuery),
              fetchProducts(1, p.jewelryQuery),
            ]);
            return { bag: bags[0] || null, jewelry: jewels[0] || null };
          })
        );
        setLooks(results);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    };
    loadLooks();
  }, []);

  const handleAdd = async (e: React.MouseEvent, product: ShopifyProduct) => {
    e.preventDefault();
    e.stopPropagation();
    const variant = product.node.variants.edges[0]?.node;
    if (!variant) return;
    await addItem({
      product,
      variantId: variant.id,
      variantTitle: variant.title,
      price: variant.price,
      quantity: 1,
      selectedOptions: variant.selectedOptions || [],
    });
    toast.success("Added to bag", { description: product.node.title });
  };

  if (loading) {
    return (
      <section className="py-24 md:py-36 section-padding">
        <div className="flex justify-center">
          <Loader2 className="w-6 h-6 animate-spin text-muted-foreground" />
        </div>
      </section>
    );
  }

  const validLooks = looks.filter((l) => l.bag && l.jewelry);
  if (validLooks.length === 0) return null;

  return (
    <section className="py-24 md:py-36 bg-warm">
      <div className="section-padding max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.35em] uppercase text-muted-foreground mb-4">Style Pairings</p>
          <h2 className="text-3xl md:text-4xl font-display font-medium text-foreground">
            Complete the Look
          </h2>
          <p className="text-base text-muted-foreground mt-4 max-w-md mx-auto">
            Bags and jewelry designed to work together — effortlessly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {validLooks.map((look, i) => {
            const pairing = pairings[i];
            const bagImage = look.bag!.node.images.edges[0]?.node;
            const jewelryImage = look.jewelry!.node.images.edges[0]?.node;
            const bagPrice = look.bag!.node.priceRange.minVariantPrice;
            const jewelryPrice = look.jewelry!.node.priceRange.minVariantPrice;

            return (
              <div key={i} className="space-y-6">
                <div>
                  <h3 className="text-lg font-display font-medium text-foreground mb-1">{pairing.title}</h3>
                  <p className="text-sm text-muted-foreground">{pairing.description}</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {[look.bag!, look.jewelry!].map((product) => {
                    const img = product.node.images.edges[0]?.node;
                    const price = product.node.priceRange.minVariantPrice;
                    return (
                      <Link
                        to={`/product/${product.node.handle}`}
                        key={product.node.id}
                        className="group"
                      >
                        <div className="relative aspect-square bg-secondary rounded-sm overflow-hidden mb-3">
                          {img ? (
                            <img
                              src={img.url}
                              alt={img.altText || product.node.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                              loading="lazy"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                              <ShoppingBag size={20} />
                            </div>
                          )}
                          <button
                            onClick={(e) => handleAdd(e, product)}
                            disabled={isCartLoading}
                            className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-background/90 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-background"
                            aria-label={`Add ${product.node.title} to bag`}
                          >
                            <ShoppingBag size={14} className="text-foreground" />
                          </button>
                        </div>
                        <p className="text-sm font-medium text-foreground">{product.node.title}</p>
                        <p className="text-xs text-muted-foreground mt-0.5">
                          ${parseFloat(price.amount).toFixed(2)} {price.currencyCode}
                        </p>
                      </Link>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CompleteTheLook;

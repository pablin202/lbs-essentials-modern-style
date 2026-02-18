import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ShoppingBag, Loader2 } from "lucide-react";
import { fetchCollectionByHandle, fetchProducts, type ShopifyProduct } from "@/lib/shopify";
import { useCartStore } from "@/stores/cartStore";
import { toast } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const COLLECTION_META: Record<string, { title: string; description: string }> = {
  "all": {
    title: "All Accessories",
    description: "Browse our curated collection of bags & gold jewelry.",
  },
  "best-sellers": {
    title: "Best Sellers",
    description: "Our most loved styles — chosen by you.",
  },
  "crossbody-bags": {
    title: "Crossbody Bags",
    description: "Hands-free style for every occasion.",
  },
  "everyday-bags": {
    title: "Shoulder & Everyday Bags",
    description: "Effortless everyday style, designed for comfort.",
  },
  "totes-work-bags": {
    title: "Totes & Work Bags",
    description: "Spacious, structured and ready for your day.",
  },
  "evening-mini-bags": {
    title: "Evening & Mini Bags",
    description: "Small statement pieces for special moments.",
  },
  "jewelry": {
    title: "Gold Jewelry Capsule",
    description: "Minimalist 18k PVD gold pieces — designed to pair with everything.",
  },
};

const TAG_MAP: Record<string, string> = {
  "crossbody-bags": "crossbody_bags",
  "everyday-bags": "everyday_bags",
  "totes-work-bags": "totes_work_bags",
  "evening-mini-bags": "mini_evening",
  "jewelry": "jewelry",
};

const CollectionPage = () => {
  const { handle } = useParams<{ handle: string }>();
  const [products, setProducts] = useState<ShopifyProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const addItem = useCartStore((s) => s.addItem);
  const isCartLoading = useCartStore((s) => s.isLoading);

  const meta = COLLECTION_META[handle || ""] || {
    title: handle || "Collection",
    description: "",
  };

  useEffect(() => {
    setLoading(true);
    const load = async () => {
      try {
        if (handle === "all") {
          const data = await fetchProducts(97);
          setProducts(data);
        } else if (handle === "best-sellers") {
          const data = await fetchCollectionByHandle("best-sellers", 8);
          setProducts(data);
        } else if (handle && TAG_MAP[handle]) {
          const data = await fetchProducts(50, `tag:${TAG_MAP[handle]}`);
          setProducts(data);
        } else {
          setProducts([]);
        }
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, [handle]);

  const handleAddToCart = async (e: React.MouseEvent, product: ShopifyProduct) => {
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

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20 md:pt-24">
        <section className="section-padding py-12 md:py-16">
          <div className="max-w-7xl mx-auto">
            <div className="mb-10">
              <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-2">Collection</p>
              <h1 className="text-3xl md:text-5xl font-display font-medium text-foreground mb-3">
                {meta.title}
              </h1>
              <p className="text-muted-foreground max-w-lg">{meta.description}</p>
            </div>

            {/* Collection nav */}
            <div className="flex flex-wrap gap-2 mb-10">
              {Object.entries(COLLECTION_META).map(([key, val]) => (
                <Link
                  key={key}
                  to={`/collection/${key}`}
                  className={`px-4 py-2 text-sm rounded-full border transition-colors ${
                    handle === key
                      ? "bg-foreground text-background border-foreground"
                      : "border-border text-muted-foreground hover:text-foreground hover:border-foreground"
                  }`}
                >
                  {val.title}
                </Link>
              ))}
            </div>

            {loading ? (
              <div className="flex justify-center py-20">
                <Loader2 className="w-6 h-6 animate-spin text-muted-foreground" />
              </div>
            ) : products.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-muted-foreground">No products found</p>
              </div>
            ) : (
              <>
                <p className="text-sm text-muted-foreground mb-6">{products.length} products</p>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                  {products.map((product) => {
                    const image = product.node.images.edges[0]?.node;
                    const price = product.node.priceRange.minVariantPrice;
                    return (
                      <Link
                        to={`/product/${product.node.handle}`}
                        key={product.node.id}
                        className="group cursor-pointer"
                      >
                        <div className="relative aspect-square bg-secondary rounded-sm overflow-hidden mb-3">
                          {image ? (
                            <img
                              src={image.url}
                              alt={image.altText || product.node.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                              loading="lazy"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                              <ShoppingBag size={24} />
                            </div>
                          )}
                          <button
                            onClick={(e) => handleAddToCart(e, product)}
                            disabled={isCartLoading}
                            className="absolute bottom-3 right-3 w-9 h-9 rounded-full bg-background/90 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-background"
                            aria-label={`Add ${product.node.title} to bag`}
                          >
                            {isCartLoading ? (
                              <Loader2 size={15} className="animate-spin text-foreground" />
                            ) : (
                              <ShoppingBag size={15} className="text-foreground" />
                            )}
                          </button>
                        </div>
                        <h3 className="text-sm font-medium text-foreground">{product.node.title}</h3>
                        <p className="text-sm text-muted-foreground mt-0.5">
                          ${parseFloat(price.amount).toFixed(2)} {price.currencyCode}
                        </p>
                      </Link>
                    );
                  })}
                </div>
              </>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CollectionPage;

import { useEffect, useState } from "react";
import { ShoppingBag, Loader2 } from "lucide-react";
import { Link } from "react-router-dom";
import { fetchCollectionByHandle, type ShopifyProduct } from "@/lib/shopify";
import { useCartStore } from "@/stores/cartStore";
import { toast } from "sonner";

const FeaturedCollection = () => {
  const [products, setProducts] = useState<ShopifyProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const addItem = useCartStore((s) => s.addItem);
  const isCartLoading = useCartStore((s) => s.isLoading);

  useEffect(() => {
    fetchCollectionByHandle("best-sellers", 8)
      .then(setProducts)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

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
    <section id="collection" className="py-20 md:py-28 section-padding bg-warm">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-xs tracking-[0.35em] uppercase text-muted-foreground mb-3">Most Loved</p>
          <h2 className="text-3xl md:text-4xl font-display font-medium text-foreground">
            Best Sellers
          </h2>
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {products.map((product) => {
              const image = product.node.images.edges[0]?.node;
              const price = product.node.priceRange.minVariantPrice;
              const variant = product.node.variants.edges[0]?.node;
              const inStock = variant?.availableForSale;

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
                    {/* Stock badge */}
                    {inStock !== undefined && (
                      <span className={`absolute top-2 left-2 text-[10px] font-medium tracking-wide uppercase px-2 py-0.5 rounded-sm ${inStock ? "bg-background/90 text-foreground" : "bg-destructive text-destructive-foreground"}`}>
                        {inStock ? "In Stock" : "Sold Out"}
                      </span>
                    )}
                    <button
                      onClick={(e) => handleAddToCart(e, product)}
                      disabled={isCartLoading || !inStock}
                      className="absolute bottom-3 right-3 w-9 h-9 rounded-full bg-background/90 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-background disabled:opacity-50"
                      aria-label={`Add ${product.node.title} to bag`}
                    >
                      {isCartLoading ? <Loader2 size={15} className="animate-spin text-foreground" /> : <ShoppingBag size={15} className="text-foreground" />}
                    </button>
                  </div>
                  <h3 className="text-sm font-medium text-foreground">{product.node.title}</h3>
                  <p className="text-sm font-medium text-foreground mt-0.5">
                    ${parseFloat(price.amount).toFixed(2)} <span className="text-muted-foreground font-normal">{price.currencyCode}</span>
                  </p>
                </Link>
              );
            })}
          </div>
        )}

        <div className="text-center mt-10">
          <Link
            to="/collection/all"
            className="inline-block border border-foreground text-foreground px-8 py-3 text-xs font-medium tracking-[0.2em] uppercase hover:bg-foreground hover:text-background transition-colors"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollection;

import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const articles = [
  {
    slug: "how-to-choose-the-perfect-everyday-bag",
    title: "How to Choose the Perfect Everyday Bag",
    excerpt: "From size and shape to strap style — a simple guide to finding the bag that fits your daily life.",
    category: "Guide",
    content: `Choosing the right everyday bag is about more than just looks — it's about finding something that works with your routine, your style, and your essentials.

**Consider Your Daily Essentials**
Start by thinking about what you carry every day. Phone, wallet, keys, sunglasses, a water bottle? If you're someone who carries a lot, a structured tote or work bag might be your best bet. If you prefer to keep it minimal, a crossbody or mini bag could be perfect.

**Think About Comfort**
How you carry your bag matters. Shoulder bags distribute weight differently than crossbodies. If you're on the go all day, a hands-free crossbody with an adjustable strap is ideal. For shorter outings, a clutch or mini bag adds a refined touch without the bulk.

**Match Your Lifestyle**
A work tote for office days. A crossbody for weekend errands. A mini bag for evenings out. The best everyday bag is one that transitions seamlessly between your daily activities.

**Choose Versatile Colors**
Neutral tones like black, taupe, beige, and stone work with everything. If you want a pop of personality, consider a muted blush or forest green — bold enough to stand out, subtle enough to pair with most outfits.

**Quality Over Quantity**
One well-made bag you love will serve you better than five you don't. Look for clean stitching, durable materials, and functional compartments. PU leather offers the look and feel of luxury without the price tag.`,
  },
  {
    slug: "best-bag-colors-for-daily-wear",
    title: "Best Bag Colors for Daily Wear",
    excerpt: "Neutral, bold, or somewhere in between? Find out which shades work hardest in your wardrobe.",
    category: "Style",
    content: `Color plays a bigger role in everyday bags than we often realize.

The right shade can make styling effortless and extend the life of your bag across seasons.

**Classic Neutrals**
Black, beige, taupe, and brown are timeless for a reason. They pair well with most wardrobes and never feel out of place.

**Soft Tones**
Muted greens, soft blues, and warm blush tones add personality while staying easy to style.

**When to Go Bold**
If your wardrobe is mostly neutral, a single statement color can elevate everyday outfits without feeling overwhelming.

**Choose What Feels Natural**
The best everyday color is one you'll reach for instinctively — the bag that always feels right.

✨ Ready to find your everyday bag?

Explore our curated collection of structured totes, crossbody bags and essentials designed for real life.

👉 [Shop LBS Essentials](/collection/all)`,
  },
  {
    slug: "tote-vs-crossbody-which-one-fits-your-lifestyle",
    title: "Tote vs Crossbody: Which One Fits Your Lifestyle",
    excerpt: "We break down the pros and cons so you can pick the perfect silhouette for your routine.",
    category: "Comparison",
    content: `Two of the most popular everyday bag styles — but which one is right for you? Let's compare.

**The Tote: Your Carry-Everything Companion**
Totes are spacious, structured, and perfect for days when you need to bring it all. Work documents, a water bottle, your lunch, a small makeup bag — a tote handles it without breaking a sweat.

*Best for:* Work days, grocery runs, travel, moms on the go.
*Our pick:* The Classic Work Tote — polished enough for meetings, practical enough for everything else.

**The Crossbody: Hands-Free Freedom**
Crossbodies sit comfortably across your body, leaving your hands free for coffee, your phone, or holding a toddler. They're compact, lightweight, and force you to carry only the essentials.

*Best for:* Weekend outings, errands, concerts, travel, active days.
*Our pick:* The Clean-Line Mini Crossbody — minimal design, maximum versatility.

**Can You Have Both?**
Absolutely. Most women benefit from having one of each. Use your tote for structured, longer days and your crossbody for casual, lighter moments. Together, they cover every scenario.

**The Verdict**
If you can only pick one, think about your most typical day. Do you carry a lot? Go tote. Do you prefer to travel light? Go crossbody. Either way, choose a neutral color for maximum outfit pairing.`,
  },
  {
    slug: "pu-leather-bags-what-to-expect-and-how-to-care-for-them",
    title: "PU Leather Bags: What to Expect and How to Care for Them",
    excerpt: "Durability, structure, and a refined look — learn what makes PU leather a smart everyday choice and how to keep it looking its best.",
    category: "Care",
    content: `PU leather has become a popular choice for everyday bags — and for good reason.

It offers durability, structure, and a refined look while remaining easy to maintain.

**What to Expect from PU Leather**
PU leather holds its shape well, resists daily wear, and offers a smooth, polished finish ideal for structured designs.

**Easy Care Tips**
– Wipe gently with a soft, damp cloth
– Avoid prolonged exposure to direct sunlight
– Store in a dust bag when not in use

**Everyday Reliability**
PU leather is designed for daily movement, making it a practical option for women who want style without extra maintenance.

When cared for properly, a PU leather bag can remain part of your routine for years.

👉 [Discover everyday bags designed for long-lasting use.](/collection/all)`,
  },
];

export { articles };

const JournalPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20 md:pt-24">
        <section className="section-padding py-16 md:py-24">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-2">Everyday Style Journal</p>
              <h1 className="text-3xl md:text-5xl font-display font-medium text-foreground mb-4">
                Stories & Guides
              </h1>
              <p className="text-muted-foreground max-w-lg">
                Tips, guides, and style inspiration for your everyday carry.
              </p>
            </div>

            <div className="grid gap-8">
              {articles.map((article) => (
                <Link
                  to={`/journal/${article.slug}`}
                  key={article.slug}
                  className="group block bg-warm rounded-sm p-8 md:p-10 hover:shadow-md transition-shadow duration-300"
                >
                  <span className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground font-medium">
                    {article.category}
                  </span>
                  <h2 className="text-xl md:text-2xl font-display font-medium text-foreground mt-3 mb-3 leading-snug">
                    {article.title}
                  </h2>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6 max-w-2xl">
                    {article.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-xs font-medium tracking-wide uppercase text-foreground group-hover:gap-2.5 transition-all">
                    Read Article <ArrowRight size={13} />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default JournalPage;

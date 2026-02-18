import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const articles = [
  {
    slug: "how-to-choose-the-perfect-everyday-bag",
    title: "How to Choose the Perfect Everyday Bag",
    excerpt: "From size and shape to strap style — a simple guide to finding the bag that fits your daily life.",
    category: "Guide",
  },
  {
    slug: "best-bag-colors-for-daily-wear",
    title: "Best Bag Colors for Daily Wear",
    excerpt: "Neutral, bold, or somewhere in between? Find out which shades work hardest in your wardrobe.",
    category: "Style",
  },
  {
    slug: "tote-vs-crossbody-which-one-fits-your-lifestyle",
    title: "Tote vs Crossbody: Which One Fits Your Lifestyle",
    excerpt: "We break down the pros and cons so you can pick the perfect silhouette for your routine.",
    category: "Comparison",
  },
];

const JournalSection = () => {
  return (
    <section id="journal" className="py-24 md:py-36 bg-warm">
      <div className="section-padding max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.35em] uppercase text-muted-foreground mb-4">The Journal</p>
          <h2 className="text-3xl md:text-4xl font-display font-medium text-foreground">
            Stories & Guides
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((article) => (
            <Link
              to={`/journal/${article.slug}`}
              key={article.slug}
              className="bg-background rounded-sm p-6 md:p-8 group cursor-pointer hover:shadow-md transition-shadow duration-300 block"
            >
              <span className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground font-medium">
                {article.category}
              </span>
              <h3 className="text-lg font-display font-medium text-foreground mt-3 mb-3 leading-snug">
                {article.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                {article.excerpt}
              </p>
              <span className="inline-flex items-center gap-1.5 text-xs font-medium tracking-wide uppercase text-foreground group-hover:gap-2.5 transition-all">
                Read More <ArrowRight size={13} />
              </span>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/journal"
            className="inline-block border border-foreground text-foreground px-8 py-3 text-sm font-medium tracking-widest uppercase hover:bg-foreground hover:text-background transition-colors"
          >
            View All Articles
          </Link>
        </div>
      </div>
    </section>
  );
};

export default JournalSection;

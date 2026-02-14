import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { articles } from "./JournalPage";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const JournalArticle = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="pt-20 md:pt-24 section-padding py-20 text-center">
          <p className="text-muted-foreground">Article not found.</p>
          <Link to="/journal" className="text-sm text-foreground underline mt-4 inline-block">Back to Journal</Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20 md:pt-24">
        <article className="section-padding py-16 md:py-24">
          <div className="max-w-2xl mx-auto">
            <Link to="/journal" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8">
              <ArrowLeft size={14} /> Back to Journal
            </Link>

            <span className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground font-medium">
              {article.category}
            </span>
            <h1 className="text-3xl md:text-4xl font-display font-medium text-foreground mt-3 mb-8 leading-tight">
              {article.title}
            </h1>

            <div className="prose prose-sm max-w-none text-muted-foreground leading-relaxed space-y-4">
              {article.content.split("\n\n").map((paragraph, i) => {
                if (paragraph.startsWith("**") && paragraph.endsWith("**")) {
                  return <h3 key={i} className="text-lg font-display font-medium text-foreground mt-8 mb-2">{paragraph.replace(/\*\*/g, "")}</h3>;
                }
                if (paragraph.startsWith("**")) {
                  const title = paragraph.match(/\*\*(.*?)\*\*/)?.[1];
                  const rest = paragraph.replace(/\*\*.*?\*\*/, "").trim();
                  return (
                    <div key={i}>
                      <h3 className="text-lg font-display font-medium text-foreground mt-8 mb-2">{title}</h3>
                      <p className="text-sm leading-relaxed">{rest}</p>
                    </div>
                  );
                }
                if (paragraph.startsWith("*") && paragraph.includes("*:")) {
                  return <p key={i} className="text-sm italic leading-relaxed">{paragraph.replace(/\*/g, "")}</p>;
                }
                const linkMatch = paragraph.match(/\[([^\]]+)\]\(([^)]+)\)/);
                if (linkMatch) {
                  const before = paragraph.slice(0, linkMatch.index);
                  const after = paragraph.slice((linkMatch.index || 0) + linkMatch[0].length);
                  return (
                    <p key={i} className="text-sm leading-relaxed">
                      {before}
                      <Link to={linkMatch[2]} className="underline text-foreground hover:text-foreground/80 transition-colors">{linkMatch[1]}</Link>
                      {after}
                    </p>
                  );
                }
                return <p key={i} className="text-sm leading-relaxed">{paragraph}</p>;
              })}
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default JournalArticle;

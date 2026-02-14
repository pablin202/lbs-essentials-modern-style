import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WhySection from "@/components/WhySection";
import FeaturedCollection from "@/components/FeaturedCollection";
import JournalSection from "@/components/JournalSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <WhySection />
        <FeaturedCollection />
        <JournalSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

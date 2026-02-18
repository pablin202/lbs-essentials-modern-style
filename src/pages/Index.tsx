import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WhySection from "@/components/WhySection";
import CollectionShowcase from "@/components/CollectionShowcase";
import FeaturedCollection from "@/components/FeaturedCollection";
import CompleteTheLook from "@/components/CompleteTheLook";
import JournalSection from "@/components/JournalSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <AnnouncementBar />
      <Navbar />
      <main>
        <HeroSection />
        <WhySection />
        <CollectionShowcase />
        <FeaturedCollection />
        <CompleteTheLook />
        <JournalSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

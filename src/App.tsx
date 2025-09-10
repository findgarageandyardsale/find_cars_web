import { Navigation } from "./components/Navigation";
import { ScenesSection } from "./components/ScenesSection";
import { AboutSection } from "./components/AboutSection";
import { VideoSection } from "./components/VideoSection";
import { ScanMeSection } from "./components/ScanMeSection";
import { FeaturesSection } from "./components/FeaturesSection";
import { HowItWorksSection } from "./components/HowItWorksSection";
import { WhyLocalSection } from "./components/WhyLocalSection";
import { CTASection } from "./components/CTASection";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <ScenesSection />
      <AboutSection />
      <VideoSection />
      <ScanMeSection />
      <FeaturesSection />
      <HowItWorksSection />
      <WhyLocalSection />
      <CTASection />
      <Footer />
    </div>
  );
}
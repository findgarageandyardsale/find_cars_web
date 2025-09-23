import { ScenesSection } from "./ScenesSection";
import { AboutSection } from "./AboutSection";
import { VideoSection } from "./VideoSection";
import { ScanMeSection } from "./ScanMeSection";
import { FeaturesSection } from "./FeaturesSection";
import { HowItWorksSection } from "./HowItWorksSection";
import { WhyLocalSection } from "./WhyLocalSection";
import { CTASection } from "./CTASection";

export function Home() {
    return (
        <div className="min-h-screen">
            <ScenesSection />
            <AboutSection />
            <VideoSection />
            <ScanMeSection />
            <FeaturesSection />
            <HowItWorksSection />
            <WhyLocalSection />
            <CTASection />
        </div>
    );
}

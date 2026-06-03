import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ServicesGrid from "../components/ServicesGrid";
import HowItWorks from "../components/HowItWorks";
import AboutIda from "../components/AboutIda";
import Testimonials from "../components/Testimonials";
import TeamSlider from "../components/TeamSlider";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import WhoWeHelp from "../components/WhoWeHelp";
import DocumentChecklists from "../components/DocumentChecklists";
import ImportantInfo from "../components/ImportantInfo";
import ResourcesSection from "../components/ResourcesSection";
import ContactSection from "../components/ContactSection";
import { GridPattern } from "../components/ui/grid-pattern";
import { cn } from "../lib/utils";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-white text-slate-800 overflow-x-hidden antialiased selection:bg-gold-500 selection:text-navy-950">
      
      {/* Background Grid Pattern */}
      <GridPattern
        width={40}
        height={40}
        x={-1}
        y={-1}
        className={cn(
          "[mask-image:linear-gradient(to_bottom,white,transparent,transparent)]",
          "fixed inset-0 z-0 opacity-60",
        )}
      />

      {/* Sticky Top Interactive Header Navigation */}
      <Navbar />

      {/* Main Single Page Web Contents arranged precisely as requested */}
      <main>
        {/* Section 1 — Hero Area */}
        <Hero />

        {/* Section 3 — IMMIGRATION SERVICES */}
        <ServicesGrid />

        {/* Section 4 — WHO WE HELP */}
        <WhoWeHelp />

        {/* Section 5 — THE IMMIGRATION PROCESS */}
        <HowItWorks />
        
        {/* Section 6 — DOCUMENT CHECKLISTS */}
        <DocumentChecklists />
        
        {/* Section 7 — IMPORTANT INFORMATION */}
        <ImportantInfo />

        {/* Section 8 — MEET OUR TEAM (Part 1 - Senior Practitioner) */}
        <AboutIda />

        {/* Section 8 — MEET OUR TEAM (Part 2 - Team Slider) */}
        <TeamSlider />

        {/* Section 8 — Dynamic test reviews & ratings metric */}
        <Testimonials />

        {/* Section 9 — FREQUENTLY ASKED QUESTIONS */}
        <FAQ />

        {/* Section 10 — RESOURCES CENTRE */}
        <ResourcesSection />

        {/* Section 11 — CONTACT */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

    </div>
  );
}

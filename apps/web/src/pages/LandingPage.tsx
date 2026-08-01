import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import Trust from "@/components/landing/Trust";
import Features from "@/components/landing/Features";
import HowItWorks from "@/components/landing/HowItWorks";
import LandingDashboard from "@/components/landing/LandingDashboard";
import AICoach from "@/components/landing/AICoach";
import Pricing from "@/components/landing/Pricing";
import FAQ from "@/components/landing/FAQ";
import CTA from "@/components/landing/CTA";
import Footer from "@/components/landing/Footer";
export default function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <main>
        <Hero />
        <Trust />
        <Features />
        <HowItWorks />
       <LandingDashboard />
        <AICoach />
        <Pricing />
        <FAQ />
        <CTA />
    
        <Footer />
      </main>
    </div>
  );
}
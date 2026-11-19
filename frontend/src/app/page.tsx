"use client";

import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import SecuritySection from "@/components/SecuritySection";
import TrustedLogosArc from "@/components/TrustedLogosArc";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <SmoothScroll>
      <main className="min-h-screen bg-[#E8D2B5] text-[#220709] relative selection:bg-[#590907] selection:text-[#FAF4EB]">
        <Navbar />
        <HeroSection />
        <ServicesSection />
        <CaseStudiesSection />
        <SecuritySection />
        <TrustedLogosArc />
        <CtaBanner />
        <Footer />
      </main>
    </SmoothScroll>
  );
}

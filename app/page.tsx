"use client"

import {Header} from "@/components/header/header";
import HeroSection from "@/components/sections/heroSection/heroSection";
import {scrollToElement} from "@/utils/scroll";

export default function Home() {
    const scrollToHeroSection = () => scrollToElement('heroSection');
    const scrollToChooseName = () => scrollToElement('chooseName');

  return (
      <div>
      <Header scrollToHeroSection={scrollToHeroSection} scrollToChooseName={scrollToChooseName} />
      <HeroSection/>
      </div>
  );
}

// import Hero from "@/components/pages/hero1"
// import FeatureCards from "@/components/pages/feature-cards1"
// import Features from "@/components/pages/features1"

import HeroHeader from "@/components/hero"
import FeatureCards from "@/components/feature-cards"
import Features from "@/components/features"
import Features2 from "@/components/feature2"
import Contact from "@/components/contact-main"

export default function Home() {
  return (
    <main>
      <HeroHeader/>
      <FeatureCards />
      <Features />
      <Features2/>
      <Contact/>
    </main>
  )
}

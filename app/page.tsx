import BrandsSection from './_components/sections/brands'
import CTASection from './_components/sections/cta'
import FeaturesSection from './_components/sections/features'
import HeroSection from './_components/sections/hero'
import ServicesSection from './_components/sections/services'
import TrainersSection from './_components/sections/trainers'

export default function Home() {
  return (
    <main className="flex-1 pt-16">
      <HeroSection />
      <ServicesSection />
      <FeaturesSection />
      <TrainersSection />
      <BrandsSection />
      <CTASection />
    </main>
  )
}

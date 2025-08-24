import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { TaxonomySection } from "@/components/taxonomy-section"
import { GeographySection } from "@/components/geography-section"
import { BiologySection } from "@/components/biology-section"
import { ConservationSection } from "@/components/conservation-section"
import { CuriositiesSection } from "@/components/curiosities-section"
import { PhotoGallery } from "@/components/photo-gallery"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <TaxonomySection />
        <GeographySection />
        <BiologySection />
        <ConservationSection />
        <CuriositiesSection />
        <PhotoGallery />
      </main>
      <Footer />
    </div>
  )
}

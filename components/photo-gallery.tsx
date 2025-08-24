"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  Camera, 
  ZoomIn,
  X
} from "lucide-react"
import { useState } from "react"

export function PhotoGallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const galleryImages = [
    {
      id: 1,
      src: "/images/capybara_water_habitat.png",
      alt: "Capivara em seu habitat aquático natural",
      caption: "Capivara nadando em lagoa natural"
    },
    {
      id: 2,
      src: "/images/capybara-family.jpg",
      alt: "Família de capivaras em grupo",
      caption: "Família de capivaras em grupo social"
    },
    {
      id: 3,
      src: "/images/capybara-social-group.jpg",
      alt: "Grupo social de capivaras",
      caption: "Grupo social de capivaras interagindo"
    },
    {
      id: 4,
      src: "/images/capybara-grass-munch.jpg",
      alt: "Capivara se alimentando de grama",
      caption: "Capivara se alimentando de grama fresca"
    },
    {
      id: 5,
      src: "/images/capybara-swimming.png",
      alt: "Capivara nadando",
      caption: "Capivara nadando em rio"
    },
    {
      id: 6,
      src: "/images/peaceful-capybara.jpg",
      alt: "Capivara em estado de paz",
      caption: "Capivara em estado de tranquilidade"
    },
    {
      id: 7,
      src: "/images/capybara-human-comparison.jpg",
      alt: "Comparação de tamanho com humano",
      caption: "Comparação de tamanho com humano"
    },
    {
      id: 8,
      src: "/images/baby-capybara-mother.jpeg",
      alt: "Filhote de capivara com mãe",
      caption: "Filhote de capivara com sua mãe"
    }
  ]

  const openModal = (src: string) => {
    setSelectedImage(src)
  }

  const closeModal = () => {
    setSelectedImage(null)
  }

  return (
    <section id="galeria" className="relative py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50/60 via-pink-50/30 to-rose-50/40"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(168,85,247,0.08),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(236,72,153,0.06),transparent_50%)]"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-1/4 w-24 h-24 bg-purple-200/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-1/3 w-20 h-20 bg-pink-200/20 rounded-full blur-xl animate-pulse delay-1000"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-3 mb-6 p-4 bg-white/60 backdrop-blur-sm rounded-2xl border border-purple-200/50 shadow-lg">
              <Camera className="w-8 h-8 text-purple-600" />
              <Badge variant="secondary" className="bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 border-purple-200">
                Galeria
              </Badge>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 bg-clip-text text-transparent">
              Galeria de Fotos
            </h2>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Explore belas imagens das capivaras em seu habitat natural, capturando momentos 
              únicos de sua vida social, alimentação e comportamento
            </p>
          </div>

          {/* Gallery Grid - 2 rows with 4 photos each */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {galleryImages.map((image) => (
              <Card 
                key={image.id}
                className="group relative overflow-hidden bg-white/80 backdrop-blur-sm border-0 shadow-xl shadow-purple-100/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-200/50 hover:scale-[1.02] cursor-pointer"
                onClick={() => openModal(image.src)}
              >
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  
                  {/* Simple Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                      <Button 
                        size="sm" 
                        className="bg-white/90 text-gray-800 hover:bg-white border-0 shadow-lg"
                      >
                        <ZoomIn className="w-4 h-4 mr-2" />
                        Ver
                      </Button>
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-4">
                  <p className="text-sm text-gray-600 font-medium text-center">
                    {image.caption}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Simple Credits Section */}
          <Card className="max-w-4xl mx-auto bg-gradient-to-br from-purple-50 to-pink-50 border-0 shadow-xl shadow-purple-100/50">
            <CardContent className="p-8 text-center">
              <div className="inline-flex items-center space-x-3 mb-4 p-3 bg-white/80 backdrop-blur-sm rounded-xl border border-purple-200/50">
                <Camera className="w-6 h-6 text-purple-600" />
                <span className="font-semibold text-purple-700">Créditos</span>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Agradecimentos
              </h3>
              
              <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto">
                Todas as imagens desta galeria foram cuidadosamente selecionadas para mostrar 
                as capivaras em seu habitat natural. Agradecemos aos fotógrafos e organizações 
                que contribuíram para documentar a beleza e importância destes animais fascinantes.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Simple Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4">
          <div className="relative max-w-4xl w-full">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-all duration-300 hover:scale-110"
            >
              <X className="w-6 h-6" />
            </button>
            
            {/* Main Image */}
            <div className="relative">
              <img
                src={selectedImage}
                alt="Imagem ampliada"
                className="w-full h-auto max-h-[80vh] object-contain rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

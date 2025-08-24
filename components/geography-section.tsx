"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Globe, 
  TreePine, 
  MapPin, 
  Droplets, 
  Mountain, 
  Leaf,
  Compass,
  Navigation,
  Zap,
  Heart,
  Map
} from "lucide-react"
import { useState } from "react"

export function GeographySection() {
  const [activeTab, setActiveTab] = useState<string>("habitat")

  const geographyData = {
    habitat: {
      title: "Habitat Natural",
      icon: TreePine,
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-50 to-emerald-50",
      items: [
        {
          label: "Áreas Semi-aquáticas",
          value: "Margens de rios, lagos e pântanos",
          icon: Droplets,
          description: "Preferem locais com vegetação densa próxima à água"
        },
        {
          label: "Vegetação",
          value: "Savanas, florestas tropicais e cerrado",
          icon: Leaf,
          description: "Áreas com vegetação abundante para alimentação"
        },
        {
          label: "Proteção",
          value: "Vegetação densa para abrigo",
          icon: Heart,
          description: "Oferece proteção contra predadores"
        },
        {
          label: "Alimentação",
          value: "Fontes de água próximas",
          icon: Zap,
          description: "Acesso fácil a plantas aquáticas e gramíneas"
        }
      ]
    },
    distribuicao: {
      title: "Distribuição Geográfica",
      icon: Globe,
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-50 to-cyan-50",
      items: [
        {
          label: "América do Sul",
          value: "Distribuição continental",
          icon: Globe,
          description: "Presente em grande parte do continente sul-americano"
        },
        {
          label: "Concentração",
          value: "Pantanal e Amazônia",
          icon: MapPin,
          description: "Maior densidade populacional nestas regiões"
        },
        {
          label: "Países",
          value: "11 países sul-americanos",
          icon: Navigation,
          description: "Do norte da Argentina até o sul da Venezuela"
        },
        {
          label: "Adaptação",
          value: "Diferentes biomas",
          icon: Compass,
          description: "Capacidade de adaptar-se a diversos ambientes"
        }
      ]
    },
    regioes: {
      title: "Regiões Principais",
      icon: MapPin,
      color: "from-purple-500 to-indigo-500",
      bgColor: "from-purple-50 to-indigo-50",
      items: [
        {
          label: "Pantanal",
          value: "Maior área úmida continental",
          icon: Droplets,
          description: "Habitat ideal com abundância de água e vegetação"
        },
        {
          label: "Amazônia",
          value: "Floresta tropical biodiversa",
          icon: TreePine,
          description: "Densas florestas com rios e igarapés"
        },
        {
          label: "Cerrado",
          value: "Savana tropical brasileira",
          icon: Leaf,
          description: "Vegetação adaptada ao clima seco"
        },
        {
          label: "Pampas",
          value: "Planícies gramíneas temperadas",
          icon: Mountain,
          description: "Região de clima mais frio e seco"
        }
      ]
    },
    mapa: {
      title: "Mapa de Distribuição",
      icon: Map,
      color: "from-teal-500 to-cyan-500",
      bgColor: "from-teal-50 to-cyan-50",
      items: [
        {
          label: "Distribuição Continental",
          value: "América do Sul",
          icon: Globe,
          description: "Presente em grande parte do continente"
        },
        {
          label: "Concentração Brasileira",
          value: "Regiões úmidas",
          icon: MapPin,
          description: "Maior densidade no Brasil central e norte"
        },
        {
          label: "Habitats Preferidos",
          value: "Áreas úmidas",
          icon: Droplets,
          description: "Próximo a rios, lagos e pântanos"
        },
        {
          label: "Adaptação Climática",
          value: "Tropical e subtropical",
          icon: Compass,
          description: "Climas quentes e úmidos"
        }
      ]
    }
  }

  const countries = [
    "Brasil", "Argentina", "Uruguai", "Paraguai", 
    "Bolívia", "Peru", "Colômbia", "Venezuela",
    "Guiana", "Suriname", "Guiana Francesa"
  ]

  return (
    <section id="geografia" className="relative py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/60 via-green-50/30 to-emerald-50/40"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.08),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(16,185,129,0.06),transparent_50%)]"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 right-1/4 w-24 h-24 bg-blue-200/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 left-1/3 w-20 h-20 bg-green-200/20 rounded-full blur-xl animate-pulse delay-1000"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-3 mb-6 p-4 bg-white/60 backdrop-blur-sm rounded-2xl border border-blue-200/50 shadow-lg">
              <Navigation className="w-8 h-8 text-blue-600" />
              <Badge variant="secondary" className="bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 border-blue-200">
                Geografia
              </Badge>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 bg-gradient-to-r from-blue-600 via-green-600 to-emerald-600 bg-clip-text text-transparent">
              Distribuição Geográfica
            </h2>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Explore onde as capivaras vivem em seu habitat natural, desde as vastas planícies 
              do Pantanal até as densas florestas amazônicas
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {Object.entries(geographyData).map(([key, data]) => {
              const IconComponent = data.icon
              return (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`group flex items-center space-x-3 px-6 py-4 rounded-2xl border-2 transition-all duration-300 ${
                    activeTab === key
                      ? `border-${data.color.split('-')[1]}-400 bg-gradient-to-r ${data.bgColor} shadow-lg`
                      : 'border-gray-200 bg-white/80 backdrop-blur-sm hover:border-gray-300'
                  }`}
                >
                  <div className={`p-2 rounded-xl transition-all duration-300 ${
                    activeTab === key
                      ? `bg-gradient-to-r ${data.color} text-white shadow-lg`
                      : 'bg-gray-100 text-gray-600 group-hover:bg-gray-200'
                  }`}>
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <span className={`font-semibold transition-colors duration-300 ${
                    activeTab === key
                      ? 'text-gray-800'
                      : 'text-gray-600 group-hover:text-gray-800'
                  }`}>
                    {data.title}
                  </span>
                </button>
              )
            })}
          </div>

          {/* Active Tab Content */}
          <div className="mb-12">
            {(() => {
              const data = geographyData[activeTab as keyof typeof geographyData]
              const IconComponent = data.icon
              
              return (
                <Card className="max-w-6xl mx-auto bg-white/80 backdrop-blur-sm border-0 shadow-2xl shadow-blue-100/50 transition-all duration-300 hover:shadow-3xl hover:shadow-blue-200/50">
                  <CardHeader className="text-center pb-8">
                    <div className="inline-flex items-center space-x-3 mb-6 p-4 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-2xl border border-blue-200/50">
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${data.color} text-white shadow-lg`}>
                        <IconComponent className="w-8 h-8" />
                      </div>
                      <span className="text-xl font-bold text-blue-700">{data.title}</span>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    {activeTab === "mapa" ? (
                      // Special content for map tab
                      <div className="space-y-8">
                        <div className="text-center mb-8">
                          <h3 className="text-2xl font-bold text-gray-800 mb-4">
                            Mapa de Distribuição da Capivara na América do Sul
                          </h3>
                          <p className="text-gray-600 max-w-2xl mx-auto">
                            Visualize a distribuição geográfica das capivaras em seu habitat natural, 
                            mostrando as principais áreas de ocorrência e concentração populacional.
                          </p>
                        </div>
                        
                        {/* Map Image */}
                        <div className="text-center">
                          <div className="relative inline-block group">
                            <div className="absolute -inset-4 bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-400 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-500"></div>
                            <img
                              src="/images/capybara-distribution-sa.png"
                              alt="Mapa de distribuição da capivara na América do Sul"
                              className="relative w-full max-w-4xl mx-auto rounded-2xl shadow-2xl transition-all duration-500 group-hover:scale-105 group-hover:shadow-3xl"
                            />
                          </div>
                          <p className="text-sm text-gray-500 mt-4">
                            Distribuição geográfica da capivara na América do Sul
                          </p>
                        </div>
                        
                        {/* Map Information Grid */}
                        <div className="grid md:grid-cols-2 gap-8 mt-8">
                          {data.items.map((item, index) => {
                            const ItemIcon = item.icon
                            return (
                              <div
                                key={index}
                                className="group p-6 rounded-xl border-2 border-gray-200 hover:border-teal-300 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
                              >
                                <div className="flex items-start space-x-4">
                                  <div className={`p-3 rounded-xl bg-gradient-to-r ${data.color} text-white shadow-lg`}>
                                    <ItemIcon className="w-6 h-6" />
                                  </div>
                                  <div className="flex-1">
                                    <h4 className="font-bold text-gray-800 mb-2 group-hover:text-teal-700 transition-colors duration-300">
                                      {item.label}
                                    </h4>
                                    <p className="text-lg font-semibold text-teal-600 mb-2">
                                      {item.value}
                                    </p>
                                    <p className="text-gray-600 leading-relaxed">
                                      {item.description}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            )
                          })}
                        </div>
                      </div>
                    ) : (
                      // Regular content for other tabs
                      <div className="grid md:grid-cols-2 gap-8">
                        {data.items.map((item, index) => {
                          const ItemIcon = item.icon
                          return (
                            <div
                              key={index}
                              className="group p-6 rounded-xl border-2 border-gray-200 hover:border-blue-300 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
                            >
                              <div className="flex items-start space-x-4">
                                <div className={`p-3 rounded-xl bg-gradient-to-r ${data.color} text-white shadow-lg`}>
                                  <ItemIcon className="w-6 h-6" />
                                </div>
                                <div className="flex-1">
                                  <h4 className="font-bold text-gray-800 mb-2 group-hover:text-blue-700 transition-colors duration-300">
                                    {item.label}
                                  </h4>
                                  <p className="text-lg font-semibold text-blue-600 mb-2">
                                    {item.value}
                                  </p>
                                  <p className="text-gray-600 leading-relaxed">
                                    {item.description}
                                  </p>
                                </div>
                              </div>
                            </div>
                          )
                        })}
                      </div>
                    )}
                  </CardContent>
                </Card>
              )
            })()}
          </div>
        </div>
      </div>
    </section>
  )
}

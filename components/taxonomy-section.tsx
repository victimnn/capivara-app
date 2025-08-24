"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Dna, 
  Leaf, 
  PawPrint, 
  Heart, 
  Globe, 
  Zap, 
  Crown, 
  Sparkles,
  BookOpen
} from "lucide-react"
import { useState } from "react"

export function TaxonomySection() {
  const [activeTab, setActiveTab] = useState<string>("todas")

  const taxonomyData = [
    { 
      label: "Nome Popular", 
      value: "Capivara",
      icon: PawPrint,
      color: "from-pink-500 to-rose-500",
      bgColor: "from-pink-50 to-rose-50",
      description: "Nome pelo qual é conhecida popularmente"
    },
    { 
      label: "Nome Científico", 
      value: "Hydrochoerus hydrochaeris",
      icon: Dna,
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-50 to-cyan-50",
      description: "Nome científico oficial da espécie"
    },
    { 
      label: "Gênero", 
      value: "Hydrochoerus",
      icon: Leaf,
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-50 to-emerald-50",
      description: "Gênero taxonômico da espécie"
    },
    { 
      label: "Família", 
      value: "Caviidae",
      icon: Heart,
      color: "from-red-500 to-pink-500",
      bgColor: "from-red-50 to-pink-50",
      description: "Família biológica das capivaras"
    },
    { 
      label: "Ordem", 
      value: "Rodentia",
      icon: Zap,
      color: "from-yellow-500 to-orange-500",
      bgColor: "from-yellow-50 to-orange-50",
      description: "Ordem dos roedores"
    },
    { 
      label: "Classe", 
      value: "Mammalia",
      icon: Crown,
      color: "from-purple-500 to-indigo-500",
      bgColor: "from-purple-50 to-indigo-50",
      description: "Classe dos mamíferos"
    },
    { 
      label: "Filo", 
      value: "Chordata",
      icon: Globe,
      color: "from-teal-500 to-cyan-500",
      bgColor: "from-teal-50 to-cyan-50",
      description: "Filo dos cordados"
    },
    { 
      label: "Reino", 
      value: "Animalia",
      icon: Sparkles,
      color: "from-indigo-500 to-purple-500",
      bgColor: "from-indigo-50 to-purple-50",
      description: "Reino animal"
    },
  ]

  const categories = [
    { key: "todas", label: "Todas", icon: BookOpen, color: "bg-green-500" },
    { key: "basicas", label: "Básicas", icon: Dna, color: "bg-blue-500" },
    { key: "intermediarias", label: "Intermediárias", icon: Crown, color: "bg-purple-500" },
    { key: "avancadas", label: "Avançadas", icon: Globe, color: "bg-teal-500" }
  ]

  const filteredData = activeTab === "todas" 
    ? taxonomyData 
    : activeTab === "basicas" 
      ? taxonomyData.slice(0, 2)
      : activeTab === "intermediarias"
        ? taxonomyData.slice(2, 6)
        : taxonomyData.slice(6)

  return (
    <section id="taxonomia" className="relative py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-50/60 via-blue-50/30 to-emerald-50/40"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(34,197,94,0.08),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(16,185,129,0.06),transparent_50%)]"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-10 left-1/4 w-16 h-16 bg-green-200/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-1/3 w-24 h-24 bg-blue-200/20 rounded-full blur-xl animate-pulse delay-1000"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-3 mb-6 p-4 bg-white/60 backdrop-blur-sm rounded-2xl border border-green-200/50 shadow-lg">
              <BookOpen className="w-8 h-8 text-green-600" />
              <Badge variant="secondary" className="bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 border-green-200">
                Taxonomia
              </Badge>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 bg-gradient-to-r from-green-600 via-emerald-600 to-blue-600 bg-clip-text text-transparent">
              Classificação Taxonômica
            </h2>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Explore a hierarquia científica que classifica a capivara no reino animal, 
              desde seu nome popular até sua posição evolutiva
            </p>
          </div>

          {/* Category Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => {
              const IconComponent = category.icon
              return (
                <button
                  key={category.key}
                  onClick={() => setActiveTab(category.key)}
                  className={`group flex items-center space-x-3 px-6 py-4 rounded-2xl border-2 transition-all duration-300 ${
                    activeTab === category.key
                      ? `border-${category.color.split('-')[1]}-400 bg-gradient-to-r ${category.color.replace('500', '50')} shadow-lg`
                      : 'border-gray-200 bg-white/80 backdrop-blur-sm hover:border-gray-300'
                  }`}
                >
                  <div className={`p-2 rounded-xl transition-all duration-300 ${
                    activeTab === category.key
                      ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                      : 'bg-gray-100 text-gray-600 group-hover:bg-gray-200'
                  }`}>
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <span className={`font-semibold transition-colors duration-300 ${
                    activeTab === category.key
                      ? 'text-gray-800'
                      : 'text-gray-600 group-hover:text-gray-800'
                  }`}>
                    {category.label}
                  </span>
                </button>
              )
            })}
          </div>

          {/* Taxonomy Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {filteredData.map((item, index) => {
              const IconComponent = item.icon
              return (
                <Card 
                  key={index}
                  className="group relative overflow-hidden bg-white/80 backdrop-blur-sm border-0 shadow-xl shadow-green-100/50 transition-all duration-300 hover:shadow-2xl hover:shadow-green-200/50 hover:scale-[1.02]"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                  
                  <CardHeader className="relative z-10 pb-3">
                    <div className="flex items-center justify-between">
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${item.color} text-white shadow-lg`}>
                        <IconComponent className="w-6 h-6" />
                      </div>
                    </div>
                    <CardTitle className="text-lg font-bold text-gray-800 group-hover:text-gray-900 transition-colors duration-300">
                      {item.label}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="relative z-10">
                    <p className="text-2xl font-black mb-3 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                      {item.value}
                    </p>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Detailed Information Card */}
          <Card className="max-w-4xl mx-auto bg-white/80 backdrop-blur-sm border-0 shadow-2xl shadow-green-100/50 transition-all duration-300 hover:shadow-3xl hover:shadow-green-200/50">
            <CardHeader className="text-center pb-6">
              <div className="inline-flex items-center space-x-3 mb-4 p-3 bg-gradient-to-r from-green-100 to-emerald-100 rounded-xl border border-green-200/50">
                <Dna className="w-6 h-6 text-green-600" />
                <span className="font-semibold text-green-700">Informações Detalhadas</span>
              </div>
              <CardTitle className="text-3xl font-bold text-gray-800">
                Por que essa classificação?
              </CardTitle>
            </CardHeader>
            
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl border border-blue-200/50">
                  <h4 className="font-bold text-blue-800 mb-3 flex items-center">
                    <Zap className="w-5 h-5 mr-2" />
                    Características Únicas
                  </h4>
                  <p className="text-blue-700 leading-relaxed">
                    A capivara é o maior roedor existente, com características semi-aquáticas 
                    que a distinguem de outros membros da ordem Rodentia.
                  </p>
                </div>
                
                <div className="p-6 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl border border-emerald-200/50">
                  <h4 className="font-bold text-emerald-800 mb-3 flex items-center">
                    <Globe className="w-5 h-5 mr-2" />
                    Distribuição Evolutiva
                  </h4>
                  <p className="text-emerald-700 leading-relaxed">
                    Sua classificação na família Caviidae reflete sua evolução na América do Sul, 
                    onde desenvolveu adaptações únicas para seu habitat.
                  </p>
                </div>
              </div>
              
              <div className="p-6 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl border border-purple-200/50">
                <h4 className="font-bold text-purple-800 mb-3 flex items-center">
                  <Crown className="w-5 h-5 mr-2" />
                  Importância Científica
                </h4>
                <p className="text-purple-700 leading-relaxed">
                  A classificação taxonômica da capivara não apenas organiza o conhecimento 
                  sobre a espécie, mas também revela sua posição única na árvore evolutiva 
                  dos mamíferos sul-americanos.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Utensils, 
  Heart, 
  Users, 
  Activity, 
  Clock, 
  Baby, 
  Leaf,
  Droplets,
  Sun,
  Moon,
  Zap,
  Brain,
  Shield,
  Target,
  TrendingUp,
  Microscope
} from "lucide-react"
import { useState } from "react"

export function BiologySection() {
  const [activeTab, setActiveTab] = useState<string>("nutricao")

  const biologyData = {
    nutricao: {
      title: "Nutrição e Alimentação",
      icon: Utensils,
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-50 to-emerald-50",
      items: [
        {
          label: "Tipo de Dieta",
          value: "Herbívoro estrito",
          icon: Leaf,
          description: "Alimenta-se exclusivamente de vegetais"
        },
        {
          label: "Consumo Diário",
          value: "6-8 kg de vegetação",
          icon: TrendingUp,
          description: "Quantidade necessária para manter seu grande tamanho"
        },
        {
          label: "Alimentos Principais",
          value: "Gramíneas aquáticas, plantas aquáticas, frutas",
          icon: Utensils,
          description: "Dieta rica em fibras e nutrientes"
        },
        {
          label: "Método de Forrageamento",
          value: "Pastagem diurna e crepuscular",
          icon: Clock,
          description: "Ativas principalmente ao amanhecer e entardecer"
        }
      ]
    },
    reproducao: {
      title: "Reprodução e Desenvolvimento",
      icon: Heart,
      color: "from-pink-500 to-rose-500",
      bgColor: "from-pink-50 to-rose-50",
      items: [
        {
          label: "Período Reprodutivo",
          value: "Estação seca (maio a outubro)",
          icon: Sun,
          description: "Reproduzem-se quando há menos água disponível"
        },
        {
          label: "Gestação",
          value: "150 dias (5 meses)",
          icon: Clock,
          description: "Período de desenvolvimento embrionário"
        },
        {
          label: "Tamanho da Ninhada",
          value: "2 a 8 filhotes (média: 4)",
          icon: Baby,
          description: "Filhotes nascem bem desenvolvidos"
        },
        {
          label: "Maturidade Sexual",
          value: "15-18 meses",
          icon: TrendingUp,
          description: "Idade para início da reprodução"
        }
      ]
    },
    comportamento: {
      title: "Comportamento Social",
      icon: Users,
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-50 to-cyan-50",
      items: [
        {
          label: "Estrutura Social",
          value: "Grupos de 10-20 indivíduos",
          icon: Users,
          description: "Vivem em grupos familiares coesos"
        },
        {
          label: "Hierarquia",
          value: "Dominância baseada em tamanho",
          icon: Shield,
          description: "Machos maiores são dominantes"
        },
        {
          label: "Comunicação",
          value: "Vocalizações e linguagem corporal",
          icon: Brain,
          description: "Sistema complexo de comunicação"
        },
        {
          label: "Territorialidade",
          value: "Defendem áreas de alimentação",
          icon: Target,
          description: "Protegem recursos importantes"
        }
      ]
    },
    adaptacoes: {
      title: "Adaptações Evolutivas",
      icon: Zap,
      color: "from-purple-500 to-indigo-500",
      bgColor: "from-purple-50 to-indigo-50",
      items: [
        {
          label: "Adaptações Aquáticas",
          value: "Pés palmados e pelagem densa",
          icon: Droplets,
          description: "Perfeitas para vida semi-aquática"
        },
        {
          label: "Dentes Especializados",
          value: "Crescimento contínuo",
          icon: Microscope,
          description: "Adaptados para cortar vegetação dura"
        },
        {
          label: "Metabolismo",
          value: "Eficiente digestão de fibras",
          icon: Activity,
          description: "Processa eficientemente vegetais"
        },
        {
          label: "Regulação Térmica",
          value: "Tolerância a altas temperaturas",
          icon: Sun,
          description: "Adaptadas ao clima tropical"
        }
      ]
    }
  }

  return (
    <section id="biologia" className="relative py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/60 via-green-50/30 to-blue-50/40"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(16,185,129,0.08),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(34,197,94,0.06),transparent_50%)]"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-1/4 w-20 h-20 bg-emerald-200/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-1/3 w-24 h-24 bg-green-200/20 rounded-full blur-xl animate-pulse delay-1000"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-3 mb-6 p-4 bg-white/60 backdrop-blur-sm rounded-2xl border border-emerald-200/50 shadow-lg">
              <Microscope className="w-8 h-8 text-emerald-600" />
              <Badge variant="secondary" className="bg-gradient-to-r from-emerald-100 to-green-100 text-emerald-700 border-emerald-200">
                Biologia
              </Badge>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 bg-gradient-to-r from-emerald-600 via-green-600 to-blue-600 bg-clip-text text-transparent">
              Biologia e Comportamento
            </h2>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Descubra os segredos da vida das capivaras, desde sua alimentação herbívora 
              até seu comportamento social complexo e adaptações evolutivas únicas
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {Object.entries(biologyData).map(([key, data]) => {
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
              const data = biologyData[activeTab as keyof typeof biologyData]
              const IconComponent = data.icon
              
              return (
                <Card className="max-w-6xl mx-auto bg-white/80 backdrop-blur-sm border-0 shadow-2xl shadow-emerald-100/50 transition-all duration-300 hover:shadow-3xl hover:shadow-emerald-200/50">
                  <CardHeader className="text-center pb-8">
                    <div className="inline-flex items-center space-x-3 mb-6 p-4 bg-gradient-to-r from-emerald-100 to-green-100 rounded-2xl border border-emerald-200/50">
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${data.color} text-white shadow-lg`}>
                        <IconComponent className="w-8 h-8" />
                      </div>
                      <span className="text-xl font-bold text-emerald-700">{data.title}</span>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-8">
                      {data.items.map((item, index) => {
                        const ItemIcon = item.icon
                        return (
                          <div
                            key={index}
                            className="group p-6 rounded-xl border-2 border-gray-200 hover:border-emerald-300 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
                          >
                            <div className="flex items-start space-x-4">
                              <div className={`p-3 rounded-xl bg-gradient-to-r ${data.color} text-white shadow-lg`}>
                                <ItemIcon className="w-6 h-6" />
                              </div>
                              <div className="flex-1">
                                <h4 className="font-bold text-gray-800 mb-2 group-hover:text-emerald-700 transition-colors duration-300">
                                  {item.label}
                                </h4>
                                <p className="text-lg font-semibold text-emerald-600 mb-2">
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
                  </CardContent>
                </Card>
              )
            })()}
          </div>

          {/* Fun Facts Section */}
          <Card className="max-w-4xl mx-auto bg-gradient-to-br from-emerald-50 to-green-50 border-0 shadow-xl shadow-emerald-100/50">
            <CardHeader className="text-center">
              <div className="inline-flex items-center space-x-3 mb-4 p-3 bg-white/80 backdrop-blur-sm rounded-xl border border-emerald-200/50">
                <Zap className="w-6 h-6 text-emerald-600" />
                <span className="font-semibold text-emerald-700">Curiosidades Biológicas</span>
              </div>
              <CardTitle className="text-2xl font-bold text-gray-800">
                Fatos Surpreendentes
              </CardTitle>
            </CardHeader>
            
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Heart className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-bold text-gray-800 mb-2">Vida Longa</h4>
                  <p className="text-sm text-gray-600">
                    Capivaras podem viver até 12 anos em cativeiro
                  </p>
                </div>
                
                <div className="text-center p-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Droplets className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-bold text-gray-800 mb-2">Nadadoras Natas</h4>
                  <p className="text-sm text-gray-600">
                    Podem ficar submersas por até 5 minutos
                  </p>
                </div>
                
                <div className="text-center p-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Brain className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-bold text-gray-800 mb-2">Inteligentes</h4>
                  <p className="text-sm text-gray-600">
                    Reconhecem humanos individuais e formam laços
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

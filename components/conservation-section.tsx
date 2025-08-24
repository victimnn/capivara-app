"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Shield, 
  AlertTriangle, 
  Users, 
  Leaf, 
  Heart,
  Globe,
  Target,
  TrendingUp,
  AlertCircle,
  CheckCircle,
  Lightbulb,
  Zap,
  Eye,
  HandHeart,
  TreePine,
  Mountain
} from "lucide-react"
import { useState } from "react"

export function ConservationSection() {
  const [activeTab, setActiveTab] = useState<string>("status")

  const conservationData = {
    status: {
      title: "Status de Conservação",
      icon: Shield,
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-50 to-emerald-50",
      status: "Pouco Preocupante (LC)",
      statusColor: "from-green-500 to-emerald-500",
      description: "A capivara está atualmente em uma situação relativamente estável",
      items: [
        {
          label: "Classificação IUCN",
          value: "Pouco Preocupante (LC)",
          icon: CheckCircle,
          color: "text-green-600",
          description: "Status oficial da União Internacional para Conservação da Natureza"
        },
        {
          label: "População Global",
          value: "Estável",
          icon: TrendingUp,
          color: "text-green-600",
          description: "População estável na maior parte de sua distribuição"
        },
        {
          label: "Tendência",
          value: "Estável com variações locais",
          icon: Eye,
          color: "text-blue-600",
          description: "Algumas populações locais podem estar em declínio"
        },
        {
          label: "Distribuição",
          value: "Ampla distribuição",
          icon: Globe,
          color: "text-blue-600",
          description: "Presente em grande parte da América do Sul"
        }
      ]
    },
    ameacas: {
      title: "Principais Ameaças",
      icon: AlertTriangle,
      color: "from-orange-500 to-red-500",
      bgColor: "from-orange-50 to-red-50",
      status: "Ameaças Significativas",
      statusColor: "from-orange-500 to-red-500",
      description: "Várias pressões humanas ameaçam as populações de capivaras",
      items: [
        {
          label: "Perda de Habitat",
          value: "Deforestação e urbanização",
          icon: TreePine,
          color: "text-red-600",
          description: "Destruição de áreas naturais para agricultura e desenvolvimento"
        },
        {
          label: "Poluição Hídrica",
          value: "Contaminação de rios e lagos",
          icon: AlertCircle,
          color: "text-orange-600",
          description: "Poluição industrial e agrícola afeta os habitats aquáticos"
        },
        {
          label: "Caça Ilegal",
          value: "Consumo de carne e couro",
          icon: Target,
          color: "text-red-600",
          description: "Caça não regulamentada para fins comerciais"
        },
        {
          label: "Mudanças Climáticas",
          value: "Alterações nos padrões climáticos",
          icon: Zap,
          color: "text-orange-600",
          description: "Impactos no habitat e disponibilidade de água"
        }
      ]
    },
    medidas: {
      title: "Medidas de Conservação",
      icon: Users,
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-50 to-cyan-50",
      status: "Ações em Andamento",
      statusColor: "from-blue-500 to-cyan-500",
      description: "Diversas iniciativas estão sendo implementadas para proteger as capivaras",
      items: [
        {
          label: "Áreas Protegidas",
          value: "Parques nacionais e reservas",
          icon: Shield,
          color: "text-blue-600",
          description: "Criação e manutenção de unidades de conservação"
        },
        {
          label: "Educação Ambiental",
          value: "Programas educativos",
          icon: Lightbulb,
          color: "text-blue-600",
          description: "Conscientização sobre a importância da conservação"
        },
        {
          label: "Legislação",
          value: "Proteção legal",
          icon: CheckCircle,
          color: "text-green-600",
          description: "Leis que protegem a espécie e seu habitat"
        },
        {
          label: "Monitoramento",
          value: "Pesquisas científicas",
          icon: Eye,
          color: "text-blue-600",
          description: "Acompanhamento das populações e habitats"
        }
      ]
    },
    acoes: {
      title: "Como Você Pode Ajudar",
      icon: Heart,
      color: "from-pink-500 to-rose-500",
      bgColor: "from-pink-50 to-rose-50",
      status: "Ações Individuais",
      statusColor: "from-pink-500 to-rose-500",
      description: "Pequenas ações podem fazer uma grande diferença na conservação",
      items: [
        {
          label: "Apoio Financeiro",
          value: "Organizações de conservação",
          icon: HandHeart,
          color: "text-pink-600",
          description: "Contribua com ONGs que trabalham pela conservação"
        },
        {
          label: "Turismo Responsável",
          value: "Práticas sustentáveis",
          icon: Globe,
          color: "text-blue-600",
          description: "Escolha operadores que respeitam o meio ambiente"
        },
        {
          label: "Consumo Consciente",
          value: "Produtos certificados",
          icon: CheckCircle,
          color: "text-green-600",
          description: "Evite produtos de origem ilegal ou não sustentável"
        },
        {
          label: "Educação e Divulgação",
          value: "Compartilhe conhecimento",
          icon: Lightbulb,
          color: "text-yellow-600",
          description: "Ajude a conscientizar outras pessoas"
        }
      ]
    }
  }

  return (
    <section id="conservacao" className="relative py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/60 via-blue-50/30 to-pink-50/40"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(16,185,129,0.08),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(236,72,153,0.06),transparent_50%)]"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 right-1/4 w-24 h-24 bg-emerald-200/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 left-1/3 w-20 h-20 bg-pink-200/20 rounded-full blur-xl animate-pulse delay-1000"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-3 mb-6 p-4 bg-white/60 backdrop-blur-sm rounded-2xl border border-emerald-200/50 shadow-lg">
              <Shield className="w-8 h-8 text-emerald-600" />
              <Badge variant="secondary" className="bg-gradient-to-r from-emerald-100 to-green-100 text-emerald-700 border-emerald-200">
                Conservação
              </Badge>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 bg-gradient-to-r from-emerald-600 via-blue-600 to-pink-600 bg-clip-text text-transparent">
              Status de Conservação
            </h2>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Entenda o estado atual das populações de capivaras, as ameaças que enfrentam 
              e como podemos ajudar a protegê-las para as futuras gerações
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {Object.entries(conservationData).map(([key, data]) => {
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
              const data = conservationData[activeTab as keyof typeof conservationData]
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
                    
                    {/* Status Badge */}
                    <div className="inline-flex items-center space-x-3 p-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200/50 shadow-lg">
                      <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${data.statusColor}`}></div>
                      <Badge 
                        variant="secondary" 
                        className={`bg-gradient-to-r ${data.statusColor} text-white border-0 shadow-lg`}
                      >
                        {data.status}
                      </Badge>
                    </div>
                    
                    <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
                      {data.description}
                    </p>
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
                                <p className={`text-lg font-semibold mb-2 ${item.color}`}>
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

          {/* Call to Action Section */}
          <Card className="max-w-4xl mx-auto bg-gradient-to-br from-emerald-50 to-blue-50 border-0 shadow-xl shadow-emerald-100/50">
            <CardHeader className="text-center">
              <div className="inline-flex items-center space-x-3 mb-4 p-3 bg-white/80 backdrop-blur-sm rounded-xl border border-emerald-200/50">
                <Heart className="w-6 h-6 text-emerald-600" />
                <span className="font-semibold text-emerald-700">Faça a Diferença</span>
              </div>
              <CardTitle className="text-2xl font-bold text-gray-800">
                A Conservação Começa com Você
              </CardTitle>
            </CardHeader>
            
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="text-center p-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Eye className="w-10 h-10 text-white" />
                  </div>
                  <h4 className="font-bold text-gray-800 mb-2">Observe e Aprenda</h4>
                  <p className="text-sm text-gray-600">
                    Conheça mais sobre as capivaras e seus habitats para entender melhor como protegê-los
                  </p>
                </div>
                
                <div className="text-center p-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <HandHeart className="w-10 h-10 text-white" />
                  </div>
                  <h4 className="font-bold text-gray-800 mb-2">Tome Ação</h4>
                  <p className="text-sm text-gray-600">
                    Participe de iniciativas locais ou contribua com organizações de conservação
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

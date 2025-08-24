"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Sparkles, 
  Zap, 
  Crown, 
  Users, 
  Heart,
  Globe,
  Target,
  TrendingUp,
  AlertCircle,
  CheckCircle,
  Lightbulb,
  Eye,
  HandHeart,
  TreePine,
  Mountain,
  Star,
  Award,
  Trophy,
  Brain,
  Leaf,
  Droplets,
  Clock,
  Sun,
  Moon,
  Activity,
  Microscope,
  BookOpen,
  Compass,
  Shield
} from "lucide-react"
import { useState } from "react"

export function CuriositiesSection() {
  const [activeCategory, setActiveCategory] = useState<string>("fisicas")

  const curiositiesData = {
    fisicas: {
      title: "Características Físicas",
      icon: Crown,
      color: "from-yellow-500 to-orange-500",
      bgColor: "from-yellow-50 to-orange-50",
      items: [
        {
          title: "Maior Roedor do Mundo",
          description: "Podem chegar a 65 kg e 1,3 metros de comprimento, sendo maiores que muitos cães!",
          icon: Crown,
          fact: "65 kg",
          unit: "peso máximo"
        },
        {
          title: "Dentes que Nunca Param de Crescer",
          description: "Como todos os roedores, seus dentes crescem continuamente, por isso precisam roer constantemente.",
          icon: Microscope,
          fact: "Contínuo",
          unit: "crescimento"
        },
        {
          title: "Pelagem Densa e Impermeável",
          description: "Sua pelagem é adaptada para vida aquática, mantendo a temperatura corporal estável.",
          icon: Leaf,
          fact: "Impermeável",
          unit: "proteção"
        },
        {
          title: "Pés Palmados",
          description: "Adaptados para natação, permitindo que sejam excelentes nadadoras.",
          icon: Droplets,
          fact: "Palmados",
          unit: "adaptação"
        }
      ]
    },
    comportamentais: {
      title: "Comportamentos Únicos",
      icon: Brain,
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-50 to-cyan-50",
      items: [
        {
          title: "Animais Extremamente Sociais",
          description: "Vivem em grupos de 10-20 indivíduos e são conhecidas por sua natureza pacífica e tolerante.",
          icon: Users,
          fact: "10-20",
          unit: "indivíduos"
        },
        {
          title: "Comunicação por Assobios",
          description: "Comunicam-se através de vocalizações específicas para alertar sobre perigos.",
          icon: Activity,
          fact: "Assobios",
          unit: "comunicação"
        },
        {
          title: "Atividade Crepuscular",
          description: "São mais ativas ao amanhecer e entardecer, evitando o calor intenso do dia.",
          icon: Clock,
          fact: "Crepuscular",
          unit: "atividade"
        },
        {
          title: "Marcação de Território",
          description: "Marcam território com glândulas odoríferas para comunicação entre grupos.",
          icon: Target,
          fact: "Odoríferas",
          unit: "marcação"
        }
      ]
    },
    aquaticas: {
      title: "Habilidades Aquáticas",
      icon: Droplets,
      color: "from-cyan-500 to-blue-500",
      bgColor: "from-cyan-50 to-blue-50",
      items: [
        {
          title: "Excelentes Nadadoras",
          description: "Podem ficar submersas por até 5 minutos e nadar grandes distâncias para escapar de predadores.",
          icon: Droplets,
          fact: "5 min",
          unit: "submersão"
        },
        {
          title: "Velocidade na Água",
          description: "São mais rápidas na água do que em terra, podendo atingir velocidades impressionantes.",
          icon: Zap,
          fact: "35 km/h",
          unit: "velocidade"
        },
        {
          title: "Adaptações Respiratórias",
          description: "Podem fechar suas narinas e ouvidos durante mergulhos prolongados.",
          icon: Eye,
          fact: "Adaptadas",
          unit: "respiração"
        },
        {
          title: "Hábitos de Mergulho",
          description: "Mergulham para buscar plantas aquáticas e escapar de predadores terrestres.",
          icon: Activity,
          fact: "Mergulho",
          unit: "alimentação"
        }
      ]
    },
    culturais: {
      title: "Importância Cultural",
      icon: Heart,
      color: "from-pink-500 to-rose-500",
      bgColor: "from-pink-50 to-rose-50",
      items: [
        {
          title: "Símbolo de Tranquilidade",
          description: "São consideradas símbolos de paz e harmonia em muitas culturas sul-americanas.",
          icon: Heart,
          fact: "Paz",
          unit: "símbolo"
        },
        {
          title: "Proteção Legal",
          description: "No Brasil, são protegidas por lei e se tornaram ícones da fauna nacional.",
          icon: Shield,
          fact: "Protegidas",
          unit: "por lei"
        },
        {
          title: "Turismo Sustentável",
          description: "Atraem visitantes em parques urbanos, promovendo educação ambiental.",
          icon: Globe,
          fact: "Turismo",
          unit: "sustentável"
        },
        {
          title: "Educação Ambiental",
          description: "Servem como espécies bandeira para conscientização sobre conservação.",
          icon: BookOpen,
          fact: "Educação",
          unit: "ambiental"
        }
      ]
    }
  }

  const funFacts = [
    {
      icon: Star,
      title: "Recorde Mundial",
      value: "Maior roedor",
      description: "Reconhecido pelo Guinness Book"
    },
    {
      icon: Trophy,
      title: "Velocidade",
      value: "35 km/h",
      description: "Na água e terra"
    },
    {
      icon: Award,
      title: "Longevidade",
      value: "8-10 anos",
      description: "Na natureza"
    },
    {
      icon: Clock,
      title: "Gestação",
      value: "150 dias",
      description: "Período completo"
    }
  ]

  return (
    <section id="curiosidades" className="relative py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-50/60 via-orange-50/30 to-pink-50/40"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(251,191,36,0.08),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(236,72,153,0.06),transparent_50%)]"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-1/4 w-24 h-24 bg-yellow-200/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-1/3 w-20 h-20 bg-pink-200/20 rounded-full blur-xl animate-pulse delay-1000"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-3 mb-6 p-4 bg-white/60 backdrop-blur-sm rounded-2xl border border-yellow-200/50 shadow-lg">
              <Sparkles className="w-8 h-8 text-yellow-600" />
              <Badge variant="secondary" className="bg-gradient-to-r from-yellow-100 to-orange-100 text-yellow-700 border-yellow-200">
                Curiosidades
              </Badge>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 bg-gradient-to-r from-yellow-600 via-orange-600 to-pink-600 bg-clip-text text-transparent">
              Curiosidades Fascinantes
            </h2>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Descubra fatos incríveis e surpreendentes sobre as capivaras, desde suas características 
              físicas únicas até seu comportamento social fascinante
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {Object.entries(curiositiesData).map(([key, data]) => {
              const IconComponent = data.icon
              return (
                <button
                  key={key}
                  onClick={() => setActiveCategory(key)}
                  className={`group flex items-center space-x-3 px-6 py-4 rounded-2xl border-2 transition-all duration-300 ${
                    activeCategory === key
                      ? `border-${data.color.split('-')[1]}-400 bg-gradient-to-r ${data.bgColor} shadow-lg`
                      : 'border-gray-200 bg-white/80 backdrop-blur-sm hover:border-gray-300'
                  }`}
                >
                  <div className={`p-2 rounded-xl transition-all duration-300 ${
                    activeCategory === key
                      ? `bg-gradient-to-r ${data.color} text-white shadow-lg`
                      : 'bg-gray-100 text-gray-600 group-hover:bg-gray-200'
                  }`}>
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <span className={`font-semibold transition-colors duration-300 ${
                    activeCategory === key
                      ? 'text-gray-800'
                      : 'text-gray-600 group-hover:text-gray-800'
                  }`}>
                    {data.title}
                  </span>
                </button>
              )
            })}
          </div>

          {/* Active Category Content */}
          <div className="mb-12">
            {(() => {
              const data = curiositiesData[activeCategory as keyof typeof curiositiesData]
              const IconComponent = data.icon
              
              return (
                <Card className="max-w-6xl mx-auto bg-white/80 backdrop-blur-sm border-0 shadow-2xl shadow-yellow-100/50 transition-all duration-300 hover:shadow-3xl hover:shadow-yellow-200/50">
                  <CardHeader className="text-center pb-8">
                    <div className="inline-flex items-center space-x-3 mb-6 p-4 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-2xl border border-yellow-200/50">
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${data.color} text-white shadow-lg`}>
                        <IconComponent className="w-8 h-8" />
                      </div>
                      <span className="text-xl font-bold text-yellow-700">{data.title}</span>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-8">
                      {data.items.map((item, index) => {
                        const ItemIcon = item.icon
                        return (
                          <div
                            key={index}
                            className="group p-6 rounded-xl border-2 border-gray-200 hover:border-yellow-300 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
                          >
                            <div className="flex items-start space-x-4">
                              <div className={`p-3 rounded-xl bg-gradient-to-r ${data.color} text-white shadow-lg`}>
                                <ItemIcon className="w-6 h-6" />
                              </div>
                              <div className="flex-1">
                                <h4 className="font-bold text-gray-800 mb-2 group-hover:text-yellow-700 transition-colors duration-300">
                                  {item.title}
                                </h4>
                                <div className="mb-3">
                                  <span className="text-2xl font-black bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                                    {item.fact}
                                  </span>
                                  <span className="text-sm text-gray-500 ml-2">
                                    {item.unit}
                                  </span>
                                </div>
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
          <Card className="max-w-5xl mx-auto bg-gradient-to-br from-orange-50 to-yellow-50 border-0 shadow-xl shadow-orange-100/50 mb-12">
            <CardHeader className="text-center">
              <div className="inline-flex items-center space-x-3 mb-4 p-3 bg-white/80 backdrop-blur-sm rounded-xl border border-orange-200/50">
                <Trophy className="w-6 h-6 text-orange-600" />
                <span className="font-semibold text-orange-700">Recordes e Números</span>
              </div>
              <CardTitle className="text-2xl font-bold text-gray-800">
                Fatos Surpreendentes
              </CardTitle>
            </CardHeader>
            
            <CardContent>
              <div className="grid md:grid-cols-4 gap-6">
                {funFacts.map((fact, index) => (
                  <div key={index} className="text-center p-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <fact.icon className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="font-bold text-gray-800 mb-2">{fact.title}</h4>
                    <p className="text-2xl font-black text-orange-600 mb-1">{fact.value}</p>
                    <p className="text-sm text-gray-600">{fact.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Cultural Importance Section */}
          <Card className="max-w-4xl mx-auto bg-gradient-to-br from-pink-50 to-rose-50 border-0 shadow-xl shadow-pink-100/50">
            <CardHeader className="text-center">
              <div className="inline-flex items-center space-x-3 mb-4 p-3 bg-white/80 backdrop-blur-sm rounded-xl border border-pink-200/50">
                <Heart className="w-6 h-6 text-pink-600" />
                <span className="font-semibold text-pink-700">Importância Cultural</span>
              </div>
              <CardTitle className="text-2xl font-bold text-gray-800">
                Símbolos de Harmonia
              </CardTitle>
            </CardHeader>
            
            <CardContent>
              <div className="text-center p-6">
                <div className="w-24 h-24 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Globe className="w-12 h-12 text-white" />
                </div>
                <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
                  As capivaras são consideradas símbolos de tranquilidade e harmonia em muitas culturas sul-americanas.
                  No Brasil, são protegidas por lei e se tornaram ícones da fauna nacional, frequentemente aparecendo em
                  parques urbanos e sendo admiradas por sua natureza dócil e pacífica.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

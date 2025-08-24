"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  ArrowUp, 
  BookOpen, 
  Users, 
  Globe, 
  X, 
  Instagram, 
  Heart,
  Shield,
  Leaf,
  Camera,
  Zap,
  Star,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  ChevronUp,
  ChevronDown
} from "lucide-react"
import { useState } from "react"

export function Footer() {
  const [showBibliography, setShowBibliography] = useState(false)
  const [showConservation, setShowConservation] = useState(false)
  const [expandedSection, setExpandedSection] = useState<string | null>(null)

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const toggleBibliography = () => {
    setShowBibliography(!showBibliography)
  }

  const toggleConservation = () => {
    setShowConservation(!showConservation)
  }

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section)
  }

  const footerSections = [
    {
      title: "Sobre o Projeto",
      icon: Star,
      color: "from-yellow-500 to-orange-500",
      items: [
        "Educação Ambiental",
        "Conservação da Biodiversidade",
        "Pesquisa Científica",
        "Desenvolvimento Sustentável"
      ]
    },
    {
      title: "Recursos",
      icon: BookOpen,
      color: "from-blue-500 to-cyan-500",
      items: [
        "Biblioteca Digital",
        "Artigos Científicos",
        "Vídeos Educativos",
        "Infográficos"
      ]
    },
    {
      title: "Conservação",
      icon: Leaf,
      color: "from-green-500 to-emerald-500",
      items: [
        "Projetos Ativos",
        "Como Ajudar",
        "Voluntariado",
        "Doações"
      ]
    }
  ]

  const quickLinks = [
    { label: "Início", href: "#inicio" },
    { label: "Taxonomia", href: "#taxonomia" },
    { label: "Geografia", href: "#geografia" },
    { label: "Biologia", href: "#biologia" },
    { label: "Conservação", href: "#conservacao" },
    { label: "Curiosidades", href: "#curiosidades" },
    { label: "Galeria", href: "#galeria" }
  ]

  return (
    <>
      <footer className="relative bg-gradient-to-br from-gray-900 via-green-900 to-emerald-900 py-20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(34,197,94,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(16,185,129,0.08),transparent_50%)]"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-10 left-1/4 w-16 h-16 bg-green-400/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-1/3 w-20 h-20 bg-emerald-400/20 rounded-full blur-xl animate-pulse delay-1000"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            {/* Back to Top Button */}
            <div className="text-center mb-16">
              <Button
                onClick={scrollToTop}
                className="group bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white border-0 px-8 py-4 rounded-2xl shadow-xl hover:shadow-2xl hover:scale-110 transition-all duration-500"
              >
                <ArrowUp className="h-5 w-5 mr-2 group-hover:-translate-y-1 transition-transform duration-300" />
                Voltar ao Topo
              </Button>
            </div>

            {/* Main Footer Content */}
            <div className="grid lg:grid-cols-4 gap-8 mb-16">
              {/* Project Info */}
              <div className="lg:col-span-2">
                <div className="mb-8">
                  <div className="inline-flex items-center space-x-3 mb-6 p-3 bg-white/10 backdrop-blur-sm rounded-2xl border border-green-400/30">
                    <Star className="w-8 h-8 text-yellow-400" />
                    <Badge variant="secondary" className="bg-gradient-to-r from-yellow-100 to-orange-100 text-yellow-700 border-yellow-200">
                      Projeto Educacional
                    </Badge>
                  </div>
                  
                  <h3 className="text-3xl font-bold text-white mb-4">
                    Capivara: O Maior Roedor do Mundo
                  </h3>
                  
                  <p className="text-green-100 leading-relaxed text-lg mb-6">
                    Um projeto educacional dedicado à conscientização sobre a importância das capivaras 
                    na biodiversidade sul-americana e na conservação ambiental.
                  </p>

                  {/* Quick Links */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {quickLinks.map((link, index) => (
                      <a
                        key={index}
                        href={link.href}
                        className="text-green-200 hover:text-white transition-colors duration-300 hover:scale-105 transform inline-block"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Footer Sections */}
              <div className="lg:col-span-2">
                <div className="grid md:grid-cols-3 gap-6">
                  {footerSections.map((section, index) => {
                    const IconComponent = section.icon
                    return (
                      <div key={index} className="space-y-4">
                        <div className="flex items-center space-x-3 mb-4">
                          <div className={`p-2 rounded-xl bg-gradient-to-r ${section.color} text-white shadow-lg`}>
                            <IconComponent className="w-5 h-5" />
                          </div>
                          <h4 className="font-semibold text-white">{section.title}</h4>
                        </div>
                        
                        <ul className="space-y-2">
                          {section.items.map((item, itemIndex) => (
                            <li key={itemIndex}>
                              <a 
                                href="#" 
                                className="text-green-200 hover:text-white transition-colors duration-300 text-sm hover:scale-105 transform inline-block"
                              >
                                {item}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>

            {/* Interactive Cards */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <Card
                className="group relative overflow-hidden bg-white/10 backdrop-blur-sm border border-green-400/30 hover:border-green-400/50 transition-all duration-500 hover:scale-105 cursor-pointer"
                onClick={toggleBibliography}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <CardContent className="p-6 text-center relative z-10">
                  <div className="p-4 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg mx-auto mb-4 w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <BookOpen className="h-8 w-8" />
                  </div>
                  <h3 className="font-semibold mb-3 text-white text-lg">Bibliografia</h3>
                  <p className="text-green-100 text-sm leading-relaxed">
                    Informações baseadas em estudos científicos e organizações de conservação e proteção animal.
                  </p>
                  <div className="mt-4 flex items-center justify-center space-x-2 text-blue-300 group-hover:text-blue-200 transition-colors duration-300">
                    <span className="text-sm">Ver fontes</span>
                    <ExternalLink className="w-4 h-4" />
                  </div>
                </CardContent>
              </Card>

              <Card
                className="group relative overflow-hidden bg-white/10 backdrop-blur-sm border border-green-400/30 hover:border-green-400/50 transition-all duration-500 hover:scale-105 cursor-pointer"
                onClick={toggleConservation}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-emerald-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <CardContent className="p-6 text-center relative z-10">
                  <div className="p-4 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg mx-auto mb-4 w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Users className="h-8 w-8" />
                  </div>
                  <h3 className="font-semibold mb-3 text-white text-lg">Conservação</h3>
                  <p className="text-green-100 text-sm leading-relaxed">
                    Apoie organizações que trabalham pela proteção das capivaras
                  </p>
                  <div className="mt-4 flex items-center justify-center space-x-2 text-green-300 group-hover:text-green-200 transition-colors duration-300">
                    <span className="text-sm">Saiba mais</span>
                    <ExternalLink className="w-4 h-4" />
                  </div>
                </CardContent>
              </Card>

              <Card className="group relative overflow-hidden bg-white/10 backdrop-blur-sm border border-green-400/30 hover:border-green-400/50 transition-all duration-500 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <CardContent className="p-6 text-center relative z-10">
                  <div className="p-4 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg mx-auto mb-4 w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Globe className="h-8 w-8" />
                  </div>
                  <h3 className="font-semibold mb-3 text-white text-lg">Educação</h3>
                  <p className="text-green-100 text-sm leading-relaxed">
                    Compartilhe conhecimento sobre a importância da biodiversidade
                  </p>
                  <div className="mt-4 flex items-center justify-center space-x-2 text-purple-300 group-hover:text-purple-200 transition-colors duration-300">
                    <span className="text-sm">Aprender</span>
                    <Zap className="w-4 h-4" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Organizations Section */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center space-x-3 mb-6 p-3 bg-white/10 backdrop-blur-sm rounded-2xl border border-green-400/30">
                <Shield className="w-6 h-6 text-green-400" />
                <span className="font-semibold text-green-300">Organizações Recomendadas</span>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                {[
                  "WWF Brasil",
                  "Instituto Chico Mendes (ICMBio)",
                  "SOS Pantanal",
                  "Fundação SOS Mata Atlântica"
                ].map((org, index) => (
                  <div
                    key={index}
                    className="p-3 bg-white/5 backdrop-blur-sm rounded-xl border border-green-400/20 hover:border-green-400/40 transition-all duration-300 hover:scale-105 cursor-pointer"
                  >
                    <span className="text-green-200 hover:text-white transition-colors duration-300 font-medium">
                      {org}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Social and Contact */}
            <div className="flex flex-col md:flex-row items-center justify-between mb-12 space-y-6 md:space-y-0">
              <div className="flex items-center space-x-6">
                <a
                  href="https://instagram.com/ds.etec"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center space-x-3 text-white hover:text-green-300 transition-all duration-300 hover:scale-105 transform"
                >
                  <div className="p-3 rounded-xl bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Instagram className="h-5 w-5" />
                  </div>
                  <span className="font-medium">@ds.etec</span>
                </a>
              </div>

              <div className="flex items-center space-x-4 text-green-200">
                <div className="flex items-center space-x-2">
                  <span className="text-sm">Feito por</span>
                  <span className="text-sm font-bold">Victor, Samy, Giovani e Atilio.</span>
                </div>
              </div>
            </div>

            {/* Copyright */}
            <div className="border-t border-green-400/30 text-center pt-8">
              <p className="text-sm text-green-200 font-medium">
                © Gente Grande etec's version 2025 • 3°DS Etec João Belarmino
              </p>
              <p className="text-xs text-green-300 mt-2">
                Projeto educacional com a Professora Taline.
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Enhanced Bibliography Modal */}
      {showBibliography && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="p-8">
              <div className="flex justify-between items-center mb-8">
                <div className="flex items-center space-x-3">
                  <div className="p-3 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg">
                    <BookOpen className="h-8 w-8" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-800">Bibliografia e Fontes</h2>
                </div>
                <Button 
                  onClick={toggleBibliography} 
                  variant="ghost" 
                  size="sm" 
                  className="hover:bg-blue-100 p-3 rounded-xl"
                >
                  <X className="h-6 w-6" />
                </Button>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {[
                  {
                    title: "Fontes Científicas",
                    items: [
                      { name: "IUCN Red List - Hydrochoerus hydrochaeris", url: "https://www.iucnredlist.org/species/10300/22190005" },
                      { name: "National Center for Biotechnology Information", url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3045126/" },
                      { name: "Journal of Mammalogy", url: "https://academic.oup.com/jmammal" }
                    ]
                  },
                  {
                    title: "Organizações de Conservação",
                    items: [
                      { name: "WWF Brasil", url: "https://www.wwf.org.br/" },
                      { name: "Instituto Chico Mendes de Conservação da Biodiversidade", url: "https://www.icmbio.gov.br/" },
                      { name: "SOS Pantanal", url: "https://www.sospantanal.org.br/" },
                      { name: "Fundação SOS Mata Atlântica", url: "https://www.sosma.org.br/" }
                    ]
                  }
                ].map((section, sectionIndex) => (
                  <div key={sectionIndex} className="space-y-4">
                    <h3 className="font-bold text-blue-700 text-lg flex items-center">
                      <Shield className="w-5 h-5 mr-2" />
                      {section.title}
                    </h3>
                    <ul className="space-y-3">
                      {section.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors duration-300">
                          <a
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800 transition-colors duration-300 flex items-center justify-between group"
                          >
                            <span className="text-sm">{item.name}</span>
                            <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Enhanced Conservation Modal */}
      {showConservation && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="p-8">
              <div className="flex justify-between items-center mb-8">
                <div className="flex items-center space-x-3">
                  <div className="p-3 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg">
                    <Users className="h-8 w-8" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-800">Organizações de Proteção Animal</h2>
                </div>
                <Button 
                  onClick={toggleConservation} 
                  variant="ghost" 
                  size="sm" 
                  className="hover:bg-green-100 p-3 rounded-xl"
                >
                  <X className="h-6 w-6" />
                </Button>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {[
                  {
                    title: "Organizações Internacionais",
                    items: [
                      { name: "World Wildlife Fund (WWF)", url: "https://www.worldwildlife.org/" },
                      { name: "PETA - People for the Ethical Treatment of Animals", url: "https://www.peta.org/" },
                      { name: "The Humane Society of the United States", url: "https://www.hsus.org/" },
                      { name: "FOUR PAWS International", url: "https://www.four-paws.org/" }
                    ]
                  },
                  {
                    title: "Organizações Brasileiras",
                    items: [
                      { name: "WWF Brasil", url: "https://www.wwf.org.br/" },
                      { name: "SOS Pantanal", url: "https://www.sospantanal.org.br/" },
                      { name: "Fundação SOS Mata Atlântica", url: "https://www.sosma.org.br/" },
                      { name: "Instituto Chico Mendes (ICMBio)", url: "https://www.icmbio.gov.br/" }
                    ]
                  }
                ].map((section, sectionIndex) => (
                  <div key={sectionIndex} className="space-y-4">
                    <h3 className="font-bold text-green-700 text-lg flex items-center">
                      <Leaf className="w-5 h-5 mr-2" />
                      {section.title}
                    </h3>
                    <ul className="space-y-3">
                      {section.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="p-3 bg-green-50 rounded-lg hover:bg-green-100 transition-colors duration-300">
                          <a
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-green-600 hover:text-green-800 transition-colors duration-300 flex items-center justify-between group"
                          >
                            <span className="text-sm">{item.name}</span>
                            <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

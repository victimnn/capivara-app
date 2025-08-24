"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronDown, Heart, Users, Globe, Leaf } from "lucide-react"

export function Hero() {
  return (
    <section id="inicio" className="relative pt-24 pb-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-blue-50"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          {/* Main Title */}
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-4 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              Capivara
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto rounded-full"></div>
          </div>

          {/* Subtitle */}
          <p className="text-2xl md:text-3xl text-gray-700 mb-12 font-medium">
            O maior roedor do mundo
          </p>

          {/* Hero Image */}
          <div className="mb-12 group">
            <img
              src="/images/capybara_water_habitat.png"
              alt="Capivara em seu habitat natural"
              className="w-full max-w-3xl mx-auto rounded-2xl shadow-xl transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-lg"
            />
          </div>

          {/* Description Card */}
          <Card className="max-w-4xl mx-auto bg-white/90 backdrop-blur-sm border-0 shadow-xl transition-all duration-300 hover:shadow-lg hover:bg-white/95">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div className="flex items-center justify-center space-x-3 p-4 bg-green-50 rounded-xl border border-green-100 transition-all duration-300 hover:bg-green-100/70 hover:border-green-200">
                  <Globe className="w-6 h-6 text-green-600" />
                  <span className="font-semibold text-gray-700">América do Sul</span>
                </div>
                <div className="flex items-center justify-center space-x-3 p-4 bg-blue-50 rounded-xl border border-blue-100 transition-all duration-300 hover:bg-blue-100/70 hover:border-blue-200">
                  <Leaf className="w-6 h-6 text-blue-600" />
                  <span className="font-semibold text-gray-700">Semi-aquático</span>
                </div>
                <div className="flex items-center justify-center space-x-3 p-4 bg-emerald-50 rounded-xl border border-emerald-100 transition-all duration-300 hover:bg-emerald-100/70 hover:border-emerald-200">
                  <Heart className="w-6 h-6 text-emerald-600" />
                  <span className="font-semibold text-gray-700">Biodiversidade</span>
                </div>
              </div>
              
              <p className="text-lg leading-relaxed text-gray-700 text-center">
                A capivara é o maior roedor do mundo e um dos animais mais fascinantes da América do Sul. 
                Conhecida por sua natureza pacífica e sociável, este mamífero semi-aquático habita áreas 
                próximas a rios, lagos e pântanos, sendo um símbolo da biodiversidade sul-americana.
              </p>
            </CardContent>
          </Card>

          {/* Roblox Game Section */}
          <div className="mt-12 mb-8">
            <Card className="max-w-4xl mx-auto bg-gradient-to-r from-orange-50 via-yellow-50 to-orange-50 border-2 border-orange-200 shadow-xl hover:shadow-2xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="text-center">
                  <div className="inline-flex items-center space-x-3 mb-4 p-3 bg-orange-100 rounded-full">
                    <span className="text-2xl">🎮</span>
                    <span className="text-orange-700 font-bold text-lg">Capivara Simulator!</span>
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-bold text-orange-800 mb-4">
                    Viva como uma Capivara no Roblox!
                  </h3>
                  
                  <p className="text-lg text-orange-700 mb-6 leading-relaxed">
                    Entre em uma aventura onde você <span className="font-bold">é uma capivara</span> em busca da liberdade, 
                    explore habitats naturais e aprenda sobre esses animais incríveis de forma única!
                  </p>
                  
                  <div className="flex flex-wrap justify-center gap-3 mb-6">
                    <span className="px-4 py-2 bg-orange-200 text-orange-800 rounded-full text-sm font-semibold">🏊‍♂️ Natação</span>
                    <span className="px-4 py-2 bg-orange-200 text-orange-800 rounded-full text-sm font-semibold">🌿 Exploração</span>
                    <span className="px-4 py-2 bg-orange-200 text-orange-800 rounded-full text-sm font-semibold">🦦 Interação</span>
                    <span className="px-4 py-2 bg-orange-200 text-orange-800 rounded-full text-sm font-semibold">🎯 Desafios</span>
                  </div>
                  
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-10 py-6 text-xl font-bold rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                    onClick={() => window.open('https://www.roblox.com/games/your-game-id', '_blank')}
                  >
                    🚀 JOGAR AGORA!
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Call to Action */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 py-6 text-lg font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => document.getElementById('taxonomia')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explorar Capivaras
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="mt-16">
            <div className="flex flex-col items-center space-y-2 text-gray-500">
              <span className="text-sm font-medium">Role para descobrir mais</span>
              <ChevronDown className="w-6 h-6" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

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

          {/* Call to Action */}
          <div className="mt-12">
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

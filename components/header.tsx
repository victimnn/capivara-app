"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
    setIsMenuOpen(false)
  }

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/80 backdrop-blur-xl border-b border-green-200/50 shadow-lg shadow-green-100/20' 
        : 'bg-white/40 backdrop-blur-md border-b border-green-100/30 shadow-sm'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-green-600 hover:text-green-700 cursor-pointer transition-all duration-500 hover:scale-110 hover:drop-shadow-lg">
            Capivara
          </h1>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection("inicio")}
              className="group relative text-gray-700 hover:text-green-600 transition-all duration-500 hover:scale-105 font-medium"
            >
              <span className="relative z-10">Início</span>
              <div className="absolute inset-0 bg-gradient-to-r from-green-50 to-green-100 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-500 scale-95 group-hover:scale-100 -z-10"></div>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-green-500 to-green-600 group-hover:w-full transition-all duration-500 ease-out"></div>
            </button>
            <button
              onClick={() => scrollToSection("taxonomia")}
              className="group relative text-gray-700 hover:text-green-600 transition-all duration-500 hover:scale-105 font-medium"
            >
              <span className="relative z-10">Taxonomia</span>
              <div className="absolute inset-0 bg-gradient-to-r from-green-50 to-green-100 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-500 scale-95 group-hover:scale-100 -z-10"></div>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-green-500 to-green-600 group-hover:w-full transition-all duration-500 ease-out"></div>
            </button>
            <button
              onClick={() => scrollToSection("geografia")}
              className="group relative text-gray-700 hover:text-green-600 transition-all duration-500 hover:scale-105 font-medium"
            >
              <span className="relative z-10">Geografia</span>
              <div className="absolute inset-0 bg-gradient-to-r from-green-50 to-green-100 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-500 scale-95 group-hover:scale-100 -z-10"></div>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-green-500 to-green-600 group-hover:w-full transition-all duration-500 ease-out"></div>
            </button>
            <button
              onClick={() => scrollToSection("biologia")}
              className="group relative text-gray-700 hover:text-green-600 transition-all duration-500 hover:scale-105 font-medium"
            >
              <span className="relative z-10">Biologia</span>
              <div className="absolute inset-0 bg-gradient-to-r from-green-50 to-green-100 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-500 scale-95 group-hover:scale-100 -z-10"></div>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-green-500 to-green-600 group-hover:w-full transition-all duration-500 ease-out"></div>
            </button>
            <button
              onClick={() => scrollToSection("conservacao")}
              className="group relative text-gray-700 hover:text-green-600 transition-all duration-500 hover:scale-105 font-medium"
            >
              <span className="relative z-10">Conservação</span>
              <div className="absolute inset-0 bg-gradient-to-r from-green-50 to-green-100 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-500 scale-95 group-hover:scale-100 -z-10"></div>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-green-500 to-green-600 group-hover:w-full transition-all duration-500 ease-out"></div>
            </button>
            <button
              onClick={() => scrollToSection("curiosidades")}
              className="group relative text-gray-700 hover:text-green-600 transition-all duration-500 hover:scale-105 font-medium"
            >
              <span className="relative z-10">Curiosidades</span>
              <div className="absolute inset-0 bg-gradient-to-r from-green-50 to-green-100 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-500 scale-95 group-hover:scale-100 -z-10"></div>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-green-500 to-green-600 group-hover:w-full transition-all duration-500 ease-out"></div>
            </button>
            <button
              onClick={() => scrollToSection("galeria")}
              className="group relative text-gray-700 hover:text-green-600 transition-all duration-500 hover:scale-105 font-medium"
            >
              <span className="relative z-10">Galeria</span>
              <div className="absolute inset-0 bg-gradient-to-r from-green-50 to-green-100 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-500 scale-95 group-hover:scale-100 -z-10"></div>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-green-500 to-green-600 group-hover:w-full transition-all duration-500 ease-out"></div>
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden hover:bg-green-50/80 hover:text-green-600 transition-all duration-500 hover:scale-110 hover:shadow-lg hover:shadow-green-100/50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 space-y-2 bg-white/90 backdrop-blur-xl rounded-xl border border-green-200/50 p-4 shadow-xl shadow-green-100/20 animate-in slide-in-from-top-2 duration-300">
            <button
              onClick={() => scrollToSection("inicio")}
              className="group block w-full text-left py-3 px-4 text-gray-700 hover:text-green-600 hover:bg-gradient-to-r hover:from-green-50 hover:to-green-100/50 transition-all duration-500 rounded-lg hover:translate-x-2 hover:shadow-md hover:shadow-green-100/30"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection("taxonomia")}
              className="group block w-full text-left py-3 px-4 text-gray-700 hover:text-green-600 hover:bg-gradient-to-r hover:from-green-50 hover:to-green-100/50 transition-all duration-500 rounded-lg hover:translate-x-2 hover:shadow-md hover:shadow-green-100/30"
            >
              Taxonomia
            </button>
            <button
              onClick={() => scrollToSection("geografia")}
              className="group block w-full text-left py-3 px-4 text-gray-700 hover:text-green-600 hover:bg-gradient-to-r hover:from-green-50 hover:to-green-100/50 transition-all duration-500 rounded-lg hover:translate-x-2 hover:shadow-md hover:shadow-green-100/30"
            >
              Geografia
            </button>
            <button
              onClick={() => scrollToSection("biologia")}
              className="group block w-full text-left py-3 px-4 text-gray-700 hover:text-green-600 hover:bg-gradient-to-r hover:from-green-50 hover:to-green-100/50 transition-all duration-500 rounded-lg hover:translate-x-2 hover:shadow-md hover:shadow-green-100/30"
            >
              Biologia
            </button>
            <button
              onClick={() => scrollToSection("conservacao")}
              className="group block w-full text-left py-3 px-4 text-gray-700 hover:text-green-600 hover:bg-gradient-to-r hover:from-green-50 hover:to-green-100/50 transition-all duration-500 rounded-lg hover:translate-x-2 hover:shadow-md hover:shadow-green-100/30"
            >
              Conservação
            </button>
            <button
              onClick={() => scrollToSection("curiosidades")}
              className="group block w-full text-left py-3 px-4 text-gray-700 hover:text-green-600 hover:bg-gradient-to-r hover:from-green-50 hover:to-green-100/50 transition-all duration-500 rounded-lg hover:translate-x-2 hover:shadow-md hover:shadow-green-100/30"
            >
              Curiosidades
            </button>
            <button
              onClick={() => scrollToSection("galeria")}
              className="group block w-full text-left py-3 px-4 text-gray-700 hover:text-green-600 hover:bg-gradient-to-r hover:from-green-50 hover:to-green-100/50 transition-all duration-500 rounded-lg hover:translate-x-2 hover:shadow-md hover:shadow-green-100/30"
            >
              Galeria
            </button>
          </nav>
        )}
      </div>
    </header>
  )
}

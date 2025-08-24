import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"

export const metadata: Metadata = {
  title: "Capivara - O Maior Roedor do Mundo",
  description:
    "Site completo sobre capivaras: taxonomia, habitat, comportamento, conservação e curiosidades sobre o maior roedor do mundo. Desenvolvido na matéria de CNAV - 2025",
  icons: {
    icon: [
      { url: '/capivara.png' },
    ],
    apple: [
      { url: '/capivara.png' },
    ],
  },
  manifest: '/site.webmanifest',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}

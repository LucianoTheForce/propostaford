import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { LanguageProvider } from "@/contexts/language-context"

export const metadata: Metadata = {
  title: "FORD × THE FORCE | Off-Road Survival Kit - Product Development Proposal",
  description: "Technical utility products proposal for Ford Off-Road Manual project - 300 high-performance survival items",
  generator: 'v0.dev',
  icons: {
    icon: [
      { url: '/ford-favicon.png', sizes: '32x32', type: 'image/png' },
      { url: '/ford-favicon.png', sizes: '16x16', type: 'image/png' }
    ],
    shortcut: '/ford-favicon.png',
    apple: '/ford-favicon.png'
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}

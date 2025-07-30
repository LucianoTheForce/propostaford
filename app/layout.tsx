import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { LanguageProvider } from "@/contexts/language-context"

export const metadata: Metadata = {
  title: "BETANO × THE FORCE | Roda Roleta - Metro Activation Proposal",
  description: "Interactive promotional activation proposal for Betano Roda Roleta at São Paulo Metro Station",
  generator: 'v0.dev',
  icons: {
    icon: [
      { url: '/betano-favicon.svg', sizes: '32x32', type: 'image/svg+xml' },
      { url: '/betano-favicon.svg', sizes: '16x16', type: 'image/svg+xml' }
    ],
    shortcut: '/betano-favicon.svg',
    apple: '/betano-favicon.svg'
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

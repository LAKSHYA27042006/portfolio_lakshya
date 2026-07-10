import type React from "react"
import type { Metadata } from "next"
import { Work_Sans, JetBrains_Mono } from "next/font/google"
import "./globals.css"

const workSans = Work_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
  weight: ["300", "400", "600", "700"],
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
})

export const metadata: Metadata = {
  title: "Lakshya SampathKumar- Full Stack Developer",
  description: "B.Tech@ VIT Vellore| Machine Learning and Artificial Intelligence Enthusiast | Full Stack Developer | Open Source Contributor | Tech Blogger",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${workSans.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  )
}

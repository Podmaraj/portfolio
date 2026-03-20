import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: "Podmaraj Portfolio",
    template: "%s | Podmaraj",
  },
  description:
    "Podmaraj Boruah — Full-Stack Developer & AI/ML enthusiast building scalable web applications and intelligent systems from Assam.",

  keywords: [
    "Podmaraj Boruah",
    "Full Stack Developer",
    "Next.js Developer",
    "AI Developer",
    "Portfolio",
    "Assam Developer",
    "React Developer",
  ],

  authors: [{ name: "Podmaraj Boruah" }],

  openGraph: {
    title: "Podmaraj Portfolio",
    description:
      "Full-stack developer building AI-powered systems and modern web applications.",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
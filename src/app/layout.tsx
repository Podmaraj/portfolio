import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '@/context/ThemeContext'

export const metadata: Metadata = {
  title: {
    default: "Podmaraj Boruah — Software Engineer & Full-Stack Developer",
    template: "%s | Podmaraj Boruah",
  },
  description:
    "Podmaraj Boruah — Software Engineer building enterprise microservices, AI-powered applications, and scalable healthcare platforms. Experienced in Next.js, React, Node.js, Python, and system design.",

  keywords: [
    "Podmaraj Boruah",
    "Sanvya Health",
    "Software Engineer",
    "Full Stack Developer",
    "Next.js Developer",
    "API Gateway",
    "Healthcare Platform",
    "AI Developer",
    "Dibrugarh Assam Developer",
  ],

  authors: [{ name: "Podmaraj Boruah" }],

  openGraph: {
    title: "Podmaraj Boruah — Software Engineer Portfolio",
    description:
      "Software Engineer building enterprise microservices, AI systems, and healthcare platforms.",
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
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-[#030712] text-zinc-100 antialiased min-h-screen selection:bg-indigo-500/30 selection:text-indigo-200">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
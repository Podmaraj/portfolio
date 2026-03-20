import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Podmaraj Boruah — Developer Terminal Portfolio',
  description: 'Podmaraj Boruah — Full-Stack Developer, AI/ML enthusiast, building systems and learning every day from Dibrugarh, Assam.',
  keywords: ['Podmaraj Boruah', 'Full Stack Developer', 'AI', 'ML', 'Portfolio', 'Terminal', 'Dibrugarh', 'Assam', 'Next.js', 'React'],
  authors: [{ name: 'Podmaraj Boruah' }],
  openGraph: {
    title: 'Podmaraj Boruah — Developer Terminal Portfolio',
    description: 'Full-stack developer building AI-powered systems from Assam.',
    type: 'website',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

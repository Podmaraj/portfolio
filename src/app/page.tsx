import Cursor from '@/components/ui/Cursor'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Education from '@/components/sections/Education'
import Skills from '@/components/sections/Skills'
import Projects from '@/components/sections/Projects'
import LearningRoad from '@/components/sections/LearningRoad'
import Quotes from '@/components/sections/Quotes'
import Contact from '@/components/sections/Contact'

export default function Home() {
  return (
    <>
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <div className="sec-divider" />
        <About />
        <div className="sec-divider" />
        <Education />
        <div className="sec-divider" />
        <Skills />
        <div className="sec-divider" />
        <Projects />
        <div className="sec-divider" />
        <LearningRoad />
        <div className="sec-divider" />
        <Quotes />
        <div className="sec-divider" />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

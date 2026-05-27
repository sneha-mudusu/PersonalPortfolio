import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import FallingLeaf from './components/FallingLeaf'

export default function App() {
  return (
    <main style={{ backgroundColor: '#E8EDE0', color: '#4A2E1A' }} className="font-sans">
      <FallingLeaf />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </main>
  )
}
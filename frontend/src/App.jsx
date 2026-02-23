import { useState, useEffect } from 'react'
import Chatbot from "./components/Chatbot"
import IntroLoader from './components/IntroLoader'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './styles/global.css'

function App() {
  const [loading, setLoading] = useState(true)
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    document.body.setAttribute('data-theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light')
  }

  if (loading) {
    return <IntroLoader onFinish={() => setLoading(false)} />
  }

  return (
    <div className="app">
      <Navbar theme={theme} onThemeChange={toggleTheme} />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Skills />
      <Contact />
      <Footer />
      <Chatbot />
    </div>
  )
}

export default App

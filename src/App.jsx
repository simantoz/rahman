import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Cursor from './components/Cursor'
import './index.css'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return <LoadingScreen />
  }

  return (
    <>
      <div className="noise-overlay" />
      <div className="bg-grid" />
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

function LoadingScreen() {
  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      background: 'var(--bg-primary)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 9999,
      gap: '24px',
    }}>
      <div style={{ position: 'relative', width: 80, height: 80 }}>
        <div style={{
          position: 'absolute',
          inset: 0,
          border: '3px solid transparent',
          borderTopColor: 'var(--blue-glow)',
          borderRadius: '50%',
          animation: 'spin-ring 1s linear infinite',
        }} />
        <div style={{
          position: 'absolute',
          inset: '10px',
          border: '3px solid transparent',
          borderTopColor: 'var(--cyan-400)',
          borderRadius: '50%',
          animation: 'spin-ring 0.7s linear infinite reverse',
        }} />
        <div style={{
          position: 'absolute',
          inset: '22px',
          background: 'var(--gradient-primary)',
          borderRadius: '50%',
          boxShadow: 'var(--shadow-neon)',
        }} />
      </div>
      <div style={{
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: '0.9rem',
        color: 'var(--blue-glow)',
        letterSpacing: '3px',
        textTransform: 'uppercase',
      }}>
        Loading...
      </div>
    </div>
  )
}

export default App

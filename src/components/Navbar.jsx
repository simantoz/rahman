import { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import './Navbar.css'

const navLinks = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [active, setActive] = useState('hero')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">
        {/* Logo */}
        <div className="navbar__logo">
          <div className="navbar__logo-icon">
            <img src="/logo/logo.png" alt="Logo" />
          </div>
          <span className="navbar__logo-text">Rahman<span className="gradient-text">.</span></span>
        </div>

        {/* Desktop Nav */}
        <nav className="navbar__nav">
          {navLinks.map(link => (
            <Link
              key={link.id}
              to={link.id}
              spy={true}
              smooth={true}
              offset={-80}
              duration={600}
              onSetActive={() => setActive(link.id)}
              className={`navbar__link ${active === link.id ? 'navbar__link--active' : ''}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <Link
          to="contact"
          smooth={true}
          duration={600}
          offset={-80}
          className="btn btn-primary navbar__cta"
        >
          Hire Me
        </Link>

        {/* Hamburger */}
        <button
          className={`navbar__hamburger ${mobileOpen ? 'open' : ''}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          id="hamburger-btn"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`navbar__mobile ${mobileOpen ? 'navbar__mobile--open' : ''}`}>
        <nav className="navbar__mobile-nav">
          {navLinks.map((link, i) => (
            <Link
              key={link.id}
              to={link.id}
              spy={true}
              smooth={true}
              offset={-80}
              duration={600}
              onClick={() => setMobileOpen(false)}
              onSetActive={() => setActive(link.id)}
              className={`navbar__mobile-link ${active === link.id ? 'active' : ''}`}
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <span className="navbar__mobile-num">0{i + 1}.</span>
              {link.label}
            </Link>
          ))}
          <Link
            to="contact"
            smooth={true}
            duration={600}
            offset={-80}
            onClick={() => setMobileOpen(false)}
            className="btn btn-primary"
            style={{ marginTop: '24px', justifyContent: 'center' }}
          >
            Hire Me
          </Link>
        </nav>
      </div>
    </header>
  )
}

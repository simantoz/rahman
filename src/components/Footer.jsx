import { Link } from 'react-scroll'
import { FiHeart, FiGithub, FiLinkedin, FiArrowUp } from 'react-icons/fi'
import './Footer.css'

const QUICK_LINKS = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__glow" />
      </div>

      <div className="container footer__content">
        {/* Brand */}
        <div className="footer__brand">
          <div className="footer__logo">
            <div className="footer__logo-icon">P</div>
            <span className="footer__logo-text">Portfolio<span className="gradient-text">.</span></span>
          </div>
          <p className="footer__tagline">
            Building digital experiences that matter. Explore Data, IoT, and meaningful software.
          </p>
          <div className="footer__socials">
            <a href="https://github.com/simantoz" target="_blank" rel="noopener noreferrer" className="footer__social" aria-label="GitHub">
              <FiGithub />
            </a>
          </div>
        </div>

        {/* Links */}
        <div className="footer__links">
          <div className="footer__links-title">Quick Links</div>
          {QUICK_LINKS.map(link => (
            <Link
              key={link.id}
              to={link.id}
              smooth={true}
              duration={600}
              offset={-80}
              className="footer__link"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Stack */}
        <div className="footer__links">
          <div className="footer__links-title">Built With</div>
          {['React.js', 'Vite', 'Framer Motion', 'React Scroll', 'React Icons'].map(tech => (
            <div key={tech} className="footer__tech">{tech}</div>
          ))}
        </div>

        {/* Back to top */}
        <div className="footer__top-btn-wrap">
          <Link
            to="hero"
            smooth={true}
            duration={600}
            className="footer__top-btn"
            id="back-to-top-btn"
            aria-label="Back to top"
          >
            <FiArrowUp />
          </Link>
          <span className="footer__top-label">Back to Top</span>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p>
            © {year} Portfolio. Made with{' '}
            <FiHeart style={{ color: '#f43f5e', display: 'inline', verticalAlign: 'middle' }} />{' '}
            by <span className="gradient-text" style={{ fontWeight: 600 }}>M. Fadhlurrahman</span>
          </p>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>
            Built with React + Vite · Deployed on Vercel
          </p>
        </div>
      </div>
    </footer>
  )
}

import { useEffect, useRef } from 'react'
import { Link } from 'react-scroll'
import { FiDownload, FiGithub, FiArrowDown, FiMail, FiPhone, FiCpu, FiUsers, FiZap } from 'react-icons/fi'
import './Hero.css'

const SOCIAL_LINKS = [
  { icon: <FiGithub />, href: 'https://github.com/simantoz', label: 'GitHub' },
  { icon: <FiMail />, href: 'mailto:mfadhlurrahman18@gmail.com', label: 'Email' },
]

const TYPED_STRINGS = [
  'IT Student @ Telkom',
  'Data Enthusiast',
  'IoT Explorer',
  'Problem Solver',
]

export default function Hero() {
  const typedRef = useRef(null)
  const indexRef = useRef(0)
  const charRef = useRef(0)
  const deletingRef = useRef(false)

  useEffect(() => {
    let timeout

    const type = () => {
      const current = TYPED_STRINGS[indexRef.current]

      if (!deletingRef.current) {
        if (charRef.current < current.length) {
          if (typedRef.current) {
            typedRef.current.textContent = current.slice(0, charRef.current + 1)
          }
          charRef.current++
          timeout = setTimeout(type, 80)
        } else {
          timeout = setTimeout(() => {
            deletingRef.current = true
            type()
          }, 2000)
        }
      } else {
        if (charRef.current > 0) {
          if (typedRef.current) {
            typedRef.current.textContent = current.slice(0, charRef.current - 1)
          }
          charRef.current--
          timeout = setTimeout(type, 45)
        } else {
          deletingRef.current = false
          indexRef.current = (indexRef.current + 1) % TYPED_STRINGS.length
          timeout = setTimeout(type, 300)
        }
      }
    }

    timeout = setTimeout(type, 500)
    return () => clearTimeout(timeout)
  }, [])

  return (
    <section className="hero section" id="hero">
      {/* Ambient blobs */}
      <div className="hero__blob hero__blob--1" />
      <div className="hero__blob hero__blob--2" />
      <div className="hero__blob hero__blob--3" />

      <div className="container hero__container">
        {/* Left Content */}
        <div className="hero__content">
          <div className="hero__badge">
            <span className="glow-dot" />
            <span>Open for Collaboration</span>
          </div>

          <h1 className="hero__title" style={{ fontSize: 'clamp(2.3rem, 4vw, 3.8rem)' }}>
            Hi, I'm <br />
            <span className="gradient-text" style={{ letterSpacing: '-1px' }}>Fadhlurrahman</span>
          </h1>

          <div className="hero__typed-wrapper">
            <span className="hero__typed-prefix">&gt; </span>
            <span ref={typedRef} className="hero__typed" />
            <span className="hero__cursor">|</span>
          </div>

          <div className="hero__desc" style={{ fontSize: '0.9rem', lineHeight: '1.6', maxWidth: '520px', textAlign: 'left', marginBottom: '36px' }}>
            <p style={{ marginBottom: '12px' }}>
              I’m an Information Technology student at Telkom University who’s genuinely passionate about exploring how technology shapes the world around us. I’m especially interested in IT, Data, and the Internet of Things (IoT), and I enjoy diving into how these fields connect to create smart and meaningful solutions.
            </p>
            <p style={{ marginBottom: '12px' }}>
              I love learning new things, building projects, and experimenting with ideas—whether it’s developing systems, working with data, or creating IoT-based solutions. For me, technology isn’t just about coding, it’s about solving problems and making an impact.
            </p>
            <p>
              I’m always open to new challenges, collaborations, and opportunities to grow. Let’s build something awesome 🚀
            </p>
          </div>

          <div className="hero__actions">
            <Link
              to="about"
              smooth={true}
              duration={600}
              offset={-80}
              className="btn btn-primary"
              id="view-work-btn"
            >
              Discover More
              <FiArrowDown />
            </Link>
            <a
              href="mailto:mfadhlurrahman18@gmail.com"
              className="btn btn-outline"
              id="download-cv-btn"
            >
              <FiMail />
              Contact Me
            </a>
          </div>

          <div className="hero__socials">
            {SOCIAL_LINKS.map(s => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hero__social-link"
                aria-label={s.label}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Right Visual */}
        <div className="hero__visual">
          <div className="hero__avatar-wrapper">
            <div className="hero__orbit hero__orbit--outer">
              <div className="hero__orbit-dot" style={{ '--angle': '0deg' }} />
              <div className="hero__orbit-dot" style={{ '--angle': '90deg' }} />
              <div className="hero__orbit-dot" style={{ '--angle': '180deg' }} />
              <div className="hero__orbit-dot" style={{ '--angle': '270deg' }} />
            </div>
            <div className="hero__orbit hero__orbit--inner">
              <div className="hero__orbit-dot" style={{ '--angle': '45deg' }} />
              <div className="hero__orbit-dot" style={{ '--angle': '225deg' }} />
            </div>
            <div className="hero__avatar">
              <div className="hero__avatar-inner">
                {/* Foto langsung ditempel dengan background transparent (akan match sama background web) */}
                <img src="/profile.png" alt="M. Fadhlurrahman" className="hero__profile-img" />
              </div>
            </div>
          </div>

          {/* Floating Cards */}
          <div className="hero__float-card hero__float-card--1">
            <span className="hero__float-icon"><FiCpu style={{ color: 'var(--cyan-400)' }} /></span>
            <div>
              <div className="hero__float-title">Data & IoT</div>
              <div className="hero__float-sub">Explorer</div>
            </div>
          </div>

          <div className="hero__float-card hero__float-card--2">
            <span className="hero__float-icon"><FiUsers style={{ color: '#8b5cf6' }} /></span>
            <div>
              <div className="hero__float-title">Active</div>
              <div className="hero__float-sub">Organization</div>
            </div>
          </div>

          <div className="hero__float-card hero__float-card--3">
            <span className="hero__float-icon"><FiZap style={{ color: '#f59e0b' }} /></span>
            <div>
              <div className="hero__float-title">Problem Solver</div>
              <div className="hero__float-sub">Tech Solutions</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero__scroll-indicator">
        <Link to="about" smooth={true} duration={600} offset={-80}>
          <div className="hero__scroll-mouse">
            <div className="hero__scroll-wheel" />
          </div>
        </Link>
        <span>Scroll down</span>
      </div>
    </section>
  )
}

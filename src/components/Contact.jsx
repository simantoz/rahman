import { useInView } from 'react-intersection-observer'
import { FiMail, FiMapPin, FiGithub, FiPhone } from 'react-icons/fi'
import './Contact.css'

const CONTACT_INFO = [
  {
    icon: <FiMail />,
    label: 'Email',
    value: 'mfadhlurrahman18@gmail.com',
    href: 'mailto:mfadhlurrahman18@gmail.com',
  },
  {
    icon: <FiPhone />,
    label: 'Phone / WA',
    value: '+62 895-4129-87937',
    href: 'https://wa.me/62895412987937',
  },
  {
    icon: <FiMapPin />,
    label: 'Location',
    value: 'Jakarta, Indonesia',
    href: null,
  },
]

const SOCIALS = [
  { icon: <FiGithub />, href: 'https://github.com/simantoz', label: 'GitHub' },
]

export default function Contact() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section className="contact section" id="contact" ref={ref}>
      <div className="container">
        {/* Header */}
        <div className={`contact__header ${inView ? 'visible' : ''}`}>
          <div className="about__tag">
            <span className="glow-dot" />
            Get In Touch
          </div>
          <h2 className="section-title">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="section-subtitle">
            Punya project menarik atau mau sekedar ngobrol soal tech? Jangan ragu buat reach out!
          </p>
        </div>

        <div className={`contact__content ${inView ? 'visible' : ''}`}>
          {/* Centered Info Card */}
          <div className="contact__info-card glass-card">
            <h3 className="contact__info-title">
              Info <span className="gradient-text">Kontak</span>
            </h3>

            <div className="contact__info-items">
              {CONTACT_INFO.map((item, i) => (
                <div key={i} className="contact__info-item">
                  <div className="contact__info-icon">{item.icon}</div>
                  <div>
                    <div className="contact__info-label">{item.label}</div>
                    {item.href ? (
                      <a href={item.href} className="contact__info-value">{item.value}</a>
                    ) : (
                      <div className="contact__info-value">{item.value}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="contact__availability">
              <span className="glow-dot" />
              <div>
                <div style={{ fontWeight: 600, color: 'var(--text-primary)', fontSize: '0.9rem' }}>
                  Currently Available
                </div>
                <div style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', marginTop: 2 }}>
                  Open for internship & freelance work
                </div>
              </div>
            </div>

            <div className="contact__socials">
              <div className="contact__socials-label">Find me on:</div>
              <div className="contact__socials-row">
                {SOCIALS.map(s => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact__social-btn"
                    aria-label={s.label}
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

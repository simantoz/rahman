import { useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { FiMail, FiMapPin, FiSend, FiGithub, FiLinkedin, FiPhone } from 'react-icons/fi'
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
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    // ===== CARA MENGAKTIFKAN FORM =======
    // 1. Dapatkan Access Key gratis dari https://web3forms.com/ (masukkan email lu)
    // 2. Paste Access Key itu di bawah ini (ingat, pakai tanda kutip dua):
    const ACCESS_KEY = "5160ad96-0b78-4d16-badf-9287670fb858"

    if (ACCESS_KEY === "GANTI_PAKE_ACCESS_KEY_LU") {
      // Jika key belum diganti, tampilkan animasi simulasi sukses aja
      await new Promise(r => setTimeout(r, 1500))
      setLoading(false)
      setSubmitted(true)
      setForm({ name: '', email: '', subject: '', message: '' })
      return
    }

    // Jika key sudah diisi, kirim email sungguhan lewat Web3Forms API
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          ...form
        }),
      });

      const result = await response.json();
      if (result.success) {
        setSubmitted(true);
        setForm({ name: '', email: '', subject: '', message: '' });
      } else {
        alert("Waduh, pesan gagal dikirim. Sistem form sedang sibuk.");
      }
    } catch (error) {
      alert("Koneksi gagal! Tolong cek koneksi internet lu.");
    } finally {
      setLoading(false);
    }
  }

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

        <div className={`contact__grid ${inView ? 'visible' : ''}`}>
          {/* Left - Info */}
          <div className="contact__info">
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

          {/* Right - Form */}
          <div className="contact__form-wrap">
            {submitted ? (
              <div className="contact__success glass-card">
                <div className="contact__success-icon">✉️</div>
                <h3>Pesan Terkirim!</h3>
                <p>Makasih udah hubungi gue. Gue bakal balas ASAP! 🚀</p>
                <button
                  className="btn btn-outline"
                  onClick={() => setSubmitted(false)}
                  id="contact-send-another-btn"
                >
                  Kirim Lagi
                </button>
              </div>
            ) : (
              <form className="contact__form glass-card" onSubmit={handleSubmit} id="contact-form">
                <div className="contact__form-row">
                  <div className="contact__field">
                    <label htmlFor="contact-name">Nama</label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      placeholder="Nama lo"
                      value={form.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="contact__field">
                    <label htmlFor="contact-email">Email</label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      placeholder="email@example.com"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="contact__field">
                  <label htmlFor="contact-subject">Subject</label>
                  <input
                    id="contact-subject"
                    name="subject"
                    type="text"
                    placeholder="Subject pesan"
                    value={form.subject}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="contact__field">
                  <label htmlFor="contact-message">Pesan</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    placeholder="Cerita project lo atau sekedar halo! 👋"
                    value={form.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary contact__submit"
                  disabled={loading}
                  id="contact-submit-btn"
                >
                  {loading ? (
                    <>
                      <div className="contact__spinner" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <FiSend />
                      Kirim Pesan
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

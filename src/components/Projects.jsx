import { useInView } from 'react-intersection-observer'
import { FiGithub } from 'react-icons/fi'
import './Projects.css'

export default function Projects() {
  const { ref, inView } = useInView({ threshold: 0.05, triggerOnce: true })

  return (
    <section className="projects section" id="projects" ref={ref}>
      <div className="container">
        {/* Header */}
        <div className={`projects__header ${inView ? 'visible' : ''}`}>
          <div className="about__tag">
            <span className="glow-dot" />
            Portfolio
          </div>
          <h2 className="section-title">
            Creative <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle">
            All My Projects
          </p>
        </div>

        {/* Empty State / Coming Soon */}
        <div className={`projects__empty glass-card ${inView ? 'visible' : ''}`}>
          <div className="projects__empty-icon">⏳</div>
          <h3 className="projects__empty-title">Projects are cooking...</h3>
          <p className="projects__empty-desc">
            Saat ini portofolio project nyata gua masih dalam tahap pengerjaan.
            Gua lagi banyak eksperimen dan ngulik teknologi di bidang <b>Data, IoT, dan Web Development</b>.
            Nanti bakal gua update di sini secepatnya kalau udah kelar!
          </p>
          <a
            href="https://github.com/simantoz"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
            style={{ marginTop: '24px' }}
          >
            <FiGithub /> Intip GitHub Gua
          </a>
        </div>
      </div>
    </section>
  )
}

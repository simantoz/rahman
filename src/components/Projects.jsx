import { useInView } from 'react-intersection-observer'
import { FiChevronLeft, FiChevronRight, FiArrowUpRight, FiLayers } from 'react-icons/fi'
import './Projects.css'

const PROJECTS = [
  {
    id: 1,
    title: 'Tanduvia - Posyandu Digital',
    category: 'Healthcare & IoT',
    explanation: 'Team Project website TANDUVIA merupakan project dalam kompetisi INNOVILLAGE 2026, yang terintegrasi langsung dengan hardware RFID untuk pendataan kartu anak secara otomatis. Fokus pada akurasi data tumbuh kembang anak sesuai standar WHO.',
    images: [
      { url: '/assets/projects/tanduvia/landing.png', portrait: false },
      { url: '/assets/projects/tanduvia/features.png', portrait: false },
      { url: '/assets/projects/tanduvia/dashboard.png', portrait: false },
      { url: '/assets/projects/tanduvia/implementation.jpg', portrait: true },
      { url: '/assets/projects/tanduvia/team.jpg', portrait: true },
      { url: '/assets/projects/tanduvia/instagram.jpg', portrait: true },
    ],
    tools: [
      { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
      { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
      { name: 'Tailwind', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
      { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    ],
    github: 'https://github.com/simantoz',
  }
]

export default function Projects() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section className="projects section" id="projects" ref={ref}>
      <div className="container">
        {/* Header Style from Reference */}
        <div className={`projects__top ${inView ? 'visible' : ''}`}>
          <div className="projects__title-group">
            <h2 className="projects__title">My Projects</h2>
            <div className="projects__title-line">
              <span className="projects__title-dot" />
            </div>
          </div>
        </div>

        <div className="projects__main">
          {PROJECTS.map((project, i) => (
            <ProjectShowcase key={project.id} project={project} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectShowcase({ project, inView }) {
  const scrollRef = window.document.getElementById(`scroll-${project.id}`)

  const scroll = (dir) => {
    const el = document.getElementById(`scroll-${project.id}`)
    const amount = dir === 'left' ? -300 : 300
    el.scrollBy({ left: amount, behavior: 'smooth' })
  }

  return (
    <div className={`showcase ${inView ? 'visible' : ''}`}>
      {/* Link Button */}
      <a href={project.github} target="_blank" rel="noopener noreferrer" className="showcase__link-btn">
        <FiArrowUpRight />
      </a>

      {/* Nav Arrows */}
      <button className="showcase__nav showcase__nav--left" onClick={() => scroll('left')}>
        <FiChevronLeft />
      </button>
      <button className="showcase__nav showcase__nav--right" onClick={() => scroll('right')}>
        <FiChevronRight />
      </button>

      {/* Mockup Gallery */}
      <div className="showcase__gallery" id={`scroll-${project.id}`}>
        {project.images.map((img, i) => (
          <div key={i} className={`showcase__mockup ${img.portrait ? 'showcase__mockup--portrait' : 'showcase__mockup--landscape'}`}>
            <div className="showcase__mockup-inner">
              <img src={img.url} alt="Screenshot" />
            </div>
          </div>
        ))}
      </div>

      {/* Project Explanation */}
      <div className="showcase__explanation">
        <p>
          {project.explanation || "Team Project website TANDUVIA merupakan project dalam kompetisi INNOVILLAGE 2026, yang terintegrasi langsung dengan hardware RFID untuk pendataan kartu anak secara otomatis. Fokus pada akurasi data tumbuh kembang anak sesuai standar WHO."}
        </p>
      </div>

      {/* Tools Footer */}
      <div className="showcase__footer">
        <div className="showcase__tools-label">Tools Used</div>
        <div className="showcase__tools-line" />
        <div className="showcase__tools">
          {project.tools.map(tool => (
            <div key={tool.name} className="showcase__tool" title={tool.name}>
              <img src={tool.icon} alt={tool.name} className="showcase__tool-img" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

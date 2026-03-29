import { useState } from 'react'
import { useInView } from 'react-intersection-observer'
import './Skills.css'

const SKILL_CATEGORIES = [
  {
    id: 'frontend',
    label: '🎨 Frontend',
    skills: [
      { name: 'React JS', level: 85, color: '#61dafb' },
      { name: 'HTML', level: 95, color: '#e34f26' },
      { name: 'CSS', level: 90, color: '#1572b6' },
      { name: 'Tailwind CSS', level: 80, color: '#38bdf8' },
    ],
  },
  {
    id: 'backend',
    label: '⚙️ Backend & Data',
    skills: [
      { name: 'Python', level: 75, color: '#3776ab' },
      { name: 'Golang', level: 60, color: '#00add8' },
      { name: 'RStudio', level: 70, color: '#75aadb' },
    ],
  },
  {
    id: 'tools',
    label: '🛠️ Tools & IoT',
    skills: [
      { name: 'Arduino IDE', level: 80, color: '#00979d' },
      { name: 'Git / GitHub', level: 82, color: '#f05032' },
    ],
  },
]

const TECH_ICONS = [
  { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { name: 'Tailwind', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Arduino', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg' },
  { name: 'RStudio', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rstudio/rstudio-original.svg' },
  { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'Golang', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg' },
]

export default function Skills() {
  const [activeTab, setActiveTab] = useState('frontend')
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  const activeCategory = SKILL_CATEGORIES.find(c => c.id === activeTab)

  return (
    <section className="skills section" id="skills" ref={ref}>
      {/* Background accent */}
      <div className="skills__bg-accent" />

      <div className="container">
        {/* Header */}
        <div className={`skills__header ${inView ? 'visible' : ''}`}>
          <div className="about__tag">
            <span className="glow-dot" />
            Technical Skills
          </div>
          <h2 className="section-title">
            My <span className="gradient-text">Tech Stack</span>
          </h2>
          <p className="section-subtitle">
            Technology that i used to build awesome projects.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className={`skills__tabs ${inView ? 'visible' : ''}`}>
          {SKILL_CATEGORIES.map(cat => (
            <button
              key={cat.id}
              className={`skills__tab ${activeTab === cat.id ? 'active' : ''}`}
              onClick={() => setActiveTab(cat.id)}
              id={`skills-tab-${cat.id}`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className={`skills__grid ${inView ? 'visible' : ''}`}>
          {activeCategory.skills.map((skill, i) => (
            <SkillBar key={skill.name} skill={skill} delay={i * 0.08} inView={inView} />
          ))}
        </div>

        {/* Tech Icons Row */}
        <div className={`skills__icons ${inView ? 'visible' : ''}`}>
          <p className="skills__icons-label">Also familiar with:</p>
          <div className="skills__icons-row">
            {TECH_ICONS.map((tech, i) => (
              <div
                key={tech.name}
                className="skills__icon-item"
                style={{ animationDelay: `${i * 0.06}s` }}
              >
                <img src={tech.icon} alt={tech.name} className="skills__icon-img" />
                <span>{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function SkillBar({ skill, delay, inView }) {
  return (
    <div
      className={`skill-bar ${inView ? 'visible' : ''}`}
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="skill-bar__header">
        <span className="skill-bar__name">{skill.name}</span>
        <span className="skill-bar__level">{skill.level}%</span>
      </div>
      <div className="skill-bar__track">
        <div
          className="skill-bar__fill"
          style={{
            '--skill-level': `${skill.level}%`,
            '--skill-color': skill.color,
            transitionDelay: inView ? `${delay + 0.3}s` : '0s',
          }}
        />
      </div>
    </div>
  )
}

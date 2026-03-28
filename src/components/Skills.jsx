import { useState } from 'react'
import { useInView } from 'react-intersection-observer'
import './Skills.css'

const SKILL_CATEGORIES = [
  {
    id: 'frontend',
    label: '🎨 Frontend',
    skills: [
      { name: 'React.js', level: 85, color: '#61dafb' },
      { name: 'JavaScript', level: 82, color: '#f7df1e' },
      { name: 'HTML / CSS', level: 90, color: '#e34f26' },
      { name: 'TypeScript', level: 65, color: '#3178c6' },
      { name: 'Next.js', level: 70, color: '#ffffff' },
      { name: 'Tailwind CSS', level: 80, color: '#38bdf8' },
    ],
  },
  {
    id: 'backend',
    label: '⚙️ Backend',
    skills: [
      { name: 'Node.js', level: 75, color: '#68a063' },
      { name: 'Express.js', level: 72, color: '#ffffff' },
      { name: 'Python', level: 68, color: '#3776ab' },
      { name: 'PHP', level: 60, color: '#777bb4' },
      { name: 'REST API', level: 78, color: '#0ea5e9' },
      { name: 'MySQL', level: 70, color: '#4479a1' },
    ],
  },
  {
    id: 'tools',
    label: '🛠️ Tools & Other',
    skills: [
      { name: 'Git / GitHub', level: 80, color: '#f05032' },
      { name: 'VS Code', level: 95, color: '#007acc' },
      { name: 'Docker', level: 50, color: '#2496ed' },
      { name: 'Figma', level: 65, color: '#f24e1e' },
      { name: 'Linux', level: 60, color: '#fcc624' },
      { name: 'Vercel', level: 82, color: '#ffffff' },
    ],
  },
]

const TECH_ICONS = [
  { name: 'React', emoji: '⚛️' },
  { name: 'JS', emoji: '🟨' },
  { name: 'Node', emoji: '🟩' },
  { name: 'Python', emoji: '🐍' },
  { name: 'Git', emoji: '🔀' },
  { name: 'TypeScript', emoji: '🔷' },
  { name: 'Docker', emoji: '🐋' },
  { name: 'Figma', emoji: '🎨' },
  { name: 'MySQL', emoji: '🗄️' },
  { name: 'Linux', emoji: '🐧' },
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
            Teknologi yang gue kuasai dan pake sehari-hari untuk build awesome projects.
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
                <span>{tech.emoji}</span>
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

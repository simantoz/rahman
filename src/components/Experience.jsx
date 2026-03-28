import { useInView } from 'react-intersection-observer'
import './Experience.css'

const EXPERIENCES = [
  {
    id: 1,
    role: 'Vice President of HMIT',
    company: 'Telkom University Jakarta',
    period: 'Active',
    type: 'org',
    desc: 'Menjalankan peran sebagai Vice President di Himpunan Mahasiswa IT. Membantu memimpin perencanaan program mahasiswa, advokasi, serta manajemen organisasi dan kepemipinan di prodi.',
    skills: ['Leadership', 'Management', 'Communication', 'Problem Solving'],
    icon: '🏆',
  },
  {
    id: 2,
    role: "Campus Life FGD's Staff",
    company: 'Marketing Crew Telkom Univ Jakarta',
    period: 'Active',
    type: 'org',
    desc: 'Menjadi staff penggerak campus life melalui kegiatan Focus Group Discussion (FGD). Berkontribusi dalam mengorganisir forum, mengumpulkan feedback, dan memfasilitasi komunikasi mahasiswa.',
    skills: ['Public Speaking', 'Marketing', 'FGD', 'Event Organizing'],
    icon: '🎯',
  },
  {
    id: 3,
    role: 'S1 Information Technology',
    company: 'Telkom University',
    period: 'Present',
    type: 'edu',
    desc: 'Menempuh jenjang pendidikan sarjana IT. Sangat passionate pada eksplorasi seputar pengelolaan Data, Internet of Things (IoT), dan pengembangan Software.',
    skills: ['IoT', 'Data', 'Web Development', 'System Integration'],
    icon: '🎓',
  },
]

const TYPE_COLORS = {
  work: { bg: 'rgba(14, 165, 233, 0.1)', border: 'rgba(14, 165, 233, 0.3)', text: 'var(--blue-glow)', label: 'Work' },
  edu: { bg: 'rgba(139, 92, 246, 0.1)', border: 'rgba(139, 92, 246, 0.3)', text: '#a78bfa', label: 'Education' },
  org: { bg: 'rgba(34, 197, 94, 0.1)', border: 'rgba(34, 197, 94, 0.3)', text: '#4ade80', label: 'Organization' },
}

export default function Experience() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section className="experience section" id="experience" ref={ref}>
      <div className="container">
        <div className={`experience__header ${inView ? 'visible' : ''}`}>
          <div className="about__tag">
            <span className="glow-dot" />
            Journey
          </div>
          <h2 className="section-title">
            Organizations & <span className="gradient-text">Education</span>
          </h2>
          <p className="section-subtitle">
            Gua cukup aktif di organisasi kampus buat upgrade soft-skill, network, dan leadership.
          </p>
        </div>

        <div className="experience__timeline">
          {/* Vertical line */}
          <div className={`experience__line ${inView ? 'grow' : ''}`} />

          {EXPERIENCES.map((exp, i) => (
            <div
              key={exp.id}
              className={`exp-item ${inView ? 'visible' : ''} ${i % 2 === 0 ? 'exp-item--left' : 'exp-item--right'}`}
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <div className="exp-item__node">
                <span>{exp.icon}</span>
              </div>
              <div className="exp-item__card glass-card">
                <div className="exp-item__header">
                  <div>
                    <div className="exp-item__role">{exp.role}</div>
                    <div className="exp-item__company">{exp.company}</div>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 8 }}>
                    <span className="exp-item__period">{exp.period}</span>
                    <span className="exp-item__type-badge" style={{
                      background: TYPE_COLORS[exp.type].bg,
                      border: `1px solid ${TYPE_COLORS[exp.type].border}`,
                      color: TYPE_COLORS[exp.type].text,
                    }}>
                      {TYPE_COLORS[exp.type].label}
                    </span>
                  </div>
                </div>
                <p className="exp-item__desc">{exp.desc}</p>
                <div className="exp-item__skills">
                  {exp.skills.map(s => (
                    <span key={s} className="exp-item__skill">{s}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

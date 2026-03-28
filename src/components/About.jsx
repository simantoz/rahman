import { useInView } from 'react-intersection-observer'
import './About.css'

const STATS = [
  { value: 'IoT', label: 'Hardware & Systems' },
  { value: 'Data', label: 'Analysis & Processing' },
  { value: 'Web', label: 'Software Development' },
  { value: '100%', label: 'Passion to Learn' },
]

export default function About() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })

  return (
    <section className="about section" id="about" ref={ref}>
      <div className="container">
        <div className={`about__container ${inView ? 'visible' : ''}`}>
          {/* Left - Code Block */}
          <div className="about__code-block">
            <div className="about__code-header">
              <div className="about__code-dots">
                <span style={{ background: '#ff5f56' }} />
                <span style={{ background: '#ffbd2e' }} />
                <span style={{ background: '#27c93f' }} />
              </div>
              <span className="about__code-filename">fadhlurrahman.js</span>
            </div>
            <pre className="about__code-content">
              <code>
                <span className="code-keyword">const </span>
                <span className="code-var">me</span>
                <span className="code-white"> = {'{'}</span>
                {'\n'}
                <span className="code-prop">  name</span>
                <span className="code-white">: </span>
                <span className="code-string">'M. Fadhlurrahman'</span>
                <span className="code-white">,</span>
                {'\n'}
                <span className="code-prop">  campus</span>
                <span className="code-white">: </span>
                <span className="code-string">'Telkom University'</span>
                <span className="code-white">,</span>
                {'\n'}
                <span className="code-prop">  location</span>
                <span className="code-white">: </span>
                <span className="code-string">'Jakarta, Indonesia'</span>
                <span className="code-white">,</span>
                {'\n'}
                <span className="code-prop">  interests</span>
                <span className="code-white">: [</span>
                {'\n'}
                <span className="code-string">    'Internet of Things'</span>
                <span className="code-white">,</span>
                {'\n'}
                <span className="code-string">    'Data Analysis/Science'</span>
                <span className="code-white">,</span>
                {'\n'}
                <span className="code-string">    'Web Development'</span>
                {'\n'}
                <span className="code-white">  ],</span>
                {'\n'}
                <span className="code-prop">  activeOrg</span>
                <span className="code-white">: </span>
                <span className="code-keyword">true</span>
                {'\n'}
                <span className="code-white">{'}'}</span>
                {'\n\n'}
                <span className="code-comment">// Making an impact through technology</span>
              </code>
            </pre>
          </div>

          {/* Right - Text Content */}
          <div className="about__content">
            <div className="about__tag">
              <span className="glow-dot" />
              About Me
            </div>
            <h2 className="section-title">
              Tech Enthusiast & <br />
              <span className="gradient-text">Problem Solver</span>
            </h2>
            <p className="about__desc">
              I’m an Information Technology student at Telkom University who’s genuinely passionate about exploring how technology shapes the world around us. I’m especially interested in IT, Data, and the Internet of Things (IoT), and I enjoy diving into how these fields connect to create smart and meaningful solutions.
            </p>
            <p className="about__desc">
              I love learning new things, building projects, and experimenting with ideas—whether it’s developing systems, working with data, or creating IoT-based solutions. For me, technology isn’t just about coding, it’s about solving problems and making an impact.
            </p>
            <p className="about__desc" style={{ color: 'var(--blue-glow)' }}>
              I’m always open to new challenges, collaborations, and opportunities to grow. Let’s build something awesome 🚀
            </p>

            {/* Stats */}
            <div className="about__stats">
              {STATS.map((stat, i) => (
                <div key={i} className="about__stat">
                  <div className="about__stat-value gradient-text">{stat.value}</div>
                  <div className="about__stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

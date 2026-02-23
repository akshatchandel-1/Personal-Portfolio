import React from 'react'
import '../styles/about.css'

const About = () => {
  const highlights = [
    {
      tag: 'UI / UX',
      title: 'Thoughtful interface & system design',
      description:
        'I design clean, intuitive interfaces with scalability in mind, ensuring the frontend aligns seamlessly with backend logic and real-world data flow.',
      icon: '🎨',
    },
    {
      tag: 'Full-Stack',
      title: 'End-to-end feature development',
      description:
        'I build complete features from UI to backend — creating responsive React components, integrating APIs, managing data, and ensuring smooth user experiences across devices.',
      icon: '💻',
    },
    {
      tag: 'Collaboration',
      title: 'Clear communication & ownership',
      description:
        'I enjoy collaborating with teams, breaking full-stack features into clear tasks, and taking ownership from idea to deployment while keeping everyone aligned.',
      icon: '🤝',
    },
  ]

  const skillChips = [
    'Responsive UI development',
    'Component-based architecture',
    'Design to code implementation',
    'State management basics',
    'API integration & error handling',
    'Performance-conscious styling',
  ]

  const skillBars = [
    { label: 'React.js & UI Development', value: 85 },
    { label: 'Node.js & REST APIs', value: 78 },
    { label: 'MongoDB & Data Modeling', value: 72 },
    { label: 'Problem Solving', value: 88 },
  ]

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-layout">
          <div className="about-left">
            <p className="section-kicker">About</p>
            <h2 className="section-title">Designer-minded full-stack developer</h2>
            <p className="about-intro">
              I'm Akshat Singh, a <span className="gradient-text">full-stack developer</span> who enjoys
              building complete, scalable web applications. I combine strong design sense with
              robust frontend and backend fundamentals to craft experiences that are fast,
              secure, intuitive and production-ready.
            </p>

            <div className="about-highlights">
              {highlights.map((item, index) => (
                <div key={index} className="about-highlight-card">
                  <div className="highlight-icon">{item.icon}</div>
                  <div className="highlight-content">
                    <span className="highlight-tag">{item.tag}</span>
                    <h3 className="highlight-title">{item.title}</h3>
                    <p className="highlight-description">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="about-right">
            <div className="about-card">
              <h3 className="about-card-title">What I do</h3>
              <p className="about-card-subtitle">
                I design and build frontend experiences with a focus on clarity, consistency and
                small delightful details.
              </p>
              <div className="about-chip-grid">
                {skillChips.map((chip, index) => (
                  <span key={index} className="about-chip">
                    {chip}
                  </span>
                ))}
              </div>
            </div>

            <div className="about-card skills-card">
              <h3 className="about-card-title">Core skills</h3>
              <div className="skills-bar-list">
                {skillBars.map((skill, index) => (
                  <div key={index} className="skill-bar-item">
                    <div className="skill-bar-header">
                      <span className="skill-bar-label">{skill.label}</span>
                      <span className="skill-bar-value">{skill.value}%</span>
                    </div>
                    <div className="skill-bar-track">
                      <div
                        className="skill-bar-fill"
                        style={{ width: `${skill.value}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="about-meta">
                <div className="about-meta-item">
                  <span className="about-meta-label">Experience</span>
                  <span className="about-meta-value">3+ projects</span>
                </div>

                <div className="about-meta-item">
                  <span className="about-meta-label">Focus</span>
                  <span className="about-meta-value">MERN Stack</span>
                </div>

                <div className="about-meta-item">
                  <span className="about-meta-label">Goal</span>
                  <span className="about-meta-value">Full-stack apps</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

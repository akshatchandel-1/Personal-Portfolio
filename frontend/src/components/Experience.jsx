import { useEffect, useRef } from "react"
import "../styles/experience.css"

const Experience = () => {
  const expRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("exp-visible")
        }
      },
      { threshold: 0.2 }
    )

    if (expRef.current) observer.observe(expRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="experience" className="experience">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Experience</h2>
          <p className="section-subtitle">
            Professional experience and practical industry exposure
          </p>
        </div>

        <div ref={expRef} className="exp-shell">
          <aside className="exp-list">
            <div className="exp-list-card active">
              <h4 className="exp-list-role">Senior Full-Stack Developer</h4>
              <p className="exp-list-company">Tech Innovations Inc.</p>
              <span className="exp-list-date">
                Jan 2022 — Present
              </span>

              <div className="exp-list-tags">
                <span className="exp-chip primary">Full-Time</span>
                <span className="exp-chip">Remote</span>
                <span className="exp-chip">2+ Years</span>
              </div>
            </div>
          </aside>

          <article
            className="exp-detail-card stagger"
            onMouseMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect()
              e.currentTarget.style.setProperty(
                "--x",
                `${e.clientX - rect.left}px`
              )
              e.currentTarget.style.setProperty(
                "--y",
                `${e.clientY - rect.top}px`
              )
            }}
          >
            <h3 className="exp-detail-role">
              Senior Full-Stack Developer
            </h3>
            <p className="exp-detail-company">
              Tech Innovations Inc. · Jan 2022 — Present · Remote
            </p>

            <p className="exp-detail-intro">
              Led development of enterprise-scale web applications using React and Node.js.
              Mentored junior developers and established coding standards while contributing
              to real-world production projects with exposure to full-stack workflows.
            </p>

            <h4 className="exp-section-title">Key Responsibilities</h4>
            <ul className="exp-detail-list">
              <li>
                Reduced application load time by 45% through optimization and performance tuning.
              </li>
              <li>
                Implemented CI/CD pipeline reducing deployment time by 60% and improving reliability.
              </li>
              <li>
                Led migration to microservices architecture, improving scalability and maintainability.
              </li>
              <li>
                Collaborated with cross-functional teams to deliver features on time and within budget.
              </li>
            </ul>

            <h4 className="exp-section-title">Technologies Used</h4>
            <div className="exp-tech">
              {["React", "Node.js", "MongoDB", "AWS", "Docker"].map((tech) => (
                <span key={tech} className="exp-tech-pill">
                  {tech}
                </span>
              ))}
            </div>

            <p className="exp-tagline">
              Building scalable solutions with a strong foundation for full-stack development.
            </p>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Experience

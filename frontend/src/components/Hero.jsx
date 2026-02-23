import { useEffect, useState } from "react"
import "../styles/hero.css"

const roles = [
  "Full Stack Developer",
  "React & Node.js Developer",
  "Digital Creator",
  "UI / UX Engineer"
]

const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const [text, setText] = useState("")
  const [roleIndex, setRoleIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = roles[roleIndex]
    let timeout

    if (!deleting && charIndex < current.length) {
      timeout = setTimeout(() => {
        setText(current.slice(0, charIndex + 1))
        setCharIndex(charIndex + 1)
      }, 80)
    } else if (deleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setText(current.slice(0, charIndex - 1))
        setCharIndex(charIndex - 1)
      }, 50)
    } else if (!deleting && charIndex === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1200)
    } else if (deleting && charIndex === 0) {
      setDeleting(false)
      setRoleIndex((prev) => (prev + 1) % roles.length)
    }

    return () => clearTimeout(timeout)
  }, [charIndex, deleting, roleIndex])

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-panel">
            <h1 className="hero-title">
              Hi, I'm <span className="gradient-text">Akshat Singh</span>
            </h1>

            <h2 className="hero-subtitle typing-line">
              <strong className="typing-static">I'm a&nbsp;</strong>
              <span className="typing-dynamic">{text}</span>
              <span className="typing-cursor">|</span>
            </h2>

            <p className="hero-description">
              Crafting scalable, end-to-end web applications with modern technologies.
              Specialized in React, Node.js, JavaScript, and building seamless user experiences backed by robust server-side architecture.
            </p>

            <div className="hero-buttons">
              <a
                href="/resume.pdf"
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                <span>📄</span>
                View Resume
              </a>

              <button
                onClick={() => scrollToSection("contact")}
                className="btn btn-secondary"
              >
                <span>💬</span>
                Get in Touch
              </button>
            </div>

            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-pill">🎓 Now</span>
                <span className="stat-main">
                  B.Tech CSE · Building modern, scalable web applications
                </span>
              </div>

              <div className="stat-item">
                <span className="stat-pill">📚 Learning</span>
                <span className="stat-main">
                  Advanced React, Node.js, backend APIs & full-stack system design
                </span>
              </div>

              <div className="stat-item">
                <span className="stat-pill">💼 Open to</span>
                <span className="stat-main">
                  Full-Stack internships, real-world projects & collaborative development
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* PROFILE IMAGE */}
        <div className="hero-image">
          <div className="profile-wrapper">
            <div className="profile-circle">
              <img
                src="/profile.jpg"
                alt="Akshat Singh"
                className="profile-image"
              />
            </div>

            <div className="profile-socials">
              <a href="https://github.com/akshatchandel-1" target="_blank" rel="noreferrer" className="profile-social">
                <i className="ri-github-fill" />
              </a>
              <a href="https://www.linkedin.com/in/akshat-singh-chandel-18179a299/" target="_blank" rel="noreferrer" className="profile-social">
                <i className="ri-linkedin-fill" />
              </a>
              <a href="https://leetcode.com/u/__akshat_chandel/" target="_blank" rel="noreferrer" className="profile-social">
                <i className="ri-code-s-slash-line" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="profile-social">
                <i className="ri-instagram-line" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* SCROLL INDICATOR */}
      <div
        className="scroll-indicator"
        onClick={() => scrollToSection("about")}
      >
        <span className="scroll-text">Scroll to Explore</span>
        <span className="scroll-arrow">↓</span>
      </div>
    </section>
  )
}

export default Hero

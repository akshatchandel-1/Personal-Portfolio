import '../styles/footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-inner container">
        <h3 className="footer-logo">
          Akshat Singh<span>.</span>
        </h3>

        <p className="footer-tagline">
          Building digital experiences
        </p>

        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-divider" />

        <div className="footer-bottom">
          <span>© 2026 Akshat Singh</span>

          <span>
            Built with{" "}
            <span className="footer-love">
              <span>❤️</span>
            </span>{" "}
            using React & Node.js
          </span>
        </div>
      </div>
    </footer>
  )
}

export default Footer

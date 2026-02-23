import { useState, useEffect } from "react"
import "../styles/navbar.css"

const Navbar = ({ theme, onThemeChange }) => {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)
      
      // Detect active section
      const sections = ['home', 'about', 'projects', 'experience', 'skills', 'contact']
      const scrollPosition = window.scrollY + 150
      
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetBottom = offsetTop + element.offsetHeight
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section)
            break
          }
        }
      }
    }
    
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const scrollTo = (id) => {
    setActiveSection(id)
    setMobileMenuOpen(false) // Close menu after click
    const el = document.getElementById(id)
    if (el) {
      const offset = 80
      const elementPosition = el.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset
      
      window.scrollTo({
        top: id === 'home' ? 0 : offsetPosition,
        behavior: "smooth"
      })
    }
  }

  const themeIcon = theme === "light" ? "☀️" : "🌙"

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-container">
        <div className="nav-logo" onClick={() => scrollTo("home")}>
          Portfolio<span className="logo-dot">.</span>
        </div>

        {/* Desktop Menu */}
        <div className="nav-menu">
          <button 
            className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}
            onClick={() => scrollTo("home")}
          >
            <i className="ri-home-4-line" />
            Home
          </button>

          <button 
            className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
            onClick={() => scrollTo("about")}
          >
            <i className="ri-user-3-line" />
            About
          </button>

          <button 
            className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}
            onClick={() => scrollTo("projects")}
          >
            <i className="ri-layout-grid-line" />
            Projects
          </button>

          <button 
            className={`nav-link ${activeSection === 'experience' ? 'active' : ''}`}
            onClick={() => scrollTo("experience")}
          >
            <i className="ri-briefcase-3-line" />
            Experience
          </button>

          <button 
            className={`nav-link ${activeSection === 'skills' ? 'active' : ''}`}
            onClick={() => scrollTo("skills")}
          >
            <i className="ri-lightbulb-flash-line" />
            Skills & Certifications
          </button>

          <button
            className={`nav-link contact-pill ${activeSection === 'contact' ? 'active' : ''}`}
            onClick={() => scrollTo("contact")}
          >
            <i className="ri-mail-line" />
            Contact
          </button>
        </div>

        {/* Right Side: Theme + Mobile Toggle */}
        <div className="nav-right">
          <button className="theme-toggle" onClick={onThemeChange}>
            {themeIcon}
          </button>

          {/* Mobile Hamburger */}
          <button 
            className={`mobile-toggle ${mobileMenuOpen ? 'active' : ''}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
          <button 
            className={`mobile-nav-item ${activeSection === 'home' ? 'active' : ''}`}
            onClick={() => scrollTo("home")}
          >
            <i className="ri-home-4-line" />
            <span>Home</span>
          </button>

          <button 
            className={`mobile-nav-item ${activeSection === 'about' ? 'active' : ''}`}
            onClick={() => scrollTo("about")}
          >
            <i className="ri-user-3-line" />
            <span>About</span>
          </button>

          <button 
            className={`mobile-nav-item ${activeSection === 'projects' ? 'active' : ''}`}
            onClick={() => scrollTo("projects")}
          >
            <i className="ri-layout-grid-line" />
            <span>Projects</span>
          </button>

          <button 
            className={`mobile-nav-item ${activeSection === 'experience' ? 'active' : ''}`}
            onClick={() => scrollTo("experience")}
          >
            <i className="ri-briefcase-3-line" />
            <span>Experience</span>
          </button>

          <button 
            className={`mobile-nav-item ${activeSection === 'skills' ? 'active' : ''}`}
            onClick={() => scrollTo("skills")}
          >
            <i className="ri-lightbulb-flash-line" />
            <span>Skills & Certifications</span>
          </button>

          <button 
            className={`mobile-nav-item ${activeSection === 'contact' ? 'active' : ''}`}
            onClick={() => scrollTo("contact")}
          >
            <i className="ri-mail-line" />
            <span>Contact</span>
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
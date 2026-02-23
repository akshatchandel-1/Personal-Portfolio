import "../styles/projects.css"
const Projects = () => {
  const projects = [
    {
      title: 'Unified Education Platform',
      description:
      'A full-stack unified education platform designed to deliver a seamless learning experience. Built with React (Vite) frontend and scalable Node.js backend, featuring role-based dashboards, secure authentication, API-driven data flow, and Docker deployment.',
      tech: ['React (Vite)', 'Node.js', 'Express', 'Docker', 'REST APIs'],
      image: '/project1.jpg',
      gradient: 'linear-gradient(135deg, #4f46e5 0%, #06b6d4 100%)',
      liveDemo: '#',
      sourceCode: '#',
    },
    {
      title: 'Jharkhand Eco-Tourism Platform',
      description:
        'A full-stack eco-tourism platform promoting sustainable tourism in Jharkhand. Showcases destinations, travel insights, booking information, and interactive dashboards with a responsive UI.',
      tech: ['React', 'Node.js', 'Express', 'REST APIs'],
      image: '/project2.jpg',
      gradient: 'linear-gradient(135deg, #065f46 0%, #16a34a 100%)',
      liveDemo: '#',
      sourceCode: '#',
    },
    {
      title: 'AI Voice Detection API',
      description:
      'Real-time voice authentication system using deep learning models. Detects and verifies speakers with high accuracy through voice biometrics and neural network processing.',
      tech: ['Python', 'TensorFlow', 'Flask', 'REST API', 'Audio Processing'],
      image: '/project3.jpg',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      liveDemo: '#',
      sourceCode: '#',
    },
    {
      title: 'Personal Portfolio',
      description:
        'A modern full-stack portfolio website built to showcase projects, skills, and experience with a premium UI. Features theme switching (light, dark & AI), smooth scroll navigation, responsive layouts, and reusable React components.',
      tech: ['React', 'Vite', 'CSS', 'JavaScript', 'UI/UX Design'],
      image: '/project4.jpg',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      liveDemo: '#',
      sourceCode: '#',
    }
  ]
  
  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            A showcase of my recent work and accomplishments
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div
                className="project-image"
                style={{ background: project.gradient }}
              >
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="overlay-content">
                    <span className="view-text">View Project</span>
                    <span className="arrow-icon">→</span>
                  </div>
                </div>
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-tech">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="project-links">
                  <a href={project.liveDemo} className="project-link primary-link">
                    🔗 Live Demo
                  </a>
                  <a href={project.sourceCode} className="project-link secondary-link">
                    {'</>'} Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
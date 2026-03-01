import "../styles/skills.css";

const Skills = () => {

  const skillCategories = [
    {
      title: "Frontend",
      icon: "🎨",
      skills: [
        "HTML5",
        "CSS3",
        "JavaScript (ES6+)",
        "React",
        "Bootstrap",
        "Responsive Design",
        "UI/UX Fundamentals",
      ],
    },
    {
      title: "Backend",
      icon: "⚙️",
      skills: [
        "Node.js",
        "Express.js",
        "RESTful APIs",
        "MongoDB",
        "CRUD Operations",
        "API Integration",
      ],
    },
    {
      title: "Tools & Workflow",
      icon: "🛠️",
      skills: [
        "Git & GitHub",
        "VS Code",
        "Vite",
        "npm",
        "Postman",
        "Chrome DevTools",
        "Figma",
      ],
    },
    {
      title: "Soft Skills",
      icon: "🌟",
      skills: [
        "Problem Solving",
        "Team Collaboration",
        "Clear Communication",
        "Time Management",
        "Adaptability",
        "Attention to Detail",
      ],
    },
  ];

  const certifications = [
    {
      title: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
      provider: "Oracle",
      year: "2025",
      link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=8E5C5914C4AAE98C020FED4FD0BE2067CBDE4B4FAAC594F42B0093F514B20885"
    },
    {
      title: "Data Science",
      provider: "Indian Institute of Technology Delhi",
      year: "2024",
      link: "https://media.licdn.com/dms/image/v2/D562DAQFqBn-2TgveLA/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1729518811570?e=1772953200&v=beta&t=8jJorukkvq7e1n808HHQzJ1Q1hHoNxzD2QGDOLxwvZQ"
    },
    {
      title: "Data Analytics Job Simulation",
      provider: "Deloitte",
      year: "2025",
      link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_DBm98utb6iZBRn4Pi_1741849176570_completion_certificate.pdf"
    },
    {
      title: "Full Stack Development",
      provider: "Softpro X AKTU",
      year: "2025",
      link: "https://media.licdn.com/dms/image/v2/D5622AQGBuB2XHu9AsA/feedshare-shrink_2048_1536/B56ZrAcGu9IsAw-/0/1764165191237?e=1772668800&v=beta&t=PHQotvK-BD6Ci0Guja3z_cwCXWxYZYNLWFeAh9eyGwU"
    },
    {
      title: "Python for Data Visualization",
      provider: "IBM",
      year: "2024",
      link: "https://www.credly.com/badges/f087c960-5501-4278-976a-ab91fae9579b"
    },
    {
      title: "Python for Data Science",
      provider: "IBM",
      year: "2024",
      link: "https://www.credly.com/badges/1dedf6ad-7e10-4205-8b8d-020781bfc49a"
    },
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">

        <div className="section-header">
          <h2 className="section-title">Skills & Expertise</h2>
          <p className="section-subtitle">
            Technologies and skills I use to build scalable full-stack applications
          </p>
        </div>

        <div className="skills-wrapper">

          {/* 4 Skill Cards */}
          <div className="skills-grid">
            {skillCategories.map((category, index) => (
              <div key={index} className="skill-card">
                <div className="card-header">
                  <span className="card-icon">{category.icon}</span>
                  <h3 className="card-title">{category.title}</h3>
                </div>

                <div className="card-body">
                  {category.skills.map((skill, i) => (
                    <div key={i} className="skill-item">
                      <span className="skill-tick">✓</span>
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Center Line only */}
          <div className="center-line">
            <div className="line"></div>
          </div>

        </div>

        {/* Certifications */}
        <div className="certification-section">
          <div className="section-header">
            <h2 className="section-title">Certifications</h2>
            <p className="section-subtitle">
              Professional training and verified technical achievements
            </p>
          </div>

          <div className="cert-grid">
            {certifications.map((cert, index) => (
              <div key={index} className="cert-card">
                <div>
                  <h3 className="cert-title">{cert.title}</h3>
                  <p className="cert-provider">{cert.provider}</p>
                  <span className="cert-year">{cert.year}</span>
                </div>

                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cert-link"
                >
                  View Certificate →
                </a>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;

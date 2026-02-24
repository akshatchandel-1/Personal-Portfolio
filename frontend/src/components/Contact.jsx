import { useState } from "react"
import "../styles/contact.css"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  })

  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const { name, email, subject, message } = formData
    if (!name || !email || !subject || !message) return

    try {
      setLoading(true)

      const res = await fetch(
        "https://personal-portfolio-r6a3.onrender.com/api/contact",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData)
        }
      )

      const data = await res.json()

      if (!res.ok) throw new Error(data.message || "Failed")

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      })

      alert("Message sent successfully ✅")
    } catch (err) {
      console.error("Mail error:", err)
      alert("Failed to send message ❌")
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            From concept to code — let's build it right.
          </p>
        </div>

        <div className="contact-shell">
          {/* LEFT INFO */}
          <aside className="contact-info">
            <div className="contact-profile">
              <div className="contact-avatar">
                <img
                  src="/profile.jpg"
                  alt="Akshat Singh"
                  className="avatar-image"
                />
              </div>

              <h3>Akshat Singh</h3>
              <p className="contact-role">Full Stack Developer</p>
            </div>

            <div className="contact-cards">
              <div className="contact-card">
                <span>Email</span>
                <p>
                  <a
                    href="mailto:vishuthakur8081@gmail.com"
                    className="contact-link"
                  >
                    vishuthakur8081@gmail.com
                  </a>
                </p>
              </div>

              <div className="contact-card">
                <span>Phone</span>
                <p>
                  <a href="tel:+918081492137" className="contact-link">
                    +91 8081492137
                  </a>
                </p>
              </div>

              <div className="contact-card">
                <span>Location</span>
                <p>Kanpur, India</p>
              </div>

              <div className="contact-card">
                <span>Status</span>
                <p className="status-active">Available for work</p>
              </div>
            </div>

            <div className="profile-socials">
              <a
                href="https://github.com/akshatchandel-1"
                target="_blank"
                rel="noreferrer"
                className="profile-social"
              >
                <i className="ri-github-fill" />
              </a>

              <a
                href="https://www.linkedin.com/in/akshat-singh-chandel-18179a299/"
                target="_blank"
                rel="noreferrer"
                className="profile-social"
              >
                <i className="ri-linkedin-fill" />
              </a>

              <a
                href="https://leetcode.com/u/__akshat_chandel/"
                target="_blank"
                rel="noreferrer"
                className="profile-social"
              >
                <i className="ri-code-s-slash-line" />
              </a>

              <a
                href="https://instagram.com/akshatsingh"
                target="_blank"
                rel="noreferrer"
                className="profile-social"
              >
                <i className="ri-instagram-line" />
              </a>
            </div>
          </aside>

          {/* FORM */}
          <form className="contact-form" onSubmit={handleSubmit}>
            <h3>Send me a message</h3>
            <p className="form-subtitle">
              Got a project in mind? Let's build something amazing together.
            </p>

            <div className="form-grid">
              <div className="form-field">
                <label>Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                />
              </div>

              <div className="form-field">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div className="form-field">
              <label>Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="What's this about?"
              />
            </div>

            <div className="form-field">
              <label>Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project"
              />
            </div>

            <div className="form-footer">
              <div className="response-time">
                <i className="ri-time-line"></i>
                <span>Usually responds within 24 hours</span>
              </div>

              <button type="submit" className="contact-btn" disabled={loading}>
                {loading ? "Sending..." : "Send Message →"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
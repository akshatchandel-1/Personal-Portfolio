import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

/* ================= MIDDLEWARE ================= */

const allowedOrigin =
  process.env.FRONTEND_URL || "http://localhost:5173";

app.use(cors({
  origin: allowedOrigin,
  credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* ================= MAIL TRANSPORTER ================= */

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

/* ================= VERIFY MAIL ================= */

transporter.verify((error) => {
  if (error) {
    console.error('❌ Email configuration error:', error);
  } else {
    console.log('✅ Email server is ready to send messages');
  }
});

/* ================= HEALTH CHECK ================= */

app.get('/api/health', (req, res) => {
  res.status(200).json({
    success: true,
    status: 'ok',
    message: 'Server is running'
  });
});

/* ================= CONTACT API ================= */

app.post('/api/contact', async (req, res) => {
  const { name, email, subject, message } = req.body;

  // Validation
  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      message: 'All fields are required'
    });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({
      success: false,
      message: 'Invalid email address'
    });
  }

  const mailOptions = {
    from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_USER,
    subject: subject || `Portfolio Contact from ${name}`,
    replyTo: email,
    html: `
    <div style="
      font-family: 'Segoe UI', Arial, sans-serif;
      background:#f3f4f6;
      padding:30px;
    ">
      <div style="
        max-width:600px;
        margin:auto;
        background:#ffffff;
        border-radius:14px;
        box-shadow:0 20px 40px rgba(0,0,0,0.08);
        overflow:hidden;
      ">

        <div style="
          background:linear-gradient(135deg,#6366f1,#4f46e5);
          padding:22px;
          color:#ffffff;
        ">
          <h2 style="margin:0;font-size:22px;">
            New Contact Form Submission
          </h2>
          <p style="margin:6px 0 0;font-size:14px;opacity:0.9;">
            Portfolio Website
          </p>
        </div>

        <div style="padding:26px;color:#1f2937;">

          <div style="margin-bottom:16px;">
            <strong>Name:</strong>
            <div>${name}</div>
          </div>

          <div style="margin-bottom:16px;">
            <strong>Email:</strong>
            <div>
              <a href="mailto:${email}" style="color:#4f46e5;text-decoration:none;">
                ${email}
              </a>
            </div>
          </div>

          <div style="margin-bottom:16px;">
            <strong>Subject:</strong>
            <div style="
              background:#f8fafc;
              padding:10px 12px;
              border-radius:8px;
              margin-top:6px;
              border-left:4px solid #6366f1;
            ">
              ${subject || "—"}
            </div>
          </div>

          <div style="margin-bottom:10px;">
            <strong>Message:</strong>
            <div style="
              background:#f9fafb;
              padding:14px;
              border-radius:10px;
              margin-top:6px;
              line-height:1.6;
              border-left:4px solid #4f46e5;
            ">
              ${message}
            </div>
          </div>

        </div>

        <div style="
          background:#f9fafb;
          padding:14px;
          font-size:12px;
          color:#6b7280;
          text-align:center;
        ">
          This message was sent from your portfolio contact form.<br/>
          ${new Date().toLocaleString()}
        </div>

      </div>
    </div>
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log(`✅ Email sent successfully from ${email}`);

    res.status(200).json({
      success: true,
      message: 'Message sent successfully'
    });

  } catch (error) {
    console.error('❌ Error sending email:', error);

    res.status(500).json({
      success: false,
      message: 'Failed to send message'
    });
  }
});

/* ================= 404 ================= */

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Endpoint not found'
  });
});

/* ================= START SERVER ================= */

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`🌐 Allowed CORS Origin: ${allowedOrigin}`);
  console.log(`📧 Email configured for: ${process.env.EMAIL_USER}`);
});
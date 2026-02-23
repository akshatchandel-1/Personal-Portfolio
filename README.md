# Akshat Singh - Portfolio Website

A professional, production-ready personal portfolio with premium UI, and working contact form.

## ✨ Features

- 🎬 **Intro Loader** - Striped text reveal animation
- 🎨 **Premium UI** - Professional blue theme design
- 🌓 **Theme Toggle** - Light/Dark mode
- ✨ **Smooth Animations** - Typing effects, scroll reveals, hover states
- 📱 **Fully Responsive** - All devices
- 📧 **Working Contact Form** - Nodemailer + Gmail
- 🚀 **Fast Performance** - Vite build
- 🎯 **Smart Navigation** - Auto-highlights current section

## 🛠️ Tech Stack

### Frontend
- React 18 + Vite
- Plain CSS (no frameworks)
- Remixicon Icons
- Montserrat Font

### Backend
- Node.js + Express
- Nodemailer (Gmail)
- CORS enabled

## 📦 Quick Start

### 1. Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Runs on `http://localhost:5173`

### 2. Backend Setup

```bash
cd backend
npm install
```

Create `.env` file (copy from `.env.example`):
```env
PORT=5000
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-16-char-app-password
FRONTEND_URL=http://localhost:5173
```

Start server:
```bash
npm run dev
```

Runs on `http://localhost:5000`

## 📧 Gmail App Password Setup

1. Enable **2-Step Verification** on Gmail
2. Go to Google Account → Security → App Passwords
3. Generate password for "Mail"
4. Copy 16-character code to `.env`

## 🎨 Theme Colors

### Light Theme (Professional Blue)
- Primary: #2563eb (Blue)
- Secondary: #0891b2 (Cyan)
- Accent: #7c3aed (Purple)

### Dark Theme
- Primary: #818cf8 (Light Blue)
- Secondary: #22d3ee (Light Cyan)
- Accent: #a78bfa (Light Purple)

## 📂 Project Structure

```
portfolio/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── IntroLoader.jsx
│   │   │   ├── Navbar.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Projects.jsx
│   │   │   ├── Experience.jsx
│   │   │   ├── Skills.jsx
│   │   │   ├── Contact.jsx
│   │   │   └── Footer.jsx
│   │   ├── styles/
│   │   │   └── (all CSS files)
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── index.html
│   └── vite.config.js
└── backend/
    ├── server.js
    ├── package.json
    └── .env.example
```

## 🎭 Animations

- Intro Loader: 2.8s striped text reveal
- Hero: Auto-rotating typing effect
- Logo Dot: Floating animation
- Profile Circle: Rotating gradient border
- Scroll Animations: Fade-in on view
- Experience: Mouse-follow glow
- Hover States: All interactive elements

## 📝 API Endpoints

### Health Check
```
GET /api/health
```

### Contact Form
```
POST /api/contact
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "subject": "Project Inquiry",
  "message": "Hello..."
}
```

## 🚀 Build for Production

### Frontend
```bash
cd frontend
npm run build
```

Output: `dist/` folder

### Deploy
- **Frontend**: Vercel, Netlify (static hosting)
- **Backend**: Heroku, Railway, Render (Node.js hosting)

## 🎯 Features Checklist

✅ Intro loader with striped animation
✅ Typing animation in hero
✅ Active section tracking
✅ Smooth scroll navigation
✅ Theme toggle (Light/Dark)
✅ Responsive design (all devices)
✅ Working contact form
✅ Email validation
✅ Subject line in email
✅ Premium animations
✅ Profile image placeholder
✅ Social media links
✅ Skills with progress bars
✅ Experience timeline
✅ Project showcase
✅ Animated logo dot
✅ Scroll indicator
✅ Footer with effects

## 🔧 Customization

### Update Personal Info
- Edit component files in `src/components/`
- Update name, email, phone, links
- Replace image placeholders

### Modify Colors
- Edit `styles/global.css` CSS variables
- Update gradient colors throughout

### Add Projects
- Edit projects array in `Projects.jsx`
- Add project details and tech stacks

## 📱 Responsive Breakpoints

- Desktop: 1200px+
- Tablet: 768px - 1199px
- Mobile: < 768px

## 🌐 Browser Support

- Chrome ✓
- Firefox ✓
- Safari ✓
- Edge ✓

## 🐛 Troubleshooting

**Email not sending?**
- Verify Gmail App Password is correct
- Check 2-Step Verification is enabled
- Review server logs for errors
- Test with `/api/health` endpoint

**Theme not switching?**
- Clear browser cache
- Check localStorage
- Verify theme toggle button

**Port already in use?**
- Change port in `.env` (backend)
- Change port in `vite.config.js` (frontend)

## 📄 License

MIT License - Free to use for personal portfolios

---

**Built with ❤️ by Akshat Singh**

# EarnIndia - E-Learning & Affiliate Platform

A modern, responsive e-learning platform built with React, Vite, and Tailwind CSS. Features include course packages, affiliate earning system, instructor profiles, testimonials, and more.

## Features

- 🎓 Premium course packages with lifetime access
- 💰 3-level affiliate system (67%, 10%, 5% commissions)
- 📱 Fully responsive mobile-first design
- 🎨 Professional government-style trusted appearance
- ⚡ Fast and optimized with Vite
- 🎭 Smooth animations with Framer Motion
- 🎠 Beautiful carousels for instructors and testimonials
- 📊 Animated statistics counters
- ❓ Interactive FAQ accordion
- 🔒 Secure payment integration ready

## Tech Stack

- **React** - UI framework
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **React Slick** - Carousels
- **Font Awesome** - Icons

## Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Setup Steps

1. **Navigate to project directory:**
   ```bash
   cd earnindia
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   Navigate to `http://localhost:5173`

## Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist` folder.

## Project Structure

```
earnindia/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── Stats.jsx
│   │   ├── Packages.jsx
│   │   ├── WhyChooseUs.jsx
│   │   ├── Instructors.jsx
│   │   ├── Founder.jsx
│   │   ├── Testimonials.jsx
│   │   ├── HowItWorks.jsx
│   │   ├── FAQ.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
```

## Color Scheme

- **Primary:** `#003366` (Dark Blue)
- **Background:** `#FFFFFF` (White)
- **Accent:** `#008000` (Green)

## Customization

### Update Colors
Edit `tailwind.config.js`:
```javascript
colors: {
  primary: '#003366',
  accent: '#008000',
}
```

### Update Content
Edit the respective component files in `src/components/`

### Add More Courses/Packages
Edit the data arrays in `Packages.jsx`, `Instructors.jsx`, or `Testimonials.jsx`

## License

© 2026 EarnIndia. All rights reserved.

## Support

For support, email support@earnindia.com

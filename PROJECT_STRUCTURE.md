# EarnIndia Project Structure

Complete file structure of the EarnIndia e-learning platform.

## Root Directory Files

```
earnindia/
├── index.html                 # Main HTML file with SEO meta tags
├── package.json              # Dependencies and scripts
├── vite.config.js           # Vite configuration
├── tailwind.config.js       # Tailwind CSS custom configuration
├── postcss.config.js        # PostCSS configuration
├── .gitignore               # Git ignore rules
├── README.md                # Project documentation
├── SETUP_GUIDE.md          # Detailed setup instructions
└── PROJECT_STRUCTURE.md    # This file
```

## Source Directory (src/)

```
src/
├── main.jsx                 # Application entry point
├── App.jsx                  # Main app component
├── App.css                  # Global app styles
├── index.css               # Global styles with Tailwind directives
└── components/             # All React components
    ├── Header.jsx          # Fixed navbar with mobile menu
    ├── Hero.jsx            # Hero section with gradient
    ├── Stats.jsx           # Animated statistics counters
    ├── Packages.jsx        # Course packages with pricing
    ├── WhyChooseUs.jsx     # Feature cards
    ├── Instructors.jsx     # Instructor carousel
    ├── Founder.jsx         # Founder profile section
    ├── Testimonials.jsx    # Testimonial carousel
    ├── HowItWorks.jsx      # Affiliate system explanation
    ├── FAQ.jsx             # FAQ accordion
    └── Footer.jsx          # Footer with links and contact
```

## File Details

### Configuration Files

**package.json**
- Contains all project dependencies
- Defines npm scripts (dev, build, preview, lint)
- Version: 0.0.0

**vite.config.js**
- Vite build tool configuration
- React plugin setup

**tailwind.config.js**
- Custom color definitions:
  - Primary: #003366 (Dark Blue)
  - Accent: #008000 (Green)
- Content paths for Tailwind

**postcss.config.js**
- Tailwind and Autoprefixer plugins

### HTML & Entry Files

**index.html**
- SEO meta tags
- Open Graph tags for social sharing
- Twitter Card tags
- Optimized title and description

**src/main.jsx**
- React application entry point
- Renders App component to DOM

### Main App Files

**src/App.jsx**
- Imports all components
- Main app structure
- Single-page scrolling layout

**src/index.css**
- Tailwind directives (@tailwind base, components, utilities)
- Custom carousel styles
- Smooth scroll behavior

**src/App.css**
- Global CSS reset
- Font family definitions

### Component Files

**Header.jsx**
- Fixed/sticky navbar
- Mobile hamburger menu
- Smooth scroll navigation
- Login/Signup buttons

**Hero.jsx**
- Gradient background (dark blue to lighter blue)
- Animated headline and CTA
- Framer Motion animations

**Stats.jsx**
- 4 animated counter cards
- Font Awesome icons
- Count-up animation effect

**Packages.jsx**
- 4 premium package cards
- Pricing with discounts
- Star ratings
- Course inclusions list
- Hover animations

**WhyChooseUs.jsx**
- 6 feature cards
- Icons for each feature
- Fade-in animations

**Instructors.jsx**
- React Slick carousel
- 8 instructor profiles
- Autoplay functionality
- Responsive breakpoints

**Founder.jsx**
- Founder profile card
- Photo and bio section
- Responsive layout

**Testimonials.jsx**
- React Slick carousel
- 6 student testimonials
- Star ratings
- Quote styling

**HowItWorks.jsx**
- 3-step process explanation
- Affiliate commission breakdown
- Dashboard preview CTA

**FAQ.jsx**
- Accordion component
- 6 frequently asked questions
- Animated expand/collapse

**Footer.jsx**
- 4-column layout
- Quick links
- Contact information
- Social media icons
- Secure payment badge

## Dependencies

### Core
- react: ^18.2.0
- react-dom: ^18.2.0

### Build Tools
- vite: ^5.0.0
- @vitejs/plugin-react: ^4.2.0

### Styling
- tailwindcss: ^3.3.5
- postcss: ^8.4.31
- autoprefixer: ^10.4.16

### UI Libraries
- framer-motion: ^10.16.4 (animations)
- react-slick: ^0.29.0 (carousels)
- slick-carousel: ^1.8.1 (carousel styles)

### Icons
- @fortawesome/fontawesome-svg-core: ^6.4.2
- @fortawesome/free-solid-svg-icons: ^6.4.2
- @fortawesome/free-brands-svg-icons: ^6.4.2
- @fortawesome/react-fontawesome: ^0.2.0

## Total Files: 25

### Breakdown
- Configuration: 5 files
- Documentation: 3 files
- HTML: 1 file
- Main App: 4 files
- Components: 11 files
- Other: 1 file (.gitignore)

## Key Features Implemented

✅ Fully responsive (mobile-first)
✅ Fixed sticky navbar
✅ Mobile hamburger menu
✅ Smooth scroll navigation
✅ Gradient hero section
✅ Animated statistics counters
✅ Premium package cards with hover effects
✅ Feature cards with icons
✅ Instructor carousel (autoplay)
✅ Founder profile section
✅ Testimonial carousel
✅ 3-step affiliate explanation
✅ Interactive FAQ accordion
✅ Complete footer with contact info
✅ SEO meta tags
✅ Custom Tailwind colors
✅ Font Awesome icons throughout
✅ Framer Motion animations
✅ Professional government-style design

## Color Palette

- **Primary Blue:** #003366
- **White Background:** #FFFFFF
- **Green Accent:** #008000
- **Gray Shades:** For text and backgrounds

## Image Sources

All images use Unsplash placeholder URLs:
- Instructor photos: https://images.unsplash.com/...
- Founder photo: https://images.unsplash.com/...

## Installation Command Summary

```bash
npm create vite@latest earnindia -- --template react
cd earnindia
npm install tailwindcss postcss autoprefixer framer-motion react-slick slick-carousel @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons @fortawesome/free-brands-svg-icons @fortawesome/react-fontawesome
npx tailwindcss init -p
npm run dev
```

## Next Steps for Production

1. Replace placeholder images with real ones
2. Connect to backend API
3. Implement payment gateway
4. Add authentication system
5. Set up affiliate tracking
6. Create admin dashboard
7. Optimize images
8. Add analytics
9. Set up CDN
10. Deploy to production

---

**Built with:** React + Vite + Tailwind CSS + Framer Motion + React Slick + Font Awesome

**License:** © 2026 EarnIndia

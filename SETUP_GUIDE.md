# EarnIndia Setup Guide

Complete step-by-step guide to set up and run the EarnIndia platform.

## Quick Start Commands

Run these commands in your terminal:

```bash
# 1. Create Vite project with React template
npm create vite@latest earnindia -- --template react

# 2. Navigate to project directory
cd earnindia

# 3. Install all required dependencies
npm install tailwindcss postcss autoprefixer framer-motion react-slick slick-carousel @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons @fortawesome/free-brands-svg-icons @fortawesome/react-fontawesome

# 4. Initialize Tailwind CSS
npx tailwindcss init -p

# 5. Start development server
npm run dev
```

## Manual Installation Steps

### Step 1: Create Vite Project
```bash
npm create vite@latest earnindia -- --template react
```

### Step 2: Navigate to Directory
```bash
cd earnindia
```

### Step 3: Install Core Dependencies
```bash
npm install
```

### Step 4: Install Tailwind CSS
```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### Step 5: Install Animation Libraries
```bash
npm install framer-motion
```

### Step 6: Install Carousel Library
```bash
npm install react-slick slick-carousel
```

### Step 7: Install Icon Library
```bash
npm install @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons @fortawesome/free-brands-svg-icons @fortawesome/react-fontawesome
```

### Step 8: Update Configuration Files

Replace the contents of these files with the provided code:
- `tailwind.config.js`
- `postcss.config.js`
- `index.html`
- `src/index.css`
- `src/App.jsx`
- `src/App.css`
- `src/main.jsx`

### Step 9: Create Components

Create a `components` folder in `src/` and add all component files:
- Header.jsx
- Hero.jsx
- Stats.jsx
- Packages.jsx
- WhyChooseUs.jsx
- Instructors.jsx
- Founder.jsx
- Testimonials.jsx
- HowItWorks.jsx
- FAQ.jsx
- Footer.jsx

### Step 10: Run Development Server
```bash
npm run dev
```

## Troubleshooting

### Port Already in Use
If port 5173 is occupied, Vite will automatically use the next available port.

### Module Not Found Errors
Make sure all dependencies are installed:
```bash
npm install
```

### Tailwind Styles Not Loading
Ensure `index.css` has the Tailwind directives and is imported in `main.jsx`

### Images Not Loading
The project uses Unsplash URLs for placeholder images. Make sure you have an internet connection.

## Environment Setup

### Node Version
Recommended: Node.js 16.x or higher

Check your version:
```bash
node --version
```

### Package Manager
This project uses npm, but you can also use yarn:
```bash
yarn install
yarn dev
```

## Production Build

### Build Command
```bash
npm run build
```

### Preview Build
```bash
npm run preview
```

### Deploy
The `dist` folder contains your production build. Upload it to any static hosting service:
- Vercel
- Netlify
- GitHub Pages
- AWS S3
- Cloudflare Pages

## Development Tips

### Hot Reload
Vite provides instant hot module replacement. Changes reflect immediately without full page reload.

### Component Development
Work on one component at a time for easier debugging.

### Responsive Testing
Use browser dev tools to test different screen sizes.

### Performance
The project is optimized, but you can further improve:
- Lazy load components
- Optimize images
- Add code splitting

## Next Steps

1. Customize colors in `tailwind.config.js`
2. Replace placeholder content with real data
3. Connect backend API for dynamic data
4. Add user authentication
5. Implement payment gateway
6. Set up affiliate tracking system
7. Add admin dashboard

## Support

If you encounter issues:
1. Check the README.md
2. Verify all dependencies are installed
3. Clear node_modules and reinstall: `rm -rf node_modules && npm install`
4. Check console for error messages

## Useful Commands

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint

# Clear cache and reinstall
rm -rf node_modules package-lock.json && npm install
```

Happy coding! 🚀

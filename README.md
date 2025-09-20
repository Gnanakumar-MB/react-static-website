# React Static Website

A modern, responsive React.js static website built with Vite, React Router, and Tailwind CSS.

## Features

- ⚡ **Fast Development** - Vite for lightning-fast HMR
- 🎨 **Modern UI** - Beautiful design with Tailwind CSS
- 📱 **Responsive** - Mobile-first responsive design
- 🧭 **Routing** - Client-side routing with React Router
- 🎯 **SEO Ready** - Optimized for search engines
- 🚀 **Production Ready** - Optimized build for deployment

## Tech Stack

- **React 18** - Modern React with hooks
- **Vite** - Fast build tool and dev server
- **React Router** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **PostCSS** - CSS processing

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Navbar.jsx      # Navigation component
│   └── Footer.jsx      # Footer component
├── pages/              # Page components
│   ├── Home.jsx        # Homepage
│   ├── About.jsx       # About page
│   ├── Services.jsx    # Services page
│   └── Contact.jsx     # Contact page
├── App.jsx             # Main app component
├── main.jsx            # App entry point
└── index.css           # Global styles with Tailwind
```

## Customization

### Branding

- Update the brand name in `src/components/Navbar.jsx` and `src/components/Footer.jsx`
- Modify colors in `tailwind.config.js`
- Replace placeholder content with your own

### Styling

- Customize Tailwind theme in `tailwind.config.js`
- Add custom CSS in `src/index.css`
- Modify component styles using Tailwind classes

## Deployment

### Static Hosting

This is a static website that can be deployed to any static hosting service:

- **Netlify**: Drag and drop the `dist` folder
- **Vercel**: Connect your Git repository
- **GitHub Pages**: Use GitHub Actions
- **AWS S3**: Upload the `dist` folder

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## License

MIT License - feel free to use this template for your projects!

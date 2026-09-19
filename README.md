# Void Kernel & VoidSU Website

> A modern, premium, developer-focused web application for **Void Kernel** and **VoidSU**, an open-source Android kernel and root-management ecosystem maintained by **heySaish**.

Built with **React 18**, **Vite**, **TypeScript**, **Tailwind CSS**, and **Lucide React**. Production-ready for deployment on **Netlify** or **GitHub Pages**.

---

## 🚀 Features & Architecture

- ⚡ **Vite + React 18 + TypeScript**: Lightning-fast dev environment with full type safety.
- 🎨 **Dark Technical Aesthetic**: Premium monospace & sans-serif typography, subtle scanline textures, dynamic terminal grid background, glassmorphism cards, and HSL glow accents.
- 🛡️ **VoidSU Companion Highlight**: Dedicated root ecosystem showcase detailing in-kernel hooks, SUSFS unmount protection, and zero-footprint architecture.
- 📱 **Target Hardware Support**: Focus on POCO M2 Pro / Redmi Note 9 Pro family (`gram` / `miatoll`) with Qualcomm Snapdragon 720G, plus an expandable community device architecture.
- 📊 **Technical Dashboard**: Interactive kernel metrics, live CPU core workload indicators, and real-time sysctl parameter state simulator.
- 📦 **Centralized Downloads Config**: Easily update kernel builds, VoidSU binaries, source repos, and SHA-256 checksums from `src/data/downloadsData.ts`.
- 📚 **Technical Documentation**: Interactive step-by-step guides for installation, first boot verification, VoidSU setup, manual sysctl tuning, and FAQ.
- 📜 **Timeline Changelog**: Versioned timeline detailing Kernel, Scheduler, Memory, Thermal, and VoidSU updates.
- 🌐 **Netlify Production Ready**: Pre-configured `netlify.toml` and `public/_redirects` handling single-page app (SPA) routing and security headers.

---

## 📁 Directory Structure

```text
├── public/
│   ├── favicon.svg          # Custom Void Kernel SVG icon
│   └── _redirects          # SPA fallback rule for Netlify
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── Badge.tsx
│   │   ├── CopyButton.tsx
│   │   ├── Footer.tsx
│   │   ├── Navbar.tsx
│   │   ├── ScrollToTop.tsx
│   │   └── TerminalBackground.tsx
│   ├── data/                # Centralized project data files
│   │   ├── changelogData.ts
│   │   ├── dashboardData.ts
│   │   ├── devicesData.ts
│   │   ├── docsData.ts
│   │   ├── downloadsData.ts
│   │   ├── featuresData.ts
│   │   └── voidsuData.ts
│   ├── pages/               # Multi-page React Router pages
│   │   ├── AboutPage.tsx    # /about
│   │   ├── ChangelogPage.tsx# /changelog
│   │   ├── DashboardPage.tsx# /dashboard
│   │   ├── DevicesPage.tsx  # /devices
│   │   ├── DocsPage.tsx     # /docs
│   │   ├── DownloadsPage.tsx# /downloads
│   │   ├── FeaturesPage.tsx # /features
│   │   ├── HomePage.tsx     # /
│   │   └── VoidSuPage.tsx   # /voidsu
│   ├── sections/            # Feature & detail content sections
│   ├── App.tsx              # React Router setup & route mapping
│   ├── index.css            # Tailwind directives & terminal custom styles
│   └── main.tsx             # React DOM root entry
├── index.html               # Primary HTML with SEO meta tags
├── netlify.toml             # Netlify deployment configuration
├── package.json             # Project dependencies & build scripts
├── postcss.config.js        # PostCSS setup for Tailwind CSS
├── tailwind.config.js       # Custom theme, colors, font families & keyframes
├── tsconfig.json            # TypeScript compiler configuration
└── vite.config.ts           # Vite configuration with path aliases (@/ -> src/)
```

---

## 🛠️ Local Development

### Prerequisites
- Node.js (v18.0.0 or higher)
- npm or yarn or pnpm

### Installation

```bash
# Clone the project repository
git clone https://github.com/heySaish/Void_Kernel.git
cd Test

# Install dependencies
npm install
```

### Run Dev Server

```bash
npm run dev
```
Open your browser at `http://localhost:3000` to view the website.

---

## 📦 Building for Production

To create an optimized production build:

```bash
npm run build
```

The compiled static bundle will be generated in the `dist/` directory.

---

## 🌐 Deploying on Netlify

### Option 1: Automatic Git Deployment (Recommended)
1. Push your repository to **GitHub**.
2. Log in to [Netlify](https://www.netlify.com/).
3. Click **Add new site** -> **Import an existing project**.
4. Select your `Void_Kernel` or website repository.
5. Netlify will automatically detect the settings from `netlify.toml`:
   - **Build Command**: `npm run build`
   - **Publish Directory**: `dist`
6. Click **Deploy Site**.

### Option 2: Netlify CLI
```bash
# Install Netlify CLI globally
npm install -g netlify-cli

# Build the app
npm run build

# Deploy to Netlify
netlify deploy --prod --dir=dist
```

---

## 👤 Maintainer & Open Source License

- **Project Maintainer**: [heySaish](https://github.com/heySaish)
- **Void Kernel License**: GPL-2.0
- **VoidSU License**: GPL-3.0
- **Website License**: MIT

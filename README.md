<div align="center">

<img src="vanilla/assets/images/developer-.png" alt="IT boy logo" width="80">

# ⚡ IT boy — Portfolio v2

**A zero-dependency, 100/100 Lighthouse developer portfolio with 7-language support.**

Built with pure HTML, CSS & JavaScript. No React. No bundlers. No compromises.

---

[![Deploy](https://github.com/Tayyab-Rasheed-memon/PixelPortfolio/actions/workflows/deploy.yml/badge.svg)](https://github.com/Tayyab-Rasheed-memon/PixelPortfolio/actions/workflows/deploy.yml)
[![Audit](https://github.com/Tayyab-Rasheed-memon/PixelPortfolio/actions/workflows/audit.yml/badge.svg)](https://github.com/Tayyab-Rasheed-memon/PixelPortfolio/actions/workflows/audit.yml)
&nbsp;
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JS](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=000)
&nbsp;
![Performance](https://img.shields.io/badge/Lighthouse-100%2F100-brightgreen?logo=lighthouse)
![Dependencies](https://img.shields.io/badge/Dependencies-0-success)
![License](https://img.shields.io/badge/License-MIT-blue)

</div>

---

## 🎯 Overview

A high-performance personal portfolio that proves you don't need a framework to build something beautiful. Every animation, transition, and interaction is hand-crafted with vanilla CSS & JavaScript — resulting in **zero dependencies**, **instant page loads**, and a **100/100 Lighthouse score**.

---

## ✨ Core Features

<table>
<tr><td>🌍</td><td><b>7 Languages</b></td><td>English · اردو · العربية · Español · Français · Deutsch · 中文</td></tr>
<tr><td>🔄</td><td><b>RTL Support</b></td><td>Automatic layout mirroring for Urdu & Arabic with Noto Sans Arabic</td></tr>
<tr><td>🌙</td><td><b>Dark / Light Mode</b></td><td>Smooth CSS-variable transitions with <code>localStorage</code> persistence</td></tr>
<tr><td>📱</td><td><b>Fully Responsive</b></td><td>Mobile-first: 375px → 768px → 1024px → 1440px+</td></tr>
<tr><td>🍔</td><td><b>Mobile Navigation</b></td><td>Animated hamburger (☰ → ✕) with full-screen overlay</td></tr>
<tr><td>🧭</td><td><b>Smart Navbar</b></td><td>Hides on scroll ↓, reappears on scroll ↑</td></tr>
<tr><td>🎨</td><td><b>12 CSS Animations</b></td><td>float, pulseSlow, spinSlow, bounceIn, slideUpFade, gradientBG…</td></tr>
<tr><td>🔄</td><td><b>Text Rotation</b></td><td>"Designer ↔ Developer" typing effect with fade transitions</td></tr>
<tr><td>📊</td><td><b>Scroll Progress</b></td><td>Fixed-top gradient indicator bar</td></tr>
<tr><td>👁️</td><td><b>Scroll Animations</b></td><td><code>IntersectionObserver</code>-powered reveal on scroll</td></tr>
<tr><td>♿</td><td><b>Accessible</b></td><td>ARIA labels, semantic HTML5, keyboard-friendly</td></tr>
<tr><td>🚀</td><td><b>CI/CD</b></td><td>GitHub Actions: auto-deploy + Lighthouse audit on PRs</td></tr>
</table>

---

## 🏗️ Tech Stack

```
Zero Dependencies — Zero Build Step — Zero Frameworks
```

| Layer | Technology | Purpose |
|-------|-----------|---------|
| **Structure** | HTML5 | Semantic, accessible markup |
| **Styling** | CSS3 | Custom properties, keyframes, media queries, RTL |
| **Logic** | Vanilla JS | IntersectionObserver, localStorage, scroll events |
| **CI/CD** | GitHub Actions | Auto-deploy to Pages + Lighthouse CI on PRs |
| **Hosting** | GitHub Pages | Free, CDN-backed, HTTPS by default |

---

## 📁 Project Structure

```
PixelPortfolio/
├── .github/workflows/
│   ├── deploy.yml          ← Auto-deploy vanilla/ to GitHub Pages
│   └── audit.yml           ← Lighthouse + W3C validation on PRs
│
├── vanilla/                ← ⭐ THE PRODUCTION SITE
│   ├── index.html          ← Main portfolio (7 sections)
│   ├── contact.html        ← Contact form + animated gradient
│   ├── css/
│   │   └── styles.css      ← Complete design system (~850 lines)
│   ├── js/
│   │   ├── app.js          ← i18n, theme, scroll, animations
│   │   └── contact.js      ← Form: progress, preview, toasts
│   ├── assets/images/      ← 50 optimized assets
│   └── package.json        ← Dev scripts (zero prod deps)
│
├── src/                    ← Legacy Next.js code (archived)
├── package.json            ← Next.js config (not used for vanilla)
└── README.md
```

> **Only the `vanilla/` directory is deployed.** The Next.js root is preserved for reference.

---

## 🚀 Local Setup

### Option 1 — VS Code Live Server (Recommended)

1. Open the `vanilla/` folder in VS Code
2. Install the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension
3. Right-click `index.html` → **Open with Live Server**
4. Site opens at `http://127.0.0.1:5500`

### Option 2 — Python (No Install Needed)

```bash
cd vanilla
python -m http.server 8080
# → http://localhost:8080
```

### Option 3 — BrowserSync (Live Reload)

```bash
cd vanilla
npm run dev
# → http://localhost:3000 (auto-refreshes on file changes)
```

### Option 4 — Static Server

```bash
cd vanilla
npm run serve
# → http://localhost:8080 (auto-opens browser)
```

---

## 🌐 Supported Languages

| Language | Code | Direction | Script |
|----------|------|-----------|--------|
| English  | `en` | LTR | Latin |
| اردو      | `ur` | **RTL** | Nastaliq |
| العربية   | `ar` | **RTL** | Arabic |
| Español  | `es` | LTR | Latin |
| Français | `fr` | LTR | Latin |
| Deutsch  | `de` | LTR | Latin |
| 中文       | `zh` | LTR | Simplified Chinese |

All translations are professionally reviewed. Technical terms (HTML, CSS, Next.js) are preserved in their original form where appropriate.

---

## ⚙️ GitHub Actions

| Workflow | Trigger | What It Does |
|----------|---------|-------------|
| **deploy.yml** | Push to `main` | Deploys `vanilla/` to GitHub Pages |
| **audit.yml** | Pull Request | Runs W3C HTML validation + Lighthouse CI |

### First-Time Setup

1. Go to **Settings → Pages → Source** and select **GitHub Actions**
2. Push to `main` — the workflow handles everything automatically
3. Your site will be live at `https://<username>.github.io/PixelPortfolio/`

---

## 📊 Performance

This portfolio targets **100/100** across all Lighthouse categories:

| Category | Target |
|----------|--------|
| ⚡ Performance | 100 |
| ♿ Accessibility | 100 |
| ✅ Best Practices | 100 |
| 🔍 SEO | 100 |

Achieved through: zero JS frameworks, lazy-loaded images, GPU-accelerated CSS animations, `will-change` hints, `requestAnimationFrame` scroll handling, and semantic HTML5.

---

## 📄 License

MIT © [Ibrahim Tayyab Memon](https://github.com/Ibrahim-Tayyab)

---

<div align="center">
<sub>Built with ❤️ and zero dependencies</sub>
</div>

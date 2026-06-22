# &lt;/&gt; Codify — Personal Developer Portfolio

> A modern, high-performance personal portfolio built to convert visitors into clients.

![HTML5](https://img.shields.io/badge/HTML5-E34C26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-264DE4?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![Status](https://img.shields.io/badge/Status-Live-00FF41?style=flat)

---

## ✨ Overview

Codify is a personal developer portfolio website showcasing projects, technical skills, and contact information. It features a dark cyberpunk aesthetic with a black/purple/green color theme, an interactive 3D robot model, and smooth scroll-reveal animations — all built with pure HTML, CSS, and Vanilla JavaScript (no frameworks).

---

## 🖥️ Live Preview

> Open `index.html` in your browser or deploy to any static host (GitHub Pages, Netlify, Vercel).

---

## 🎨 Design System

| Role        | Color     | Hex       | Usage                          |
|-------------|-----------|-----------|--------------------------------|
| Background  | Black     | `#0a0a0f` | Page background (60%)          |
| Primary     | Purple    | `#9b5de5` | Headings, borders, accents     |
| Light Purple| Lilac     | `#c77dff` | Card titles, logo, highlights  |
| Accent      | Matrix Green | `#00FF41` | CTA, tags, glow effects (10%) |
| Body Text   | Off-white | `#f0f0f5` | Paragraphs                     |
| Muted Text  | Slate     | `#8888aa` | Labels, descriptions           |

**Fonts:**
- `Orbitron` — Display / Headings (futuristic feel)
- `Inter` — Body text (clean readability)
- `Fira Code` — Labels, tags, code-style elements

---

## 🚀 Features

- **Matrix Rain Canvas** — Animated background of falling Katakana + hex characters
- **3D Interactive Robot** — Powered by Google's `<model-viewer>` (auto-rotates, camera-controllable)
- **Scroll Reveal Animations** — Elements fade and slide in as you scroll down
- **Staggered Card Entrance** — Project cards animate in with cascading delays
- **Active Nav Highlighting** — Current section highlighted in the navbar
- **Smooth Anchor Scrolling** — All `#` links glide smoothly with navbar offset
- **Responsive Design** — Mobile hamburger menu, fluid grid layouts
- **Reduced Motion Support** — Respects `prefers-reduced-motion` for accessibility
- **Hover Micro-interactions** — Cards lift, images zoom, green overlay with "View Project →"

---

## 📁 Project Structure

```
portfolio/
│
├── index.html              # Main homepage
├── Style.css               # All styles (variables, layout, animations)
├── index.js                # All interactivity (matrix, scroll, menu)
│
├── media/
│   ├── twelve_the_robot_low_poly.glb   # 3D robot model
│   ├── MongoDB.png
│   └── MySQL.png
│
├── Projects/
│   ├── Amazon clone/
│   │   ├── index.html
│   │   └── preview.png
│   ├── To Do List/
│   │   ├── index.html
│   │   └── to do list preview.png
│   ├── Fun fact generator/
│   │   ├── index.html
│   │   └── preview.png
│   ├── digital clock/
│   │   ├── index.html
│   │   └── pre.png
│   ├── calculator/
│   │   ├── index.html
│   │   └── prev.png
│   └── weather app/
│       ├── index.html
│       └── preview.png
│
└── others/
    ├── resume.html
    └── contact.html
```

---

## 🛠️ Tech Stack

| Technology     | Purpose                          |
|----------------|----------------------------------|
| HTML5          | Structure & semantics            |
| CSS3           | Styling, animations, responsive  |
| JavaScript (ES6+) | Interactivity & canvas        |
| Google Model Viewer | 3D GLB model rendering      |
| Font Awesome 6 | Icons                            |
| Google Fonts   | Orbitron, Inter, Fira Code       |

---

## 📦 Projects Showcased

| # | Project | Description | Stack |
|---|---------|-------------|-------|
| 1 | Amazon Clone | Full clone of the Amazon e-commerce UI | HTML, CSS, JS |
| 2 | To Do List | Task management app with add/delete | HTML, CSS, JS |
| 3 | Fun Fact Generator | Random facts fetched via API | HTML, CSS, JS |
| 4 | Digital Clock & Timer | Real-time web clock with timer | HTML, CSS, JS |
| 5 | Calculator | Modern calculator with all operations | HTML, CSS, JS |
| 6 | Weather App | Real-time city weather via API | HTML, CSS, JS |

---

## ⚡ Getting Started

### Run Locally

```bash
# Clone the repository
git clone https://github.com/yourusername/codify-portfolio.git

# Navigate into the folder
cd codify-portfolio

# Open in browser (no build step needed)
open index.html
# or just double-click index.html
```

### Deploy to GitHub Pages

```bash
# Push your code to a GitHub repo, then go to:
# Settings → Pages → Source → Deploy from branch → main → / (root)
# Your site will be live at: https://yourusername.github.io/codify-portfolio
```

### Deploy to Netlify

```bash
# Drag and drop your project folder at:
# https://app.netlify.com/drop
# Done — instant live URL!
```

---

## 🔧 Customization

### Update contact email
In `index.html`, find all occurrences of `mzawar505@gmail.com` and replace with your email.

### Add a new project card
Copy any `.card` block inside `#projects` and update:
- `src` on the `<img>` — preview screenshot
- `card-title` — project name
- `card-desc` — short description
- `href` on the overlay button — link to your project

### Change color theme
All colors are CSS custom properties in `Style.css` under `:root`. Edit `--purple`, `--green`, or `--bg` to retheme the entire site instantly.

---

## 📬 Contact

| Channel  | Link |
|----------|------|
| Email    | [mzawar505@gmail.com](mailto:mzawar505@gmail.com) |
| LinkedIn | [linkedin.com/in/your-profile](https://www.linkedin.com/public-profile/settings) |
| Portfolio | [your-portfolio-url.com](https://blacweb/github.io/Portfolio) |

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<p align="center">
  Built with 💜 by <strong>Codify</strong> &nbsp;·&nbsp; Since 2023
</p>
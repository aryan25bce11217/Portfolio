# Developer Portfolio

Static site: HTML5, CSS3, vanilla JavaScript (ES6+). No build step, no dependencies.

## Structure
```
portfolio/
├── index.html
├── css/style.css
├── js/script.js
├── assets/images/ (profile.jpg, project-stays.jpg)
└── README.md
```

## Run locally
Open `index.html` in a browser, or run `npx serve .` / VS Code "Live Server".

## Customise
- Replace `Your Name`, `you@example.com`, college details and social links in `index.html`.
- Edit skills and projects (title, tech, GitHub/demo URLs) in the arrays at the top of `js/script.js`.
- Colours, radius and shadows are CSS variables at the top of `css/style.css`.
- Contact form uses `mailto:` (no backend). Change the address in `js/script.js`.

## Deploy
- **Netlify / Vercel:** drag the folder in (or import the repo); no build command, output directory `.`.
- **GitHub Pages:** push to a repo, Settings → Pages → Deploy from branch `main` / root.

## Requirement checklist
| Requirement | Where |
|---|---|
| Fixed nav, smooth links, hamburger | `header.site-header`, `scroll-behavior`, `scroll-padding-top`, `#nav-toggle` |
| Hero: headline, sub-headline, CTA | `#home` |
| About + skills card grid | `#about`, `#skills` |
| Interactive component | Glass skill cards (cursor glow) + project filter/carousel |
| Footer: socials, copyright, nav | `footer.footer` |
| Responsive, no horizontal scroll | Grid/flex, `clamp()`, breakpoints at 900/720/400px |
| Hover/transitions, reduced motion | `style.css` (`prefers-reduced-motion` block) |

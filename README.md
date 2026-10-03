# Personal Developer Portfolio  ARYAN KUNDU 25BCE11217

Live link:- https://aryan25bce11217-portfolio.netlify.app/

A responsive, single-page portfolio website I built as my iOS CLUB task. It introduces me as a full-stack developer and shows my skills and projects. The design takes its cues from a few portfolio sites I liked: a soft cyan glow on a white page, a floating pill-shaped navbar, and big, bold headings.

**Stack:** HTML5, CSS3,  JavaScript. 

## What's on the page

| Section | What it has |
|---|---|
| **Navbar** | Fixed and always visible. Links scroll smoothly to each section, and the current section is highlighted as you scroll. On mobile it turns into a hamburger menu that animates into a cross. There's also a dark mode toggle. |
| **Hero** | Headline, short sub-headline, two buttons ("View My Projects" and "Let's Connect"), and a small code-style card. |
| **About** | Short intro, my photo, education and a few quick stats. |
| **Skills** | Four cards (Frontend, Backend, Database, Tools). Each is a glass-style card with a glow that follows the cursor. |
| **Projects** | Four projects with a working filter (All / Frontend / Backend / React) and a carousel with prev/next buttons and a progress bar. |
| **Contact** | A short form plus GitHub, LinkedIn and email buttons. |
| **Footer** | Social links, copyright and secondary navigation. |

## Folder structure

```
portfolio/
├── index.html
├── css/style.css
├── js/script.js
├── assets/images/
└── README.md
```
## Running it

Open index.html in any browser. Or, for a local server, run npx serve . in the folder (or use VS Code's Live Server).

## Tech Stack

- **Responsive:** built with CSS Grid, Flexbox and `clamp()`, with breakpoints for tablet and mobile. I designed it to avoid horizontal scrolling instead of hiding overflow.
- **Interactive parts:** the glass skill cards, the project filter and the carousel (arrow keys work too).
- **Accessibility:** semantic HTML, a skip link, visible focus outlines, labelled buttons and `Esc` to close the mobile menu. Animations are turned off for users who prefer reduced motion.
- **Contact form:** there's no backend, so submitting opens the visitor's email app with the message filled in, rather than pretending to send it.
- **Customising:** colours and spacing are CSS variables at the top of `style.css`. Skills and projects are plain arrays at the top of `script.js`.

## Deployment

It's a static site, so it works as-is on any host.
- **Netlify:** import the repo or drag the folder in. No build command; the output directory is the root.
- **GitHub Pages:** push to a repo, then go to Settings → Pages and deploy from the `main` branch.


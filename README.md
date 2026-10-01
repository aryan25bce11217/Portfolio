# Full-Stack Developer Portfolio

A responsive, interactive personal portfolio website built with **HTML,
CSS, and vanilla JavaScript**. The project presents a developer profile,
technical skills, selected projects, contact information, and several
interactive UI features such as a mobile navigation menu, dark/light
theme toggle, live clock, project filtering, project carousel,
scroll-based animations, and an email-based contact form.

> **Note:** The supplied project files use placeholder personal
> information such as `Aryan Kundu`, `aryankundu1105@gmail.com`, and
> `VIT Bhopal University`. Replace these values with your actual
> information before deploying the portfolio.

------------------------------------------------------------------------

## 📌 Project Overview

This portfolio is designed as a modern developer landing page/portfolio
with the following main sections:

-   **Navigation Bar**
-   **Hero Section**
-   **About Me**
-   **Technical Skills**
-   **Projects**
-   **Contact**
-   **Footer**

The HTML document defines the overall page structure and accessibility
attributes, while `script.js` supplies the dynamic and interactive
behavior.

The page uses the **Inter** font from Google Fonts and references a
separate stylesheet named `style.css`. The HTML also references image
assets under `assets/images/`. These supporting files/assets are
expected to be present when the project is run locally.

------------------------------------------------------------------------

## 📁 Project Structure

``` text
portfolio/
│
├── index.html
└── js/
│   └── script.js
└── css/
│   └── style.css
│
└── assets/
    └── images/
        ├── profile.jpg
        └── project-stays.jpg
```

### Main Files

  -----------------------------------------------------------------------
  File                                Purpose
  ----------------------------------- -----------------------------------
  `index.html`                        Defines the complete portfolio page
                                      structure and content

  `script.js`                         Handles navigation, theme
                                      switching, skills, project
                                      filtering/carousel, animations,
                                      clock, and contact form behavior

  `style.css`                         Provides the visual styling and
                                      responsive layout *(referenced by
                                      the supplied HTML)*

  `assets/images/profile.jpg`         Profile image referenced in the
                                      hero/about sections

  `assets/images/project-stays.jpg`   Project image used by the Trekly
                                      project
  -----------------------------------------------------------------------

------------------------------------------------------------------------

# 🧩 `index.html`

The HTML file begins with standard HTML5 structure, English language
configuration, responsive viewport settings, page title, meta
description, Google Fonts, and the stylesheet reference.


The HTML also contains an inline SVG icon sprite containing icons for:

-   Home
-   User/About
-   Grid/Projects
-   Code/Skills
-   Mail
-   Moon/theme
-   GitHub
-   LinkedIn
-   Arrow
-   External link

These reusable SVG symbols are referenced throughout the page.

------------------------------------------------------------------------

## 🧭 Navigation Bar

The navigation is contained inside the `<header>` element.

It includes:

-   Home
-   About
-   Skills
-   Projects
-   Contact
-   Dark/light theme button
-   Mobile hamburger menu
-   Live clock
-   Automatically detected timezone

The navigation links use section anchors:

``` text
#home
#about
#skills
#projects
#contact
```

A skip-to-content link is also provided for accessibility.

The navigation markup includes ARIA attributes such as `aria-expanded`,
`aria-controls`, `aria-label`, and `aria-current`-style active-state
behavior through JavaScript.

------------------------------------------------------------------------

# 🦸 Hero Section

The hero section uses the `home` ID and acts as the primary landing
section.

It contains:

### Availability Badge

``` text
Open to internships
```

This links directly to the Contact section.

### Main Heading

``` text
Building next-gen web experiences
```


### Call-to-Action Buttons

Two main actions are provided:

-   **View My Projects**
-   **Let's Connect**

### About Profile Pill

A small profile element displays:

-   Profile image
-   `About - Aryan Kundu`

### Code Preview

The hero also includes a glass-style code preview showing an example
developer object:

``` javascript
const dev = {
  name: 'Aryan Kundu',
  role: 'Full-Stack Developer',
  stack: ['React', 'Node', 'MongoDB'],
  available: true
};
```

------------------------------------------------------------------------

# 👤 About Section

The About section presents the developer profile and personal
information.

It contains:

-   Profile/avatar image
-   Timezone
-   Languages
-   Name
-   Role
-   Social links
-   Developer description
-   Education
-   Portfolio statistics

### Languages

The supplied HTML lists:

-   English
-   Hindi

### Social Links

The page includes links for:

-   GitHub
-   LinkedIn
-   Email

The current GitHub and LinkedIn URLs are placeholders and should be
replaced with the actual profiles.

### About Text

The supplied description focuses on:

-   Responsive web experiences
-   Scalable applications
-   User-friendly interfaces
-   Frontend development
-   Backend development
-   Turning ideas into functional products




------------------------------------------------------------------------

# 🛠️ Technical Skills

The Skills section is dynamically generated by JavaScript.

The current skill categories are:

## Frontend

Description:

``` text
Responsive, accessible interfaces with modern tooling.
```

Technologies:

-   HTML5
-   CSS3
-   JavaScript
-   React.js

## Backend



Technologies:

-   Node.js
-   Express.js
-   REST APIs

## Database



Technologies:

-   SQL
-   MongoDB
-   Mongoose

## Tools



Technologies:

-   Git
-   GitHub
-   VS Code

The skill cards are generated from the `SKILLS` array in `script.js`,
making the section easy to update.

------------------------------------------------------------------------

# 💼 Projects Section

The Projects section contains:

-   Category filters
-   Previous/next carousel controls
-   Project progress indicators
-   Project description
-   Technology tags
-   GitHub link
-   Live demo link

Projects can be filtered by:

-   All
-   Frontend
-   Backend
-   React

The project list is stored in the `PROJECTS` array in `script.js`.

------------------------------------------------------------------------

# 🎠 Project Carousel

The project area works as a carousel.

Users can navigate using:

-   Previous button
-   Next button
-   Progress indicator buttons
-   Keyboard left/right arrow keys

The carousel wraps around when reaching either end.

For example, moving backward from the first project takes the user to
the last project.

The project information is regenerated whenever the selected project
changes.

------------------------------------------------------------------------

# 📬 Contact Section

The Contact section contains a call-to-action:

``` text
Let's build something together.
```

It is intended for:

-   Internship opportunities
-   Project ideas
-   Collaboration
-   General contact

Three direct contact buttons are provided:

-   Email
-   GitHub
-   LinkedIn

------------------------------------------------------------------------

## Contact Form

The form contains:

-   Name
-   Email
-   Message
-   Send Message button

The fields are marked as required.

The email field uses HTML email validation.

### Important Implementation Detail

The supplied project **does not use a backend contact API**.

Instead, JavaScript:

1.  Prevents the browser's default form submission.
2.  Checks whether the form is valid.
3.  Reads the submitted name, email, and message.
4.  Builds a `mailto:` URL.
5.  Opens the visitor's default email application.


Replace this with the actual portfolio owner's email address.

------------------------------------------------------------------------

# 🌓 Dark/Light Theme

The theme toggle is implemented using JavaScript and `localStorage`.

When the user changes the theme, the code stores the selected value
under:




in browser local storage.

This means the selected theme can persist between page visits in the
same browser.

The theme is applied through:

``` javascript
document.documentElement.dataset.theme
```

The actual colors and visual appearance are controlled by `style.css`.

------------------------------------------------------------------------

# 📱 Mobile Navigation

The navigation includes a hamburger menu for smaller screens.

JavaScript controls:

-   Opening the menu
-   Closing the menu
-   `aria-expanded`
-   Button accessibility label

The menu automatically closes when:

-   A navigation link is clicked
-   The Escape key is pressed
-   The user clicks outside the navigation area

------------------------------------------------------------------------

# 🕒 Live Clock and Timezone

The header includes a live digital clock.

JavaScript updates the clock every second using:

``` javascript
new Date().toLocaleTimeString("en-GB")
```

The timezone label is detected automatically through:

``` javascript
Intl.DateTimeFormat().resolvedOptions().timeZone
```

The HTML contains an initial timezone placeholder, but JavaScript
replaces it with the browser's detected timezone.

The footer year is also automatically updated using the current year.

------------------------------------------------------------------------

# ✨ Scroll Reveal Animations

Elements with the `reveal` class are observed using
`IntersectionObserver`.

When an element enters the viewport, JavaScript adds:

``` text
is-visible
```

The actual animation/transition styling is expected to be defined in
`style.css`.

Once an element becomes visible, it is no longer observed.

------------------------------------------------------------------------

# 🎨 Interactive Skill Cards

The skill cards have a cursor-based interaction.

When the pointer moves over a skill card, JavaScript calculates the
pointer's position relative to that card and updates:

``` text
--mx
--my
```

CSS can use these custom properties to create a cursor-following glow or
similar visual effect.

This behavior contributes to the glass-card interaction described in the
source code.

------------------------------------------------------------------------

# ♿ Accessibility Features

The supplied HTML and JavaScript include several accessibility-oriented
features.

Examples include:

-   Skip-to-content link
-   Semantic `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`,
    and `<footer>` elements
-   ARIA labels
-   `aria-expanded` for the mobile menu
-   `aria-controls` for the navigation
-   `aria-pressed` for project filters
-   `aria-live="polite"` for the project carousel stage
-   Keyboard support for carousel navigation
-   Form labels
-   Required form controls
-   Image `alt` text for meaningful images
-   `rel="noopener"` on external links opened in new tabs

------------------------------------------------------------------------

# 🚀 Deployment

The website is deployed on netlify.
------------------------------------------------------------------------

# 📄 License

No explicit license is provided in the supplied files.

If this portfolio is intended to be distributed as an open-source
project, add an appropriate license file such as `LICENSE` and specify
the terms under which the code may be used.

------------------------------------------------------------------------


## ⭐ Summary

This project is a **modern full-stack developer portfolio frontend**
with a clean single-page structure and interactive client-side behavior.

Its key features include:

-   Responsive portfolio layout
-   Hero landing section
-   About/profile section
-   Dynamic technical-skill cards
-   Filterable projects
-   Interactive project carousel
-   Glass-style UI elements
-   Cursor-based skill-card interaction
-   Dark/light theme persistence
-   Mobile hamburger navigation
-   Active navigation tracking
-   Live clock and automatic timezone detection
-   Scroll reveal animations
-   Accessible keyboard interactions
-   Email-based contact form
-   GitHub, LinkedIn, and email contact options

The main customization logic is intentionally centralized in the
editable content sections of `index.html` and `script.js`, allowing the
portfolio to be adapted to a real developer profile without changing the
core interaction logic.

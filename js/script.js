"use strict";

const SKILLS = [
  { icon: "i-code", title: "Frontend", text: "Responsive, accessible interfaces with modern tooling.", tags: ["HTML5", "CSS3", "JavaScript", "React.js"] },
  { icon: "i-grid", title: "Backend", text: "Scalable server-side apps and clean REST APIs.", tags: ["Node.js", "Express.js", "REST APIs"] },
  { icon: "i-user", title: "Database", text: "Designing schemas and querying data efficiently.", tags: ["SQL", "MongoDB", "Mongoose"] },
  { icon: "i-gh", title: "Tools", text: "Version control and a smooth daily workflow.", tags: ["Git", "GitHub", "VS Code"] },
];

const PROJECTS = [
  { title: "Trekly: Modern Booking Platform", cat: ["backend"], image: "assets/images/project-stays.jpg",
    alt: "Trekly app showing destination categories and listing cards",
    desc: "A full-stack stay-booking app with category browsing, destination search and listing pages.",
    tech: ["Node.js", "Express", "MongoDB"], github: "https://github.com/", demo: "https://trekly-bp9s.onrender.com/listings" },

];

const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const icon = (id, cls = "ico") => `<svg class="${cls}"><use href="#${id}"/></svg>`;

const toggle = $("#nav-toggle"), menu = $("#nav-menu");
const setMenu = open => {
  menu.classList.toggle("is-open", open);
  toggle.setAttribute("aria-expanded", open);
  toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
};
toggle.addEventListener("click", () => setMenu(toggle.getAttribute("aria-expanded") !== "true"));
$$(".nav__link[href^='#']").forEach(a => a.addEventListener("click", () => setMenu(false)));
document.addEventListener("keydown", e => { if (e.key === "Escape") { setMenu(false); toggle.focus(); } });
document.addEventListener("click", e => { if (!e.target.closest(".nav")) setMenu(false); });

const links = $$(".nav__link[href^='#']");
const spy = new IntersectionObserver(entries => {
  entries.forEach(en => {
    if (en.isIntersecting) links.forEach(l => l.classList.toggle("is-active", l.getAttribute("href") === `#${en.target.id}`));
  });
}, { rootMargin: "-45% 0px -50% 0px" });
$$("main section[id]").forEach(s => spy.observe(s));

const tick = () => { $("#clock").textContent = new Date().toLocaleTimeString("en-GB"); };
$("#tz-label").textContent = Intl.DateTimeFormat().resolvedOptions().timeZone;
tick(); setInterval(tick, 1000);
$("#year").textContent = new Date().getFullYear();

const root = document.documentElement;
const saved = localStorage.getItem("theme");
if (saved) root.dataset.theme = saved;
$("#theme-toggle").addEventListener("click", () => {
  const next = root.dataset.theme === "dark" ? "light" : "dark";
  root.dataset.theme = next; localStorage.setItem("theme", next);
});

$("#skills-grid").innerHTML = SKILLS.map(s => `
  <article class="skill-card glass reveal">
    <div class="skill-card__icon">${icon(s.icon)}</div>
    <h3>${s.title}</h3><p>${s.text}</p>
    <ul class="tags">${s.tags.map(t => `<li>${t}</li>`).join("")}</ul>
  </article>`).join("");
$$(".skill-card").forEach(card => card.addEventListener("pointermove", e => {
  const r = card.getBoundingClientRect();
  card.style.setProperty("--mx", `${e.clientX - r.left}px`);
  card.style.setProperty("--my", `${e.clientY - r.top}px`);
}));

const stage = $("#stage"), info = $("#project-info"), bar = $("#progress");
let list = [...PROJECTS], index = 0;

function renderProject() {
  const p = list[index];
  stage.innerHTML = p.image
    ? `<img class="slide-img" src="${p.image}" alt="${p.alt}" loading="lazy">`
    : `<div class="mockup" role="img" aria-label="${p.title} mockup">
         <div class="mock__bar"><i></i><i></i><i></i><span>${p.title}</span></div>
         <div class="mockup__body"><h4>${p.mock.heading}</h4>
         <div class="mockup__row">${p.mock.chips.map(c => `<span>${c}</span>`).join("")}</div></div></div>`;
  info.innerHTML = `
    <h3>${p.title}</h3>
    <div><p>${p.desc}</p>
      <ul class="tags">${p.tech.map(t => `<li>${t}</li>`).join("")}</ul>
      <div class="project-links">
        <a href="${p.github}" target="_blank" rel="noopener">GitHub ${icon("i-arrow")}</a>
        <a href="${p.demo}" target="_blank" rel="noopener">Live demo ${icon("i-ext")}</a>
      </div></div>`;
  bar.innerHTML = list.map((_, i) =>
    `<button class="${i === index ? "is-active" : ""}" aria-label="Show project ${i + 1}" data-i="${i}"></button>`).join("");
}
const go = n => { index = (n + list.length) % list.length; renderProject(); };
$("#prev").addEventListener("click", () => go(index - 1));
$("#next").addEventListener("click", () => go(index + 1));
bar.addEventListener("click", e => { const b = e.target.closest("button"); if (b) go(+b.dataset.i); });
$(".carousel").addEventListener("keydown", e => {
  if (e.key === "ArrowLeft") go(index - 1);
  if (e.key === "ArrowRight") go(index + 1);
});

$$(".filter").forEach(btn => btn.addEventListener("click", () => {
  $$(".filter").forEach(b => { const on = b === btn; b.classList.toggle("is-active", on); b.setAttribute("aria-pressed", on); });
  const f = btn.dataset.filter;
  list = f === "all" ? [...PROJECTS] : PROJECTS.filter(p => p.cat.includes(f));
  index = 0; renderProject();
}));
renderProject();

const io = new IntersectionObserver((entries, o) => entries.forEach(en => {
  if (en.isIntersecting) { en.target.classList.add("is-visible"); o.unobserve(en.target); }
}), { threshold: .12 });
$$(".reveal").forEach(el => io.observe(el));

$("#contact-form").addEventListener("submit", e => {
  e.preventDefault();
  const f = e.target, status = $("#form-status");
  if (!f.checkValidity()) { status.textContent = "Please fill in all fields with a valid email."; f.reportValidity(); return; }
  const d = new FormData(f);
  const body = encodeURIComponent(`${d.get("message")}\n\n– ${d.get("name")} (${d.get("email")})`);
  location.href = `mailto:you@example.com?subject=${encodeURIComponent("Portfolio message from " + d.get("name"))}&body=${body}`;
  status.textContent = "Opening your email app to send the message…";
  f.reset();
});

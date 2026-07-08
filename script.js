/* ============================================================
   ADD A NEW PROJECT HERE — copy one block, edit the fields,
   save, redeploy. They render in array order.
   image: null  -> styled placeholder box
   image: "photos/rocket.jpg" -> real photo (file next to index.html)
   ============================================================ */
const PROJECTS = [
  {
    category: "Robotics",
    title: "Blackout Robotics — Power Play",
    subtitle: "FTC — 19280 · UK235",
    years: "2022–23",
    description: "Design Lead for the full robot CAD and mechanism design. My main contribution was the arm's virtual four-bar linkage, which gave a compact, controlled motion. The servo horn stripped during competition, so next time I'd design a more serviceable drive solution.",
    awards: [
      "South East Regional — Winning Alliance Captain",
      "South East Regional — Inspire Award",
      "UK National Champions"
    ],
    slug: "blackout-power-play",
    contributors: [
      { name: "Ryan Ganguli", url: "https://www.linkedin.com/in/ryan-ganguli-087910319/" },
      { name: "Harshiv Puri", url: "https://www.linkedin.com/in/harshiv-puri-4500202b2/" }
    ],
    image: "photos/blackout-s1-front.png",
    imageHover: "photos/blackout-s1-iso.png"
  },
  {
    category: "Robotics",
    title: "Blackout Robotics — Centerstage",
    subtitle: "FTC — 19280 · UK235",
    years: "2023–24",
    description: "Lead Designer and team coach, supporting the wider CAD and build process while helping younger members develop their design skills. I contributed to the intake and drivetrain mechanisms, focusing on practical, reliable solutions that could be manufactured, assembled and iterated quickly during the season.",
    awards: [
      { label: "FRC Dean's List Award — 1884", highlight: true },
      "South East Regional — Winning Alliance Captain",
      "South East Regional — Inspire Award",
      "UK National Champions",
      "UK Control Award"
    ],
    slug: "blackout-centerstage",
    contributors: [
      { name: "Ryan Ganguli", url: "https://www.linkedin.com/in/ryan-ganguli-087910319/" },
      { name: "Harshiv Puri", url: "https://www.linkedin.com/in/harshiv-puri-4500202b2/" },
      { name: "Otto Skibeli", url: "https://www.linkedin.com/in/otto-skibeli-881054358/" },
      { name: "Sebastian Seminara", url: null },
      { name: "Sam Sarkar", url: null }
    ],
    image: "photos/blackout-s2-front.png",
    imageHover: "photos/blackout-s2-iso.png"
  },
  {
    category: "Personal",
    title: "CGCU Extreme Weather Makeathon",
    subtitle: "CGCU Makeathon — Imperial College London",
    years: "2025",
    description: "Led the robot's design and technical build, taking it from CAD to a working tracked prototype. I designed the mechanical layout, built the electronics, and handled the wiring and code under a tight deadline. The project ended up winning the competition.",
    awards: [
      "1st Place — CGCU Makeathon Winners",
      "Sponsored by PCBWay"
    ],
    slug: "cgcu-makeathon",
    contributors: [
      { name: "Christian Gorchev", url: "https://www.linkedin.com/in/christian-gorchev-41a697380/" },
      { name: "Dimitrios Tsipolitis", url: null }
    ],
    image: "photos/makeathon-front.png",
    imageHover: "photos/makeathon-iso.png"
  },
  {
    category: "Course",
    title: "Lecture Pulse",
    subtitle: "Human Centred Design — Imperial College London",
    years: "2025–2026",
    description: "Built the physical ESP32 feedback pad and its core electronics, including illuminated buttons, LiPo power and the phone-slot switch. The system turned live class input into a focus score and question alert for lecturers.",
    awards: [
      "Grade: A",
      "Selected to Present — Great Exhibition Road Festival"
    ],
    slug: "lecture-pulse",
    contributors: [
      { name: "Roma Krishna Moorthy", url: "https://www.linkedin.com/in/romasyrry-shunmugam-b38804389/" },
      { name: "Yusra Ali", url: "https://www.linkedin.com/in/yusra-ali-565b092b0/" }
    ],
    image: "photos/lecturepulse-closed.png",
    imageHover: "photos/lecturepulse-open.png",
    hoverStyle: "expand"
  },
  {
    category: "Course",
    title: "Electronics Car Race",
    subtitle: "Electronics — Imperial College London",
    years: "2025–2026",
    description: "Designer for the car's base and chassis layout in CAD, packaging the motors, battery, wiring and bodywork within the size constraints. I also helped shape the overall system concept and supported the electronics build through soldering, wiring and planning the power/control architecture.",
    awards: ["Grade: A", "2nd Place — Year Group Race"],
    slug: "electronics-car-race",
    contributors: [
      { name: "Sebastian Khan Hummel", url: "https://www.linkedin.com/in/sebastian-khan-hummel-376712317/" },
      { name: "Tomas Markey", url: "https://www.linkedin.com/in/tomas-markey-083358249/" },
      { name: "Musa Ali Sajjad", url: null }
    ],
    image: "photos/car-race-front.png",
    imageHover: "photos/car-race-iso.png"
  }
];

/* Skills — add/remove entries freely */
const SKILLS = [
  { cat: "CAD",  name: "Fusion 360" },
  { cat: "CAD",  name: "SolidWorks" },
  { cat: "Code", name: "Python" },
  { cat: "Code", name: "C++" },
  { cat: "Fab",  name: "3D Printing" },
  { cat: "Fab",  name: "Machining" },
  { cat: "Elec", name: "Circuit Design" },
  { cat: "Elec", name: "Soldering / PCB" },
  { cat: "CAD",  name: "Onshape" },
  { cat: "Code", name: "Vibecoding" },
  { cat: "Elec", name: "PCB Design" },
  { cat: "Code", name: "Java" },
  { cat: "Fab",  name: "Laser Cutting" },
  { cat: "Tools", name: "Excel" },
  { cat: "Team", name: "Mentoring" }
];

/* ============================================================
   EXPERIENCE — same idea as projects: copy a block, edit, push.
   ============================================================ */
const EXPERIENCE = [
  {
    role: "RF Systems & Embedded Software Intern",
    org: "StagOn Defence",
    period: "Apr 2026 — Present",
    logo: "photos/logos/stagon.png",
    description: "Working on sensor fusion through radio-frequency detection and classification."
  },
  {
    role: "CS / CT Consultant",
    org: "St Paul's Girls' School",
    url: "https://spgs.org/",
    period: "Sep 2025 — Present",
    logo: "photos/logos/spgs.png",
    description: "Robotics, computer science and computer technology consultant, mentoring the St Paul's FTC team."
  },
  {
    role: "Education Mentor",
    org: "American School in London",
    url: "https://www.asl.org/",
    period: "Jun 2025 — Aug 2025",
    logo: "photos/logos/asl.png",
    description: "Educated and mentored children aged 6–12 in robotics, Scratch coding and animation — running hands-on sessions and summer camp programmes at ASL."
  },
  {
    role: "Business Research Development Intern",
    org: "Imperial College London",
    url: "https://www.imperial.ac.uk/",
    period: "Jul 2024",
    logo: "photos/logos/imperial.png",
    description: "Placement involving data analysis, research in the financial sector and coding in R."
  },
  {
    role: "FIRST Tech Challenge UK Website Developer",
    org: "FIRST",
    url: "https://firstuk.org/",
    period: "Jul 2023",
    logo: "photos/logos/first.png",
    description: "Worked on a team of 8 developing an online platform improving possibilities for UK robotics teams by lowering costs and increasing parts availability."
  }
];

/* ============================================================
   GALLERY — set src to a real file (e.g. "photos/gallery-1.jpg")
   and the placeholder becomes your photo. Add/remove freely.
   ============================================================ */
const GALLERY = [
  { src: "photos/gallery/1.jpg", title: "Control Award Winners 2023" },
  { src: "photos/gallery/2.jpg", title: "Inspire Award Winners 2023" },
  { src: "photos/gallery/3.jpg", title: "Dean's List Award &amp; 1884 Advancement" },
  { src: "photos/gallery/4.jpg", title: "2024 Finals — Match 1" },
  { src: "photos/gallery/5.jpg", title: "2024 Finals — Match 2" },
  { src: "photos/gallery/6.jpg", title: "2024 National Champions" },
  { src: "photos/gallery/7.jpg", title: "2024 Finals — Match 3" },
  { src: "photos/gallery/8.jpg", title: "2024 Qualifier Matches" },
  { src: "photos/gallery/9.jpg", title: "FIRST Global Playoffs" },
  { src: "photos/gallery/13.jpg", title: "Electronics Car Race" },
  { src: "photos/gallery/14.jpg", title: "Great Exhibition Road Festival" },
  { src: "photos/gallery/15.jpg", title: "Oxford Robohack 2026" },
  { src: "photos/gallery/16.jpg", title: "SoleSense — Uplyft Hackathon 2026" },
  { src: "photos/gallery/17.jpg", title: "SPGS — with the Deputy Mayor of London" },
  { src: "photos/gallery/18.jpg", title: "CGCU Makeathon Win" },
  { src: "photos/gallery/19.jpg", title: "CGCU Makeathon Field Testing" },
  { src: "photos/gallery/20.jpg", title: "EPFL Robohack 2026" }
];

/* Marquee text — EDIT freely */
const MARQUEE_TEXT = "DESIGN · BUILD · TEST · ITERATE · ";

/* ---------- render projects ---------- */
const list = document.getElementById('project-list');
PROJECTS.forEach((p, i) => {
  const fig = 'NO. ' + String(i + 1).padStart(2, '0');
  const el = document.createElement('article');
  el.className = 'proj watch';
  el.setAttribute('data-fig', fig);
  if (p.slug) {
    el.classList.add('clickable');
    el.addEventListener('click', () => { location.href = `projects/${p.slug}.html`; });
  }
  el.innerHTML = `
    ${p.slug ? '<span class="open-hint">OPEN \u2192</span>' : ''}
    <div class="proj-head reveal">
      <h3>${p.title}</h3>
      <span class="proj-cat">${p.category}</span>
      <span class="proj-years">${p.years}</span>
    </div>
    ${p.contributors && p.contributors.length ? `<div class="contribs reveal d1">WITH ${p.contributors.map(c =>
      c.url ? `<a href="${c.url}" target="_blank" rel="noopener" onclick="event.stopPropagation()">${c.name}</a>`
            : `<span>${c.name}</span>`).join(' · ')}</div>` : ''}
    <div class="proj-sub reveal d1">${p.subtitle}</div>
    <div class="proj-body">
      <div class="reveal d1">
        <p class="proj-desc">${p.description}</p>
        ${p.awards.length ? `<div class="awards">${p.awards.map(a => {
          const label = a.label || a;
          const cls = a.highlight ? 'award special' : 'award';
          return `<span class="${cls}">${label}</span>`;
        }).join('')}</div>` : ''}
      </div>
      <div class="proj-img reveal d2 ${p.image ? 'has-img' : ''}${p.hoverStyle === 'expand' ? ' expand' : ''}">
        ${p.image ? `<img class="base-img" src="${p.image}" alt="${p.title}">` : `${fig} — IMAGE PENDING`}
        ${p.image && p.imageHover ? `<img class="hover-img" src="${p.imageHover}" alt="${p.title} — alternate view">` : ''}
      </div>
    </div>`;
  list.appendChild(el);
});

/* ---------- nav dropdown: one link per project page ---------- */
document.getElementById('proj-menu').innerHTML = PROJECTS
  .filter(p => p.slug)
  .map(p => `<a href="projects/${p.slug}.html">${p.title}</a>`)
  .join('');

/* ---------- render skills + marquee ---------- */
const CAT_ORDER = ['CAD', 'Code', 'Elec', 'Fab', 'Tools', 'Team'];
SKILLS.sort((a, b) => CAT_ORDER.indexOf(a.cat) - CAT_ORDER.indexOf(b.cat));
document.getElementById('skills-grid').innerHTML = SKILLS.map(s =>
  `<div class="skill reveal" data-cat="${s.cat}"><div class="s-cat">${s.cat}</div><div class="s-name">${s.name}</div></div>`
).join('');

/* ---------- 3D tilt: skill cards lift toward the cursor ---------- */
document.querySelectorAll('.skill').forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transition = 'box-shadow .25s';          /* transform follows raw, zero lag */
  });
  card.addEventListener('mousemove', e => {
    const r = card.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;    /* -0.5 .. 0.5 */
    const py = (e.clientY - r.top) / r.height - 0.5;
    card.style.transform =
      `perspective(520px) rotateX(${(py * 22).toFixed(2)}deg) rotateY(${(-px * 22).toFixed(2)}deg) translateY(-3px) scale(1.04)`;
  });
  card.addEventListener('mouseleave', () => {
    card.style.transition = 'box-shadow .25s, transform .45s cubic-bezier(.22,1,.36,1)';
    card.style.transform = '';
  });
});
document.getElementById('marquee-inner').textContent = (MARQUEE_TEXT.repeat(4) + MARQUEE_TEXT.repeat(4));

/* ---------- render experience ---------- */
document.getElementById('experience-list').innerHTML = EXPERIENCE.map(x => `
  <div class="exp reveal">
    <div class="exp-period">${x.period}</div>
    <div class="exp-main">
      ${x.logo ? (x.url
        ? `<a href="${x.url}" target="_blank" rel="noopener"><img class="exp-logo" src="${x.logo}" alt="${x.org}" onerror="this.parentElement.style.display='none'"></a>`
        : `<img class="exp-logo" src="${x.logo}" alt="${x.org}" onerror="this.style.display='none'">`) : ''}
      <div>
        <h3>${x.role}</h3>
        <div class="exp-org">${x.url ? `<a href="${x.url}" target="_blank" rel="noopener">${x.org} ↗</a>` : x.org}</div>
        <p>${x.description}</p>
      </div>
    </div>
  </div>`).join('');

/* ---------- about stats: computed from the arrays above ---------- */
document.getElementById('stat-projects').textContent = PROJECTS.length;
document.getElementById('stat-awards').textContent = PROJECTS.reduce((n, p) => n + p.awards.length, 0);
document.getElementById('stat-skills').textContent = SKILLS.length;

/* ---------- hero name letter animation ---------- */
const h1 = document.getElementById('hero-name');
h1.innerHTML = h1.textContent.split('').map((c, i) =>
  c === ' ' ? '&nbsp;&nbsp;' : `<span style="animation-delay:${.15 + i * .06}s">${c}</span>`
).join('');

/* ---------- scroll reveal ---------- */
const io = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); } });
}, { threshold: 0.15 });
document.querySelectorAll('section, .proj').forEach(el => io.observe(el));

/* ---------- scroll progress bar ---------- */
const progress = document.getElementById('progress');
addEventListener('scroll', () => {
  const h = document.documentElement;
  progress.style.width = (h.scrollTop / (h.scrollHeight - h.clientHeight) * 100) + '%';
}, { passive: true });

/* ---------- floating geometric shapes with scroll parallax ---------- */
const SHAPE_DEFS = [
  { cls: 'sq',      size: 54, x: 6,  y: 18, f: -0.06, dur: 30 },
  { cls: 'ci gray', size: 80, x: 88, y: 12, f:  0.05, dur: 38 },
  { cls: 'di',      size: 30, x: 82, y: 42, f: -0.09, dur: 26 },
  { cls: 'sq gray', size: 40, x: 12, y: 62, f:  0.07, dur: 34 },
  { cls: 'ci',      size: 26, x: 76, y: 78, f: -0.05, dur: 24 },
  { cls: 'dot',     size: 8,  x: 20, y: 38, f:  0.10, dur: 20 },
  { cls: 'dot',     size: 6,  x: 64, y: 24, f: -0.08, dur: 22 },
  { cls: 'plus',    size: 22, x: 34, y: 82, f:  0.06, dur: 28 },
  { cls: 'plus',    size: 22, x: 92, y: 64, f: -0.04, dur: 32 }
];
const wraps = SHAPE_DEFS.map(d => {
  const w = document.createElement('div');
  w.className = 'shape-wrap';
  w.style.left = d.x + 'vw';
  w.style.top = d.y + 'vh';
  const s = document.createElement('div');
  s.className = 'shape ' + d.cls;
  s.style.setProperty('--dur', d.dur + 's');
  if (d.cls === 'plus') { s.textContent = '+'; }
  else { s.style.width = d.size + 'px'; s.style.height = d.size + 'px'; }
  w.appendChild(s);
  document.body.appendChild(w);
  return { el: w, f: d.f };
});
addEventListener('scroll', () => {
  const y = scrollY;
  wraps.forEach(w => { w.el.style.transform = `translateY(${y * w.f}px)`; });
}, { passive: true });

/* ---------- logo colouring: fixed pace, always plays fully ----------
   When the divider comes into view the page glides to centre it, scroll
   pauses, the logo colours in over a fixed ~2.6s, then scroll resumes.
   Same speed no matter how hard you scroll. Esc or click skips. */
const sketchWrap = document.getElementById('sketch-wrap');
const sketchSvg = document.querySelector('.sketch-svg');
const sketchClip = document.getElementById('sketch-clip');
const heroEl = document.querySelector('.hero');
const clamp01 = v => Math.min(1, Math.max(0, v));

/* build the colouring strokes: diagonal bands, alternating direction */
const N_STROKES = 28, STROKE_H = 6;
const strokes = [];
(function () {
  const NS = 'http://www.w3.org/2000/svg';
  for (let i = 0; i < N_STROKES; i++) {
    const r = document.createElementNS(NS, 'rect');
    r.setAttribute('y', -34 + i * STROKE_H);
    r.setAttribute('height', STROKE_H + 0.6);
    r.setAttribute('x', -40);
    r.setAttribute('width', 0);
    r.setAttribute('transform', 'rotate(45 50 50)');
    sketchClip.appendChild(r);
    strokes.push(r);
  }
})();

function renderReveal(r, drift) {
  strokes.forEach((el, i) => {
    const local = clamp01(r * (N_STROKES + 1.5) - i * 0.98);
    const w = local * 180;
    el.setAttribute('x', i % 2 === 0 ? -40 : (140 - w).toFixed(2));
    el.setAttribute('width', w.toFixed(2));
  });
  sketchSvg.style.transform = `translateY(${drift.toFixed(1)}px) scale(${(0.94 + r * 0.08).toFixed(4)})`;
}
renderReveal(0, 30);

/* hero still parallaxes away for a soft hand-off */
function heroParallax() {
  const hy = scrollY;
  heroEl.style.transform = `translateY(${(hy * 0.28).toFixed(1)}px)`;
  heroEl.style.opacity = clamp01(1 - hy / (innerHeight * 0.85)).toFixed(3);
}
addEventListener('scroll', heroParallax, { passive: true });
heroParallax();

/* temporary scroll pause while the animation plays */
const LOCK_KEYS = [' ', 'ArrowDown', 'ArrowUp', 'PageDown', 'PageUp', 'Home', 'End'];
const prevent = e => e.preventDefault();
const keyPrevent = e => { if (LOCK_KEYS.includes(e.key)) e.preventDefault(); };
function lockScroll(on) {
  const fn = on ? addEventListener : removeEventListener;
  fn('wheel', prevent, { passive: false });
  fn('touchmove', prevent, { passive: false });
  fn('keydown', keyPrevent, false);
}

const SKETCH_DURATION = 1000;
const easeInOut = t => t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
let sketchPlayed = false;
let sketchSkip = false;

function playSketch() {
  const t0 = performance.now();
  function frame(now) {
    const k = Math.min(1, (now - t0) / SKETCH_DURATION);
    const r = easeInOut(k);
    renderReveal(r, 30 - r * 45);          /* drifts gently upward as it colours */
    if (k < 1 && !sketchSkip) {
      requestAnimationFrame(frame);
    } else {
      renderReveal(1, -15);
      lockScroll(false);
    }
  }
  requestAnimationFrame(frame);
}

/* Esc or clicking the artwork skips the pause */
addEventListener('keydown', e => { if (e.key === 'Escape') sketchSkip = true; });
sketchWrap.addEventListener('click', () => { sketchSkip = true; });

new IntersectionObserver((entries, obs) => {
  entries.forEach(e => {
    if (e.isIntersecting && !sketchPlayed) {
      sketchPlayed = true;
      obs.disconnect();
      if (navJumping) { renderReveal(1, -15); return; }
      lockScroll(true);
      /* glide to centre first — no abrupt stop, even from a fast fling */
      sketchWrap.scrollIntoView({ behavior: 'smooth', block: 'center' });
      setTimeout(playSketch, 550);
      setTimeout(() => lockScroll(false), 3500);   /* safety: never stuck */
    }
  });
}, { threshold: 0.55 }).observe(sketchWrap);


/* ---------- gallery: fly forward through the photos as you scroll ---------- */
const galleryWrap = document.getElementById('gallery');
const galleryScene = document.getElementById('gallery-scene');
const CARD_GAP = 700;                       /* depth between photos, px */
const gCards = GALLERY.map((g, i) => {
  const el = document.createElement('div');
  el.className = 'g-card';
  el.dataset.x = ((i % 2 === 0 ? -1 : 1) * (110 + (i * 37) % 90));   /* lateral offset */
  el.dataset.y = (((i * 53) % 90) - 45);                             /* vertical offset */
  /* if the photo file doesn't exist yet, the frame shows a placeholder */
  el.innerHTML = `<img class="g-photo" src="${g.src}" alt="${g.title}"
      onerror="this.outerHTML='<div class=&quot;g-empty&quot;>ADD photos/gallery/${i + 1}.jpg</div>'">
    <span class="g-caption">${g.title}</span>`;
  galleryScene.appendChild(el);
  return el;
});
let gSmooth = 0;
function galleryLoop() {
  const total = galleryWrap.offsetHeight - innerHeight;
  const target = clamp01(-galleryWrap.getBoundingClientRect().top / total);
  gSmooth += (target - gSmooth) * 0.12;
  const cam = gSmooth * (GALLERY.length - 0.4) * CARD_GAP;   /* camera moves forward */
  gCards.forEach((el, i) => {
    const z = -i * CARD_GAP + cam;
    /* fade out as a photo passes the camera, fade in from the distance */
    const op = z > 60 ? Math.max(0, 1 - (z - 60) / 260)
                      : Math.min(1, (z + 2400) / 800);
    el.style.transform =
      `translate(-50%, -50%) translate3d(${el.dataset.x}px, ${el.dataset.y}px, ${z.toFixed(1)}px)`;
    el.style.opacity = op.toFixed(3);
    el.style.visibility = op <= 0.01 ? 'hidden' : 'visible';
  });
  requestAnimationFrame(galleryLoop);
}
requestAnimationFrame(galleryLoop);


/* ---------- email: assembled at runtime so bots scraping the HTML/JS
   source never see the full address ---------- */
(function () {
  const m = document.getElementById('contact-mail');
  const u = '80reivaxffog'.split('').reverse().join('');   /* user, reversed */
  const d = ['liamg', 'moc'].map(x => x.split('').reverse().join('')).join('.');
  const addr = u + String.fromCharCode(64) + d;
  m.href = 'mailto:' + addr;
  m.textContent = addr;
})();


/* ---------- fast menu navigation ----------
   Menu clicks take a fixed ~0.6s no matter how far apart the sections
   are — no more riding through the whole gallery to reach Contact.
   Manual scrolling is unaffected. */
let navJumping = false;
function smoothJump(el) {
  navJumping = true;
  const targetY = el.getBoundingClientRect().top + scrollY - 70;
  scrollTo({ top: targetY, behavior: 'instant' });   /* teleport — never rides through sections */
  /* replay the section's entrance (orange rule sweep, titles rising) on every visit */
  el.classList.add('no-anim');                       /* kill transitions... */
  el.classList.remove('visible');                    /* ...snap to hidden instantly */
  void el.offsetWidth;
  el.classList.remove('no-anim');                    /* transitions back on */
  void el.offsetWidth;
  requestAnimationFrame(() => el.classList.add('visible'));   /* animate in */
  setTimeout(() => { navJumping = false; }, 100);
}
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const id = a.getAttribute('href').slice(1);
    const el = id && document.getElementById(id);
    if (el) { e.preventDefault(); smoothJump(el); }
  });
});

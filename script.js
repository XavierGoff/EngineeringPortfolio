/* ============================================================
   ADD A NEW PROJECT HERE — copy one block, edit the fields,
   save, redeploy. They render in array order.
   image: null  -> styled placeholder box
   image: "photos/rocket.jpg" -> real photo (file next to index.html)
   ============================================================ */
const PROJECTS = [
  {
    category: "Robotics",
    title: "Competition Robot — Season 1",
    subtitle: "FTC/FRC — [ game name ] · placeholder",
    years: "2023–2024",
    description: "Describe the robot: your role, the mechanism you designed, what made it clever, and what you'd do differently. Two to four sentences is the sweet spot — enough to show depth, short enough that people read it.",
    awards: ["Regional Award — placeholder", "Design Award — placeholder"],
    image: null
  },
  {
    category: "Robotics",
    title: "Competition Robot — Season 2",
    subtitle: "FTC/FRC — [ game name ] · placeholder",
    years: "2024–2025",
    description: "Season two: what you carried over, what you reinvented. Recruiters love seeing iteration between seasons — call out a specific improvement with a number if you can (cycle time, weight, reliability).",
    awards: ["Placeholder award chip"],
    image: null
  },
  {
    category: "Personal",
    title: "Independent Build #1",
    subtitle: "[ e.g. custom electronics / CAD / mechanical build ]",
    years: "2025",
    description: "Personal projects show initiative better than anything else. Explain the itch you were scratching, the hardest technical problem, and the tools you used to solve it.",
    awards: [],
    image: null
  },
  {
    category: "Course",
    title: "Course Project #1",
    subtitle: "[ class name / institution ]",
    years: "2025–2026",
    description: "Course project placeholder: what the brief was, what your team built, and specifically what YOU contributed. Name the deliverable — report, prototype, working demo.",
    awards: ["Grade / recognition — optional"],
    image: null
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
  { cat: "Elec", name: "Soldering / PCB" }
];

/* Marquee text — EDIT freely */
const MARQUEE_TEXT = "DESIGN · BUILD · TEST · ITERATE · ";

/* ---------- render projects ---------- */
const list = document.getElementById('project-list');
PROJECTS.forEach((p, i) => {
  const fig = 'NO. ' + String(i + 2).padStart(2, '0');
  const el = document.createElement('article');
  el.className = 'proj watch';
  el.setAttribute('data-fig', fig);
  el.innerHTML = `
    <div class="proj-head reveal">
      <h3>${p.title}</h3>
      <span class="proj-cat">${p.category}</span>
      <span class="proj-years">${p.years}</span>
    </div>
    <div class="proj-sub reveal d1">${p.subtitle}</div>
    <div class="proj-body">
      <div class="reveal d1">
        <p class="proj-desc">${p.description}</p>
        ${p.awards.length ? `<div class="awards">${p.awards.map(a => `<span class="award">${a}</span>`).join('')}</div>` : ''}
      </div>
      <div class="proj-img reveal d2">
        ${p.image ? `<img src="${p.image}" alt="${p.title}">` : `${fig} — IMAGE PENDING`}
      </div>
    </div>`;
  list.appendChild(el);
});

/* ---------- render skills + marquee ---------- */
document.getElementById('skills-grid').innerHTML = SKILLS.map(s =>
  `<div class="skill reveal"><div class="s-cat">${s.cat}</div><div class="s-name">${s.name}</div></div>`
).join('');
document.getElementById('marquee-inner').textContent = (MARQUEE_TEXT.repeat(4) + MARQUEE_TEXT.repeat(4));

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
const sketchCaption = document.getElementById('sketch-caption');
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
  sketchCaption.textContent = 'NO. 00 — THE MARK · ' + Math.round(r * 100) + '%';
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

const SKETCH_DURATION = 1500;
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
      lockScroll(true);
      /* glide to centre first — no abrupt stop, even from a fast fling */
      sketchWrap.scrollIntoView({ behavior: 'smooth', block: 'center' });
      setTimeout(playSketch, 550);
      setTimeout(() => lockScroll(false), 3500);   /* safety: never stuck */
    }
  });
}, { threshold: 0.55 }).observe(sketchWrap);

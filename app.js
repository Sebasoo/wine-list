const WINES = [
  {
    id: "voskevaz-rose",
    name: "Voskevaz Rosé",
    sub: "Розовое · Армения · 0,75 л",
    price: 49,
    type: "red",
    image: "images/voskevaz-rose.png?v=1",
    glow: "#a0456a",
  },
  {
    id: "mure-sylvaner-originel",
    name: "Muré Sylvaner Originel",
    sub: "Белое · Alsace · 0,75 л",
    price: 52,
    type: "white",
    image: "images/mure-sylvaner-originel.png?v=1",
    glow: "#8a7340",
  },
  {
    id: "henri-bourgeois-petit-bourgeois",
    name: "Henri Bourgeois Petit Bourgeois Sauvignon Blanc",
    sub: "Белое · Loire · 0,75 л",
    price: 55,
    type: "white",
    image: "images/henri-bourgeois-petit-bourgeois.png?v=1",
    glow: "#7a6a40",
  },
  {
    id: "marcel-martin-cremant-rose",
    name: "Marcel Martin La Garde Crémant de Loire Brut Rosé",
    sub: "Игристое · Loire · 0,75 л",
    price: 55,
    type: "sparkling",
    image: "images/marcel-martin-cremant-rose.png?v=1",
    glow: "#a0456a",
  },
  {
    id: "kracher-spatlese",
    name: "Weinlaubenhof Kracher Spätlese Cuvée",
    sub: "Белое · Burgenland · 0,75 л",
    price: 69,
    type: "white",
    image: "images/kracher-spatlese.png?v=1",
    glow: "#8a7340",
  },
  {
    id: "van-volxem-weissburgunder",
    name: "Van Volxem Weissburgunder",
    sub: "Белое · Saar · 0,75 л",
    price: 69,
    type: "white",
    image: "images/van-volxem-weissburgunder.png?v=1",
    glow: "#7a6a40",
  },
  {
    id: "portia-prima",
    name: "Portia Prima La Encina",
    sub: "Красное · Ribera del Duero · 0,75 л",
    price: 79,
    type: "red",
    image: "images/portia-prima.png?v=1",
    glow: "#7a2438",
  },
  {
    id: "de-martino-tres-volcanes",
    name: "De Martino Tres Volcanes Chardonnay",
    sub: "Белое · Valle del Malleco · 0,75 л",
    price: 119,
    type: "white",
    image: "images/de-martino-tres-volcanes.png?v=1",
    glow: "#8a7a48",
  },
  {
    id: "chateau-belles-eaux",
    name: "Château Belles Eaux Carmin",
    sub: "Красное · Languedoc-Pézenas · 0,75 л",
    price: 129,
    type: "red",
    image: "images/chateau-belles-eaux.png?v=1",
    glow: "#8a2430",
  },
  {
    id: "jermann-pinot-bianco",
    name: "Jermann Pinot Bianco",
    sub: "Белое · Venezia Giulia · 0,75 л",
    price: 139,
    type: "white",
    image: "images/jermann-pinot-bianco.png?v=1",
    glow: "#8a7a48",
  },
  {
    id: "domaine-servin-chablis",
    name: "Domaine Servin Chablis Premier Cru Montée de Tonnerre",
    sub: "Белое · Chablis · 0,75 л",
    price: 149,
    type: "white",
    image: "images/domaine-servin-chablis.png?v=1",
    glow: "#9a7a30",
  },
  {
    id: "coudoulet-beaucastel",
    name: "Coudoulet de Beaucastel Côtes-du-Rhône",
    sub: "Белое · Côtes-du-Rhône · 0,75 л",
    price: 149,
    type: "white",
    image: "images/coudoulet-beaucastel.png?v=6",
    glow: "#9a7a30",
  },
  {
    id: "chateau-fuisse",
    name: "Château-Fuissé Pouilly-Fuissé Tête de Cuvée",
    sub: "Белое · Pouilly-Fuissé · 0,75 л",
    price: 189,
    type: "white",
    image: "images/chateau-fuisse.png?v=1",
    glow: "#8a7340",
  },
  {
    id: "alvaro-palacios-corullon",
    name: "Álvaro Palacios Corullón Vino de Villa 2022",
    sub: "Красное · Bierzo · 0,75 л",
    price: 229,
    type: "red",
    image: "images/alvaro-palacios-corullon.png?v=1",
    glow: "#7a1f28",
  },
];

const SHAPES = {
  bordeaux: {
    path:
      "M46 26 L46 108 C46 120 31 127 27 150 C23 172 23 180 23 336 C23 349 30 356 40 356 L80 356 C90 356 97 349 97 336 L97 180 C97 180 97 172 93 150 C89 127 74 120 74 108 L74 26 Z",
    label: { y: 206, w: 72, h: 104 },
    neck: 26,
    shoulder: 140,
  },
  slim: {
    path:
      "M47 26 L47 112 C47 124 34 130 30 156 C27 176 27 184 27 336 C27 349 33 356 42 356 L78 356 C87 356 93 349 93 336 L93 184 C93 184 93 176 90 156 C86 130 73 124 73 112 L73 26 Z",
    label: { y: 210, w: 64, h: 100 },
    neck: 26,
    shoulder: 146,
  },
  burgundy: {
    path:
      "M46 26 L46 100 C46 118 25 130 21 178 C19 200 19 210 19 334 C19 348 27 356 38 356 L82 356 C93 356 101 348 101 334 L101 178 C97 130 74 118 74 100 L74 26 Z",
    label: { y: 214, w: 78, h: 100 },
    neck: 26,
    shoulder: 134,
  },
  sparkling: {
    path:
      "M44 24 L44 96 C44 116 20 132 16 184 C15 206 15 214 15 332 C15 348 25 356 37 356 L83 356 C95 356 105 348 105 332 L105 184 C100 132 76 116 76 96 L76 24 Z",
    label: { y: 218, w: 82, h: 98 },
    neck: 24,
    foilTo: 96,
    shoulder: 130,
  },
  magnum: {
    path:
      "M43 18 L43 92 C43 114 17 130 13 186 C12 208 12 216 12 330 C12 348 23 356 36 356 L84 356 C97 356 108 348 108 330 L108 186 C103 130 77 114 77 92 L77 18 Z",
    label: { y: 214, w: 86, h: 104 },
    neck: 18,
    foilTo: 96,
    shoulder: 126,
  },
  half: {
    path:
      "M47 86 L47 152 C47 164 34 170 30 190 C27 206 27 214 27 336 C27 349 33 356 42 356 L78 356 C87 356 93 349 93 336 L93 214 C93 214 93 206 90 190 C86 170 73 164 73 152 L73 86 Z",
    label: { y: 232, w: 64, h: 86 },
    neck: 86,
    shoulder: 178,
  },
  coffee: {
    path:
      "M16 166 L104 166 L108 342 C108 351 101 356 92 356 L28 356 C19 356 12 351 12 342 Z",
    label: { y: 196, w: 78, h: 112 },
    seal: true,
    sealTop: 150,
  },
};

function fitFontSize(lines, boxWidth) {
  const longest = lines.reduce((max, line) => Math.max(max, line.length), 1);
  return Math.max(6.2, Math.min(12, (boxWidth - 12) / (longest * 0.5)));
}

function bottleVisual(item, variant = "") {
  if (item.image) {
    return `<img class="bottle bottle--photo" src="${item.image}" alt="${item.name}" draggable="false" />`;
  }
  return svgFor(item, variant);
}

function svgFor(item, variant = "") {
  const shape = SHAPES[item.shape] || SHAPES.bordeaux;
  const uid = item.id + variant;
  const clip = `clip-path="url(#clip-${uid})"`;
  const box = shape.label;
  const lx = 60 - box.w / 2;
  const lines = item.label.slice(0, 3);
  const size = fitFontSize(lines, box.w);
  const lineHeight = size * 1.28;
  const textTop = box.y + box.h / 2 - ((lines.length - 1) * lineHeight) / 2 - size * 0.15;

  const shineTop = shape.seal ? shape.sealTop + 20 : shape.neck + 4;
  const cap = shape.seal
    ? `<path d="M22 ${shape.sealTop} L98 ${shape.sealTop} L104 166 L16 166 Z" fill="${item.foil}" opacity=".92" />
       <rect x="22" y="${shape.sealTop}" width="76" height="3.5" fill="#000" opacity=".32" />`
    : `<rect x="4" y="${shape.neck - 4}" width="112" height="${(shape.foilTo || shape.neck + 44) - shape.neck + 8}"
         fill="${item.foil}" opacity=".95" ${clip} />
       <rect x="4" y="${(shape.foilTo || shape.neck + 44) + 2}" width="112" height="2.5" fill="#000" opacity=".35" ${clip} />`;

  const liquid = shape.seal
    ? ""
    : `<rect x="0" y="${shape.shoulder}" width="120" height="${358 - shape.shoulder}"
         fill="${item.wine}" opacity=".8" ${clip} />`;

  return `
  <svg class="bottle" viewBox="0 0 120 372" role="img" aria-label="${item.name}">
    <defs>
      <clipPath id="clip-${uid}"><path d="${shape.path}" /></clipPath>
      <linearGradient id="shade-${uid}" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0" stop-color="#000" stop-opacity=".85" />
        <stop offset="0.1" stop-color="#000" stop-opacity=".45" />
        <stop offset="0.26" stop-color="#fff" stop-opacity=".3" />
        <stop offset="0.42" stop-color="#000" stop-opacity="0" />
        <stop offset="0.68" stop-color="#000" stop-opacity=".28" />
        <stop offset="0.86" stop-color="#000" stop-opacity=".6" />
        <stop offset="1" stop-color="#000" stop-opacity=".92" />
      </linearGradient>
      <linearGradient id="vert-${uid}" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#fff" stop-opacity=".14" />
        <stop offset="0.35" stop-color="#fff" stop-opacity="0" />
        <stop offset="0.86" stop-color="#000" stop-opacity=".22" />
        <stop offset="1" stop-color="#000" stop-opacity=".5" />
      </linearGradient>
      <linearGradient id="label-${uid}" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0" stop-color="#a99c85" />
        <stop offset="0.28" stop-color="#f7eedf" />
        <stop offset="0.72" stop-color="#eadfcb" />
        <stop offset="1" stop-color="#9d9080" />
      </linearGradient>
    </defs>

    <path d="${shape.path}" fill="${item.glass}" />
    ${liquid}
    ${cap}

    <rect x="${lx}" y="${box.y}" width="${box.w}" height="${box.h}" rx="1.5"
      fill="url(#label-${uid})" ${clip} />
    <rect x="${lx + 4}" y="${box.y + 5}" width="${box.w - 8}" height="${box.h - 10}" rx="1"
      fill="none" stroke="#8a6f3c" stroke-opacity=".45" stroke-width="0.6" ${clip} />

    <g ${clip} text-anchor="middle" fill="#2c1d13">
      ${lines
        .map(
          (line, i) =>
            `<text x="60" y="${textTop + i * lineHeight}" font-size="${size.toFixed(2)}"
               font-family="Fraunces, Georgia, serif" letter-spacing="0.1">${line}</text>`
        )
        .join("")}
      <text x="60" y="${textTop + lines.length * lineHeight + 4}" font-size="4.4"
        font-family="Manrope, sans-serif" letter-spacing="0.9" fill="#6b5232">${item.caption.toUpperCase()}</text>
    </g>

    <path d="${shape.path}" fill="url(#shade-${uid})" />
    <path d="${shape.path}" fill="url(#vert-${uid})" />
    <rect x="38.5" y="${shineTop}" width="4.5" height="300" rx="2.25"
      fill="#fff" opacity=".22" ${clip} />
    <rect x="88" y="${shineTop + 6}" width="2" height="290" rx="1"
      fill="#fff" opacity=".1" ${clip} />
    <ellipse cx="60" cy="352" rx="42" ry="7" fill="#000" opacity=".45" ${clip} />
  </svg>`;
}

const track = document.getElementById("track");
const ticks = document.getElementById("ticks");
const chips = document.getElementById("chips");
const metaName = document.getElementById("meta-name");
const metaSub = document.getElementById("meta-sub");
const metaBadge = document.getElementById("meta-badge");
const metaPrice = document.getElementById("meta-price");
const meta = document.getElementById("meta");
const glow = document.querySelector(".ambience__glow");

const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

let items = WINES;
let slides = [];
let active = 0;
let drag = 0;
let dragging = false;
let startX = 0;
let autoplayTimer = null;

function spacing() {
  const w = track.clientWidth || window.innerWidth;
  return Math.max(120, Math.min(230, w * 0.24));
}

function build() {
  track.innerHTML = items
    .map(
      (item, i) => `
      <article class="slide" data-index="${i}">
        <div class="slide__bottle">${bottleVisual(item)}</div>
        <div class="slide__shadow"></div>
        <div class="slide__reflection" aria-hidden="true">${bottleVisual(item, "-r")}</div>
      </article>`
    )
    .join("");

  slides = [...track.querySelectorAll(".slide")];
  slides.forEach((slide) => {
    slide.addEventListener("click", () => {
      const index = Number(slide.dataset.index);
      if (index !== active) {
        active = index;
        update();
      }
    });
  });

  ticks.innerHTML = items
    .map((item, i) => `<button class="tick" type="button" data-index="${i}" aria-label="${item.name}"></button>`)
    .join("");
  [...ticks.children].forEach((tick) => {
    tick.addEventListener("click", () => {
      active = Number(tick.dataset.index);
      update();
    });
  });

  active = 0;
  update();
}

function layout(offsetPx = 0) {
  const n = slides.length;
  if (!n) return;
  const step = spacing();

  slides.forEach((slide, i) => {
    let off = i - active;
    if (n > 2) {
      off = ((off % n) + n) % n;
      if (off > n / 2) off -= n;
    }
    const shifted = off + offsetPx / step;
    const abs = Math.abs(shifted);
    const scale = Math.max(0.72, 1 - abs * 0.1);
    const rotate = Math.max(-18, Math.min(18, -shifted * 10));
    const depth = -abs * 80;

    slide.style.transform = `translate3d(calc(-50% + ${shifted * step}px), -50%, ${depth}px) rotateY(${rotate}deg) scale(${scale}) translateZ(0)`;
    slide.style.opacity = abs > 3.4 ? "0" : String(Math.max(0, 1 - abs * 0.24));
    slide.style.zIndex = String(100 - Math.round(abs * 10));
    slide.classList.toggle("is-active", abs < 0.5);
  });
}

function update() {
  const n = items.length;
  if (!n) return;
  active = ((active % n) + n) % n;
  const item = items[active];

  layout();

  metaName.textContent = item.name;
  metaSub.textContent = item.sub;
  if (metaBadge) {
    metaBadge.textContent = item.badge || "";
    metaBadge.hidden = !item.badge;
  }
  metaPrice.innerHTML = item.price == null ? "—" : `${item.price} <span>BYN</span>`;
  const noteEl = document.getElementById("meta-note");
  if (noteEl) {
    noteEl.textContent = item.note || "";
    noteEl.hidden = !item.note;
  }
  meta.classList.remove("is-in");
  void meta.offsetWidth;
  meta.classList.add("is-in");

  glow.style.background = `radial-gradient(circle at 50% 44%, ${item.glow}8c, transparent 58%)`;

  [...ticks.children].forEach((tick, i) => tick.classList.toggle("is-active", i === active));
}

function move(step) {
  active += step;
  update();
}

document.getElementById("prev").addEventListener("click", () => move(-1));
document.getElementById("next").addEventListener("click", () => move(1));

track.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft") move(-1);
  if (event.key === "ArrowRight") move(1);
});

track.addEventListener("pointerdown", (event) => {
  dragging = true;
  startX = event.clientX;
  drag = 0;
  track.classList.add("is-dragging");
  track.setPointerCapture(event.pointerId);
  stopAutoplay();
});

track.addEventListener("pointermove", (event) => {
  if (!dragging) return;
  drag = event.clientX - startX;
  layout(drag);
});

function endDrag() {
  if (!dragging) return;
  dragging = false;
  track.classList.remove("is-dragging");
  const step = Math.round(-drag / (spacing() * 0.7));
  drag = 0;
  if (step) move(step);
  else layout();
  startAutoplay();
}

track.addEventListener("pointerup", endDrag);
track.addEventListener("pointercancel", endDrag);

let wheelLock = false;
track.addEventListener(
  "wheel",
  (event) => {
    if (Math.abs(event.deltaX) < Math.abs(event.deltaY)) return;
    event.preventDefault();
    if (wheelLock) return;
    wheelLock = true;
    move(event.deltaX > 0 ? 1 : -1);
    setTimeout(() => {
      wheelLock = false;
    }, 220);
  },
  { passive: false }
);

chips.addEventListener("click", (event) => {
  const chip = event.target.closest(".chip");
  if (!chip) return;
  [...chips.children].forEach((c) => c.classList.remove("is-active"));
  chip.classList.add("is-active");
  const filter = chip.dataset.filter;
  items = filter === "all" ? WINES : WINES.filter((w) => w.type === filter);
  build();
});

function startAutoplay() {
  if (reduced) return;
  stopAutoplay();
  autoplayTimer = window.setInterval(() => {
    if (!document.hidden) move(1);
  }, 5200);
}

function stopAutoplay() {
  if (autoplayTimer) window.clearInterval(autoplayTimer);
  autoplayTimer = null;
}

document.querySelector(".showcase").addEventListener("pointerenter", stopAutoplay);
document.querySelector(".showcase").addEventListener("pointerleave", startAutoplay);
window.addEventListener("resize", () => layout());

build();
startAutoplay();

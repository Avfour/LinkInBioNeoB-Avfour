/* =========================================================
   LINK IN BIO — AVFOUR
   Vanilla JS, tanpa library.
   Baris bertanda "// GANTI:" = perlu diedit manual.
   ========================================================= */

/* ---------- 1. PATH GAMBAR ---------- */
const IMAGES = {
  banner:       "assets/banner.webp",        // GANTI: path banner header
  profile:      "assets/profile.webp",       // GANTI: path foto profil
  products:     "assets/products.webp",      // GANTI: gambar tombol Products
  projects:     "assets/projects.webp",      // GANTI: thumbnail tombol Projects
  portofolio:   "assets/portofolio.webp",    // GANTI: thumbnail tombol Portofolio
  services:     "assets/services.webp",      // GANTI: thumbnail tombol Services
  premiumApps:  "assets/premium-apps.webp",  // GANTI: thumbnail tombol Premium Apps
  testimonials: "assets/testimonials.webp"   // GANTI: thumbnail tombol Testimonials
};

/* ---------- 2. LINK ---------- */
const LINKS = {
  projects:      "https://t.me/projectsbyavfour",
  portofolio:    "https://avfour.github.io/Avfour-Portofolio/",
  testimonials:  "https://t.me/testibyAvfour",
  tiktokAvfour:  "https://www.tiktok.com/@aiiistheticsv4?_r=1&_t=ZS-9BNscheckout",
  tiktok4Layers: "https://www.tiktok.com/@fouredframe?_r=1&_t=ZS-9BNsoKExxPJ",
  instagram:     "https://www.instagram.com/aiiisthetics4.0?psln=ZTlxNGQwOXE2aWMz",
  whatsapp:      "https://wa.me/62895637940077",
  pinterest:     "https://pin.it/4PbAbA0gD",
  email:         "mailto:aiiisthetodv1@gmail.com"
};

/* ---------- 3. DATA ---------- */
const SERVICES = [
  { name: "Graphic Design",       desc: { id: "Untuk Kebutuhan Konten Visualmu", en: "For Your Visual Content Needs" },     price: "75.000 IDR" },
  { name: "Motion Graphics",      desc: { id: "Untuk Presentasi Brand/Produk",   en: "For Your Brand/Product Presentation" }, price: "250.000 IDR" },
  { name: "Logo Design",          desc: { id: "Untuk Identitas Brandmu",         en: "For Your Brand Identity" },           price: "150.000 IDR" },
  { name: "Feed Design Package",  desc: { id: "Untuk Feed yang Konsisten",       en: "For Your Consistent Feed" },          price: "75.000 IDR" }
];

const APPS = ["Alight Motion", "CapCut", "Wink", "Others"];

// Tambah produk baru: salin satu blok { ... } lalu isi datanya
const PRODUCTS = [
  {
    name: "Sweet Macaroon",
    desc: {
      id: "Template Alight Motion dengan 3 warna pastel. Tinggal ganti teks dan warna, siap pakai.",
      en: "Alight Motion template with 3 pastel colors. Just swap the text and colors, ready to use."
    },
    price: "Rp 12.000",
    originalPrice: "Rp 19.000",
    image: "assets/products/sweet-macaroon.webp",
    link: "http://lynk.id/aiiistheticsv4/1ogp5z13pz81/checkout"
  },
  {
    name: "Liquid Refraction",
    desc: {
      id: "Efek teks liquid glass dengan refraksi dan aberasi kromatik. Teks terlihat seperti berada di dalam tetesan kaca cair, dengan tepi berwarna pelangi yang halus.",
      en: "Liquid glass text effect with refraction and chromatic aberration. The text looks like it's inside a drop of liquid glass, with soft rainbow-colored edges."
    },
    price: "Rp 27.000",
    originalPrice: "Rp 45.000",
    image: "assets/products/liquid-refraction.webp",
    link: "http://lynk.id/aiiistheticsv4/oproeemmqjr8/checkout"
  },
  {
    name: "Void Swallow",
    desc: {
      id: "Tangan kosmik yang melahap lubang hitam, seni digital orisinal sepenuhnya, tanpa green screen atau footage stock.",
      en: "Cosmic hands devouring a black hole, fully original digital art, no green screen or stock footage."
    },
    price: "Rp 31.000",
    originalPrice: "Rp 50.000",
    image: "assets/products/void-swallow.webp",
    link: "http://lynk.id/aiiistheticsv4/1ogp5z13pz81/checkout"
  }
];

/* ---------- 4. TERJEMAHAN ID / EN ---------- */
const I18N = {
  id: {
    role: "VISUAL CREATOR",
    tagline: "Documenting The Journey",
    products: "Produk",
    projects: "Projects",
    portofolio: "Portofolio",
    services: "Layanan",
    premium: "Premium Apps",
    testimonials: "Testimoni",
    from: "Mulai",
    close: "Tutup",
    themeAria: "Ganti tema",
    langAria: "Ganti bahasa ke English",
    premiumNote: "Mulai dari 5.000 IDR, masih banyak aplikasi lain yang mungkin kamu butuhkan.",
    order: n => `Yo, Avfour!\nMau order ${n} dong.`,
    askOthers: "Yo, Avfour!\nMau tanya apps lain dong."
  },
  en: {
    role: "VISUAL CREATOR",
    tagline: "Documenting The Journey",
    products: "Products",
    projects: "Projects",
    portofolio: "Portofolio",
    services: "Services",
    premium: "Premium Apps",
    testimonials: "Testimonials",
    from: "From",
    close: "Close",
    themeAria: "Switch theme",
    langAria: "Switch language to Indonesian",
    premiumNote: "Starting from 5.000 IDR. Plenty of other apps available if you need them.",
    order: n => `Yo, Avfour!\nI want to order ${n}.`,
    askOthers: "Yo, Avfour!\nI want to ask about other apps."
  }
};

/* =========================================================
   KODE UTAMA (biasanya tidak perlu diedit)
   ========================================================= */
const root = document.documentElement;
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

const themeBtn = $("#themeBtn");
const themeLabel = $("#themeLabel");
const langBtn = $("#langBtn");
const langLabel = $("#langLabel");
const overlay = $("#overlay");
const popup = $("#popup");
const popupInner = $("#popupInner");
const tiktokBtn = $("#tiktokBtn");
const tiktokPop = $("#tiktokPop");

const DUR = 450;                          // durasi morph (ms)
const EASE = "cubic-bezier(.2,.8,.2,1)";
const reduced = () => matchMedia("(prefers-reduced-motion: reduce)").matches;

let lang = "id";
let theme = "light";
const state = { type: null, trigger: null, closing: false };

/* ---------- Simpan pilihan (localStorage) ---------- */
function save(key, value) { try { localStorage.setItem(key, value); } catch (e) {} }
function load(key) { try { return localStorage.getItem(key); } catch (e) { return null; } }

/* ---------- Helper kecil ---------- */
function esc(str) {
  return String(str).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}
function waLink(text) { return LINKS.whatsapp + "?text=" + encodeURIComponent(text); }

/* ---------- Gambar & link ---------- */
$$("[data-img]").forEach((img) => { img.src = IMAGES[img.dataset.img]; });
$$("[data-link]").forEach((a) => { a.href = LINKS[a.dataset.link]; });

/* ---------- Tema ---------- */
function applyTheme(next) {
  theme = next;
  root.dataset.theme = theme;
  themeLabel.textContent = theme === "dark" ? "LIGHT" : "DARK"; // tampilkan mode tujuan
}
themeBtn.addEventListener("click", () => {
  const next = theme === "dark" ? "light" : "dark";
  applyTheme(next);
  save("theme", next);
});

/* ---------- Bahasa ---------- */
function applyLang(next) {
  lang = next;
  const t = I18N[lang];
  root.lang = lang;
  $$("[data-i18n]").forEach((el) => { el.textContent = t[el.dataset.i18n]; });
  langLabel.textContent = lang === "id" ? "EN" : "ID";   // tampilkan bahasa tujuan
  langBtn.setAttribute("aria-label", t.langAria);
  themeBtn.setAttribute("aria-label", t.themeAria);
  if (state.type) renderPopup();                          // update isi popup yang terbuka
}
langBtn.addEventListener("click", () => {
  const next = lang === "id" ? "en" : "id";
  applyLang(next);
  save("lang", next);
});

/* =========================================================
   POPUP BESAR
   ========================================================= */
const closeIcon = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 5l14 14M19 5L5 19"/></svg>';

function renderPopup() {
  const t = I18N[lang];
  let title = "";
  let note = "";
  let body = "";

  if (state.type === "services") {
    title = t.services;
    body = '<div class="popup-body">' + SERVICES.map((s) => `
      <a class="item" href="${waLink(t.order(s.name))}" target="_blank" rel="noopener noreferrer">
        <div><div class="item-name">${esc(s.name)}</div><div class="item-desc">${esc(s.desc[lang])}</div></div>
        <div class="item-price">${t.from}<br>${esc(s.price)}</div>
      </a>`).join("") + "</div>";
  }

  if (state.type === "premium") {
    title = t.premium;
    note = `<p class="popup-note">${t.premiumNote}</p>`;
    body = '<div class="popup-body">' + APPS.map((name) => {
      const text = name === "Others" ? t.askOthers : t.order(name);
      return `<a class="item" href="${waLink(text)}" target="_blank" rel="noopener noreferrer">
        <div class="item-name">${esc(name)}</div></a>`;
    }).join("") + "</div>";
  }

  if (state.type === "products") {
    title = t.products;
    body = '<div class="carousel" id="carousel">' + PRODUCTS.map((p) => `
      <a class="pcard" href="${esc(p.link)}" target="_blank" rel="noopener noreferrer" draggable="false">
        <img src="${esc(p.image)}" alt="${esc(p.name)}" loading="lazy" draggable="false">
        <p class="pname">${esc(p.name)}</p>
        <p class="pdesc">${esc(p.desc[lang])}</p>
        <p class="pprice"><span>${esc(p.price)}</span><del>${esc(p.originalPrice)}</del></p>
      </a>`).join("") + "</div>";
  }

  popupInner.innerHTML = `
    <div class="popup-head">
      <h2 class="popup-title" id="popupTitle">${title}</h2>
      <button class="popup-close" type="button" data-close aria-label="${t.close}">${closeIcon}</button>
    </div>${note}${body}`;

  const carousel = $("#carousel");
  if (carousel) enableDrag(carousel);
}

/* Hitung transform: popup (posisi akhir) -> bentuk tombol (FLIP) */
function morphTransform(from, to) {
  const dx = from.left - to.left;
  const dy = from.top - to.top;
  const sx = from.width / to.width;
  const sy = from.height / to.height;
  return `translate(${dx}px, ${dy}px) scale(${sx}, ${sy})`;
}

function openPopup(type, trigger) {
  if (state.type) return;               // hanya satu popup
  closePopover();
  state.type = type;
  state.trigger = trigger;
  renderPopup();

  overlay.hidden = false;
  root.classList.add("locked");         // kunci scroll

  if (reduced()) {
    overlay.classList.add("open");
    popupInner.querySelector("[data-close]").focus();
    return;
  }

  const from = trigger.getBoundingClientRect();
  const to = popup.getBoundingClientRect();
  popup.style.transition = "none";
  popup.style.transformOrigin = "0 0";
  popup.style.transform = morphTransform(from, to);
  trigger.style.visibility = "hidden";
  void popup.offsetWidth;               // paksa browser hitung posisi awal

  popup.style.transition = `transform ${DUR}ms ${EASE}`;
  popup.style.transform = "none";
  overlay.classList.add("open");
  popupInner.querySelector("[data-close]").focus({ preventScroll: true });
}

function closePopup() {
  if (!state.type || state.closing) return;
  state.closing = true;
  const trigger = state.trigger;

  const finish = () => {
    overlay.hidden = true;
    overlay.classList.remove("open", "closing");
    popup.removeAttribute("style");
    trigger.style.visibility = "";
    root.classList.remove("locked");
    trigger.focus({ preventScroll: true });
    state.type = null;
    state.trigger = null;
    state.closing = false;
  };

  overlay.classList.remove("open");
  overlay.classList.add("closing");

  if (reduced()) { finish(); return; }

  const to = popup.getBoundingClientRect();
  const from = trigger.getBoundingClientRect();
  popup.style.transition = `transform ${DUR}ms ${EASE}, opacity 200ms linear ${DUR - 200}ms`;
  popup.style.transform = morphTransform(from, to);
  popup.style.opacity = "0";
  setTimeout(finish, DUR);
}

/* Buka dari tombol, tutup dari X / klik luar */
$$("[data-popup]").forEach((btn) => {
  btn.addEventListener("click", () => openPopup(btn.dataset.popup, btn));
});
popup.addEventListener("click", (e) => {
  if (e.target.closest("[data-close]")) closePopup();
});
overlay.addEventListener("click", (e) => {
  if (!popup.contains(e.target)) closePopup();
});

/* Carousel: drag dengan mouse (touch sudah bisa swipe sendiri) */
function enableDrag(el) {
  let down = false, moved = false, startX = 0, startLeft = 0;

  el.addEventListener("pointerdown", (e) => {
    if (e.pointerType !== "mouse") return;
    down = true; moved = false;
    startX = e.clientX; startLeft = el.scrollLeft;
  });
  el.addEventListener("pointermove", (e) => {
    if (!down) return;
    const dx = e.clientX - startX;
    if (!moved && Math.abs(dx) > 5) {
      moved = true;
      el.classList.add("dragging");
      el.setPointerCapture(e.pointerId);
    }
    if (moved) el.scrollLeft = startLeft - dx;
  });
  const stop = () => { down = false; el.classList.remove("dragging"); };
  el.addEventListener("pointerup", stop);
  el.addEventListener("pointercancel", stop);
  el.addEventListener("click", (e) => {      // cegah buka link setelah drag
    if (moved) { e.preventDefault(); moved = false; }
  }, true);
}

/* =========================================================
   POPOVER TIKTOK
   ========================================================= */
let popTimer = null;

function openPopover() {
  if (state.type) closePopup();
  clearTimeout(popTimer);
  tiktokPop.hidden = false;

  const r = tiktokBtn.getBoundingClientRect();
  const w = tiktokPop.offsetWidth;
  const margin = 8;
  const iconCenter = r.left + r.width / 2;
  // sejajar ikon, tapi tidak keluar layar
  const left = Math.min(Math.max(margin, iconCenter - w / 2), window.innerWidth - w - margin);

  tiktokPop.style.left = left + "px";
  tiktokPop.style.bottom = (window.innerHeight - r.top + 10) + "px";
  tiktokPop.style.setProperty("--ox", (iconCenter - left) + "px"); // animasi muncul dari ikon

  void tiktokPop.offsetWidth;
  tiktokPop.classList.add("open");
  tiktokBtn.setAttribute("aria-expanded", "true");
}

function closePopover() {
  if (!tiktokPop.classList.contains("open")) return;
  tiktokPop.classList.remove("open");
  tiktokBtn.setAttribute("aria-expanded", "false");
  popTimer = setTimeout(() => { tiktokPop.hidden = true; }, reduced() ? 0 : 180);
}

tiktokBtn.addEventListener("click", () => {
  tiktokPop.classList.contains("open") ? closePopover() : openPopover();
});
document.addEventListener("click", (e) => {
  if (!tiktokPop.contains(e.target) && !tiktokBtn.contains(e.target)) closePopover();
});
window.addEventListener("resize", closePopover);
window.addEventListener("scroll", closePopover, { passive: true });

/* ---------- Esc menutup popup / popover ---------- */
document.addEventListener("keydown", (e) => {
  if (e.key !== "Escape") return;
  if (state.type) closePopup();
  else closePopover();
});

/* =========================================================
   ANIMASI MASUK (bergantian)
   ========================================================= */
function playIntro() {
  const items = Array.from($$(".reveal"));
  if (reduced()) { items.forEach((el) => el.classList.add("in")); return; }
  items.forEach((el, i) => { el.style.transitionDelay = (300 + i * 70) + "ms"; }); // stagger 70ms
  requestAnimationFrame(() => requestAnimationFrame(() => {
    items.forEach((el) => el.classList.add("in"));
  }));
}

/* =========================================================
   MULAI
   ========================================================= */
applyTheme(load("theme") || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"));
applyLang(load("lang") || ((navigator.language || "en").toLowerCase().startsWith("id") ? "id" : "en"));
playIntro();

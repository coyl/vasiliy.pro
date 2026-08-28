// Generates the abstract case artwork under i/s/ for the cases that have no photo.
// Run from the repo root: node tools/gen-showcase-art.mjs
import { writeFileSync, mkdirSync } from 'node:fs';

const W = 1200, H = 630;
const paper = '#f7f3eb', tint = '#f1ece3', line = '#e3ddd2', ink = '#1c1a17', accent = '#2456c4';

const wrap = (body) =>
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" role="img">\n` +
  `<rect width="${W}" height="${H}" fill="${paper}"/>\n${body}\n</svg>\n`;

const arts = {
  // Homeapp — engineering growth 5 -> 40: ascending columns
  homeapp() {
    let b = '';
    const n = 9, gap = 24, w = (W - 2 * 120 - (n - 1) * gap) / n;
    for (let i = 0; i < n; i++) {
      const h = 60 + (i * i) * (400 / ((n - 1) * (n - 1)));
      const x = 120 + i * (w + gap);
      b += `<rect x="${x}" y="${H - 90 - h}" width="${w}" height="${h}" fill="${i === n - 1 ? accent : ink}" opacity="${i === n - 1 ? 1 : 0.14 + i * 0.09}"/>\n`;
    }
    b += `<line x1="120" y1="${H - 90}" x2="${W - 120}" y2="${H - 90}" stroke="${ink}" stroke-width="3"/>`;
    return b;
  },
  // snappyloop — sustained load: layered pulse lines
  snappyloop() {
    let b = '';
    for (let k = 0; k < 4; k++) {
      const amp = 30 + k * 26, base = 180 + k * 90, step = 40;
      let d = `M 100 ${base}`;
      for (let x = 100; x <= W - 100; x += step) {
        const y = base + Math.sin((x / 60) + k * 1.3) * amp * (0.6 + 0.4 * Math.sin(x / 300));
        d += ` L ${x.toFixed(0)} ${y.toFixed(1)}`;
      }
      b += `<path d="${d}" fill="none" stroke="${k === 3 ? accent : ink}" stroke-width="${k === 3 ? 6 : 3}" opacity="${k === 3 ? 1 : 0.25 + k * 0.12}" stroke-linejoin="round"/>\n`;
    }
    return b;
  },
  // CHECK24 — migration: square grid -> hex cluster
  check24() {
    let b = '';
    for (let r = 0; r < 4; r++) for (let c = 0; c < 4; c++)
      b += `<rect x="${110 + c * 78}" y="${140 + r * 78}" width="58" height="58" fill="none" stroke="${ink}" stroke-width="3" opacity="0.5"/>\n`;
    b += `<path d="M 470 ${H / 2} H 690 M 640 ${H / 2 - 44} L 700 ${H / 2} L 640 ${H / 2 + 44}" fill="none" stroke="${accent}" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>\n`;
    const hex = (cx, cy, r, col, ow) => {
      let p = '';
      for (let i = 0; i < 6; i++) { const a = Math.PI / 3 * i - Math.PI / 6; p += `${i ? 'L' : 'M'} ${(cx + r * Math.cos(a)).toFixed(1)} ${(cy + r * Math.sin(a)).toFixed(1)} `; }
      return `<path d="${p}Z" fill="${ow ? 'none' : col}" stroke="${col}" stroke-width="4"/>\n`;
    };
    const cx = 930, cy = H / 2, R = 88;
    b += hex(cx, cy, 52, accent, false);
    for (let i = 0; i < 6; i++) { const a = Math.PI / 3 * i; b += hex(cx + Math.cos(a) * R * 1.05, cy + Math.sin(a) * R * 1.05, 44, ink, true); }
    return b;
  },
  // Infourok — 3 cross-functional team clusters
  infourok() {
    let b = '';
    const cluster = (cx, cy, seed) => {
      let s = `<circle cx="${cx}" cy="${cy}" r="118" fill="none" stroke="${line}" stroke-width="3"/>\n`;
      for (let i = 0; i < 7; i++) {
        const a = (i / 7) * Math.PI * 2 + seed, r = 62 + (i % 3) * 22;
        s += `<circle cx="${(cx + Math.cos(a) * r).toFixed(1)}" cy="${(cy + Math.sin(a) * r).toFixed(1)}" r="16" fill="${i === 0 ? accent : ink}" opacity="${i === 0 ? 1 : 0.55}"/>\n`;
      }
      return s + `<circle cx="${cx}" cy="${cy}" r="22" fill="${accent}"/>\n`;
    };
    b += cluster(280, 320, 0.4) + cluster(600, 300, 1.7) + cluster(920, 330, 2.9);
    b += `<path d="M 395 320 H 485 M 715 305 H 805" stroke="${ink}" stroke-width="3" opacity="0.4"/>`;
    return b;
  },
  // Balance — 10x faster: accelerating chevrons
  balance() {
    let b = ''; let x = 130;
    for (let i = 0; i < 10; i++) {
      const g = 86 - i * 6.5;
      b += `<path d="M ${x.toFixed(0)} 165 L ${(x + 60).toFixed(0)} ${H / 2} L ${x.toFixed(0)} ${H - 165}" fill="none" stroke="${i > 6 ? accent : ink}" stroke-width="10" stroke-linecap="round" stroke-linejoin="round" opacity="${0.25 + i * 0.075}"/>\n`;
      x += g;
    }
    return b;
  },
  // Bumble — release train across time zones
  bumble() {
    let b = `<line x1="100" y1="${H / 2}" x2="${W - 100}" y2="${H / 2}" stroke="${ink}" stroke-width="4" opacity="0.5"/>\n`;
    for (let i = 0; i < 8; i++) {
      const x = 150 + i * 130;
      b += `<line x1="${x}" y1="${H / 2 - 26}" x2="${x}" y2="${H / 2 + 26}" stroke="${ink}" stroke-width="3" opacity="0.45"/>\n`;
      b += `<circle cx="${x}" cy="${i % 2 ? H / 2 - 92 : H / 2 + 92}" r="${i === 5 ? 30 : 18}" fill="${i === 5 ? accent : ink}" opacity="${i === 5 ? 1 : 0.5}"/>\n`;
      b += `<line x1="${x}" y1="${i % 2 ? H / 2 - 70 : H / 2 + 70}" x2="${x}" y2="${H / 2}" stroke="${ink}" stroke-width="2" opacity="0.3"/>\n`;
    }
    return b;
  },
  // vialytics — road with sensed data points
  vialytics() {
    const road = (off, wdt, col, op) =>
      `<path d="M 60 ${470 + off} C 360 ${330 + off}, 620 ${520 + off}, 1140 ${210 + off}" fill="none" stroke="${col}" stroke-width="${wdt}" opacity="${op}" stroke-linecap="round"/>\n`;
    let b = road(0, 74, tint, 1) + road(0, 6, ink, 0.5) + road(-46, 3, line, 1) + road(46, 3, line, 1);
    const pts = [[180, 415], [330, 380], [470, 420], [620, 440], [770, 400], [900, 330], [1030, 270]];
    pts.forEach(([x, y], i) => { b += `<circle cx="${x}" cy="${y}" r="${10 + (i % 3) * 5}" fill="${i % 3 === 1 ? accent : ink}" opacity="${i % 3 === 1 ? 1 : 0.6}"/>\n`; });
    return b;
  },
  // DSL — structural lattice
  dsl() {
    let b = '';
    for (let i = 0; i < 7; i++) {
      const x = 140 + i * 150;
      b += `<line x1="${x}" y1="120" x2="${x + 110}" y2="${H - 120}" stroke="${ink}" stroke-width="3" opacity="0.4"/>\n`;
      b += `<line x1="${x + 110}" y1="120" x2="${x}" y2="${H - 120}" stroke="${ink}" stroke-width="3" opacity="0.4"/>\n`;
    }
    b += `<line x1="120" y1="120" x2="${W - 120}" y2="120" stroke="${ink}" stroke-width="4"/>\n`;
    b += `<line x1="120" y1="${H - 120}" x2="${W - 120}" y2="${H - 120}" stroke="${ink}" stroke-width="4"/>\n`;
    for (let i = 0; i < 8; i++) b += `<circle cx="${140 + i * 150 + (i % 2 ? 110 : 0)}" cy="${i % 2 ? H - 120 : 120}" r="10" fill="${i === 3 ? accent : ink}"/>\n`;
    return b;
  },
  // Creara — 5 teams, shared platform
  creara() {
    let b = `<rect x="120" y="${H - 190}" width="${W - 240}" height="70" fill="${ink}" opacity="0.85"/>\n`;
    for (let t = 0; t < 5; t++) {
      const x = 140 + t * 190;
      for (let r = 0; r < 3; r++) b += `<rect x="${x}" y="${180 + r * 60}" width="150" height="44" fill="${t === 2 && r === 0 ? accent : 'none'}" stroke="${t === 2 && r === 0 ? accent : ink}" stroke-width="3" opacity="${t === 2 && r === 0 ? 1 : 0.55}"/>\n`;
      b += `<line x1="${x + 75}" y1="362" x2="${x + 75}" y2="${H - 190}" stroke="${ink}" stroke-width="3" opacity="0.4"/>\n`;
    }
    return b;
  },
  // MOST — advisory: concentric arcs converging to a direction
  most() {
    let b = '';
    for (let i = 0; i < 5; i++)
      b += `<circle cx="380" cy="${H / 2}" r="${70 + i * 58}" fill="none" stroke="${ink}" stroke-width="3" opacity="${0.5 - i * 0.08}"/>\n`;
    b += `<circle cx="380" cy="${H / 2}" r="26" fill="${ink}"/>\n`;
    b += `<path d="M 430 ${H / 2} H 1050 M 990 ${H / 2 - 48} L 1060 ${H / 2} L 990 ${H / 2 + 48}" fill="none" stroke="${accent}" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"/>`;
    return b;
  },
  // Sbubnom — ~20 promo projects mosaic
  sbubnom() {
    let b = '';
    let i = 0;
    for (let r = 0; r < 4; r++) for (let c = 0; c < 5; c++) {
      const x = 150 + c * 190, y = 105 + r * 115;
      const kind = (r * 5 + c) % 4;
      if (kind === 0) b += `<rect x="${x}" y="${y}" width="140" height="80" fill="none" stroke="${ink}" stroke-width="3" opacity="0.55"/>\n`;
      if (kind === 1) b += `<circle cx="${x + 70}" cy="${y + 40}" r="40" fill="${ink}" opacity="0.25"/>\n`;
      if (kind === 2) b += `<rect x="${x}" y="${y}" width="140" height="80" fill="${i === 6 ? accent : tint}" stroke="${ink}" stroke-width="${i === 6 ? 0 : 2}"/>\n`;
      if (kind === 3) b += `<path d="M ${x} ${y + 80} L ${x + 70} ${y} L ${x + 140} ${y + 80} Z" fill="none" stroke="${ink}" stroke-width="3" opacity="0.55"/>\n`;
      i++;
    }
    return b;
  },
  // Pernod Ricard — radiating campaign rays
  pernod() {
    let b = '';
    for (let i = 0; i < 24; i++) {
      const a = (i / 24) * Math.PI * 2;
      const x1 = 600 + Math.cos(a) * 90, y1 = 315 + Math.sin(a) * 90;
      const x2 = 600 + Math.cos(a) * (170 + (i % 3) * 40), y2 = 315 + Math.sin(a) * (170 + (i % 3) * 40);
      b += `<line x1="${x1.toFixed(1)}" y1="${y1.toFixed(1)}" x2="${x2.toFixed(1)}" y2="${y2.toFixed(1)}" stroke="${i % 6 === 0 ? accent : ink}" stroke-width="6" stroke-linecap="round" opacity="${i % 6 === 0 ? 1 : 0.45}"/>\n`;
    }
    b += `<circle cx="600" cy="315" r="52" fill="none" stroke="${ink}" stroke-width="5"/>`;
    return b;
  },
  // Samsonite — interlocking journey loops
  samsonite() {
    let b = '';
    for (let i = 0; i < 5; i++)
      b += `<rect x="${170 + i * 150}" y="${175 + (i % 2) * 60}" width="220" height="220" rx="60" fill="none" stroke="${i === 2 ? accent : ink}" stroke-width="${i === 2 ? 7 : 4}" opacity="${i === 2 ? 1 : 0.5}"/>\n`;
    return b;
  },
  // Renault — concentric diamonds
  renault() {
    let b = '';
    for (let i = 0; i < 5; i++) {
      const r = 60 + i * 52;
      b += `<path d="M 600 ${315 - r} L ${600 + r} 315 L 600 ${315 + r} L ${600 - r} 315 Z" fill="none" stroke="${i === 1 ? accent : ink}" stroke-width="${i === 1 ? 7 : 4}" opacity="${i === 1 ? 1 : 0.55 - i * 0.08}"/>\n`;
    }
    return b;
  },
};

mkdirSync('i/s', { recursive: true });
// only the cases still shown without a photograph
const USED = { homeapp: 'ha', snappyloop: 'sl', check24: 'c24', infourok: 'iu', balance: 'bal',
               bumble: 'bmb', vialytics: 'via', dsl: 'dsl', creara: 'cre' };
for (const [name, fn] of Object.entries(arts)) {
  const short = USED[name];
  if (!short) continue;
  writeFileSync(`i/s/${short}.svg`, wrap(fn()));
  console.log(`i/s/${short}.svg`);
}

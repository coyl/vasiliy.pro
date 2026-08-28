// Generates the static case pages under work/ from the data below.
// Run from the repo root: node tools/build-work.mjs
// The <main class="case"> block is what index.html lifts into the case overlay.
import { writeFileSync, mkdirSync } from 'node:fs';

const QUOTES = {
  michael: { img: 'michael.jpg', name: 'Michael Erhard', role: 'Bereichsleiter &middot; managed Vasil directly', text: 'Exceptional as team lead and as a developer. He prioritised his team&rsquo;s well-being and was always willing to go the extra mile.' },
  gergely: { img: 'gergely.jpg', name: 'Gergely T&#337;k&#233;si', role: 'Team Lead &middot; reported to Vasil', text: 'An exceptional team leader who delivers high-quality projects on time and fosters a positive, inclusive team.' },
  belma: { img: 'belma.jpg', name: 'Belma Herenda', role: 'Team Lead Software Developer &middot; worked across teams', text: 'Committed to the goal even under a tight deadline &mdash; passionate about coding, with a calm, can-do attitude every company should be happy to have.' },
  andrei: { img: 'andrei.jpg', name: 'Andrei Romashin', role: 'Frontend Engineer &middot; reported to Vasil', text: 'Under his leadership the department grew from 5 to 15. He took the product to MVP quickly and established Agile/Scrum and a full delivery lifecycle.' },
};

// Reverse-chronological — prev/next navigation follows this order.
// Per case: title (story headline), lede (bold claim), story (paragraphs),
// metric/metricLabel (stat strip), facts, art, gallery, quotes.
const CASES = [
  {
    slug: 'vialytics', name: 'vialytics', logo: 'vialytics.png',
    role: 'Senior Software Engineer &mdash; Munich &middot; Remote &middot; 2026 &ndash; present',
    title: 'Owning the services that grade the roads',
    lede: 'vialytics helps cities manage their roads with AI &mdash; and the grading services are where the product&rsquo;s judgment lives.',
    story: ['I own the function-critical grading services and their integration with the Data Science products: the path that turns model output into the road-condition grades cities act on.'],
    metric: 'Now', metricLabel: 'function-critical grading services',
  },
  {
    slug: 'snappyloop', name: 'snappyloop', logo: 'snappyloop.svg',
    art: 'snappyloop-1.jpg',
    shots: ['snappyloop-2.jpg', 'snappyloop-3.jpg', 'snappyloop-4.jpg', 'snappyloop-5.jpg'],
    role: 'Staff Engineer &mdash; Munich &middot; 2025 &ndash; present',
    title: 'From 200 to 5,000 learners in three months',
    lede: 'snappyloop is an AI language-learning product &mdash; courses, live voice practice with a tutor, and spaced-repetition vocabulary, delivered through Telegram and its Mini App.',
    story: [
      'I built the platform: the infrastructure and security for the multi-agent system behind it, load-tested at 20,000 requests per second. As the product grew from 200 to 5,000 users in three months, the architecture moved from a single long-polling worker to webhook-driven, horizontally scaled bot workers &mdash; with Redis for shared session state and global rate limits, and a central controller holding one ceiling across every replica for the AI vendors.',
      'Security is four layers deep on the webhook path &mdash; firewall, ingress, IP allowlist, and request-signature verification &mdash; with the internal API reachable only through an outbound-only Cloudflare Tunnel. SLO burn-rate alerts on webhook acknowledgement latency and reply success rate, plus multi-city Playwright probes, watch it in production.',
    ],
    stats: [
      { value: '200 &rarr; 5k', label: 'users in 3 months' },
      { value: '20k RPS', label: 'load-tested' },
    ],
    stack: ['Go', 'Symfony / PHP', 'PostgreSQL', 'Redis', 'Kubernetes', 'Helm', 'Telegram Bot API &amp; Mini Apps', 'Cloudflare Tunnel', 'OpenAI &amp; Gemini', 'Prometheus SLOs', 'Playwright', 'SOPS + age'],
    links: {
      title: 'Talks from this work',
      items: [
        { href: '../talks/bot-pod-problem.html', label: 'One Bot, One Pod, One Problem at a Time', note: 'Telegram bots on Kubernetes &mdash; webhooks, Redis, and SRE practices' },
        { href: '../talks/ship.html', label: 'Stop Prototyping, Start Shipping', note: 'Python, Node.js, and Golang libraries for moving from prototype to production' },
      ],
    },
  },
  {
    slug: 'check24', name: 'CHECK24', logo: 'check24.png',
    role: 'Engineering Manager &middot; Development Team Lead &mdash; Munich &middot; 2022 &ndash; 2025',
    title: 'Modernizing the backend in six months',
    lede: 'CHECK24 is Germany&rsquo;s largest comparison portal. The product I joined ran on a legacy stack and bare metal.',
    story: [
      'As Engineering Manager I led the backend modernization &mdash; Laminas to Doctrine in six months &mdash; which won the internal Best Client-Oriented Product award. In parallel we drove a DevOps/SRE transformation: from Ansible on bare metal to Kubernetes, Helm and Bitbucket Pipelines, with one-click test environments, observability, and CI with static analysis and tests.',
      'Before that, as Development Team Lead, I owned the delivery-tracking service with a four-person backend team: introduced Scrum, stabilized the legacy system, and raised quality through code reviews and testing.',
    ],
    metric: '6 mo', metricLabel: 'Laminas &rarr; Doctrine, award-winning',
    facts: 'Team as Team Lead: 4 backend, 2 PMs.',
    art: 'check24-1.jpg', artPos: 'center',
    gallery: [
      { src: 'check24-2.jpg', alt: 'CHECK24 Leitlinien Award 2023 presented to Vasil Kulakov', fit: 'natural' },
    ],
    quotes: ['michael', 'gergely', 'belma'],
  },
  {
    slug: 'infourok', name: 'Infourok', logo: 'infourok.png',
    art: 'infourok-1.jpg',
    role: 'Head of Development, SRM &mdash; 2021 &ndash; 2022',
    title: '3 new teams in 2 months',
    lede: 'Infourok is one of the largest education platforms in its market; IU.RU gathers its AI tools in one place.',
    story: ['As Head of Development I built and managed three cross-functional product teams &mdash; and set the engineering workflow, automation, and architecture standards they shipped by.'],
    metric: '3', metricLabel: 'cross-functional product teams',
    facts: 'Team: 12 backend, 5 frontend, 2 PMs, 2 designers.',
  },
  {
    slug: 'homeapp', name: 'Homeapp', logo: 'homeapp.png',
    art: 'homeapp-1.jpg',
    gallery: ['homeapp-2.jpg', 'homeapp-3.jpg', 'homeapp-4.jpg'],
    role: 'VP of Engineering &middot; Engineering Manager &mdash; 2018 &ndash; 2021',
    title: 'From 5 engineers to a 40-person org',
    lede: 'Homeapp is a real-estate platform that pairs sellers with experts: appraisal reports, advertising analytics, sold-property data.',
    story: [
      'As VP of Engineering I scaled the team from 5 to ~40 people, introduced product trios across design, product and engineering, and instituted Scrum, hiring, KPI/motivation systems, and remote operations &mdash; partnering with the CTPO on product process.',
      'We built the company platform on PHP/Golang microservices, Kubernetes, and CI/CD. Earlier, as Engineering Manager, I introduced Docker, GKE continuous delivery, and CI.',
    ],
    metric: '5 &rarr; 40', metricLabel: 'engineers scaled',
    facts: 'Team: 15 backend, 12 frontend, 5 QA, 4 DevOps, 4 PMs. Stack: PHP/Golang, Kubernetes, JIRA, GitHub, Drone, Helm.',
    quotes: ['andrei'],
  },
  {
    // hidden: temporarily unlinked from the wall and prev/next (page still builds)
    slug: 'balance', hidden: true, name: 'Balance Platform', logo: 'balance.png',
    role: 'KYC Lead Developer &mdash; 2017 &ndash; 2018',
    title: 'KYC for a cloud bank, tests ten times faster',
    lede: 'Balance Platform builds cloud banking products &mdash; and KYC is the gate every customer passes through.',
    story: ['I led KYC delivery, introduced Scrum, and moved CI to Docker: test runs became roughly ten times faster.'],
    metric: '~10&times;', metricLabel: 'faster test runs',
  },
  {
    // hidden: temporarily unlinked from the wall and prev/next (page still builds)
    slug: 'dsl', hidden: true, name: 'Digital Society Laboratory', logo: 'dsl.svg',
    role: 'Symfony Team Lead &mdash; 2015 &ndash; 2017',
    title: 'Owning architecture at a high pace',
    lede: 'Digital Society Laboratory ran a high-pace Symfony project.',
    story: ['I led three engineers and owned the architecture.'],
    metric: '3', metricLabel: 'engineers led',
  },
  {
    slug: 'bumble', name: 'Bumble Inc.', logo: 'bumble.png',
    role: 'Engineering Manager &mdash; London Area, United Kingdom &middot; 2014 &ndash; 2015',
    title: 'Releases across time zones',
    lede: 'Bumble&rsquo;s products ship continuously, from teams spread around the world.',
    story: ['In London I led the international release-engineering team, automating and owning the end-to-end release cycle together with Product.'],
    metric: 'E2E', metricLabel: 'release cycle owned',
  },
  {
    slug: 'creara', name: 'Creara Media', logo: 'creara.png',
    role: 'Head of Engineering &middot; Engineering Manager &mdash; 2010 &ndash; 2014',
    title: 'Five teams, one platform',
    lede: 'Creara Media ran five PHP teams &mdash; fifteen developers &mdash; shipping in parallel.',
    story: ['As Head of Engineering I introduced Git, Jira, and TeamCity CI/CD, and shared platform components across the teams. Earlier, as Engineering Manager, I led billing delivery and people development.'],
    metric: '15', metricLabel: 'developers across 5 teams',
  },
];

// Shown on the company wall but with no case page of their own:
// Pernod Ricard, Samsonite, Renault (contract promo projects, 2009–2010).
// MOST Creative Club and Sbubnom are in the CV only — not on the site.

const arrow = (dir) => dir === 'prev'
  ? '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#6d675c" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14 8 H3"></path><path d="M7 4 L3 8 L7 12"></path></svg>'
  : '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#6d675c" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M2 8 H13"></path><path d="M9 4 L13 8 L9 12"></path></svg>';

const strip = (s) => s.replace(/<[^>]+>/g, '').replace(/&mdash;/g, '—').replace(/&rarr;/g, '→').replace(/&middot;/g, '·').replace(/&ndash;/g, '–').replace(/&times;/g, '×').replace(/&rsquo;/g, '’').replace(/&#337;/g, 'ő').replace(/&#233;/g, 'é');

const page = (c, prev, next) => `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Vasil Kulakov at ${strip(c.name)} — ${strip(c.role)}.">
    <title>${strip(c.name)}: ${strip(c.title)} — Vasil Kulakov</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Archivo:wght@500;700;800&family=Source+Serif+4:ital,opsz,wght@0,8..60,400;0,8..60,600;1,8..60,400&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="../css/site.css">
    <script>(function(){try{var t=localStorage.getItem('theme');if(t==='dark'||t==='light')document.documentElement.setAttribute('data-theme',t);}catch(e){}})();</script>
</head>
<body>

<header class="site-header">
    <div class="wrap">
        <a class="brand" href="../index.html">Vasil Kulakov</a>
        <nav class="site-nav">
            <a class="active" href="../index.html#work">Work</a>
            <a href="../blog/Vasil.Kulakov.pdf" target="_blank" rel="noopener">CV</a>
            <a href="../index.html#contact">Contact</a>
            <button class="theme-toggle" type="button" aria-label="Switch theme" title="Switch theme">
                <svg class="icon-moon" width="17" height="17" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M17 12.3A7.3 7.3 0 0 1 7.7 3a7.5 7.5 0 1 0 9.3 9.3Z"></path></svg>
                <svg class="icon-sun" width="17" height="17" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="10" cy="10" r="3.6"></circle><path d="M10 1.6v2M10 16.4v2M18.4 10h-2M3.6 10h-2M15.9 4.1l-1.4 1.4M5.5 14.5l-1.4 1.4M15.9 15.9l-1.4-1.4M5.5 5.5 4.1 4.1"></path></svg>
            </button>
        </nav>
    </div>
</header>

<div class="wrap crumb">
    <a href="../index.html#companies">${arrow('prev')} All companies</a>
</div>

<main class="case wrap">
    <div class="case-kicker">${c.name}</div>
    <h1 class="case-title">${c.title}</h1>
    <div class="case-role">${c.role}</div>

    <section class="block block-text">
        <p class="block-lede">${c.lede}</p>
${c.story.map((p) => `        <p class="block-story">${p}</p>`).join('\n')}
        <div class="block-stats">
${(c.stats ?? [{ value: c.metric, label: c.metricLabel }]).map((st) => `            <span class="stat"><strong>${st.value}</strong> ${st.label}</span>`).join('\n')}
${c.facts ? `            <span class="stat-facts">${c.facts}</span>\n` : ''}        </div>
${c.stack ? `        <div class="stack">
            <span class="stack-label">Stack</span>
            <span class="stack-chips">${c.stack.map((t) => `<span class="chip">${t}</span>`).join('')}</span>
        </div>
` : ''}    </section>

    <section class="block block-media">
        <span class="shade"><img class="${c.artPos === 'center' ? 'pos-center' : ''}" src="../images/showcases/${c.art ?? `${c.slug}.svg`}" alt="${strip(c.name)}" width="1200" height="630"></span>
    </section>
${c.gallery && c.gallery.length === 1 ? `
    <section class="block block-media">
        <img${(typeof c.gallery[0] === 'string' ? {} : c.gallery[0]).fit === 'natural' ? ' class="natural"' : ((typeof c.gallery[0] === 'string' ? {} : c.gallery[0]).pos === 'center' ? ' class="pos-center"' : '')} src="../images/showcases/${typeof c.gallery[0] === 'string' ? c.gallery[0] : c.gallery[0].src}" alt="${typeof c.gallery[0] === 'string' ? `${strip(c.name)} product screen` : (c.gallery[0].alt ?? `${strip(c.name)} product screen`)}">
    </section>
` : ''}${c.gallery && c.gallery.length > 1 ? `
    <section class="block block-media">
        <div class="mosaic">
${c.gallery.map((g) => {
  const it = typeof g === 'string' ? { src: g } : g;
  const cls = it.pos === 'center' ? ' class="pos-center"' : '';
  return `            <img${cls} src="../images/showcases/${it.src}" alt="${it.alt ?? `${strip(c.name)} product screen`}">`;
}).join('\n')}
        </div>
    </section>
` : ''}${c.shots && c.shots.length ? `
    <section class="block block-media">
        <div class="shots">
${c.shots.map((g) => `            <img src="../images/showcases/${g}" alt="${strip(c.name)} app screen">`).join('\n')}
        </div>
    </section>
` : ''}${c.links ? `
    <section class="block block-links">
        <h2>${c.links.title}</h2>
        <div class="link-list">
${c.links.items.map((l) => `            <a href="${l.href}">
                <span class="link-label">${l.label}</span>
                <span class="link-note">${l.note}</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#2456c4" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M2 8 H13"></path><path d="M9 4 L13 8 L9 12"></path></svg>
            </a>`).join('\n')}
        </div>
    </section>
` : ''}${c.quotes && c.quotes.length ? `
    <section class="block block-quotes">
        <h2>From the team</h2>
        <div class="case-quotes">
${c.quotes.map((q) => {
  const Q = QUOTES[q];
  return `            <div class="case-quote">
                <blockquote>${Q.text}</blockquote>
                <div class="rec-author">
                    <img src="../images/recommenders/${Q.img}" alt="">
                    <div><strong>${Q.name}</strong> <span>&mdash; ${Q.role}</span></div>
                </div>
            </div>`;
}).join('\n')}
        </div>
    </section>
` : ''}
    <div class="case-nav">
        <a href="${prev.slug}.html">${arrow('prev')}<img src="../images/companies/${prev.logo}" alt=""><span>${prev.name}</span></a>
        <a href="${next.slug}.html"><span>${next.name}</span><img src="../images/companies/${next.logo}" alt="">${arrow('next')}</a>
    </div>
</main>

<footer class="site-footer" id="contact">
    <div class="wrap">
        <div class="footer-main">
            <div class="footer-title">Let&rsquo;s talk.</div>
            <div class="footer-sub">Based in Munich &mdash; available for hybrid presence in any city in Germany.</div>
            <div class="footer-actions">
                <a class="btn btn-primary" href="mailto:vasily.kulakov@gmail.com">Email</a>
                <a class="btn btn-ghost" href="https://www.linkedin.com/in/vasiliykulakov" rel="me">LinkedIn</a>
            </div>
        </div>
        <div class="footer-meta">
            <div>&copy; 2026 Vasil Kulakov &middot; Munich, Bavaria</div>
        </div>
    </div>
</footer>

<script src="../js/cover-tilt.js"></script>
<script src="../js/theme.js"></script>

</body>
</html>
`;

mkdirSync('work', { recursive: true });
const VISIBLE = CASES.filter((c) => !c.hidden);
CASES.forEach((c) => {
  // a hidden case still builds (direct URL keeps working) but sits outside the chain
  const ring = VISIBLE;
  const i = ring.findIndex((x) => x.slug === c.slug);
  const at = i === -1 ? 0 : i;
  const prev = ring[(at - 1 + ring.length) % ring.length];
  const next = ring[(at + 1) % ring.length];
  writeFileSync(`work/${c.slug}.html`, page(c, prev, next));
  console.log(`work/${c.slug}.html${c.hidden ? ' (unlinked)' : ''}`);
});

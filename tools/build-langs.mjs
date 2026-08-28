// Generates de.html / ru.html / pl.html from index.html.
// The English home is the single source of structure; only the copy is swapped,
// so every language stays on the same design without a second template.
// Run from the repo root: node tools/build-langs.mjs
import { readFileSync, writeFileSync } from 'node:fs';

const NAMES = { en: 'English', de: 'Deutsch', ru: 'Русский', pl: 'Polski' };

// Recommendation quotes stay in the language they were given in (English);
// only the attribution around them is translated.
const LANGS = {
  de: {
    lang: 'de',
    title: 'Vasil Kulakov — Engineering-Leadership, gebaut auf Lieferung',
    description: 'Vasil Kulakov — Engineering-Leader in München. 20 Jahre Software, 14 Jahre Führung: Teams von 5 auf 40 skaliert, SRE-Transformationen und KI-Plattformen mit 20k RPS.',
    keywords: 'Vasil Kulakov, Wassil Kulakow, VP of Engineering, CTO, Engineering-Leiter, SRE, Kubernetes, DevOps, Golang, Google Cloud, München',
    t: {
      'Work': 'Arbeit', 'CV': 'Lebenslauf', 'Contact': 'Kontakt',
      'VP of Engineering &middot; Former CTO &middot; MBA': 'VP of Engineering &middot; Ehemaliger CTO &middot; MBA',
      'Engineering leadership, built on delivery.': 'Engineering-Leadership, gebaut auf Lieferung.',
      'Twenty years in software, fourteen leading engineers. I scale teams &mdash; 5 to 40 at Homeapp &mdash; run SRE transformations from bare metal to Kubernetes, and build AI platforms that hold 20k requests per second.':
        'Zwanzig Jahre Software, vierzehn Jahre Führung. Ich skaliere Teams &mdash; von 5 auf 40 bei Homeapp &mdash; treibe SRE-Transformationen von Bare Metal zu Kubernetes und baue KI-Plattformen, die 20.000 Anfragen pro Sekunde tragen.',
      'Selected work': 'Ausgewählte Arbeiten',
      'Engineers scaled': 'Skalierte Engineers',
      'Grew engineering from 5 to ~40 as VP &mdash; product trios, hiring, Scrum, remote ops.':
        'Engineering als VP von 5 auf ~40 Personen ausgebaut &mdash; Produkt-Trios, Recruiting, Scrum, Remote-Betrieb.',
      'Users in 3 months': 'Nutzer in 3 Monaten',
      'Platform for an AI language-learning product &mdash; Go, Kubernetes, Redis; load-tested at 20k RPS.':
        'Plattform für ein KI-Sprachlernprodukt &mdash; Go, Kubernetes, Redis; lasttestet mit 20k RPS.',
      'Award-winning modernization': 'Preisgekrönte Modernisierung',
      'Laminas &rarr; Doctrine in 6 months &mdash; won the internal Best Client-Oriented Product award.':
        'Laminas &rarr; Doctrine in 6 Monaten &mdash; ausgezeichnet mit dem internen Preis für das kundenorientierteste Produkt.',
      'Product teams built': 'Aufgebaute Produktteams',
      'Built and ran 3 cross-functional product teams; workflow, automation, architecture standards.':
        'Drei crossfunktionale Produktteams aufgebaut und geführt; Workflow, Automatisierung, Architekturstandards.',
      'Companies I&rsquo;ve worked with': 'Unternehmen, für die ich gearbeitet habe',
      'In their words': 'Was andere sagen',
      'Let&rsquo;s talk.': 'Sprechen wir.',
      'Based in Munich &mdash; available for hybrid presence in any city in Germany.':
        'Ansässig in München &mdash; hybride Präsenz in jeder Stadt Deutschlands möglich.',
      '&mdash; Bereichsleiter, CHECK24 &middot; managed Vasil directly': '&mdash; Bereichsleiter, CHECK24 &middot; war Vasils Vorgesetzter',
      '&mdash; Frontend Engineer, Homeapp &middot; reported to Vasil': '&mdash; Frontend Engineer, Homeapp &middot; berichtete an Vasil',
      '&mdash; Team Lead, CHECK24 &middot; reported to Vasil': '&mdash; Team Lead, CHECK24 &middot; berichtete an Vasil',
      '&mdash; Team Lead Software Developer, CHECK24 &middot; worked across teams': '&mdash; Team Lead Software Developer, CHECK24 &middot; teamübergreifende Zusammenarbeit',
      '6 mo': '6 Mon.',
      '3 teams': '3 Teams',
      'Switch theme': 'Design wechseln',
    },
  },
  ru: {
    lang: 'ru',
    title: 'Vasil Kulakov — инженерное лидерство, основанное на результате',
    description: 'Vasil Kulakov (Василий Кулаков) — инженерный руководитель в Мюнхене. 20 лет в разработке, 14 лет в управлении: рост команд с 5 до 40 человек, SRE-трансформации и AI-платформы на 20k RPS.',
    keywords: 'Vasil Kulakov, Василий Кулаков, VP of Engineering, CTO, инженерный руководитель, SRE, Kubernetes, DevOps, Golang, Google Cloud, Мюнхен',
    t: {
      'Work': 'Проекты', 'CV': 'Резюме', 'Contact': 'Контакты',
      'VP of Engineering &middot; Former CTO &middot; MBA': 'VP of Engineering &middot; экс-CTO &middot; MBA',
      'Engineering leadership, built on delivery.': 'Инженерное лидерство, основанное на результате.',
      'Twenty years in software, fourteen leading engineers. I scale teams &mdash; 5 to 40 at Homeapp &mdash; run SRE transformations from bare metal to Kubernetes, and build AI platforms that hold 20k requests per second.':
        'Двадцать лет в разработке, четырнадцать — в управлении. Масштабирую команды &mdash; с 5 до 40 человек в Homeapp &mdash; провожу SRE-трансформации от bare metal к Kubernetes и строю AI-платформы, выдерживающие 20 000 запросов в секунду.',
      'Selected work': 'Избранные работы',
      'Engineers scaled': 'Рост команды',
      'Grew engineering from 5 to ~40 as VP &mdash; product trios, hiring, Scrum, remote ops.':
        'Вырастил инженерную команду с 5 до ~40 человек в роли VP &mdash; продуктовые трио, найм, Scrum, удалённые процессы.',
      'Users in 3 months': 'Пользователей за 3 месяца',
      'Platform for an AI language-learning product &mdash; Go, Kubernetes, Redis; load-tested at 20k RPS.':
        'Платформа для AI-продукта по изучению языков &mdash; Go, Kubernetes, Redis; нагрузочное тестирование на 20k RPS.',
      'Award-winning modernization': 'Модернизация с наградой',
      'Laminas &rarr; Doctrine in 6 months &mdash; won the internal Best Client-Oriented Product award.':
        'Laminas &rarr; Doctrine за 6 месяцев &mdash; внутренняя награда за самый клиентоориентированный продукт.',
      'Product teams built': 'Созданные команды',
      'Built and ran 3 cross-functional product teams; workflow, automation, architecture standards.':
        'Создал и вёл 3 кросс-функциональные продуктовые команды; процессы, автоматизация, стандарты архитектуры.',
      'Companies I&rsquo;ve worked with': 'Компании, с которыми я работал',
      'In their words': 'Отзывы коллег',
      'Let&rsquo;s talk.': 'Давайте поговорим.',
      'Based in Munich &mdash; available for hybrid presence in any city in Germany.':
        'Живу в Мюнхене &mdash; готов к гибридному формату в любом городе Германии.',
      '&mdash; Bereichsleiter, CHECK24 &middot; managed Vasil directly': '&mdash; Bereichsleiter, CHECK24 &middot; непосредственный руководитель',
      '&mdash; Frontend Engineer, Homeapp &middot; reported to Vasil': '&mdash; Frontend Engineer, Homeapp &middot; работал в команде Василия',
      '&mdash; Team Lead, CHECK24 &middot; reported to Vasil': '&mdash; Team Lead, CHECK24 &middot; работал в команде Василия',
      '&mdash; Team Lead Software Developer, CHECK24 &middot; worked across teams': '&mdash; Team Lead Software Developer, CHECK24 &middot; смежная команда',
      '6 mo': '6 мес.',
      '3 teams': '3 команды',
      'Switch theme': 'Сменить тему',
    },
  },
  pl: {
    lang: 'pl',
    title: 'Vasil Kulakov — przywództwo inżynierskie oparte na dowożeniu',
    description: 'Vasil Kulakov — lider inżynierii w Monachium. 20 lat w oprogramowaniu, 14 lat zarządzania: zespoły od 5 do 40 osób, transformacje SRE i platformy AI o wydajności 20k RPS.',
    keywords: 'Vasil Kulakov, Wasyl Kułakow, VP of Engineering, CTO, lider inżynierii, SRE, Kubernetes, DevOps, Golang, Google Cloud, Monachium',
    t: {
      'Work': 'Projekty', 'CV': 'CV', 'Contact': 'Kontakt',
      'VP of Engineering &middot; Former CTO &middot; MBA': 'VP of Engineering &middot; były CTO &middot; MBA',
      'Engineering leadership, built on delivery.': 'Przywództwo inżynierskie oparte na dowożeniu.',
      'Twenty years in software, fourteen leading engineers. I scale teams &mdash; 5 to 40 at Homeapp &mdash; run SRE transformations from bare metal to Kubernetes, and build AI platforms that hold 20k requests per second.':
        'Dwadzieścia lat w oprogramowaniu, czternaście w zarządzaniu. Skaluję zespoły &mdash; z 5 do 40 osób w Homeapp &mdash; prowadzę transformacje SRE od bare metal do Kubernetes i buduję platformy AI obsługujące 20 000 żądań na sekundę.',
      'Selected work': 'Wybrane projekty',
      'Engineers scaled': 'Wzrost zespołu',
      'Grew engineering from 5 to ~40 as VP &mdash; product trios, hiring, Scrum, remote ops.':
        'Jako VP rozwinąłem inżynierię z 5 do ~40 osób &mdash; trio produktowe, rekrutacja, Scrum, praca zdalna.',
      'Users in 3 months': 'Użytkowników w 3 miesiące',
      'Platform for an AI language-learning product &mdash; Go, Kubernetes, Redis; load-tested at 20k RPS.':
        'Platforma dla produktu AI do nauki języków &mdash; Go, Kubernetes, Redis; testy obciążeniowe 20k RPS.',
      'Award-winning modernization': 'Nagrodzona modernizacja',
      'Laminas &rarr; Doctrine in 6 months &mdash; won the internal Best Client-Oriented Product award.':
        'Laminas &rarr; Doctrine w 6 miesięcy &mdash; wewnętrzna nagroda za produkt najbardziej zorientowany na klienta.',
      'Product teams built': 'Zbudowane zespoły',
      'Built and ran 3 cross-functional product teams; workflow, automation, architecture standards.':
        'Zbudowałem i prowadziłem 3 wielofunkcyjne zespoły produktowe; procesy, automatyzacja, standardy architektury.',
      'Companies I&rsquo;ve worked with': 'Firmy, z którymi pracowałem',
      'In their words': 'Opinie współpracowników',
      'Let&rsquo;s talk.': 'Porozmawiajmy.',
      'Based in Munich &mdash; available for hybrid presence in any city in Germany.':
        'Mieszkam w Monachium &mdash; praca hybrydowa w każdym mieście w Niemczech.',
      '&mdash; Bereichsleiter, CHECK24 &middot; managed Vasil directly': '&mdash; Bereichsleiter, CHECK24 &middot; bezpośredni przełożony',
      '&mdash; Frontend Engineer, Homeapp &middot; reported to Vasil': '&mdash; Frontend Engineer, Homeapp &middot; pracował w zespole Vasila',
      '&mdash; Team Lead, CHECK24 &middot; reported to Vasil': '&mdash; Team Lead, CHECK24 &middot; pracował w zespole Vasila',
      '&mdash; Team Lead Software Developer, CHECK24 &middot; worked across teams': '&mdash; Team Lead Software Developer, CHECK24 &middot; współpraca między zespołami',
      '6 mo': '6 mies.',
      '3 teams': '3 zespoły',
      'Switch theme': 'Zmień motyw',
    },
  },
};

const src = readFileSync('index.html', 'utf8');

function langLinks(active) {
  return ['en', 'de', 'ru', 'pl']
    .map(function (code) {
      var href = code === 'en' ? 'index.html' : code + '.html';
      return code === active
        ? '<span>' + NAMES[code] + '</span>'
        : '<a href="' + href + '">' + NAMES[code] + '</a>';
    })
    .join(' &middot; ');
}

// the English page needs the switcher too, with English marked as current
writeFileSync('index.html', src.replace(
  /<div class="lang-switch">.*?<\/div>/,
  '<div class="lang-switch">' + langLinks('en') + '</div>'
));

const base = readFileSync('index.html', 'utf8');

for (const [code, cfg] of Object.entries(LANGS)) {
  let out = base;
  out = out.replace('<html lang="en">', '<html lang="' + cfg.lang + '">');
  out = out.replace(/<meta name="keywords" content="[^"]*">/, '<meta name="keywords" content="' + cfg.keywords + '">');
  out = out.replace(/<meta name="description" content="[^"]*">/, '<meta name="description" content="' + cfg.description + '">');
  out = out.replace(/<title>[^<]*<\/title>/, '<title>' + cfg.title + '</title>');
  // assets and cases live one level up from nothing — paths are already relative to the root
  for (const [from, to] of Object.entries(cfg.t)) {
    if (!out.includes(from)) { console.warn('  ! missing in source (' + code + '): ' + from.slice(0, 60)); continue; }
    out = out.split(from).join(to);
  }
  // the tiles and the company wall open this language's showcases
  out = out.replace(/href="work\//g, 'href="work/' + code + '/');
  out = out.replace(/<div class="lang-switch">.*?<\/div>/, '<div class="lang-switch">' + langLinks(code) + '</div>');
  writeFileSync(code + '.html', out);
  console.log(code + '.html');
}

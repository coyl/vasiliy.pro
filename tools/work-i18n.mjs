// Translations for the case pages. English lives in build-work.mjs;
// this file carries only what differs per language.
// Quotes themselves stay in the language they were given in (English);
// only the attribution around them is translated.

export const UI = {
  de: {
    nav: { work: 'Arbeit', cv: 'Lebenslauf', contact: 'Kontakt' },
    allCompanies: 'Alle Unternehmen',
    theWork: 'Die Arbeit',
    fromTheTeam: 'Stimmen aus dem Team',
    stack: 'Stack',
    switchTheme: 'Design wechseln',
    footerTitle: 'Sprechen wir.',
    footerSub: 'Ansässig in München &mdash; hybride Präsenz in jeder Stadt Deutschlands möglich.',
  },
  ru: {
    nav: { work: 'Проекты', cv: 'Резюме', contact: 'Контакты' },
    allCompanies: 'Все компании',
    theWork: 'Что сделано',
    fromTheTeam: 'Отзывы команды',
    stack: 'Стек',
    switchTheme: 'Сменить тему',
    footerTitle: 'Давайте поговорим.',
    footerSub: 'Живу в Мюнхене &mdash; готов к гибридному формату в любом городе Германии.',
  },
  pl: {
    nav: { work: 'Projekty', cv: 'CV', contact: 'Kontakt' },
    allCompanies: 'Wszystkie firmy',
    theWork: 'Zakres pracy',
    fromTheTeam: 'Głosy zespołu',
    stack: 'Stos',
    switchTheme: 'Zmień motyw',
    footerTitle: 'Porozmawiajmy.',
    footerSub: 'Mieszkam w Monachium &mdash; praca hybrydowa w każdym mieście w Niemczech.',
  },
};

export const QUOTE_ROLES = {
  de: {
    michael: 'Bereichsleiter &middot; war Vasils Vorgesetzter',
    gergely: 'Team Lead &middot; berichtete an Vasil',
    belma: 'Team Lead Software Developer &middot; teamübergreifende Zusammenarbeit',
    andrei: 'Frontend Engineer &middot; berichtete an Vasil',
    tariq: 'Software Engineer &middot; berichtete an Vasil',
    georgiy: 'Team Lead &middot; berichtete an Vasil',
    ivan: 'Frontend-Entwickler &middot; berichtete an Vasil',
    leila: 'QA &middot; im selben Team gearbeitet',
  },
  ru: {
    michael: 'Bereichsleiter &middot; непосредственный руководитель',
    gergely: 'Team Lead &middot; работал в команде Василия',
    belma: 'Team Lead Software Developer &middot; смежная команда',
    andrei: 'Frontend Engineer &middot; работал в команде Василия',
    tariq: 'Software Engineer &middot; работал в команде Василия',
    georgiy: 'Team Lead &middot; работал в команде Василия',
    ivan: 'Frontend-разработчик &middot; работал в команде Василия',
    leila: 'QA &middot; работала в одной команде',
  },
  pl: {
    michael: 'Bereichsleiter &middot; bezpośredni przełożony',
    gergely: 'Team Lead &middot; pracował w zespole Vasila',
    belma: 'Team Lead Software Developer &middot; współpraca między zespołami',
    andrei: 'Frontend Engineer &middot; pracował w zespole Vasila',
    tariq: 'Software Engineer &middot; pracował w zespole Vasila',
    georgiy: 'Team Lead &middot; pracował w zespole Vasila',
    ivan: 'Programista frontend &middot; pracował w zespole Vasila',
    leila: 'QA &middot; pracowała w tym samym zespole',
  },
};

export const CASES = {
  de: {
    vialytics: {
      role: 'Senior Software Engineer &mdash; München &middot; Remote &middot; 2026 &ndash; heute',
      title: 'Die Services, die den Straßenzustand bewerten',
      lede: 'vialytics hilft Kommunen, ihre Straßen mit KI zu verwalten &mdash; und in den Grading-Services steckt das Urteil des Produkts.',
      story: ['Verantwortung für die funktionskritischen Grading-Services und ihre Integration mit den Data-Science-Produkten: den Weg, auf dem Modellergebnisse zu Straßenzustandsnoten werden, nach denen Kommunen handeln.'],
      metric: 'Jetzt', metricLabel: 'funktionskritische Grading-Services',
    },
    snappyloop: {
      role: 'Founder &amp; Engineering Lead &mdash; München &middot; 2024 &ndash; 2026',
      title: 'Ein KI-natives Delivery-Modell, bewährt in Produktion',
      lede: 'snappyloop ist ein KI-Sprachlernprodukt &mdash; Kurse, Sprechpraxis mit einem Tutor in Echtzeit und Vokabeln nach dem Spaced-Repetition-Prinzip, ausgeliefert über Telegram, seine Mini App und das Web. Ein Engineer hat es mit einem KI-nativen Delivery-Modell gebaut und betrieben.',
      story: [
        'In diesem Modell übernahmen spezialisierte Agenten klar abgegrenzte Arbeit &mdash; eine Service-Änderung, eine Migration, eine Test-Suite &mdash; über GitHub Issues, die jede Aufgabe, ihren Kontext und die Spur der Entscheidungen zwischen den Sitzungen festhielten. Produktentscheidungen, Architektur, Prioritäten, Risiko, Review und Abnahme blieben in menschlicher Hand: Agenten schlugen vor und setzten um, und nichts wurde ohne Review gegen die Architektur abgenommen.',
        'Das Modell trug mehr als ein Dutzend Services in Go und PHP &mdash; Kurse, Sprechpraxis, Karteikarten, Zahlungen, Benachrichtigungen &mdash; auf PostgreSQL, Redis und Kubernetes. Als das Produkt in drei Monaten von 200 auf 5.000 Nutzer wuchs, wanderte die Architektur von einem einzelnen Long-Polling-Worker zu webhook-getriebenen, horizontal skalierten Bot-Workern, mit Redis für gemeinsamen Session-State und globale Rate Limits und einer zentralen Obergrenze für die KI-Anbieter über alle Replicas. Die Plattform wurde mit 20.000 Anfragen pro Sekunde lastgetestet.',
        'Die Sicherheit auf dem Webhook-Pfad war vierschichtig &mdash; Firewall, Ingress, IP-Allowlist und Prüfung der Request-Signatur &mdash;, die interne API war nur über einen ausgehenden Cloudflare Tunnel erreichbar. SLO-Burn-Rate-Alarme und Playwright-Proben aus mehreren Städten überwachten den Betrieb. Aus dem LLM-Proxy dahinter wurde Keystone, ein Open-Source-Gateway.',
      ],
      stats: [{ value: 'KI-nativ', label: 'Agenten über GitHub Issues, Entscheidungen beim Menschen' }, { label: 'Nutzer in 3 Monaten' }, { label: 'im Lasttest' }],
      links: {
        title: 'Vorträge und Projekte aus dieser Arbeit',
        notes: [
          'SREday München 2026 &mdash; Telegram-Bots auf Kubernetes, Webhooks, Redis und SRE-Praktiken',
          'Meetup bei Google, Dezember 2025 &mdash; Bibliotheken für den Weg von KI-Features vom Prototyp in die Produktion',
          'Das Open-Source-LLM-Gateway, das aus dieser Plattform entstand',
        ],
      },
    },
    keystone: {
      role: 'Autor &amp; Maintainer &mdash; Open Source &middot; 2026 &ndash; heute',
      title: 'Ein Gateway für jeden LLM-Aufruf',
      lede: 'Keystone (KTMS) ist ein selbst gehostetes Open-Source-LLM-Gateway. Services fragen nach einem Aufwandslevel statt nach einem Modell; Keystone hält die Anbieter-Schlüssel, wählt die Modellkette, weicht bei Ausfällen aus und setzt Rate- und Kostenlimits durch.',
      story: [
        'Es begann als LLM-Proxy hinter snappyloop und wurde zu einem eigenständigen Produkt, gebaut mit demselben KI-nativen Delivery-Modell: ein einzelnes Go-Binary mit gRPC, OpenAI- und Anthropic-kompatiblen APIs und einem MCP-Gateway, rund 7 MiB Speicher im Leerlauf und unter einer Millisekunde zusätzlicher Latenz.',
        'Die Betriebsprobleme von LLMs in Produktion löst das Gateway, nicht jeder einzelne Service: harte Kostenobergrenzen pro Schlüssel, Endnutzer und Team, atomar vor jedem Aufruf reserviert; Circuit Breaker pro Anbieter und Fallback-Ketten; lokale Inferenz-Nodes auf ungenutzten Macs und GPU-Rechnern mit Cloud-Fallback; signierte Releases mit SBOM und SLSA-Provenienz.',
        'Drumherum: light-tokenmeter für Nutzungsberichte, die Web-Konsole ktms-admin und ein Claude-Code-Plugin, dessen Skills das Gateway bewerten, deployen und integrieren &mdash; mit einer CI, die fehlschlägt, sobald ein Skill einen Befehl nennt, den das Release nicht kennt.',
      ],
      stats: [{ label: 'zusätzliche Latenz' }, { label: 'Speicher im Leerlauf' }, { label: 'Open Source' }],
      links: {
        title: 'Projekt',
        notes: ['Quellcode, Releases und das Claude-Code-Plugin', 'Dokumentation und Schnellstart'],
      },
    },
    check24: {
      role: 'Engineering Manager &middot; Development Team Lead &mdash; München &middot; 2022 &ndash; 2025',
      title: 'Backend-Modernisierung in sechs Monaten',
      lede: 'CHECK24 ist Deutschlands größtes Vergleichsportal. Das Produkt lief auf einem Legacy-Stack und auf Bare Metal.',
      story: [
        'Die Backend-Modernisierung &mdash; Laminas zu Doctrine in sechs Monaten &mdash; wurde aus der Rolle des Engineering Managers geleitet und mit dem internen Preis für das kundenorientierteste Produkt ausgezeichnet. Parallel dazu eine DevOps/SRE-Transformation: von Ansible auf Bare Metal zu Kubernetes, Helm und Bitbucket Pipelines, mit Testumgebungen auf Knopfdruck, Observability und CI mit statischer Analyse und Tests.',
        'Davor, als Development Team Lead: Verantwortung für den Liefertracking-Service mit einem vierköpfigen Backend-Team, Scrum eingeführt, das Legacy-System stabilisiert und die Qualität durch Code-Reviews und Tests gehoben.',
      ],
      metric: '6 Mon.', metricLabel: 'Laminas &rarr; Doctrine, preisgekrönt',
      facts: 'Team als Team Lead: 4 Backend, 2 PMs.',
    },
    infourok: {
      role: 'Head of Development &mdash; 2021 &ndash; 2022',
      title: '3 neue Teams in 2 Monaten',
      lede: 'Infourok ist eine der größten Bildungsplattformen in seinem Markt; IU.RU bündelt die KI-Werkzeuge an einem Ort.',
      story: ['Drei crossfunktionale Produktteams wurden aus der Rolle des Head of Development aufgebaut und geführt &mdash; samt der Engineering-Workflows, der Automatisierung und der Architekturstandards, nach denen sie lieferten.'],
      metricLabel: 'crossfunktionale Produktteams',
      facts: 'Team: 12 Backend, 5 Frontend, 2 PMs, 2 Designer.',
    },
    homeapp: {
      role: 'VP of Engineering &middot; Engineering Manager &mdash; 2018 &ndash; 2021',
      title: 'Von 5 Engineers zu einer 40-köpfigen Organisation',
      lede: 'Homeapp ist eine Immobilienplattform, die Verkäufer mit Experten zusammenbringt: Wertgutachten, Werbe-Analytics, Daten zu verkauften Objekten.',
      story: [
        'Als VP of Engineering: das Team von 5 auf ~40 Personen skaliert, Produkt-Trios aus Design, Produkt und Engineering eingeführt und Scrum, Recruiting, KPI-/Motivationssysteme und Remote-Betrieb etabliert &mdash; in Partnerschaft mit dem CPO am Produktprozess.',
        'Die Unternehmensplattform entstand auf PHP-/Golang-Microservices, Kubernetes und CI/CD. Zuvor, als Engineering Manager: Docker, Continuous Delivery auf GKE und CI eingeführt.',
      ],
      metricLabel: 'skalierte Engineers',
      facts: 'Team: 15 Backend, 12 Frontend, 5 QA, 4 DevOps, 4 PMs. Stack: PHP/Golang, Kubernetes, JIRA, GitHub, Drone, Helm.',
    },
    balance: {
      role: 'KYC Lead Developer &mdash; 2017 &ndash; 2018',
      title: 'KYC für eine Cloud-Bank, Tests zehnmal schneller',
      lede: 'Balance Platform baut Cloud-Banking-Produkte &mdash; und KYC ist das Tor, durch das jeder Kunde geht.',
      story: ['Die KYC-Lieferung wurde geleitet, Scrum eingeführt und die CI auf Docker umgestellt: Testläufe wurden rund zehnmal schneller.'],
      metricLabel: 'schnellere Testläufe',
    },
    dsl: {
      role: 'Engineering Manager &mdash; 2015 &ndash; 2017',
      title: 'Architektur verantworten bei hohem Tempo',
      lede: 'Digital Society Laboratory betrieb ein Symfony-Projekt mit hohem Tempo.',
      story: ['Drei Engineers wurden geführt, die Architektur verantwortet.'],
      metricLabel: 'geführte Engineers',
    },
    bumble: {
      role: 'Engineering Manager &mdash; Großraum London, Vereinigtes Königreich &middot; 2014 &ndash; 2015',
      title: 'Releases über Zeitzonen hinweg',
      lede: 'Bumbles Produkte liefern kontinuierlich aus, aus Teams rund um die Welt.',
      story: ['In London wurde das internationale Release-Engineering-Team geführt und der End-to-End-Release-Zyklus gemeinsam mit Product automatisiert und verantwortet.'],
      metricLabel: 'verantworteter Release-Zyklus',
    },
    creara: {
      role: 'CTO &middot; Engineering Manager &mdash; 2010 &ndash; 2014',
      title: 'Fünf Teams, eine Plattform',
      lede: 'Creara Media betrieb fünf PHP-Teams &mdash; fünfzehn Entwickler &mdash;, die parallel lieferten.',
      story: ['Als CTO: das gesamte Engineering verantwortet &mdash; Git, Jira und TeamCity-CI/CD eingeführt, Technologieentscheidungen getroffen und gemeinsame Plattformkomponenten über die Teams hinweg aufgebaut. Zuvor, als Engineering Manager: Billing-Lieferung und Entwicklung der Mitarbeitenden geleitet.'],
      metricLabel: 'Entwickler in 5 Teams',
    },
  },

  ru: {
    vialytics: {
      role: 'Senior Software Engineer &mdash; Мюнхен &middot; удалённо &middot; 2026 &ndash; настоящее время',
      title: 'Сервисы, которые оценивают состояние дорог',
      lede: 'vialytics помогает городам управлять дорогами с помощью ИИ &mdash; и именно в сервисах оценки живёт «суждение» продукта.',
      story: ['Ответственность за функционально критичные сервисы оценки и их интеграцию с продуктами Data Science: путь, на котором результат модели превращается в оценку состояния дороги, по которой действует город.'],
      metric: 'Сейчас', metricLabel: 'функционально критичные сервисы оценки',
    },
    snappyloop: {
      role: 'Founder &amp; Engineering Lead &mdash; Мюнхен &middot; 2024 &ndash; 2026',
      title: 'AI-native модель разработки, проверенная продакшеном',
      lede: 'snappyloop &mdash; это AI-продукт для изучения языков: курсы, живая голосовая практика с репетитором и словарь с интервальным повторением, доставляемые через Telegram, его Mini App и веб. Один инженер построил и эксплуатировал его на AI-native модели разработки.',
      story: [
        'В этой модели специализированные агенты выполняли чётко очерченные задачи &mdash; изменение сервиса, миграцию, набор тестов &mdash; через GitHub Issues, где хранились сама задача, её контекст и история решений между сессиями. Продуктовые решения, архитектура, приоритеты, риски, ревью и приёмка оставались за человеком: агенты предлагали и реализовывали, и ничто не принималось без ревью на соответствие архитектуре.',
        'На этой модели держалось больше десятка сервисов на Go и PHP &mdash; курсы, голосовая практика, карточки, платежи, уведомления &mdash; на PostgreSQL, Redis и Kubernetes. Пока продукт рос с 200 до 5000 пользователей за три месяца, архитектура перешла от одного long-polling воркера к webhook-воркерам с горизонтальным масштабированием, с Redis для общего состояния сессий и глобальных лимитов и единым потолком запросов к AI-провайдерам для всех реплик. Платформа выдержала нагрузочное тестирование на 20 000 запросов в секунду.',
        'Безопасность на пути webhook была четырёхуровневой: фаервол, ingress, список разрешённых IP и проверка подписи запроса; внутренний API был доступен только через исходящий Cloudflare Tunnel. За продакшеном следили SLO-алерты по burn rate и Playwright-пробы из нескольких городов. Из LLM-прокси этой платформы вырос Keystone &mdash; open-source шлюз.',
      ],
      stats: [{ value: 'AI-native', label: 'агенты через GitHub Issues, решения за человеком' }, { label: 'пользователей за 3 месяца' }, { label: 'нагрузочный тест' }],
      links: {
        title: 'Доклады и проекты по этой работе',
        notes: [
          'SREday Munich 2026 &mdash; Telegram-боты в Kubernetes, webhooks, Redis и практики SRE',
          'Митап в Google, декабрь 2025 &mdash; библиотеки для пути AI-функций от прототипа к продакшену',
          'Open-source LLM-шлюз, выросший из этой платформы',
        ],
      },
    },
    keystone: {
      role: 'Автор и мейнтейнер &mdash; open source &middot; 2026 &ndash; настоящее время',
      title: 'Один шлюз для каждого вызова LLM',
      lede: 'Keystone (KTMS) &mdash; open-source LLM-шлюз для self-hosted развёртывания. Сервисы запрашивают уровень усилия, а не модель; Keystone хранит ключи провайдеров, выбирает цепочку моделей, переключается при сбоях и следит за лимитами запросов и расходов.',
      story: [
        'Он начинался как LLM-прокси внутри snappyloop и стал самостоятельным продуктом, построенным на той же AI-native модели разработки: один Go-бинарник с gRPC, OpenAI- и Anthropic-совместимыми API и MCP-шлюзом, около 7 MiB памяти в простое и меньше миллисекунды добавленной задержки.',
        'Эксплуатационные проблемы LLM в продакшене решаются в шлюзе, а не в каждом сервисе: жёсткие лимиты расходов на ключ, конечного пользователя и команду с атомарным резервированием перед каждым вызовом; circuit breaker на каждого провайдера и цепочки fallback; локальные inference-ноды на простаивающих Mac и GPU-машинах с fallback в облако; подписанные релизы с SBOM и SLSA provenance.',
        'Вокруг него: light-tokenmeter для отчётов об использовании, веб-консоль ktms-admin и плагин для Claude Code, чьи skills оценивают, разворачивают и интегрируют шлюз &mdash; с CI, который падает, если skill ссылается на команду, которой нет в релизе.',
      ],
      stats: [{ label: 'добавленная задержка' }, { label: 'памяти в простое' }, { label: 'open source' }],
      links: {
        title: 'Проект',
        notes: ['Исходный код, релизы и плагин для Claude Code', 'Документация и быстрый старт'],
      },
    },
    check24: {
      role: 'Engineering Manager &middot; Development Team Lead &mdash; Мюнхен &middot; 2022 &ndash; 2025',
      title: 'Модернизация бэкенда за шесть месяцев',
      lede: 'CHECK24 &mdash; крупнейший сравнительный портал Германии. Продукт работал на легаси-стеке и на bare metal.',
      story: [
        'Модернизация бэкенда &mdash; с Laminas на Doctrine за шесть месяцев &mdash; велась из роли Engineering Manager и получила внутреннюю награду за самый клиентоориентированный продукт. Параллельно прошла DevOps/SRE-трансформация: от Ansible на bare metal к Kubernetes, Helm и Bitbucket Pipelines, с тестовыми средами в один клик, observability и CI со статическим анализом и тестами.',
        'До этого, в роли Development Team Lead: ответственность за сервис отслеживания доставки с командой из четырёх бэкенд-инженеров, внедрён Scrum, стабилизирована легаси-система, качество поднято через код-ревью и тесты.',
      ],
      metric: '6 мес.', metricLabel: 'Laminas &rarr; Doctrine, с наградой',
      facts: 'Команда как Team Lead: 4 бэкенда, 2 PM.',
    },
    infourok: {
      role: 'Head of Development &mdash; 2021 &ndash; 2022',
      title: '3 новые команды за 2 месяца',
      lede: 'Инфоурок &mdash; одна из крупнейших образовательных платформ на своём рынке; IU.RU собирает её AI-инструменты в одном месте.',
      story: ['Три кросс-функциональные продуктовые команды собраны и выведены на поток из роли Head of Development &mdash; вместе с инженерными процессами, автоматизацией и стандартами архитектуры, по которым они поставляли.'],
      metricLabel: 'кросс-функциональные команды',
      facts: 'Команда: 12 бэкенд, 5 фронтенд, 2 PM, 2 дизайнера.',
    },
    homeapp: {
      role: 'VP of Engineering &middot; Engineering Manager &mdash; 2018 &ndash; 2021',
      title: 'От 5 инженеров до команды в 40 человек',
      lede: 'Homeapp &mdash; платформа недвижимости, которая связывает продавцов с экспертами: отчёты об оценке, аналитика рекламы, данные о проданных объектах.',
      story: [
        'В роли VP of Engineering: команда выросла с 5 до ~40 человек, введены продуктовые трио из дизайна, продукта и разработки, выстроены Scrum, найм, система KPI и мотивации и удалённые процессы &mdash; в партнёрстве с CPO над продуктовым процессом.',
        'Платформа компании построена на микросервисах PHP/Golang, Kubernetes и CI/CD. Ранее, в роли Engineering Manager: внедрены Docker, continuous delivery на GKE и CI.',
      ],
      metricLabel: 'рост команды',
      facts: 'Команда: 15 бэкенд, 12 фронтенд, 5 QA, 4 DevOps, 4 PM. Стек: PHP/Golang, Kubernetes, JIRA, GitHub, Drone, Helm.',
    },
    balance: {
      role: 'KYC Lead Developer &mdash; 2017 &ndash; 2018',
      title: 'KYC для облачного банка, тесты в десять раз быстрее',
      lede: 'Balance Platform делает облачные банковские продукты &mdash; а KYC это ворота, через которые проходит каждый клиент.',
      story: ['Поставка KYC была выстроена, внедрён Scrum, CI переведён на Docker: прогоны тестов стали примерно в десять раз быстрее.'],
      metricLabel: 'быстрее прогоны тестов',
    },
    dsl: {
      role: 'Engineering Manager &mdash; 2015 &ndash; 2017',
      title: 'Ответственность за архитектуру на высоком темпе',
      lede: 'Digital Society Laboratory вела Symfony-проект в высоком темпе.',
      story: ['Руководство тремя инженерами и ответственность за архитектуру.'],
      metricLabel: 'инженера в команде',
    },
    bumble: {
      role: 'Engineering Manager &mdash; Большой Лондон, Великобритания &middot; 2014 &ndash; 2015',
      title: 'Релизы через часовые пояса',
      lede: 'Продукты Bumble выпускаются непрерывно, командами по всему миру.',
      story: ['В Лондоне &mdash; руководство международной командой release engineering; полный цикл релиза автоматизирован и закреплён совместно с продуктом.'],
      metricLabel: 'полный цикл релиза',
    },
    creara: {
      role: 'CTO &middot; Engineering Manager &mdash; 2010 &ndash; 2014',
      title: 'Пять команд, одна платформа',
      lede: 'Creara Media вела пять PHP-команд &mdash; пятнадцать разработчиков, &mdash; поставлявших параллельно.',
      story: ['В роли CTO: ответственность за всю разработку &mdash; внедрены Git, Jira и CI/CD на TeamCity, приняты технологические решения, созданы общие компоненты платформы для всех команд. Ранее, в роли Engineering Manager: поставка биллинга и развитие людей.'],
      metricLabel: 'разработчиков в 5 командах',
    },
  },

  pl: {
    vialytics: {
      role: 'Senior Software Engineer &mdash; Monachium &middot; zdalnie &middot; 2026 &ndash; obecnie',
      title: 'Serwisy, które oceniają stan dróg',
      lede: 'vialytics pomaga miastom zarządzać drogami z pomocą AI &mdash; a w serwisach oceny mieszka osąd produktu.',
      story: ['Odpowiedzialność za krytyczne funkcjonalnie serwisy oceny i ich integrację z produktami Data Science: ścieżkę, na której wynik modelu staje się oceną stanu drogi, na podstawie której działa miasto.'],
      metric: 'Teraz', metricLabel: 'krytyczne funkcjonalnie serwisy oceny',
    },
    snappyloop: {
      role: 'Founder &amp; Engineering Lead &mdash; Monachium &middot; 2024 &ndash; 2026',
      title: 'Model dostarczania AI-native, sprawdzony na produkcji',
      lede: 'snappyloop to produkt AI do nauki języków &mdash; kursy, praktyka głosowa z tutorem na żywo i słownictwo w systemie powtórek rozłożonych w czasie, dostarczane przez Telegrama, jego Mini App i web. Jeden inżynier zbudował go i utrzymywał w modelu dostarczania AI-native.',
      story: [
        'W tym modelu wyspecjalizowani agenci wykonywali jasno określoną pracę &mdash; zmianę w serwisie, migrację, zestaw testów &mdash; przez GitHub Issues, które przechowywały zadanie, jego kontekst i ślad decyzji między sesjami. Decyzje produktowe, architektura, priorytety, ryzyko, review i odbiór pozostawały w rękach człowieka: agenci proponowali i implementowali, a nic nie zostawało przyjęte bez review pod kątem architektury.',
        'Ten model utrzymywał kilkanaście serwisów w Go i PHP &mdash; kursy, praktykę głosową, fiszki, płatności, powiadomienia &mdash; na PostgreSQL, Redisie i Kubernetesie. Gdy produkt rósł z 200 do 5000 użytkowników w trzy miesiące, architektura przeszła z pojedynczego workera long-polling na workery sterowane webhookami i skalowane poziomo, z Redisem dla współdzielonego stanu sesji i globalnych limitów oraz jednym pułapem zapytań do dostawców AI dla wszystkich replik. Platforma przeszła testy obciążeniowe na 20 000 żądań na sekundę.',
        'Bezpieczeństwo ścieżki webhooków miało cztery warstwy &mdash; firewall, ingress, lista dozwolonych IP i weryfikacja podpisu żądania &mdash; a wewnętrzne API było dostępne wyłącznie przez wychodzący Cloudflare Tunnel. Produkcji pilnowały alerty SLO burn-rate i sondy Playwright z wielu miast. Z proxy LLM tej platformy wyrósł Keystone, bramka open source.',
      ],
      stats: [{ value: 'AI-native', label: 'agenci przez GitHub Issues, decyzje po stronie człowieka' }, { label: 'użytkowników w 3 miesiące' }, { label: 'test obciążeniowy' }],
      links: {
        title: 'Prelekcje i projekty z tej pracy',
        notes: [
          'SREday Munich 2026 &mdash; boty Telegrama na Kubernetesie, webhooki, Redis i praktyki SRE',
          'Meetup w Google, grudzień 2025 &mdash; biblioteki w drodze funkcji AI od prototypu do produkcji',
          'Bramka LLM open source, która wyrosła z tej platformy',
        ],
      },
    },
    keystone: {
      role: 'Autor i maintainer &mdash; open source &middot; 2026 &ndash; obecnie',
      title: 'Jedna bramka dla każdego wywołania LLM',
      lede: 'Keystone (KTMS) to bramka LLM open source do samodzielnego hostowania. Serwisy proszą o poziom wysiłku zamiast o model; Keystone trzyma klucze dostawców, wybiera łańcuch modeli, przełącza się przy awariach i pilnuje limitów zapytań i kosztów.',
      story: [
        'Zaczął jako proxy LLM w snappyloop i stał się samodzielnym produktem, zbudowanym w tym samym modelu dostarczania AI-native: jeden plik binarny Go z gRPC, API zgodnym z OpenAI i Anthropic oraz bramką MCP, około 7 MiB pamięci w spoczynku i poniżej milisekundy dodatkowego opóźnienia.',
        'Problemy eksploatacyjne LLM na produkcji rozwiązuje bramka, a nie każdy serwis osobno: twarde limity kosztów na klucz, użytkownika końcowego i zespół, rezerwowane atomowo przed każdym wywołaniem; circuit breakery dla każdego dostawcy i łańcuchy fallback; lokalne węzły inferencji na nieużywanych Macach i maszynach z GPU z fallbackiem do chmury; podpisane wydania z SBOM i SLSA provenance.',
        'Wokół niego: light-tokenmeter do raportów użycia, konsola webowa ktms-admin i wtyczka do Claude Code, której skills oceniają, wdrażają i integrują bramkę &mdash; z CI, które pada, gdy skill wymienia polecenie nieistniejące w wydaniu.',
      ],
      stats: [{ label: 'dodatkowe opóźnienie' }, { label: 'pamięci w spoczynku' }, { label: 'open source' }],
      links: {
        title: 'Projekt',
        notes: ['Kod źródłowy, wydania i wtyczka do Claude Code', 'Dokumentacja i szybki start'],
      },
    },
    check24: {
      role: 'Engineering Manager &middot; Development Team Lead &mdash; Monachium &middot; 2022 &ndash; 2025',
      title: 'Modernizacja backendu w sześć miesięcy',
      lede: 'CHECK24 to największy portal porównawczy w Niemczech. Produkt działał na starym stosie i na bare metal.',
      story: [
        'Modernizacja backendu &mdash; z Laminas na Doctrine w sześć miesięcy &mdash; była prowadzona z roli Engineering Managera i zdobyła wewnętrzną nagrodę za produkt najbardziej zorientowany na klienta. Równolegle przeszła transformacja DevOps/SRE: z Ansible na bare metal do Kubernetesa, Helma i Bitbucket Pipelines, ze środowiskami testowymi na jedno kliknięcie, observability i CI ze statyczną analizą i testami.',
        'Wcześniej, z roli Development Team Leada: odpowiedzialność za serwis śledzenia dostaw z czteroosobowym zespołem backendu, wprowadzony Scrum, ustabilizowany stary system i jakość podniesiona przez code review i testy.',
      ],
      metric: '6 mies.', metricLabel: 'Laminas &rarr; Doctrine, nagrodzone',
      facts: 'Zespół jako Team Lead: 4 backend, 2 PM.',
    },
    infourok: {
      role: 'Head of Development &mdash; 2021 &ndash; 2022',
      title: '3 nowe zespoły w 2 miesiące',
      lede: 'Infourok to jedna z największych platform edukacyjnych na swoim rynku; IU.RU zbiera jej narzędzia AI w jednym miejscu.',
      story: ['Trzy wielofunkcyjne zespoły produktowe zostały zbudowane i poprowadzone z roli Head of Development &mdash; wraz z procesami inżynierskimi, automatyzacją i standardami architektury, według których dowoziły.'],
      metricLabel: 'wielofunkcyjne zespoły produktowe',
      facts: 'Zespół: 12 backend, 5 frontend, 2 PM, 2 projektantów.',
    },
    homeapp: {
      role: 'VP of Engineering &middot; Engineering Manager &mdash; 2018 &ndash; 2021',
      title: 'Od 5 inżynierów do 40-osobowej organizacji',
      lede: 'Homeapp to platforma nieruchomości łącząca sprzedających z ekspertami: raporty wyceny, analityka reklam, dane o sprzedanych nieruchomościach.',
      story: [
        'Z roli VP of Engineering: zespół rozwinięty z 5 do ~40 osób, wprowadzone trio produktowe z designu, produktu i inżynierii oraz ustanowione Scrum, rekrutacja, systemy KPI i motywacji oraz praca zdalna &mdash; we współpracy z CPO nad procesem produktowym.',
        'Platforma firmy powstała na mikroserwisach PHP/Golang, Kubernetesie i CI/CD. Wcześniej, z roli Engineering Managera: wprowadzone Docker, continuous delivery na GKE i CI.',
      ],
      metricLabel: 'wzrost zespołu',
      facts: 'Zespół: 15 backend, 12 frontend, 5 QA, 4 DevOps, 4 PM. Stos: PHP/Golang, Kubernetes, JIRA, GitHub, Drone, Helm.',
    },
    balance: {
      role: 'KYC Lead Developer &mdash; 2017 &ndash; 2018',
      title: 'KYC dla banku w chmurze, testy dziesięć razy szybsze',
      lede: 'Balance Platform buduje produkty bankowe w chmurze &mdash; a KYC to brama, przez którą przechodzi każdy klient.',
      story: ['Dostarczanie KYC zostało poprowadzone, wprowadzony Scrum, a CI przeniesione na Dockera: przebiegi testów stały się około dziesięć razy szybsze.'],
      metricLabel: 'szybsze przebiegi testów',
    },
    dsl: {
      role: 'Engineering Manager &mdash; 2015 &ndash; 2017',
      title: 'Odpowiedzialność za architekturę w szybkim tempie',
      lede: 'Digital Society Laboratory prowadziło projekt Symfony w szybkim tempie.',
      story: ['Prowadzenie trzech inżynierów i odpowiedzialność za architekturę.'],
      metricLabel: 'prowadzeni inżynierowie',
    },
    bumble: {
      role: 'Engineering Manager &mdash; Wielki Londyn, Wielka Brytania &middot; 2014 &ndash; 2015',
      title: 'Wydania ponad strefami czasowymi',
      lede: 'Produkty Bumble są wydawane w sposób ciągły, przez zespoły z całego świata.',
      story: ['W Londynie prowadzony był międzynarodowy zespół release engineering, a pełny cykl wydań zautomatyzowany i objęty odpowiedzialnością wspólnie z produktem.'],
      metricLabel: 'pełny cykl wydań',
    },
    creara: {
      role: 'CTO &middot; Engineering Manager &mdash; 2010 &ndash; 2014',
      title: 'Pięć zespołów, jedna platforma',
      lede: 'Creara Media prowadziła pięć zespołów PHP &mdash; piętnastu programistów &mdash; dowożących równolegle.',
      story: ['Z roli CTO: odpowiedzialność za całą inżynierię &mdash; wprowadzone Git, Jira i CI/CD na TeamCity, decyzje technologiczne oraz wspólne komponenty platformy dla zespołów. Wcześniej, z roli Engineering Managera: prowadzenie dostarczania billingu i rozwoju ludzi.'],
      metricLabel: 'programistów w 5 zespołach',
    },
  },
};

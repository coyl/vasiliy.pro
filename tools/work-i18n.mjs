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
    ivan: 'Frontend-Entwickler &middot; berichtete an Vasil',
    leila: 'QA &middot; im selben Team gearbeitet',
  },
  ru: {
    michael: 'Bereichsleiter &middot; непосредственный руководитель',
    gergely: 'Team Lead &middot; работал в команде Василия',
    belma: 'Team Lead Software Developer &middot; смежная команда',
    andrei: 'Frontend Engineer &middot; работал в команде Василия',
    tariq: 'Software Engineer &middot; работал в команде Василия',
    ivan: 'Frontend-разработчик &middot; работал в команде Василия',
    leila: 'QA &middot; работала в одной команде',
  },
  pl: {
    michael: 'Bereichsleiter &middot; bezpośredni przełożony',
    gergely: 'Team Lead &middot; pracował w zespole Vasila',
    belma: 'Team Lead Software Developer &middot; współpraca między zespołami',
    andrei: 'Frontend Engineer &middot; pracował w zespole Vasila',
    tariq: 'Software Engineer &middot; pracował w zespole Vasila',
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
      story: ['Ich verantworte die funktionskritischen Grading-Services und ihre Integration mit den Data-Science-Produkten: den Weg, auf dem Modellergebnisse zu Straßenzustandsnoten werden, nach denen Kommunen handeln.'],
      metric: 'Jetzt', metricLabel: 'funktionskritische Grading-Services',
    },
    snappyloop: {
      role: 'Staff Engineer &mdash; München &middot; 2025 &ndash; heute',
      title: 'Von 200 auf 5.000 Lernende in drei Monaten',
      lede: 'snappyloop ist ein KI-Sprachlernprodukt &mdash; Kurse, Sprechpraxis mit einem Tutor in Echtzeit und Vokabeln nach dem Spaced-Repetition-Prinzip, ausgeliefert über Telegram und seine Mini App.',
      story: [
        'Ich habe die Plattform gebaut: Infrastruktur und Sicherheit für das Multi-Agenten-System dahinter, lasttestet mit 20.000 Anfragen pro Sekunde. Als das Produkt in drei Monaten von 200 auf 5.000 Nutzer wuchs, wanderte die Architektur von einem einzelnen Long-Polling-Worker zu webhook-getriebenen, horizontal skalierten Bot-Workern &mdash; mit Redis für gemeinsamen Session-State und globale Rate Limits und einem zentralen Controller, der für die KI-Anbieter eine Obergrenze über alle Replicas hält.',
        'Die Sicherheit auf dem Webhook-Pfad ist vierschichtig &mdash; Firewall, Ingress, IP-Allowlist und Prüfung der Request-Signatur &mdash;, die interne API ist nur über einen ausgehenden Cloudflare Tunnel erreichbar. SLO-Burn-Rate-Alarme auf Webhook-Bestätigungslatenz und Antwort-Erfolgsrate sowie Playwright-Proben aus mehreren Städten überwachen den Betrieb.',
      ],
      stats: [{ label: 'Nutzer in 3 Monaten' }, { label: 'im Lasttest' }],
      links: {
        title: 'Vorträge aus dieser Arbeit',
        notes: [
          'Telegram-Bots auf Kubernetes &mdash; Webhooks, Redis und SRE-Praktiken',
          'Bibliotheken für Python, Node.js und Golang für den Weg vom Prototyp in die Produktion',
        ],
      },
    },
    check24: {
      role: 'Engineering Manager &middot; Development Team Lead &mdash; München &middot; 2022 &ndash; 2025',
      title: 'Backend-Modernisierung in sechs Monaten',
      lede: 'CHECK24 ist Deutschlands größtes Vergleichsportal. Das Produkt, zu dem ich kam, lief auf einem Legacy-Stack und auf Bare Metal.',
      story: [
        'Als Engineering Manager habe ich die Backend-Modernisierung geleitet &mdash; Laminas zu Doctrine in sechs Monaten &mdash;, ausgezeichnet mit dem internen Preis für das kundenorientierteste Produkt. Parallel trieben wir eine DevOps/SRE-Transformation voran: von Ansible auf Bare Metal zu Kubernetes, Helm und Bitbucket Pipelines, mit Testumgebungen auf Knopfdruck, Observability und CI mit statischer Analyse und Tests.',
        'Davor verantwortete ich als Development Team Lead den Liefertracking-Service mit einem vierköpfigen Backend-Team: Scrum eingeführt, das Legacy-System stabilisiert und die Qualität durch Code-Reviews und Tests gehoben.',
      ],
      metric: '6 Mon.', metricLabel: 'Laminas &rarr; Doctrine, preisgekrönt',
      facts: 'Team als Team Lead: 4 Backend, 2 PMs.',
    },
    infourok: {
      role: 'Head of Development, SRM &mdash; 2021 &ndash; 2022',
      title: '3 neue Teams in 2 Monaten',
      lede: 'Infourok ist eine der größten Bildungsplattformen in seinem Markt; IU.RU bündelt die KI-Werkzeuge an einem Ort.',
      story: ['Als Head of Development habe ich drei crossfunktionale Produktteams aufgebaut und geführt &mdash; und die Engineering-Workflows, die Automatisierung und die Architekturstandards gesetzt, nach denen sie lieferten.'],
      metricLabel: 'crossfunktionale Produktteams',
      facts: 'Team: 12 Backend, 5 Frontend, 2 PMs, 2 Designer.',
    },
    homeapp: {
      role: 'VP of Engineering &middot; Engineering Manager &mdash; 2018 &ndash; 2021',
      title: 'Von 5 Engineers zu einer 40-köpfigen Organisation',
      lede: 'Homeapp ist eine Immobilienplattform, die Verkäufer mit Experten zusammenbringt: Wertgutachten, Werbe-Analytics, Daten zu verkauften Objekten.',
      story: [
        'Als VP of Engineering habe ich das Team von 5 auf ~40 Personen skaliert, Produkt-Trios aus Design, Produkt und Engineering eingeführt und Scrum, Recruiting, KPI-/Motivationssysteme und Remote-Betrieb etabliert &mdash; gemeinsam mit dem CTPO am Produktprozess.',
        'Wir bauten die Unternehmensplattform auf PHP-/Golang-Microservices, Kubernetes und CI/CD. Zuvor führte ich als Engineering Manager Docker, Continuous Delivery auf GKE und CI ein.',
      ],
      metricLabel: 'skalierte Engineers',
      facts: 'Team: 15 Backend, 12 Frontend, 5 QA, 4 DevOps, 4 PMs. Stack: PHP/Golang, Kubernetes, JIRA, GitHub, Drone, Helm.',
    },
    balance: {
      role: 'KYC Lead Developer &mdash; 2017 &ndash; 2018',
      title: 'KYC für eine Cloud-Bank, Tests zehnmal schneller',
      lede: 'Balance Platform baut Cloud-Banking-Produkte &mdash; und KYC ist das Tor, durch das jeder Kunde geht.',
      story: ['Ich habe die KYC-Lieferung geleitet, Scrum eingeführt und die CI auf Docker umgestellt: Testläufe wurden rund zehnmal schneller.'],
      metricLabel: 'schnellere Testläufe',
    },
    dsl: {
      role: 'Symfony Team Lead &mdash; 2015 &ndash; 2017',
      title: 'Architektur verantworten bei hohem Tempo',
      lede: 'Digital Society Laboratory betrieb ein Symfony-Projekt mit hohem Tempo.',
      story: ['Ich habe drei Engineers geführt und die Architektur verantwortet.'],
      metricLabel: 'geführte Engineers',
    },
    bumble: {
      role: 'Engineering Manager &mdash; Großraum London, Vereinigtes Königreich &middot; 2014 &ndash; 2015',
      title: 'Releases über Zeitzonen hinweg',
      lede: 'Bumbles Produkte liefern kontinuierlich aus, aus Teams rund um die Welt.',
      story: ['In London habe ich das internationale Release-Engineering-Team geführt und den End-to-End-Release-Zyklus gemeinsam mit Product automatisiert und verantwortet.'],
      metricLabel: 'verantworteter Release-Zyklus',
    },
    creara: {
      role: 'Head of Engineering &middot; Engineering Manager &mdash; 2010 &ndash; 2014',
      title: 'Fünf Teams, eine Plattform',
      lede: 'Creara Media betrieb fünf PHP-Teams &mdash; fünfzehn Entwickler &mdash;, die parallel lieferten.',
      story: ['Als Head of Engineering habe ich Git, Jira und TeamCity-CI/CD eingeführt und gemeinsame Plattformkomponenten über die Teams hinweg etabliert. Zuvor leitete ich als Engineering Manager die Billing-Lieferung und die Entwicklung der Mitarbeitenden.'],
      metricLabel: 'Entwickler in 5 Teams',
    },
  },

  ru: {
    vialytics: {
      role: 'Senior Software Engineer &mdash; Мюнхен &middot; удалённо &middot; 2026 &ndash; настоящее время',
      title: 'Сервисы, которые оценивают состояние дорог',
      lede: 'vialytics помогает городам управлять дорогами с помощью ИИ &mdash; и именно в сервисах оценки живёт «суждение» продукта.',
      story: ['Я отвечаю за функционально критичные сервисы оценки и их интеграцию с продуктами Data Science: путь, на котором результат модели превращается в оценку состояния дороги, по которой действует город.'],
      metric: 'Сейчас', metricLabel: 'функционально критичные сервисы оценки',
    },
    snappyloop: {
      role: 'Staff Engineer &mdash; Мюнхен &middot; 2025 &ndash; настоящее время',
      title: 'От 200 до 5000 учеников за три месяца',
      lede: 'snappyloop &mdash; это AI-продукт для изучения языков: курсы, живая голосовая практика с репетитором и словарь с интервальным повторением, доставляемые через Telegram и его Mini App.',
      story: [
        'Я построил платформу: инфраструктуру и безопасность мультиагентной системы, выдержавшую нагрузочное тестирование на 20 000 запросов в секунду. Пока продукт рос с 200 до 5000 пользователей за три месяца, архитектура перешла от одного long-polling воркера к webhook-воркерам с горизонтальным масштабированием &mdash; с Redis для общего состояния сессий и глобальных лимитов и центральным контроллером, который держит единый потолок запросов к AI-провайдерам для всех реплик.',
        'Безопасность на пути webhook &mdash; четыре уровня: фаервол, ingress, список разрешённых IP и проверка подписи запроса; внутренний API доступен только через исходящий Cloudflare Tunnel. За продакшеном следят SLO-алерты по burn rate на задержку подтверждения webhook и долю успешных ответов, а также Playwright-пробы из нескольких городов.',
      ],
      stats: [{ label: 'пользователей за 3 месяца' }, { label: 'нагрузочный тест' }],
      links: {
        title: 'Доклады по этой работе',
        notes: [
          'Telegram-боты в Kubernetes &mdash; webhooks, Redis и практики SRE',
          'Библиотеки Python, Node.js и Golang для пути от прототипа к продакшену',
        ],
      },
    },
    check24: {
      role: 'Engineering Manager &middot; Development Team Lead &mdash; Мюнхен &middot; 2022 &ndash; 2025',
      title: 'Модернизация бэкенда за шесть месяцев',
      lede: 'CHECK24 &mdash; крупнейший сравнительный портал Германии. Продукт, в который я пришёл, работал на легаси-стеке и на bare metal.',
      story: [
        'Как Engineering Manager я вёл модернизацию бэкенда &mdash; с Laminas на Doctrine за шесть месяцев, &mdash; которая получила внутреннюю награду за самый клиентоориентированный продукт. Параллельно мы провели DevOps/SRE-трансформацию: от Ansible на bare metal к Kubernetes, Helm и Bitbucket Pipelines, с тестовыми средами в один клик, observability и CI со статическим анализом и тестами.',
        'До этого как Development Team Lead я отвечал за сервис отслеживания доставки с командой из четырёх бэкенд-инженеров: внедрил Scrum, стабилизировал легаси-систему и поднял качество через код-ревью и тесты.',
      ],
      metric: '6 мес.', metricLabel: 'Laminas &rarr; Doctrine, с наградой',
      facts: 'Команда как Team Lead: 4 бэкенда, 2 PM.',
    },
    infourok: {
      role: 'Head of Development, SRM &mdash; 2021 &ndash; 2022',
      title: '3 новые команды за 2 месяца',
      lede: 'Инфоурок &mdash; одна из крупнейших образовательных платформ на своём рынке; IU.RU собирает её AI-инструменты в одном месте.',
      story: ['Как Head of Development я собрал и вёл три кросс-функциональные продуктовые команды &mdash; и задал инженерные процессы, автоматизацию и стандарты архитектуры, по которым они поставляли.'],
      metricLabel: 'кросс-функциональные команды',
      facts: 'Команда: 12 бэкенд, 5 фронтенд, 2 PM, 2 дизайнера.',
    },
    homeapp: {
      role: 'VP of Engineering &middot; Engineering Manager &mdash; 2018 &ndash; 2021',
      title: 'От 5 инженеров до команды в 40 человек',
      lede: 'Homeapp &mdash; платформа недвижимости, которая связывает продавцов с экспертами: отчёты об оценке, аналитика рекламы, данные о проданных объектах.',
      story: [
        'Как VP of Engineering я вырастил команду с 5 до ~40 человек, ввёл продуктовые трио из дизайна, продукта и разработки и выстроил Scrum, найм, систему KPI и мотивации и удалённые процессы &mdash; вместе с CTPO над продуктовым процессом.',
        'Мы построили платформу компании на микросервисах PHP/Golang, Kubernetes и CI/CD. Ранее, как Engineering Manager, я внедрил Docker, continuous delivery на GKE и CI.',
      ],
      metricLabel: 'рост команды',
      facts: 'Команда: 15 бэкенд, 12 фронтенд, 5 QA, 4 DevOps, 4 PM. Стек: PHP/Golang, Kubernetes, JIRA, GitHub, Drone, Helm.',
    },
    balance: {
      role: 'KYC Lead Developer &mdash; 2017 &ndash; 2018',
      title: 'KYC для облачного банка, тесты в десять раз быстрее',
      lede: 'Balance Platform делает облачные банковские продукты &mdash; а KYC это ворота, через которые проходит каждый клиент.',
      story: ['Я вёл поставку KYC, внедрил Scrum и перевёл CI на Docker: прогоны тестов стали примерно в десять раз быстрее.'],
      metricLabel: 'быстрее прогоны тестов',
    },
    dsl: {
      role: 'Symfony Team Lead &mdash; 2015 &ndash; 2017',
      title: 'Ответственность за архитектуру на высоком темпе',
      lede: 'Digital Society Laboratory вела Symfony-проект в высоком темпе.',
      story: ['Я руководил тремя инженерами и отвечал за архитектуру.'],
      metricLabel: 'инженера в команде',
    },
    bumble: {
      role: 'Engineering Manager &mdash; Большой Лондон, Великобритания &middot; 2014 &ndash; 2015',
      title: 'Релизы через часовые пояса',
      lede: 'Продукты Bumble выпускаются непрерывно, командами по всему миру.',
      story: ['В Лондоне я вёл международную команду release engineering и вместе с продуктом автоматизировал и отвечал за полный цикл релиза.'],
      metricLabel: 'полный цикл релиза',
    },
    creara: {
      role: 'Head of Engineering &middot; Engineering Manager &mdash; 2010 &ndash; 2014',
      title: 'Пять команд, одна платформа',
      lede: 'Creara Media вела пять PHP-команд &mdash; пятнадцать разработчиков, &mdash; поставлявших параллельно.',
      story: ['Как Head of Engineering я внедрил Git, Jira и CI/CD на TeamCity и общие компоненты платформы для всех команд. Ранее, как Engineering Manager, я вёл поставку биллинга и развитие людей.'],
      metricLabel: 'разработчиков в 5 командах',
    },
  },

  pl: {
    vialytics: {
      role: 'Senior Software Engineer &mdash; Monachium &middot; zdalnie &middot; 2026 &ndash; obecnie',
      title: 'Serwisy, które oceniają stan dróg',
      lede: 'vialytics pomaga miastom zarządzać drogami z pomocą AI &mdash; a w serwisach oceny mieszka osąd produktu.',
      story: ['Odpowiadam za krytyczne funkcjonalnie serwisy oceny i ich integrację z produktami Data Science: ścieżkę, na której wynik modelu staje się oceną stanu drogi, na podstawie której działa miasto.'],
      metric: 'Teraz', metricLabel: 'krytyczne funkcjonalnie serwisy oceny',
    },
    snappyloop: {
      role: 'Staff Engineer &mdash; Monachium &middot; 2025 &ndash; obecnie',
      title: 'Od 200 do 5000 uczących się w trzy miesiące',
      lede: 'snappyloop to produkt AI do nauki języków &mdash; kursy, praktyka głosowa z tutorem na żywo i słownictwo w systemie powtórek rozłożonych w czasie, dostarczane przez Telegrama i jego Mini App.',
      story: [
        'Zbudowałem platformę: infrastrukturę i bezpieczeństwo stojącego za nią systemu wieloagentowego, przetestowaną obciążeniowo na 20 000 żądań na sekundę. Gdy produkt rósł z 200 do 5000 użytkowników w trzy miesiące, architektura przeszła z pojedynczego workera long-polling na workery sterowane webhookami i skalowane poziomo &mdash; z Redisem dla współdzielonego stanu sesji i globalnych limitów oraz centralnym kontrolerem trzymającym jeden pułap zapytań do dostawców AI dla wszystkich replik.',
        'Bezpieczeństwo ścieżki webhooków ma cztery warstwy &mdash; firewall, ingress, lista dozwolonych IP i weryfikacja podpisu żądania &mdash; a wewnętrzne API jest dostępne wyłącznie przez wychodzący Cloudflare Tunnel. Produkcji pilnują alerty SLO burn-rate na opóźnienie potwierdzenia webhooka i skuteczność odpowiedzi oraz sondy Playwright z wielu miast.',
      ],
      stats: [{ label: 'użytkowników w 3 miesiące' }, { label: 'test obciążeniowy' }],
      links: {
        title: 'Prelekcje z tej pracy',
        notes: [
          'Boty Telegrama na Kubernetesie &mdash; webhooki, Redis i praktyki SRE',
          'Biblioteki Pythona, Node.js i Golanga w drodze od prototypu do produkcji',
        ],
      },
    },
    check24: {
      role: 'Engineering Manager &middot; Development Team Lead &mdash; Monachium &middot; 2022 &ndash; 2025',
      title: 'Modernizacja backendu w sześć miesięcy',
      lede: 'CHECK24 to największy portal porównawczy w Niemczech. Produkt, do którego dołączyłem, działał na starym stosie i na bare metal.',
      story: [
        'Jako Engineering Manager prowadziłem modernizację backendu &mdash; z Laminas na Doctrine w sześć miesięcy &mdash; nagrodzoną wewnętrzną nagrodą za produkt najbardziej zorientowany na klienta. Równolegle przeprowadziliśmy transformację DevOps/SRE: z Ansible na bare metal do Kubernetesa, Helma i Bitbucket Pipelines, ze środowiskami testowymi na jedno kliknięcie, observability i CI ze statyczną analizą i testami.',
        'Wcześniej jako Development Team Lead odpowiadałem za serwis śledzenia dostaw z czteroosobowym zespołem backendu: wprowadziłem Scrum, ustabilizowałem stary system i podniosłem jakość przez code review i testy.',
      ],
      metric: '6 mies.', metricLabel: 'Laminas &rarr; Doctrine, nagrodzone',
      facts: 'Zespół jako Team Lead: 4 backend, 2 PM.',
    },
    infourok: {
      role: 'Head of Development, SRM &mdash; 2021 &ndash; 2022',
      title: '3 nowe zespoły w 2 miesiące',
      lede: 'Infourok to jedna z największych platform edukacyjnych na swoim rynku; IU.RU zbiera jej narzędzia AI w jednym miejscu.',
      story: ['Jako Head of Development zbudowałem i prowadziłem trzy wielofunkcyjne zespoły produktowe &mdash; i ustaliłem procesy inżynierskie, automatyzację oraz standardy architektury, według których dowoziły.'],
      metricLabel: 'wielofunkcyjne zespoły produktowe',
      facts: 'Zespół: 12 backend, 5 frontend, 2 PM, 2 projektantów.',
    },
    homeapp: {
      role: 'VP of Engineering &middot; Engineering Manager &mdash; 2018 &ndash; 2021',
      title: 'Od 5 inżynierów do 40-osobowej organizacji',
      lede: 'Homeapp to platforma nieruchomości łącząca sprzedających z ekspertami: raporty wyceny, analityka reklam, dane o sprzedanych nieruchomościach.',
      story: [
        'Jako VP of Engineering rozwinąłem zespół z 5 do ~40 osób, wprowadziłem trio produktowe z designu, produktu i inżynierii oraz ustanowiłem Scrum, rekrutację, systemy KPI i motywacji oraz pracę zdalną &mdash; wspólnie z CTPO nad procesem produktowym.',
        'Zbudowaliśmy platformę firmy na mikroserwisach PHP/Golang, Kubernetesie i CI/CD. Wcześniej, jako Engineering Manager, wprowadziłem Dockera, continuous delivery na GKE i CI.',
      ],
      metricLabel: 'wzrost zespołu',
      facts: 'Zespół: 15 backend, 12 frontend, 5 QA, 4 DevOps, 4 PM. Stos: PHP/Golang, Kubernetes, JIRA, GitHub, Drone, Helm.',
    },
    balance: {
      role: 'KYC Lead Developer &mdash; 2017 &ndash; 2018',
      title: 'KYC dla banku w chmurze, testy dziesięć razy szybsze',
      lede: 'Balance Platform buduje produkty bankowe w chmurze &mdash; a KYC to brama, przez którą przechodzi każdy klient.',
      story: ['Prowadziłem dostarczanie KYC, wprowadziłem Scrum i przeniosłem CI na Dockera: przebiegi testów stały się około dziesięć razy szybsze.'],
      metricLabel: 'szybsze przebiegi testów',
    },
    dsl: {
      role: 'Symfony Team Lead &mdash; 2015 &ndash; 2017',
      title: 'Odpowiedzialność za architekturę w szybkim tempie',
      lede: 'Digital Society Laboratory prowadziło projekt Symfony w szybkim tempie.',
      story: ['Prowadziłem trzech inżynierów i odpowiadałem za architekturę.'],
      metricLabel: 'prowadzeni inżynierowie',
    },
    bumble: {
      role: 'Engineering Manager &mdash; Wielki Londyn, Wielka Brytania &middot; 2014 &ndash; 2015',
      title: 'Wydania ponad strefami czasowymi',
      lede: 'Produkty Bumble są wydawane w sposób ciągły, przez zespoły z całego świata.',
      story: ['W Londynie prowadziłem międzynarodowy zespół release engineering i wraz z produktem zautomatyzowałem oraz odpowiadałem za pełny cykl wydań.'],
      metricLabel: 'pełny cykl wydań',
    },
    creara: {
      role: 'Head of Engineering &middot; Engineering Manager &mdash; 2010 &ndash; 2014',
      title: 'Pięć zespołów, jedna platforma',
      lede: 'Creara Media prowadziła pięć zespołów PHP &mdash; piętnastu programistów &mdash; dowożących równolegle.',
      story: ['Jako Head of Engineering wprowadziłem Git, Jirę i CI/CD na TeamCity oraz wspólne komponenty platformy dla zespołów. Wcześniej, jako Engineering Manager, prowadziłem dostarczanie billingu i rozwój ludzi.'],
      metricLabel: 'programistów w 5 zespołach',
    },
  },
};

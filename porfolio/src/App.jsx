import { useEffect, useState } from 'react'
import './App.css'
import profileImage from './assets/matias-profile.png'

const techMarks = {
  React: 'R',
  'Next.js': 'N',
  TypeScript: 'TS',
  JavaScript: 'JS',
  HTML: 'H',
  CSS: 'C',
  'Tailwind CSS': 'TW',
  'Node.js': 'Nd',
  Express: 'Ex',
  Python: 'Py',
  Java: 'Jv',
  'REST APIs': 'API',
  'Automation workflows': 'WF',
  MySQL: 'SQL',
  Git: 'Gi',
  GitHub: 'GH',
  Docker: 'DK',
  Linux: 'Li',
  Capacitor: 'Cp',
  Netlify: 'Ne',
}

const translations = {
  es: {
    lang: 'es',
    title: 'Matias Garcia Corral | Portfolio',
    brand: 'Matias Garcia Corral',
    navigation: [
      { label: 'Sobre mi', href: '#about' },
      { label: 'Proyectos', href: '#projects' },
      { label: 'Experiencia', href: '#experience' },
      { label: 'Stack', href: '#stack' },
      { label: 'Contacto', href: '#contact' },
    ],
    languageLabel: 'Idioma',
    languages: {
      es: 'ES',
      en: 'EN',
    },
    highlights: [
      'Graduado en Ingenieria de Software',
      'Co-founder en Intelligex Automations',
      'Full Stack developer con foco en IA',
    ],
    hero: {
      eyebrow: 'Full Stack Developer / Automatizacion con IA',
      title: 'Software y automatizacion pensados para avanzar mas rapido.',
      text:
        'Construyo productos SaaS, flujos operativos y sistemas utiles desde una ingenieria practica y orientada a producto.',
      primaryCta: 'Contactar',
      secondaryCta: 'Ver GitHub',
      highlightsLabel: 'Aspectos clave',
    },
    heroCard: {
      label: 'Ahora mismo',
      title: 'Automatizacion util con una capa de producto clara',
      text:
        'Trabajo entre producto, UX y automatizacion para negocios que necesitan sistemas de comunicacion mas inteligentes.',
      stats: [
        { label: 'Linea principal', value: 'Full Stack SaaS' },
        { label: 'Especialidad', value: 'Automatizacion con IA' },
        { label: 'Base', value: 'Segovia, Espana' },
      ],
    },
    pillarsLabel: 'Resumen',
    pillars: [
      {
        eyebrow: 'Perfil',
        title: 'Ingenieria con foco en producto',
        text:
          'Trabajo entre producto, automatizacion y entrega de software con una mirada muy practica.',
      },
      {
        eyebrow: 'Foco actual',
        title: 'IA aplicada a negocio real',
        text:
          'Voice agents, WhatsApp automation y SaaS para reducir trabajo manual repetitivo.',
      },
      {
        eyebrow: 'Ubicacion',
        title: 'Segovia, remoto y colaboracion asincrona',
        text:
          'Me interesa construir con ritmo, claridad y soluciones listas para pasar a produccion.',
      },
    ],
    about: {
      eyebrow: 'Sobre mi',
      title: 'Software que se gana su sitio en flujos reales',
      paragraphs: [
        'Empece a programar con 14 años y sigo aprendiendo igual: construir, probar y mejorar.',
        'Combino ingenieria del software, desarrollo web y automatizacion para unir interfaces limpias con backend util.',
      ],
      notes: [
        { label: 'Aprendizaje', value: 'Construir, validar, iterar' },
        { label: 'Enfoque', value: 'Producto, backend y automatizacion' },
        { label: 'Base', value: 'Segovia, trabajo remoto' },
      ],
      quote: '"La mejor forma de aprender es construir algo que tenga que funcionar fuera del sandbox."',
    },
    projects: {
      eyebrow: 'Proyectos',
      title: 'Proyectos en marcha',
      visit: 'Visitar',
      items: [
        {
          name: 'Stylofy',
          link: 'https://stylofy.es',
          status: 'Live',
          description: 'Gestor de citas con IA para peluquerias que atiende llamadas y WhatsApp 24/7.',
          tags: ['Asistente IA', 'Operaciones', 'Atencion al cliente'],
        },
        {
          name: 'SerpEye',
          link: 'https://serpeye.intelligex.es/inicio',
          status: 'Building',
          description: 'Plataforma B2B para encontrar negocios por sector, ciudad y pais.',
          tags: ['Datos B2B', 'Lead generation', 'Automatizacion'],
        },
        {
          name: 'Intelligex Automations',
          link: 'https://intelligex.es',
          status: 'Live',
          description: 'Estudio de automatizacion centrado en IA conversacional y software a medida.',
          tags: ['Automatizacion IA', 'Pymes', 'Software a medida'],
        },
      ],
    },
    experience: {
      eyebrow: 'Experiencia',
      title: 'Entrega de producto y automatizacion',
      visitLabel: 'Visitar estudio',
      items: [
        {
          role: 'Co-founder',
          company: 'Intelligex Automations',
          period: 'Actualidad',
          description:
            'Escalando operaciones con automatizacion, sistemas conversacionales e infraestructura digital adaptada.',
          href: 'https://intelligex.es',
        },
        {
          role: 'Full Stack Developer',
          company: 'Nexo Tech Labs',
          period: 'Trabajo en produccion',
          description:
            'Desarrollo de una plataforma de gestion para centros deportivos con foco en estabilidad y utilidad.',
        },
        {
          role: 'Graduado en Ingenieria de Software',
          company: 'Universidad de Valladolid',
          period: 'Completado',
          description: 'Base academica en ingenieria del software mientras construia productos en paralelo.',
        },
      ],
    },
    stack: {
      eyebrow: 'Tech stack',
      title: 'Herramientas para pasar de concepto a produccion',
      groups: [
        {
          title: 'Frontend',
          items: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS'],
        },
        {
          title: 'Backend',
          items: ['Node.js', 'Express', 'Python', 'Java', 'REST APIs', 'Automation workflows'],
        },
        {
          title: 'Data & Infra',
          items: ['MySQL', 'Git', 'GitHub', 'Docker', 'Linux', 'Capacitor', 'Netlify'],
        },
      ],
    },
    principles: {
      eyebrow: 'Forma de trabajar',
      title: 'Como enfoco los proyectos',
      items: [
        {
          title: 'Util antes que llamativo',
          text: 'La interfaz tiene que verse bien, pero sobre todo tiene que aclarar y simplificar.',
        },
        {
          title: 'Iteracion rapida',
          text: 'Prefiero lanzar versiones enfocadas, medir que funciona y mejorar desde uso real.',
        },
        {
          title: 'Primero el contexto',
          text: 'La mejor solucion es la que encaja con el proceso, los usuarios y el negocio.',
        },
      ],
    },
    contact: {
      eyebrow: 'Contacto',
      title: 'Abierto a proyectos y colaboraciones',
      text: 'Si estas construyendo producto o explorando automatizacion con IA, puedes escribirme.',
      links: [
        { label: 'GitHub', value: 'mgarciacorral', href: 'https://github.com/mgarciacorral' },
        {
          label: 'LinkedIn',
          value: 'Matias Garcia Corral',
          href: 'https://www.linkedin.com/in/matias-garcia-corral-8353922a9/',
        },
        { label: 'Email', value: 'mgarciacorral@intelligex.es', href: 'mailto:mgarciacorral@intelligex.es' },
        { label: 'Studio', value: 'intelligex.es', href: 'https://intelligex.es' },
      ],
    },
  },
  en: {
    lang: 'en',
    title: 'Matias Garcia Corral | Portfolio',
    brand: 'Matias Garcia Corral',
    navigation: [
      { label: 'About', href: '#about' },
      { label: 'Projects', href: '#projects' },
      { label: 'Experience', href: '#experience' },
      { label: 'Stack', href: '#stack' },
      { label: 'Contact', href: '#contact' },
    ],
    languageLabel: 'Language',
    languages: {
      es: 'ES',
      en: 'EN',
    },
    highlights: [
      'Software Engineering graduate',
      'Co-founder at Intelligex Automations',
      'Full Stack developer focused on AI systems',
    ],
    hero: {
      eyebrow: 'Full Stack Developer / AI Automation',
      title: 'Software and automation designed to move teams faster.',
      text:
        'I build SaaS products, operational workflows and useful systems through practical engineering and product-minded execution.',
      primaryCta: 'Contact me',
      secondaryCta: 'View GitHub',
      highlightsLabel: 'Key highlights',
    },
    heroCard: {
      label: 'Right now',
      title: 'Useful automation with a clear product layer',
      text:
        'My work sits between product, user experience and automation for businesses that need smarter communication systems.',
      stats: [
        { label: 'Main track', value: 'Full Stack SaaS' },
        { label: 'Specialty', value: 'AI automation' },
        { label: 'Base', value: 'Segovia, Spain' },
      ],
    },
    pillarsLabel: 'Summary',
    pillars: [
      {
        eyebrow: 'Profile',
        title: 'Engineering with product focus',
        text: 'I work between product, automation and software delivery with a practical mindset.',
      },
      {
        eyebrow: 'Current focus',
        title: 'AI automation for real business',
        text: 'Voice agents, WhatsApp automation and SaaS products that reduce repetitive manual work.',
      },
      {
        eyebrow: 'Location',
        title: 'Based in Segovia, open to remote work',
        text: 'I build with async collaboration, clear delivery and production-ready thinking.',
      },
    ],
    about: {
      eyebrow: 'About',
      title: 'Software that earns its place in real workflows',
      paragraphs: [
        'I started programming when I was 14 and I still learn the same way: build, ship and improve.',
        'My background combines software engineering, web development and automation to connect clean interfaces with useful backend logic.',
      ],
      notes: [
        { label: 'Learning', value: 'Build, validate, iterate' },
        { label: 'Focus', value: 'Product, backend and automation' },
        { label: 'Base', value: 'Segovia, remote-friendly' },
      ],
      quote: '"The best way I know to learn is to build something that needs to work outside the sandbox."',
    },
    projects: {
      eyebrow: 'Projects',
      title: 'Projects in motion',
      visit: 'Visit',
      items: [
        {
          name: 'Stylofy',
          link: 'https://stylofy.es',
          status: 'Live',
          description: 'AI appointment manager for hair salons that handles calls and WhatsApp 24/7.',
          tags: ['AI assistant', 'Operations', 'Customer support'],
        },
        {
          name: 'SerpEye',
          link: 'https://serpeye.intelligex.es/inicio',
          status: 'Building',
          description: 'B2B scraping platform for discovering businesses by sector, city and country.',
          tags: ['B2B data', 'Lead generation', 'Automation'],
        },
        {
          name: 'Intelligex Automations',
          link: 'https://intelligex.es',
          status: 'Live',
          description: 'Automation studio focused on conversational AI and custom software for SMEs.',
          tags: ['AI automation', 'SMEs', 'Custom software'],
        },
      ],
    },
    experience: {
      eyebrow: 'Experience',
      title: 'Product delivery and automation',
      visitLabel: 'Visit studio',
      items: [
        {
          role: 'Co-founder',
          company: 'Intelligex Automations',
          period: 'Current',
          description:
            'Helping businesses scale operations through automation, conversational systems and tailored digital infrastructure.',
          href: 'https://intelligex.es',
        },
        {
          role: 'Full Stack Developer',
          company: 'Nexo Tech Labs',
          period: 'Production work',
          description:
            'Developing a sports center management platform with a practical focus on stable features and useful workflows.',
        },
        {
          role: 'Software Engineering Graduate',
          company: 'Universidad de Valladolid',
          period: 'Completed',
          description: 'Academic foundation in software engineering while building products in parallel.',
        },
      ],
    },
    stack: {
      eyebrow: 'Tech stack',
      title: 'Tools I use to move from concept to production',
      groups: [
        {
          title: 'Frontend',
          items: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS'],
        },
        {
          title: 'Backend',
          items: ['Node.js', 'Express', 'Python', 'Java', 'REST APIs', 'Automation workflows'],
        },
        {
          title: 'Data & Infra',
          items: ['MySQL', 'Git', 'GitHub', 'Docker', 'Linux', 'Capacitor', 'Netlify'],
        },
      ],
    },
    principles: {
      eyebrow: 'Approach',
      title: 'How I approach projects',
      items: [
        {
          title: 'Useful over flashy',
          text: 'I like polished interfaces, but the goal is always to simplify work and clarify decisions.',
        },
        {
          title: 'Fast iteration',
          text: 'I prefer shipping focused versions, measuring what works and improving from real usage.',
        },
        {
          title: 'Context first',
          text: 'The best technical solution is the one that fits the process, the users and the business.',
        },
      ],
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Open to projects and collaborations',
      text: 'If you are building a product or exploring AI automation, feel free to reach out.',
      links: [
        { label: 'GitHub', value: 'mgarciacorral', href: 'https://github.com/mgarciacorral' },
        {
          label: 'LinkedIn',
          value: 'Matias Garcia Corral',
          href: 'https://www.linkedin.com/in/matias-garcia-corral-8353922a9/',
        },
        { label: 'Email', value: 'mgarciacorral@intelligex.es', href: 'mailto:mgarciacorral@intelligex.es' },
        { label: 'Studio', value: 'intelligex.es', href: 'https://intelligex.es' },
      ],
    },
  },
}

function App() {
  const [language, setLanguage] = useState('es')
  const [activeSection, setActiveSection] = useState('')
  const t = translations[language]

  useEffect(() => {
    document.documentElement.lang = t.lang
    document.title = t.title
  }, [t.lang, t.title])

  useEffect(() => {
    const revealedElements = document.querySelectorAll('[data-reveal]')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return
          }

          entry.target.setAttribute('data-visible', 'true')
          observer.unobserve(entry.target)
        })
      },
      {
        threshold: 0.18,
        rootMargin: '0px 0px -10% 0px',
      },
    )

    revealedElements.forEach((element) => {
      element.removeAttribute('data-visible')
      observer.observe(element)
    })

    return () => observer.disconnect()
  }, [language])

  useEffect(() => {
    const sectionIds = t.navigation.map((item) => item.href.replace('#', ''))
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section) => section !== null)

    if (!sections.length) {
      return undefined
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((first, second) => second.intersectionRatio - first.intersectionRatio)

        if (!visibleEntries.length) {
          return
        }

        setActiveSection(visibleEntries[0].target.id)
      },
      {
        threshold: [0.2, 0.35, 0.55, 0.75],
        rootMargin: '-18% 0px -55% 0px',
      },
    )

    sections.forEach((section) => observer.observe(section))

    const firstSection = sections[0]
    if (firstSection && window.scrollY + 160 >= firstSection.offsetTop) {
      setActiveSection(firstSection.id)
    } else {
      setActiveSection('')
    }

    return () => observer.disconnect()
  }, [t.navigation])

  return (
    <div className="page-shell">
      <header className="site-header">
        <div className="brand-mark">
          <span className="brand-dot" />
          <span>{t.brand}</span>
        </div>
        <div className="header-controls">
          <nav className="site-nav" aria-label="Primary">
            {t.navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={activeSection === item.href.slice(1) ? 'is-active' : ''}
                aria-current={activeSection === item.href.slice(1) ? 'page' : undefined}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="language-switcher" aria-label={t.languageLabel} role="group">
            {Object.entries(t.languages).map(([code, label]) => (
              <button
                key={code}
                type="button"
                className={code === language ? 'lang-button is-active' : 'lang-button'}
                onClick={() => setLanguage(code)}
                aria-pressed={code === language}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </header>

      <main>
        <section className="hero-section">
          <div className="hero-copy" data-reveal="true" style={{ '--reveal-delay': '0.08s' }}>
            <p className="eyebrow">{t.hero.eyebrow}</p>
            <h1>{t.hero.title}</h1>
            <p className="hero-text">{t.hero.text}</p>

            <div className="hero-actions">
              <a className="button button-primary" href="#contact">
                {t.hero.primaryCta}
              </a>
              <a
                className="button button-secondary"
                href="https://github.com/mgarciacorral"
                target="_blank"
                rel="noreferrer"
              >
                {t.hero.secondaryCta}
              </a>
            </div>

            <ul className="highlight-list" aria-label={t.hero.highlightsLabel}>
              {t.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <aside className="hero-card" data-reveal="true" style={{ '--reveal-delay': '0.18s' }}>
            <div className="portrait-wrap">
              <img src={profileImage} alt="Matias Garcia Corral" />
            </div>
            <div className="hero-card-copy">
              <p className="card-label">{t.heroCard.label}</p>
              <h2>{t.heroCard.title}</h2>
              <p>{t.heroCard.text}</p>
            </div>
            <dl className="mini-stats">
              {t.heroCard.stats.map((item) => (
                <div key={item.label}>
                  <dt>{item.label}</dt>
                  <dd>{item.value}</dd>
                </div>
              ))}
            </dl>
          </aside>
        </section>

        <section className="info-ribbon" aria-label={t.pillarsLabel}>
          {t.pillars.map((item, index) => (
            <article
              key={item.title}
              className="ribbon-card"
              data-reveal="true"
              style={{ '--reveal-delay': `${0.08 + index * 0.08}s` }}
            >
              <p className="eyebrow">{item.eyebrow}</p>
              <h2>{item.title}</h2>
              <p>{item.text}</p>
            </article>
          ))}
        </section>

        <section className="content-section" id="about">
          <div className="about-layout">
            <div className="about-main">
              <div className="section-heading" data-reveal="true" style={{ '--reveal-delay': '0.08s' }}>
                <p className="eyebrow">{t.about.eyebrow}</p>
                <h2>{t.about.title}</h2>
              </div>
              <div className="about-copy" data-reveal="true" style={{ '--reveal-delay': '0.14s' }}>
                {t.about.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <div className="about-notes" data-reveal="true" style={{ '--reveal-delay': '0.2s' }}>
                {t.about.notes.map((item) => (
                  <article key={item.label} className="about-note">
                    <span>{item.label}</span>
                    <strong>{item.value}</strong>
                  </article>
                ))}
              </div>
            </div>
            <div className="quote-card about-quote" data-reveal="true" style={{ '--reveal-delay': '0.18s' }}>
              <p>{t.about.quote}</p>
              <span>{t.brand}</span>
            </div>
          </div>
        </section>

        <section className="content-section" id="projects">
          <div className="section-heading" data-reveal="true" style={{ '--reveal-delay': '0.08s' }}>
            <p className="eyebrow">{t.projects.eyebrow}</p>
            <h2>{t.projects.title}</h2>
          </div>
          <div className="project-grid">
            {t.projects.items.map((project, index) => (
              <article
                key={project.name}
                className="project-card"
                data-reveal="true"
                style={{ '--reveal-delay': `${0.1 + index * 0.08}s` }}
              >
                <div className="project-topline">
                  <span>{project.status}</span>
                  <a href={project.link} target="_blank" rel="noreferrer">
                    {t.projects.visit}
                  </a>
                </div>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <ul className="tag-list" aria-label={`${project.name} tags`}>
                  {project.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section" id="experience">
          <div className="section-heading" data-reveal="true" style={{ '--reveal-delay': '0.08s' }}>
            <p className="eyebrow">{t.experience.eyebrow}</p>
            <h2>{t.experience.title}</h2>
          </div>
          <div className="timeline">
            {t.experience.items.map((item, index) => (
              <article
                key={`${item.role}-${item.company}`}
                className="timeline-item"
                data-reveal="true"
                style={{ '--reveal-delay': `${0.1 + index * 0.08}s` }}
              >
                <div className="timeline-meta">
                  <span>{item.period}</span>
                </div>
                <div className="timeline-content">
                  <h3>{item.role}</h3>
                  <p className="timeline-company">{item.company}</p>
                  <p>{item.description}</p>
                  {item.href ? (
                    <a className="timeline-link" href={item.href} target="_blank" rel="noreferrer">
                      <span>{t.experience.visitLabel}</span>
                      <strong>intelligex.es</strong>
                    </a>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section" id="stack">
          <div className="section-heading" data-reveal="true" style={{ '--reveal-delay': '0.08s' }}>
            <p className="eyebrow">{t.stack.eyebrow}</p>
            <h2>{t.stack.title}</h2>
          </div>
          <div className="stack-grid">
            {t.stack.groups.map((group, index) => (
              <article
                key={group.title}
                className="stack-card"
                data-reveal="true"
                style={{ '--reveal-delay': `${0.1 + index * 0.08}s` }}
              >
                <h3>{group.title}</h3>
                <ul className="tag-list stack-tag-list" aria-label={`${group.title} tools`}>
                  {group.items.map((item) => (
                    <li key={item} className="stack-tag">
                      <span className="stack-mark" aria-hidden="true">
                        {techMarks[item] ?? item.slice(0, 2)}
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section principles-section">
          <div className="section-heading" data-reveal="true" style={{ '--reveal-delay': '0.08s' }}>
            <p className="eyebrow">{t.principles.eyebrow}</p>
            <h2>{t.principles.title}</h2>
          </div>
          <div className="principles-grid">
            {t.principles.items.map((item, index) => (
              <article
                key={item.title}
                className="principle-card"
                data-reveal="true"
                style={{ '--reveal-delay': `${0.1 + index * 0.08}s` }}
              >
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section contact-section" id="contact">
          <div className="section-heading" data-reveal="true" style={{ '--reveal-delay': '0.08s' }}>
            <p className="eyebrow">{t.contact.eyebrow}</p>
            <h2>{t.contact.title}</h2>
          </div>
          <div className="contact-panel" data-reveal="true" style={{ '--reveal-delay': '0.14s' }}>
            <div className="contact-copy">
              <p>{t.contact.text}</p>
            </div>
            <div className="contact-grid">
              {t.contact.links.map((item, index) => (
                <a
                  key={item.label}
                  className="contact-card"
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                  data-reveal="true"
                  style={{ '--reveal-delay': `${0.18 + index * 0.08}s` }}
                >
                  <span>{item.label}</span>
                  <strong>{item.value}</strong>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App

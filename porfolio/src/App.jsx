import { useEffect, useState } from 'react'
import './App.css'
import profileImage from './assets/matias-profile.png'

const translations = {
  es: {
    lang: 'es',
    title: 'Matias Garcia Corral | Portfolio',
    brand: 'Matias Garcia Corral',
    navigation: [
      { label: 'Sobre mí', href: '#about' },
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
      'Graduado en Ingeniería de Software y Aplicaciones',
      'Co-founder en Intelligex Automations',
      'Full Stack developer construyendo sistemas con IA',
    ],
    hero: {
      eyebrow: 'Full Stack Developer / Constructor de automatizaciones con IA',
      title:
        'Diseño software y sistemas de automatización que ayudan a las empresas a avanzar más rápido y con menos fricción.',
      text:
        'Soy Matias Garcia Corral, desarrollador afincado en Segovia. Construyo productos SaaS, flujos de automatización y sistemas impulsados por IA desde una ingeniería práctica y orientada a producto.',
      primaryCta: 'Contactar',
      secondaryCta: 'Ver GitHub',
      highlightsLabel: 'Aspectos clave',
    },
    heroCard: {
      label: 'Construyendo ahora',
      title: 'Productos de automatización con una capa claramente orientada al usuario',
      text:
        'Mi trabajo se sitúa entre la experiencia de usuario, la entrega de producto y la automatización operativa, especialmente para empresas que necesitan sistemas de comunicación más inteligentes.',
      stats: [
        { label: 'Línea principal', value: 'Full Stack SaaS' },
        { label: 'Especialidad', value: 'Automatización con IA' },
        { label: 'Base', value: 'Segovia, España' },
      ],
    },
    pillarsLabel: 'Resumen',
    pillars: [
      {
        eyebrow: 'Perfil',
        title: 'Ingeniería con foco en producto',
        text:
          'Trabajo en la intersección entre producto, automatización y entrega de software. Me importan los sistemas fiables, útiles y fáciles de operar.',
      },
      {
        eyebrow: 'Enfoque actual',
        title: 'Automatización con IA para negocios reales',
        text:
          'Ahora mismo estoy centrado en voice agents, automatización por WhatsApp, flujos de captación y productos SaaS que reducen trabajo manual repetitivo.',
      },
      {
        eyebrow: 'Ubicación',
        title: 'Desde Segovia, abierto a trabajo remoto',
        text:
          'Trabajo pensando en colaboración internacional: comunicación asíncrona, entregas estructuradas y soluciones prácticas capaces de pasar rápido de idea a producción.',
      },
    ],
    about: {
      eyebrow: 'Sobre mí',
      title: 'Construir software que se gana su lugar en flujos de trabajo reales',
      paragraphs: [
        'Empecé a programar con 14 años y desde entonces he aprendido construyendo. Ese enfoque sigue definiendo cómo trabajo: sacar versiones, validar, mejorar y mantener la solución conectada con lo que la gente realmente necesita.',
        'Mi perfil combina ingeniería del software, desarrollo web y automatización. Hoy me interesa especialmente crear sistemas que unan interfaces limpias con lógica backend útil, sobre todo cuando la IA puede eliminar trabajo operativo repetitivo.',
      ],
      quote:
        '"La mejor forma que conozco de aprender es construir algo que tenga que funcionar fuera del sandbox."',
    },
    projects: {
      eyebrow: 'Proyectos',
      title: 'Lo que estoy construyendo ahora mismo',
      visit: 'Visitar',
      items: [
        {
          name: 'Stylofy',
          link: 'https://stylofy.es',
          status: 'Live',
          description:
            'Gestor de citas con IA para peluquerías que responde llamadas y mensajes de WhatsApp 24/7.',
          tags: ['Asistente IA', 'Operaciones', 'Atención al cliente'],
        },
        {
          name: 'SerpEye',
          link: 'https://serpeye.intelligex.es/inicio',
          status: 'Building',
          description:
            'Plataforma de scraping B2B para descubrir negocios por sector, ciudad y país con un flujo pensado para equipos de outbound.',
          tags: ['Datos B2B', 'Lead generation', 'Automatización'],
        },
        {
          name: 'Intelligex Automations',
          link: 'https://intelligex.es',
          status: 'Live',
          description:
            'Estudio de automatización centrado en comunicación con IA, bots de WhatsApp, voice agents, inteligencia de email y software a medida para pymes.',
          tags: ['Automatización IA', 'Pymes', 'Software a medida'],
        },
      ],
    },
    experience: {
      eyebrow: 'Experiencia',
      title: 'Trabajo marcado por la entrega de producto y la automatización',
      items: [
        {
          role: 'Co-founder',
          company: 'Intelligex Automations',
          period: 'Actualidad',
          description:
            'Ayudando a empresas a escalar operaciones mediante automatización con IA, sistemas conversacionales e infraestructura digital adaptada a cada caso.',
        },
        {
          role: 'Full Stack Developer',
          company: 'Nexo Tech Labs',
          period: 'Trabajo en producción',
          description:
            'Desarrollando una plataforma de gestión para centros deportivos con un enfoque muy práctico en estabilidad, entregas y utilidad real.',
        },
        {
          role: 'Graduado en Ingeniería de Software',
          company: 'Universidad de Valladolid',
          period: 'Completado',
          description:
            'Base académica en ingeniería del software mientras construía productos en paralelo y aprendía a través de la ejecución.',
        },
      ],
    },
    stack: {
      eyebrow: 'Tech stack',
      title: 'Herramientas que uso para pasar de concepto a producción',
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
      title: 'Cómo me gusta enfocar los proyectos',
      items: [
        {
          title: 'Útil antes que llamativo',
          text:
            'Me gustan las interfaces cuidadas, pero el objetivo real es un software que simplifique el trabajo y aclare decisiones.',
        },
        {
          title: 'Iteración rápida',
          text:
            'Prefiero lanzar versiones enfocadas, medir qué funciona y mejorar desde el uso real en vez de adivinar demasiado al principio.',
        },
        {
          title: 'Primero el contexto de negocio',
          text:
            'La mejor solución técnica es la que encaja con el proceso, los usuarios y las restricciones del negocio que la va a usar.',
        },
      ],
    },
    contact: {
      eyebrow: 'Contacto',
      title: 'Abierto a proyectos, colaboraciones y conversaciones de producto',
      text:
        'Si estás construyendo un producto, explorando automatización con IA o necesitas un desarrollador capaz de unir ingeniería con ejecución, puedes escribirme.',
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
      'Software & Applications Engineering graduate',
      'Co-founder at Intelligex Automations',
      'Full Stack developer building AI systems',
    ],
    hero: {
      eyebrow: 'Full Stack Developer / AI Automation Builder',
      title:
        'I design software and automation systems that help businesses move faster with less friction.',
      text:
        'I am Matias Garcia Corral, a developer based in Segovia. I build SaaS products, automation workflows and AI-driven systems through practical engineering and product-minded execution.',
      primaryCta: 'Contact me',
      secondaryCta: 'View GitHub',
      highlightsLabel: 'Key highlights',
    },
    heroCard: {
      label: 'Currently building',
      title: 'Automation products with a human-facing layer',
      text:
        'My work sits between user experience, product delivery and operational automation, especially for businesses that need smarter communication systems.',
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
        text:
          'I work at the intersection of product, automation and software delivery. I care about systems that are reliable, useful and clear to operate.',
      },
      {
        eyebrow: 'Current focus',
        title: 'AI automation for real businesses',
        text:
          'My current work is centered on voice agents, WhatsApp automation, lead generation workflows and SaaS products that reduce repetitive manual work.',
      },
      {
        eyebrow: 'Location',
        title: 'Based in Segovia, open to remote work',
        text:
          'I build with international collaboration in mind: async communication, structured delivery and practical solutions that can move from idea to production fast.',
      },
    ],
    about: {
      eyebrow: 'About',
      title: 'Building software that earns its place in real workflows',
      paragraphs: [
        'I started programming when I was 14 and since then I have kept learning by building. That approach still defines the way I work: ship, validate, improve, and keep the solution grounded in what people actually need.',
        'My background combines software engineering, web development and automation. Today I am most interested in systems that connect clean interfaces with useful backend logic, especially when AI can remove repetitive operational work.',
      ],
      quote:
        '"The best way I know to learn is to build something that needs to work outside the sandbox."',
    },
    projects: {
      eyebrow: 'Projects',
      title: 'What I am building right now',
      visit: 'Visit',
      items: [
        {
          name: 'Stylofy',
          link: 'https://stylofy.es',
          status: 'Live',
          description:
            'AI appointment manager for hair salons that handles calls and WhatsApp messages 24/7.',
          tags: ['AI assistant', 'Operations', 'Customer support'],
        },
        {
          name: 'SerpEye',
          link: 'https://serpeye.intelligex.es/inicio',
          status: 'Building',
          description:
            'Lead scraping platform for discovering businesses by sector, city and country with a workflow built for outbound teams.',
          tags: ['B2B data', 'Lead generation', 'Automation'],
        },
        {
          name: 'Intelligex Automations',
          link: 'https://intelligex.es',
          status: 'Live',
          description:
            'Automation studio focused on AI communication systems, WhatsApp bots, voice agents, email intelligence and custom software for SMEs.',
          tags: ['AI automation', 'SMEs', 'Custom software'],
        },
      ],
    },
    experience: {
      eyebrow: 'Experience',
      title: 'Work shaped by product delivery and automation',
      items: [
        {
          role: 'Co-founder',
          company: 'Intelligex Automations',
          period: 'Current',
          description:
            'Helping businesses scale operations through AI automation, conversational systems and tailored digital infrastructure.',
        },
        {
          role: 'Full Stack Developer',
          company: 'Nexo Tech Labs',
          period: 'Production work',
          description:
            'Developing a sports center management platform with a practical focus on shipping stable features and usable workflows.',
        },
        {
          role: 'Software Engineering Graduate',
          company: 'Universidad de Valladolid',
          period: 'Completed',
          description:
            'Academic foundation in software engineering while building products in parallel and learning through delivery.',
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
      title: 'How I like to work',
      items: [
        {
          title: 'Useful over flashy',
          text:
            'I like polished interfaces, but the real goal is software that makes work simpler and decisions clearer.',
        },
        {
          title: 'Fast iteration',
          text:
            'I prefer shipping focused versions, measuring what works and improving from real usage instead of guessing too much upfront.',
        },
        {
          title: 'Business context first',
          text:
            'The best technical solution is the one that fits the process, the users and the constraints of the business using it.',
        },
      ],
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Open to projects, collaborations and product conversations',
      text:
        'If you are building a product, exploring AI automation or need a developer who can bridge engineering with execution, feel free to reach out.',
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
  const t = translations[language]

  useEffect(() => {
    document.documentElement.lang = t.lang
    document.title = t.title
  }, [t.lang, t.title])

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
              <a key={item.href} href={item.href}>
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
          <div className="hero-copy">
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

          <aside className="hero-card">
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
          {t.pillars.map((item) => (
            <article key={item.title} className="ribbon-card">
              <p className="eyebrow">{item.eyebrow}</p>
              <h2>{item.title}</h2>
              <p>{item.text}</p>
            </article>
          ))}
        </section>

        <section className="content-section" id="about">
          <div className="section-heading">
            <p className="eyebrow">{t.about.eyebrow}</p>
            <h2>{t.about.title}</h2>
          </div>
          <div className="about-grid">
            <div className="about-copy">
              {t.about.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="quote-card">
              <p>{t.about.quote}</p>
              <span>{t.brand}</span>
            </div>
          </div>
        </section>

        <section className="content-section" id="projects">
          <div className="section-heading">
            <p className="eyebrow">{t.projects.eyebrow}</p>
            <h2>{t.projects.title}</h2>
          </div>
          <div className="project-grid">
            {t.projects.items.map((project) => (
              <article key={project.name} className="project-card">
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
          <div className="section-heading">
            <p className="eyebrow">{t.experience.eyebrow}</p>
            <h2>{t.experience.title}</h2>
          </div>
          <div className="timeline">
            {t.experience.items.map((item) => (
              <article key={`${item.role}-${item.company}`} className="timeline-item">
                <div className="timeline-meta">
                  <span>{item.period}</span>
                </div>
                <div className="timeline-content">
                  <h3>{item.role}</h3>
                  <p className="timeline-company">{item.company}</p>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section" id="stack">
          <div className="section-heading">
            <p className="eyebrow">{t.stack.eyebrow}</p>
            <h2>{t.stack.title}</h2>
          </div>
          <div className="stack-grid">
            {t.stack.groups.map((group) => (
              <article key={group.title} className="stack-card">
                <h3>{group.title}</h3>
                <ul className="tag-list" aria-label={`${group.title} tools`}>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section principles-section">
          <div className="section-heading">
            <p className="eyebrow">{t.principles.eyebrow}</p>
            <h2>{t.principles.title}</h2>
          </div>
          <div className="principles-grid">
            {t.principles.items.map((item) => (
              <article key={item.title} className="principle-card">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section contact-section" id="contact">
          <div className="section-heading">
            <p className="eyebrow">{t.contact.eyebrow}</p>
            <h2>{t.contact.title}</h2>
          </div>
          <div className="contact-panel">
            <div className="contact-copy">
              <p>{t.contact.text}</p>
            </div>
            <div className="contact-grid">
              {t.contact.links.map((item) => (
                <a
                  key={item.label}
                  className="contact-card"
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
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

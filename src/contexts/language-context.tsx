"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type Language = "en" | "pt"

const translations = {
  en: {
    nav: {
      education: "Education",
      projects: "Projects",
      courses: "Courses",
      technologies: "Technologies",
    },
    hero: {
      title: "Full Stack Developer",
      subtitle: "Building modern and innovative solutions",
      description:
        "Passionate about technology and creating exceptional digital experiences. Specialized in software development with modern technologies.",
    },
    education: {
      title: "Education",
      subtitle: "My academic journey, was fundamental in shaping the professional I am today. My education provided me with the necessary foundation and knowledge to face current challenges and drive my objectives forward.",
      elementary: {
        level: "Elementary School",
        institution: "School Name",
        period: "2008 - 2015",
        description: "Foundation years where I developed my curiosity for technology and problem-solving.",
      },
      highschool: {
        level: "High School",
        institution: "High School Name",
        period: "2016 - 2018",
        description: "Deepened my knowledge in exact sciences and started my programming journey.",
      },
      university: {
        level: "Bachelor in Computer Science",
        institution: "University Name",
        period: "2019 - Present",
        description: "Studying software development, algorithms, databases, and modern technologies.",
      },
    },
    projects: {
      title: "Projects",
      subtitle: "Some of the projects I developed during my career",
      project1: {
        title: "E-commerce Platform",
        description: "Complete online store with shopping cart, payment integration, and admin panel.",
      },
      project2: {
        title: "Task Manager",
        description: "Productivity app with teams, notifications, and real-time synchronization.",
      },
      project3: {
        title: "REST API",
        description: "Robust backend with authentication, authorization, and complete documentation.",
      },
    },
    courses: {
      title: "Courses",
      subtitle: "Main certifications and courses completed",
      course1: {
        title: "Full Stack Web Development",
        institution: "Online Platform",
        date: "2022",
        skills: "React, Node.js, MongoDB, REST APIs",
      },
      course2: {
        title: "Advanced JavaScript",
        institution: "Online Platform",
        date: "2021",
        skills: "ES6+, Async/Await, Promises, Design Patterns",
      },
      course3: {
        title: "Cloud Computing & DevOps",
        institution: "Online Platform",
        date: "2023",
        skills: "AWS, Docker, CI/CD, Kubernetes",
      },
    },
    technologies: {
      title: "Technologies",
      subtitle: "Languages, frameworks, and tools I work with",
      frontend: {
        category: "Frontend",
        items: "React, Next.js, TypeScript, Tailwind CSS, Framer Motion",
      },
      backend: {
        category: "Backend",
        items: "Node.js, Python, FastAPI, Express, REST APIs",
      },
      database: {
        category: "Database",
        items: "MongoDB, PostgreSQL, MySQL, Redis",
      },
      tools: {
        category: "Tools & Others",
        items: "Git, Docker, AWS, Vercel, Figma",
      },
    },
    footer: {
      made: "Made with",
      by: "by a passionate developer",
      rights: "All rights reserved",
    },
  },
  pt: {
    nav: {
      education: "Educação",
      projects: "Projetos",
      courses: "Cursos",
      technologies: "Tecnologias",
    },
    hero: {
      title: "Desenvolvedor Full Stack",
      subtitle: "Construindo soluções modernas e inovadoras",
      description:
        "Apaixonado por tecnologia e por criar experiências digitais excepcionais. Especializado em desenvolvimento de software com tecnologias modernas.",
    },
    education: {
      title: "Educação",
      subtitle: "minha jornada acadêmica, que foi fundamental para moldar o profissional que sou hoje. Minha formação me proporcionou as bases e o conhecimento necessário para enfrentar os desafios atuais e impulsionar meus objetivos.",
      elementary: {
        level: "Ensino Fundamental",
        institution: "Nome da Escola",
        period: "2008 - 2015",
        description: "Anos fundamentais onde desenvolvi minha curiosidade por tecnologia e resolução de problemas.",
      },
      highschool: {
        level: "Ensino Médio",
        institution: "Nome da Escola",
        period: "2016 - 2018",
        description: "Aprofundei meus conhecimentos em ciências exatas e iniciei minha jornada na programação.",
      },
      university: {
        level: "Bacharelado em Ciência da Computação",
        institution: "Nome da Universidade",
        period: "2019 - Presente",
        description: "Estudando desenvolvimento de software, algoritmos, banco de dados e tecnologias modernas.",
      },
    },
    projects: {
      title: "Projetos",
      subtitle: "Alguns dos projetos que desenvolvi durante minha carreira",
      project1: {
        title: "Plataforma E-commerce",
        description: "Loja online completa com carrinho de compras, integração de pagamentos e painel administrativo.",
      },
      project2: {
        title: "Gerenciador de Tarefas",
        description: "Aplicativo de produtividade com equipes, notificações e sincronização em tempo real.",
      },
      project3: {
        title: "API REST",
        description: "Backend robusto com autenticação, autorização e documentação completa.",
      },
    },
    courses: {
      title: "Cursos",
      subtitle: "Principais certificações e cursos concluídos",
      course1: {
        title: "Desenvolvimento Web Full Stack",
        institution: "Plataforma Online",
        date: "2022",
        skills: "React, Node.js, MongoDB, APIs REST",
      },
      course2: {
        title: "JavaScript Avançado",
        institution: "Plataforma Online",
        date: "2021",
        skills: "ES6+, Async/Await, Promises, Padrões de Projeto",
      },
      course3: {
        title: "Cloud Computing & DevOps",
        institution: "Plataforma Online",
        date: "2023",
        skills: "AWS, Docker, CI/CD, Kubernetes",
      },
    },
    technologies: {
      title: "Tecnologias",
      subtitle: "Linguagens, frameworks e ferramentas que trabalho",
      frontend: {
        category: "Frontend",
        items: "React, Next.js, TypeScript, Tailwind CSS, Framer Motion",
      },
      backend: {
        category: "Backend",
        items: "Node.js, Python, FastAPI, Express, APIs REST",
      },
      database: {
        category: "Banco de Dados",
        items: "MongoDB, PostgreSQL, MySQL, Redis",
      },
      tools: {
        category: "Ferramentas & Outros",
        items: "Git, Docker, AWS, Vercel, Figma",
      },
    },
    footer: {
      made: "Feito com",
      by: "por um desenvolvedor apaixonado",
      rights: "Todos os direitos reservados",
    },
  },
}

interface LanguageContextType {
  language: Language
  toggleLanguage: () => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "pt" : "en"))
  }

  const t = (key: string): string => {
    const keys = key.split(".")
    let value: any = translations[language]

    for (const k of keys) {
      value = value?.[k]
    }

    return value || key
  }

  return <LanguageContext.Provider value={{ language, toggleLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider")
  }
  return context
}

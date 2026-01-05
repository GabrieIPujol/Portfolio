"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type Language = "en" | "pt"

const translations = {
  pt: {
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
      subtitle: "My academic journey, was fundamental in shaping the professional I am today. My education provided me with the necessary foundation and knowledge to face current challenges and drive my objectives forward",
      elementary: {
        level: "Elementary School",
        institution: "Albert Einstein School",
        period: "2013 - 2021",
        description: "This is where it all started. I was still too young to know what I wanted for my life, but it was here, in ninth grade, that my curiosity about technology began.",
      },
      highschool: {
        level: "Technical High School Degree in IT",
        institution: "Senac",
        period: "2022 - 2024",
        description: "Now, already working with programming, networks, and fundamentals, I was getting a spoiler of what I would see in college. The technical high school definitely boosted my learning a lot and prepared me professionally for any challenge.",
      },
      university: {
        level: "Bachelor's Degree in Internet Systems",
        institution: "Senac",
        period: "2025 - 2027",
        description: "This course holds the highest rating from the Ministry of Education (MEC) and features an innovative goal: To train Full Stack Developers highly capable for the market. I can guarantee that I learned a large part of what I know today right here.",
      },
      english: {
        level: "English Course",
        institution: "WiseUP",
        period: "2019 - 2024",
        description: "More than a certificate, it is the gateway to global knowledge and opportunities in the IT field, where documentation and key technologies rely on English. With my technical foundation and fluency, I feel I have the complete skill stack to take on professional challenges.",
      },
      exchange: {
        level: "Exchange Program",
        institution: "EF - Boston, USA",
        period: "Jul, 2024 - Ago, 2024",
        description: "I couldn't talk about everything I want regarding this stage of my life in a single paragraph. It was an incredible and inexplicable experience. Besides the fun and immersion, I achieved the highly anticipated level of English fluency.",
      },
    },
    projects: {
      title: "Projects",
      subtitle: "Some of the projects I developed during my career",
      project1: {
        title: "E-commerce Store (Forniture)",
        description: "Complete online store with shopping cart, payment integration, and admin panel. - In Progress",
      },
      project2: {
        title: "Pringles Website Redesign",
        description: "Restructuring of the Pringles Home Page, aiming to create a more modern and attractive interface for the user.",
      },
      project3: {
        title: "Online Car Dealership",
        description: "An online car store, focused on bringing modernization and attracting customers who dream of getting a car.",
      },
      project4: {
        title: "Snake Game",
        description: "A fun game, try to beat your high score!",
      },
    },
    courses: {
      title: "Courses",
      subtitle: "Main certifications and recently completed courses",
      course1: {
        title: "Innovation Triad",
        institution: "MIT Professional Education in partnership with Santander Open Academy",
        date: "2025",
        skills: "Generative AI, Digital Transformation, Internet of Things (IoT)",
      },
      course2: {
        title: "Python for Data Science",
        institution: "IBM",
        date: "2025",
        skills: "Python, Data Structures, Data Analysis, Logic Programming",
      },
      course3: {
        title: "Specialization in Agile Methodologies",
        institution: "Rocketseat Technology College",
        date: "2025",
        skills: "Agile, Scrum, Kanban, Frameworks",
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
      quickLinks: "Quick Links",
      connect: "Connect",
      available: "Available worldwide",
      madeBy: "Made by",
      rights: "All rights reserved.",
      description: "Portfolio developed using React, TypeScript, and Tailwind",
    },
    cursor: {
      view: "VIEW"
    }
  },
  en: {
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
      subtitle: "minha jornada acadêmica, que foi fundamental para moldar o profissional que sou hoje. Minha formação me proporcionou as bases e o conhecimento necessário para enfrentar os desafios atuais e impulsionar meus objetivos",
      elementary: {
        level: "Ensino Fundamental",
        institution: "Colégio Albert Einstein",
        period: "2013 - 2021",
        description: "Aqui foi onde tudo começou. Eu ainda era muito pequeno para saber o que eu queria da minha vida, mas foi aí, na nona série, que começou a minha curiosidade pela tecnologia.",
      },
      highschool: {
        level: "Ensino Médio Técnico em TI",
        institution: "Senac",
        period: "2022 - 2024",
        description: "Agora, já mexendo com programação, redes e fundamentos, eu estava vendo um spoiler do que eu veria na faculdade. O ensino médio técnico com certeza impulsionou muito meu aprendizado e me preparou profissionalmente para qualquer desafio.",
      },
      university: {
        level: "Superior em Sistemas Para Internet",
        institution: "Senac",
        period: "2025 - 2027",
        description: "Este curso possui nota máxima pelo Ministério da Educação (MEC) e uma proposta inovadora: Formar Desenvolvedores Full Stack altamente capacitados para o mercado. Posso garantir que aprendi grande parte do que sei hoje aqui.",
      },
      english: {
        level: "Curso de Inglês",
        institution: "WiseUP",
        period: "2019 - 2024",
        description: "Mais que um certificado, é a porta de entrada para o conhecimento global e oportunidades em TI, onde a documentação e as tecnologias são em inglês. Com a base técnica e a fluência, sinto-me com o conjunto completo de habilidades (full stack) para enfrentar desafios profissionais.",
      },
      exchange: {
        level: "Intercâmbio",
        institution: "EF - Boston, USA",
        period: "Jul, 2024 - Ago, 2024",
        description: "Não conseguiria falar tudo o que eu quero sobre essa etapa de minha vida em um único parágrafo. Foi uma experiência incrível e inexplicável. Além da diversão e imersão, eu conquistei o tão sonhado nível de fluência em inglês.",
      },
    },
    projects: {
      title: "Projetos",
      subtitle: "Alguns dos projetos que desenvolvi durante minha carreira",
      project1: {
        title: "Loja Virtual (Forniture)",
        description: "Loja online completa com carrinho de compras, integração de pagamentos e painel administrativo. - Em andamento",
      },
      project2: {
        title: "Reestruturação do Website Pringles",
        description: "Reestruturação da página inicial (Home Page) da Pringles, com o objetivo de criar uma interface mais moderna e atraente para o usuário.",
      },
      project3: {
        title: "Loja Virtual de Carros",
        description: "Uma loja de carros online, com o foco em trazer modernização e atrair clientes que sonham em conseguir um carro.",
      },
      project4: {
        title: "Jogo da Cobrinha",
        description: "Um jogo divertido, tente bater o seu recorde!",
      },
    },
    courses: {
      title: "Cursos",
      subtitle: "Principais certificações e cursos concluídos recentemente",
      course1: {
        title: "Tríade da Inovação",
        institution: "MIT Professional Education em parceria com Santander Open Academy",
        date: "2025",
        skills: "IA Generativa, Transformação Digital, Internet das Coisas (IoT)",
      },
      course2: {
        title: "Python para Ciência de Dados",
        institution: "IBM",
        date: "2025",
        skills: "Python, Estruturas de Dados, Análise de Dados, Lógica de Programação",
      },
      course3: {
        title: "Especialização em Metodologias Ágeis",
        institution: "Faculdade de Tecnologia Rocketseat",
        date: "2025",
        skills: "Agile, Scrum, Kanban, Frameworks",
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
      quickLinks: "Links Rápidos",
      connect: "Conectar",
      available: "Disponível para todo o mundo",
      madeBy: "Feito por",
      rights: "Todos os direitos reservados.",
      description: "Portfólio desenvolvido com React, TypeScript e Tailwind",
    },
    cursor: {
      view: "VER"
    }
  },
}

interface LanguageContextType {
  language: Language
  toggleLanguage: () => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("pt")

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "pt" ? "en" : "pt"))
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

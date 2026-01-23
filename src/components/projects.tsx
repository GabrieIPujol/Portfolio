"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { ExternalLink, Github, Sparkles } from "lucide-react"
import { Button } from "../components/ui/button"
import { useLanguage } from "../contexts/language-context"
import projectImgForniture from "../assets/forniture-project.png"
import projectImgPringles from "../assets/pringles-project.png"
import projectImgProgress from "../assets/InProgress-project.png"
import projectImgSnakeGame from "../assets/snakeGame-project.jpg"

export function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })
  const { t } = useLanguage()

  const projects = [
    {
      title: t("projects.project1.title"),
      description: t("projects.project1.description"),
      tech: ["HTML", "CSS", "JavaScript"],  
      gradient: "from-cyan-500 to-blue-500",
      image: projectImgForniture,
      codeLink: "https://github.com/GabrieIPujol/Furniture",
      demoLink: "https://gabrieipujol.github.io/Furniture/src/assets/html/index.html",
    },
    {
      title: t("projects.project2.title"),
      description: t("projects.project2.description"),
      tech: ["HTML/CSS", "JavaScript/GSAP", "Frameworks"],
      gradient: "from-blue-500 to-cyan-600",
      image: projectImgPringles,
      codeLink: "https://github.com/GabrieIPujol/Pringles-Project",
      demoLink: "https://gabrieipujol.github.io/Pringles-Project/Pringles/index.html",
    },
    {
      title: t("projects.project3.title"),
      description: t("projects.project3.description"),
      tech: ["HTML/CSS", "JavaScript", "Frameworks"],
      gradient: "from-cyan-600 to-blue-600",
      image: projectImgProgress,
      codeLink: "https://github.com/GabrieIPujol/CarDealership",
      demoLink: "https://gabrieipujol.github.io/CarDealership/src/index.html",
    },
    {
      title: t("projects.project4.title"),
      description: t("projects.project4.description"),
      tech: ["HTML", "CSS", "JavaScript"],
      gradient: "from-cyan-600 to-blue-600",
      image: projectImgSnakeGame,
      codeLink: "https://github.com/GabrieIPujol/Snake-Game",
      demoLink: "https://gabrieipujol.github.io/Snake-Game/",
    },
  ]

  return (
    <section id="projects" ref={ref} className="py-20 md:py-32 relative bg-muted/30 overflow-hidden">
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-500/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight bg-linear-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
            {t("projects.title")}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">{t("projects.subtitle")}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto items-stretch">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project, index, isInView }: any) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative group cursor-pointer h-full"
    >
      <motion.div
        className={`absolute -inset-[0.5px] bg-linear-to-r ${project.gradient} rounded-3xl opacity-0 group-hover:opacity-20 blur-[2px] transition duration-300 pointer-events-none`}
        animate={isHovered ? { scale: 1.005 } : { scale: 1 }}
      />

      <div className="relative bg-card border-2 border-border rounded-3xl overflow-hidden h-full flex flex-col">
        <motion.div
          className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent pointer-events-none"
          initial={{ x: "-100%" }}
          animate={isHovered ? { x: "100%" } : { x: "-100%" }}
          transition={{ duration: 0.6 }}
        />

        <div className={`h-2 bg-linear-to-r ${project.gradient}`} />

        <div className="p-6 relative z-10 flex-1 flex flex-col">
          <div className="mb-4">
            <div className="relative overflow-hidden rounded-2xl border border-border/40 bg-muted/30 aspect-16/10">
              <motion.img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 h-full w-full object-cover"
                initial={{ scale: 1.02 }}
                animate={isHovered ? { scale: 1.05 } : { scale: 1.02 }}
                transition={{ duration: 0.4 }}
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/40 via-black/10 to-transparent pointer-events-none" />
            </div>
          </div>

          <motion.div
            className="absolute top-4 right-4 pointer-events-none"
            animate={isHovered ? { rotate: 360, scale: 1.2 } : { rotate: 0, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Sparkles className="w-6 h-6 text-cyan-500" />
          </motion.div>

          <div className="space-y-4 flex-1 flex flex-col">
            <h3 className="text-2xl font-bold pr-10 leading-tight">
              <span className={`bg-linear-to-r ${project.gradient} bg-clip-text text-transparent`}>
                {project.title}
              </span>
            </h3>

            <p className="text-muted-foreground leading-relaxed min-h-16">{project.description}</p>

            <div className="mt-auto space-y-3">
              <div className="flex flex-wrap gap-2 py-2">
                {project.tech.map((tech: string, i: number) => (
                  <motion.span
                    key={i}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className={`px-3 py-1.5 bg-linear-to-r ${project.gradient} rounded-full text-xs font-semibold text-white shadow-lg`}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: window.innerWidth < 1024 ? 1 : (isHovered ? 1 : 0) }}
                className="flex gap-2 pt-2 min-h-11 relative z-20 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300"
              >
                 {project.codeLink && (
                    <Button
                      size="sm"
                      variant="outline"
                      className="gap-2 border-cyan-500/50 hover:bg-cyan-500/10 bg-transparent cursor-pointer"
                      onClick={(e) => {
                        e.stopPropagation(); 
                        window.open(project.codeLink, "_blank");
                      }}
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </Button>
                  )}

                  {project.demoLink && (
                    <Button
                      size="sm"
                      variant="outline"
                      className="gap-2 border-blue-500/50 hover:bg-blue-500/10 bg-transparent cursor-pointer"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(project.demoLink, "_blank");
                      }}
                    >
                      <ExternalLink className="w-4 h-4" />
                      Demo
                    </Button>
                  )}
              </motion.div>
            </div>
          </div>
        </div>

        <div className={`absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t ${project.gradient} opacity-5 pointer-events-none`} />
      </div>
    </motion.div>
  )
}
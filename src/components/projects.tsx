"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { ExternalLink, Github, Sparkles } from "lucide-react"
import { Button } from "../components/ui/button"
import { useLanguage } from "../contexts/language-context"

export function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })
  const { t } = useLanguage()

  const projects = [
    {
      title: t("projects.project1.title"),
      description: t("projects.project1.description"),
      tech: ["React", "Node.js", "MongoDB"],
      gradient: "from-cyan-500 to-blue-500",
    },
    {
      title: t("projects.project2.title"),
      description: t("projects.project2.description"),
      tech: ["Next.js", "TypeScript", "Tailwind"],
      gradient: "from-blue-500 to-cyan-600",
    },
    {
      title: t("projects.project3.title"),
      description: t("projects.project3.description"),
      tech: ["Python", "FastAPI", "PostgreSQL"],
      gradient: "from-cyan-600 to-blue-600",
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-linear-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
            {t("projects.title")}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">{t("projects.subtitle")}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
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
      className="relative group cursor-pointer"
    >
      <motion.div
        className={`absolute -inset-1 bg-linear-to-r ${project.gradient} rounded-3xl opacity-0 group-hover:opacity-60 transition duration-500`}
        animate={isHovered ? { scale: 1.05 } : { scale: 1 }}
      />

      {/* Card */}
      <div className="relative bg-card border-2 border-border rounded-3xl overflow-hidden">
        {/* Shine effect on hover */}
        <motion.div
          className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent"
          initial={{ x: "-100%" }}
          animate={isHovered ? { x: "100%" } : { x: "-100%" }}
          transition={{ duration: 0.6 }}
        />

        {/* Top gradient bar */}
        <div className={`h-2 bg-linear-to-r ${project.gradient}`} />

        {/* Content */}
        <div className="p-6 relative">
          {/* Corner sparkle */}
          <motion.div
            className="absolute top-4 right-4"
            animate={isHovered ? { rotate: 360, scale: 1.2 } : { rotate: 0, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Sparkles className="w-6 h-6 text-cyan-500" />
          </motion.div>

          <div className="space-y-4">
            <h3 className="text-2xl font-bold pr-10 leading-tight">
              <span className={`bg-linear-to-r ${project.gradient} bg-clip-text text-transparent`}>
                {project.title}
              </span>
            </h3>

            <p className="text-muted-foreground leading-relaxed min-h-16">{project.description}</p>

            {/* Tech stack with pills */}
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

            {/* Action buttons */}
            <motion.div
              className="flex gap-2 pt-2"
              initial={{ opacity: 0 }}
              animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
            >
              <Button
                size="sm"
                variant="outline"
                className="gap-2 border-cyan-500/50 hover:bg-cyan-500/10 bg-transparent"
              >
                <Github className="w-4 h-4" />
                Code
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="gap-2 border-blue-500/50 hover:bg-blue-500/10 bg-transparent"
              >
                <ExternalLink className="w-4 h-4" />
                Demo
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Bottom decoration */}
        <div className={`absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t ${project.gradient} opacity-5`} />
      </div>
    </motion.div>
  )
}

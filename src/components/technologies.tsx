"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { useLanguage } from "../contexts/language-context"

export function Technologies() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })
  const { t } = useLanguage()

  const techIcons = [
    { name: "HTML5", color: "#E34F26", icon: "https://cdn.simpleicons.org/html5/E34F26" },
    { name: "CSS3", color: "#1572B6", icon: "https://cdn.simpleicons.org/css/1572B6" },
    { name: "JavaScript", color: "#F7DF1E", icon: "https://cdn.simpleicons.org/javascript/F7DF1E" },
    { name: "TypeScript", color: "#3178C6", icon: "https://cdn.simpleicons.org/typescript/3178C6" },
    { name: "React", color: "#61DAFB", icon: "https://cdn.simpleicons.org/react/61DAFB" },
    { name: "Next.js", color: "#000000", icon: "https://cdn.simpleicons.org/nextdotjs/FFFFFF" },
    { name: "Vite", color: "#646CFF", icon: "https://cdn.simpleicons.org/vite/646CFF" },
    { name: "Tailwind", color: "#38BDF8", icon: "https://cdn.simpleicons.org/tailwindcss/38BDF8" },
    { name: "Node.js", color: "#339933", icon: "https://cdn.simpleicons.org/nodedotjs/339933" },
    { name: "PHP", color: "#FFFFFF", icon: "https://cdn.simpleicons.org/php/FFFFFF" },
    { name: "FastAPI", color: "#009688", icon: "https://cdn.simpleicons.org/fastapi/009688" },
    { name: "Python", color: "#3776AB", icon: "https://cdn.simpleicons.org/python/3776AB" },
    { name: "Docker", color: "#2496ED", icon: "https://cdn.simpleicons.org/docker/2496ED" },
    { name: "Git", color: "#F05032", icon: "https://cdn.simpleicons.org/git/F05032" },
    { name: "MongoDB", color: "#47A248", icon: "https://cdn.simpleicons.org/mongodb/47A248" },
    { name: "PostgreSQL", color: "#4169E1", icon: "https://cdn.simpleicons.org/postgresql/4169E1" },
    { name: "MySQL", color: "#4479A1", icon: "https://cdn.simpleicons.org/MySQL/4479A1" },
    { name: "Vercel", color: "#000000", icon: "https://cdn.simpleicons.org/vercel/FFFFFF" },
    { name: "Figma", color: "#F24E1E", icon: "https://cdn.simpleicons.org/figma/F24E1E" },
    { name: "Github", color: "#181717", icon: "https://cdn.simpleicons.org/github/FFFFFF" },
    { name: "Wordpress", color: "#21759B", icon: "https://cdn.simpleicons.org/wordpress/21759B" },
    { name: "Elementor", color: "#92003B", icon: "https://cdn.simpleicons.org/elementor/92003B" },
    { name: "Cursor", color: "#00000", icon: "https://cdn.simpleicons.org/cursor/FFFFFF" },
    { name: "Apache NetBeans", color: "#1B6AC6", icon: "https://cdn.simpleicons.org/apachenetbeanside/1B6AC6" },
    { name: "Cisco", color: "#1BA0D7", icon: "https://cdn.simpleicons.org/cisco/1BA0D7" },
    { name: "Google Gemini", color: "#8E75B2", icon: "https://cdn.simpleicons.org/googlegemini/8E75B2" },
    { name: "Perplexity", color: "#1FB8CD", icon: "https://cdn.simpleicons.org/perplexity/1FB8CD" },
    { name: "Claude", color: "#D97757", icon: "https://cdn.simpleicons.org/claude/D97757" },
    { name: "v0", color: "#000000", icon: "https://cdn.simpleicons.org/v0/FFFFFF" },
    { name: "Google Cloud", color: "#4285F4", icon: "https://cdn.simpleicons.org/googlecloud/4285F4" },
    { name: "XAMPP", color: "#FB7A24", icon: "https://cdn.simpleicons.org/xampp/FB7A24" },
    { name: "Netlify", color: "#00C7B7", icon: "https://cdn.simpleicons.org/netlify/00C7B7" },
    { name: "Hostinger", color: "#673DE6", icon: "https://cdn.simpleicons.org/hostinger/673DE6" },
    { name: "Github Pages", color: "#222222", icon: "https://cdn.simpleicons.org/githubpages/FFFFFF" },
    { name: "Lighthouse", color: "#F44B21", icon: "https://cdn.simpleicons.org/lighthouse/F44B21" },
  ]

  const trackOne = [...techIcons, ...techIcons]
  const trackTwo = [...techIcons.slice().reverse(), ...techIcons.slice().reverse()]
  // Ajuste rápido de velocidade: menor = mais rápido, maior = mais lento
  const trackSpeedOne = 26
  const trackSpeedTwo = 32

  return (
    <section id="technologies" ref={ref} className="py-20 md:py-32 relative bg-muted/30 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-linear-to-br from-cyan-500/5 via-transparent to-blue-500/5" />
        <motion.div
          className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.1),transparent_50%)]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
        />
      </div>

      <div className="w-full max-w-none relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 px-2 sm:px-4 lg:px-6 pb-2"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight bg-linear-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
            {t("technologies.title")}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">{t("technologies.subtitle")}</p>
        </motion.div>

        <div className="relative w-full space-y-6 px-0">
          <div className="absolute inset-0 bg-linear-to-b from-cyan-500/5 via-transparent to-blue-500/5 blur-3xl pointer-events-none" />

          <div className="overflow-hidden bg-card/70 backdrop-blur-xl">
            <div className="relative h-32 md:h-36">
              <div className="absolute inset-y-0 left-0 w-16 bg-linear-to-r from-background to-transparent pointer-events-none" />
              <div className="absolute inset-y-0 right-0 w-16 bg-linear-to-l from-background to-transparent pointer-events-none" />

              <motion.div
                className="absolute inset-0 flex items-center"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 0.1, duration: 0.6 }}
              >
                <motion.div
                  className="flex items-center gap-6 min-w-max"
                  animate={{ x: ["0%", "-50%"] }}
                  transition={{ duration: trackSpeedOne, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                >
                  {trackOne.map((tech, i) => (
                    <motion.div
                      key={`track1-${i}`}
                      whileHover={{ scale: 1.08, y: -4, boxShadow: "0 10px 35px rgba(6,182,212,0.25)" }}
                      className="flex items-center gap-3 px-4 py-2 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md"
                    >
                      <div
                        className="h-10 w-10 rounded-2xl overflow-hidden bg-white/5 border border-white/10 flex items-center justify-center"
                        style={{ boxShadow: `0 10px 30px ${tech.color}33` }}
                      >
                        <img src={tech.icon} alt={tech.name} className="h-8 w-8 object-contain" />
                      </div>
                      <span className="text-sm font-semibold text-white/90">{tech.name}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </div>
          </div>

          <div className="overflow-hidden bg-card/70 backdrop-blur-xl">
            <div className="relative h-32 md:h-36">
              <div className="absolute inset-y-0 left-0 w-16 bg-linear-to-r from-background to-transparent pointer-events-none" />
              <div className="absolute inset-y-0 right-0 w-16 bg-linear-to-l from-background to-transparent pointer-events-none" />

              <motion.div
                className="absolute inset-0 flex items-center"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <motion.div
                  className="flex items-center gap-6 min-w-max"
                  animate={{ x: ["-50%", "0%"] }}
                  transition={{ duration: trackSpeedTwo, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                >
                  {trackTwo.map((tech, i) => (
                    <motion.div
                      key={`track2-${i}`}
                      whileHover={{ scale: 1.08, y: -4, boxShadow: "0 10px 35px rgba(59,130,246,0.25)" }}
                      className="flex items-center gap-3 px-4 py-2 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md"
                    >
                      <div
                        className="h-10 w-10 rounded-2xl overflow-hidden bg-white/5 border border-white/10 flex items-center justify-center"
                        style={{ boxShadow: `0 10px 30px ${tech.color}33` }}
                      >
                        <img src={tech.icon} alt={tech.name} className="h-8 w-8 object-contain" />
                      </div>
                      <span className="text-sm font-semibold text-white/90">{tech.name}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

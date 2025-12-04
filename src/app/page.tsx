import { motion, useScroll, useTransform } from "framer-motion"
import { Navigation } from "../components/navigation"
import { Hero } from "../components/hero"
import { Education } from "../components/education"
import { Projects } from "../components/projects"
import { Courses } from "../components/courses"
import { Technologies } from "../components/technologies"
import { Footer } from "../components/footer"
import { LanguageProvider } from "../contexts/language-context"
import { ThemeProvider } from "../contexts/theme-context"

export default function Portfolio() {
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])

  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="relative min-h-screen">
          <Navigation />

          <motion.div className="fixed inset-0 pointer-events-none z-0" style={{ opacity }}>
            <div className="absolute inset-0 bg-linear-to-br from-cyan-500/5 via-transparent to-blue-500/5" />
          </motion.div>

          <main className="relative z-10">
            <Hero />
            <Education />
            <Projects />
            <Courses />
            <Technologies />
            <Footer />
          </main>

          <motion.div
            className="fixed top-0 left-0 right-0 h-1 bg-linear-to-r from-cyan-500 via-blue-500 to-cyan-500 origin-left z-50"
            style={{ scaleX: scrollYProgress }}
          />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  )
}

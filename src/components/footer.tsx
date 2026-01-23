"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Code2, Sparkles, ArrowUp, Globe, Instagram } from "lucide-react"
import { Button } from "../components/ui/button"
import { useLanguage } from "../contexts/language-context"

export function Footer() {
  const { t } = useLanguage()

  const socialLinks = [
    { icon: Github, href: "https://github.com/GabrieIPujol", label: "GitHub", color: "group-hover:text-white" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/gabriel-pujol-073577300/", label: "LinkedIn", color: "group-hover:text-cyan-600" },
    { icon: Instagram, href: "https://www.instagram.com/biel_pujol", label: "Instagram", color: "group-hover:text-purple-400" },
    { icon: Mail, href: "mailto:gabriel.pagvelosa@gmail.com", label: "Email", color: "group-hover:text-blue-400" },
  ]

  const quickLinks = [
    { name: t("nav.education") || "Education", href: "#education" },
    { name: t("nav.projects") || "Projects", href: "#projects" },
    { name: t("nav.courses") || "Courses", href: "#courses" },
    { name: t("nav.technologies") || "Technologies", href: "#technologies" },
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="relative overflow-hidden bg-linear-to-b from-background via-background to-cyan-950/10 dark:to-cyan-950/20">
      <div className="absolute inset-0 opacity-30">
        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"
          animate={{ x: [0, 100, 0], y: [0, 50, 0] }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
          animate={{ x: [0, -100, 0], y: [0, -50, 0] }}
          transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <div className="flex items-center gap-2">
              <div className="relative">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                >
                  <Code2 className="w-8 h-8 text-cyan-500" />
                </motion.div>
              </div>
              <h3 className="text-2xl font-bold bg-linear-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
                Portfolio
              </h3>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs">
              {t("footer.description") || "Building innovative solutions with cutting-edge technologies and creative design."}
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Globe className="w-4 h-4" />
              <span>{t("footer.available") || "Available worldwide"}</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-cyan-500" />
              {t("footer.quickLinks") || "Quick Links"}
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <motion.li key={index} whileHover={{ x: 5 }}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-cyan-500 transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 h-px bg-cyan-500 group-hover:w-4 transition-all duration-300" />
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold mb-4">
              {t("footer.connect") || "Connect"}
            </h4>
            <div className="grid grid-cols-2 gap-3">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"          
                  rel="noopener noreferrer" 
                  className="group relative p-4 rounded-xl border border-border hover:border-cyan-500/50 bg-card/50 backdrop-blur-sm transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="absolute inset-0 bg-linear-to-br from-cyan-500/10 to-blue-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <link.icon
                    className={`w-6 h-6 text-muted-foreground ${link.color} transition-colors relative z-10`}
                  />
                  <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors mt-2 block relative z-10">
                    {link.label}
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="relative h-px bg-linear-to-r from-transparent via-border to-transparent mb-8">
          <motion.div
            className="absolute inset-0 bg-linear-to-r from-transparent via-cyan-500 to-transparent"
            animate={{ x: ["-100%", "100%"] }}
            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          />
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Portfolio. {t("footer.rights") || "All rights reserved."}
          </p>
          <div className="flex items-center gap-4">
            <span className="text-xs text-muted-foreground">
               {t("footer.madeBy") || "Made by"} Gabriel Pujol Amaral Gurgel Velosa
            </span>
            <Button
              aria-label="Scroll to top"
              variant="outline"
              size="icon"
              onClick={scrollToTop}
              className="rounded-full border-cyan-500/50 hover:bg-cyan-500/10 hover:border-cyan-500 group bg-transparent"
            >
              <ArrowUp className="w-4 h-4 group-hover:text-cyan-500" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  )
}
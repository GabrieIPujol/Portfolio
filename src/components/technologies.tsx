"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Code2, Database, Cloud, Cpu } from "lucide-react"
import { useLanguage } from "../contexts/language-context"

export function Technologies() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })
  const { t } = useLanguage()
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const techCategories = [
    {
      icon: Code2,
      category: t("technologies.frontend.category"),
      color: "from-cyan-500 to-blue-500",
      items: t("technologies.frontend.items")
        .split(",")
        .map((s) => s.trim()),
    },
    {
      icon: Database,
      category: t("technologies.backend.category"),
      color: "from-blue-500 to-cyan-600",
      items: t("technologies.backend.items")
        .split(",")
        .map((s) => s.trim()),
    },
    {
      icon: Cloud,
      category: t("technologies.database.category"),
      color: "from-cyan-600 to-blue-600",
      items: t("technologies.database.items")
        .split(",")
        .map((s) => s.trim()),
    },
    {
      icon: Cpu,
      category: t("technologies.tools.category"),
      color: "from-blue-600 to-cyan-700",
      items: t("technologies.tools.items")
        .split(",")
        .map((s) => s.trim()),
    },
  ]

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

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-linear-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
            {t("technologies.title")}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">{t("technologies.subtitle")}</p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {techCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative"
            >
              <motion.div
                className={`absolute -inset-1 bg-linear-to-r ${category.color} rounded-3xl opacity-0 group-hover:opacity-50 transition duration-500`}
                animate={hoveredIndex === index ? { rotate: [0, 5, -5, 0] } : {}}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              />

              <div className="relative bg-card/80 border-2 border-border/50 rounded-3xl overflow-hidden">
                {/* Animated gradient overlay */}
                <motion.div
                  className={`absolute inset-0 bg-linear-to-br ${category.color} opacity-0 group-hover:opacity-10`}
                  animate={
                    hoveredIndex === index
                      ? {
                          background: [
                            `linear-gradient(0deg, var(--tw-gradient-stops))`,
                            `linear-gradient(360deg, var(--tw-gradient-stops))`,
                          ],
                        }
                      : {}
                  }
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                />

                {/* Scan line effect */}
                {hoveredIndex === index && (
                  <motion.div
                    className={`absolute left-0 right-0 h-px bg-linear-to-r ${category.color}`}
                    initial={{ top: 0 }}
                    animate={{ top: "100%" }}
                    transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  />
                )}

                {/* Content */}
                <div className="p-8 relative z-10">
                  {/* Header */}
                  <div className="flex items-center gap-4 mb-8">
                    <motion.div
                      animate={
                        hoveredIndex === index
                          ? {
                              scale: [1, 1.2, 1],
                              rotate: [0, 180, 360],
                            }
                          : {}
                      }
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                      className={`relative p-4 rounded-2xl bg-linear-to-br ${category.color}`}
                    >
                      <category.icon className="w-7 h-7 text-white relative z-10" />

                      {/* Pulsing ring */}
                      <motion.div
                        className={`absolute inset-0 rounded-2xl bg-linear-to-br ${category.color}`}
                        animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
                        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                      />
                    </motion.div>

                    <h3 className="text-2xl font-bold">
                      <span className={`bg-linear-to-r ${category.color} bg-clip-text text-transparent`}>
                        {category.category}
                      </span>
                    </h3>
                  </div>

                  {/* Tech items in flowing layout */}
                  <div className="flex flex-wrap gap-3">
                    {category.items.map((item, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 + i * 0.05 }}
                        whileHover={{
                          scale: 1.15,
                          y: -5,
                          boxShadow: "0 10px 30px rgba(6, 182, 212, 0.3)",
                        }}
                        className="relative group/item"
                      >
                        {/* Chip background with gradient border */}
                        <div
                          className={`relative px-4 py-2 bg-card border-2 border-border rounded-xl font-medium text-sm cursor-default overflow-hidden`}
                        >
                          {/* Animated gradient border on hover */}
                          <motion.div
                            className={`absolute inset-0 bg-linear-to-r ${category.color} opacity-0 group-hover/item:opacity-20`}
                            whileHover={{ opacity: 0.2 }}
                          />

                          {/* Text */}
                          <span className="relative z-10">{item}</span>

                          {/* Corner accent */}
                          <div
                            className={`absolute top-0 right-0 w-2 h-2 bg-linear-to-br ${category.color} opacity-0 group-hover/item:opacity-100 transition-opacity`}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Bottom accent line */}
                <div className={`h-1 bg-linear-to-r ${category.color} opacity-50`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

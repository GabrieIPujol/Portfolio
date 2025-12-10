import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { GraduationCap, BookOpen, School } from "lucide-react"
import { useLanguage } from "../contexts/language-context"

export function Education() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.3 })
  const { t } = useLanguage()

  const educationData = [
    {
      icon: School,
      level: t("education.elementary.level"),
      institution: t("education.elementary.institution"),
      period: t("education.elementary.period"),
      description: t("education.elementary.description"),
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: BookOpen,
      level: t("education.highschool.level"),
      institution: t("education.highschool.institution"),
      period: t("education.highschool.period"),
      description: t("education.highschool.description"),
      color: "from-cyan-500 to-blue-500",
    },
    {
      icon: GraduationCap,
      level: t("education.university.level"),
      institution: t("education.university.institution"),
      period: t("education.university.period"),
      description: t("education.university.description"),
      color: "from-blue-500 to-cyan-600",
    },
  ]

  return (
    <section id="education" ref={ref} className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight bg-linear-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
            {t("education.title")}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">{t("education.subtitle")}</p>
        </motion.div>

        <div className="max-w-5xl mx-auto relative">
          {/* Vertical animated line */}
          <motion.div
            className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-cyan-500 via-blue-500 to-cyan-500"
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            style={{ transformOrigin: "top" }}
          />

          <div className="space-y-16">
            {educationData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                transition={{ duration: 0.8, delay: index * 0.3 }}
                className={`relative flex ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-8`}
              >
                {/* Timeline node */}
                <motion.div
                  className="absolute left-8 md:left-1/2 w-4 h-4 -translate-x-1/2 z-20"
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: [0, 1.5, 1] } : { scale: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.3 + 0.5 }}
                >
                  <div
                    className={`w-full h-full rounded-full bg-linear-to-br ${item.color} shadow-lg shadow-cyan-500/50`}
                  />
                  <motion.div
                    className={`absolute inset-0 rounded-full bg-linear-to-br ${item.color}`}
                    animate={{ scale: [1, 1.5, 1], opacity: [1, 0, 1] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  />
                </motion.div>

                <div className="w-full md:w-[calc(50%-2rem)] ml-16 md:ml-0">
                  <motion.div className="group relative" whileHover={{ scale: 1.02 }}>
                    <div
                      className={`absolute -inset-0.5 bg-linear-to-r ${item.color} rounded-2xl opacity-30 group-hover:opacity-70 transition duration-500`}
                    />

                    <div className="relative bg-card border border-border rounded-2xl p-6 md:p-8">
                      <div
                        className={`absolute top-0 right-0 w-20 h-20 bg-linear-to-br ${item.color} opacity-10 rounded-bl-full`}
                      />

                      <div className="flex items-start gap-4 relative z-10">
                        <motion.div
                          whileHover={{ rotate: 360, scale: 1.2 }}
                          transition={{ duration: 0.6 }}
                          className={`p-4 rounded-xl bg-linear-to-br ${item.color} shadow-lg`}
                        >
                          <item.icon className="w-6 h-6 text-white" />
                        </motion.div>

                        <div className="flex-1">
                          <motion.h3
                            className="text-2xl font-bold mb-2 bg-linear-to-r from-foreground to-muted-foreground bg-clip-text"
                            whileHover={{ scale: 1.02 }}
                          >
                            {item.level}
                          </motion.h3>
                          <p className="text-lg font-semibold text-cyan-500 mb-1">{item.institution}</p>
                          <p className="text-sm text-muted-foreground mb-4 font-mono">{item.period}</p>
                          <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                        </div>
                      </div>

                      {/* Animated lines decoration */}
                      <div className="absolute bottom-4 right-4 space-y-1 opacity-20">
                        {[...Array(3)].map((_, i) => (
                          <motion.div
                            key={i}
                            className={`h-0.5 bg-linear-to-r ${item.color}`}
                            initial={{ width: 0 }}
                            whileHover={{ width: `${(i + 1) * 20}px` }}
                            transition={{ delay: i * 0.1 }}
                          />
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

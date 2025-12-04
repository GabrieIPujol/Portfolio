import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Award, Calendar, CheckCircle2 } from 'lucide-react'
import { useLanguage } from '../contexts/language-context'

export function Courses() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })
  const { t } = useLanguage()

  const courses = [
    {
      title: t("courses.course1.title"),
      institution: t("courses.course1.institution"),
      date: t("courses.course1.date"),
      skills: t("courses.course1.skills"),
      color: "from-cyan-500 to-blue-500",
    },
    {
      title: t("courses.course2.title"),
      institution: t("courses.course2.institution"),
      date: t("courses.course2.date"),
      skills: t("courses.course2.skills"),
      color: "from-blue-500 to-cyan-600",
    },
    {
      title: t("courses.course3.title"),
      institution: t("courses.course3.institution"),
      date: t("courses.course3.date"),
      skills: t("courses.course3.skills"),
      color: "from-cyan-600 to-blue-600",
    },
  ]

  return (
    <section id="courses" ref={ref} className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="50" cy="50" r="2" fill="currentColor" className="text-cyan-500" />
              <line x1="50" y1="0" x2="50" y2="50" stroke="currentColor" strokeWidth="1" className="text-cyan-500" />
              <line x1="0" y1="50" x2="50" y2="50" stroke="currentColor" strokeWidth="1" className="text-cyan-500" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-linear-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
            {t("courses.title")}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">{t("courses.subtitle")}</p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
              animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : { opacity: 0, scale: 0.5, rotate: -10 }}
              transition={{ duration: 0.6, delay: index * 0.15, type: "spring" }}
              whileHover={{ scale: 1.05, rotate: 2 }}
              className="relative group"
            >
              {/* Hexagonal shape using clip-path */}
              <div
                className="relative"
                style={{
                  clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                  aspectRatio: "1",
                }}
              >
                {/* Animated border */}
                <motion.div
                  className={`absolute inset-0 bg-linear-to-br ${course.color} opacity-50`}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                />

                {/* Inner hexagon */}
                <div
                  className="absolute inset-1 bg-card"
                  style={{
                    clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                  }}
                >
                  <div className="h-full flex flex-col items-center justify-center p-8 text-center">
                    {/* Icon */}
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className={`mb-4 p-4 rounded-full bg-linear-to-br ${course.color}`}
                    >
                      <Award className="w-8 h-8 text-white" />
                    </motion.div>

                    {/* Title */}
                    <h3 className="text-lg font-bold mb-2 leading-tight">
                      <span className={`bg-linear-to-r ${course.color} bg-clip-text text-transparent`}>
                        {course.title}
                      </span>
                    </h3>

                    {/* Institution */}
                    <p className="text-sm font-semibold text-muted-foreground mb-2">{course.institution}</p>

                    {/* Date */}
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-3">
                      <Calendar className="w-3 h-3" />
                      <span>{course.date}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Skills list below hexagon */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileHover={{ opacity: 1, y: 0 }}
                className="mt-6 space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                {course.skills.split(",").map((skill: any, i: any) => (
                  <motion.div
                    key={i}
                    initial={{ x: -20, opacity: 0 }}
                    whileHover={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-2 text-sm"
                  >
                    <CheckCircle2 className="w-4 h-4 text-cyan-500 shrink-0" />
                    <span className="text-muted-foreground">{skill.trim()}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

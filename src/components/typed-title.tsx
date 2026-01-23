"use client"

import { useEffect, useState } from "react"

type TypedTitleProps = {
  words: string[]
  className?: string
}

export function TypedTitle({ words, className = "" }: TypedTitleProps) {
  const [wordIndex, setWordIndex] = useState(0)
  const [subIndex, setSubIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [mistakeMode, setMistakeMode] = useState<"none" | "typingWrong" | "deletingWrong">("none")
  const [wrongText, setWrongText] = useState("")
  const [wrongIndex, setWrongIndex] = useState(0)
  const [mistakeDone, setMistakeDone] = useState(false)

  useEffect(() => {
    if (!words || words.length === 0) return

    const current = words[wordIndex]

    if (!isDeleting && mistakeMode === "none" && subIndex === current.length) {
      const t = setTimeout(() => setIsDeleting(true), 3000)
      return () => clearTimeout(t)
    }

    if (isDeleting && subIndex === 0) {
      setIsDeleting(false)
      setWordIndex((w) => (w + 1) % words.length)
      setMistakeDone(false)
      return
    }

    if (mistakeMode === "typingWrong") {
      if (wrongIndex === wrongText.length) {
        const t = setTimeout(() => setMistakeMode("deletingWrong"), 600)
        return () => clearTimeout(t)
      }

      const speedWrong = 120
      const tWrong = setTimeout(() => setWrongIndex((w) => w + 1), speedWrong)
      return () => clearTimeout(tWrong)
    }

    if (mistakeMode === "deletingWrong") {
      if (wrongIndex === 0) {
        setMistakeMode("none")
        setMistakeDone(true)
        setSubIndex((s) => s + 1)
        return
      }

      const speedDelWrong = 50
      const tDel = setTimeout(() => setWrongIndex((w) => w - 1), speedDelWrong)
      return () => clearTimeout(tDel)
    }

    if (!isDeleting && mistakeMode === "none" && !mistakeDone) {
      const triggerWord = "Developer"
      const startIdx = current.indexOf(triggerWord)
      if (startIdx !== -1) {
        const triggerAt = startIdx + 2 
        if (subIndex === triggerAt) {
          if (Math.random() < 0.25) {
            const len = Math.random() < 0.5 ? 2 : 4
            const letters = "abcdefghijklmnopqrstuvwxyz"
            let wrong = ""
            for (let i = 0; i < len; i++) {
              wrong += letters[Math.floor(Math.random() * letters.length)]
            }
            setWrongText(wrong)
            setWrongIndex(0)
            setMistakeMode("typingWrong")
            return
          }
        }
      }
    }

    const speed = isDeleting ? 60 : 140
    const t = setTimeout(() => {
      setSubIndex((s) => s + (isDeleting ? -1 : 1))
    }, speed)

    return () => clearTimeout(t)
  }, [subIndex, isDeleting, wordIndex, words, mistakeMode, wrongIndex, wrongText, mistakeDone])

  return (
    <span className={className} aria-live="polite">
      {words[wordIndex].slice(0, subIndex)}
      {mistakeMode !== "none" && wrongText.slice(0, wrongIndex)}
      <span aria-hidden className="typed-cursor" />
    </span>
  )
}

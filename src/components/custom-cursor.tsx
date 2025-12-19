import { useEffect, useState, useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { createPortal } from 'react-dom'
import { useLanguage } from '../contexts/language-context' // Verifique se o caminho está correto

interface CustomCursorProps {
  enabled?: boolean
}

export function CustomCursor({ enabled = true }: CustomCursorProps) {
  const [isHovering, setIsHovering] = useState(false)
  const [hoverText, setHoverText] = useState('')
  const [mounted, setMounted] = useState(false)
  const [isOverNavOrFooter, setIsOverNavOrFooter] = useState(false)
  const styleRef = useRef<HTMLStyleElement | null>(null)

  // 1. Acessamos o contexto de linguagem
  const { language } = useLanguage()

  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)

  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 }
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)

  useEffect(() => {
    setMounted(true)
    if (!enabled) return

    if (!styleRef.current) {
      styleRef.current = document.createElement('style')
      styleRef.current.textContent = '* { cursor: none !important; }'
      document.head.appendChild(styleRef.current)
    }

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 20)
      cursorY.set(e.clientY - 20)

      const target = e.target as HTMLElement
      const isOverNav = target.closest('nav') !== null
      const isOverFooter = target.closest('footer') !== null
      setIsOverNavOrFooter(isOverNav || isOverFooter)
    }

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement

      if (
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.closest('button') ||
        target.closest('a') ||
        target.classList.contains('cursor-hover')
      ) {
        setIsHovering(true)
        // Pegamos o texto do atributo, se existir
        const text = target.getAttribute('data-cursor-text')
        setHoverText(text || '') 
      } else {
        setIsHovering(false)
        setHoverText('')
      }
    }

    window.addEventListener('mousemove', moveCursor)
    window.addEventListener('mouseover', handleMouseOver)

    return () => {
      window.removeEventListener('mousemove', moveCursor)
      window.removeEventListener('mouseover', handleMouseOver)
      if (styleRef.current && document.head.contains(styleRef.current)) {
        document.head.removeChild(styleRef.current)
      }
    }
  }, [enabled, cursorX, cursorY])

  if (!mounted || !enabled) return null

  // 2. Lógica de tradução: 
  // Se o elemento não tiver um texto específico no 'data-cursor-text', 
  // ele decide entre VER ou VIEW baseado no idioma ativo.
  const finalDisplayText = hoverText || (language === 'pt' ? 'VIEW' : 'VER')

  return createPortal(
    <motion.div
      className="fixed top-0 left-0 pointer-events-none"
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
        zIndex: 999999,
        width: 40,
        height: 40,
        mixBlendMode: isOverNavOrFooter ? "normal" : "difference",
      }}
    >
      <motion.div
        className="w-full h-full rounded-full border-2 flex items-center justify-center"
        animate={{
          scale: isHovering ? 1 : 0.8,
          opacity: 1, 
          borderColor: isHovering 
            ? (isOverNavOrFooter ? "#B03215" : "#06b6d4") 
            : (isOverNavOrFooter ? "#06b6d4" : "#ffffff"),

          backgroundColor: isHovering 
            ? (isOverNavOrFooter ? "rgba(176, 50, 21, 0.25)" : "rgba(6, 182, 212, 0.25)") 
            : (isOverNavOrFooter ? "rgba(6, 182, 212, 0.1)" : "transparent"),
        }}
        transition={{ duration: 0.2 }}
      >
        {isHovering && (
          <motion.span
            key={language} // 3. A key força o React a remontar o span ao trocar o idioma, garantindo a animação
            initial={{ opacity: 0, scale: 0.8}}
            animate={{ opacity: 1, scale: 1 }}
            className="text-[8px] font-bold"
            style={{
              color: isOverNavOrFooter ? "#FFF0F0" : "#F0F0FF"
            }}
          >
            {finalDisplayText}
          </motion.span>
        )}
      </motion.div>
    </motion.div>,
    document.body
  )
}
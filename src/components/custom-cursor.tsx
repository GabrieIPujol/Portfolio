import { useEffect, useState, useRef } from 'react'

import { motion, useMotionValue, useSpring } from 'framer-motion'



interface CustomCursorProps {

  enabled?: boolean

}



export function CustomCursor({ enabled = true }: CustomCursorProps) {

  const [isHovering, setIsHovering] = useState(false)

  const [hoverText, setHoverText] = useState('')

  const [mounted, setMounted] = useState(false)

  const [isOverNavOrFooter, setIsOverNavOrFooter] = useState(false)

  const styleRef = useRef<HTMLStyleElement | null>(null)



  const cursorX = useMotionValue(-100)

  const cursorY = useMotionValue(-100)



  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 }

  const cursorXSpring = useSpring(cursorX, springConfig)

  const cursorYSpring = useSpring(cursorY, springConfig)



  useEffect(() => {

    setMounted(true)

    if (!enabled) return



    // Add cursor: none style to document

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

        const text = target.getAttribute('data-cursor-text') || 'VIEW'

        setHoverText(text)

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



  return (

    <motion.div

      className="fixed top-0 left-0 w-10 h-10 pointer-events-none mix-blend-difference"

      style={{

        x: cursorXSpring,

        y: cursorYSpring,

        zIndex: 999999,

      }}

      animate={{

        // when over nav/footer, keep visible but slightly smaller and more translucent

        opacity: isOverNavOrFooter ? 0.75 : 1,

        scale: isOverNavOrFooter ? 0.8 : 1,

      }}

      transition={{ duration: 0.18 }}

    >

      <motion.div

        className="w-full h-full rounded-full border-2 flex items-center justify-center"

        animate={{

          // combine hover and nav/footer states

          scale: isHovering ? 1 : isOverNavOrFooter ? 0.8 : 1,

          borderColor: isHovering ? '#06b6d4' : isOverNavOrFooter ? 'rgba(255,255,255,0.6)' : '#ffffff',

          backgroundColor: isHovering ? 'rgba(6,182,212,0.2)' : isOverNavOrFooter ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.7)',

        }}

        transition={{ duration: 0.18 }}

      >

        {isHovering && hoverText && (

          <motion.span

            initial={{ opacity: 0, scale: 0 }}

            animate={{ opacity: 1, scale: 1 }}

            className="text-[8px] font-bold text-white"

          >

            {hoverText}

          </motion.span>

        )}

      </motion.div>

    </motion.div>

  )

}
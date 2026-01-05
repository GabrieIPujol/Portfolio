"use client"

import { motion } from "framer-motion"

export function WhatsAppButton() {
  return (
    /* Posicionamento: mais colado no mobile (bottom-4 left-4) */
    <div className="fixed bottom-4 left-4 md:bottom-10 md:left-10 z-9999">
      <motion.a
        href="https://wa.me/5511957299485" // Substitua pelo seu número
        target="_blank"
        rel="noopener noreferrer"
        /* MOBILE: h-10 w-10 (tamanho reduzido)
           DESKTOP (md): h-[45px] w-[45px] + efeito hover
        */
        className="group relative flex h-10 w-10 items-center justify-start overflow-hidden rounded-full bg-[#00d757] shadow-lg transition-all duration-300 md:h-[45px] md:w-[45px] md:hover:w-[150px] md:hover:rounded-[40px] active:scale-90"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        {/* Lado do Ícone */}
        <div className="flex w-full items-center justify-center transition-all duration-300 md:group-hover:w-[30%] md:group-hover:pl-2">
          {/* SVG menor no mobile (w-5) e padrão no desktop (md:w-6) */}
          <svg className="w-5 md:w-6 fill-white" viewBox="0 0 16 16">
            <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
          </svg>
        </div>

        {/* Texto: invisível no mobile, surge apenas no hover do desktop */}
        <div className="absolute right-0 w-0 opacity-0 transition-all duration-300 md:group-hover:w-[70%] md:group-hover:pr-4 md:group-hover:opacity-100 text-white text-base font-semibold whitespace-nowrap">
          Whatsapp
        </div>
      </motion.a>
    </div>
  )
}
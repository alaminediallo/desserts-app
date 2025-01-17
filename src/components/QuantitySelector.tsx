import { PropsWithChildren } from "react";
import { motion } from "motion/react";

export function QuantitySelector({ children, onClick }: PropsWithChildren<{
  onClick: () => void
}>) {
  return (
    <motion.button 
    whileTap={{ scale: 1.6 }}
    onClick={onClick}
            className="group flex size-[18px] items-center justify-center rounded-full border border-white outline-0 transition-colors hover:bg-white focus-visible:bg-white">
      {children}
    </motion.button>
  )
}

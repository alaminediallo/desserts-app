import { motion } from "motion/react"
import { PropsWithChildren } from "react"

export function QuantitySelector({
                                   children,
                                   onClick,
                                 }: PropsWithChildren<{
  onClick: () => void
}>) {
  return (
    <motion.button
      whileHover={{ scale: 1.3 }}
      whileTap={{ scale: 0.8 }}
      onClick={onClick}
      className="group flex size-[18px] items-center justify-center rounded-full border border-white outline-0 transition-colors hover:bg-white focus-visible:bg-white"
    >
      {children}
    </motion.button>
  )
}

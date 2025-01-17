import { CartSummary } from "@/components/CartSummary.tsx"
import { DessertList } from "@/components/DessertList.tsx"
import { motion } from "motion/react"

function App() {
  return (
    <main
      className="m-6 flex flex-col items-center justify-center gap-8 tablet:m-10 lg:flex-row lg:items-start desktop:mx-auto desktop:max-w-[1216px]">
      <section className="shrink-0">
        <motion.h1
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="preset-1 mb-8 text-rose-900"
        >
          Desserts
        </motion.h1>
        <DessertList />
      </section>

      <section className="sticky top-6 w-full rounded-xl bg-white p-6 tablet:max-w-[688px] lg:max-w-[384px]">
        <CartSummary />
      </section>
    </main>
  )
}

export default App

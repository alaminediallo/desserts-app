import { motion } from "motion/react"
import NumberFlow from "@number-flow/react"
import { useDessertsStore } from "../store/useDessertsStore.ts"
import { DessertType } from "../type/dessertType.ts"

export function CartItem({ id, name, price, quantity }: DessertType) {
  const remove = useDessertsStore((state) => state.remove)

  return (
    <motion.div
      layout
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.2 }}
      className="flex items-center justify-between"
    >
      <div className="flex flex-col gap-2">
        <div className="preset-4-bold text-rose-900">{name}</div>

        <div className="flex gap-2">
          <p className="preset-4-bold w-[21px] text-red">
            <NumberFlow value={quantity} />x
          </p>

          <p className="preset-4 text-rose-500">@
            <NumberFlow
              locales="en-US"
              format={{ style: "currency", currency: "USD" }}
              value={price} />
          </p>

          <p className="preset-4-bold text-rose-500">
            <NumberFlow
              locales="en-US"
              format={{ style: "currency", currency: "USD" }}
              value={price * quantity} />
          </p>
        </div>
      </div>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => remove(id)}
        className="group flex size-[18px] items-center justify-center rounded-full border border-rose-400 outline-0 transition-colors hover:border-rose-900 focus-visible:border-rose-900"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="10"
          fill="none"
          viewBox="0 0 10 10"
        >
          <path
            fill="#ADA885"
            className="size-[9px] text-rose-400 group-hover:fill-rose-900 group-focus-visible:fill-rose-900"
            d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z"
          />
        </svg>
      </motion.button>
    </motion.div>
  )
}

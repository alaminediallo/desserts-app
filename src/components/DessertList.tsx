import { motion } from "motion/react";
import { DessertCard } from "./DessertCard.tsx";
import { useDessertsStore } from "../store/useDessertsStore.ts";
import { containerVariants } from "../variants/index.ts";

export function DessertList() {
  const desserts = useDessertsStore(state => state.desserts);

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid gap-y-8 sm:grid-cols-3 sm:gap-6"
    >
      {desserts.map((dessert) => (
        <DessertCard key={dessert.id} {...dessert} />
      ))}
    </motion.div>
  );
}

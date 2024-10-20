import { DessertCard } from "./DessertCard.tsx";
import { useDessertsStore } from "../store/useDessertsStore.ts";

export function DessertList() {
  const desserts = useDessertsStore(state => state.desserts);

  return (
    <div className="grid gap-y-8 sm:grid-cols-3 sm:gap-6">
      {desserts.map(dessert =>
        <DessertCard key={dessert.id} {...dessert} />
      )}
    </div>
  )
}

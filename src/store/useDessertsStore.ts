import { create } from 'zustand';
import { DessertType } from "../type/dessertType.ts";
import { dessertsData } from "../constant/data.ts";
import { createSelectors } from "./selectors.ts";
import { persist } from "zustand/middleware";

type DessertState = {
  desserts: DessertType[];
  increment: (id: number) => void;
  decrement: (id: number) => void;
  remove: (id: number) => void;
  resetCart: () => void;
};

function incrementDessert(desserts: DessertType[], id: number): DessertType[] {
  return desserts.map((dessert) =>
    dessert.id === id && dessert.quantity < 9
      ? { ...dessert, quantity: dessert.quantity + 1 }
      : dessert
  );
}

function decrementDessert(desserts: DessertType[], id: number): DessertType[] {
  return desserts.map((dessert) =>
    dessert.id === id && dessert.quantity > 0
      ? { ...dessert, quantity: dessert.quantity - 1 }
      : dessert
  );
}

function removeDessert(desserts: DessertType[], id: number): DessertType[] {
  return desserts.map((dessert) =>
    dessert.id === id ? { ...dessert, quantity: 0 } : dessert
  );
}

function resetDesserts(desserts: DessertType[]): DessertType[] {
  return desserts.map((dessert) => ({ ...dessert, quantity: 0 }));
}


const useDessertsStoreBase = create<DessertState>()(
  persist(
    (set) => ({
      desserts: dessertsData,

      increment: (id: number) =>
        set((state) => ({ desserts: incrementDessert(state.desserts, id) })),

      decrement: (id: number) =>
        set((state) => ({ desserts: decrementDessert(state.desserts, id) })),

      remove: (id: number) =>
        set((state) => ({ desserts: removeDessert(state.desserts, id) })),

      resetCart: () =>
        set((state) => ({ desserts: resetDesserts(state.desserts) })),
    }),
    { name: 'cart-storage' }
  )
);

export const useDessertsStore = createSelectors(useDessertsStoreBase);

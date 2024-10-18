import { CartSummary } from "./components/CartSummary.tsx";
import { DessertCard } from "./components/DessertCard.tsx";
import { dessertsData } from "./constant/data.ts";
import { useState } from "react";

function App() {
  const [desserts, setDesserts] = useState(dessertsData);

  const handlerIncrement = (id: number) => {
    setDesserts(desserts.map(dessert => {
        if (id === dessert.id && dessert.quantity < 9) {
          return { ...dessert, quantity: ++dessert.quantity }
        }
        return dessert
      })
    )
  }

  const handlerDecrement = (id: number) => {
    setDesserts(desserts.map(dessert => {
        if (id === dessert.id) {
          return { ...dessert, quantity: --dessert.quantity }
        }
        return dessert
      })
    )
  }

  const handleRemove = (id: number) => {
    setDesserts(desserts.map(dessert => {
        if (id === dessert.id) {
          return { ...dessert, quantity: 0 }
        }
        return dessert
      })
    )
  }

  const handleReset = () => {
    setDesserts(desserts.map(dessert => ({ ...dessert, quantity: 0 })))
  }

  return (
    <main
      className="m-6 flex flex-col items-center justify-center gap-8 tablet:m-10 lg:flex-row lg:items-start desktop:mx-auto desktop:max-w-[1216px]">
      <section className="shrink-0">
        <h1 className="preset-1 mb-8 text-rose-900">Desserts</h1>

        <div className="grid gap-y-8 sm:grid-cols-3 sm:gap-6">
          {desserts.map(dessert =>
            <DessertCard key={dessert.id} {...dessert}
                         onIncrement={handlerIncrement}
                         onDecrement={handlerDecrement}
            />
          )}
        </div>
      </section>

      <section className="w-full rounded-xl bg-white p-6 tablet:max-w-[688px] lg:max-w-[384px]">
        <CartSummary desserts={desserts} onRemove={handleRemove} onReset={handleReset} />
      </section>
    </main>
  )
}

export default App

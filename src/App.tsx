import { CartSummary } from "./components/CartSummary.tsx";
import { DessertCard } from "./components/DessertCard.tsx";
import { dessertsData } from "./constant/data.ts";

function App() {
  return (
    <main
      className="m-6 flex flex-col items-center justify-center gap-8 tablet:m-10 lg:flex-row lg:items-start desktop:mx-auto desktop:max-w-[1216px]">
      <section className="shrink-0">
        <h1 className="preset-1 mb-8 text-rose-900">Desserts</h1>

        <div className="grid  gap-y-8 sm:grid-cols-3 sm:gap-6">
          {dessertsData.map(dessert =>
            <DessertCard key={dessert.id} {...dessert} />
          )}
        </div>
      </section>

      <section className="w-full rounded-xl bg-white p-6 tablet:max-w-[688px] lg:max-w-[384px]">
        <CartSummary />
      </section>
    </main>
  )
}

export default App

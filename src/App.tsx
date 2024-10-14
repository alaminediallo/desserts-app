import { DessertCard } from "./components/DessertCard.tsx";
import { dessertsData } from "./constant/data.ts";

function App() {
  return (
    <main
      className="m-6 flex flex-col items-center justify-center gap-8 tablet:m-10 lg:m-10 lg:flex-row desktop:mx-auto desktop:mt-[88px] desktop:max-w-[1216px]">
      <section>
        <h1 className="preset-1 mb-8 text-rose-900">Desserts</h1>
        <div className="grid gap-y-8 sm:grid-cols-3 sm:gap-6">
          {dessertsData.map(dessert => (
            <DessertCard key={dessert.id} {...dessert} />
          ))}
        </div>
      </section>
    </main>
  )
}

export default App

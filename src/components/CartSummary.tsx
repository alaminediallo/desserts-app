import { OrderSummary } from "./OrderSummary.tsx";
import { CartItem } from "./CartItem.tsx";
import { Separator } from "./Separator.tsx";

const items = [
  {
    name: "Classic Tiramisu",
    quantity: 1,
    price: 5.50
  },
  {
    name: "Vanilla Bean Crème Brûlée",
    quantity: 4,
    price: 7.00
  },
  {
    name: "Vanilla Panna Cotta",
    quantity: 2,
    price: 6.50
  }
]

export function CartSummary() {
  return (
    <>
      <h2 className="preset-2 mb-6 text-red">Your Cart (0)</h2>
      {items.map((item, index) => (
        <div key={item.name}>
          {index > 0 && <Separator className="my-4" />}
          <CartItem {...item} />
        </div>
      ))}
      <Separator className="my-6" />
      <OrderSummary />
      {/*<div className="mt-10 flex flex-col items-center justify-center gap-4">
        <img src="/assets/images/illustration-empty-cart.svg" alt="" className="size-32" />
        <p className="preset-4-bold text-rose-500">Your added items will appear here</p>
      </div>*/}
    </>
  )
}

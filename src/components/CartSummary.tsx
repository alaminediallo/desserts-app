import { dessertType } from "../type/dessertType.ts";
import { OrderSummary } from "./OrderSummary.tsx";
import { Separator } from "./Separator.tsx";
import { CartItem } from "./CartItem.tsx";

type Props = {
  desserts: dessertType[];
  onRemove: (id: number) => void;
  onReset: () => void;
}

export function CartSummary({ desserts, onRemove, onReset }: Props) {

  const dessertCart = desserts.filter(dessert => dessert.quantity > 0);
  const dessertCartQuantity = dessertCart.reduce((acc, currentValue) => acc + currentValue.quantity, 0);

  return (
    <>
      <h2 className="preset-2 mb-6 text-red">Your Cart ({dessertCartQuantity})</h2>
      {dessertCart.length === 0 ? (
        <div className="mt-10 flex flex-col items-center justify-center gap-4">
          <img src="/assets/images/illustration-empty-cart.svg" alt="" className="size-32" />
          <p className="preset-4-bold text-rose-500">Your added items will appear here</p>
        </div>
      ) : (
        <>
          {dessertCart.map((dessert, index) => (
            <div key={dessert.id}>
              {index > 0 && <Separator className="my-4" />}
              <CartItem {...dessert} onRemove={onRemove} />
            </div>
          ))}
          <Separator className="my-6" />
          <OrderSummary dessertCart={dessertCart} onReset={onReset} />
        </>
      )}
    </>
  )
}

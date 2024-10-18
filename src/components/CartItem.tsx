import { dessertType } from "../type/dessertType.ts";

type Props = {
  onRemove: (id: number) => void;
} & dessertType;

export function CartItem({ id, name, price, quantity, onRemove }: Props) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-col gap-2">
        <div className="preset-4-bold text-rose-900">{name}</div>
        <div className="flex gap-2">
          <p className="preset-4-bold w-[21px] text-red">{quantity}x</p>
          <p className="preset-4 text-rose-500">@ ${price.toFixed(2)}</p>
          <p className="preset-4-bold text-rose-500">${(price * quantity).toFixed(2)}</p>
        </div>
      </div>

      <button
        onClick={() => onRemove(id)}
        className="group flex size-[18px] items-center justify-center rounded-full border border-rose-400 outline-0 transition-colors hover:border-rose-900 focus-visible:border-rose-900">
        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10">
          <path fill="#ADA885"
                className="size-[9px] text-rose-400 group-hover:fill-rose-900 group-focus-visible:fill-rose-900"
                d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z" />
        </svg>
      </button>
    </div>
  )
}

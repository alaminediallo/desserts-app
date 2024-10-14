import { PropsWithChildren } from "react";

export function QuantitySelector({ children }: PropsWithChildren) {
  return (
    <button
      className="group flex size-[18px] items-center justify-center rounded-full border border-white outline-0 transition-colors hover:bg-white focus-visible:bg-white">
      {children}
    </button>
  )
}

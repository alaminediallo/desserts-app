import { PropsWithChildren } from "react";

type Props = {
  onClick: () => void
} & PropsWithChildren;

export function QuantitySelector({ children, onClick }: Props) {
  return (
    <button onClick={onClick}
            className="group flex size-[18px] items-center justify-center rounded-full border border-white outline-0 transition-colors hover:bg-white focus-visible:bg-white">
      {children}
    </button>
  )
}

import { PropsWithChildren } from "react";

type Props = {
  onClick: () => void
}

export function Button({ onClick, children }: PropsWithChildren<Props>) {
  return (
    <button
      className="preset-3 w-full rounded-full bg-red py-4 text-center text-white transition-colors duration-300 ease-in-out hover:bg-[#952c0b] focus-visible:bg-[#952c0b] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red focus-visible:ring-offset-2"
      onClick={onClick}
    >
      {children}
    </button>
  )
}

import { clsx } from "clsx";

export function Separator({ className }: { className: string }) {
  return <hr className={clsx(className, 'border-rose-100')} />
}

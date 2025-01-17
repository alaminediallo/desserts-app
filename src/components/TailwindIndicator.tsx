export function TailwindIndicator() {
  if (process.env.NODE_ENV === "production") null

  return (
    <div
      className="fixed bottom-1 left-1 z-50 flex items-center justify-center rounded-full bg-gray-800 p-3 font-mono text-xs text-white">
      <div className="block sm:hidden">xs</div>
      <div className="hidden sm:block tablet:hidden">sm</div>
      <div className="hidden tablet:block lg:hidden">tablet</div>
      <div className="hidden lg:block desktop:hidden">Laptop</div>
      <div className="hidden desktop:block">Desktop</div>
    </div>
  )
}

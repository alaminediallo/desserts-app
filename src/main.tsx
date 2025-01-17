import App from "@/App.tsx"
import { TailwindIndicator } from "@/components/TailwindIndicator"
import "@/index.css"
import { Analytics } from "@vercel/analytics/react"
import { StrictMode } from "react"
import { createRoot } from "react-dom/client"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
    <Analytics />
    <TailwindIndicator />
  </StrictMode>,
)

import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

// https://vitejs.dev/config/
export default defineConfig({
  base: "/countries-visual-data-react-tcss/",
  plugins: [react()]
})

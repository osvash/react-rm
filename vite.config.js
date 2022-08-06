import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://osvash.github.io/react-rm/",
  plugins: [react()]
})

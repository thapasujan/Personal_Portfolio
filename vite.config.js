import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Remove this import - we're not using @tailwindcss/vite
// import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()], // Remove tailwindcss() from here
  base: "/",
})
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
  resolve:{
  alias:{
    "@": path.resolve(__dirname, "./src")
  }
  }
})


// we created a dirname because the alias or es module cant read it so wecreat a path file 
// and javascript dont know path so we import path from node
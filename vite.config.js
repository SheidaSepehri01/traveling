import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

//https://vitejs.dev/config/
export default defineConfig({
  base:'https://sheidasepehri01.github.io/traveling/',
  plugins: [react()],
  define: {
    "global": {},
  },
})

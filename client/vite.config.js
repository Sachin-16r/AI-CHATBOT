import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.js.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/AI-CHATBOT/', // 👈 यह लाइन जोड़ना अनिवार्य है
})

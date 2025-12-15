// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/react-landing-page/', // 👈 use your repo name here
  plugins: [react()],
})

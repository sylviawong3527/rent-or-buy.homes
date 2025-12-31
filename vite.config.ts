import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/rent-or-buy.homes/',
  plugins: [react()]
})

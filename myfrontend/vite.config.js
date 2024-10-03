import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/static/',  // Adjust based on your Django static files settings
  build: {
    outDir: '../static/dist',  // Output to Django's static folder
    emptyOutDir: true,
    manifest: true,  // Important for Django integration
  },
  server: {
    port: 3000,
    proxy: {
      '/': 'http://127.0.0.1:8000',  // Proxy Django dev server
    },
  },
})

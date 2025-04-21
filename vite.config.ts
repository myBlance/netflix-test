import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  define: {
    'process.env': process.env
  },
  server: {
    allowedHosts: [
      '848d-2402-9d80-227-e3be-d18c-d5f9-c085-7854.ngrok-free.app', // ✅ Không có http:// ngrok http 5173
      'localhost',
    ],
    proxy: {
      '/api': {
        target: 'http://localhost:4000',
        changeOrigin: true,
        secure: false,
      },
    },
  },
})

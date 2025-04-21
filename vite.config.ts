import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  define: {
    'process.env': process.env
  },
  server: {
    allowedHosts: [
      'aa66-2402-9d80-227-e3be-2044-2d88-d6c8-775c.ngrok-free.app', // ✅ Không có http:// ngrok http 5173
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

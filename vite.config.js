import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5175,
    proxy: {
      '/api': {
        target: 'http://localhost:5175',
        changeOrigin: true,
        onProxyReq(proxyReq, req, res) {
          if (req.headers.referer && req.headers.referer.includes('5173')) {
            res.statusCode = 403;
            res.end('Requests from this origin are not allowed');
          }
        },
      },
    },
   
  },
 
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // server: {
  //   port: 5175,
  //   proxy: {
  //     '/img': {
  //       target: 'https://cricbuzz-cricket.p.rapidapi.com',
  //       changeOrigin: true,
  //       rewrite: (path) => path.replace(/^\/img/, '/img/v1/i1'),
  //     },
  //   },
  // },
 
})

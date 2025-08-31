import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// vite.config.js
export default defineConfig({
   plugins: [react()],
  define: {
    'process.env': {
      REACT_APP_API_URL: '"https://api.example.com"',
    },
  },
});
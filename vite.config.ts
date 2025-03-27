import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr';
import path from 'path';

export default defineConfig({
  // @ts-ignore
  plugins: [react(),  svgr({ exportAsDefault: true, include: "**/*.svg" })],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})

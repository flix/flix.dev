import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react({
      jsxRuntime: 'classic', // Required for React 16 (no jsx-runtime export)
    }),
  ],
  base: '/',
  build: {
    outDir: 'dist',
  },
  server: {
    port: 3000,
    open: true,
  },
});

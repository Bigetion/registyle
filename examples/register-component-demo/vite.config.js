import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { registyle } from 'registyle/vite';

export default defineConfig({
  plugins: [
    react(),
    registyle(),
  ],
  server: { port: 3004, open: true },
});

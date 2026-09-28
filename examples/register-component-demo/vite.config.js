import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { registyle } from 'registyle/vite';

export default defineConfig({
  plugins: [
    react(),
    registyle({
      entry: 'src/registyles/index.js',
      outFile: '.registyle/style.css',
      watch: 'src/registyles',
      inputCss: '@reference "tailwindcss"; @import "tailwindcss/utilities.css" source(none);',
    }),
  ],
  server: { port: 3004, open: true },
});

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
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
  server: { port: 3005, hmr: { host: '127.0.0.1', port: 24679, clientPort: 24679 } },
});

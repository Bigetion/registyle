import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// Use direct file import for StackBlitz compatibility
import { registyle } from './node_modules/registyle/vite.js';

export default defineConfig({
  plugins: [
    react(),
    registyle({ forceOutFile: true }),
  ],
});

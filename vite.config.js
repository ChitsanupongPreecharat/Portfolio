import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Repo is named Portfolio, so GitHub Pages serves the site at /Portfolio/.
export default defineConfig({
  plugins: [react()],
  base: '/Portfolio/',
});

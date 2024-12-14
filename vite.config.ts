import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from 'tailwindcss';
import * as path from 'node:path';
// import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [tailwindcss],
    },
  },
  build: {
    target: 'ES2022',
    outDir: 'build',
    assetsDir: 'static/assets',
  },
  resolve: {
    alias: {
      '@': `${path.resolve(__dirname, 'src')}`,
      '@features': `${path.resolve(__dirname, 'src/features')}`,
      '@components': `${path.resolve(__dirname, 'src/components')}`,
      '@assets': `${path.resolve(__dirname, 'src/assets')}`,
      '@hooks': `${path.resolve(__dirname, 'src/hooks')}`,
    },
  },
});

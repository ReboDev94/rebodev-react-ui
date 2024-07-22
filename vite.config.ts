import { defineConfig } from 'vite';
import { resolve } from 'path';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import tailwindcss from 'tailwindcss';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, './lib/index.ts'),
      name: 'yaret-ui',
      fileName: format => `index.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'tailwindcss'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          tailwindcss: 'tailwindcss',
        },
      },
    },
    sourcemap: true,
    emptyOutDir: true,
  },
  plugins: [
    react(),
    svgr({ include: '**/*.svg?react' }),
    dts({
      rollupTypes: true,
      exclude: ['./lib/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
    }),
  ],
  css: {
    postcss: {
      plugins: [tailwindcss],
    },
  },
});

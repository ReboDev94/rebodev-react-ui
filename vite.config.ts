import 'vitest/config';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import tailwindcss from 'tailwindcss';
import svgr from 'vite-plugin-svgr';
import { visualizer } from 'rollup-plugin-visualizer';
import { extname, relative, resolve } from 'path';
import { fileURLToPath } from 'node:url';
import { glob } from 'glob';
import { libInjectCss } from 'vite-plugin-lib-inject-css';

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    postcss: {
      plugins: [tailwindcss],
    },
  },
  build: {
    cssCodeSplit: true,
    copyPublicDir: false,
    lib: {
      entry: resolve(__dirname, './lib/index.ts'),
      formats: ['es'],
      name: 'yaret-ui',
      // fileName: format => `index.${format}.js`,
    },
    rollupOptions: {
      external: [
        'react',
        'react-dom',
        'react/jsx-runtime',
        'tailwindcss',
        'tailwind-merge',
      ],
      input: Object.fromEntries(
        glob
          .sync('lib/**/*.{ts,tsx}', {
            ignore: [
              'lib/**/*.d.ts',
              'lib/**/*.stories.ts',
              'lib/**/*.stories.tsx',
              'lib/**/*.test.tsx',
            ],
          })
          .map(file => [
            // The name of the entry point
            // lib/nested/foo.ts becomes nested/foo
            relative('lib', file.slice(0, file.length - extname(file).length)),
            // The absolute path to the entry file
            // lib/nested/foo.ts becomes /project/lib/nested/foo.ts
            fileURLToPath(new URL(file, import.meta.url)),
          ]),
      ),
      output: {
        inlineDynamicImports: false,
        assetFileNames: 'assets/[name][extname]',
        entryFileNames: '[name].js',
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react/jsx-runtime': 'react/jsx-runtime',
          tailwindcss: 'tailwindcss',
          'tailwind-merge': 'tailwindMerge',
        },
      },
    },
    sourcemap: true,
    emptyOutDir: true,
  },
  plugins: [
    react(),
    visualizer(),
    libInjectCss(),
    svgr({ include: '**/*.svg?react' }),
    dts({
      rollupTypes: true,
      exclude: ['**/*.stories.ts', '**/*.stories.tsx', '**/*.test.tsx'],
    }),
  ],

  test: {
    globals: true,
    environment: 'jsdom',
    include: ['**/*.test.tsx'],
    css: true,
    setupFiles: ['./vitest-setup.ts'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      include: ['lib'],
      exclude: ['**/*.stories.tsx', '**/*.ts'],
    },
  },
});

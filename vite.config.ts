/// <reference types="vitest" />

import { resolve } from 'node:path';

import { vanillaExtractPlugin as vanillaExtractEsbuildPlugin } from '@vanilla-extract/esbuild-plugin';
import { vanillaExtractPlugin as vanillaExtractVitePlugin } from '@vanilla-extract/vite-plugin';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [dts(), react(), vanillaExtractVitePlugin()],
  resolve: {
    alias: [{ find: '@', replacement: resolve(__dirname, 'src') }],
  },
  optimizeDeps: {
    esbuildOptions: {
      plugins: [vanillaExtractEsbuildPlugin({ runtime: true })],
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/main.ts'),
      formats: ['es'],
    },
    rollupOptions: {
      external: [
        'react',
        'react/jsx-runtime',
        '@vanilla-extract/css',
        '@vanilla-extract/css-utils',
        '@vanilla-extract/dynamic',
        '@vanilla-extract/recipes',
        '@vanilla-extract/sprinkles',
      ],
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './tests/setup.ts',
    reporters: ['default', 'junit'],
    outputFile: {
      junit: 'test-results.xml',
    },
  },
});

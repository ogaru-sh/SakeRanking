/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    open: true,
    proxy: {'/api/ranking': {
      target: 'https://sakenowa.com',
      changeOrigin: true,
      secure: false,
      headers: {
        'Content-Type': 'application/json'
      },
      rewrite: (path) => path.replace(/^\/api\/ranking/, '/api/v2/brands/ranking')
    }}
  },
    base: './',
    root: './src/',
    build: {
      outDir: '../public',
      emptyOutDir: true,
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    }
  },
  plugins: [
    react({
      jsxImportSource: '@emotion/react',
      babel: {
        plugins: ['@emotion/babel-plugin'],
      },
    }),
    tsconfigPaths(),
  ],
  esbuild: {
    jsxFactory: "jsx",
    jsxInject: `
      import { jsx } from "@emotion/react"
    `
  },
  test: {
    global: true,
    environment: 'happy-dom',
    setupFiles: './src/setup.ts',
  }
});

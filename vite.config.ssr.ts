import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Builds a Node-importable SSR bundle from src/entry-server.tsx into dist-ssr/.
// Used only at build time by scripts/generate-static.mjs — never shipped/deployed.
export default defineConfig({
  plugins: [react()],
  build: {
    ssr: true,
    outDir: 'dist-ssr',
    rollupOptions: {
      input: 'src/entry-server.tsx',
      output: {
        format: 'es',
        entryFileNames: 'entry-server.mjs',
      },
    },
  },
});

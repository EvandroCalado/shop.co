import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  test: {
    globals: true,
    environment: 'jsdom',
    reporters: ['default', 'html'],
    setupFiles: ['./.test/setup.ts'],
    coverage: {
      enabled: true,
    },
  },
});

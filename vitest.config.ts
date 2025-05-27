/** @type {import('vite').UserConfig} */
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

export default {
  test: {
    globals: true,
    alias: {
      '@/': './*',
    },
  },
  plugins: [tsconfigPaths(), react()],
  environment: 'jsdom',
};

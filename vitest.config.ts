/** @type {import('vite').UserConfig} */

import tsconfigPaths from 'vite-tsconfig-paths';

export default {
  test: {
    globals: true,
    alias: {
      '@/': './*',
    },
  },
  plugins: [tsconfigPaths()],
  environment: 'jsdom',
};

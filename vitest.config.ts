/** @type {import('vite').UserConfig} */

import { resolve } from 'path';

export default {
  test: {
    globals: true,
  },
  environment: 'jsdom',
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
};

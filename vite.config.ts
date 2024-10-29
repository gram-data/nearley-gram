import { defineConfig } from 'vite';

import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import { nxCopyAssetsPlugin } from '@nx/vite/plugins/nx-copy-assets.plugin';

export default defineConfig({
  root: __dirname,
  cacheDir: './node_modules/.vite/nearley-gram',
  plugins: [nxViteTsPaths(), nxCopyAssetsPlugin(['*.md'])],

  test: {
    watch: false,
    globals: true,
    environment: 'node',
    include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    reporters: ['default'],
    coverage: { reportsDirectory: './coverage/nearley-gram', provider: 'v8' },
    open: false,
    api: false
  },
  server: {
    open: false
  }
});
import { defineConfig } from 'vite';

// The built file is consumed from node_modules alongside its dependencies,
// which all use sibling-relative imports (e.g. '../gluonjs/gluon.js').
// Keep dependencies external and emit them in that same form, relative to dist/.
const isExternal = id => !id.startsWith('.') && !id.startsWith('/') && !id.startsWith('\0');

export default defineConfig({
  publicDir: false,
  build: {
    sourcemap: true,
    lib: {
      entry: 'src/overwebs-gallery-page.js',
      formats: ['es'],
      fileName: () => 'overwebs-gallery-page.js'
    },
    rollupOptions: {
      external: isExternal,
      output: {
        paths: id => (isExternal(id) ? `../../${id}` : id)
      }
    }
  }
});

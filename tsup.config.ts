import { defineConfig } from 'tsup';
import { vanillaExtractPlugin } from '@vanilla-extract/esbuild-plugin';
export default defineConfig({
  entry: ['src/**/*@(ts|tsx)'],
  format: ['esm'],
  outDir: 'dist',
  dts: true,
  sourcemap: true,
  external: ['react', 'react-dom'],
  treeshake: true,
  minify: true,
  clean: true,
  esbuildPlugins: [vanillaExtractPlugin()],
});

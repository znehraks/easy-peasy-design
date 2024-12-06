import { defineConfig } from 'tsup';
import { vanillaExtractPlugin } from '@vanilla-extract/esbuild-plugin';

export default defineConfig({
  entry: ['src/**/*.ts', 'src/**/*.tsx', '!src/stories/**/*'],
  format: ['esm'],
  outDir: 'dist',
  dts: true,
  sourcemap: true,
  external: ['react', 'react-dom'],
  treeshake: true,
  minify: true,
  clean: true,
  esbuildPlugins: [vanillaExtractPlugin()],
  splitting: false,
  loader: {
    '.css': 'css',
  },
});

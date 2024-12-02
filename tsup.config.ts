import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  sourcemap: true,
  clean: true,
  dts: true,
  external: ['react', 'react-dom'],
  outDir: 'dist',
  splitting: true,
  treeshake: true,
  minify: true,
});

// import { defineConfig } from "tsup";
// import fs from "node:fs/promises";
// import path from "node:path";

// export default defineConfig({
//   entry: ["src/**/*@(ts|tsx)"],
//   dts: true,
//   format: ["esm"],
//   treeshake: true,
//   minify: true,
//   clean: true,
//   external: ["react", "react-dom"],
//   async onSuccess() {
//     await fs.writeFile(
//       path.join(__dirname, "dist", "index.mjs"),
//       '"use client";\n' +
//         (await fs.readFile(path.join(__dirname, "dist", "index.mjs")))
//     );
//   },
// });

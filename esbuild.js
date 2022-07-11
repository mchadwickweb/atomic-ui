require("esbuild").build({
  entryPoints: ["./packages/core/index.ts"],
  outfile: "./packages/core/dist/index.js",
  bundle: true,
  format: "cjs",
  platform: "browser",
  // minify: true,
  sourcemap: true,
  external: ["react", "react-dom"],
  inject: ["./utils/react-shim.js"],
});

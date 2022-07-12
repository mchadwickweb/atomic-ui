require("esbuild").build({
  entryPoints: ["index.ts"],
  outfile: "lib/index.js",
  bundle: true,
  format: "cjs",
  platform: "browser",
  minify: true,
  sourcemap: true,
  external: ["react", "react-dom"],
});

import { defineConfig } from "tsup";

export default defineConfig({
    entry: { "orak-util-solidjs": "src/index.ts" },
    format: ["esm", "cjs"],
    dts: true,
    minify: false,
    clean: true,
    outDir: "dist",
    tsconfig: "tsconfig.json",
    esbuildOptions(options) {
        options.jsx = "transform";
        options.jsxFactory = "_$createComponent";
        options.jsxFragment = "_$createFragment";
    },
});
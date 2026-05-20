import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
import dts from "vite-plugin-dts";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [solidPlugin(), dts({ rollupTypes: true }), tailwindcss()],
  build: {
    lib: {
      entry: "src/index.ts",
      fileName: (format) => `orak-util-solidjs.${format === "es" ? "js" : "cjs"}`,
      formats: ["es", "cjs"],
    },
    rollupOptions: {
      external: ["solid-js"],
      output: {
        assetFileNames: "[name].[ext]",
      },
    },
  },
});

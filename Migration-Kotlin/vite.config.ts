import { reactRouter } from "@react-router/dev/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [reactRouter(), tsconfigPaths()],
  resolve: {
    alias: {
      "@rescui/card": "@rescui/card/lib/index.js",
    },
  },
  ssr: {
    noExternal: [/^@rescui\//, /^@jetbrains\//],
    optimizeDeps: {
      include: [
        "@jetbrains/kotlin-web-site-ui/dist/header.js",
        "@jetbrains/kotlin-web-site-ui/dist/footer.js",
      ],
      exclude: ["react", "react-dom"],
    },
  },
});

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Components from "unplugin-vue-components/vite";
import { NaiveUiResolver } from "unplugin-vue-components/resolvers";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/your-en-dict/",
  plugins: [
    vue(),
    Components({
      resolvers: [NaiveUiResolver()],
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        assetFileNames: 'css/[name].css',
        chunkFileNames: (chunk) => `js/${chunk.name.replaceAll("_", "-")}.js`,
        entryFileNames: 'js/main.js',
      },
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
  },
});

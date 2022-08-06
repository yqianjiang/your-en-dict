import { defineConfig } from "vite";
// import legacy from "@vitejs/plugin-legacy";
import vue from "@vitejs/plugin-vue";
// import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite';
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers';
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/your-en-dict/",
  plugins: [
    vue(),
    // AutoImport({
    //   imports: [
    //     'vue',
    //     {
    //       'naive-ui': ['useDialog', 'useMessage', 'useNotification', 'useLoadingBar'],
    //     },
    //   ],
    // }),
    Components({
      resolvers: [NaiveUiResolver()],
    }),
    // legacy({
    //   targets: ["defaults", "not IE 11"],
    // }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
  },
});

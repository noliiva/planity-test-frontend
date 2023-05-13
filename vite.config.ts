import { defineConfig } from "vite";
import autoprefixer from "autoprefixer";
import postcssNested from "postcss-nested";
import react from "@vitejs/plugin-react-swc";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    postcss: {
      plugins: [postcssNested, autoprefixer],
    },
  },
  resolve: {
    alias: [{ find: "~", replacement: "/src" }],
  },
  plugins: [react(), svgr()],
});

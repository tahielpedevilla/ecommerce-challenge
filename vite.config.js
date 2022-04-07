import path from "path";

import {defineConfig} from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {find: "@", replacement: path.resolve(__dirname, "./src")},
      {find: "@components", replacement: path.resolve(__dirname, "./src/components")},
      {find: "@assets", replacement: path.resolve(__dirname, "./src/public")},
    ],
  },
  include: [path.resolve(__dirname, "./src")],
});

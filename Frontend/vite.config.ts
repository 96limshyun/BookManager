import path from "path";

import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { configDefaults } from "vitest/config";

export default defineConfig({
    plugins: [react(), tailwindcss()],
    resolve: {
        alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
    },
    test: {
      globals: true,
      environment: "jsdom",
      setupFiles: "./src/tests/setupTests.ts",
      exclude: [...configDefaults.exclude, "node_modules/"]
    }
});

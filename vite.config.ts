import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // Add the alias for @
    },
  },
  test: {
    globals: true,  // Enables using `describe`, `it`, and `expect` without imports
    environment: "jsdom", // Simulates a browser environment for testing
    setupFiles: "./src/setupTests.ts", // Loads test setup
    css: false, // Ignore CSS during tests
  },
});
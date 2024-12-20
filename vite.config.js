import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
const ReactCompilerConfig = {
  /* ... */
};

export default defineConfig({
  build: {
    outDir: 'build',
    emptyOutDir: true, // also necessary
  },
  plugins: [
    react({
      babel: {
        plugins: [["babel-plugin-react-compiler", ReactCompilerConfig]],
      },
    }),
  ],
});

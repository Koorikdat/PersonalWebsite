import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: "/PersonalWebsite/", // Change this to match your GitHub repository name
  root: "./",
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
});

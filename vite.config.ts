import { defineConfig } from "vite";
import react from '@vitejs/plugin-react'
import { univerPlugin } from "@univerjs/vite-plugin";

export default defineConfig({
  plugins: [
    univerPlugin(),
    react()
  ]
});

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react"; // Certifique-se de que está importando corretamente!

export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      usePolling: true, // Para detectar mudanças corretamente
    },
    strictPort: true,
    host: "localhost",
  },
});

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // Use subpath for GitHub Pages, root path for custom domain
  base: mode === "production" ? "/moses-nyanzi-profile-hero/" : "/",
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), tsconfigPaths(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));


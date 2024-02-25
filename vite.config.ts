import { defineConfig } from "vite";
import { TanStackRouterVite } from "@tanstack/router-vite-plugin";
import react from "@vitejs/plugin-react-swc";
import tsConfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [react(), TanStackRouterVite(), tsConfigPaths()],
});

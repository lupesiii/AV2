import babel from "@rolldown/plugin-babel";
import tailwindcss from "@tailwindcss/vite";
import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vite.dev/config/
/// <reference types="vite-plugin-svgr/client" />
export default defineConfig({
	plugins: [
		react(),
		tailwindcss(),
		svgr(),
		tsconfigPaths(),
		babel({ presets: [reactCompilerPreset()] }),
	],
});

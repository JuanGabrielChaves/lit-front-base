/** @format */

import { defineConfig } from "vite";

export default defineConfig({
    root: "./src",
    build: {
        outDir: "../public",
    },
    server: {
        port: 5173,
        open: true,
    },
});

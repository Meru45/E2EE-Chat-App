import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],

    optimizeDeps: {
        exclude: ["@matrix-org/olm"],
    },
    build: {
        target: "es2020",
        rollupOptions: {
            output: {
                manualChunks: {
                    "matrix-js-sdk": ["matrix-js-sdk"],
                    olm: ["@matrix-org/olm"],
                },
            },
        },
    },
    assetsInclude: ["**/*.wasm"],
    server: {
        headers: {
            "Cross-Origin-Opener-Policy": "same-origin",
            "Cross-Origin-Embedder-Policy": "require-corp",
        },
    },

    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
});

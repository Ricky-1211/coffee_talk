import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
// export default defineConfig(({ mode }) => ({
//   server: {
//     host: "::",
//     port: 3001,
//   },
//   plugins: [
//     react(),
//     componentTagger(), 
//   ],
//   base: "/", 
//   resolve: {
//     alias: {
//       "@": path.resolve(__dirname, "src"), 
//     },
//   },
// }));





export default defineConfig({
      server: {
        host: "::",
        port: 3001,
        fs: {
          allow: ['.'],
        },
      },
      plugins: [react(), componentTagger()],
      base: "/",
      resolve: {
        alias: {
          "@": path.resolve(__dirname, "src"),
        },
      },
    });
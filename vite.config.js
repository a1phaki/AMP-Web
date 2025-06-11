import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/AMP-Web/' : '/',
  plugins: [react()],
  esbuild: {
    jsxFactory: 'React.createElement',
    jsxFragment: 'React.Fragment',
  },
  server: {
    host: '0.0.0.0',   // <- 對外開放所有 IP
    port: 5173,        // <- 你也可以自訂其他 port
    strictPort: true,  // <- 若 5173 被占用會報錯而不是換 port
  },
});

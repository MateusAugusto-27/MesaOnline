import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173, // O Vite usa esse padrão de porta, mas pode ser alterado
    open: true, // Abre o navegador automaticamente
  },
});


import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    // Asegura que Vite maneje correctamente las extensiones TSX/TS/JSX/JS
    extensions: ['.js', '.jsx', '.ts', '.tsx'], 
  },
  server: {
    open: true,
  },
});
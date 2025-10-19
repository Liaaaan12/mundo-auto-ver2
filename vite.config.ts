import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'], 
  },
  server: {
    // Si la pantalla blanca es por problemas de red o CORS en localhost
    open: true,
  },
});
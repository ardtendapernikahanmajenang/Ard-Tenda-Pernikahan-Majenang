// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE_PATH || '/Ard-Tenda-Pernikahan-Majenang',
});


import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import autoprefixer from 'autoprefixer';
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    // Це об'єкт для налаштувань CSS
    postcss: {
      // Тут ми налаштовуємо PostCSS
      plugins: [
        autoprefixer, // Додаємо Autoprefixer як плагін PostCSS
      ],
    },
  },
});

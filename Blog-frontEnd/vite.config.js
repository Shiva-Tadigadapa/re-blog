import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['imagekit,uid,react,react-dom,react-redux,react-router-dom,redux,redux-thunk,react-router-config,react-lottie'],
    },
  },
});

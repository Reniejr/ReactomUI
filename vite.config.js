import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {},
    },
  },
  build: {
    lib: {
      entry: {
        main: './src/index.js',
        v1: './src/components/v1/index.js',
        styles: './src/styles/index.js'
      },
      name: 'ReactomUI',
      fileName: (format, entry) => `reactomui/${entry}.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
        preserveModules: true, // Preserve file structure
        preserveModulesRoot: 'src', // Set root directory for preserved modules
      },
    },
  },
});

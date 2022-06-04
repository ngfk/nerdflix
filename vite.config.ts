import vue from '@vitejs/plugin-vue';
import * as path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  root: 'src',
  build: { outDir: path.join(__dirname, 'dist') },
  publicDir: path.join(__dirname, 'public'),
  plugins: [vue()],
});

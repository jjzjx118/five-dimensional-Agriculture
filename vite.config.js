import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path-browserify'; 
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  base: "/five-dimensional-Agriculture/", // 你的仓库名
  build: {
    outDir: "dist",
  },
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src') // 正确解析路径
    }
  }
});

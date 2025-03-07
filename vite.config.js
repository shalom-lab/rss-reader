import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
  plugins: [vue()],
  base: '/rss-reader/', // 替换为你的GitHub仓库名
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  }
}) 
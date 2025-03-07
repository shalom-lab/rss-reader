import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  base: '/rss-reader/', // 替换为你的GitHub仓库名
}) 
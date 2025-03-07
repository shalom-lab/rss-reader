<template>
  <div class="min-h-screen bg-gray-50">
    <div class="container mx-auto px-4 py-8">
      <!-- 头部搜索区域 -->
      <div class="mb-8 bg-white rounded-lg shadow-sm p-6">
        <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <h2 class="text-3xl font-bold text-gray-800">RSS阅读器</h2>
          <div class="flex flex-col sm:flex-row gap-4">
            <select 
              v-model="selectedCategory"
              class="px-4 py-2 border rounded-lg bg-white hover:border-blue-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
            >
              <option value="">全部分类</option>
              <option 
                v-for="category in categories" 
                :key="category" 
                :value="category"
                class="py-1"
              >
                {{ category }}
              </option>
            </select>
            <div class="relative">
              <input 
                type="text"
                v-model="searchQuery"
                placeholder="搜索文章..."
                class="w-full px-4 py-2 pl-10 border rounded-lg hover:border-blue-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
              >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <!-- 文章列表 -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <article 
          v-for="article in filteredArticles" 
          :key="article.id"
          class="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden group"
        >
          <div class="p-6">
            <div class="flex items-center gap-2 text-sm text-gray-500 mb-3">
              <span class="px-2 py-1 bg-blue-50 text-blue-600 rounded">{{ article.category }}</span>
              <span>{{ formatDate(article.pubDate) }}</span>
            </div>
            
            <h2 class="text-xl font-semibold mb-3 group-hover:text-blue-600 transition-colors">
              <a 
                :href="article.link" 
                target="_blank" 
                class="hover:text-blue-700"
              >
                {{ article.title }}
              </a>
            </h2>

            <div class="text-gray-600 text-sm mb-4 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              <span>{{ article.source }}</span>
            </div>

            <p class="text-gray-600 line-clamp-3 overflow-hidden">
              {{ article.description }}
            </p>
          </div>

          <div class="px-6 py-4 bg-gray-50 border-t">
            <a 
              :href="article.link" 
              target="_blank"
              class="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all"
            >
              阅读全文
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </article>
      </div>

      <!-- 无结果提示 -->
      <div v-if="filteredArticles.length === 0" class="text-center py-12">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 mx-auto text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M12 12h.01M12 12h.01M12 12h.01M12 12h.01M12 12h.01M12 12h.01" />
        </svg>
        <p class="text-gray-500 text-lg">没有找到相关文章</p>
        <button 
          @click="resetFilters" 
          class="mt-4 px-4 py-2 text-blue-600 hover:text-blue-800 font-medium"
        >
          清除筛选
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import articles from '../data/articles.json'

const articlesList = ref(articles.articles)
const searchQuery = ref('')
const selectedCategory = ref('')

const categories = computed(() => {
  const cats = new Set(articlesList.value.map(article => article.category))
  return Array.from(cats)
})

const filteredArticles = computed(() => {
  return articlesList.value.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
                         article.description.toLowerCase().includes(searchQuery.value.toLowerCase())
    const matchesCategory = !selectedCategory.value || article.category === selectedCategory.value
    return matchesSearch && matchesCategory
  })
})

const formatDate = (date) => {
  const d = new Date(date)
  return d.toLocaleDateString('zh-CN', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit'
  })
}

const resetFilters = () => {
  searchQuery.value = ''
  selectedCategory.value = ''
}
</script>

<style>
/* 添加一些过渡动画 */
.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}
</style> 
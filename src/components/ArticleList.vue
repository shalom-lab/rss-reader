<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold mb-8">RSS阅读器</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <article v-for="article in articles" :key="article.id" 
        class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
        <h2 class="text-xl font-semibold mb-3">
          <a :href="article.link" target="_blank" class="text-blue-600 hover:text-blue-800">
            {{ article.title }}
          </a>
        </h2>
        <div class="text-gray-600 text-sm mb-4">
          <span>{{ article.source }}</span>
          <span class="mx-2">•</span>
          <span>{{ new Date(article.pubDate).toLocaleDateString() }}</span>
        </div>
        <p class="text-gray-700 line-clamp-3">{{ article.description }}</p>
      </article>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import articles from '../data/articles.json'

const articles = ref(articles.articles)
</script> 
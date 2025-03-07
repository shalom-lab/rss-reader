import Parser from 'rss-parser';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const parser = new Parser({
  timeout: 10000, // 增加超时时间到10秒
  headers: {
    'User-Agent': 'Mozilla/5.0 (compatible; RSS-Reader/1.0;)'
  }
});

const rssConfigPath = path.join(__dirname, '../src/data/rss.json');
const articlesPath = path.join(__dirname, '../src/data/articles.json');

let rssConfig;
try {
  rssConfig = JSON.parse(fs.readFileSync(rssConfigPath, 'utf-8'));
} catch (error) {
  console.error('Error reading RSS config file:', error);
  process.exit(1);
}

// 从 RSS 配置中获取唯一的分类
const getCategories = (sources) => {
  const uniqueCategories = new Set(sources.map(source => source.category));
  return Array.from(uniqueCategories).map(category => ({
    id: category,
    name: category,
    color: getCategoryColor(category)
  }));
};

// 为分类分配颜色
const getCategoryColor = (category) => {
  // 使用一组预定义的颜色循环
  const colors = [
    'blue', 'green', 'purple', 'red', 'yellow', 'indigo', 'pink'
  ];
  
  // 使用类别名称的哈希值来选择颜色
  const hash = category.split('').reduce((acc, char) => {
    return char.charCodeAt(0) + ((acc << 5) - acc);
  }, 0);
  
  const colorIndex = Math.abs(hash) % colors.length;
  return `${colors[colorIndex]}-500`;
};

async function fetchRSS() {
  try {
    let allArticles = [];
    console.log('Starting to fetch RSS feeds...');

    for (const source of rssConfig.sources) {
      try {
        console.log(`Fetching from ${source.title}...`);
        const feed = await parser.parseURL(source.url);
        
        const articles = feed.items.map(item => ({
          id: item.guid || item.link,
          title: item.title,
          description: item.contentSnippet || item.description || '',
          link: item.link,
          pubDate: item.pubDate || item.isoDate || new Date().toISOString(),
          source: source.title,
          sourceUrl: source.website,
          category: source.category
        }));

        console.log(`Successfully fetched ${articles.length} articles from ${source.title}`);
        allArticles = [...allArticles, ...articles];
      } catch (error) {
        console.error(`Error fetching ${source.title}:`, error.message);
      }
    }

    if (allArticles.length === 0) {
      throw new Error('No articles were fetched from any source');
    }

    // 按发布日期排序
    allArticles.sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate));

    // 只保留最新的100篇文章
    allArticles = allArticles.slice(0, 100);

    // 确保输出目录存在
    const articlesDir = path.dirname(articlesPath);
    if (!fs.existsSync(articlesDir)) {
      fs.mkdirSync(articlesDir, { recursive: true });
    }

    // 保存到文件，包含从 RSS 配置中获取的分类
    fs.writeFileSync(
      articlesPath,
      JSON.stringify({
        categories: getCategories(rssConfig.sources),
        articles: allArticles
      }, null, 2)
    );

    console.log(`Successfully saved ${allArticles.length} articles to ${articlesPath}`);
  } catch (error) {
    console.error('Error in fetchRSS:', error.message);
    process.exit(1);
  }
}

// 执行抓取
console.log('RSS feed fetcher starting...');
fetchRSS().catch(error => {
  console.error('Unhandled error:', error);
  process.exit(1);
});
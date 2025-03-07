import Parser from 'rss-parser';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const parser = new Parser({
  timeout: 10000, // 10秒超时
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
const getCategoryColor = (category, allCategories) => {
  // 定义8种基础颜色
  const colors = [
    'blue',    // 蓝色
    'green',   // 绿色
    'red',     // 红色
    'yellow',  // 黄色
    'purple',  // 紫色
    'orange',  // 橙色
    'teal',    // 青色
    'indigo'   // 靛蓝
  ];

  // 获取分类的索引
  const categoryIndex = allCategories.indexOf(category);
  
  // 使用模运算确保颜色循环使用
  const colorIndex = categoryIndex % colors.length;
  
  // 返回对应的颜色加上-500后缀（使用中等亮度的色调）
  return `${colors[colorIndex]}-500`;
};

// 添加超时处理的辅助函数
const fetchWithTimeout = async (source) => {
  try {
    const feed = await Promise.race([
      parser.parseURL(source.url),
      new Promise((_, reject) => 
        setTimeout(() => reject(new Error('Timeout')), 15000)
      )
    ]);
    return feed;
  } catch (error) {
    console.error(`Error fetching ${source.title}: ${error.message}`);
    return null;
  }
};

async function fetchRSS() {
  try {
    let allArticles = [];
    console.log('Starting to fetch RSS feeds...');

    for (const source of rssConfig.sources) {
      try {
        console.log(`Fetching from ${source.title}...`);
        const feed = await fetchWithTimeout(source);
        
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
    // 显式退出进程
    process.exit(0);
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
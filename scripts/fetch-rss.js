const Parser = require('rss-parser');
const fs = require('fs');
const path = require('path');

const parser = new Parser();
const rssConfig = require('../src/data/rss.json');
const articlesPath = path.join(__dirname, '../src/data/articles.json');

async function fetchRSS() {
  try {
    let allArticles = [];

    for (const source of rssConfig.sources) {
      try {
        const feed = await parser.parseURL(source.url);
        
        const articles = feed.items.map(item => ({
          id: item.guid || item.link,
          title: item.title,
          description: item.contentSnippet || item.description,
          link: item.link,
          pubDate: item.pubDate || item.isoDate,
          source: source.title,
          sourceUrl: source.website,
          category: source.category
        }));

        allArticles = [...allArticles, ...articles];
      } catch (error) {
        console.error(`Error fetching ${source.title}:`, error);
      }
    }

    // 按发布日期排序
    allArticles.sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate));

    // 只保留最新的100篇文章
    allArticles = allArticles.slice(0, 100);

    // 保存到文件
    fs.writeFileSync(
      articlesPath,
      JSON.stringify({ articles: allArticles }, null, 2)
    );

    console.log('RSS feeds fetched and saved successfully!');
  } catch (error) {
    console.error('Error in fetchRSS:', error);
    process.exit(1);
  }
}

fetchRSS(); 
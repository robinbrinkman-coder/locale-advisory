import { Article } from '../types/article';
import { insightsData } from '../content/insights';

// Convert Markdown content to Article content array
function convertMarkdownToContent(markdown: string): Article['content'] {
  const content: Article['content'] = [];
  const sections = markdown.split('\n\n');

  sections.forEach(section => {
    const trimmed = section.trim();
    if (!trimmed) return;

    // Handle headings
    if (trimmed.startsWith('### ')) {
      content.push({
        type: 'heading',
        level: 2,
        content: trimmed.replace('### ', '')
      });
    }
    // Handle blockquotes
    else if (trimmed.startsWith('> ')) {
      content.push({
        type: 'quote',
        content: trimmed.replace(/^> /gm, '').replace(/"/g, '')
      });
    }
    // Handle bullet lists
    else if (trimmed.includes('\n- ') || trimmed.startsWith('- ')) {
      const items = trimmed.split('\n- ').filter(Boolean).map(item => 
        item.startsWith('- ') ? item.substring(2) : item
      );
      content.push({
        type: 'list',
        items: items
      });
    }
    // Handle bold text blocks (key metrics)
    else if (trimmed.startsWith('') && trimmed.includes(':')) {
      const lines = trimmed.split('\n');
      const items = lines.map(line => {
        const match = line.match(/\*\*(.?):\*\*\s(.*)/);
        if (match) {
          return `${match[1]}: ${match[2]}`;
        }
        return line;
      }).filter(Boolean);
      
      content.push({
        type: 'list',
        items: items
      });
    }
    // Regular paragraphs
    else {
      content.push({
        type: 'paragraph',
        content: trimmed
      });
    }
  });

  return content;
}

// Convert insight data to Article type
function convertToArticle(insightArticle: typeof insightsData.articles[0]): Article {
  return {
    id: insightArticle.id,
    title: insightArticle.title,
    slug: insightArticle.slug,
    excerpt: insightArticle.excerpt,
    featuredImage: insightArticle.featuredImage,
    category: insightArticle.category as Article['category'],
    author: insightArticle.author,
    date: insightArticle.date,
    readTime: insightArticle.readTime,
    tags: insightArticle.tags,
    relatedArticles: [],
    seo: insightArticle.seo,
    content: convertMarkdownToContent(insightArticle.contentMd)
  };
}

// Export articles array
export const articles: Article[] = insightsData.articles.map(convertToArticle);

// Add related articles references
articles.forEach(article => {
  if (article.id === 'q4-2025-cbd-fringe-snapshot') {
    article.relatedArticles = ['the-fringe-advantage', '2026-outlook-lease-renewals-and-rents'];
  } else if (article.id === 'the-fringe-advantage') {
    article.relatedArticles = ['q4-2025-cbd-fringe-snapshot', '2026-outlook-lease-renewals-and-rents'];
  } else if (article.id === '2026-outlook-lease-renewals-and-rents') {
    article.relatedArticles = ['preparing-for-a-lease-renewal', 'understanding-market-incentives'];
  } else if (article.id === 'preparing-for-a-lease-renewal') {
    article.relatedArticles = ['understanding-market-incentives', '2026-outlook-lease-renewals-and-rents'];
  } else if (article.id === 'understanding-market-incentives') {
    article.relatedArticles = ['preparing-for-a-lease-renewal', 'the-6-month-relocation-plan'];
  } else if (article.id === 'the-6-month-relocation-plan') {
    article.relatedArticles = ['understanding-market-incentives', 'the-ai-advantage'];
  } else if (article.id === 'the-ai-advantage') {
    article.relatedArticles = ['understanding-market-incentives', 'preparing-for-a-lease-renewal'];
  }
});

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find(article => article.slug === slug);
}

export function getArticleById(id: string): Article | undefined {
  return articles.find(article => article.id === id);
}

export function getRelatedArticles(articleId: string): Article[] {
  const article = getArticleById(articleId);
  if (!article || !article.relatedArticles) return [];
  
  return article.relatedArticles
    .map(id => getArticleById(id))
    .filter((a): a is Article => a !== undefined)
    .slice(0, 3);
}

export function getArticlesByCategory(category: Article['category']): Article[] {
  return articles.filter(article => article.category === category);
}

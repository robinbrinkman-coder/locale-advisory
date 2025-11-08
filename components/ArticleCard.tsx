import { ImageWithFallback } from './figma/ImageWithFallback';
import { Calendar, Clock } from 'lucide-react';
import { Article } from '../types/article';

interface ArticleCardProps {
  article: Article;
  onClick: () => void;
  variant?: 'default' | 'horizontal' | 'minimal';
}

export function ArticleCard({ article, onClick, variant = 'default' }: ArticleCardProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-AU', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  if (variant === 'horizontal') {
    return (
      <div 
        className="bg-[#FAF9F7] p-6 md:p-10 rounded-lg group hover:bg-white transition-colors cursor-pointer"
        onClick={onClick}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 items-center">
          <div className="lg:col-span-8">
            <h3 className="mb-4">{article.title}</h3>
            <p className="opacity-70 leading-relaxed mb-6">
              {article.excerpt}
            </p>
            <div className="flex items-center gap-4 mb-4 opacity-60">
              <span className="flex items-center gap-2">
                <Calendar size={16} />
                {formatDate(article.date)}
              </span>
              <span className="flex items-center gap-2">
                <Clock size={16} />
                {article.readTime} min read
              </span>
            </div>
            <span className="text-[#E6B450] group-hover:underline flex items-center gap-2">
              Read more →
            </span>
          </div>
          <div className="lg:col-span-4">
            <ImageWithFallback
              src={article.featuredImage}
              alt={article.title}
              className="w-full h-[180px] object-cover rounded"
            />
          </div>
        </div>
      </div>
    );
  }

  if (variant === 'minimal') {
    return (
      <div 
        className="group cursor-pointer w-full text-left"
        onClick={onClick}
      >
        <div className="relative overflow-hidden rounded mb-4">
          <ImageWithFallback
            src={article.featuredImage}
            alt={article.title}
            className="w-full h-[200px] object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-[#E6B450] opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
        </div>
        <h4 className="mb-2 group-hover:text-[#E6B450] transition-colors">
          {article.title}
        </h4>
        <p className="text-sm opacity-60 mb-3 line-clamp-2">
          {article.excerpt}
        </p>
        <div className="flex items-center gap-3 text-xs opacity-50">
          <span className="flex items-center gap-1">
            <Calendar size={14} />
            {formatDate(article.date)}
          </span>
          <span className="flex items-center gap-1">
            <Clock size={14} />
            {article.readTime} min
          </span>
        </div>
      </div>
    );
  }

  return (
    <div 
      className="group cursor-pointer w-full text-left"
      onClick={onClick}
    >
      <div className="relative overflow-hidden rounded">
        <ImageWithFallback
          src={article.featuredImage}
          alt={article.title}
          className="w-full h-[250px] md:h-[300px] object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-[#E6B450] opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
      </div>
    </div>
  );
}

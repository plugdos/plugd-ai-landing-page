
import { Calendar, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface Article {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  date: string;
  author: string;
  authorRole: string;
  readTime: string;
}

interface FeaturedArticleProps {
  article: Article;
}

export function FeaturedArticle({ article }: FeaturedArticleProps) {
  return (
    <div className="group relative overflow-hidden rounded-xl border bg-card shadow-soft hover-scale">
      <a href={`/blog/${article.id}`} className="block">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="relative h-64 md:h-full overflow-hidden">
            <img 
              src={article.image} 
              alt={article.title} 
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent md:bg-gradient-to-r md:from-black/30 md:to-transparent"></div>
            <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
              Featured
            </Badge>
          </div>
          
          <div className="flex flex-col justify-center p-6 md:p-8">
            <div className="mb-4">
              <Badge variant="outline" className="text-xs">
                {article.category}
              </Badge>
            </div>
            
            <h2 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-primary/80 transition-colors">
              {article.title}
            </h2>
            
            <p className="text-muted-foreground mb-6">
              {article.excerpt}
            </p>
            
            <div className="mt-auto">
              <div className="flex items-center gap-4 mb-4">
                <div className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center">
                  {article.author.charAt(0)}
                </div>
                <div>
                  <p className="font-medium">{article.author}</p>
                  <p className="text-xs text-muted-foreground">{article.authorRole}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  {article.date}
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  {article.readTime}
                </div>
              </div>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}

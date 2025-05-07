
import { Calendar, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";

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

interface ArticleCardProps {
  article: Article;
}

export function ArticleCard({ article }: ArticleCardProps) {
  return (
    <Card className="overflow-hidden hover-scale border shadow-soft">
      <a href={`/blog/${article.id}`} className="block">
        <div className="relative h-48 overflow-hidden">
          <img 
            src={article.image} 
            alt={article.title} 
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        
        <CardHeader className="pt-6 pb-0">
          <div className="mb-2">
            <Badge variant="outline" className="text-xs">
              {article.category}
            </Badge>
          </div>
          <h3 className="text-xl font-bold line-clamp-2 group-hover:text-primary/80 transition-colors">
            {article.title}
          </h3>
        </CardHeader>
        
        <CardContent className="py-4">
          <p className="text-muted-foreground line-clamp-3">
            {article.excerpt}
          </p>
        </CardContent>
        
        <CardFooter className="pt-0 pb-6 flex flex-col items-start">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-8 w-8 rounded-full bg-secondary flex items-center justify-center text-sm">
              {article.author.charAt(0)}
            </div>
            <p className="text-sm">{article.author}</p>
          </div>
          
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <div className="flex items-center">
              <Calendar className="h-3 w-3 mr-1" />
              {article.date}
            </div>
            <div className="flex items-center">
              <Clock className="h-3 w-3 mr-1" />
              {article.readTime}
            </div>
          </div>
        </CardFooter>
      </a>
    </Card>
  );
}

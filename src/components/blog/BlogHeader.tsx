
import { ScrollText } from "lucide-react";

export function BlogHeader() {
  return (
    <header className="text-center max-w-3xl mx-auto">
      <div className="inline-flex items-center gap-2 mb-4">
        <ScrollText className="h-5 w-5 text-primary/80" />
        <span className="text-sm font-medium">BLOG</span>
      </div>
      
      <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6">
        Insights & Resources
      </h1>
      
      <p className="text-xl text-muted-foreground">
        Expert perspectives, industry trends, and practical advice on AI-powered workflow automation.
      </p>
      
      <div className="mt-10 flex flex-wrap gap-3 justify-center">
        <button className="px-4 py-2 bg-primary text-primary-foreground rounded-full text-sm font-medium">
          All Posts
        </button>
        <button className="px-4 py-2 hover:bg-secondary rounded-full text-sm font-medium transition-colors">
          Technology
        </button>
        <button className="px-4 py-2 hover:bg-secondary rounded-full text-sm font-medium transition-colors">
          Use Cases
        </button>
        <button className="px-4 py-2 hover:bg-secondary rounded-full text-sm font-medium transition-colors">
          Industry Insights
        </button>
        <button className="px-4 py-2 hover:bg-secondary rounded-full text-sm font-medium transition-colors">
          Case Studies
        </button>
        <button className="px-4 py-2 hover:bg-secondary rounded-full text-sm font-medium transition-colors">
          Company News
        </button>
      </div>
    </header>
  );
}

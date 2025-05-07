
import { Helmet } from "react-helmet";
import { Navbar } from "@/components/navigation/Navbar";
import { BlogHeader } from "@/components/blog/BlogHeader";
import { FeaturedArticle } from "@/components/blog/FeaturedArticle";
import { ArticleCard } from "@/components/blog/ArticleCard";

const Blog = () => {
  // Sample blog article data
  const featuredArticle = {
    id: "001",
    title: "The Future of AI Automation in Enterprise Workflows",
    excerpt: "How generative AI and intelligent agents are transforming business processes across industries.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=1200&q=80",
    category: "Industry Insights",
    date: "May 5, 2025",
    author: "Sarah Johnson",
    authorRole: "Chief AI Officer",
    readTime: "8 min read",
  };

  const articles = [
    {
      id: "002",
      title: "5 Ways AI is Revolutionizing Financial Operations",
      excerpt: "Discover how AI is eliminating manual processes and reducing errors in financial departments.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80",
      category: "Use Cases",
      date: "April 28, 2025",
      author: "Michael Chen",
      authorRole: "Finance Technology Lead",
      readTime: "6 min read",
    },
    {
      id: "003",
      title: "Building Ethical AI Systems: Our Approach",
      excerpt: "How plugd.ai designs responsible automation with human-centered principles.",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=600&q=80",
      category: "Company Culture",
      date: "April 15, 2025",
      author: "Amara Wilson",
      authorRole: "Ethics Researcher",
      readTime: "10 min read",
    },
    {
      id: "004",
      title: "Case Study: How TechCorp Automated 85% of Document Processing",
      excerpt: "A detailed look at how our platform transformed operations for a Fortune 500 tech company.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=600&q=80",
      category: "Case Study",
      date: "April 8, 2025",
      author: "David Park",
      authorRole: "Customer Success Director",
      readTime: "12 min read",
    },
    {
      id: "005",
      title: "Understanding RAG Technology for Enhanced AI Performance",
      excerpt: "A technical deep dive into retrieval-augmented generation and its applications.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80",
      category: "Technology",
      date: "March 30, 2025",
      author: "Elena Rodriguez",
      authorRole: "Lead AI Engineer",
      readTime: "15 min read",
    },
    {
      id: "006",
      title: "The Human Side of Automation: Empowering Teams Through AI",
      excerpt: "How to implement AI solutions that augment rather than replace human workers.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80",
      category: "Future of Work",
      date: "March 22, 2025",
      author: "James Wilson",
      authorRole: "Organizational Psychologist",
      readTime: "7 min read",
    }
  ];

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Blog - plugd.ai | AI-Powered Workflow Automation</title>
        <meta 
          name="description" 
          content="Explore articles, insights, and case studies about AI-powered workflow automation from plugd.ai" 
        />
      </Helmet>
      
      <Navbar />
      
      <main className="pt-24 pb-20">
        <div className="container px-4 md:px-6">
          <BlogHeader />
          
          <section className="mt-10 mb-20">
            <FeaturedArticle article={featuredArticle} />
          </section>
          
          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-8">Latest Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          </section>
          
          <div className="mt-16 flex justify-center">
            <button className="px-6 py-3 border border-primary/50 bg-background hover:bg-secondary transition-colors rounded-lg flex items-center gap-2">
              Load More Articles
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M7 13l5 5 5-5M7 6l5 5 5-5"/>
              </svg>
            </button>
          </div>
        </div>
      </main>
      
      <footer className="py-12 border-t">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-medium mb-4">plugd.ai</h3>
              <p className="text-sm text-muted-foreground">
                AI-powered workflow automation for the enterprise
              </p>
            </div>
            <div>
              <h3 className="text-sm font-medium mb-4">Product</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-sm text-muted-foreground hover:text-primary">Features</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-primary">Use Cases</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-primary">Pricing</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-primary">Security</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-medium mb-4">Company</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-sm text-muted-foreground hover:text-primary">About</a></li>
                <li><a href="/blog" className="text-sm text-muted-foreground hover:text-primary">Blog</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-primary">Careers</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-primary">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-medium mb-4">Legal</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-sm text-muted-foreground hover:text-primary">Privacy</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-primary">Terms</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-primary">Cookies</a></li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center mt-12 pt-8 border-t">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} plugd.ai. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-muted-foreground hover:text-primary">
                <span className="sr-only">Twitter</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Blog;

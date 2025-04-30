
import { Button } from "@/components/ui/button";
import { Brain } from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto animate-fade-in">
          <div className="inline-flex items-center gap-2 mb-4">
            <Brain className="h-6 w-6 text-primary/80" />
            <div className="inline-block rounded-full bg-secondary px-3 py-1 text-sm">
              AI-Powered Automation
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-6">
            The Future of AI-Powered Workflows
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto">
            One platform to automate high‑value work across your enterprise.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md mx-auto">
            <Button size="lg" className="w-full">
              Request a Demo
            </Button>
            <Button size="lg" variant="outline" className="w-full">
              Talk to Sales
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute w-full max-w-7xl left-1/2 transform -translate-x-1/2 mt-20 px-4">
        <div className="aspect-[16/9] rounded-2xl overflow-hidden border shadow-soft-lg bg-muted/30">
          <div className="w-full h-full bg-gradient-to-b from-muted/50 to-muted flex items-center justify-center">
            <p className="text-muted-foreground">AI Dashboard Visualization</p>
          </div>
        </div>
      </div>
    </section>
  );
}

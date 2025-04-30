
import { Eye } from "lucide-react";

export function Vision() {
  return (
    <section className="py-20 md:py-32 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-10">
          <div className="inline-flex items-center gap-2 mb-4">
            <Eye className="h-5 w-5 text-primary/80" />
            <span className="text-sm font-medium">OUR VISION</span>
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center">
          <blockquote className="text-2xl md:text-3xl lg:text-4xl font-medium leading-tight tracking-tight">
            "One intelligent agent per employee — working 24/7 to get things done."
          </blockquote>
          <div className="mt-8">
            <p className="text-lg text-muted-foreground">
              We're building a future where AI works alongside humans, handling routine tasks
              so people can focus on creative and strategic work.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

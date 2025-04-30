
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";

export function Cta() {
  return (
    <section className="py-20 md:py-32">
      <div className="container px-4 md:px-6">
        <Card className="border shadow-soft bg-card max-w-4xl mx-auto overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="p-8 lg:p-10">
              <CardHeader className="px-0 pt-0">
                <div className="inline-flex items-center gap-2 mb-4">
                  <Mail className="h-5 w-5 text-primary/80" />
                  <span className="text-sm font-medium">GET STARTED</span>
                </div>
                <h2 className="text-3xl font-bold tracking-tighter mb-4">
                  Ready to transform your workflows?
                </h2>
                <p className="text-muted-foreground">
                  Schedule a demo to see how plugd.ai can automate your most complex business processes.
                </p>
              </CardHeader>
              
              <CardContent className="px-0 py-6">
                <form className="space-y-4">
                  <div className="grid grid-cols-1 gap-4">
                    <Input type="text" placeholder="Full name" />
                    <Input type="email" placeholder="Work email" />
                    <Input type="text" placeholder="Company" />
                  </div>
                  <Button type="submit" size="lg" className="w-full">
                    Request a Demo
                  </Button>
                </form>
              </CardContent>
              
              <CardFooter className="px-0 pt-2 pb-0 flex flex-col items-start">
                <p className="text-sm text-muted-foreground">
                  Or contact us directly at{" "}
                  <a href="mailto:hello@plugd.ai" className="text-primary hover:underline">
                    hello@plugd.ai
                  </a>
                </p>
              </CardFooter>
            </div>
            
            <div className="hidden lg:block bg-muted/50 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-muted/30 to-muted/10"></div>
              <div className="absolute inset-0 flex items-center justify-center p-6">
                <div className="text-center">
                  <h3 className="text-xl font-medium mb-2">Join innovative companies</h3>
                  <p className="text-sm text-muted-foreground mb-6">
                    Trusted by leading enterprises across industries
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="h-10 bg-background/50 rounded flex items-center justify-center">
                        <span className="text-xs text-muted-foreground">Company Logo</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}

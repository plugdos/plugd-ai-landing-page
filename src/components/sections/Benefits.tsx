
import { Award, DollarSign, Percent, Check } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export function Benefits() {
  const benefits = [
    {
      title: "Save 100s of hours",
      description: "Automate repetitive tasks and free your team to focus on high-value work.",
      icon: Award,
    },
    {
      title: "Cut ops cost by 30%",
      description: "Reduce operational expenses through intelligent automation of workflows.",
      icon: DollarSign,
    },
    {
      title: "Reduce errors 70%+",
      description: "Eliminate human error and ensure consistent, accurate results every time.",
      icon: Percent,
    },
    {
      title: "Deploy in under 4 weeks",
      description: "Quick implementation with no-code tools and pre-built workflow templates.",
      icon: Check,
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-secondary/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <Check className="h-5 w-5 text-primary/80" />
            <span className="text-sm font-medium">BENEFITS</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
            Business Impact
          </h2>
          <p className="text-muted-foreground max-w-[700px]">
            Our customers see dramatic improvements in efficiency, accuracy, and cost savings.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            
            return (
              <Card key={index} className="hover-scale border shadow-soft text-center">
                <CardHeader className="pb-2 flex flex-col items-center">
                  <div className="p-3 rounded-full bg-secondary mb-4">
                    <Icon className="h-6 w-6 text-primary/80" />
                  </div>
                  <h3 className="text-xl font-medium">{benefit.title}</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}


import { BadgeCheck } from "lucide-react";
import { IconBadge } from "@/components/ui/badge";

export function Solution() {
  const features = [
    {
      title: "Intelligent Agents",
      description: "AI agents that understand context and execute complex workflows autonomously"
    },
    {
      title: "Generative AI",
      description: "Create documents, emails, and responses with human-like quality and accuracy"
    },
    {
      title: "RAG Technology",
      description: "Retrieval-augmented generation for accurate, context-aware responses"
    },
    {
      title: "KYC Automation",
      description: "Fully automated identity verification and compliance checks"
    },
    {
      title: "No-Code Builder",
      description: "Create and deploy workflows without technical expertise"
    }
  ];

  return (
    <section id="solutions" className="py-20 md:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 mb-2">
                <BadgeCheck className="h-5 w-5 text-primary/80" />
                <span className="text-sm font-medium">SOLUTION</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
                Meet plugd.ai – Your AI Workforce
              </h2>
              <p className="text-lg text-muted-foreground">
                An intelligent automation platform that uses AI agents to execute full business
                workflows with minimal human intervention.
              </p>
            </div>

            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <IconBadge icon={BadgeCheck} variant="secondary" className="mt-0.5">
                    {feature.title}
                  </IconBadge>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="aspect-square rounded-2xl overflow-hidden border shadow-soft">
            <div className="w-full h-full bg-gradient-to-br from-secondary to-secondary/30 flex items-center justify-center">
              <p className="text-muted-foreground">Solution Illustration</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


import { CircleArrowRight, Phone, Users, FileSearch, Flask, Rocket, Settings } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function HowItWorks() {
  const steps = [
    {
      title: "Initial Contact",
      description:
        "Reach out to us through our contact form or schedule a discovery call to discuss your automation needs and challenges.",
      icon: Phone
    },
    {
      title: "Discovery Meeting",
      description:
        "We meet to deeply understand your use cases, identify automation opportunities, and pinpoint bottlenecks that can be solved with AI.",
      icon: Users
    },
    {
      title: "Solution Design",
      description:
        "Our team designs a tailored solution that addresses your specific challenges and creates a roadmap for implementation.",
      icon: FileSearch
    },
    {
      title: "Free Proof of Concept",
      description:
        "We develop a custom, no-cost proof of concept to demonstrate the value and feasibility of your automation solution.",
      icon: Flask
    },
    {
      title: "Demo & Feedback",
      description:
        "We present the PoC, gather your feedback, and make necessary adjustments to ensure the solution meets your exact requirements.",
      icon: Rocket
    },
    {
      title: "Implementation & Continuous Improvement",
      description:
        "Once approved, we implement the full automation solution and provide ongoing optimization to ensure maximum efficiency and ROI.",
      icon: Settings
    }
  ];

  return (
    <section id="how-it-works" className="py-20 md:py-32 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <CircleArrowRight className="h-5 w-5 text-primary/80" />
            <span className="text-sm font-medium">PROCESS</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
            How We Work
          </h2>
          <p className="text-muted-foreground max-w-[700px]">
            Our collaborative approach ensures we deliver customized automation solutions 
            that address your specific business challenges.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {steps.map((step, index) => (
              <AccordionItem key={index} value={`step-${index}`}>
                <AccordionTrigger className="text-left hover:no-underline">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-secondary text-primary">
                      <step.icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-medium">{step.title}</h3>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pl-14">
                  <p className="text-muted-foreground">{step.description}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}

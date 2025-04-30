
import { FileCheck, FileX, FilePlus, FileMinus } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";

export function UseCases() {
  const useCases = [
    {
      title: "KYC/KYB Checks",
      description:
        "Automatically validate identity and compliance documents, reducing processing time from days to minutes.",
      icon: FileCheck,
    },
    {
      title: "Contract Obligation Tracking",
      description:
        "Extract key dates and obligations from contracts and automatically set alerts for critical deadlines.",
      icon: FileMinus,
    },
    {
      title: "Payment Reconciliation",
      description:
        "Match invoices, purchase orders, and delivery receipts across systems to eliminate discrepancies.",
      icon: FilePlus,
    },
    {
      title: "RAG Assistants",
      description:
        "Deploy smart assistants that combine your internal documents with external data for accurate responses.",
      icon: FileCheck,
    },
    {
      title: "Catalog Onboarding",
      description:
        "Automatically format product data from various sources into a consistent structure, supporting multiple languages.",
      icon: FilePlus,
    },
    {
      title: "Ticket Resolution",
      description:
        "Draft and route customer support responses with appropriate solutions based on historical data.",
      icon: FileX,
    },
  ];

  return (
    <section id="use-cases" className="py-20 md:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <FileCheck className="h-5 w-5 text-primary/80" />
            <span className="text-sm font-medium">USE CASES</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
            Transform Your Business Operations
          </h2>
          <p className="text-muted-foreground max-w-[700px]">
            plugd.ai can be applied across departments to automate a wide range of 
            complex workflows.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon;
            
            return (
              <Card key={index} className="hover-scale border shadow-soft">
                <CardHeader className="pb-2">
                  <Icon className="h-8 w-8 mb-2 text-primary/80" />
                  <h3 className="text-xl font-medium">{useCase.title}</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{useCase.description}</p>
                </CardContent>
                <CardFooter>
                  <a href="#" className="text-sm text-primary hover:underline">
                    Learn more →
                  </a>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

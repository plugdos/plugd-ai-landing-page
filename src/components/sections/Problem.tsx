
import { Puzzle } from "lucide-react";
import { IconBadge } from "@/components/ui/badge";

export function Problem() {
  const problems = [
    {
      title: "Manual Tasks",
      description:
        "Repetitive high-value tasks consume significant employee time and resources across departments."
    },
    {
      title: "Fragmented Tools",
      description:
        "Multiple disconnected systems require constant human supervision and manual data transfer."
    },
    {
      title: "Human Error",
      description:
        "Critical processes are prone to mistakes, causing compliance issues and operational delays."
    },
    {
      title: "IT Backlog",
      description:
        "Teams wait months for automation solutions while business needs go unaddressed."
    }
  ];

  return (
    <section id="problems" className="py-20 md:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 mb-2">
                <Puzzle className="h-5 w-5 text-destructive/80" />
                <span className="text-sm font-medium">CHALLENGES</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
                The Automation Gap Today
              </h2>
              <p className="text-lg text-muted-foreground">
                Organizations face significant challenges when trying to automate complex workflows
                across different departments and systems.
              </p>
            </div>

            <div className="space-y-4">
              {problems.map((problem, index) => (
                <div key={index} className="flex items-start gap-3">
                  <IconBadge icon={Puzzle} variant="destructive" className="mt-0.5">
                    {problem.title}
                  </IconBadge>
                  <p className="text-muted-foreground text-sm">{problem.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="aspect-square rounded-2xl overflow-hidden border shadow-soft">
            <div className="w-full h-full bg-gradient-to-br from-destructive/20 to-destructive/5 flex items-center justify-center">
              <p className="text-muted-foreground">Challenges Illustration</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

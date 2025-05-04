
import { CircleArrowRight, Database, Workflow, Layers, ArrowsUpFromLine } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHeader, TableHead, TableRow } from "@/components/ui/table";

export function Production() {
  // Sample data to represent chaotic input vs organized output
  const chaosData = [
    { id: "INV-2931", client: "Acme Corp", amount: "$4,200", status: "PENDING", date: "2025-03-15", source: "Email" },
    { id: "PO-8712", client: "GlobalTech", amount: "$1,850", status: "RECEIVED", date: "2025-03-18", source: "API" },
    { id: "CLM-4567", client: "Acme Corp", amount: "$3,600", status: "DISPUTED", date: "2025-03-14", source: "Portal" },
    { id: "INV-3082", client: "Innovex", amount: "$7,900", status: "PROCESSING", date: "2025-03-16", source: "CSV" },
    { id: "CLM-4568", client: "TechGiant", amount: "$2,340", status: "MISSING_INFO", date: "2025-03-17", source: "Email" }
  ];

  const organizedData = [
    { id: "INV-2931", client: "Acme Corp", amount: "$4,200", status: "Ready for Payment", action: "Approve Payment", priority: "Medium" },
    { id: "PO-8712", client: "GlobalTech", amount: "$1,850", status: "Matched", action: "None Required", priority: "Low" },
    { id: "CLM-4567", client: "Acme Corp", amount: "$3,600", status: "Requires Review", action: "Contact Client", priority: "High" },
    { id: "INV-3082", client: "Innovex", amount: "$7,900", status: "Validated", action: "Schedule Payment", priority: "Medium" },
    { id: "CLM-4568", client: "TechGiant", amount: "$2,340", status: "Missing Information", action: "Request Details", priority: "High" }
  ];

  return (
    <section id="production" className="py-20 md:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <CircleArrowRight className="h-5 w-5 text-primary/80" />
            <span className="text-sm font-medium">PRODUCTION</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
            From Chaos to Clarity
          </h2>
          <p className="text-muted-foreground max-w-[700px]">
            See how our solution transforms disorganized data from multiple sources into 
            actionable insights you can use to automate decisions or take manual action.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* From multiple sources */}
          <Card className="overflow-hidden border-2 border-dashed border-muted">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Database className="h-6 w-6 text-muted-foreground" />
                <h3 className="text-xl font-semibold">Multiple Data Sources</h3>
              </div>
              <p className="text-muted-foreground mb-6">
                Raw input data comes in various formats from different systems, with inconsistent 
                structures and conflicting information.
              </p>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>ID</TableHead>
                      <TableHead>Client</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Source</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {chaosData.map((item) => (
                      <TableRow key={item.id} className="bg-opacity-80">
                        <TableCell>{item.id}</TableCell>
                        <TableCell>{item.client}</TableCell>
                        <TableCell>{item.amount}</TableCell>
                        <TableCell><span className="text-xs font-mono bg-muted px-1.5 py-0.5 rounded">{item.status}</span></TableCell>
                        <TableCell>{item.source}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>

          {/* To actionable data */}
          <Card className="overflow-hidden border-2 border-primary/20">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <ArrowsUpFromLine className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-semibold">Actionable Data</h3>
              </div>
              <p className="text-muted-foreground mb-6">
                Our AI-powered workflow transforms, normalizes and enriches the data, 
                presenting clear insights with recommended actions.
              </p>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>ID</TableHead>
                      <TableHead>Client</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Action</TableHead>
                      <TableHead>Priority</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {organizedData.map((item) => (
                      <TableRow key={item.id}>
                        <TableCell>{item.id}</TableCell>
                        <TableCell>{item.client}</TableCell>
                        <TableCell>{item.amount}</TableCell>
                        <TableCell>{item.status}</TableCell>
                        <TableCell>{item.action}</TableCell>
                        <TableCell>
                          <span className={`inline-flex px-2 py-1 text-xs rounded-full ${
                            item.priority === "High" ? "bg-red-100 text-red-700" : 
                            item.priority === "Medium" ? "bg-amber-100 text-amber-700" : 
                            "bg-green-100 text-green-700"
                          }`}>
                            {item.priority}
                          </span>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
          <div className="flex flex-col items-center text-center md:text-left md:items-start max-w-sm">
            <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 mb-4">
              <Workflow className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-medium mb-2">Intelligent Workflow</h3>
            <p className="text-muted-foreground">
              Our AI processes normalize, match, and validate data across systems, ensuring clean and accurate information.
            </p>
          </div>

          <div className="flex flex-col items-center text-center md:text-left md:items-start max-w-sm">
            <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 mb-4">
              <Layers className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-medium mb-2">Human + AI Collaboration</h3>
            <p className="text-muted-foreground">
              Routine decisions are automated while complex cases are routed to your team with AI-powered recommendations.
            </p>
          </div>

          <div className="flex flex-col items-center text-center md:text-left md:items-start max-w-sm">
            <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 mb-4">
              <Database className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-medium mb-2">Continuous Learning</h3>
            <p className="text-muted-foreground">
              The system improves over time, learning from your decisions to automate more processes with higher accuracy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}


import { CircleArrowRight, Database, Workflow, Layers, ArrowsUpFromLine, FileJson, FileXml, File, FileArchive } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHeader, TableHead, TableRow } from "@/components/ui/table";

export function Production() {
  // Sample data to represent organized output
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
            See how our solution transforms disorganized data from multiple sources and formats into 
            actionable insights you can use to automate decisions or take manual action.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* From multiple unstructured sources */}
          <Card className="overflow-hidden border-2 border-dashed border-muted">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Database className="h-6 w-6 text-muted-foreground" />
                <h3 className="text-xl font-semibold">Multiple Unstructured Sources</h3>
              </div>
              <p className="text-muted-foreground mb-6">
                Raw input data arrives in various formats from different systems - emails, PDFs, JSON files, 
                XML documents, and spreadsheets - with inconsistent structures and missing information.
              </p>
              
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="flex flex-col items-center p-4 bg-muted/30 rounded-lg border border-dashed">
                  <FileJson className="h-10 w-10 text-blue-500 mb-2" />
                  <span className="text-xs font-mono">customer_data.json</span>
                  <div className="mt-2 text-xs font-mono p-2 bg-muted rounded w-full overflow-hidden">
                    {"{ \"cust\": \"AC01\", \"amt\": 4200... }"}
                  </div>
                </div>
                
                <div className="flex flex-col items-center p-4 bg-muted/30 rounded-lg border border-dashed">
                  <FileXml className="h-10 w-10 text-orange-500 mb-2" />
                  <span className="text-xs font-mono">invoice-4567.xml</span>
                  <div className="mt-2 text-xs font-mono p-2 bg-muted rounded w-full overflow-hidden">
                    {"<inv><id>CLM4567</id><amt>3600</amt>..."}
                  </div>
                </div>
                
                <div className="flex flex-col items-center p-4 bg-muted/30 rounded-lg border border-dashed">
                  <File className="h-10 w-10 text-slate-500 mb-2" />
                  <span className="text-xs font-mono">finance_report.pdf</span>
                  <div className="mt-2 text-xs text-center text-muted-foreground">
                    Unstructured PDF document
                  </div>
                </div>

                <div className="flex flex-col items-center p-4 bg-muted/30 rounded-lg border border-dashed">
                  <FileArchive className="h-10 w-10 text-green-500 mb-2" />
                  <span className="text-xs font-mono">legacy_exports.zip</span>
                  <div className="mt-2 text-xs text-center text-muted-foreground">
                    Multiple legacy CSV files
                  </div>
                </div>
                
                <div className="flex flex-col items-center p-4 bg-muted/30 rounded-lg border border-dashed">
                  <File className="h-10 w-10 text-gray-500 mb-2" />
                  <span className="text-xs font-mono">freeform_email.eml</span>
                  <div className="mt-2 text-xs font-mono p-2 bg-muted rounded w-full overflow-hidden">
                    {"Subject: PO #8712\nPlease process..."}
                  </div>
                </div>
                
                <div className="flex flex-col items-center p-4 bg-muted/30 rounded-lg border border-dashed">
                  <File className="h-10 w-10 text-red-500 mb-2" />
                  <span className="text-xs font-mono">scanned_document.png</span>
                  <div className="mt-2 text-xs text-center text-muted-foreground">
                    Image with tabular data
                  </div>
                </div>
              </div>
              
              <div className="p-3 bg-muted/50 rounded-lg">
                <p className="text-sm text-center text-muted-foreground italic">
                  Unstructured, inconsistent formats with no standardization or validation
                </p>
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
                Our AI-powered workflow transforms, normalizes and enriches the data from all sources, 
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

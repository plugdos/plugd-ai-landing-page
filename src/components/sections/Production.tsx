
import { CircleArrowRight, Database, Workflow, Layers, ArrowsUpFromLine, FileJson, File, FileArchive, Sparkles, Brain, Cpu } from "lucide-react";
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
    <section id="production" className="py-20 md:py-32 bg-gradient-to-b from-white to-slate-50 dark:from-background dark:to-background/95">
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
            Our <span className="text-primary font-semibold">AI-powered workflow</span> transforms disorganized data from multiple sources and formats into 
            actionable insights you can use to automate decisions or take manual action.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* From multiple unstructured sources */}
          <Card className="overflow-hidden border-2 border-dashed border-muted md:col-span-1">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Database className="h-6 w-6 text-muted-foreground" />
                <h3 className="text-xl font-semibold">Chaotic Data Sources</h3>
              </div>
              <p className="text-muted-foreground mb-6">
                Raw input arrives in various formats with inconsistent structures and missing information.
              </p>
              
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="flex flex-col items-center p-3 bg-muted/30 rounded-lg border border-dashed">
                  <FileJson className="h-8 w-8 text-blue-500 mb-2" />
                  <span className="text-xs font-mono">customer_data.json</span>
                  <div className="mt-2 text-[10px] font-mono p-1 bg-muted rounded w-full overflow-hidden">
                    {"{ \"cust\": \"AC01\", \"amt\": 4200... }"}
                  </div>
                </div>
                
                <div className="flex flex-col items-center p-3 bg-muted/30 rounded-lg border border-dashed">
                  <File className="h-8 w-8 text-orange-500 mb-2" />
                  <span className="text-xs font-mono">invoice.xml</span>
                  <div className="mt-2 text-[10px] font-mono p-1 bg-muted rounded w-full overflow-hidden">
                    {"<inv><id>CLM4567</id>..."}
                  </div>
                </div>

                <div className="flex flex-col items-center p-3 bg-muted/30 rounded-lg border border-dashed">
                  <FileArchive className="h-8 w-8 text-green-500 mb-2" />
                  <span className="text-xs font-mono">legacy.zip</span>
                  <div className="mt-2 text-[10px] text-center text-muted-foreground">
                    Multiple CSV files
                  </div>
                </div>
                
                <div className="flex flex-col items-center p-3 bg-muted/30 rounded-lg border border-dashed">
                  <File className="h-8 w-8 text-red-500 mb-2" />
                  <span className="text-xs font-mono">scan.png</span>
                  <div className="mt-2 text-[10px] text-center text-muted-foreground">
                    Scanned document
                  </div>
                </div>
              </div>
              
              <div className="p-2 bg-rose-50 dark:bg-rose-950/30 rounded-lg border border-rose-200 dark:border-rose-800/30">
                <p className="text-xs text-center text-rose-700 dark:text-rose-400 italic">
                  Unstructured, inconsistent formats with no standardization
                </p>
              </div>
            </CardContent>
          </Card>

          {/* AI-powered workflow */}
          <Card className="overflow-hidden border-2 border-primary/20 md:col-span-1 relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-white text-xs font-semibold py-1 px-4 rounded-full">
              AI-Powered Workflow
            </div>
            <CardContent className="p-6 pt-8">
              <div className="flex flex-col items-center gap-4 py-4">
                <div className="relative flex items-center justify-center w-24 h-24 rounded-full bg-primary/10 p-2">
                  <Brain className="h-12 w-12 text-primary animate-pulse" />
                  <div className="absolute w-full h-full rounded-full border-4 border-primary/30 border-dashed animate-spin" style={{ animationDuration: '10s' }}></div>
                </div>
                
                <div className="space-y-3 w-full">
                  <div className="flex items-center gap-2 p-2 bg-primary/5 rounded-lg">
                    <Sparkles className="h-4 w-4 text-primary" />
                    <span className="text-sm">Document understanding</span>
                  </div>
                  
                  <div className="flex items-center gap-2 p-2 bg-primary/5 rounded-lg">
                    <Cpu className="h-4 w-4 text-primary" />
                    <span className="text-sm">Data extraction & normalization</span>
                  </div>
                  
                  <div className="flex items-center gap-2 p-2 bg-primary/5 rounded-lg">
                    <Layers className="h-4 w-4 text-primary" />
                    <span className="text-sm">Entity matching & enrichment</span>
                  </div>
                </div>
                
                <div className="w-full flex justify-center">
                  <ArrowsUpFromLine className="h-10 w-10 text-primary animate-bounce" />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* To actionable data */}
          <Card className="overflow-hidden border-2 border-primary/20 md:col-span-1">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <ArrowsUpFromLine className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-semibold">Actionable Data</h3>
              </div>
              <p className="text-muted-foreground mb-4 text-sm">
                Clean, organized data with clear actions and priorities.
              </p>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="text-xs">ID</TableHead>
                      <TableHead className="text-xs">Amount</TableHead>
                      <TableHead className="text-xs">Action</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {organizedData.slice(0, 3).map((item) => (
                      <TableRow key={item.id} className="text-xs">
                        <TableCell className="py-1">{item.id}</TableCell>
                        <TableCell className="py-1">{item.amount}</TableCell>
                        <TableCell className="py-1">
                          <span className={`inline-flex px-2 py-1 text-xs rounded-full ${
                            item.priority === "High" ? "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400" : 
                            item.priority === "Medium" ? "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400" : 
                            "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                          }`}>
                            {item.action}
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

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 max-w-4xl mx-auto">
          <div className="flex flex-col items-center text-center md:text-left md:items-start max-w-xs">
            <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 mb-4">
              <Workflow className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-medium mb-2">Intelligent Processing</h3>
            <p className="text-muted-foreground text-sm">
              Our AI engine normalizes, matches, and validates data with advanced machine learning algorithms.
            </p>
          </div>

          <div className="flex flex-col items-center text-center md:text-left md:items-start max-w-xs">
            <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 mb-4">
              <Cpu className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-medium mb-2">Adaptive Learning</h3>
            <p className="text-muted-foreground text-sm">
              The system learns from your decisions to continuously improve accuracy and automation.
            </p>
          </div>

          <div className="flex flex-col items-center text-center md:text-left md:items-start max-w-xs">
            <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 mb-4">
              <Sparkles className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-medium mb-2">Automated Actions</h3>
            <p className="text-muted-foreground text-sm">
              Routine decisions are handled automatically while complex cases get AI-powered recommendations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

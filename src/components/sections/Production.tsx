
import { CircleArrowRight, Database, Workflow, Layers, ArrowsUpFromLine, FileJson, File, FileArchive, Sparkles, Brain, Cpu, LucideIcon, MessageSquare, Image as ImageIcon, Mail, LineChart, CheckCircle2, Clock, AlertTriangle, ServerCog } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHeader, TableHead, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

type SystemIconProps = {
  icon: LucideIcon;
  label: string;
  color: string;
};

const SystemIcon = ({ icon: Icon, label, color }: SystemIconProps) => (
  <div className="flex flex-col items-center gap-1">
    <div className={`p-2 rounded-full ${color}`}>
      <Icon className="h-5 w-5 text-white" />
    </div>
    <span className="text-xs font-medium">{label}</span>
  </div>
);

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

        <div className="flex flex-col gap-16 max-w-4xl mx-auto">
          {/* Card 1: Multiple Systems */}
          <Card className="overflow-hidden border-2 border-dashed border-muted">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Database className="h-6 w-6 text-muted-foreground" />
                <h3 className="text-xl font-semibold">Multiple Enterprise Systems</h3>
              </div>
              <p className="text-muted-foreground mb-8">
                Clients typically use a variety of systems for different business functions, creating data silos that don't communicate with each other.
              </p>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 mb-8">
                <SystemIcon icon={Database} label="ERP System" color="bg-blue-600" />
                <SystemIcon icon={MessageSquare} label="CRM System" color="bg-green-600" />
                <SystemIcon icon={FileJson} label="Procurement" color="bg-purple-600" />
                <SystemIcon icon={LineChart} label="Analytics" color="bg-orange-600" />
                <SystemIcon icon={Mail} label="Email Systems" color="bg-indigo-600" />
                <SystemIcon icon={ServerCog} label="APIs" color="bg-rose-600" />
              </div>
              
              <div className="flex items-center justify-center">
                <ArrowsUpFromLine className="h-10 w-10 text-muted-foreground animate-bounce" />
              </div>
            </CardContent>
          </Card>
          
          {/* Card 2: Chaotic Data Formats */}
          <Card className="overflow-hidden border-2 border-dashed border-rose-200 dark:border-rose-800/30">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="h-6 w-6 text-rose-500" />
                <h3 className="text-xl font-semibold">Chaotic Data Formats</h3>
              </div>
              <p className="text-muted-foreground mb-6">
                Each system generates different data formats with inconsistent structures, making integration and analysis challenging.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                <div className="flex flex-col items-center p-3 bg-muted/30 rounded-lg border border-dashed">
                  <FileJson className="h-8 w-8 text-blue-500 mb-2" />
                  <span className="text-xs font-mono">customer_data.json</span>
                  <div className="mt-2 text-[10px] font-mono p-1 bg-muted rounded w-full overflow-hidden">
                    {"{ \"cust\": \"AC01\", \"amt\": 4200... }"}
                  </div>
                </div>
                
                <div className="flex flex-col items-center p-3 bg-muted/30 rounded-lg border border-dashed">
                  <File className="h-8 w-8 text-orange-500 mb-2" strokeWidth={1}>
                    <text x="50%" y="65%" fontSize="7" textAnchor="middle" fill="currentColor">XML</text>
                  </File>
                  <span className="text-xs font-mono">invoice.xml</span>
                  <div className="mt-2 text-[10px] font-mono p-1 bg-muted rounded w-full overflow-hidden">
                    {"<inv><id>CLM4567</id>..."}
                  </div>
                </div>

                <div className="flex flex-col items-center p-3 bg-muted/30 rounded-lg border border-dashed">
                  <FileArchive className="h-8 w-8 text-green-500 mb-2" />
                  <span className="text-xs font-mono">historical.zip</span>
                  <div className="mt-2 text-[10px] text-center text-muted-foreground">
                    Multiple CSV files
                  </div>
                </div>
                
                <div className="flex flex-col items-center p-3 bg-muted/30 rounded-lg border border-dashed">
                  <ImageIcon className="h-8 w-8 text-red-500 mb-2" />
                  <span className="text-xs font-mono">receipt.png</span>
                  <div className="mt-2 text-[10px] text-center text-muted-foreground">
                    Scanned document
                  </div>
                </div>
                
                <div className="flex flex-col items-center p-3 bg-muted/30 rounded-lg border border-dashed">
                  <Mail className="h-8 w-8 text-indigo-500 mb-2" />
                  <span className="text-xs font-mono">emails.eml</span>
                  <div className="mt-2 text-[10px] text-center text-muted-foreground">
                    Thread with attachments
                  </div>
                </div>
                
                <div className="flex flex-col items-center p-3 bg-muted/30 rounded-lg border border-dashed">
                  <File className="h-8 w-8 text-pink-500 mb-2" />
                  <span className="text-xs font-mono">contract.pdf</span>
                  <div className="mt-2 text-[10px] text-center text-muted-foreground">
                    Unstructured text
                  </div>
                </div>
              </div>
              
              <div className="p-3 bg-rose-50 dark:bg-rose-950/30 rounded-lg border border-rose-200 dark:border-rose-800/30">
                <p className="text-sm text-center text-rose-700 dark:text-rose-400">
                  <strong>Data Chaos:</strong> Inconsistent formats, missing fields, varying schemas, and unstructured content make it impossible to process data without manual intervention
                </p>
              </div>
              
              <div className="flex items-center justify-center mt-8">
                <ArrowsUpFromLine className="h-10 w-10 text-primary animate-bounce" />
              </div>
            </CardContent>
          </Card>

          {/* Card 3: AI-powered workflow */}
          <div className="relative mt-16">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 bg-primary text-primary-foreground text-xs font-semibold py-1 px-4 rounded-full">
              AI-Powered Workflow
            </div>
            <Card className="overflow-hidden border-2 border-primary/20 pt-6">
              <CardContent className="p-6">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="order-2 md:order-1">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 p-3 bg-primary/5 rounded-lg border border-primary/10 hover:bg-primary/10 transition-colors">
                        <div className="flex items-center justify-center min-w-10 h-10 rounded-full bg-primary/10">
                          <Brain className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="text-sm font-medium">Document Understanding</h4>
                          <p className="text-xs text-muted-foreground mt-1">Identifies document types and extracts relevant information regardless of format</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3 p-3 bg-primary/5 rounded-lg border border-primary/10 hover:bg-primary/10 transition-colors">
                        <div className="flex items-center justify-center min-w-10 h-10 rounded-full bg-primary/10">
                          <Cpu className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="text-sm font-medium">Data Extraction & Normalization</h4>
                          <p className="text-xs text-muted-foreground mt-1">Converts all formats to a standardized structure with consistent field naming</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3 p-3 bg-primary/5 rounded-lg border border-primary/10 hover:bg-primary/10 transition-colors">
                        <div className="flex items-center justify-center min-w-10 h-10 rounded-full bg-primary/10">
                          <Layers className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="text-sm font-medium">Entity Matching & Enrichment</h4>
                          <p className="text-xs text-muted-foreground mt-1">Connects related data across systems and fills in missing information</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3 p-3 bg-primary/5 rounded-lg border border-primary/10 hover:bg-primary/10 transition-colors">
                        <div className="flex items-center justify-center min-w-10 h-10 rounded-full bg-primary/10">
                          <Workflow className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="text-sm font-medium">Intelligent Decision Engine</h4>
                          <p className="text-xs text-muted-foreground mt-1">Applies business rules and machine learning to determine next actions</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-center order-1 md:order-2">
                    <div className="relative flex items-center justify-center w-48 h-48">
                      <div className="absolute w-full h-full rounded-full border-4 border-primary/30 border-dashed animate-spin" style={{ animationDuration: '10s' }}></div>
                      <div className="absolute w-3/4 h-3/4 rounded-full border-4 border-primary/20 border-dashed animate-spin" style={{ animationDuration: '7s', animationDirection: 'reverse' }}></div>
                      <div className="z-10 flex items-center justify-center w-32 h-32 rounded-full bg-primary/10 p-2">
                        <Brain className="h-16 w-16 text-primary animate-pulse" />
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-center mt-8">
                  <ArrowsUpFromLine className="h-10 w-10 text-primary animate-bounce" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Card 4: Actionable Data */}
          <Card className="overflow-hidden border-2 border-green-200 dark:border-green-800/30">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle2 className="h-6 w-6 text-green-500" />
                <h3 className="text-xl font-semibold">Actionable Data & Insights</h3>
              </div>
              <p className="text-muted-foreground mb-6">
                Clean, organized data with prioritized actions and clear next steps for every item.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h4 className="font-medium text-sm">Prioritized Actions</h4>
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
                              <Badge variant={
                                item.priority === "High" ? "destructive" : 
                                item.priority === "Medium" ? "default" : 
                                "outline"
                              } className="text-[10px]">
                                {item.action}
                              </Badge>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium text-sm mb-4">Business Benefits</h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-green-500" />
                      <span className="text-sm">80% reduction in processing time</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-500" />
                      <span className="text-sm">95% accuracy in data extraction</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Sparkles className="h-4 w-4 text-green-500" />
                      <span className="text-sm">Automates 70% of routine decisions</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <LineChart className="h-4 w-4 text-green-500" />
                      <span className="text-sm">Real-time insights across systems</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 max-w-4xl mx-auto mt-16">
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

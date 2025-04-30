
import { Shield, ShieldCheck, ShieldX } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function Enterprise() {
  const features = [
    {
      id: "security",
      label: "Security",
      icon: Shield,
      title: "Enterprise-Grade Security",
      description: "We prioritize your data security with industry-leading practices and controls.",
      details: [
        "ISO 27001 certified",
        "SOC 2 Type II compliant",
        "End-to-end encryption",
        "Role-based access controls",
        "Regular penetration testing"
      ]
    },
    {
      id: "compliance",
      label: "Compliance",
      icon: ShieldCheck,
      title: "Regulatory Compliance",
      description: "Stay compliant with changing regulations across industries and regions.",
      details: [
        "GDPR compliance built-in",
        "HIPAA compatible",
        "PCI DSS standards",
        "Comprehensive audit logs",
        "Data residency options"
      ]
    },
    {
      id: "controls",
      label: "Controls",
      icon: ShieldX,
      title: "Governance Controls",
      description: "Maintain oversight and control of all automated processes.",
      details: [
        "Human-in-the-loop workflows",
        "Approval mechanisms",
        "Detailed activity logs",
        "Bias detection and mitigation",
        "Version control and rollback"
      ]
    }
  ];

  return (
    <section id="enterprise" className="py-20 md:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <Shield className="h-5 w-5 text-primary/80" />
            <span className="text-sm font-medium">ENTERPRISE READY</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
            Built for Enterprise
          </h2>
          <p className="text-muted-foreground max-w-[700px]">
            plugd.ai provides the security, compliance, and control features required by 
            enterprise organizations.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="security" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              {features.map((feature) => (
                <TabsTrigger key={feature.id} value={feature.id} className="flex items-center gap-2">
                  <feature.icon className="h-4 w-4" />
                  <span className="hidden sm:inline">{feature.label}</span>
                </TabsTrigger>
              ))}
            </TabsList>
            
            {features.map((feature) => (
              <TabsContent key={feature.id} value={feature.id}>
                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <feature.icon className="h-6 w-6 text-primary/80" />
                      <CardTitle>{feature.title}</CardTitle>
                    </div>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
                      {feature.details.map((detail, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <Check className="h-4 w-4 text-primary/80 flex-shrink-0" />
                          <span className="text-sm">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
}

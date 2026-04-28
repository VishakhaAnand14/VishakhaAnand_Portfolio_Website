import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Inebura – AR SaaS Platform Transformation",
    description: "Led the transformation of Inebura into a scalable Accounts Receivable SaaS platform, redesigning product workflows and introducing automation to streamline financial operations.",
    impact: "Improved AR workflow efficiency by 60%",
    tags: ["FinTech", "SaaS", "Product Strategy", "Workflow Automation"],
    metrics: ["Multi-tenant SaaS architecture implementation", "Complete UI/UX workflow redesign", "Automated AR operational workflows"]
  },
  {
    title: "OCR-Based Invoice Processing Automation",
    description: "Implemented an OCR-powered document processing system to extract invoice and remittance data automatically, reducing manual data entry across financial operations.",
    impact: "70% reduction in manual invoice processing",
    tags: ["AI/ML", "OCR", "Automation", "FinTech"],
    metrics: ["Automated invoice data extraction", "Reduced human data entry errors", "Accelerated financial document processing"]
  },
  {
    title: "Cash Application Automation Engine",
    description: "Designed and launched an automated cash application system that matches incoming customer payments with open invoices to improve reconciliation speed and accuracy.",
    impact: "50% faster payment reconciliation",
    tags: ["FinTech", "Automation", "AR", "Payments"],
    metrics: ["Automated invoice-payment matching", "Reduced manual reconciliation work", "Improved AR accuracy and efficiency"]
  },
  {
    title: "AR Analytics & Reporting Dashboard",
    description: "Built Power BI dashboards enabling clients and internal teams to track key Accounts Receivable metrics and operational performance.",
    impact: "Enabled real-time AR performance insights",
    tags: ["Analytics", "Power BI", "Data Visualization", "SaaS"],
    metrics: ["KPI tracking for financial operations", "Interactive Power BI dashboards", "Improved visibility for stakeholders"]
  },
  {
    title: "Reporting Template Automation – Uniware",
    description: "Implemented automation across 20+ operational reporting templates in Uniware to eliminate manual adjustments and standardize reporting for enterprise eCommerce operations.",
    impact: "70% improvement in reporting efficiency",
    tags: ["Automation", "Reporting", "eCommerce", "Operations"],
    metrics: ["Automated 20+ reporting templates across operational workflows", "Reduced manual data adjustments and formatting effort", "Improved reporting accuracy and operational consistency"]
  },
  {
    title: "Uniware UI Workflow Enhancements",
    description: "Contributed to UI improvements in Uniware, simplifying configuration workflows and improving usability for enterprise clients managing large-scale order and inventory operations.",
    impact: "Improved usability for enterprise operations teams",
    tags: ["Product Design", "UX Improvement", "SaaS", "eCommerce"],
    metrics: ["Redesigned UI elements for easier data field management", "Simplified configuration workflows for operational teams", "Improved user experience for high-volume eCommerce clients"]
  }
];
const Projects = () => {
  return (
    <section id="projects" className="py-24 relative transparent">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-neon bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <div className="w-20 h-1 gradient-neon mx-auto mb-8 rounded-full shadow-neon"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A selection of products and features I've built, launched, and scaled
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="p-8 gradient-card neon-border shadow-card hover:shadow-neon transition-smooth animate-fade-in group hover:-translate-y-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-foreground group-hover:bg-gradient-neon group-hover:bg-clip-text group-hover:text-transparent transition-smooth">
                    {project.title}
                  </h3>
                  <ExternalLink className="text-muted-foreground group-hover:text-neon-cyan transition-smooth" size={20} />
                </div>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-6">
                  <p className="text-accent font-semibold">
                    {project.impact}
                  </p>
                </div>

                <div className="space-y-3 mb-6">
                  {project.metrics.map((metric, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                      <span className="text-sm text-muted-foreground">{metric}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <Badge key={i} variant="secondary" className="bg-muted/50 text-foreground border border-border/50 hover:border-neon-cyan/50 transition-smooth">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

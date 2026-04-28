import { Card } from "@/components/ui/card";
import { Brain, Cloud, Banknote, BarChart3 } from "lucide-react";

const values = [
  {
    icon: Brain,
    title: "AI Product Development",
    description: "Building AI-powered automation including OCR processing, intelligent alerts, and workflow optimization."
  },
  {
    icon: Cloud,
    title: "SaaS Platform Design",
    description: "Designing scalable multi-tenant SaaS products with configurable client environments."
  },
  {
    icon: Banknote,
    title: "Financial Automation",
    description: "Transforming Accounts Receivable workflows through automation and cash application systems."
  },
  {
    icon: BarChart3,
    title: "Data-Driven Strategy",
    description: "Using product analytics and KPIs to guide product decisions and improve user adoption."
  }
];

const About = () => {
  return (
    <section id="about" className="py-24 relative transparent">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-neon bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="w-20 h-1 gradient-neon mx-auto mb-8 rounded-full shadow-neon"></div>
            <p className="text-lg md:text-xl text-muted-foreground max-w-6xl mx-auto leading-relaxed mb-4">
              Product Manager with experience building AI-driven SaaS platforms in FinTech and eCommerce domains. Proven expertise in transforming complex financial workflows into scalable digital products through automation, OCR, and intelligent product design.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground max-w-6xl mx-auto leading-relaxed mb-4">
              Experienced in leading cross-functional teams, designing product strategy, and delivering data-driven solutions that improve operational efficiency, financial accuracy, and enterprise scalability.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground max-w-6xl mx-auto leading-relaxed">
              Skilled in AI-powered product development, SaaS platform architecture, AR automation, product lifecycle management, and Agile delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card
                key={index}
                className="p-6 gradient-card neon-border shadow-card hover:shadow-neon transition-smooth animate-fade-in group hover:-translate-y-1"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="gradient-neon w-12 h-12 rounded-lg flex items-center justify-center mb-4 shadow-neon">
                  <value.icon className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-card-foreground group-hover:bg-gradient-neon group-hover:bg-clip-text group-hover:text-transparent transition-smooth">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">
                  {value.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const skillCategories = [
  {
    category: "Product Management",
    skills: [
      "Product Strategy", "Product Roadmap", "AI Product Development",
      "SaaS Product Architecture", "Stakeholder Management",
      "Product Lifecycle Management", "User Story & PRD Creation",
      "Feature Prioritization"
    ]
  },
  {
    category: "AI & Automation",
    skills: [
      "OCR-based Data Extraction", "Financial Workflow Automation",
      "Cash Application Automation", "AI-driven Product Features",
      "Predictive Analytics"
    ]
  },
  {
    category: "Technical Skills",
    skills: ["SQL", "Python / R", "JavaScript", "HTML / CSS", "C", "C++", "Java", "Apache Velocity"]
  },
  {
    category: "Tools",
    skills: [
      "Jira", "Power BI", "Tableau", "Redash",
      "Excel", "MySQL", "MongoDB", "Jenkins", "AWS"
    ]
  },
  {
    category: "Methodologies",
    skills: ["Agile", "Scrum", "Kanban", "SDLC", "Gap Analysis", "Data Analysis"]
  },
  {
    category: "Design & Wireframing Tools",
    skills: ["Figma", "Canva", "Draw.io"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative transparent">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-neon bg-clip-text text-transparent">
              Skills & Expertise
            </h2>
            <div className="w-20 h-1 gradient-neon mx-auto mb-8 rounded-full shadow-neon"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillCategories.map((category, index) => (
              <Card
                key={index}
                className="p-6 gradient-card neon-border shadow-card hover:shadow-neon transition-smooth animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="text-xl font-bold mb-4 text-foreground flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full gradient-neon shadow-neon"></div>
                  {category.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <Badge
                      key={i}
                      variant="outline"
                      className="border-border/50 bg-muted/30 text-foreground hover:border-neon-purple/50 hover:text-neon-purple transition-smooth"
                    >
                      {skill}
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

export default Skills;

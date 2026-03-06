import { Card } from "@/components/ui/card";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Product Manager",
    company: "Tanserv Business Process",
    period: "Sep 2025 – Present",
    description: "Leading the development of Inebura, a next-generation Accounts Receivable automation platform, transforming it into a scalable multi-tenant SaaS product for enterprise clients.",
    achievements: [
      "Led the end-to-end product development of Inebura, building the platform from the ground up into a fully functional SaaS Accounts Receivable product.",
      "Spearheaded a complete UI/UX revamp, redesigning workflows and dashboards to simplify complex AR processes and improve usability.",
      "Designed and implemented automation across Accounts Receivable workflows, reducing manual intervention and improving financial operations efficiency.",
      "Implemented OCR-based invoice and remittance processing, enabling automated extraction of financial data from documents.",
      "Developed Cash Application automation workflows, allowing automatic matching of incoming payments with open invoices.",
      "Introduced AI-driven product capabilities, including intelligent automation, predictive financial insights, and smart workflow optimization.",
      "Owned the entire product lifecycle, including product vision, roadmap planning, feature prioritization, and delivery execution.",
      "Authored PRDs, FRDs, and user stories, translating business needs into detailed technical specifications for engineering teams.",
      "Led Agile product development, managing sprint planning, backlog prioritization, and cross-functional collaboration.",
      "Worked closely with engineering teams to deliver multiple production releases, ensuring stability and scalability."
    ]
  },
  {
    role: "Assitant Product Manager",
    company: "Tanserv Business Process",
    period: "Mar 2025 – Sep 2025",
    description: "Oversaw product development and financial workflow optimization for Inebura, an Accounts Receivable automation platform.",
    achievements: [
      "Built data visualization dashboards using Power BI, enabling stakeholders and clients to track AR metrics and financial performance.",
      "Collaborated with enterprise clients to gather product requirements and refine financial workflowsDefined and monitored product KPIs, using insights and user feedback to drive continuous product improvement.",
      "Reduced churn rate by 25% through improved onboarding",
      "Led successful product pivot based on user research"
    ]
  },
  {
    role: "Technical Business Consultant",
    company: "Unicommerce eSolutions Pvt Ltd",
    period: "Aug 2020 – Oct 2024",
    description: "Worked on Uniware, an enterprise eCommerce Order & Inventory Management SaaS platform, helping optimize operational workflows for large retail and marketplace clients.",
    achievements: [
      "Led the Template Automation initiative, redesigning and automating 20+ operational templates to improve reporting accuracy and reduce manual effort.",
      "Resolved 100+ critical operational escalations by analyzing data issues, system gaps, and financial reporting inconsistencies.",
      "Collaborated with product, engineering, and operations teams to create BRDs, FRDs, and UAT documentation.",
      "Authored and managed user stories and product backlog, improving feature delivery timelines by 50%.",
      "Conducted Gap Analysis to identify inefficiencies in business workflows and contributed to product improvements.",
      "Facilitated cross-team collaboration between engineering, QA, and operations, ensuring smooth product development and delivery.",
      "Supported Agile and Waterfall SDLC processes, improving project delivery success rates.",
      "Mentored new team members and conducted knowledge transfer sessions across teams.",

    ]
  },
  {
    role: "Programmer Analyst",
    company: "Cognizant Technology Solutions",
    period: "Aug 2015 – Feb 2016",
    description: "Analyzed product metrics and user behavior to drive data-informed decisions. Supported product managers with market research and competitive analysis.",
    achievements: [
      "Developed custom software solutions using Python, MySQL, and Oracle, improving client operational efficiency.",
      "Built automation scripts and analytical tools to streamline internal processes.",
      "Designed an Excel-based cost estimation tool, improving budgeting accuracy and reducing project estimation time.",
      "Conducted quantitative and qualitative analysis to support business decision-making."
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 relative transparent">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-neon bg-clip-text text-transparent">
              Experience
            </h2>
            <div className="w-20 h-1 gradient-neon mx-auto mb-8 rounded-full shadow-neon"></div>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card
                key={index}
                className="p-8 gradient-card neon-border shadow-card hover:shadow-neon transition-smooth animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="gradient-neon w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0 shadow-neon">
                    <Briefcase className="text-background" size={28} />
                  </div>

                  <div className="flex-1">
                    <div className="mb-4">
                      <h3 className="text-2xl font-bold text-foreground mb-1">
                        {exp.role}
                      </h3>
                      <p className="text-neon-cyan font-semibold mb-1">
                        {exp.company}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {exp.period}
                      </p>
                    </div>

                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2 text-muted-foreground">
                          <span className="text-neon-purple font-bold mt-1">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

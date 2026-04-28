import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Linkedin, Mail, FileText } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative transparent">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-neon bg-clip-text text-transparent">
              Let's Connect
            </h2>
            <div className="w-20 h-1 gradient-neon mx-auto mb-8 rounded-full shadow-neon"></div>
            <p className="text-lg text-muted-foreground">
              Interested in working together or just want to chat about product management?
              I'd love to hear from you!
            </p>
          </div>

          <Card className="p-8 md:p-12 gradient-card neon-border shadow-card animate-fade-in">
            <div className="space-y-6">
              <a
                href="https://www.linkedin.com/in/vishakha-anand-57687859/"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Button
                  variant="outline"
                  className="w-full justify-start text-left h-auto py-4 px-6 bg-muted/30 border-border/50 hover:border-neon-cyan/50 hover:shadow-neon transition-smooth"
                >
                  <Linkedin className="mr-4 text-neon-cyan" size={24} />
                  <div>
                    <div className="font-semibold text-foreground">Connect on LinkedIn</div>
                    <div className="text-sm text-muted-foreground">Let's grow our professional network</div>
                  </div>
                </Button>
              </a>

              <a
                href="mailto:vishakha.anand1412@gmail.com"
                className="block"
              >
                <Button
                  variant="outline"
                  className="w-full justify-start text-left h-auto py-4 px-6 bg-muted/30 border-border/50 hover:border-neon-pink/50 hover:shadow-neon transition-smooth"
                >
                  <Mail className="mr-4 text-neon-pink" size={24} />
                  <div>
                    <div className="font-semibold text-foreground">Send me an email</div>
                    <div className="text-sm text-muted-foreground">vishakha.anand1412@gmail.com</div>
                  </div>
                </Button>
              </a>

              <a
                href="./Vishakha_Anand_Resume_2026.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Button
                  variant="outline"
                  className="w-full justify-start text-left h-auto py-4 px-6 bg-muted/30 border-border/50 hover:border-neon-purple/50 hover:shadow-neon transition-smooth"
                >
                  <FileText className="mr-4 text-neon-purple" size={24} />
                  <div>
                    <div className="font-semibold text-foreground">Download Resume</div>
                    <div className="text-sm text-muted-foreground">View my full experience and qualifications</div>
                  </div>
                </Button>
              </a>
            </div>
          </Card>

          <div className="text-center mt-12 text-muted-foreground">
            <p>© 2024 Vishakha Anand. All rights reserved.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

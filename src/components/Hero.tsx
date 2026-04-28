import { Button } from "@/components/ui/button";
import { ArrowDown, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">


      <div className="container mx-auto px-4 z-10 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          <div className="flex flex-col items-center gap-6 mb-4">
            <div className="w-40 h-40 rounded-full bg-gradient-neon p-1 shadow-neon animate-fade-in">
              <img
                src="./VishPhoto3.jpeg"
                alt="Vishakha Anand"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-neon bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(168,85,247,0.5)]">
              Vishakha Anand
            </h1>
          </div>
          <p className="text-2xl md:text-3xl text-foreground font-medium">
            AI-Driven Product Manager | SaaS | FinTech | Automation
          </p>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Building AI-driven SaaS platforms that transform complex financial workflows into scalable digital products
          </p>

          <div className="flex flex-wrap gap-4 justify-center pt-6">
            <Button
              size="lg"
              className="gradient-neon hover:shadow-neon transition-smooth text-white text-lg px-8 font-semibold"
              onClick={() => scrollToSection('projects')}
            >
              View My Work
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="neon-border bg-card/10 text-foreground hover:bg-card/20 hover:shadow-neon backdrop-blur-sm text-lg px-8 font-semibold"
              onClick={() => scrollToSection('contact')}
            >
              Get In Touch
            </Button>
          </div>

          <div className="flex gap-6 justify-center pt-8">
            <a
              href="https://www.linkedin.com/in/vishakha-anand-57687859/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/80 hover:text-neon-cyan transition-smooth hover:drop-shadow-[0_0_10px_rgba(34,211,238,0.8)]"
            >
              <Linkedin size={28} />
            </a>
            <a
              href="#contact"
              className="text-foreground/80 hover:text-neon-pink transition-smooth hover:drop-shadow-[0_0_10px_rgba(236,72,153,0.8)]"
            >
              <Mail size={28} />
            </a>
          </div>
        </div>

        <button
          onClick={() => scrollToSection('about')}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-foreground/60 hover:text-neon-cyan transition-smooth animate-bounce hover:drop-shadow-[0_0_10px_rgba(34,211,238,0.8)]"
          aria-label="Scroll down"
        >
          <ArrowDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;

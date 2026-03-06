import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import ParticleBackground from "@/components/ParticleBackground";
import Header from "@/components/Header";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <Header />
      <ParticleBackground />
      <div className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </div>
    </div>
  );
};

export default Index; 



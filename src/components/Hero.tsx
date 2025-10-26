import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Linkedin, Github, ChevronDown } from "lucide-react";
import profileImage from "@/assets/profile-hero.png";

const roles = ["Cybersecurity Analyst", "VAPT Specialist", "SOC Analyst"];

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentFullText = roles[currentRole];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < currentFullText.length) {
            setDisplayText(currentFullText.substring(0, displayText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.substring(0, displayText.length - 1));
          } else {
            setIsDeleting(false);
            setCurrentRole((prev) => (prev + 1) % roles.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRole]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 hacker-grid bg-gradient-to-b from-background via-background/95 to-background z-0" />
      <div className="absolute inset-0 bg-gradient-to-br from-cyber-cyan/5 via-transparent to-cyber-green/5 z-0" />
      
      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center lg:text-left animate-fade-in">
            <p className="text-muted-foreground text-lg mb-2 tracking-wider">{">"} INITIALIZING...</p>
            <h1 className="text-5xl md:text-7xl font-bold mb-4 text-gradient hacker-text">
              Akshay Viswan
            </h1>
            <div className="h-16 mb-8">
              <p className="text-2xl md:text-3xl font-semibold text-primary tracking-wide">
                {">"} {displayText}
                <span className="terminal-cursor text-cyber-green">_</span>
              </p>
            </div>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8">
              <Button 
                asChild 
                size="lg" 
                className="terminal-button text-cyber-cyan font-mono tracking-wider"
              >
                <a href="https://drive.google.com/file/d/16TWVr6R8msxEq41A1EVpOCFC7HulTiac/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
                  {"[ DOWNLOAD_CV.exe ]"}
                </a>
              </Button>
              <Button 
                asChild 
                size="lg"
                className="terminal-button text-cyber-green font-mono tracking-wider"
              >
                <a href="#about">
                  {"[ WHO_AM_I.sh ]"}
                </a>
              </Button>
            </div>

            <div className="flex flex-wrap gap-6 justify-center lg:justify-start text-sm font-mono">
              <a href="mailto:akshayviswan.official@gmail.com" className="flex items-center gap-2 text-muted-foreground hover:text-cyber-cyan transition-all hover:drop-shadow-[0_0_8px_hsl(189,94%,43%)]">
                <Mail className="w-5 h-5" />
                <span className="hidden sm:inline">akshayviswan.official@gmail.com</span>
              </a>
              <a href="tel:+919061721180" className="flex items-center gap-2 text-muted-foreground hover:text-cyber-green transition-all hover:drop-shadow-[0_0_8px_hsl(142,76%,36%)]">
                <Phone className="w-5 h-5" />
                <span>+91 9061721180</span>
              </a>
            </div>

            <div className="flex gap-4 justify-center lg:justify-start mt-6">
              <a 
                href="https://linkedin.com/in/akshay-viswan-085284223" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-lg neon-border bg-background/50 backdrop-blur-sm transition-all hover:scale-110"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-6 h-6 text-cyber-cyan" />
              </a>
              <a 
                href="https://github.com/akshayviswangit" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-lg neon-border bg-background/50 backdrop-blur-sm transition-all hover:scale-110"
                aria-label="GitHub Profile"
              >
                <Github className="w-6 h-6 text-cyber-green" />
              </a>
            </div>
          </div>

          <div className="flex-1 flex justify-center animate-fade-in">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyber-cyan to-cyber-green rounded-2xl blur-3xl opacity-30" />
              <div className="absolute -inset-1 bg-gradient-to-r from-cyber-cyan via-cyber-green to-cyber-cyan rounded-2xl opacity-20 blur-sm"></div>
              <img 
                src={profileImage} 
                alt="Akshay Viswan - Cybersecurity Analyst"
                className="relative w-64 h-64 md:w-96 md:h-96 object-cover rounded-2xl border-2 neon-border image-glow backdrop-blur-sm"
              />
            </div>
          </div>
        </div>
      </div>

      <a 
        href="#about" 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
        aria-label="Scroll to About section"
      >
        <ChevronDown className="w-8 h-8 text-primary" />
      </a>
    </section>
  );
};

export default Hero;

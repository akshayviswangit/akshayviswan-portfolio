import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-4 border-t border-primary/20 bg-card/30">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-gradient mb-2">Akshay Viswan</h3>
            <p className="text-sm text-muted-foreground">
              Cybersecurity Analyst | VAPT Specialist | SOC Analyst
            </p>
          </div>

          <div className="flex gap-4">
            <a 
              href="https://github.com/akshayviswangit" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-lg border border-primary/30 hover:border-primary hover:bg-primary/10 transition-all"
              aria-label="GitHub Profile"
            >
              <Github className="w-5 h-5 text-primary" />
            </a>
            <a 
              href="https://linkedin.com/in/akshay-viswan-085284223" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-lg border border-primary/30 hover:border-primary hover:bg-primary/10 transition-all"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-5 h-5 text-primary" />
            </a>
            <a 
              href="mailto:akshayviswan.official@gmail.com"
              className="p-3 rounded-lg border border-primary/30 hover:border-primary hover:bg-primary/10 transition-all"
              aria-label="Email"
            >
              <Mail className="w-5 h-5 text-primary" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-primary/10 text-center text-sm text-muted-foreground">
          <p>© {currentYear} Akshay Viswan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

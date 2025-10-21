import { Card } from "@/components/ui/card";
import { Mail, Phone, Linkedin, Github } from "lucide-react";

const Contact = () => {

  return (
    <section id="contact" className="py-20 px-4 bg-card/30">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <p className="text-muted-foreground mb-2">Get In Touch</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gradient">Contact Me</h2>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="cyber-card p-8 animate-fade-in">
            <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
            <div className="space-y-6">
              <div className="flex items-center gap-4 p-4 rounded-lg bg-background border border-primary/20 hover:border-primary/50 transition-all">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-muted-foreground mb-1">Email</p>
                  <a 
                    href="mailto:akshayviswan.official@gmail.com"
                    className="text-foreground hover:text-primary transition-colors font-medium"
                  >
                    akshayviswan.official@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-lg bg-background border border-primary/20 hover:border-primary/50 transition-all">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-muted-foreground mb-1">Phone</p>
                  <a 
                    href="tel:+919061721180"
                    className="text-foreground hover:text-primary transition-colors font-medium"
                  >
                    +91 9061721180
                  </a>
                </div>
              </div>

              <div className="pt-6">
                <p className="text-sm text-muted-foreground mb-4">Connect on social media</p>
                <div className="flex gap-4">
                  <a 
                    href="https://linkedin.com/in/akshay-viswan-085284223" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-4 rounded-lg border border-primary/30 hover:border-primary hover:bg-primary/10 transition-all group"
                    aria-label="LinkedIn Profile"
                  >
                    <Linkedin className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                  </a>
                  <a 
                    href="https://github.com/akshayviswangit" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-4 rounded-lg border border-primary/30 hover:border-primary hover:bg-primary/10 transition-all group"
                    aria-label="GitHub Profile"
                  >
                    <Github className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;

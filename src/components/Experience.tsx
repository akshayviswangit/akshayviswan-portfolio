import { Card } from "@/components/ui/card";
import { Shield, Award } from "lucide-react";

const Experience = () => {
  return (
    <section id="experience" className="min-h-screen py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <p className="text-muted-foreground mb-2">Explore My</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gradient">Experience</h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="cyber-card p-8 animate-fade-in-up">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center border-2 border-primary/30">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
              </div>
              
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-1">Cyber Security Trainee</h3>
                    <p className="text-primary font-semibold">Red Team Hacker Academy, Bangalore</p>
                  </div>
                  <span className="text-muted-foreground mt-2 md:mt-0">7 Months</span>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/30">
                    <Award className="w-4 h-4 text-primary" />
                    <span className="text-sm">Certified Penetration Tester</span>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/30">
                    <Award className="w-4 h-4 text-secondary" />
                    <span className="text-sm">CEH (EC-Council) - In Progress</span>
                  </div>
                </div>

                <ul className="space-y-2 text-foreground/80">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">▹</span>
                    <span>Comprehensive training in penetration testing methodologies and techniques</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">▹</span>
                    <span>Hands-on experience with industry-standard security tools and frameworks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">▹</span>
                    <span>Vulnerability assessment and exploitation techniques across various platforms</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">▹</span>
                    <span>Network security monitoring and incident response procedures</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;

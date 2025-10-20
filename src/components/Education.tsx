import { Card } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

const Education = () => {
  return (
    <section id="education" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <p className="text-muted-foreground mb-2">My Academic Background</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gradient">Education</h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <Card className="cyber-card p-8 animate-fade-in-up">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center border-2 border-primary/30">
                  <GraduationCap className="w-8 h-8 text-primary" />
                </div>
              </div>
              
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  Bachelor of Technology (B.Tech)
                </h3>
                <p className="text-primary font-semibold mb-1">
                  Computer Engineering (Software Engineering)
                </p>
                <p className="text-muted-foreground mb-4">
                  Jain University, Bengaluru
                </p>
                
                <div className="space-y-2 text-foreground/80">
                  <p className="flex items-start gap-2">
                    <span className="text-primary mt-1">▹</span>
                    <span>Specialized in Software Engineering with focus on security principles</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-primary mt-1">▹</span>
                    <span>Strong foundation in programming, algorithms, and system architecture</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-primary mt-1">▹</span>
                    <span>Developed expertise in network security and cryptography</span>
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;

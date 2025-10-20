import { Card } from "@/components/ui/card";
import { Shield, Code, Terminal } from "lucide-react";

const Skills = () => {
  const technicalSkills = [
    "Burp Suite", "Nmap", "Metasploit", "Nessus", "OpenVAS", "Nikto",
    "SQLmap", "Hydra", "Gobuster", "Splunk", "Wireshark", "Snort"
  ];

  const programmingSkills = [
    { name: "Python", level: "Intermediate" },
    { name: "Java", level: "Basic" },
    { name: "JavaScript", level: "Basic" },
    { name: "HTML/CSS", level: "Intermediate" },
    { name: "MySQL", level: "Intermediate" },
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-card/30">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <p className="text-muted-foreground mb-2">Explore My</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gradient">Technical Skills</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <Card className="cyber-card p-8 animate-fade-in">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">Security Tools</h3>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {technicalSkills.map((skill) => (
                <div 
                  key={skill}
                  className="px-4 py-2 rounded-lg bg-background border border-primary/20 hover:border-primary/50 transition-all text-center"
                >
                  <span className="text-sm font-medium">{skill}</span>
                </div>
              ))}
            </div>
          </Card>

          <Card className="cyber-card p-8 animate-fade-in-up">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center">
                <Code className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold">Programming</h3>
            </div>
            <div className="space-y-4">
              {programmingSkills.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-sm text-muted-foreground">{skill.level}</span>
                  </div>
                  <div className="h-2 bg-background rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all"
                      style={{ 
                        width: skill.level === "Intermediate" ? "70%" : "40%"
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        <Card className="cyber-card p-8 max-w-6xl mx-auto mt-8 animate-fade-in-up">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <Terminal className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-2xl font-bold">Core Competencies</h3>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              "Vulnerability Assessment",
              "Penetration Testing",
              "Threat Detection",
              "Incident Response",
              "Network Security",
              "Web Application Security",
              "Security Operations",
              "Risk Assessment",
              "Security Auditing"
            ].map((competency) => (
              <div 
                key={competency}
                className="flex items-center gap-2 px-4 py-3 rounded-lg bg-background border border-primary/20 hover:border-primary/50 transition-all"
              >
                <span className="text-primary">▹</span>
                <span className="font-medium">{competency}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Skills;

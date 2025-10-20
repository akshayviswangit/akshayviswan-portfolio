import { Card } from "@/components/ui/card";
import { Award, Briefcase } from "lucide-react";
import profileProfessional from "@/assets/profile-professional.png";

const About = () => {
  return (
    <section id="about" className="min-h-screen py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <p className="text-muted-foreground mb-2">Get To Know More</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gradient">About Me</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center animate-fade-in">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-2xl blur-2xl opacity-20" />
              <img 
                src={profileProfessional} 
                alt="Akshay Viswan - Professional Portrait"
                className="relative w-80 h-80 object-cover rounded-2xl border-2 border-primary/30 shadow-xl"
              />
            </div>
          </div>

          <div className="space-y-6 animate-fade-in-up">
            <div className="grid sm:grid-cols-2 gap-4">
              <Card className="cyber-card p-6 text-center">
                <Award className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-1">Certifications</h3>
                <p className="text-sm text-muted-foreground">CPT, CEH (Pursuing)</p>
              </Card>
              <Card className="cyber-card p-6 text-center">
                <Briefcase className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-1">Experience</h3>
                <p className="text-sm text-muted-foreground">7 Months Training</p>
              </Card>
            </div>

            <div className="prose prose-invert max-w-none">
              <p className="text-foreground/90 leading-relaxed">
                I'm <span className="text-primary font-semibold">Akshay Viswan</span>, an aspiring Cybersecurity Analyst from Kerala, with a B.Tech in Computer Engineering (Software Engineering) from Jain University, Bengaluru.
              </p>
              <p className="text-foreground/90 leading-relaxed">
                I'm a <span className="text-secondary font-semibold">Certified Penetration Tester (CPT)</span> from RedTeam Academy and currently pursuing the Certified Ethical Hacker (CEH) certification.
              </p>
              <p className="text-foreground/90 leading-relaxed">
                I have hands-on experience in <span className="text-primary">Vulnerability Assessment and Penetration Testing (VAPT)</span>, threat detection, and incident response using tools like Burp Suite, Nmap, Metasploit, Splunk, Wireshark, and Snort.
              </p>
              <p className="text-foreground/90 leading-relaxed">
                My projects, including a Cybersecurity Home Lab and AI-powered security applications, strengthened my skills in Python, Flask, and Network Security.
              </p>
              <p className="text-foreground/90 leading-relaxed">
                Driven by curiosity and continuous learning, I'm passionate about <span className="text-secondary">ethical hacking and defensive security</span>, aiming to protect systems and data from evolving cyber threats.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

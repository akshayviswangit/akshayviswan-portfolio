import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, Linkedin, Github, Send } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast.success("Message sent successfully! I'll get back to you soon.");
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 px-4 bg-card/30">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <p className="text-muted-foreground mb-2">Get In Touch</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gradient">Contact Me</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
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

          <Card className="cyber-card p-8 animate-fade-in-up">
            <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className="bg-background border-primary/20 focus:border-primary"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  required
                  className="bg-background border-primary/20 focus:border-primary"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message..."
                  rows={6}
                  required
                  className="bg-background border-primary/20 focus:border-primary resize-none"
                />
              </div>

              <Button 
                type="submit" 
                className="w-full cyber-button bg-primary hover:bg-primary/90 text-primary-foreground"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;

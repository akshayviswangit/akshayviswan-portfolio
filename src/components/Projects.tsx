import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Parkinson's Disease Multi-Modal Detector",
      description: "A web application that detects early signs of Parkinson's Disease using voice recordings and handwriting samples. Uses a multi-modal approach combining voice and handwriting analysis for accurate detection.",
      technologies: ["Python", "Flask", "Machine Learning", "Multi-Modal AI"],
      github: "https://github.com/akshayviswangit/parkison_disease_detector_v2",
      demo: null,
    },
    {
      title: "Malayalam Chatbot",
      description: "An intelligent chatbot that answers questions in Malayalam from a given document or URL. Leverages the T5 model from Hugging Face for natural language understanding and generation.",
      technologies: ["Python", "Hugging Face", "NLP", "T5 Model"],
      github: "https://github.com/akshayviswangit/Malayalam-Chatbot-using-NLP",
      demo: null,
    },
    {
      title: "Movie Recommendation System",
      description: "A Streamlit-based recommendation system that suggests movies using cosine similarity algorithms. Integrates with TMDB API to display movie posters and details for an enhanced user experience.",
      technologies: ["Python", "Streamlit", "TMDB API", "Recommendation Algorithm"],
      github: "https://github.com/akshayviswangit/Movie-Recommendation-System",
      demo: null,
    },
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <p className="text-muted-foreground mb-2">Browse My Recent</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gradient">Projects</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="cyber-card p-6 flex flex-col animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-primary">{index + 1}</span>
                </div>
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech) => (
                  <span 
                    key={tech}
                    className="px-3 py-1 text-xs rounded-full bg-primary/10 border border-primary/30 text-primary"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-3 mt-auto">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="flex-1 cyber-button border-primary/50 hover:bg-primary/10"
                  asChild
                >
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </a>
                </Button>
                {project.demo && (
                  <Button 
                    size="sm" 
                    className="flex-1 cyber-button bg-primary hover:bg-primary/90"
                    asChild
                  >
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </a>
                  </Button>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

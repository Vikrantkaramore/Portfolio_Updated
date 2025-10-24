import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Globe } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "TODO List Application",
      description: "A sleek and responsive todo list application built with HTML, CSS, and JavaScript. Features include task management, local storage persistence, and an intuitive user interface.",
      technologies: ["HTML", "CSS", "python", "flask", "JavaScript"],
      features: [
        "Add, edit, and delete tasks",
        "Mark tasks as complete",
        "Filter tasks by status",
        "Responsive design for all devices"
      ],
      demoUrl: "https://todoapp-vikrantkaramore-vikrant-karamores-projects.vercel.app",
      codeUrl: "https://github.com/vikrantkaramore/todo-list-app",
      status: "Completed"
    },
    {
      title: "E-commerce Platform",
      description: "A modern Teilor delivery platform like replicating blinkit.com core features. Built with responsive design principles and modern web technologies.",
      technologies: ["HTML", "CSS", "JavaScript", "React", "Node.js", "Sql"],
      features: [
        "User authentication and profile management",
        "Product browsing and search functionality",
        "Shopping cart and checkout process",
        "Order history and tracking"
      ],
      demoUrl: "https://vikrantkaramore.github.io/zomato-clone",
      codeUrl: "https://github.com/vikrantkaramore/zomato-clone",
      status: "Under construction"
    },
    {
      title: "Mechine Learning Project",
      description: "A python based machine learning project that involves building and training models to solve real-world problems. The project includes data preprocessing, model selection, and evaluation.",
      technologies: ["Python", "Pandas", "NumPy", "Scikit-Learn", "Matplotlib"],
      features: [
        "Data cleaning and preprocessing",
        "Exploratory data analysis",
        "Model training and evaluation",
        "Visualization of results"
      ],
      status: "In Development"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-subtle">
      <div className="container px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-primary">
            Featured Projects
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={index}
                className="group bg-gradient-card shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border-0 hover:-translate-y-1"
              >
                {/* Project header with gradient */}
                <div className="h-2 bg-gradient-primary"></div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <Badge 
                      className={`${
                        project.status === 'Completed' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-yellow-100 text-yellow-800'
                      }`}
                    >
                      {project.status}
                    </Badge>
                    <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Button size="sm" variant="ghost" className="p-2 h-auto" asChild>
                        <a 
                          href={project.codeUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          aria-label="View Code"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      </Button>
                      <Button size="sm" variant="ghost" className="p-2 h-auto" asChild>
                        <a 
                          href={project.demoUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          aria-label="View Demo"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                    {project.description}
                  </p>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-primary mb-2 text-sm">Key Features:</h4>
                      <ul className="space-y-1">
                        {project.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="text-xs text-muted-foreground flex items-center gap-2">
                            <div className="w-1 h-1 bg-secondary rounded-full"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-primary mb-2 text-sm">Technologies:</h4>
                      <div className="flex flex-wrap gap-1">
                        {project.technologies.map((tech, techIndex) => (
                          <Badge 
                            key={techIndex} 
                            variant="secondary"
                            className="text-xs bg-muted/50 text-foreground"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex gap-3 mt-6">
                    <Button 
                      size="sm" 
                      className="flex-1 bg-primary hover:bg-primary-light text-white"
                      asChild
                    >
                      <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                        <Globe className="w-4 h-4" />
                        Demo
                      </a>
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="flex-1"
                      asChild
                    >
                      <a href={project.codeUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                        <Github className="w-4 h-4" />
                        Code
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

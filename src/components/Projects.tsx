import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Globe } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Multi-Speciality Hospital Appointment System",
      description: "A full-stack healthcare booking platform designed to simplify appointment scheduling for patients, doctors, and administrators. The system streamlines service discovery, booking workflows, and appointment tracking in a user-friendly digital interface.",
      technologies: ["React.js", "Node.js", "MySQL", "REST API", "Docker", "AWS"],
      features: [
        "Doctor discovery and specialty-based filtering",
        "Appointment booking and scheduling workflow",
        "Admin dashboard for appointment oversight",
        "Doctor panel to manage consultation schedules",
        "Secure patient and service data handling",
        "Responsive UI for desktop and mobile usage",
        "MySQL database design and data relations",
        "Dockerized deployment with cloud-ready setup"
      ],
      demoUrl: "https://multi-speciality-hospital.duckdns.org/",
      codeUrl: "https://github.com/vikrantkaramore",
      status: "Completed",
      hasLiveDemo: true
    },
    {
      title: "Threadify",
      description: "A tailor-service marketplace that connects customers with local tailors for stitching and alteration requests. The platform makes it easy for users to browse services, place requests, and manage appointments in a modern online workflow.",
      technologies: ["React.js", "Node.js", "MySQL", "REST API"],
      features: [
        "Customer-facing service booking interface",
        "Tailor dashboard for managing orders and schedules",
        "Authentication for users and service providers",
        "Service listing and request management",
        "Responsive UI for seamless browsing",
        "Backend API for communication and business logic",
        "Database integration for storing user and order data",
        "Scalable architecture for future feature expansion"
      ],
      demoUrl: "#",
      codeUrl: "https://github.com/Vikrantkaramore/threadify",
      status: "Featured",
      hasLiveDemo: false
    },
    {
      title: "TODO List Application",
      description: "A sleek and responsive todo list application built with HTML, CSS, and JavaScript for efficient daily task management.",
      technologies: ["HTML", "CSS", "JavaScript", "Python", "Flask"],
      features: [
        "Add, edit, and delete tasks",
        "Mark tasks as complete",
        "Filter tasks by status",
        "Responsive design for all devices"
      ],
      demoUrl: "https://todoapp-using-flask.vercel.app/",
      codeUrl: "https://github.com/vikrantkaramore/todo-list-ap",
      status: "Completed",
      hasLiveDemo: true
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
                <div className="h-2 bg-gradient-primary"></div>

                <div className="p-6 flex flex-col h-full">
                  <div className="flex items-center justify-between mb-4">
                    <Badge
                      className={`${
                        project.status === 'Completed'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-blue-100 text-blue-800'
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
                      {project.hasLiveDemo && (
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
                      )}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground mb-4 leading-relaxed text-sm flex-grow">
                    {project.description}
                  </p>

                  <div className="space-y-4 flex-grow">
                    <div>
                      <h4 className="font-medium text-primary mb-2 text-sm">Highlights:</h4>
                      <ul className="space-y-1.5">
                        {project.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="text-xs text-muted-foreground flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-1.5 flex-shrink-0"></div>
                            <span>{feature}</span>
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

                  <div className="flex gap-3 mt-6 pt-2">
                    {project.hasLiveDemo ? (
                      <Button
                        size="sm"
                        className="flex-1 bg-primary hover:bg-primary-light text-white"
                        asChild
                      >
                        <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                          <Globe className="w-4 h-4" />
                          Live Demo
                        </a>
                      </Button>
                    ) : (
                      <Button
                        size="sm"
                        className="flex-1 bg-primary hover:bg-primary-light text-white"
                        asChild
                      >
                        <a href={project.codeUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                          <Github className="w-4 h-4" />
                          GitHub
                        </a>
                      </Button>
                    )}
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1"
                      asChild
                    >
                      <a href={project.codeUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                        <ExternalLink className="w-4 h-4" />
                        View Details
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

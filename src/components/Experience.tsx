import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Briefcase, CheckCircle } from "lucide-react";

const Experience = () => {
  const experience = [
    {
      role: "Web Development Course",
      company: "DevTown India",
      location: "Remote",
      period: "May 2023 - October 2023",
      type: "Internship",
      description: "Gained hands-on experience in web development, working on real-world projects and learning industry best practices.",
      achievements: [
        "Led end-to-end website design and development process, supervising the performance and UX across platforms",
        "Contributed to a 50% increase in user satisfaction",
        "Built responsive web applications using modern web technologies",
        "Collaborated with cross-functional teams to deliver high-quality solutions",
        "Optimized website layouts and performance for enhanced user experience"
      ],
      technologies: ["HTML", "CSS", "JavaScript", "React", "Node.js"]
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-primary">
            Experience
          </h2>
          
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <Card 
                key={index}
                className="p-8 bg-gradient-card shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden border-l-4 border-l-secondary"
              >
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-primary opacity-5 rounded-full transform translate-x-20 -translate-y-20"></div>
                
                <div className="relative z-10">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                    <div className="flex items-center gap-4 mb-4 md:mb-0">
                      <div className="p-3 bg-secondary/10 rounded-lg">
                        <Briefcase className="w-6 h-6 text-secondary" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-primary">
                          {exp.role}
                        </h3>
                        <p className="text-lg text-secondary font-medium">
                          {exp.company}
                        </p>
                      </div>
                    </div>
                    
                    <Badge className="bg-primary text-white w-fit">
                      {exp.type}
                    </Badge>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4 mb-6 text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {exp.description}
                  </p>
                  
                  <div className="space-y-4">
                    <h4 className="font-semibold text-primary">Key Achievements:</h4>
                    <ul className="space-y-3">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground leading-relaxed">
                            {achievement}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mt-6">
                    <h4 className="font-semibold text-primary mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <Badge 
                          key={techIndex} 
                          variant="secondary"
                          className="bg-muted text-foreground"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
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

export default Experience;
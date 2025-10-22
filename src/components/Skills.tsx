import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Globe, Palette, Settings, Zap } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Programming Languages",
      color: "text-accent-blue",
      bgColor: "bg-accent-blue/10",
      skills: ["JavaScript", "Python", "Java", "C++", "HTML5", "CSS3"]
    },
    {
      icon: Globe,
      title: "Frontend Technologies",
      color: "text-secondary",
      bgColor: "bg-secondary/10",
      skills: ["React","Tailwind CSS", "Bootstrap"]
    },
    {
      icon: Database,
      title: "Backend & Database",
      color: "text-accent-cyan",
      bgColor: "bg-accent-cyan/10",
      skills: ["PostgreSQL", "MySQL"]
    },
    {
      icon: Settings,
      title: "Development Tools",
      color: "text-accent-purple",
      bgColor: "bg-accent-purple/10",
      skills: ["Git", "GitHub", "VS Code"]
    },
    {
      icon: Palette,
      title: "Design & UI/UX",
      color: "text-primary",
      bgColor: "bg-primary/10",
      skills: ["Responsive Design", "UI/UX Design"]
    },
    {
      icon: Zap,
      title: "Other Skills",
      color: "text-secondary-light",
      bgColor: "bg-secondary-light/10",
      skills: ["Problem Solving", "Algorithm Design", "Data Structures", "Agile Methodology", "Team Collaboration"]
    }
  ];

  const certifications = [
    "Full Stack Web Development by DevTown",
    "Python Programming by CodeMate",
    "Building a computer vision app with Azure Cognitive Services by Microsoft",
    "Data Analytics by Deloitte Australia",
    "Inter College Hackathon Participation Certificate",
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-primary">
            Skills & Expertise
          </h2>
          
          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {skillCategories.map((category, index) => (
              <Card 
                key={index}
                className="p-6 bg-gradient-card shadow-md hover:shadow-lg transition-all duration-300 group hover:-translate-y-1"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-3 rounded-lg ${category.bgColor}`}>
                    <category.icon className={`w-6 h-6 ${category.color}`} />
                  </div>
                  <h3 className="font-bold text-primary group-hover:text-secondary transition-colors">
                    {category.title}
                  </h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex}
                      variant="secondary"
                      className="bg-muted/50 text-foreground text-xs hover:bg-muted transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
          
          {/* Certifications */}
          <Card className="p-8 bg-gradient-card shadow-lg">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-primary mb-4">
                Certifications & Achievements
              </h3>
              <p className="text-muted-foreground">
                Professional certifications and academic achievements
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-3 p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors"
                >
                  <div className="w-2 h-2 bg-secondary rounded-full flex-shrink-0"></div>
                  <span className="text-foreground font-medium">{cert}</span>
                </div>
              ))}
            </div>
            
            {/* Additional achievement */}
            <div className="mt-6 p-4 bg-gradient-primary rounded-lg text-center">
              <p className="text-white font-medium">
                🏆 Winner of BreadBoard Competition - Organized by Department of Electronics and Communication Engineering
              </p>
              <p className="text-white/80 text-sm mt-1">June 2023</p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;
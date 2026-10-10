import { Card } from "@/components/ui/card";
import { Cloud, Code2, Database, Container, Wrench } from "lucide-react";

const skillGroups = [
  {
    icon: Cloud,
    title: "Cloud",
    skills: ["AWS EC2", "AWS Cloud basics"],
    color: "text-accent-blue",
    bgColor: "bg-accent-blue/10"
  },
  {
    icon: Container,
    title: "DevOps",
    skills: ["Git & GitHub", "Docker", "CI/CD", "Linux", "Shell scripting", "Nginx"],
    color: "text-secondary",
    bgColor: "bg-secondary/10"
  },
  {
    icon: Code2,
    title: "Development",
    skills: ["React.js", "Node.js", "JavaScript", "REST API", "HTML", "CSS"],
    color: "text-accent-cyan",
    bgColor: "bg-accent-cyan/10"
  },
  {
    icon: Database,
    title: "Database",
    skills: ["MySQL", "SQL"],
    color: "text-accent-purple",
    bgColor: "bg-accent-purple/10"
  },
  {
    icon: Wrench,
    title: "Tools",
    skills: ["VS Code", "GitHub", "MySQL Workbench", "Docker"],
    color: "text-primary",
    bgColor: "bg-primary/10"
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <div className="container px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-primary">
            Skills
          </h2>

          <div className="grid md:grid-cols-2 xl:grid-cols-5 gap-6">
            {skillGroups.map((group, index) => (
              <Card
                key={index}
                className="p-6 bg-gradient-card shadow-md hover:shadow-lg transition-all duration-300 group hover:-translate-y-1 h-full"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-3 rounded-lg ${group.bgColor}`}>
                    <group.icon className={`w-5 h-5 ${group.color}`} />
                  </div>
                  <h3 className="font-bold text-primary group-hover:text-secondary transition-colors text-lg">
                    {group.title}
                  </h3>
                </div>

                <ul className="space-y-2 text-sm text-muted-foreground">
                  {group.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-secondary"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

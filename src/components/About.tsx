import { Card } from "@/components/ui/card";
import { Code, Lightbulb, Rocket, Users } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Frontend Development",
      description: "Experienced in both frontend and backend technologies"
    },
    {
      icon: Lightbulb,
      title: "Problem Solver",
      description: "Passionate about finding creative solutions to complex challenges"
    },
    {
      icon: Rocket,
      title: "Innovation",
      description: "Always exploring new technologies and best practices"
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Strong team player with excellent communication skills"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-subtle">
      <div className="container px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-primary">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold text-primary mb-6">
                Passionate Developer & Engineering Student
              </h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I'm Vikrant Karamore, a dedicated Electronics & Communication Engineering 
                  student at Priyadarshini College of Engineering, Nagpur. With a strong 
                  foundation in both hardware and software, I bring a unique perspective 
                  to web development.
                </p>
                <p>
                  My journey in programming began with curiosity and has evolved into a 
                  passion for creating meaningful digital experiences. I specialize in 
                  full-stack web development and am constantly learning new technologies 
                  to stay at the forefront of innovation.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring new frameworks, 
                  contributing to open-source projects, or working on personal 
                  projects that challenge my skills and creativity.
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              {highlights.map((item, index) => (
                <Card 
                  key={index}
                  className="p-6 bg-gradient-card shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-l-secondary"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-secondary/10 rounded-lg">
                      <item.icon className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-2">
                        {item.title}
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
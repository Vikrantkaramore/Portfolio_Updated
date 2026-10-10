import { Card } from "@/components/ui/card";
import { Cloud, Code, Server, Rocket } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      description: "Hands-on with AWS EC2, Docker, Jenkins, Linux, Git/GitHub, and CI/CD pipelines"
    },
    {
      icon: Server,
      title: "Application Development",
      description: "Building scalable solutions with React, Node.js, MySQL, and REST APIs"
    },
    {
      icon: Code,
      title: "Automation",
      description: "Passionate about streamlining deployment, infrastructure, and software delivery"
    },
    {
      icon: Rocket,
      title: "Growth",
      description: "Continuously learning cloud infrastructure, monitoring, and deployment best practices"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-subtle">
      <div className="container px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-primary">
            About Me
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-5 text-muted-foreground leading-relaxed text-lg">
              <p>
                I&apos;m Vikrant Karamore, a B.Tech graduate in Electronics and Communication Engineering with a strong interest in <strong className="text-primary">DevOps, Cloud Computing, Linux, and Software Development</strong>.
              </p>
              <p>
                I enjoy building applications and deploying them using modern development and cloud technologies. My hands-on experience includes <strong className="text-primary">AWS EC2, Docker, Jenkins, Git/GitHub, Linux, CI/CD, React, Node.js, MySQL, and REST APIs</strong>.
              </p>
              <p>
                I&apos;m continuously improving my skills in cloud infrastructure, automation, containerization, deployment, and monitoring while working on practical projects that solve real-world problems.
              </p>
              <p>
                I&apos;m currently looking for opportunities where I can contribute to a technology-driven team, learn from experienced professionals, and grow as a <strong className="text-primary">DevOps / Cloud / Software Engineer</strong>.
              </p>
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
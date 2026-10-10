import { Button } from "@/components/ui/button";
import { Github, Linkedin, Download } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>

      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-secondary/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-accent-cyan/20 rounded-full blur-xl animate-pulse delay-300"></div>
        <div className="absolute top-1/2 right-1/3 w-20 h-20 bg-accent-purple/20 rounded-full blur-xl animate-pulse delay-700"></div>
      </div>

      <div className="container relative z-10 text-center text-white px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
            Hi, I&apos;m Vikrant Karamore <span className="inline-block">👋</span>
          </h1>

          <p className="text-xl md:text-2xl mb-8 text-gray-200 font-medium">
            DevOps &amp; Cloud Enthusiast | AWS | Linux | Docker | Jenkins | CI/CD | React | Node.js
          </p>

          <blockquote className="text-lg mb-12 text-gray-300 max-w-3xl mx-auto leading-relaxed border-l-2 border-secondary/60 pl-4 italic">
            Electronics &amp; Communication Engineering graduate passionate about Cloud Computing, DevOps, automation, and software development. I build and deploy scalable applications using AWS, Docker, Jenkins, GitHub, Linux, React, Node.js, and MySQL.
          </blockquote>

          <div className="flex flex-wrap gap-4 justify-center mb-10">
            <Button
              variant="secondary"
              size="lg"
              className="bg-white/10 hover:bg-white/20 text-white border-white/20 backdrop-blur-sm"
              asChild
            >
              <a href="#projects" className="flex items-center gap-2">
                View My Projects
              </a>
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="bg-transparent hover:bg-white/10 text-white border-white/30 backdrop-blur-sm"
              asChild
            >
              <a href="/resume.pdf" download="Vikrant_Karamore_Resume.pdf" className="flex items-center gap-2">
                <Download size={20} />
                Download Resume
              </a>
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="bg-transparent hover:bg-white/10 text-white border-white/30 backdrop-blur-sm"
              asChild
            >
              <a href="https://github.com/vikrantkaramore" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <Github size={20} />
                GitHub
              </a>
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="bg-transparent hover:bg-white/10 text-white border-white/30 backdrop-blur-sm"
              asChild
            >
              <a href="https://www.linkedin.com/in/vikrant-karamore/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <Linkedin size={20} />
                LinkedIn
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/50">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

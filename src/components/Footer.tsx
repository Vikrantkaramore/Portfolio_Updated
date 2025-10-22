import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/vikrantkaramore",
      label: "GitHub"
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/vikrant-karamore/",
      label: "LinkedIn"
    },
    {
      icon: Mail,
      href: "mailto:vikrantkaramore@gmail.com",
      label: "Email"
    }
  ];

  return (
    <footer className="bg-primary text-white py-12">
      <div className="container px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Content */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">
              Vikrant Karamore
            </h3>
            <p className="text-primary-foreground/80 mb-6 max-w-2xl mx-auto">
              Passionate web developer creating innovative digital solutions. 
              Always excited about new challenges and opportunities to grow.
            </p>
            
            {/* Social Links */}
            <div className="flex justify-center gap-6 mb-8">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300 hover:scale-110 group"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-white group-hover:text-secondary-light transition-colors" />
                </a>
              ))}
            </div>
          </div>
          
          {/* Bottom Section */}
          <div className="border-t border-white/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
              <p>
                © {currentYear} Vikrant Karamore. All rights reserved.
              </p>
              
              <p className="flex items-center gap-2">
                Made with <Heart className="w-4 h-4 text-red-400 fill-current animate-pulse" /> 
                and lots of coffee
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
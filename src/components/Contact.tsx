import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { emailService } from "@/services/emailService";
import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all fields.",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);

    try {
      const response = await emailService.sendContactEmail(formData);

      if (!response.success) {
        throw new Error(response.error || 'Failed to send message');
      }

      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon!",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
    } catch (error: any) {
      console.error("Error sending message:", error);
      toast({
        title: "Error",
        description: error.message || "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "vikrantkaramore@gmail.com",
      href: "mailto:vikrantkaramore@gmail.com",
      color: "text-accent-blue"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 7391907186",
      href: "tel:+917391907186",
      color: "text-secondary"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Nagpur, Maharashtra, India",
      href: "#",
      color: "text-accent-purple"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/vikrantkaramore",
      color: "hover:text-foreground"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/vikrant-karamore/",
      color: "hover:text-accent-blue"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-subtle">
      <div className="container px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-primary">
            Get In Touch
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-primary mb-6">
                  Let's Connect
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  I'm always interested in new opportunities, collaborations, and 
                  exciting projects. Whether you have a question, want to discuss a 
                  project, or just want to say hello, feel free to reach out!
                </p>
              </div>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a 
                    key={index}
                    href={info.href}
                    className="flex items-center gap-4 p-4 bg-card rounded-lg hover:bg-muted/50 transition-all duration-300 group"
                  >
                    <div className={`p-3 bg-muted/30 rounded-lg group-hover:scale-110 transition-transform`}>
                      <info.icon className={`w-5 h-5 ${info.color}`} />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{info.label}</p>
                      <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                        {info.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
              
              <div className="pt-6">
                <h4 className="font-semibold text-primary mb-4">Follow Me</h4>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 bg-muted/30 rounded-lg text-muted-foreground ${social.color} transition-all duration-300 hover:scale-110 hover:shadow-md`}
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <Card className="p-8 bg-gradient-card shadow-lg">
              <h3 className="text-xl font-bold text-primary mb-6">
                Send Me a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Name
                    </label>
                    <Input 
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your Name"
                      className="bg-background/50 border-muted"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Email
                    </label>
                    <Input 
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      className="bg-background/50 border-muted"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Subject
                  </label>
                  <Input 
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Project Discussion, Job Opportunity, etc."
                    className="bg-background/50 border-muted"
                    required
                  />
                </div>
                
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Message
                  </label>
                  <Textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project or how I can help you..."
                    rows={5}
                    className="bg-background/50 border-muted resize-none"
                    required
                  />
                </div>
                
                <Button 
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-primary hover:opacity-90 text-white"
                  size="lg"
                >
                  <Send className="w-4 h-4 mr-2" />
                  {loading ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
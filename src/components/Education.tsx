import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, GraduationCap, MapPin } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Engineering",
      field: "Electronics and Communication",
      institution: "Priyadarshini College of Engineering",
      location: "Nagpur",
      period: "July 2022 - June 2026",
      current: true
    },
    {
      degree: "Higher Secondary Certificate",
      field: "Science Stream",
      institution: "G.B.M.M JR College Hinganghat",
      location: "Hinganghat",
      period: "April 2021 - March 2022",
      current: false
    },
    {
      degree: "Secondary School Certificate",
      field: "General Studies",
      institution: "Bharat Vidyalaya Hinganghat",
      location: "Local",
      period: "April 2019 - March 2020",
      current: false
    }
  ];

  return (
    <section id="education" className="py-20 bg-muted/30">
      <div className="container px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-primary">
            Education
          </h2>
          
          <div className="space-y-8">
            {education.map((edu, index) => (
              <Card 
                key={index}
                className="p-8 bg-gradient-card shadow-md hover:shadow-lg transition-all duration-300 relative overflow-hidden"
              >
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-primary opacity-5 rounded-full transform translate-x-16 -translate-y-16"></div>
                
                <div className="relative z-10">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <div className="flex items-center gap-3 mb-2 md:mb-0">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <GraduationCap className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-primary">
                          {edu.degree}
                        </h3>
                        <p className="text-secondary font-medium">
                          {edu.field}
                        </p>
                      </div>
                    </div>
                    
                    {edu.current && (
                      <Badge className="bg-secondary text-white w-fit">
                        Current
                      </Badge>
                    )}
                  </div>
                  
                  <div className="space-y-3 text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span className="font-medium text-foreground">
                        {edu.institution}
                      </span>
                      <span>• {edu.location}</span>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{edu.period}</span>
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

export default Education;
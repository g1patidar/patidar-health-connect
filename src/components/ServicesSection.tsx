import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Heart, 
  Brain, 
  Bone, 
  Eye, 
  Baby, 
  Stethoscope,
  Activity,
  Shield,
  ArrowRight
} from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Heart,
      title: "Cardiology",
      description: "Comprehensive heart care with advanced cardiac procedures and preventive care programs.",
      features: ["24/7 Cardiac Emergency", "Advanced Diagnostics", "Minimally Invasive Surgery"]
    },
    {
      icon: Brain,
      title: "Neurology",
      description: "Expert neurological care for brain and nervous system disorders with state-of-the-art equipment.",
      features: ["Brain Surgery", "Stroke Treatment", "Epilepsy Management"]
    },
    {
      icon: Bone,
      title: "Orthopedics",
      description: "Complete bone and joint care including sports medicine and rehabilitation services.",
      features: ["Joint Replacement", "Sports Medicine", "Fracture Treatment"]
    },
    {
      icon: Eye,
      title: "Ophthalmology",
      description: "Complete eye care services from routine check-ups to complex surgical procedures.",
      features: ["Cataract Surgery", "Retina Treatment", "Laser Procedures"]
    },
    {
      icon: Baby,
      title: "Pediatrics",
      description: "Specialized medical care for infants, children, and adolescents in a child-friendly environment.",
      features: ["Newborn Care", "Vaccination", "Child Development"]
    },
    {
      icon: Stethoscope,
      title: "General Medicine",
      description: "Primary healthcare services with experienced physicians for all age groups.",
      features: ["Health Check-ups", "Chronic Disease Management", "Preventive Care"]
    },
    {
      icon: Activity,
      title: "Emergency Care",
      description: "24/7 emergency medical services with fully equipped trauma center and ICU.",
      features: ["Trauma Care", "Critical Care", "Ambulance Service"]
    },
    {
      icon: Shield,
      title: "Preventive Care",
      description: "Comprehensive health screening and wellness programs to maintain optimal health.",
      features: ["Health Packages", "Executive Check-ups", "Lifestyle Counseling"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Our Medical Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive healthcare services delivered by experienced medical professionals 
            using the latest technology and evidence-based treatment approaches.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card 
              key={service.title}
              className="group hover:shadow-card transition-all duration-300 border-border hover:border-primary/20 animate-fade-in bg-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="text-center">
                <CardDescription className="text-muted-foreground mb-4 leading-relaxed">
                  {service.description}
                </CardDescription>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li 
                      key={feature}
                      className="text-sm text-muted-foreground flex items-center justify-center"
                    >
                      <div className="w-1.5 h-1.5 bg-secondary rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-in">
          <Button variant="hero" size="lg" className="px-8 py-4">
            View All Services
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
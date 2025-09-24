import { Button } from "@/components/ui/button";
import { Calendar, Clock, Users, Award } from "lucide-react";
import hospitalHero from "@/assets/hospital-hero.jpg";

const HeroSection = () => {
  const stats = [
    { icon: Users, value: "50,000+", label: "Patients Treated" },
    { icon: Award, value: "25+", label: "Years Experience" },
    { icon: Clock, value: "24/7", label: "Emergency Care" },
    { icon: Calendar, value: "99%", label: "Patient Satisfaction" },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={hospitalHero}
          alt="Patidar Hospital - Modern Healthcare Facility"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-6">
        <div className="max-w-4xl">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Excellence in
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200 block">
                Healthcare
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl leading-relaxed">
              Providing compassionate, world-class medical care with cutting-edge technology 
              and experienced professionals dedicated to your well-being.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button variant="hero" size="lg" className="text-lg px-8 py-4">
                <Calendar className="w-5 h-5 mr-2" />
                Book Appointment
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 py-4 bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20"
              >
                Emergency Services
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 animate-slide-in">
            {stats.map((stat, index) => (
              <div 
                key={stat.label}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <stat.icon className="w-8 h-8 text-white mx-auto mb-3" />
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-white/80 text-sm font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse-gentle"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
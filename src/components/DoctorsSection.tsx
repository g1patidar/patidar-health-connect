import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Star, 
  Calendar, 
  Award, 
  MapPin,
  Clock,
  Users,
  ArrowRight
} from "lucide-react";

const DoctorsSection = () => {
  const doctors = [
    {
      name: "Dr. Rajesh Patidar",
      specialty: "Chief Cardiologist",
      experience: "25+ years",
      education: "MBBS, MD (Cardiology), FACC",
      rating: 4.9,
      patients: "10,000+",
      availability: "Mon-Sat",
      location: "Cardiology Wing",
      image: "👨‍⚕️",
      specializations: ["Heart Surgery", "Interventional Cardiology", "Preventive Cardiology"],
      achievements: ["Padma Shri Awardee", "Best Cardiologist 2023", "Research Excellence Award"]
    },
    {
      name: "Dr. Priya Sharma",
      specialty: "Senior Neurologist",
      experience: "18+ years",
      education: "MBBS, MD (Neurology), DM",
      rating: 4.8,
      patients: "8,500+",
      availability: "Mon-Fri",
      location: "Neurology Department",
      image: "👩‍⚕️",
      specializations: ["Brain Surgery", "Stroke Treatment", "Epilepsy Care"],
      achievements: ["Excellence in Neurology", "Research Publication Award", "Patient Care Excellence"]
    },
    {
      name: "Dr. Amit Kumar",
      specialty: "Orthopedic Surgeon",
      experience: "20+ years",
      education: "MBBS, MS (Orthopedics)",
      rating: 4.9,
      patients: "12,000+",
      availability: "Tue-Sun",
      location: "Orthopedic Center",
      image: "👨‍⚕️",
      specializations: ["Joint Replacement", "Sports Medicine", "Spine Surgery"],
      achievements: ["Best Orthopedic Surgeon", "Innovation in Surgery", "Teaching Excellence"]
    },
    {
      name: "Dr. Sunita Gupta",
      specialty: "Pediatric Specialist",
      experience: "15+ years",
      education: "MBBS, MD (Pediatrics)",
      rating: 4.7,
      patients: "15,000+",
      availability: "Mon-Sat",
      location: "Children's Wing",
      image: "👩‍⚕️",
      specializations: ["Newborn Care", "Child Development", "Vaccination"],
      achievements: ["Child Health Advocate", "Compassionate Care Award", "Community Service"]
    }
  ];

  return (
    <section id="doctors" className="py-20 bg-accent/30">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Meet Our Expert Doctors
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our team of highly qualified and experienced medical professionals is dedicated 
            to providing you with the best possible care and treatment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {doctors.map((doctor, index) => (
            <Card 
              key={doctor.name}
              className="group hover:shadow-elegant transition-all duration-300 border-border hover:border-primary/20 animate-fade-in bg-card overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="text-center pb-4 relative">
                {/* Doctor Image/Avatar */}
                <div className="w-24 h-24 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 text-4xl group-hover:scale-110 transition-transform duration-300">
                  {doctor.image}
                </div>
                
                {/* Rating Badge */}
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className="bg-secondary/90 backdrop-blur-sm">
                    <Star className="w-3 h-3 fill-yellow-400 text-yellow-400 mr-1" />
                    {doctor.rating}
                  </Badge>
                </div>

                <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {doctor.name}
                </CardTitle>
                <CardDescription className="text-primary font-semibold">
                  {doctor.specialty}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                {/* Education & Experience */}
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Award className="w-4 h-4 mr-2 text-secondary" />
                    {doctor.education}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="w-4 h-4 mr-2 text-secondary" />
                    {doctor.experience} Experience
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Users className="w-4 h-4 mr-2 text-secondary" />
                    {doctor.patients} Patients Treated
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4 mr-2 text-secondary" />
                    {doctor.location}
                  </div>
                </div>

                {/* Specializations */}
                <div>
                  <h4 className="font-semibold text-foreground mb-2 text-sm">Specializations:</h4>
                  <div className="flex flex-wrap gap-1">
                    {doctor.specializations.map((spec) => (
                      <Badge key={spec} variant="outline" className="text-xs">
                        {spec}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Availability */}
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Available:</span>
                  <Badge variant="secondary" className="bg-medical-green/10 text-medical-green">
                    {doctor.availability}
                  </Badge>
                </div>

                {/* CTA Button */}
                <Button 
                  variant="medical" 
                  size="sm" 
                  className="w-full mt-4"
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  Book Appointment
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-in">
          <Button variant="hero" size="lg" className="px-8 py-4">
            View All Doctors
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DoctorsSection;
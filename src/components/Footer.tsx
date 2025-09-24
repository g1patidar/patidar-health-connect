import { Button } from "@/components/ui/button";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube,
  Heart,
  Clock,
  Shield,
  Award
} from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { label: "About Us", href: "#about" },
    { label: "Our Services", href: "#services" },
    { label: "Our Doctors", href: "#doctors" },
    { label: "Health Packages", href: "#packages" },
    { label: "Contact Us", href: "#contact" },
    { label: "Careers", href: "#careers" }
  ];

  const services = [
    { label: "Emergency Care", href: "#emergency" },
    { label: "Cardiology", href: "#cardiology" },
    { label: "Neurology", href: "#neurology" },
    { label: "Orthopedics", href: "#orthopedics" },
    { label: "Pediatrics", href: "#pediatrics" },
    { label: "Radiology", href: "#radiology" }
  ];

  const patientResources = [
    { label: "Patient Portal", href: "#portal" },
    { label: "Health Tips", href: "#tips" },
    { label: "Insurance", href: "#insurance" },
    { label: "Medical Records", href: "#records" },
    { label: "Billing Support", href: "#billing" },
    { label: "Patient Rights", href: "#rights" }
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Youtube, href: "#", label: "YouTube" }
  ];

  const achievements = [
    { icon: Award, text: "NABH Accredited" },
    { icon: Shield, text: "ISO 9001:2015" },
    { icon: Heart, text: "Best Hospital 2023" },
    { icon: Clock, text: "24/7 Emergency" }
  ];

  return (
    <footer className="bg-gradient-to-br from-primary to-medical-dark-blue text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 lg:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Hospital Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <span className="text-primary font-bold text-lg">P</span>
              </div>
              <span className="text-xl font-bold">Patidar Hospital</span>
            </div>
            
            <p className="text-white/80 leading-relaxed">
              Excellence in healthcare for over 25 years. We provide compassionate, 
              world-class medical care with cutting-edge technology and experienced professionals.
            </p>

            {/* Achievements */}
            <div className="grid grid-cols-2 gap-3">
              {achievements.map((achievement) => (
                <div 
                  key={achievement.text}
                  className="flex items-center space-x-2 text-sm"
                >
                  <achievement.icon className="w-4 h-4 text-secondary" />
                  <span className="text-white/90">{achievement.text}</span>
                </div>
              ))}
            </div>

            {/* Emergency Contact */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="flex items-center space-x-2 mb-2">
                <Phone className="w-5 h-5 text-secondary" />
                <span className="font-semibold">Emergency Hotline</span>
              </div>
              <div className="text-2xl font-bold text-secondary">+91 98765 43210</div>
              <div className="text-sm text-white/80">Available 24/7</div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href}
                    className="text-white/80 hover:text-white hover:text-secondary transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-1 h-1 bg-secondary rounded-full mr-3 group-hover:w-2 transition-all duration-300"></span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.label}>
                  <a 
                    href={service.href}
                    className="text-white/80 hover:text-white hover:text-secondary transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-1 h-1 bg-secondary rounded-full mr-3 group-hover:w-2 transition-all duration-300"></span>
                    {service.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Patient Resources & Contact */}
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold mb-6">Patient Resources</h3>
              <ul className="space-y-3">
                {patientResources.slice(0, 4).map((resource) => (
                  <li key={resource.label}>
                    <a 
                      href={resource.href}
                      className="text-white/80 hover:text-white hover:text-secondary transition-colors duration-300 flex items-center group"
                    >
                      <span className="w-1 h-1 bg-secondary rounded-full mr-3 group-hover:w-2 transition-all duration-300"></span>
                      {resource.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Contact Info</h3>
              
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-medium">123 Medical Complex</div>
                    <div className="text-white/80 text-sm">Health Street, Mumbai, Maharashtra 400001</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-secondary" />
                  <div>
                    <div className="font-medium">+91 98765 43211</div>
                    <div className="text-white/80 text-sm">Appointments & General Inquiry</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-secondary" />
                  <div>
                    <div className="font-medium">info@patidarhospital.com</div>
                    <div className="text-white/80 text-sm">Email Support</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-12 pt-8 border-t border-white/20">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">Stay Connected with Us</h3>
            <p className="text-white/80 max-w-2xl mx-auto">
              Subscribe to our newsletter for health tips, hospital updates, and important medical information.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-4">
            <input 
              type="email" 
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-secondary"
            />
            <Button variant="secondary" size="lg">
              Subscribe
            </Button>
          </div>
        </div>

        {/* Social Links */}
        <div className="mt-8 flex justify-center space-x-6">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-secondary hover:scale-110 transition-all duration-300 group"
              aria-label={social.label}
            >
              <social.icon className="w-5 h-5 text-white group-hover:text-white" />
            </a>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-black/20 border-t border-white/10">
        <div className="container mx-auto px-4 lg:px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-white/80 text-sm">
              © 2024 Patidar Hospital. All rights reserved. | 
              <a href="#" className="hover:text-white transition-colors ml-1">Privacy Policy</a> | 
              <a href="#" className="hover:text-white transition-colors ml-1">Terms of Service</a>
            </div>
            
            <div className="text-white/80 text-sm">
              Designed with <Heart className="w-4 h-4 inline text-red-400" /> for better healthcare
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
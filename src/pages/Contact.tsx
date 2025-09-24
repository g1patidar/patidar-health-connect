import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Ambulance,
  Calendar,
  MessageSquare,
  Send
} from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Emergency Hotline",
      primary: "+91 98765 43210",
      secondary: "Available 24/7",
      color: "text-red-500"
    },
    {
      icon: Phone,
      title: "Appointment Booking",
      primary: "+91 98765 43211",
      secondary: "Mon-Sat: 8AM-8PM",
      color: "text-primary"
    },
    {
      icon: Mail,
      title: "Email Support",
      primary: "info@patidarhospital.com",
      secondary: "We'll respond within 24hrs",
      color: "text-secondary"
    },
    {
      icon: MapPin,
      title: "Hospital Address",
      primary: "123 Medical Complex, Health Street",
      secondary: "Mumbai, Maharashtra 400001",
      color: "text-primary"
    }
  ];

  const quickActions = [
    {
      icon: Calendar,
      title: "Book Appointment",
      description: "Schedule your consultation with our specialists",
      buttonText: "Book Now",
      variant: "hero" as const
    },
    {
      icon: Ambulance,
      title: "Emergency Services",
      description: "Immediate medical assistance available 24/7",
      buttonText: "Call Emergency",
      variant: "destructive" as const
    },
    {
      icon: MessageSquare,
      title: "Ask a Doctor",
      description: "Get medical advice from our healthcare experts",
      buttonText: "Start Chat",
      variant: "medical" as const
    }
  ];

  return (
    <div className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We're here to help you 24/7. Whether you need to book an appointment, 
            have a medical emergency, or just have questions about our services.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8 animate-slide-in">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">Contact Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <Card 
                    key={info.title}
                    className="hover:shadow-card transition-all duration-300 border-border hover:border-primary/20"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className={`w-12 h-12 rounded-full bg-accent flex items-center justify-center ${info.color}`}>
                          <info.icon className="w-6 h-6" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-foreground mb-1">{info.title}</h3>
                          <p className="text-foreground font-medium">{info.primary}</p>
                          <p className="text-muted-foreground text-sm">{info.secondary}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">Quick Actions</h2>
              <div className="space-y-4">
                {quickActions.map((action, index) => (
                  <Card 
                    key={action.title}
                    className="hover:shadow-card transition-all duration-300 border-border hover:border-primary/20"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center">
                            <action.icon className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-foreground">{action.title}</h3>
                            <p className="text-muted-foreground text-sm">{action.description}</p>
                          </div>
                        </div>
                        <Button variant={action.variant} size="sm">
                          {action.buttonText}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Operating Hours */}
            <Card className="animate-fade-in">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Clock className="w-5 h-5 mr-2 text-primary" />
                  Operating Hours
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Emergency Services</span>
                  <span className="font-semibold text-foreground">24/7</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">OPD Consultations</span>
                  <span className="font-semibold text-foreground">8:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Lab Services</span>
                  <span className="font-semibold text-foreground">6:00 AM - 10:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Pharmacy</span>
                  <span className="font-semibold text-foreground">24/7</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="animate-slide-in">
            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground">Send Us a Message</CardTitle>
                <p className="text-muted-foreground">
                  Have a question or need assistance? Fill out the form below and we'll get back to you promptly.
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      First Name *
                    </label>
                    <Input placeholder="Enter your first name" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Last Name *
                    </label>
                    <Input placeholder="Enter your last name" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Email Address *
                    </label>
                    <Input type="email" placeholder="your.email@example.com" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Phone Number
                    </label>
                    <Input type="tel" placeholder="+91 98765 43210" />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Subject *
                  </label>
                  <Input placeholder="How can we help you?" />
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Message *
                  </label>
                  <Textarea 
                    placeholder="Please describe your inquiry or concern in detail..."
                    rows={5}
                  />
                </div>

                <Button variant="hero" size="lg" className="w-full">
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  We respect your privacy. Your information will only be used to respond to your inquiry.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
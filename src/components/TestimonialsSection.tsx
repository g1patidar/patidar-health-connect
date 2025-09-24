import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Rajesh Mehta",
      age: 45,
      condition: "Heart Surgery",
      rating: 5,
      text: "The cardiac team at Patidar Hospital saved my life. Dr. Rajesh Patidar and his team performed my bypass surgery with exceptional skill. The care I received was world-class, and I'm forever grateful.",
      location: "Mumbai"
    },
    {
      name: "Priya Singh",
      age: 32,
      condition: "Maternity Care",
      rating: 5,
      text: "From pregnancy to delivery, the staff was incredibly supportive. The maternity ward is excellent, and the doctors made sure both my baby and I were comfortable throughout the process.",
      location: "Delhi"
    },
    {
      name: "Anil Kumar",
      age: 58,
      condition: "Orthopedic Surgery",
      rating: 5,
      text: "After my knee replacement surgery, I thought I'd never walk normally again. Thanks to Dr. Amit Kumar and the physiotherapy team, I'm now more active than I was before the surgery!",
      location: "Bangalore"
    },
    {
      name: "Sunita Sharma",
      age: 38,
      condition: "Neurology Treatment",
      rating: 5,
      text: "Dr. Priya Sharma diagnosed my migraine condition when other doctors couldn't. Her treatment approach was comprehensive, and I've been headache-free for months now.",
      location: "Pune"
    },
    {
      name: "Rohit Gupta",
      age: 29,
      condition: "Emergency Care",
      rating: 5,
      text: "The emergency response team was incredibly fast when I had my accident. The 24/7 care and the trauma specialists ensured I recovered completely. Truly life-saving service.",
      location: "Chennai"
    },
    {
      name: "Meera Patel",
      age: 52,
      condition: "Cancer Treatment",
      rating: 5,
      text: "The oncology team provided not just medical treatment but emotional support throughout my cancer journey. Their expertise and compassion helped me fight and win this battle.",
      location: "Ahmedabad"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star 
        key={i} 
        className={`w-4 h-4 ${i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
      />
    ));
  };

  return (
    <section className="py-20 bg-gradient-to-br from-accent/20 to-background">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            What Our Patients Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Real stories from real patients who experienced exceptional care at Patidar Hospital. 
            Their trust and recovery inspire us every day.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.name}
              className="group hover:shadow-elegant transition-all duration-500 border-border hover:border-primary/20 animate-fade-in bg-card relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote className="w-12 h-12 text-primary" />
              </div>

              <CardContent className="p-6 relative">
                {/* Rating */}
                <div className="flex items-center mb-4">
                  {renderStars(testimonial.rating)}
                </div>

                {/* Testimonial Text */}
                <p className="text-muted-foreground mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>

                {/* Patient Info */}
                <div className="border-t border-border pt-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-bold text-foreground group-hover:text-primary transition-colors">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Age {testimonial.age} • {testimonial.location}
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="bg-secondary/20 text-secondary px-3 py-1 rounded-full text-xs font-medium">
                        {testimonial.condition}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Overall Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">4.9/5</div>
            <div className="text-muted-foreground">Average Rating</div>
            <div className="flex justify-center mt-2">
              {renderStars(5)}
            </div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-secondary mb-2">98%</div>
            <div className="text-muted-foreground">Patient Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">10,000+</div>
            <div className="text-muted-foreground">Happy Patients</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
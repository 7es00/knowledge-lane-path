import { Button } from "@/components/ui/button";
import { 
  Brain, 
  Target, 
  Shield, 
  Clock, 
  TrendingUp, 
  Users, 
  Award, 
  Smartphone,
  CheckCircle
} from "lucide-react";

const FeaturesSection = () => {
  const mainFeatures = [
    {
      icon: Brain,
      title: "Instant Feedback",
      description: "Get immediate explanations for every answer to understand concepts better and learn from mistakes.",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: Target,
      title: "Personalized Learning",
      description: "AI-powered recommendations adapt to your learning style and focus on areas that need improvement.",
      color: "bg-purple-100 text-purple-600"
    },
    {
      icon: TrendingUp,
      title: "Progress Tracking",
      description: "Monitor your performance with detailed analytics and see your improvement over time.",
      color: "bg-green-100 text-green-600"
    },
    {
      icon: Shield,
      title: "Secure Platform",
      description: "Advanced security features prevent unauthorized access and protect your learning data.",
      color: "bg-red-100 text-red-600"
    }
  ];

  const learningFeatures = [
    {
      icon: Award,
      title: "Expert-Curated Content",
      description: "Questions designed by subject matter experts and educators."
    },
    {
      icon: Smartphone,
      title: "Mobile Optimized",
      description: "Learn anywhere, anytime with our responsive mobile interface."
    },
    {
      icon: CheckCircle,
      title: "Verified Solutions",
      description: "All answers are thoroughly reviewed and verified for accuracy."
    }
  ];

  return (
    <section id="features" className="section-padding bg-white">
      <div className="container-educational">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-heading-2 mb-4">
            Powerful Features for
            <span className="text-transparent bg-gradient-to-r from-[#AF0936] to-[#d1426b] bg-clip-text">
              {" "}Effective Learning
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our platform combines cutting-edge technology with proven educational methods 
            to deliver an unparalleled learning experience
          </p>
        </div>

        {/* Main Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          {mainFeatures.map((feature, index) => (
            <div key={feature.title} className="card-educational p-6 text-center group hover:shadow-xl transition-all duration-300">
              <div className={`w-16 h-16 ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold font-poppins mb-3 text-gray-900">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

 

        {/* Learning Enhancement Features */}
        <div className="mb-16 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <div className="text-center mb-12">
            <h3 className="text-heading-3 mb-4 text-gray-900">Enhanced Learning Experience</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Every feature is designed to maximize your learning potential and academic success
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {learningFeatures.map((feature, index) => (
              <div key={feature.title} className="card-educational p-6 group hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-semibold font-poppins mb-3 text-gray-900">
                  {feature.title}
                </h4>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <div className="bg-gradient-to-tr from-[#bc0d44] via-primary to-[#bc0d44] rounded-3xl p-8 lg:p-12 text-white">
            <h3 className="text-heading-3 mb-4">Ready to Transform Your Learning?</h3>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Join thousands of successful students who have achieved their academic goals with our platform
            </p>
            <div className="flex justify-center">
              <Button size="lg" variant="outline" className=" border-white/30 text-primary hover:bg-white/10 hover:text-white font-semibold px-8 py-4 rounded-xl">
                Start Learning Today
              </Button>
             
             
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
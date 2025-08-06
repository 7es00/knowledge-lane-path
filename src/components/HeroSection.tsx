import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Star, Users, BookOpen } from "lucide-react";
import heroEducation from "@/assets/hero-education.png";
import { useNavigate } from "react-router-dom";






const HeroSection = () => {


function  handleQuestionBankSectionClick (){
  const section = document.getElementById("QuestionBankSection");
  if (section) section.scrollIntoView({ behavior: "smooth" });

};

  return (
    <section className="section-padding gradient-hero relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-20 h-20 rounded-full bg-white animate-float"></div>
        <div
          className="absolute top-40 right-20 w-16 h-16 rounded-full bg-white/50 animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-20 left-1/4 w-12 h-12 rounded-full bg-white/30 animate-float"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      <div className="container-educational relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="text-white animate-fade-in-up">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm mb-6">
              <Star className="w-4 h-4 text-yellow-300 mr-2" />
              <span className="text-sm font-medium">
                Trusted by 50,000+ Students
              </span>
            </div>

            <h1 className="text-heading-1 mb-6 ">
              Master Any Subject with
              <span className="block  bg-clip-text text-[#F3729F]">
                Expert Question Banks
              </span>
            </h1>

            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Access premium question banks across multiple subjects. Practice
              with instant feedback, track your progress, and ace your exams
              with confidence.
            </p>

            {/* CTA Buttons */}
            <div className="mb-8">
              <Button
                variant="outline"
                size="lg"
                className="border-white/30 text-primary hover:bg-white/10 hover:text-white font-semibold px-8 py-4 rounded-xl"
              onClick={handleQuestionBankSectionClick}
              >
                Browse Question Banks
                <ArrowRight className="w-5 h-5 mr-2" />
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold">500+</div>
                <div className="text-sm text-white/80">Question Banks</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">50K+</div>
                <div className="text-sm text-white/80">Students</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">95%</div>
                <div className="text-sm text-white/80">Success Rate</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div
            className="relative animate-fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="relative z-10">
              <img
                src={heroEducation}
                alt="Educational Platform"
                className="rounded-2xl  w-fit h-auto"
              />

              {/* Floating cards */}
              <div className="absolute -top-6 -left-6 bg-white rounded-xl p-4 shadow-lg animate-bounce-subtle">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                    <BookOpen className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-900">
                      Mathematics
                    </div>
                    <div className="text-xs text-gray-500">850 Questions</div>
                  </div>
                </div>
              </div>

              <div
                className="absolute -bottom-1 -right-6 bg-white rounded-xl p-4 shadow-lg animate-bounce-subtle"
                style={{ animationDelay: "1s" }}
              >
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Users className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-900">
                      12,450
                    </div>
                    <div className="text-xs text-gray-500">Active Learners</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Background glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-2xl blur-3xl transform scale-110"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

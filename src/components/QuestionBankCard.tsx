import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Clock, Users, ShoppingCart } from "lucide-react";

interface QuestionBankCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  price: number;
  totalQuestions: number;
  category: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  duration: string;
}

const QuestionBankCard = ({
  title,
  description,
  image,
  price,
  totalQuestions,
  category,
  level,
  duration,
}: QuestionBankCardProps) => {
  const getLevelColor = (level: string) => {
    switch (level) {
      case "Beginner":
        return "bg-green-100 text-green-800";
      case "Intermediate":
        return "bg-yellow-100 text-yellow-800";
      case "Advanced":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="card-question-bank group">
      {/* Image */}
      <div className="relative overflow-hidden rounded-lg mb-4">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-3 left-3">
          <Badge variant="secondary" className="bg-white/90 text-gray-800">
            {category}
          </Badge>
        </div>
        <div className="absolute top-3 right-3">
          <Badge className={`${getLevelColor(level)} border-0`}>{level}</Badge>
        </div>
      </div>

      {/* Content */}
      <div className="space-y-3">
        <h3 className="text-xl font-semibold font-poppins text-gray-900 group-hover:text-primary transition-colors">
          {title}
        </h3>

        <p className="text-gray-600 text-sm line-clamp-2">{description}</p>

        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center text-gray-500 space-x-1">
            <Clock className="w-4 h-4" />
            <span>{duration}</span>
          </div>
          <div>
            <span className="font-bold ">{totalQuestions}</span>
            <span> Questions Available</span>
          </div>
        </div>

        {/* Price and CTA */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="text-2xl font-bold text-gray-900">
            ${price}
            <span className="text-sm font-normal text-gray-500">/month</span>
          </div>
          <Button className="btn-primary">
            <ShoppingCart className="w-4 h-4 mr-2" />
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default QuestionBankCard;

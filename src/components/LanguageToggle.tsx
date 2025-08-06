import { Button } from "@/components/ui/button";
import { Languages } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <Button 
      variant="ghost" 
      size="sm"
      onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
      className="flex items-center space-x-2"
    >
      <Languages className="w-4 h-4" />
      <span>{language === 'en' ? 'عربي' : 'English'}</span>
    </Button>
  );
};

export default LanguageToggle;
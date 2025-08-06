// src/components/Header.jsx
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, BookOpen, User, ShoppingBag, LogOut } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useLanguage();

  const navigation = [
    { name: t('header.home'), href: "/" },
    { name: t('header.myBanks'), href: "/my-banks" },
    { name: t('header.features'), href: "#features" },
  ];

  const goToLogin = () => { navigate('/auth') }

  // دالة تنقل للسكشن Features مهما كان مكانك
  const handleFeaturesClick = (e) => {
    e.preventDefault();
    if (location.pathname === "/") {
      // لو انت في الصفحة الرئيسية، scroll على السكشن
      const section = document.getElementById("features");
      if (section) section.scrollIntoView({ behavior: "smooth" });
    } else {
      // لو مش في الصفحة الرئيسية، روح للصفحة الرئيسية مع هاش، وبعد التحميل انزل للسكشن
      navigate("/#features");
      // حل برمجي للتنقل بعد الوصول (يحتاج تدعمني في الصفحة الرئيسية ب useEffect)
      setTimeout(() => {
        const section = document.getElementById("features");
        if (section) section.scrollIntoView({ behavior: "smooth" });
      }, 500);
    }
  };

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-border/50 sticky top-0 z-50">
      <div className="container-educational">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold font-poppins bg-gradient-to-r from-primary to-[#d1426b] bg-clip-text text-transparent">
              QuestionBanks
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => {
              // لو الرابط فيه # يعني سكشن داخلي
              if (item.href.startsWith("#")) {
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={handleFeaturesClick}
                    className="text-sm font-medium transition-colors hover:text-primary text-muted-foreground"
                  >
                    {item.name}
                  </a>
                );
              }
              // روابط الصفحات
              const isActive =
                location.pathname === item.href ||
                (item.href !== "/" && location.pathname.startsWith(item.href));
              return (
                <NavLink
                  key={item.name}
                  to={item.href}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    isActive ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  {item.name}
                </NavLink>
              );
            })}
          </nav>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {isLoggedIn ? (
              <>
                <Button variant="ghost" size="sm" className="relative">
                  <ShoppingBag className="w-4 h-4 mr-2" />
                  Cart
                  <Badge variant="secondary" className="ml-2">2</Badge>
                </Button>
                <Button variant="ghost" size="sm">
                  <User className="w-4 h-4 mr-2" />
                  Profile
                </Button>
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => setIsLoggedIn(false)}
                >
                  <LogOut className="w-4 h-4" />
                </Button>
              </>
            ) : (
              <>
                <Button variant="ghost" size="sm" onClick={goToLogin}>
                  {t('header.login')}
                </Button>
                <Button className="btn-primary" onClick={goToLogin}>
                  {t('header.signup')}
                </Button>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="sm" className="md:hidden">
                <Menu className="w-5 h-5" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col space-y-4 mt-8">
                {navigation.map((item) => {
                  if (item.href.startsWith("#")) {
                    return (
                      <a
                        key={item.name}
                        href={item.href}
                        onClick={(e) => {
                          handleFeaturesClick(e);
                        }}
                        className="text-lg font-medium transition-colors hover:text-primary text-muted-foreground"
                      >
                        {item.name}
                      </a>
                    );
                  }
                  const isActive =
                    location.pathname === item.href ||
                    (item.href !== "/" && location.pathname.startsWith(item.href));
                  return (
                    <NavLink
                      key={item.name}
                      to={item.href}
                      className={`text-lg font-medium transition-colors hover:text-primary ${
                        isActive ? "text-primary" : "text-muted-foreground"
                      }`}
                    >
                      {item.name}
                    </NavLink>
                  );
                })}
                <div className="border-t pt-4 space-y-2">
                  {isLoggedIn ? (
                    <>
                      <Button variant="ghost" className="w-full justify-start">
                        <User className="w-4 h-4 mr-2" />
                        Profile
                      </Button>
                      <Button variant="ghost" className="w-full justify-start">
                        <ShoppingBag className="w-4 h-4 mr-2" />
                        Cart
                      </Button>
                      <Button 
                        variant="ghost" 
                        className="w-full justify-start"
                        onClick={() => setIsLoggedIn(false)}
                      >
                        <LogOut className="w-4 h-4 mr-2" />
                        Logout
                      </Button>
                    </>
                  ) : (
                    <>
                      <Button variant="ghost" className="w-full" onClick={goToLogin}>
                        {t('header.login')}
                      </Button>
                      <Button className="btn-primary w-full" onClick={goToLogin}>
                        {t('header.signup')}
                      </Button>
                    </>
                  )}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;

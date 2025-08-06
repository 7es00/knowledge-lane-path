import React, { createContext, useContext, useState, useEffect } from 'react';

interface LanguageContextType {
  language: 'en' | 'ar';
  setLanguage: (lang: 'en' | 'ar') => void;
  t: (key: string) => string;
  dir: 'ltr' | 'rtl';
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Header
    'header.home': 'Home',
    'header.features': 'Features',
    'header.pricing': 'Pricing',
    'header.about': 'About',
    'header.login': 'Login',
    'header.signup': 'Sign Up',
    'header.myBanks': 'My Banks',
    'header.logout': 'Logout',
    
    // Auth
    'auth.signIn': 'Sign In',
    'auth.signUp': 'Sign Up',
    'auth.email': 'Email Address',
    'auth.password': 'Password',
    'auth.confirmPassword': 'Confirm Password',
    'auth.fullName': 'Full Name',
    'auth.rememberMe': 'Remember me',
    'auth.forgotPassword': 'Forgot password?',
    'auth.createAccount': 'Create Account',
    'auth.enterEmail': 'Enter your email',
    'auth.enterPassword': 'Enter your password',
    'auth.enterName': 'Enter your full name',
    'auth.createPassword': 'Create a password',
    'auth.confirmYourPassword': 'Confirm your password',
    'auth.agreeToTerms': 'I agree to the',
    'auth.termsOfService': 'Terms of Service',
    'auth.and': 'and',
    'auth.privacyPolicy': 'Privacy Policy',
    'auth.trustedBy': 'Trusted by 50,000+ students worldwide',
    'auth.joinStudents': 'Join thousands of successful students',
    
    // My Banks
    'myBanks.title': 'My Question Banks',
    'myBanks.active': 'Active',
    'myBanks.expired': 'Expired',
    'myBanks.expiresIn': 'Expires in',
    'myBanks.expiredOn': 'Expired on',
    'myBanks.days': 'days',
    'myBanks.practiceNow': 'Practice Now',
    'myBanks.renew': 'Renew',
    'myBanks.subscriptionPeriod': 'Subscription Period',
    'myBanks.remainingTime': 'Remaining Time',
    
    // Questions
    'questions.backToBank': 'Back to Question Bank',
    'questions.flag': 'Flag',
    'questions.questionOf': 'Question {current} of {total}',
    'questions.correct': 'correct',
    'questions.incorrect': 'incorrect',
    'questions.remaining': 'remaining',
    'questions.explanation': 'Explanation',
    'questions.previous': 'Previous',
    'questions.submitAnswer': 'Submit Answer',
    'questions.tryAgain': 'Try Again',
    'questions.nextQuestion': 'Next Question',
    'questions.questionNavigation': 'Question Navigation',
    'questions.page': 'Page',
    
    // Difficulty levels
    'difficulty.easy': 'Easy',
    'difficulty.medium': 'Medium',
    'difficulty.hard': 'Hard',
    
    // Common
    'common.loading': 'Loading...',
    'common.search': 'Search',
    'common.filter': 'Filter',
    'common.all': 'All',
  },
  ar: {
    // Header
    'header.home': 'الرئيسية',
    'header.features': 'المميزات',
    'header.pricing': 'الأسعار',
    'header.about': 'حول',
    'header.login': 'تسجيل الدخول',
    'header.signup': 'إنشاء حساب',
    'header.myBanks': 'بنوك الأسئلة',
    'header.logout': 'تسجيل الخروج',
    
    // Auth
    'auth.signIn': 'تسجيل الدخول',
    'auth.signUp': 'إنشاء حساب',
    'auth.email': 'البريد الإلكتروني',
    'auth.password': 'كلمة المرور',
    'auth.confirmPassword': 'تأكيد كلمة المرور',
    'auth.fullName': 'الاسم الكامل',
    'auth.rememberMe': 'تذكرني',
    'auth.forgotPassword': 'نسيت كلمة المرور؟',
    'auth.createAccount': 'إنشاء حساب',
    'auth.enterEmail': 'أدخل بريدك الإلكتروني',
    'auth.enterPassword': 'أدخل كلمة المرور',
    'auth.enterName': 'أدخل اسمك الكامل',
    'auth.createPassword': 'إنشاء كلمة مرور',
    'auth.confirmYourPassword': 'تأكيد كلمة المرور',
    'auth.agreeToTerms': 'أوافق على',
    'auth.termsOfService': 'شروط الخدمة',
    'auth.and': 'و',
    'auth.privacyPolicy': 'سياسة الخصوصية',
    'auth.trustedBy': 'موثوق من قبل أكثر من 50,000 طالب حول العالم',
    'auth.joinStudents': 'انضم إلى آلاف الطلاب الناجحين',
    
    // My Banks
    'myBanks.title': 'بنوك الأسئلة الخاصة بي',
    'myBanks.active': 'نشط',
    'myBanks.expired': 'منتهي الصلاحية',
    'myBanks.expiresIn': 'ينتهي خلال',
    'myBanks.expiredOn': 'انتهت في',
    'myBanks.days': 'يوم',
    'myBanks.practiceNow': 'ابدأ التمرين',
    'myBanks.renew': 'تجديد',
    'myBanks.subscriptionPeriod': 'فترة الاشتراك',
    'myBanks.remainingTime': 'الوقت المتبقي',
    
    // Questions
    'questions.backToBank': 'العودة إلى بنك الأسئلة',
    'questions.flag': 'وضع علامة',
    'questions.questionOf': 'السؤال {current} من {total}',
    'questions.correct': 'صحيح',
    'questions.incorrect': 'خطأ',
    'questions.remaining': 'متبقي',
    'questions.explanation': 'الشرح',
    'questions.previous': 'السابق',
    'questions.submitAnswer': 'إرسال الإجابة',
    'questions.tryAgain': 'حاول مرة أخرى',
    'questions.nextQuestion': 'السؤال التالي',
    'questions.questionNavigation': 'تنقل الأسئلة',
    'questions.page': 'الصفحة',
    
    // Difficulty levels
    'difficulty.easy': 'سهل',
    'difficulty.medium': 'متوسط',
    'difficulty.hard': 'صعب',
    
    // Common
    'common.loading': 'جارٍ التحميل...',
    'common.search': 'بحث',
    'common.filter': 'تصفية',
    'common.all': 'الكل',
  }
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<'en' | 'ar'>('en');

  const setLanguage = (lang: 'en' | 'ar') => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  };

  const t = (key: string): string => {
    const keys = key.split('.');
    let value: any = translations[language];
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    return value || key;
  };

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as 'en' | 'ar' | null;
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  return (
    <LanguageContext.Provider 
      value={{ 
        language, 
        setLanguage, 
        t, 
        dir: language === 'ar' ? 'rtl' : 'ltr' 
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
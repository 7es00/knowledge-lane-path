import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  BookOpen,
  Clock,
  Calendar,
  ArrowRight,
  Shield,
  LogOut,
} from "lucide-react";

const MyBanks = () => {
  const { t } = useLanguage();
  
  const userBanks = [
    {
      id: 1,
      title: "Advanced Mathematics",
      subject: "Mathematics",
      totalQuestions: 850,
      status: "active",
      icon: "📐",
      subscriptionStart: "2024-01-15",
      subscriptionEnd: "2024-02-15",
      daysRemaining: 12,
    },
    {
      id: 2,
      title: "Computer Science Fundamentals",
      subject: "Programming",
      totalQuestions: 750,
      status: "active",
      icon: "💻",
      subscriptionStart: "2024-01-20",
      subscriptionEnd: "2024-02-20",
      daysRemaining: 17,
    },
    {
      id: 3,
      title: "Physics Mastery",
      subject: "Physics",
      totalQuestions: 600,
      status: "expired",
      icon: "⚛️",
      subscriptionStart: "2023-12-10",
      subscriptionEnd: "2024-01-10",
      daysRemaining: 0,
    },
  ];

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    window.location.href = '/auth';
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container-educational py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2 font-poppins">
              {t('myBanks.title')}
            </h1>
            <p className="text-lg text-gray-600">
              Track your progress and continue learning
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-gray-500">
              <Shield className="w-4 h-4" />
              <span>Single Device Access Active</span>
            </div>
            <Button variant="outline" onClick={() => window.location.href = '/'}>
              <BookOpen className="w-4 h-4 mr-2" />
              Browse More Banks
            </Button>
            <Button variant="ghost" onClick={handleLogout}>
              <LogOut className="w-4 h-4 mr-2" />
              {t('header.logout')}
            </Button>
          </div>
        </div>

        {/* Question Banks Grid */}
        {userBanks.map((bank) => (
          <Card key={bank.id} className="p-6 hover:shadow-lg transition-shadow mb-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center text-white text-xl">
                  {bank.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">
                    {bank.title}
                  </h3>
                  <div className="flex items-center space-x-3">
                    <Badge variant="outline">{bank.subject}</Badge>
                    <Badge
                      className={
                        bank.status === "active"
                          ? "bg-green-100 text-green-800"
                          : "bg-red-100 text-red-800"
                      }
                    >
                      {bank.status === "active" ? t('myBanks.active') : t('myBanks.expired')}
                    </Badge>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm text-gray-500 mb-1">
                  {bank.status === "active" ? t('myBanks.expiresIn') : t('myBanks.expiredOn')}: {bank.subscriptionEnd}
                </div>
                {bank.status === "active" && (
                  <div className="text-xs text-gray-400">
                    {bank.daysRemaining} {t('myBanks.days')}
                  </div>
                )}
              </div>
            </div>

            {/* Subscription Info */}
            <div className="mb-6">
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-medium text-gray-900 mb-3 flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  {t('myBanks.subscriptionPeriod')}
                </h4>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-500">Start:</span>
                    <div className="font-medium">{bank.subscriptionStart}</div>
                  </div>
                  <div>
                    <span className="text-gray-500">End:</span>
                    <div className="font-medium">{bank.subscriptionEnd}</div>
                  </div>
                </div>
                {bank.status === "active" && (
                  <div className="mt-3 p-2 bg-blue-50 rounded">
                    <div className="text-sm text-blue-700">
                      <Clock className="w-4 h-4 inline mr-1" />
                      {t('myBanks.remainingTime')}: {bank.daysRemaining} {t('myBanks.days')}
                    </div>
                  </div>
                )}
              </div>
              
              <div className="mt-4 text-center text-sm text-gray-500">
                {bank.totalQuestions} questions available
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-3">
              {bank.status === "active" ? (
                <Button 
                  className="flex-1 btn-primary"
                  onClick={() => window.location.href = `/question/${bank.id}`}
                >
                  {t('myBanks.practiceNow')}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              ) : (
                <Button variant="outline" className="flex-1">
                  {t('myBanks.renew')}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              )}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default MyBanks;
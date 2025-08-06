import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Play,
  BarChart3,
  Clock,
  Calendar,
  Trophy,
  Target,
  BookOpen,
  RefreshCw
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import mathIcon from "@/assets/math-icon.jpg";
import scienceIcon from "@/assets/science-icon.jpg";
import programmingIcon from "@/assets/programming-icon.jpg";

const MyBanks = () => {
  const [selectedPeriod, setSelectedPeriod] = useState("30days");

  const myQuestionBanks = [
    {
      id: "1",
      title: "Advanced Mathematics Mastery",
      image: mathIcon,
      progress: 75,
      totalQuestions: 850,
      completedQuestions: 638,
      accuracy: 87,
      timeSpent: "45h 30m",
      lastAccessed: "2 hours ago",
      expiresIn: "22 days",
      status: "active"
    },
    {
      id: "2",
      title: "Programming Interview Prep",
      image: programmingIcon,
      progress: 45,
      totalQuestions: 1200,
      completedQuestions: 540,
      accuracy: 92,
      timeSpent: "32h 15m",
      lastAccessed: "1 day ago",
      expiresIn: "15 days",
      status: "active"
    },
    {
      id: "3",
      title: "Physics & Chemistry Fundamentals",
      image: scienceIcon,
      progress: 100,
      totalQuestions: 720,
      completedQuestions: 720,
      accuracy: 89,
      timeSpent: "28h 45m",
      lastAccessed: "3 days ago",
      expiresIn: "Expired",
      status: "expired"
    }
  ];

  const weeklyStats = [
    { day: "Mon", questions: 15, accuracy: 85 },
    { day: "Tue", questions: 22, accuracy: 90 },
    { day: "Wed", questions: 18, accuracy: 88 },
    { day: "Thu", questions: 25, accuracy: 92 },
    { day: "Fri", questions: 30, accuracy: 87 },
    { day: "Sat", questions: 28, accuracy: 95 },
    { day: "Sun", questions: 20, accuracy: 89 }
  ];

  const achievements = [
    { title: "First Steps", description: "Complete your first question", unlocked: true },
    { title: "Streak Master", description: "7-day practice streak", unlocked: true },
    { title: "Accuracy Expert", description: "Achieve 90% accuracy", unlocked: true },
    { title: "Speed Demon", description: "Answer 100 questions in a day", unlocked: false },
    { title: "Subject Master", description: "Complete a question bank", unlocked: true },
    { title: "Marathon Runner", description: "Practice for 50 hours", unlocked: false }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="section-padding bg-gradient-to-b from-blue-50 to-white">
        <div className="container-educational">

          {/* Title + Description */}
          <div className="mb-12 animate-fade-in-up">
            <h1 className="text-heading-2 mb-4">
              My Question Banks
            </h1>
            <p className="text-lg text-muted-foreground">
              Track your progress and continue your learning journey
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid md:grid-cols-4 gap-6 mb-12 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <Card className="p-6 text-center">
              <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center mx-auto mb-3">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-gray-900">3</div>
              <div className="text-sm text-gray-500">Active Banks</div>
            </Card>
            <Card className="p-6 text-center">
              <div className="w-12 h-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Target className="w-6 h-6" />
              </div>
              <div className="text-2xl font-bold text-gray-900">89%</div>
              <div className="text-sm text-gray-500">Avg Accuracy</div>
            </Card>
            <Card className="p-6 text-center">
              <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center mx-auto mb-3">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-gray-900">106h</div>
              <div className="text-sm text-gray-500">Total Study Time</div>
            </Card>
            <Card className="p-6 text-center">
              <div className="w-12 h-12 bg-yellow-100 text-yellow-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Trophy className="w-6 h-6" />
              </div>
              <div className="text-2xl font-bold text-gray-900">4</div>
              <div className="text-sm text-gray-500">Achievements</div>
            </Card>
          </div>

          {/* Main Tabs Section */}
          <Tabs defaultValue="banks" className="space-y-8">
            <TabsList className="grid w-full grid-cols-3 max-w-md mx-auto">
              <TabsTrigger value="banks">My Banks</TabsTrigger>
              <TabsTrigger value="progress">Progress</TabsTrigger>
              <TabsTrigger value="achievements">Achievements</TabsTrigger>
            </TabsList>

            {/* My Banks Tab */}
            <TabsContent value="banks" className="space-y-6 animate-fade-in-up">
              {myQuestionBanks.map((bank) => (
                <Card key={bank.id} className="p-6 hover:shadow-lg transition-all duration-300">
                  <div className="flex flex-col lg:flex-row lg:items-center gap-6">

                    {/* Bank Info */}
                    <div className="flex items-center space-x-4 flex-1">
                      <img
                        src={bank.image}
                        alt={bank.title}
                        className="w-16 h-16 rounded-xl object-cover"
                      />
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="text-xl font-semibold text-gray-900">
                            {bank.title}
                          </h3>
                          <Badge
                            variant={bank.status === 'active' ? 'default' : 'destructive'}
                            className={bank.status === 'active' ? 'gradient-primary text-white border-0' : ''}
                          >
                            {bank.status === 'active' ? 'Active' : 'Expired'}
                          </Badge>
                        </div>
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <span>{bank.completedQuestions}/{bank.totalQuestions} questions</span>
                          <span>•</span>
                          <span>{bank.accuracy}% accuracy</span>
                          <span>•</span>
                          <span>Last accessed {bank.lastAccessed}</span>
                        </div>
                      </div>
                    </div>

                    {/* Progress */}
                    <div className="flex-1 max-w-xs">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-gray-700">Progress</span>
                        <span className="text-sm text-gray-500">{bank.progress}%</span>
                      </div>
                      <Progress value={bank.progress} className="h-2" />
                      <div className="flex justify-between items-center mt-2 text-xs text-gray-500">
                        <span>Time spent: {bank.timeSpent}</span>
                        <span>Expires: {bank.expiresIn}</span>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center space-x-3">
                      {bank.status === 'active' ? (
                        <>
                          <Button className="btn-primary">
                            <Play className="w-4 h-4 mr-2" />
                            Continue
                          </Button>
                          <Button variant="outline" size="sm">
                            <BarChart3 className="w-4 h-4" />
                          </Button>
                        </>
                      ) : (
                        <Button className="btn-primary">
                          <RefreshCw className="w-4 h-4 mr-2" />
                          Renew
                        </Button>
                      )}
                    </div>
                  </div>
                </Card>
              ))}
            </TabsContent>

            {/* Progress Tab */}
            <TabsContent value="progress" className="space-y-6 animate-fade-in-up">
              <Card className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-semibold">Weekly Activity</h3>
                  <div className="flex space-x-2">
                    {["7days", "30days", "90days"].map((period) => (
                      <Button
                        key={period}
                        variant={selectedPeriod === period ? "default" : "outline"}
                        size="sm"
                        onClick={() => setSelectedPeriod(period)}
                      >
                        {period === "7days" ? "7 Days" : period === "30days" ? "30 Days" : "90 Days"}
                      </Button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-7 gap-4">
                  {weeklyStats.map((day) => (
                    <div key={day.day} className="text-center">
                      <div className="text-sm text-gray-500 mb-2">{day.day}</div>
                      <div
                        className="bg-blue-100 rounded-lg p-4 hover:bg-blue-200 transition-colors"
                        style={{ height: `${Math.max(day.questions * 2, 40)}px` }}
                      >
                        <div className="text-xs font-medium text-primary">{day.questions}</div>
                      </div>
                      <div className="text-xs text-gray-500 mt-1">{day.accuracy}%</div>
                    </div>
                  ))}
                </div>
              </Card>

              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <h3 className="text-lg font-semibold mb-4 flex items-center">
                    <Target className="w-5 h-5 mr-2 text-primary" />
                    Subject Performance
                  </h3>
                  <div className="space-y-4">
                    {[
                      { subject: "Mathematics", accuracy: 87, questions: 638 },
                      { subject: "Programming", accuracy: 92, questions: 540 },
                      { subject: "Science", accuracy: 89, questions: 720 }
                    ].map((subject) => (
                      <div key={subject.subject} className="flex items-center justify-between">
                        <div>
                          <div className="font-medium">{subject.subject}</div>
                          <div className="text-sm text-gray-500">{subject.questions} questions</div>
                        </div>
                        <div className="text-right">
                          <div className="font-medium">{subject.accuracy}%</div>
                          <div className="text-sm text-gray-500">accuracy</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>

                <Card className="p-6">
                  <h3 className="text-lg font-semibold mb-4 flex items-center">
                    <Calendar className="w-5 h-5 mr-2 text-green-600" />
                    Study Streak
                  </h3>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">7</div>
                    <div className="text-lg font-medium text-gray-900 mb-2">Days</div>
                    <div className="text-sm text-gray-500 mb-4">Current streak</div>
                    <div className="text-xs text-gray-500">Best streak: 14 days</div>
                  </div>
                </Card>
              </div>
            </TabsContent>

            {/* Achievements Tab */}
            <TabsContent value="achievements" className="animate-fade-in-up">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {achievements.map((achievement) => (
                  <Card
                    key={achievement.title}
                    className={`p-6 text-center transition-all duration-300 ${
                      achievement.unlocked
                        ? 'gradient-primary text-white border-0 shadow-lg'
                        : 'opacity-60'
                    }`}
                  >
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                      achievement.unlocked
                        ? 'bg-white/20 text-white'
                        : 'bg-gray-100 text-gray-400'
                    }`}>
                      <Trophy className="w-8 h-8" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-900">
                      {achievement.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {achievement.description}
                    </p>
                    {achievement.unlocked && (
                      <Badge className="mt-3 bg-white/30 text-white border-white/50">
                        Unlocked
                      </Badge>
                    )}
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default MyBanks;

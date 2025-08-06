import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/contexts/LanguageContext";
import { 
  CheckCircle, 
  XCircle, 
  Clock, 
  BookOpen, 
  ArrowLeft, 
  ArrowRight,
  RotateCcw,
  Flag,
  ChevronLeft,
  ChevronRight
} from "lucide-react";

interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  difficulty: "Easy" | "Medium" | "Hard";
  topic: string;
}

// Generate 800+ sample questions
const generateQuestions = (): Question[] => {
  const topics = ["Mathematics", "Science", "Programming", "Physics", "Chemistry", "Biology"];
  const difficulties: ("Easy" | "Medium" | "Hard")[] = ["Easy", "Medium", "Hard"];
  const questions: Question[] = [];

  for (let i = 1; i <= 850; i++) {
    const topic = topics[i % topics.length];
    const difficulty = difficulties[i % difficulties.length];
    
    questions.push({
      id: i.toString(),
      question: `Sample question ${i} for ${topic} - ${difficulty} level. This is a comprehensive question designed to test your understanding of the subject matter.`,
      options: [
        `Option A for question ${i}`,
        `Option B for question ${i}`,
        `Option C for question ${i}`,
        `Option D for question ${i}`
      ],
      correctAnswer: i % 4,
      explanation: `This is the detailed explanation for question ${i}. The correct answer demonstrates the fundamental principles of ${topic} at ${difficulty} level.`,
      difficulty,
      topic
    });
  }
  
  return questions;
};

const QuestionInterface = () => {
  const { t } = useLanguage();
  const [currentPage, setCurrentPage] = useState(1);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [answeredQuestions, setAnsweredQuestions] = useState<Set<number>>(new Set());
  const [correctAnswers, setCorrectAnswers] = useState<Set<number>>(new Set());

  const questions = generateQuestions();
  const questionsPerPage = 20;
  const totalPages = Math.ceil(questions.length / questionsPerPage);
  const currentPageQuestions = questions.slice(
    (currentPage - 1) * questionsPerPage,
    currentPage * questionsPerPage
  );
  const currentQuestion = currentPageQuestions[currentQuestionIndex];

  const handleAnswerSelect = (answerIndex: number) => {
    if (showResult) return;
    setSelectedAnswer(answerIndex);
  };

  const handleSubmitAnswer = () => {
    if (selectedAnswer === null) return;
    
    setShowResult(true);
    const globalQuestionIndex = (currentPage - 1) * questionsPerPage + currentQuestionIndex;
    const newAnsweredQuestions = new Set(answeredQuestions);
    newAnsweredQuestions.add(globalQuestionIndex);
    setAnsweredQuestions(newAnsweredQuestions);

    if (selectedAnswer === currentQuestion.correctAnswer) {
      const newCorrectAnswers = new Set(correctAnswers);
      newCorrectAnswers.add(globalQuestionIndex);
      setCorrectAnswers(newCorrectAnswers);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < currentPageQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      setCurrentQuestionIndex(0);
      setSelectedAnswer(null);
      setShowResult(false);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      setCurrentQuestionIndex(questionsPerPage - 1);
      setSelectedAnswer(null);
      setShowResult(false);
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy": return "bg-green-100 text-green-800";
      case "Medium": return "bg-yellow-100 text-yellow-800";
      case "Hard": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getAnswerClass = (index: number) => {
    if (!showResult) {
      return selectedAnswer === index 
        ? "border-primary bg-primary/5 border-2" 
        : "answer-default";
    }

    if (index === currentQuestion.correctAnswer) {
      return "answer-correct";
    } else if (index === selectedAnswer && selectedAnswer !== currentQuestion.correctAnswer) {
      return "answer-incorrect";
    } else {
      return "border border-gray-200 bg-gray-50";
    }
  };

  const globalQuestionNumber = (currentPage - 1) * questionsPerPage + currentQuestionIndex + 1;

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container-educational py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Button variant="ghost" className="flex items-center space-x-2">
            <ArrowLeft className="w-4 h-4" />
            <span>{t('questions.backToBank')}</span>
          </Button>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Clock className="w-4 h-4" />
              <span>25:30</span>
            </div>
            <Button variant="outline" size="sm">
              <Flag className="w-4 h-4 mr-2" />
              {t('questions.flag')}
            </Button>
          </div>
        </div>

        {/* Page and Question Info */}
        <Card className="p-6 mb-8">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <BookOpen className="w-5 h-5 text-primary" />
              <span className="font-medium">Mathematics Mastery</span>
            </div>
            <div className="text-right">
              <div className="text-sm text-muted-foreground">
                {t('questions.page')} {currentPage} / {totalPages}
              </div>
              <div className="text-sm text-muted-foreground">
                {t('questions.questionOf').replace('{current}', globalQuestionNumber.toString()).replace('{total}', questions.length.toString())}
              </div>
            </div>
          </div>
          
          {/* Page Navigation */}
          <div className="flex items-center justify-between">
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                if (currentPage > 1) {
                  setCurrentPage(currentPage - 1);
                  setCurrentQuestionIndex(0);
                  setSelectedAnswer(null);
                  setShowResult(false);
                }
              }}
              disabled={currentPage === 1}
            >
              <ChevronLeft className="w-4 h-4 mr-1" />
              {t('questions.page')} {currentPage - 1}
            </Button>
            
            <div className="text-sm text-muted-foreground">
              {(currentPage - 1) * questionsPerPage + 1} - {Math.min(currentPage * questionsPerPage, questions.length)} of {questions.length}
            </div>
            
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                if (currentPage < totalPages) {
                  setCurrentPage(currentPage + 1);
                  setCurrentQuestionIndex(0);
                  setSelectedAnswer(null);
                  setShowResult(false);
                }
              }}
              disabled={currentPage === totalPages}
            >
              {t('questions.page')} {currentPage + 1}
              <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
        </Card>

        {/* Question */}
        <Card className="p-8 mb-8">
          <div className="flex items-start justify-between mb-6">
            <div className="flex-1">
              <div className="flex items-center space-x-3 mb-4">
                <Badge className={getDifficultyColor(currentQuestion.difficulty)}>
                  {t(`difficulty.${currentQuestion.difficulty.toLowerCase()}`)}
                </Badge>
                <Badge variant="outline">{currentQuestion.topic}</Badge>
              </div>
              <h2 className="text-2xl font-semibold text-gray-900 leading-relaxed">
                {currentQuestion.question}
              </h2>
            </div>
          </div>

          {/* Answer Options */}
          <div className="space-y-4 mb-8">
            {currentQuestion.options.map((option, index) => (
              <div
                key={index}
                className={`p-4 rounded-xl cursor-pointer transition-all duration-200 ${getAnswerClass(index)}`}
                onClick={() => handleAnswerSelect(index)}
              >
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-full border-2 border-current flex items-center justify-center font-medium">
                    {String.fromCharCode(65 + index)}
                  </div>
                  <span className="text-lg">{option}</span>
                  {showResult && index === currentQuestion.correctAnswer && (
                    <CheckCircle className="w-6 h-6 text-green-600 ml-auto" />
                  )}
                  {showResult && index === selectedAnswer && selectedAnswer !== currentQuestion.correctAnswer && (
                    <XCircle className="w-6 h-6 text-red-600 ml-auto" />
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Explanation */}
          {showResult && (
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-6 animate-fade-in-up">
              <h3 className="font-semibold text-blue-900 mb-2 flex items-center">
                <CheckCircle className="w-5 h-5 mr-2" />
                {t('questions.explanation')}
              </h3>
              <p className="text-blue-800 leading-relaxed">
                {currentQuestion.explanation}
              </p>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex items-center justify-between">
            <Button
              variant="outline"
              onClick={handlePreviousQuestion}
              disabled={currentPage === 1 && currentQuestionIndex === 0}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              {t('questions.previous')}
            </Button>

            <div className="flex space-x-3">
              {!showResult ? (
                <Button 
                  onClick={handleSubmitAnswer}
                  disabled={selectedAnswer === null}
                  className="btn-primary px-8"
                >
                  {t('questions.submitAnswer')}
                </Button>
              ) : (
                <>
                  <Button variant="outline" onClick={() => {
                    setShowResult(false);
                    setSelectedAnswer(null);
                  }}>
                    <RotateCcw className="w-4 h-4 mr-2" />
                    {t('questions.tryAgain')}
                  </Button>
                  {(currentQuestionIndex < currentPageQuestions.length - 1 || currentPage < totalPages) && (
                    <Button onClick={handleNextQuestion} className="btn-primary">
                      {t('questions.nextQuestion')}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  )}
                </>
              )}
            </div>
          </div>
        </Card>

        {/* Question Navigation for Current Page */}
        <Card className="p-6">
          <h3 className="font-medium mb-4">{t('questions.questionNavigation')}</h3>
          <div className="grid grid-cols-10 gap-2">
            {currentPageQuestions.map((_, index) => {
              const globalIndex = (currentPage - 1) * questionsPerPage + index;
              return (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentQuestionIndex(index);
                    setSelectedAnswer(null);
                    setShowResult(false);
                  }}
                  className={`w-10 h-10 rounded-lg font-medium transition-colors ${
                    index === currentQuestionIndex
                      ? "bg-primary text-white"
                      : answeredQuestions.has(globalIndex)
                      ? correctAnswers.has(globalIndex)
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {index + 1}
                </button>
              );
            })}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default QuestionInterface;
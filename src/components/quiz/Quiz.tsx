"use client";

import { useEffect, useState } from "react";

import { CircleQuestionMarkIcon } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { createClient } from "@/lib/supabase/client";

import { QuizWithQuestions } from "./types";

interface QuizProps {
  quizId: number | null;
}

export function Quiz({ quizId }: QuizProps) {
  const [quiz, setQuiz] = useState<QuizWithQuestions | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<
    Record<number, string>
  >({});
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    if (!quizId) {
      setLoading(false);
      return;
    }

    const fetchQuiz = async () => {
      try {
        const supabase = createClient();

        // Fetch quiz details
        const { data: quizData, error: quizError } = await supabase
          .from("quizzes")
          .select("*")
          .eq("id", quizId)
          .single();

        if (quizError) {
          throw new Error(`Failed to fetch quiz: ${quizError.message}`);
        }

        if (!quizData) {
          throw new Error("Quiz not found");
        }

        // Fetch questions with options
        const { data: questionsData, error: questionsError } = await supabase
          .from("quiz_questions")
          .select(
            `
            *,
            quiz_options (*)
          `,
          )
          .eq("quiz_id", quizId)
          .order("order_index", { ascending: true });

        if (questionsError) {
          throw new Error(
            `Failed to fetch questions: ${questionsError.message}`,
          );
        }

        // Transform the data to match our interface
        const questionsWithOptions =
          questionsData?.map((question) => ({
            ...question,
            options: question.quiz_options || [],
          })) || [];

        setQuiz({
          ...quizData,
          questions: questionsWithOptions,
        });
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchQuiz();
  }, [quizId]);

  const handleAnswerSelect = (questionId: number, optionKey: string) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionId]: optionKey,
    }));
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < (quiz?.questions.length || 0) - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      setShowResults(true);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
    }
  };

  const calculateScore = () => {
    if (!quiz) return 0;

    let correctAnswers = 0;
    quiz.questions.forEach((question) => {
      const selectedAnswer = selectedAnswers[question.id];
      if (selectedAnswer === question.correct_answer) {
        correctAnswers++;
      }
    });

    return correctAnswers;
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswers({});
    setShowResults(false);
  };

  if (loading) {
    return (
      <Card className="w-full">
        <CardHeader>
          <Skeleton className="h-6 w-3/4" />
          <Skeleton className="h-4 w-1/2" />
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
            <Skeleton className="h-4 w-4/6" />
          </div>
        </CardContent>
      </Card>
    );
  }

  if (error) {
    return (
      <Card className="w-full">
        <CardContent className="pt-6">
          <div className="text-center text-red-600">
            <p>Error loading quiz: {error}</p>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (!quiz) {
    return (
      <Card className="w-full">
        <CardContent className="pt-6">
          <div className="text-center text-muted-foreground">
            <p>No quiz available for this lesson.</p>
          </div>
        </CardContent>
      </Card>
    );
  }

  const currentQuestion = quiz.questions[currentQuestionIndex];
  const totalQuestions = quiz.questions.length;
  const score = calculateScore();

  if (showResults) {
    return (
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="text-center">Quiz Results</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="text-center">
            <div className="mb-2 text-4xl font-bold text-primary">
              {score}/{totalQuestions}
            </div>
            <p className="text-muted-foreground">
              You scored {Math.round((score / totalQuestions) * 100)}%
            </p>
          </div>

          <div className="space-y-4">
            {quiz.questions.map((question, index) => {
              const selectedAnswer = selectedAnswers[question.id];
              const isCorrect = selectedAnswer === question.correct_answer;

              return (
                <div key={question.id} className="rounded-lg border p-4">
                  <div className="mb-2 flex items-center gap-2">
                    <Badge variant={isCorrect ? "default" : "destructive"}>
                      {isCorrect ? "Correct" : "Incorrect"}
                    </Badge>
                    <span className="text-sm text-muted-foreground">
                      Question {index + 1}
                    </span>
                  </div>
                  <p className="mb-2 font-medium">{question.question}</p>
                  {question.reason && (
                    <p className="text-sm text-muted-foreground">
                      <strong>Giải thích:</strong> {question.reason}
                    </p>
                  )}
                </div>
              );
            })}
          </div>

          <div className="flex justify-center">
            <Button onClick={resetQuiz} variant="outline">
              Retake Quiz
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <>
      <div className="flex flex-col items-center">
        <div className="mb-4 flex h-[56px] w-[56px] items-center justify-center rounded-full bg-primary">
          <CircleQuestionMarkIcon className="size-8 text-gray-100" />
        </div>
        <h3 className="text-base">It’s time to take a quiz!</h3>
        <div className="md:max-w-auto w-[200px] text-center md:w-auto">
          {quiz.description && (
            <p className="pt-1 text-sm text-muted-foreground">
              {quiz.description}
            </p>
          )}
        </div>
      </div>
      <Card className="mt-5 w-full">
        <CardContent className="">
          <div>
            <h3 className="mb-4 text-center text-lg font-medium">
              {currentQuestion.question}
            </h3>
            <div className="space-y-2">
              {currentQuestion.options.map((option) => (
                <label
                  key={option.id}
                  className="flex cursor-pointer items-center space-x-3 rounded-lg border p-3 transition-colors hover:bg-muted/50"
                >
                  <input
                    type="radio"
                    name={`question-${currentQuestion.id}`}
                    value={option.option_key}
                    checked={
                      selectedAnswers[currentQuestion.id] === option.option_key
                    }
                    onChange={() =>
                      handleAnswerSelect(currentQuestion.id, option.option_key)
                    }
                    className="sr-only"
                  />
                  <div
                    className={`flex h-4 w-4 items-center justify-center rounded-full border-2 ${
                      selectedAnswers[currentQuestion.id] === option.option_key
                        ? "border-primary bg-primary"
                        : "border-muted-foreground"
                    }`}
                  >
                    {selectedAnswers[currentQuestion.id] ===
                      option.option_key && (
                      <div className="h-2 w-2 rounded-full bg-primary-foreground" />
                    )}
                  </div>
                  <span className="flex-1">{option.text}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="mt-5 flex justify-between">
            <Button
              variant="outline"
              onClick={handlePreviousQuestion}
              disabled={currentQuestionIndex === 0}
            >
              Previous
            </Button>
            <Button
              onClick={handleNextQuestion}
              disabled={!selectedAnswers[currentQuestion.id]}
            >
              {currentQuestionIndex === totalQuestions - 1 ? "Finish" : "Next"}
            </Button>
          </div>
        </CardContent>
      </Card>
    </>
  );
}

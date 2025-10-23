export interface Quiz {
  id: number;
  title: string;
  description: string | null;
  created_at: string;
}

export interface QuizQuestion {
  id: number;
  quiz_id: number;
  question: string;
  correct_answer: string;
  reason: string | null;
  order_index: number | null;
}

export interface QuizOption {
  id: number;
  question_id: number;
  option_key: string;
  text: string;
}

export interface QuizQuestionWithOptions extends QuizQuestion {
  options: QuizOption[];
}

export interface QuizWithQuestions extends Quiz {
  questions: QuizQuestionWithOptions[];
}

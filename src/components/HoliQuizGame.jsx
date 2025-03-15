import { useState } from "react";
import { questions } from "../data/qus";

export default function HoliQuizGame() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const checkAnswer = (answer) => {
    if (answer === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gradient-to-r from-pink-500 via-yellow-400 to-green-500">
      <div className="w-full max-w-lg p-6 bg-white rounded-lg shadow-lg">
        <h1 className="mb-4 text-2xl font-bold text-center">Holi Quiz Game</h1>
        {showScore ? (
          <h2 className="text-xl font-semibold text-center">
            आपका स्कोर: {score}/10
          </h2>
        ) : (
          <div>
            <h2 className="mb-4 text-lg font-medium">
              {questions[currentQuestion].q}
            </h2>
            <div className="flex flex-col space-y-2">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  className="px-4 py-2 text-white transition bg-blue-500 rounded-lg hover:bg-blue-600"
                  onClick={() => checkAnswer(option)}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

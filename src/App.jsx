
import { useState, useEffect } from "react";
import "./App.css";
import quizData from "./quizeData";
import Question from "../components/Question";
import StarSky from "../components/SratSky";
import Result from "../components/Result";

function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const currentQuestion = quizData[currentQuestionIndex];
  const [userAnswers, setUserAnswers] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleNextQuestion = (selectedAnswerIndex) => {
    const isCorrect = selectedAnswerIndex === currentQuestion.correct;
    setUserAnswers((prev) => [...prev, isCorrect]);
    setCurrentQuestionIndex((prev) => Math.min(quizData.length, prev + 1));
  };

  const calculateScore = () => {
    return userAnswers.filter((answer) => answer).length;
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setUserAnswers([]);
  };

  return (
    <div className="wrapper">
      <StarSky /> {/* background stars */}
      {/* main quiz container */}
      <h2 className="title">Big O </h2>
      <div className="quiz-container">
        <header className="header">
          <div className="logo">Logo</div>
          <button onClick={toggleTheme}>Toggle Theme</button>
          <div className="score">
            {currentQuestionIndex + 1} / {quizData.length}
          </div>
          <h5>Display score</h5>
          <div className="score">
            {calculateScore()} / {quizData.length}
          </div>
        </header>
        <main>
          {currentQuestionIndex < quizData.length ? (
            <Question
              code={currentQuestion.code}
              language={currentQuestion.language}
              answers={currentQuestion.answers}
              onAnswerClick={handleNextQuestion}
            />
          ) : (
            <Result
              userAnswers={userAnswers}
              resetQuiz={resetQuiz}
            />
          )}
        </main>
      </div>
    </div>
  );
}

export default App;
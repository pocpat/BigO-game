import { useState, useEffect } from "react";
import "./App.css";
import "./toggle.css";
import quizData from "./quizeData";
import Question from "../components/Question";
import StarSky from "../components/SratSky";
import Result from "../components/Result";
import ProgressBar from "../components/ProgressBar";
import Welcome from "../components/Welcome";

function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const currentQuestion = quizData[currentQuestionIndex];
  const [userAnswers, setUserAnswers] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [mode, setMode] = useState(null); // Track the selected mode
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(false); // Track if the answer is correct
  const progress = (currentQuestionIndex / quizData.length) * 100;

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

    if (mode === "normal" || isCorrect) {
      setCurrentQuestionIndex((prev) => Math.min(quizData.length, prev + 1));
      setIsAnswerCorrect(false); // Reset answer correctness for the next question
    } else {
      setIsAnswerCorrect(true); // Indicate that the answer is correct
    }
  };

  const calculateScore = () => {
    return userAnswers.filter((answer) => answer).length;
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setUserAnswers([]);
    setIsAnswerCorrect(false); // Reset answer correctness

    
  };

  const handleSelectMode = (selectedMode) => {
    setMode(selectedMode);
    resetQuiz(); // Reset quiz when mode changes
  };

  if (!mode) {
    return <Welcome onSelectMode={handleSelectMode} />;
  }

  return (
    <div className="wrapper">
      <StarSky /> {/* background stars */}
      {/* main quiz container */}
      <h2 className="title">Big O Notation Quiz</h2>
      <div className="quiz-container">
        <header className="header">
          <div>
            <img className="logo" src="../public/ekLogo.png" alt="logo" />
          </div>
          <div className="score">
            {calculateScore()} / {quizData.length}
          </div>

          {/* new toggle button */}
          <input type="checkbox" id="darkmode-toggle" />
          <label htmlFor="darkmode-toggle" onClick={toggleTheme}>
            <svg
              className="moon"
              width="20px"
              height="20px"
              viewBox="0 -0.5 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7.50009 12.0008C7.49604 10.6271 7.87712 9.2798 8.60009 8.11177C9.30106 6.97733 10.3262 6.07929 11.5431 5.53377C12.7306 5.00425 14.0552 4.86422 15.3271 5.13377L15.5091 5.17577C14.7053 5.71232 14.0258 6.41473 13.5161 7.23577C12.7931 8.4038 12.412 9.7511 12.4161 11.1248C12.4068 12.9579 13.0921 14.7265 14.3341 16.0748C15.1848 16.9942 16.285 17.6458 17.5001 17.9498C16.4784 18.6323 15.2778 18.9979 14.0491 19.0008C12.2877 18.9902 10.6101 18.2475 9.41809 16.9508C8.17612 15.6025 7.49083 13.8339 7.50009 12.0008Z"
                stroke="#000000"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <svg
              className="sun"
              width="15px"
              height="15px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11 1C11 0.447715 11.4477 0 12 0C12.5523 0 13 0.447715 13 1V3C13 3.55228 12.5523 4 12 4C11.4477 4 11 3.55228 11 3V1Z"
                fill="#0F0F0F"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18 12C18 15.3137 15.3137 18 12 18C8.68629 18 6 15.3137 6 12C6 8.68629 8.68629 6 12 6C15.3137 6 18 8.68629 18 12ZM8.06167 12C8.06167 14.1751 9.82492 15.9383 12 15.9383C14.1751 15.9383 15.9383 14.1751 15.9383 12C15.9383 9.82492 14.1751 8.06167 12 8.06167C9.82492 8.06167 8.06167 9.82492 8.06167 12Z"
                fill="#0F0F0F"
              />
              <path
                d="M20.4853 3.51472C20.0947 3.12419 19.4616 3.12419 19.0711 3.51472L17.6568 4.92893C17.2663 5.31946 17.2663 5.95262 17.6568 6.34315C18.0474 6.73367 18.6805 6.73367 19.0711 6.34315L20.4853 4.92893C20.8758 4.53841 20.8758 3.90524 20.4853 3.51472Z"
                fill="#0F0F0F"
              />
              <path
                d="M1 13C0.447715 13 0 12.5523 0 12C0 11.4477 0.447715 11 1 11H3C3.55228 11 4 11.4477 4 12C4 12.5523 3.55228 13 3 13H1Z"
                fill="#0F0F0F"
              />
              <path
                d="M3.51472 3.51472C3.1242 3.90524 3.1242 4.53841 3.51472 4.92893L4.92894 6.34315C5.31946 6.73367 5.95263 6.73367 6.34315 6.34315C6.73368 5.95262 6.73368 5.31946 6.34315 4.92893L4.92894 3.51472C4.53841 3.12419 3.90525 3.12419 3.51472 3.51472Z"
                fill="#0F0F0F"
              />
              <path
                d="M11 21C11 20.4477 11.4477 20 12 20C12.5523 20 13 20.4477 13 21V23C13 23.5523 12.5523 24 12 24C11.4477 24 11 23.5523 11 23V21Z"
                fill="#0F0F0F"
              />
              <path
                d="M6.34315 17.6569C5.95263 17.2663 5.31946 17.2663 4.92894 17.6569L3.51473 19.0711C3.1242 19.4616 3.1242 20.0948 3.51473 20.4853C3.90525 20.8758 4.53842 20.8758 4.92894 20.4853L6.34315 19.0711C6.73368 18.6805 6.73368 18.0474 6.34315 17.6569Z"
                fill="#0F0F0F"
              />
              <path
                d="M21 13C20.4477 13 20 12.5523 20 12C20 11.4477 20.4477 11 21 11H23C23.5523 11 24 11.4477 24 12C24 12.5523 23.5523 13 23 13H21Z"
                fill="#0F0F0F"
              />
              <path
                d="M17.6568 17.6569C17.2663 18.0474 17.2663 18.6805 17.6568 19.0711L19.0711 20.4853C19.4616 20.8758 20.0947 20.8758 20.4853 20.4853C20.8758 20.0948 20.8758 19.4616 20.4853 19.0711L19.0711 17.6569C18.6805 17.2663 18.0474 17.2663 17.6568 17.6569Z"
                fill="#0F0F0F"
              />
            </svg>
          </label>
        </header>
        <main>
        {currentQuestionIndex < quizData.length ? (
          <Question
            code={currentQuestion.code}
            language={currentQuestion.language}
            answers={currentQuestion.answers}
            onAnswerClick={handleNextQuestion}
            correctAnswerIndex={currentQuestion.correct}
          />
        ) : (
          mode === "normal" ? (
            <div>
            <Result userAnswers={userAnswers} resetQuiz={resetQuiz} />
            <button onClick={() => setMode(null)}>Back to Welcome</button>
          </div>
            
            
          ) : (
            <div className="greeting">
              <h2>Yey, you did it!</h2>
              <button onClick={resetQuiz}>Play Again</button>
              <button onClick={() => setMode(null)}>Back to Welcome</button>
            </div>
          )
        )}
        <footer className="footer">
          <ProgressBar progress={progress} />
        </footer>
        </main>
      </div>
    </div>
  );
}

export default App;




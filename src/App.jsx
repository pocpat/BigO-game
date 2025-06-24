import { useState, useEffect } from "react";
import "./App.css";
import "./toggle.css";
import quizData from "./quizData.json";
import loadable from '@loadable/component';

// Keep dynamic imports for larger components that benefit from code splitting
const Result = loadable(() => import("../components/Result"));
const Question = loadable(() => import("../components/Question"));
const StarSky = loadable(() => import("../components/StarSky"));
const ProgressBar = loadable(() => import("../components/ProgressBar"));
const Welcome = loadable(() => import("../components/Welcome"));

// Import smaller components directly to avoid unnecessary overhead
import ToggleButton from "../components/ToggleButton";
import HomeButton from "../components/HomeButton";
import FooterCredits from "../components/Footer";

function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const currentQuestion = quizData[currentQuestionIndex];
  const [userAnswers, setUserAnswers] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [mode, setMode] = useState(null); 
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

  const handleNextQuestion = (isCorrect) => {
    setUserAnswers((prev) => [...prev, isCorrect]);

    // In normal mode, always advance to next question
    // In training mode, only advance if answer is correct
    if (mode === "normal" || isCorrect) {
      setCurrentQuestionIndex((prev) => Math.min(quizData.length, prev + 1));
    }
    // If in training mode and answer is incorrect, stay on current question
  };

  const calculateScore = () => {
    return userAnswers.filter((answer) => answer).length;
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setUserAnswers([]);
  };

  const handleSelectMode = (selectedMode) => {
    setMode(selectedMode);
    resetQuiz(); // Reset quiz when mode changes
  };

  if (!mode) {
    return <Welcome onSelectMode={handleSelectMode} isDarkMode={isDarkMode} toggleTheme={toggleTheme} />;
  }

  const handleLogoClick = () => {
    setMode(null); //set mode to null to show welcome page
  };

  return (
    <div className="wrapper">
      <StarSky /> {/* background stars */}
      {/* main quiz container */}
      <h2 className="title">Big O Notation</h2>
      <div className="quiz-container">
        <header className="header">
          <div onClick={handleLogoClick} title="home">
            <HomeButton />
          </div>
          <div className="score">
          {mode === "normal" && `${calculateScore()} / ${quizData.length}`}
          </div>
          <ToggleButton isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
        </header>
        <main>
        {currentQuestionIndex < quizData.length ? (
          <Question
            code={currentQuestion.code}
            questionText={currentQuestion.questionText}
            language={currentQuestion.language}
            answers={currentQuestion.answers}
            onAnswerClick={handleNextQuestion}
            correctAnswerIndex={currentQuestion.correct}
          />
        ) : (
           mode === "normal" ? (
            <div>
            <Result userAnswers={userAnswers} resetQuiz={resetQuiz} totalQuestions={quizData.length} />
            <div className="restarts greeting">
            <button className="restarts greeting" onClick={() => setMode(null)}>Back to Home</button>
            </div>
          </div>
          ) : (
            <div className="restarts greeting">
              <h2 className="center-text">Yey, you did it!</h2>
              <button onClick={resetQuiz}>Play Again</button>
              <button onClick={() => setMode(null)}>Back to Home</button>
            </div>
          )
        )}
        <footer className="footer">
          <ProgressBar progress={progress} />
          <FooterCredits />
        </footer>
        </main>
      </div>
    </div>
  );
}

export default App;
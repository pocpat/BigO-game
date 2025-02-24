



import { useState, useEffect } from "react";
import "./App.css";
import "./toggle.css";
import quizData from "./quizData.json";
import loadable from '@loadable/component';

// Dynamically import the Result component
const Result = loadable(() => import("../components/Result"));
const Question = loadable(() => import("../components/Question"));
const StarSky = loadable(() => import("../components/StarSky"));
const ProgressBar = loadable(() => import("../components/ProgressBar"));
const Welcome = loadable(() => import("../components/Welcome"));
const ToggleButton = loadable(() => import("../components/ToggleButton"));
const HomeButton = loadable(() => import("../components/HomeButton"));
const FooterCredits = loadable(() => import("../components/Footer"));

function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const currentQuestion = quizData[currentQuestionIndex];
  const [userAnswers, setUserAnswers] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [mode, setMode] = useState(null); 
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(false); 
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

    if (mode === "normal" || isCorrect) {
      setCurrentQuestionIndex((prev) => Math.min(quizData.length, prev + 1));
      setIsAnswerCorrect(false); 
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
           {/* Use the ToggleButton component */}
           
          <ToggleButton isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
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
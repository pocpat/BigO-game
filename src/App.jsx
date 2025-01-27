import { useState, useEffect } from "react";
import "./App.css";
import quizData from "./quizeData";
import Question from "../components/Question";
import StarSky from "../components/SratSky";

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
    setCurrentQuestionIndex((prev) => Math.min(quizData.length - 1, prev + 1));
  };
  const calculateScore = () => {
    return userAnswers.filter(answer => answer).length;
};
  return (
    <div className="wrapper">
      <StarSky /> {/* background stars */}
      {/* main quiz container */}
      <div className="quiz-container">
        <h2 className="title">Big O Notation</h2>
        <header className="header">
          <div className="logo">Logo</div>
          <button onClick={toggleTheme}>Toggle Theme</button>
          <div className="score">{currentQuestionIndex+1} / {quizData.length}</div>
          <h5>Display score</h5>
          <div className="score">{calculateScore()} / {quizData.length}</div>
        </header>
        <main>
         {/* question area */}
          <Question
            code={currentQuestion.code}
            language={currentQuestion.language}
            answers={currentQuestion.answers}
            onAnswerClick={handleNextQuestion}
          />
          <footer className="footer">
          <button
            onClick={() =>
              setCurrentQuestionIndex((prev) => Math.max(0, prev - 1))
            }
          >
            Prev
          </button>
          <button
            onClick={() =>
              setCurrentQuestionIndex((prev) =>
                Math.min(quizData.length - 1, prev + 1)
              )
            }
          >
            Next
          </button>
        </footer>
        </main>
       
      </div>
    </div>
  );
}

export default App;



// {currentQuestionIndex === quizData.length && (
//   <div className="results">
//       <h2>Quiz Finished!</h2>
//       <p>You scored {calculateScore()} out of {quizData.length}.</p>
//       <ul>
//           {userAnswers.map((isCorrect, index) => (
//               <li key={index}>
//                   Question {index + 1}: {isCorrect ? "Correct" : "Incorrect"}
//               </li>
//           ))}
//       </ul>
//   </div>
// )}
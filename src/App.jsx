import "./App.css";
import React, { useState, useEffect } from "react";
// import PropTypes from "prop-types";
//import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"; // Correct import
// import { prism } from "react-syntax-highlighter/dist/esm/styles/prism";
import Question from "../components/Question";



import StarSky from "../components/SratSky";



const quizData = [
  {
    code: `function myFunction(n) {
          for (let i = 0; i < n; i++) {
            console.log(i);
          }
        }`,
    language: "javascript",
    answers: ["O(1)", "O(n)", "O(n^2)"],
    correct: 1,
  },
  {
    code: `function anotherFunction(n) {
          for (let i = 0; i < n; i++) {
              for(let j = 0; j < n; j++){
                  console.log(i + j);
              }
          }
        }`,
    language: "javascript",
    answers: ["O(1)", "O(n)", "O(n^2)"],
    correct: 2,
  },
];

function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = React.useState(0);
  const currentQuestion = quizData[currentQuestionIndex];

  console.log("currentQuestion:", currentQuestion); // Log the current question object
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

 
  return (
    <div className="wrapper">
    <StarSky />
      <div className="quiz-container">
      <h2 className="title">Big O Notation</h2>
        <header className="header">
    
          <div className="logo">Logo</div>
         
          <button onClick={toggleTheme}>Toggle Theme</button>

          <div className="score">0 / {quizData.length}</div>
        </header>
        <main>
        <StarSky />
          <Question
            code={currentQuestion.code}
            language={currentQuestion.language}
            answers={currentQuestion.answers}
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

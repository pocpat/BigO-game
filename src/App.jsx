import "./App.css";
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"; // Correct import
import { prism } from "react-syntax-highlighter/dist/esm/styles/prism";

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
const CodeSnippet = ({ code, language }) => {
  return (
    <SyntaxHighlighter language={language} style={prism} wrapLongLines={true}>
      {code}
    </SyntaxHighlighter>
  );
};

CodeSnippet.propTypes = {
  code: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired,
};
App.propTypes = {
  questions: PropTypes.arrayOf(PropTypes.object).isRequired,
  onAnswer: PropTypes.func.isRequired,
};

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
      <div className="quiz-container">
        <header className="header">
          <div className="logo">Logo</div>
          <button onClick={toggleTheme}>Toggle Theme</button>

          <div className="score">0 / {quizData.length}</div>
        </header>
        <main className="question-area">
          <div className="code-snippet">
            <CodeSnippet
              code={currentQuestion.code}
              language={currentQuestion.language}
            />
          </div>
          <div className="answer-options">
            {currentQuestion.answers.map((answer, index) => (
              <button key={index}>{answer}</button>
            ))}
          </div>
        </main>
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
      </div>
    </div>
  );
}

export default App;

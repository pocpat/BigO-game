import React, { useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/esm/styles/prism";

const Question = ({ code, questionText, language, answers, correctAnswerIndex, onAnswerClick = () => {} }) => {
  const [selectedAnswerIndex, setSelectedAnswerIndex] = React.useState(null);
  const [isCorrect, setIsCorrect] = React.useState(null);

  // Function to shuffle array
  const shuffleArray = (array) => {
    return array
      .map((value, index) => ({ value, index })) // Store original index
      .sort(() => Math.random() - 0.5) // Shuffle
      .map(({ value, index }) => ({ value, index })); // Extract shuffled values with original index
  };

  // Memoized shuffled answers and correct answer index
  const { shuffledAnswers, newCorrectIndex } = useMemo(() => {
    const shuffled = shuffleArray(answers);
    const newIndex = shuffled.findIndex(({ index }) => index === correctAnswerIndex); // Find new correct index
    return { shuffledAnswers: shuffled, newCorrectIndex: newIndex };
  }, [answers, correctAnswerIndex]);

  const handleAnswerClick = (index) => {
    setSelectedAnswerIndex(index);
    onAnswerClick(shuffledAnswers[index].index === correctAnswerIndex); // Pass answer check result
    setIsCorrect(shuffledAnswers[index].index === correctAnswerIndex);
  };

  useEffect(() => {
    if (selectedAnswerIndex !== null) {
      const timeoutId = setTimeout(() => {
        setIsCorrect(null); // Reset correctness state after delay
        setSelectedAnswerIndex(null); // Reset selected answer state
      }, 500);

      return () => clearTimeout(timeoutId); // Cleanup function to clear timeout on unmount
    }
  }, [selectedAnswerIndex]);

  return (
    <div>
      {/* Conditionally render either code snippet or question text */}
      {code ? (
        <div className="code-snippet">
          <SyntaxHighlighter language={language} style={prism} wrapLongLines={true}>
            {code}
          </SyntaxHighlighter>
        </div>
      ) : questionText ? (
        <div className="question-text">
          <p>{questionText}</p>
        </div>
      ) : null}
      
      <div className="answer-options">
        {shuffledAnswers.map(({ value }, index) => (
          <button
            key={index}
            className={`answer-button ${
              selectedAnswerIndex === index
                ? isCorrect
                  ? "correct"
                  : "incorrect"
                : ""
            }`}
            onClick={() => handleAnswerClick(index)}
          >
            {value}
          </button>
        ))}
      </div>
    </div>
  );
};

Question.propTypes = {
  code: PropTypes.string,
  questionText: PropTypes.string,
  language: PropTypes.string.isRequired,
  answers: PropTypes.arrayOf(PropTypes.string).isRequired,
  onAnswerClick: PropTypes.func.isRequired,
  correctAnswerIndex: PropTypes.number.isRequired,
};

export default Question;